import React from "react";
import "./Nav.css";

const Nav = props => {
  return (
    <header className="nav">
      <div className="nav-logo-container">
        <div className="nav-logo">Daniel J. Feinstat</div>
      </div>
      <div className="nav-btn-container">
        <div className="nav-btn">Work</div>
        <div className="nav-btn">About</div>
        <div className="nav-btn">Contact</div>
      </div>
    </header>
  );
};

export default Nav;
