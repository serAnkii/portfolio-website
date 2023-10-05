import React from "react";
import "../css/projectnav.css"
const Projectnav = () => {
  return (
    <div id="projectnav">
      <div id="logo">
        <img src="/logo.png" alt="" />
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
