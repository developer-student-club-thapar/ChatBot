import React from 'react';
import './FooterForm.css';

function FooterForm() {
    return (
        <div className="footer-form">
            <input 
                type="text" 
                placeholder="Write your prompt" 
                className="footer-input"
            />
            <button className="send-button">
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
            <span className="character-count">17 / 3000</span>
            <div className="footer-text">
                Chatbot can make mistakes. Check important info.
            </div>
        </div>
    );
}

export default FooterForm;
