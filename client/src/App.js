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
        <NavTwo displaySelection={this.onToDisplay} />
        {this.props.toDisplay === "Toolkit" ? (
          <div>
            <DisplayCase name="Front End">
              {this.props.toolsFront.map(tool => {
                return <ItemTool name={tool.name} src={tool.imgSrc} />;
              })}
            </DisplayCase>
            <DisplayCase name="Back End">
              {this.props.toolsBack.map(tool => {
                return <ItemTool name={tool.name} src={tool.imgSrc} />;
              })}
            </DisplayCase>
            <DisplayCase name="Other Tools">
              {this.props.toolsOther.map(tool => {
                return <ItemTool name={tool.name} src={tool.imgSrc} />;
              })}
            </DisplayCase>
          </div>
        ) : null
        // this.props.toDisplay === "Work"
        }
      </div>
    );
  }
}

const mapStateToProps = (state, props) => {
  // products: state.products,
  // user: state.user.user,
  return {
    toolsFront: state.toolsFront,
    toolsBack: state.toolsBack,
    toolsOther: state.toolsOther,
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
