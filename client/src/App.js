import React, { Component } from "react";
// import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import {
  toDisplay,
  handleWindowResize,
  displayIcons,
  displayLists,
  displayListsAndIcons,
} from "./actions/user-actions";
import store from "./store/";
//components
// import Background from "./components/parallaxTest/Background";
// import Content from "./components/parallaxTest/Content";
// import Nav from "./components/Nav/Nav.js";
import NavTwo from "./components/NavTwo/NavTwo.js";
import ToolFilter from "./components/ToolFilter/ToolFilter.js";
import Landing from "./components/Landing/Landing.js";
import DisplayCase from "./components/DisplayCase/DisplayCase.js";
import ItemTool from "./components/DisplayCase/ItemTool.js";
import ToolList from "./components/DisplayCase/ToolList";
import ToolListItem from "./components/DisplayCase/ToolListItem";
import ItemWork from "./components/DisplayCase/ItemWork.js";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.clickingEvent = this.clickingEvent.bind(this);
  }

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

  toDisplayIcons = e => {
    this.props.toDisplayIcons();
  };

  toDisplayLists = e => {
    this.props.toDisplayLists();
  };

  toDisplayListsAndIcons = e => {
    this.props.toDisplayListsAndIcons();
  };

  render() {
    return (
      <div className="App">
        <Landing />
        <NavTwo
          displaySelection={this.onToDisplay}
          selected={this.props.toDisplay}
        />
        {this.props.toDisplay === "Toolkit" ? (
          <div>
            <ToolFilter
              icons={this.props.icons}
              lists={this.props.lists}
              listsAndIcons={this.props.listsAndIcons}
              showIcons={this.toDisplayIcons}
              showLists={this.toDisplayLists}
              showListsAndIcons={this.toDisplayListsAndIcons}
            />
            <DisplayCase name="Front End" toDisplay={this.props.toDisplay}>
              {this.props.icons ? (
                this.props.list ? (
                  <ToolList>
                    {this.props.toolsFront.map((tool, index) => {
                      return (
                        <ToolListItem key={index} name={tool.name}>
                          <ItemTool src={tool.src} name={tool.name} />
                        </ToolListItem>
                      );
                    })}
                  </ToolList>
                ) : (
                  <div className="t-icons-container">
                    {this.props.toolsFront.map((tool, index) => {
                      return (
                        <ItemTool
                          key={index}
                          name={tool.name}
                          src={tool.imgSrc}
                        />
                      );
                    })}
                  </div>
                )
              ) : null}
              {this.props.lists ? (
                <ToolList>
                  {this.props.toolsFront.map((tool, index) => {
                    return <ToolListItem key={index} name={tool.name} />;
                  })}
                </ToolList>
              ) : null}
            </DisplayCase>
            <DisplayCase name="Back End" toDisplay={this.props.toDisplay}>
              {this.props.icons ? (
                <div className="t-icons-container">
                  {this.props.toolsBack.map((tool, index) => {
                    return (
                      <ItemTool
                        key={index}
                        name={tool.name}
                        src={tool.imgSrc}
                      />
                    );
                  })}
                </div>
              ) : null}
              {this.props.lists ? (
                <ToolList>
                  {this.props.toolsBack.map((tool, index) => {
                    return <ToolListItem key={index} name={tool.name} />;
                  })}
                </ToolList>
              ) : null}
            </DisplayCase>
            <DisplayCase name="Other Tools" toDisplay={this.props.toDisplay}>
              {this.props.icons ? (
                <div className="t-icons-container">
                  {this.props.toolsOther.map((tool, index) => {
                    return (
                      <ItemTool
                        key={index}
                        name={tool.name}
                        src={tool.imgSrc}
                      />
                    );
                  })}
                </div>
              ) : null}
              {this.props.lists ? (
                <ToolList>
                  {this.props.toolsOther.map((tool, index) => {
                    return (
                      <ToolListItem key={index} key={index} name={tool.name} />
                    );
                  })}
                </ToolList>
              ) : null}
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
        ) : this.props.toDisplay === "Contact" ? (
          <DisplayCase
            name={this.props.toDisplay}
            toDisplay={this.props.toDisplay}
          />
        ) : this.props.toDisplay === "About" ? (
          <DisplayCase
            name={this.props.toDisplay}
            toDisplay={this.props.toDisplay}
          />
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
    icons: state.icons,
    lists: state.lists,
    listsAndIcons: state.listsAndIcons,
  };
  // userPlusProps: `${state.user} ${props.testProp}`,
};

const mapDispatchToProps = {
  onToDisplay: toDisplay,
  onWindowSizeChange: handleWindowResize,
  toDisplayIcons: displayIcons,
  toDisplayLists: displayLists,
  toDisplayListsAndIcons: displayListsAndIcons,
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
