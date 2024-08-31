import React, { useState } from 'react';
import './Dock.css';

function Dock({ messages, handleNewMessage }) { // Update prop name to match

  const handleClick = (prompt) => {
    handleNewMessage({ role: 'user', text: prompt }); // Send user prompt
  };

  return (
    <div className="bigContainer">
      <div className="chatbot-container">
        {/* Initial Header and Options (Hidden after conversation starts) */}
        <div className={`chatbot-header ${messages.length > 0 ? 'hidden' : ''}`}>
          <h1>Chatbot Name</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.   
 Ut enim ad
            minim veniam, quis nostrud.
          </p>
        </div>

        <div className={`chatbot-options   
 ${messages.length > 0 ? 'hidden' : ''}`}>
          <button onClick={() => handleClick('Where can I find some good Pizza?')}>
            <a>
              <div className="icon green-icon">🟢</div>
              <div className="option-content">
                <h4 id="optTitle">Campus Info</h4>
                <h4>Where can I find some good Pizza?</h4>
              </div>
            </a>
          </button>
          <button onClick={() => handleClick('What is the Syllabus of Mathematics-II?')}>
            <a>
              <div className="icon yellow-icon">🟡</div>
              <div className="option-content">
                <h4 id="optTitle">Curriculum Info</h4>
                <h4>What is the Syllabus of Mathematics-II?</h4>
              </div>
            </a>
          </button>
          <button onClick={() => handleClick('Name a few Tech societies at TIET')}>
            <a>
              <div className="icon red-icon"></div>
              <div className="option-content">
                <h4 id="optTitle">Societies Info</h4>
                <h4>Name a few Tech societies at TIET</h4>
              </div>
            </a>
          </button>
          <button onClick={() => handleClick('Best Places to hangout')}>
            <a>
              <div className="icon blue-icon"></div>
              <div className="option-content">
                <h4 id="optTitle">Patiala Info</h4>
                <h4>Best Places to hangout</h4>
              </div>
            </a>
          </button>
        </div>

        {/* Conversation Container */}
        <div className={`conversation-container ${messages.length > 0 ? 'active' : ''}`}>
          {messages.map((msg, index) => (
            <div key={index} className={`message ${msg.role}`}>
              <div className="message-content">{msg.text}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Dock;