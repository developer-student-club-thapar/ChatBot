// Header.js
import React from "react";
import "./Header.css";

const Header = () => {
  return (
    <div className="header">
      <div className="header-left">
        <h2>Chatbot</h2>
      </div>
      <div className="header-right">
        <button className="dev-button">Developed by GDSC Thapar</button>
        <button className="logout-button">Logout</button>
      </div>
    </div>
  );
};

export default Header;