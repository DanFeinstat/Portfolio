import React from "react";
import "./ToolList.css";

const ToolList = props => {
  return (
    <div className="tool-list">
      <ul>{props.children}</ul>
    </div>
  );
};

export default ToolList;
