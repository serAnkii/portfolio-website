import React from "react";
import "../css/aboutnavbar.css";
const AboutNav = () => {
  return (

    <div id="aboutnav">
      <div id="logo">
        <img src="/logo.png" alt="" />
      </div>
      <ul id="links">
        <li className="link" id="active">About</li>
        <li className="link"><a href="#skills">Skills</a></li>
        <li className="link"><a href="#projectdiv">Projects</a></li>
        <li className="link"><a href="#contactdiv">Contact</a></li>
      </ul>
    </div>

  );
};

export default AboutNav;
