import React from "react";
import "./About.css";

const About = () => {
  return (
    <div className="about-part">
        <div>
      <h1>About Me</h1>
      <p>Just a brief intro about myself. Born and raise Tx all my laf hbub huhi uhuh tygu uhu</p>
      </div>
      <img
        className="about-pic"
        alt="about-pic"
        style={{ width: "30em", height: "20em" }}
        src="../Assets/tech-pic.png"
      ></img>
    </div>
  );
};

export default About;
