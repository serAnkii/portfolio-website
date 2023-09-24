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
        <li className="link"> <a href="#projectdiv"> Projects </a></li>
        <li className="link"><a href="#contactdiv">Contact </a></li>
        <li className="link"> <a href="#about"> About </a></li>
      </ul>
    </div>
  );
};

export default SkillsNav;
