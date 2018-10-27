import React from "react";
import "./ToolListItem.css";

const ToolListItem = props => {
  return (
    <li className="tl-Item">
      {props.icons ? (
        <span>
          <img className="tl-tool-icon" src={props.src} alt={props.name} />
        </span>
      ) : null}
      {props.name}
    </li>
  );
};

export default ToolListItem;
