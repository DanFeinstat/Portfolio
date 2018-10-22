import React from "react";
// import { connect } from "react-redux";
import "./DisplayCase.css";

function DisplayCase(props) {
  return (
    <div className="dc-container">
      <div className="dc-title">{props.name}</div>
      <div className="dc-item-container">{props.children}</div>
    </div>
  );
}

// function mapStateToProps(state) {
//   return {
//     tools: state.tools,
//   };
// }

export default DisplayCase;
