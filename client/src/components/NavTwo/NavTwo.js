import React from "react";
import "./NavTwo.css";

const Nav = props => {
  return (
    <nav className="nav2">
      <div className="nav2-container">
        <button className="nav2-btn" onClick={props.displaySelection}>
          Toolkit
        </button>
        <button
          className="nav2-btn"
          onClick={props.displaySelection}
          autoFocus={true}
        >
          Work
        </button>
        <button className="nav2-btn" onClick={props.displaySelection}>
          About
        </button>
        <button className="nav2-btn" onClick={props.displaySelection}>
          Contact
        </button>
      </div>
    </nav>
  );
};

export default Nav;
