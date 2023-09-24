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
        <li className="link"><a href="#contactdiv">Contact </a></li>
        <li className="link"> <a href="#about"> About </a></li>
        <li className="link"> <a href="#skills"> Skills </a></li>
        
      </ul>
    </div>
  );
};

export {Projectnav};
