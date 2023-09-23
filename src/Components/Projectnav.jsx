import React from "react";
import "../css/projectnav.css"
const Projectnav = () => {
  return (
    <div id="projectnav">
      <div id="logo">
        <h1>ANKIT</h1>
        <h2>Negi</h2>
      </div>
      <ul id="links">
        <li className="link" id="active">
        Projects
        </li>
        <li className="link">Contact</li>
        <li className="link">About</li>
        <li className="link">Skills</li>
      </ul>
    </div>
  );
};

export default Projectnav;
