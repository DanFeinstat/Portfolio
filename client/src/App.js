import React, { Component } from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { updateUser, SELECT_DISPLAY, toDisplay } from "./actions/user-actions";
import store from "./store/";
//components
import Background from "./components/parallaxTest/Background";
import Content from "./components/parallaxTest/Content";
import Nav from "./components/Nav/Nav.js";
import NavTwo from "./components/NavTwo/NavTwo.js";
import Landing from "./components/Landing/Landing.js";
import DisplayCase from "./components/DisplayCase/DisplayCase.js";
import ItemTool from "./components/DisplayCase/ItemTool.js";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.clickingEvent = this.clickingEvent.bind(this);
    // this.onUpdateUser = this.onUpdateUser.bind(this);
    // this.onGetTools = this.onGetTools.bind(this);
  }

  // onUpdateUser(event) {
  //   this.props.onUpdateUser("Tom");
  // }

  // onGetTools(event) {
  //   // this.props.onGetTools();
  //   console.log("stuff");
  // }
  componentDidMount() {
    console.log(store);
  }

  clickingEvent = e => {
    this.props.clickingEvent();
  };

  onToDisplay = e => {
    console.log(e.target.textContent);
    this.props.onToDisplay(e.target.textContent);
  };

  render() {
    return (
      <div>
        {/* <Nav /> */}
        <Landing />
        {/* <button onClick={this.props.clickingEvent}>
          {this.props.tools.name}
        </button> */}
        <NavTwo displaySelection={this.onToDisplay} />
        <DisplayCase>
          {this.props.toDisplay === "Toolkit"
            ? this.props.tools.map(tool => {
                return <ItemTool name={tool.name} src={tool.imgSrc} />;
              })
            : console.log(this.props.toDisplay)}
        </DisplayCase>
      </div>
    );
  }
}

const mapStateToProps = (state, props) => {
  // products: state.products,
  // user: state.user.user,
  return {
    tools: state.tools,
    toDisplay: state.toDisplay,
  };
  // userPlusProps: `${state.user} ${props.testProp}`,
};

const mapDispatchToProps = {
  onToDisplay: toDisplay,
};

// const mergeProps = (propsFromState, propsFromDispatch, ownProps) => {
//   console.log(propsFromState, propsFromDispatch, ownProps);
//   return {};
// };

export default connect(
  mapStateToProps,
  mapDispatchToProps
  // mergeProps
)(App);
