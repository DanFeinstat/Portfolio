import React, { Component } from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { updateUser } from "./actions/user-actions";
//components
import Background from "./components/parallaxTest/Background";
import Content from "./components/parallaxTest/Content";
import Nav from "./components/Nav/Nav.js";
import NavTwo from "./components/NavTwo/NavTwo.js";
import Landing from "./components/Landing/Landing.js";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);

    this.onUpdateUser = this.onUpdateUser.bind(this);
  }

  onUpdateUser(event) {
    this.props.onUpdateUser(event.target.value);
  }

  render() {
    return (
      <div>
        {/* <Nav /> */}
        <Landing />
        <NavTwo />
      </div>
    );
  }
}

const mapStateToProps = (state, props) => ({
  products: state.products,
  user: state.user,
  userPlusProps: `${state.user} ${props.testProp}`,
});

const mapActionsToProps = (dispatch, props) => {
  console.log(props);

  return bindActionCreators(
    {
      onUpdateUser: updateUser,
    },
    dispatch
  );
};

const mergeProps = (propsFromState, propsFromDispatch, ownProps) => {
  console.log(propsFromState, propsFromDispatch, ownProps);
  return {};
};

export default connect(
  mapStateToProps,
  mapActionsToProps,
  mergeProps
)(App);
