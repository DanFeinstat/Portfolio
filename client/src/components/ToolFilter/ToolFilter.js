import React from "react";
import "./ToolFilter.css";

const ToolFilter = props => {
  return (
    <nav className="tf">
      {props.icons ? (
        props.lists ? (
          <div className="tf-container">
            <button className="tf-btn" onClick={props.showLists}>
              Show Me Lists
            </button>
            <button className="tf-btn" onClick={props.showIcons}>
              Show Me Icons
            </button>
          </div>
        ) : (
          <div className="tf-container">
            <button className="tf-btn" onClick={props.showLists}>
              Show Me Lists
            </button>
            <button className="tf-btn" onClick={props.showListsAndIcons}>
              Show Me Lists and Icons
            </button>
          </div>
        )
      ) : (
        <div className="tf-container">
          <button className="tf-btn" onClick={props.showIcons}>
            Show Me Icons
          </button>
          <button className="tf-btn" onClick={props.showListsAndIcons}>
            Show Me Lists and Icons
          </button>
        </div>
      )}
    </nav>
  );
};

export default ToolFilter;
