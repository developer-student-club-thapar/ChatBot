import React from 'react';
import './Dock.css';

function Dock() {
  return (
    <div className="bigContainer">
      <div className="chatbot-container">
        <br />
        <br />
        <br />
        <div className="chatbot-header">
          <h1>Chatbot Name</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud.
          </p>
        </div>
        <div className="chatbot-options">
          <button>
            <a>
              <div className="icon green-icon">🟢</div>
              <div className="option-content">
                <h4 id="optTitle">Campus Info</h4>
                <h4>Where can I find some good Pizza?</h4>
              </div>
            </a>
          </button>
          <button>
            <a>
              <div className="icon yellow-icon">🟡</div>
              <div className="option-content">
                <h4 id="optTitle">Curriculum Info</h4>
                <h4>What is the Syllabus of Mathematics-II?</h4>
              </div>
            </a>
          </button>
          <button>
            <a>
              <div className="icon red-icon">🔴</div>
              <div className="option-content">
                <h4 id="optTitle">Societies Info</h4>
                <h4>Name a few Tech societies at TIET</h4>
              </div>
            </a>
          </button>
          <button>
            <a>
              <div className="icon blue-icon">🔵</div>
              <div className="option-content">
                <h4 id="optTitle">Patiala Info</h4>
                <h4>Best Places to hangout</h4>
              </div>
            </a>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Dock;
