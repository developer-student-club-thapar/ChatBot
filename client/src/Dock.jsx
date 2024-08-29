import React from 'react';
import './Dock.css';

function Dock() {
  return (
    <div className="chatbot-container">
      <div className="chatbot-header">
        <h1>Chatbot Name</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud.</p>
      </div>
      <div className="chatbot-options">
        <div className="option-card">
          <div className="icon green-icon">🟢</div>
          <div className="option-content">
            <h3>Campus Info</h3>
            <p>Where can I find some good Pizza?</p>
          </div>
        </div>
        <div className="option-card">
          <div className="icon yellow-icon">🟡</div>
          <div className="option-content">
            <h3>Curriculum Info</h3>
            <p>What is the Syllabus of Mathematics-II?</p>
          </div>
        </div>
        <div className="option-card">
          <div className="icon red-icon">🔴</div>
          <div className="option-content">
            <h3>Societies Info</h3>
            <p>Name a few Tech societies at TIET</p>
          </div>
        </div>
        <div className="option-card">
          <div className="icon blue-icon">🔵</div>
          <div className="option-content">
            <h3>Patiala Info</h3>
            <p>Best Places to hangout</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dock;
