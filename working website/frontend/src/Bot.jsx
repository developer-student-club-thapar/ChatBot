import { useEffect, useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ScrollArea } from "@radix-ui/react-scroll-area";
import axios from "axios";
import { MessageSquare, Send } from 'lucide-react';
import logo from "@/assets/logo.svg";

export const Bot = () => {
    const [input, setInput] = useState('');
    const [messages, setMessages] = useState([]);
    const [loading, setLoading] = useState(false); // loading state for typing indicator
    const scrollAreaRef = useRef(null);

    const inputLength = input.length;

    useEffect(() => {
        document.title = "Chatbot - GDSC Thapar";
        document.favicon = logo;
    }, []);

    useEffect(() => {
        if (scrollAreaRef.current) {
            scrollAreaRef.current.scrollTop = scrollAreaRef.current.scrollHeight;
        }
    }, [messages, loading]);

    const handleClick = async () => {
        if (!input.trim()) return;

        const userMessage = { type: 'user', content: input, timestamp: new Date() };
        setMessages((prev) => [...prev, userMessage]);

        setInput('');
        setLoading(true); // Start loading indicator

        try {
            const resp = await axios.post('http://127.0.0.1:5000/message', {
                user_id: 1,
                message: input,
            });

            // Format the response text
            const botMessage = { 
                type: 'bot', 
                content: formatMessage(resp.data.response), // Apply formatting here
                timestamp: new Date() 
            };
            setMessages((prev) => [...prev, botMessage]);
        } catch (err) {
            console.error(err);
            const errorMessage = { type: 'bot', content: "Sorry, I couldn't process your request.", timestamp: new Date() };
            setMessages((prev) => [...prev, errorMessage]);
        } finally {
            setLoading(false); // Stop loading indicator
        }
    };

    // Function to format the response message (you can extend this)
    const formatMessage = (message) => {
        // Replace line breaks with <br /> for proper display
        message = message.replace(/\n/g, "<br />");

        // Example of formatting bold text (we'll use a simple regex)
        message = message.replace(/\*\*(.*?)\*\*/g, "<strong class='text-lg'>$1</strong>");

        // Example of formatting italic text
        message = message.replace(/\*(.*?)\*/g, "<em>$1</em>");

        // Replace bullet points with list items
        message = message.replace(/^-\s(.+)/gm, "<ul><li>$1</li></ul>");

        return message;
    };

    const formatTime = (date) => {
        return date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
    };

    return (
        <div className="min-h-screen max-h-screen flex">
            {/* Sidebar */}
            <aside className="w-32 border-r bg-background">
                <div className="p-4 space-y-4">
                    <div className="flex items-center gap-2">
                        <div className="h-8 w-8 rounded bg-gradient-to-br from-blue-500 to-green-500" />
                        <span className="font-semibold">GDSC Bot</span>
                    </div>
                    <Button variant="ghost" className="w-full justify-start gap-2">
                        <MessageSquare className="h-4 w-4" />
                        Chat
                    </Button>
                </div>
                
            </aside>

            {/* Main Content */}
            <main className="flex-1 flex flex-col">
                <header className="border-b">
                    <div className="flex items-center justify-between p-4">
                        <h1 className="text-xl font-semibold">Chatbot</h1>
                        <div className="flex items-center gap-4">
                            <Button variant="outline">Developed by GDSC Thapar</Button>
                            <Button variant="default">Logout</Button>
                        </div>
                    </div>
                </header>

                {/* Main Content Area */}
                <div className="flex-grow flex flex-col items-center p-6">
                    {/* <div className="text-center space-y-4 max-w-2xl">
                        <h2 className="text-2xl font-bold">GDSC Bot</h2>
                        <p className="text-muted-foreground">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud.
                        </p>
                    </div> */}

                    {/* Chat Area */}
                    <ScrollArea className="flex-grow mt-6 font w-full overflow-y-auto max-h-[calc(100vh-250px)]" ref={scrollAreaRef}>
                        <div className="space-y-4 p-4">
                            {messages.map((message, index) => (
                                <div key={index} className={`flex ${message.type === 'user' ? 'justify-end' : 'justify-start'}`}>
                                    <div className={`max-w-[70%] ${message.type === 'user' ? 'bg-blue-500 text-white' : 'bg-white dark:bg-gray-700'} rounded-lg p-3 shadow`}>
                                        <p className="text-md" dangerouslySetInnerHTML={{ __html: message.content }} />
                                        <p className={`text-xs mt-1 ${message.type === 'user' ? 'text-blue-100' : 'text-gray-500 dark:text-gray-400'}`}>
                                            {formatTime(message.timestamp)}
                                        </p>
                                    </div>
                                </div>
                            ))}
                            {loading && (
                                <div className="flex justify-start">
                                    <div className="max-w-[70%] bg-white dark:bg-gray-700 rounded-lg p-3 shadow">
                                        <p className="text-sm italic font-bold text-gray-500">Bot is typing...</p>
                                    </div>
                                </div>
                            )}
                        </div>
                    </ScrollArea>
                </div>

                {/* Input Area at the Bottom */}
                <div className="border-t p-4">
                    <div className="relative max-w-3xl mx-auto">
                        <Input
                            placeholder="Write your prompt"
                            className="pr-10"
                            value={input}
                            onChange={(e) => setInput(e.target.value)}
                            onKeyDown={(e) => {
                                if (e.key === "Enter") {
                                    handleClick();
                                }
                            }}
                        />
                        <Button size="icon" className="absolute right-2 top-0 bg-transparent shadow-none hover:bg-transparent" onClick={handleClick}>
                            <Send className="text-black" />
                            <span className="sr-only">Send message</span>
                        </Button>
                    </div>
                    <div className="flex justify-between text-sm text-muted-foreground px-2 mt-1">
                        <span>{inputLength} / 3000</span>
                        <span>Chatbot can make mistakes. Check important info.</span>
                    </div>
                </div>
            </main>
        </div>
    );
};
