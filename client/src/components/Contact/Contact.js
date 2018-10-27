import React from "react";
import GithubIconSVG from "./GithubIconSVG";
import LinkedinIconSVG from "./LinkedinIconSVG";
import "./Contact.css";

const Contact = props => {
  return (
    <div className="contact-container">
      <a
        href="https://www.linkedin.com/in/daniel-feinstat"
        target="_blank"
        className="contact-button-container"
      >
        <LinkedinIconSVG />
      </a>
      <a
        href="https://github.com/DanFeinstat"
        target="_blank"
        className="contact-button-container"
      >
        <GithubIconSVG />
      </a>
    </div>
  );
};

export default Contact;
