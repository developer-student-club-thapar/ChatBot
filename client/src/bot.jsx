import React, { useState,useEffect } from 'react';
import FooterForm from './FooterForm';
import Sidebar from './Sidebar';
import Header from './Header';
import Dock from './Dock';
import './Bot.css';
import { auth } from './firebase';

export default function Bot() {
  const [messages, setMessages] = useState([]);
  const [userName, setUserName] = useState('');
  const [userEmail, setUserEmail] = useState('');


  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (user) {
        setUserName(user.displayName || 'User'); // Use displayName or a fallback
        setUserEmail(user.email);
      } else {
        console.log('No user is signed in.');
        alert('Sign in to use Chatbot');
      }
    });

    return () => unsubscribe();
  }, []);

  // Function to start the conversation
  const startConversation = () => {
    // Just add an empty message to trigger the view change in Dock
    setMessages(prevMessages => [...prevMessages]);
  };

  const handleNewMessage = (newMessage) => {
    setMessages(prevMessages => [...prevMessages, newMessage]);
    startConversation(); // Start the conversation after the first prompt
  };

  return (
    <div className="mainPg">
      <Header />
      <Sidebar userName={userName} userEmail={userEmail} />
      <Dock messages={messages} handleNewMessage={handleNewMessage} />
      <FooterForm onNewMessage={handleNewMessage} />
    </div>
  );
}
