import * as React from "react";
import Checkbox from "@mui/material/Checkbox";
import "./Skills.css";

const label = { inputProps: { "aria-label": "Checkbox demo" } };
export default function Checkboxes() {
  return (
    <div id="Skills">
        <h2>skills</h2>
      <div className="skills-container">
        <div className="skills-content">
          <ul>
            <p>Java script</p>
            <Checkbox className="boxes" {...label} defaultChecked />
          </ul>
          <ul>
            <p>React</p>
            <Checkbox className="boxes" {...label} defaultChecked />
          </ul>
          <ul>
            <p>Bilingul</p>
            <Checkbox className="boxes" {...label} defaultChecked />
          </ul>
        </div>
        <div>
          <p>CSS</p>
          <Checkbox className="boxes" {...label} defaultChecked />
          <ul>
            <p>HTML</p>
            <Checkbox className="boxes" {...label} defaultChecked />
          </ul>
          <ul>
            <p>SASS</p>
            <Checkbox className="boxes" {...label} defaultChecked />
          </ul>
        </div>
      </div>
    </div>
  );
}
