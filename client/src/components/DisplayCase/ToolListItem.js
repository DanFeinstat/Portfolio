import React from "react";
// import ItemTool from "../DisplayCase/ItemTool.js";
import "./ToolListItem.css";

const ToolListItem = props => {
  return (
    <li className="tl-Item">
      <span>
        {props.children}
        {props.name}
      </span>
    </li>
  );
};

export default ToolListItem;
