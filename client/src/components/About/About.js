import React from "react";
import { connect } from "react-redux";
import "./About.css";
import me from "../../images/AboutMe.png";

const About = props => {
  return (
    <div className="about-container">
      {props.width < 668 ? (
        <div className="about-mobile-container">
          <div className="about-image-container">
            <img src={me} alt="me" className="about-image" />
          </div>
        </div>
      ) : (
        <div className="about-image-container">
          <img src={me} alt="me" className="about-image" />
        </div>
      )}
      <p className="about-text">
        I’m Dan Feinstat, a full stack engineer with a passion for translating
        ideas into intuitive and performant applications.
      </p>
      <p className="about-text">Thanks for checking out my work!</p>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    width: state.width,
  };
};

export default connect(mapStateToProps)(About);
