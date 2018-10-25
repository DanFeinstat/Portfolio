import React from "react";
import "./ToolList.css";

const ToolList = props => {
  return (
    <div className="tl">
      <ul>{props.children}</ul>
    </div>
  );
};

export default ToolList;
