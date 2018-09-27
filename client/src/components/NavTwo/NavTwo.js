import React from "react";
import "./NavTwo.css";

const Nav = props => {
  return (
    <nav className="nav2">
      <div className="nav2-container">
        <button className="nav2-btn">Work</button>
        <button className="nav2-btn">About</button>
        <button className="nav2-btn">Contact</button>
      </div>
    </nav>
  );
};

export default Nav;
