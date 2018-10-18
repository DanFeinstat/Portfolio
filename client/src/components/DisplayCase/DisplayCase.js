import React from "react";
import { connect } from "react-redux";

function DisplayCase(props) {
  return (
    <div>
      ...
      {props.children}
    </div>
  );
}

function mapStateToProps(state) {
  return {
    tools: state.tools,
  };
}
