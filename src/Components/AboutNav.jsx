import React from "react";
import "../css/aboutnavbar.css";
const AboutNav = () => {
  return (
    <div id="aboutnav">
      <div id="logo">
        <h1>ANKIT</h1>
        <h2>Negi</h2>
      </div>
      <ul id="links">
        <li className="link" id="active">About</li>
        <li className="link">Skills</li>
        <li className="link">Projects</li>
        <li className="link">Contact</li>
      </ul>

      
    </div>
  );
};

export default AboutNav;
