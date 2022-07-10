import "./Header.css";
import React from "react";

export default function Header({ user, setUser }) {
  return (
    <header>
      {/* Add each one's GitHub link later  - and year */}
      <span >FIND FURRY FRIENDS</span>
      
      <br />
      <span className="username"> Welcome, {user.name}</span> 
      <div className="img"></div>
    </header>
  );
}
