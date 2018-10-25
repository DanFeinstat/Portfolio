import React from "react";
import "./ToolListItem.css";

const ToolListItem = props => {
  return <li className="tl-Item">{props.name}</li>;
};

export default ToolListItem;
