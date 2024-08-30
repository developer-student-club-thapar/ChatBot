import React, { useState,useEffect } from 'react';
import axios from 'axios';
import { auth } from './firebase';
import './footerForm.css';

function FooterForm() {
    const [prompt, setPrompt] = useState('');
    const [characterCount, setCharacterCount] = useState(0);
    const [userId, setUserId] = useState(null);


    useEffect(() => {
        // Get the currently authenticated user
        const unsubscribe = auth.onAuthStateChanged((user) => {
            if (user) {
                setUserId(user.uid);  // Set the user ID
            } else {
                console.log("No user is signed in.");
                alert("Sign in to use Chatbot")
            }
        });

        // Clean up the subscription
        return () => unsubscribe();
    }, []);



    const handleInputChange = (event) => {
        setPrompt(event.target.value);
        setCharacterCount(event.target.value.length);
    };
   

    const handleSendClick = async () => {
        if (!userId) {
            console.error('User is not authenticated.');
            return;
        }

        try {
            // Make a POST request to the FastAPI backend
            const response = await axios.post('http://localhost:8000/chat', {
                user_id: userId,                                          // Use the Firebase user ID
                message: prompt,
            });

            // Handle the response from FastAPI
            console.log('AI Response:', response.data.response);
            // You can update the UI with the AI response here
        } catch (error) {
            console.error('Error sending prompt:', error);
        }
    };


    return (
        <div className="footer-form">
            <input 
                type="text" 
                placeholder="Write your prompt" 
                className="footer-input"
                value={prompt}
                onChange={handleInputChange}
            />
            <button className="send-button" onClick={handleSendClick}>
                <svg 
                    xmlns="http://www.w3.org/2000/svg" 
                    viewBox="0 0 24 24" 
                    fill="none" 
                    stroke="currentColor" 
                    strokeWidth="2" 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                    className="feather feather-send"
                >
                    <line x1="22" y1="2" x2="11" y2="13"></line>
                    <polygon points="22 2 15 22 11 13 2 9 22 2"></polygon>
                </svg>
            </button>
            <button className="browse-button">
                Browse Prompts
            </button>
            <span className="character-count">{characterCount} / 3000</span>
            <div className="footer-text">
                Chatbot can make mistakes. Check important info.
            </div>
        </div>
    );
}

export default FooterForm;
