import React, { Component } from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import {
  updateUser,
  SELECT_DISPLAY,
  toDisplay,
  handleWindowResize,
} from "./actions/user-actions";
import store from "./store/";
//components
import Background from "./components/parallaxTest/Background";
import Content from "./components/parallaxTest/Content";
import Nav from "./components/Nav/Nav.js";
import NavTwo from "./components/NavTwo/NavTwo.js";
import Landing from "./components/Landing/Landing.js";
import DisplayCase from "./components/DisplayCase/DisplayCase.js";
import ItemTool from "./components/DisplayCase/ItemTool.js";
import ItemWork from "./components/DisplayCase/ItemWork.js";
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
    window.addEventListener("resize", this.handleWindowSizeChange);
    console.log(store);
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.handleWindowSizeChange);
  }

  handleWindowSizeChange = () => {
    this.props.onWindowSizeChange();
  };

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
        <NavTwo
          displaySelection={this.onToDisplay}
          selected={this.props.toDisplay}
        />
        {this.props.toDisplay === "Toolkit" ? (
          <div>
            <DisplayCase name="Front End" toDisplay={this.props.toDisplay}>
              {this.props.toolsFront.map(tool => {
                return <ItemTool name={tool.name} src={tool.imgSrc} />;
              })}
            </DisplayCase>
            <DisplayCase name="Back End" toDisplay={this.props.toDisplay}>
              {this.props.toolsBack.map(tool => {
                return <ItemTool name={tool.name} src={tool.imgSrc} />;
              })}
            </DisplayCase>
            <DisplayCase name="Other Tools" toDisplay={this.props.toDisplay}>
              {this.props.toolsOther.map(tool => {
                return <ItemTool name={tool.name} src={tool.imgSrc} />;
              })}
            </DisplayCase>
          </div>
        ) : this.props.toDisplay === "Work" ? (
          <div>
            <DisplayCase name="Work" toDisplay={this.props.toDisplay}>
              {this.props.work.map((work, index) => {
                return (
                  <ItemWork
                    key={index}
                    title={work.title}
                    src={work.imgSrc}
                    static={work.staticSrc}
                    desc={work.desc}
                    demo={work.demo}
                    code={work.code}
                    // image={work.staticSrc}
                  />
                );
              })}
            </DisplayCase>
          </div>
        ) : null}
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
    work: state.work,
    width: state.width,
  };
  // userPlusProps: `${state.user} ${props.testProp}`,
};

const mapDispatchToProps = {
  onToDisplay: toDisplay,
  onWindowSizeChange: handleWindowResize,
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
