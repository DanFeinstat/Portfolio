import React from "react";
import styles from "./Resume.css";
import DanFeinstatCV from "../../resume/DanFeinstatOnlineCV.pdf";

const Resume = props => {
  return (
    <nav className="r-container">
      <div className="r-contentContainer">
        <a className="r-btn" href={DanFeinstatCV} target={`_blank`}>
          Resume
        </a>
      </div>
    </nav>
  );
};

export default Resume;
