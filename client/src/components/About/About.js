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
        Howdy and welcome! I’m Dan Feinstat, a full stack engineer with a
        passion for translating complex ideas into <b>intuitive</b>,{" "}
        <b>scalable</b> and highly <b>performant</b> applications.
      </p>
      <p className="about-text">
        Thanks for checking out my work! If you like what you see, mosey on over
        to the contact links and drop me a line.
      </p>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    width: state.width,
  };
};

export default connect(mapStateToProps)(About);
