import React from "react";
import "./ItemTool.css";

const ItemTool = props => {
  return (
    <div>
      <img className="item-tool" src={props.src} alt={props.name} />
    </div>
  );
};

export default ItemTool;
