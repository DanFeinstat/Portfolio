import React from "react";
import "./ItemWork.css";

const ItemWork = props => {
  return (
    <div className="item-work-container">
      <img className="item-work-img" src={props.src} alt={props.title} />
      <div className="item-work-desc-container">
        <div className="item-work-title">{props.title}</div>
        <p className="item-work-desc">{props.desc}</p>
      </div>
    </div>
  );
};

export default ItemWork;
