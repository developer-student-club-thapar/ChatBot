// Sidebar.js
import React from 'react';
import './Sidebar.css';

const Sidebar = ({ userName, userEmail }) => {
  return (
    <div className="sidebar">
      <div className="logo">
        <img
          src="https://seeklogo.com/images/G/google-developers-logo-F8BF3155AC-seeklogo.com.png"
          alt="Ask Thapar Logo"
        />
        <h2>Ask Thapar</h2>
      </div>
      <ul className="menu">
        <li className="menu-item active">
          <span role="img" aria-label="Chat">💬</span> Chat
        </li>
        <li>
          <span role="img" aria-label="Projects"></span> <br />
        </li>
        <li>
          <span role="img" aria-label="Template"></span> <br />
        </li>
        <li>
          <span role="img" aria-label="Documents"></span> <br />
        </li>
      </ul>
      <div className="settings-help">
        <h3></h3>
        <ul>
          <br />
          <br />
        </ul>
      </div>
      <div className="user-profile">
        <img src="user-profile-url" alt="User" className="profile-pic" />
        <div className="user-info">
          <p className="user-name">{userName}</p>
          <p className="user-email">{userEmail}</p>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
