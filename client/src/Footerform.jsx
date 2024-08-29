import React from 'react';
import './FooterForm.css';

function FooterForm() {
    return (
        <div className="footer-form">
            <input 
                type="text" 
                placeholder="Write your prompt" 
                className="footer-input"
            >
            </input>
            <button className="send-button">
                    <img src="https://cdn-icons-png.flaticon.com/512/876/876828.png">
                    </img>
                </button>
            
            <div className="footer-text">
                Chatbot can make mistakes. Check important info.
            </div>
        </div>
    );
}

export default FooterForm;
