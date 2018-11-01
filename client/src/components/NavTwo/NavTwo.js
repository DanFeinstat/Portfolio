import React from "react";
import "./NavTwo.css";

const Nav = props => {
  return (
    <nav className="nav2">
      <div className="nav2-container">
        <button
          className={
            props.selected === "Work" ? "nav2-btn selected" : "nav2-btn"
          }
          onClick={props.displaySelection}
          autoFocus={true}
        >
          Work
        </button>
        <button
          className={
            props.selected === "Toolkit" ? "nav2-btn selected" : "nav2-btn"
          }
          onClick={props.displaySelection}
        >
          Toolkit
        </button>
        <button
          className={
            props.selected === "About" ? "nav2-btn selected" : "nav2-btn"
          }
          onClick={props.displaySelection}
        >
          About
        </button>
        <button
          className={
            props.selected === "Contact" ? "nav2-btn selected" : "nav2-btn"
          }
          onClick={props.displaySelection}
        >
          Contact
        </button>
      </div>
    </nav>
  );
};

export default Nav;
