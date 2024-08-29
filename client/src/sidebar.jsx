// Sidebar.js
import React from "react";
import "./Sidebar.css";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="logo">
        <img src="./image" alt="Ask Thapar Logo" />
        <h2>Ask Thapar</h2>
      </div>
      <ul className="menu">
        <li className="menu-item active">
          <span role="img" aria-label="Chat">
            💬
          </span>{" "}
          Chat
        </li>
        <li className="menu-item">
          <span role="img" aria-label="Projects">
            📂
          </span>{" "}
          Projects
        </li>
        <li className="menu-item">
          <span role="img" aria-label="Template">
            📄
          </span>{" "}
          Template
        </li>
        <li className="menu-item">
          <span role="img" aria-label="Documents">
            🗂️
          </span>{" "}
          Documents
        </li>
      </ul>
      <div className="settings-help">
        <p>Settings & Help</p>
        <ul>
          <li className="menu-item">
            <span role="img" aria-label="Settings">
              ⚙️
            </span>{" "}
            Settings
          </li>
          <li className="menu-item">
            <span role="img" aria-label="Help">
              ❓
            </span>{" "}
            Help
          </li>
        </ul>
      </div>
      <div className="user-profile">
        <img
          src="user-profile-url"
          alt="User"
          className="profile-pic"
        />
        <div className="user-info">
          <p className="user-name">Jane Doe</p>
          <p className="user-email">janedoe@thapar.edu</p>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
