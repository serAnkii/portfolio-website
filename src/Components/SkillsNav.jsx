import React from "react";
import "../css/skillnav.css"
const SkillsNav = () => {
  return (
    <div id="skillsnav">
      <div id="logo">
        <h1>ANKIT</h1>
        <h2>Negi</h2>
      </div>
      <ul id="links">
        <li className="link" id="active">
          Skills
        </li>
        <li className="link">Projects</li>
        <li className="link">Contact</li>
        <li className="link">About</li>
      </ul>
    </div>
  );
};

export default SkillsNav;
