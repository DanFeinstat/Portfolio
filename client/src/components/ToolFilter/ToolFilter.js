import React from "react";
import "./ToolFilter.css";

const ToolFilter = props => {
  return (
    <nav className="tf">
      {props.icons ? (
        props.lists ? (
          <div className="tf-container">
            <button className="tf-btn" onClick={props.showLists}>
              Show Lists
            </button>
            <button className="tf-btn" onClick={props.showIcons}>
              Show Icons
            </button>
          </div>
        ) : (
          <div className="tf-container">
            <button className="tf-btn" onClick={props.showLists}>
              Show Lists
            </button>
            <button className="tf-btn" onClick={props.showListsAndIcons}>
              Show Lists + Icons
            </button>
          </div>
        )
      ) : (
        <div className="tf-container">
          <button className="tf-btn" onClick={props.showListsAndIcons}>
            Show Lists + Icons
          </button>
          <button className="tf-btn" onClick={props.showIcons}>
            Show Icons
          </button>
        </div>
      )}
    </nav>
  );
};

export default ToolFilter;
