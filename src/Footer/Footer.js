import React from "react";
import "./Footer.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
    return (
      <footer className="footer">
        <div className="media-tokens">
          <a href="https://github.com/Dean-Baylem">
            <FontAwesomeIcon icon={faGithub} />
          </a>
          <a href="https://www.linkedin.com/in/dean-baylem-a0b33821b/">
            <FontAwesomeIcon icon={faLinkedin} />
          </a>
        </div>
        <hr className="footer-line"></hr>
        <div className="footer-text">
          <p>Copyright 2023 - Dean Mark Baylem</p>
        </div>
      </footer>
    );
}

export default Footer;