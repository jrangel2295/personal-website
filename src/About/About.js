import React from "react";
import "./About.css";

const About = () => {
  return (
    <div className="about-part" id="About">
      <div>
        <h1>Hi, I'm Johnny</h1>
        {/* <h1>I love building things</h1> */}
        <p>
          Just a brief intro about myself. Born and raise Tx all my laf hbub
          huhi uhuh tygu uhu
        </p>
        <p>lkdjifojaoejc e</p>
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
