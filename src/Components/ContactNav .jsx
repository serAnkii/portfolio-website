import React from "react";
import "../css/contactnav.css";
const ContactNav = () => {
  return (
    <div id="contactnav">
      <div id="logo">
        <h1>ANKIT</h1>
        <h2>Negi</h2>
      </div>
      <ul id="links">
      <li className="link" id="active">
          Contact
        </li>
        <li className="link"> <a href="#about"> About</a></li>
        <li className="link"><a href="#skills">Skills </a></li>
        <li className="link"> <a href="#projectdiv">Projects</a></li>

      </ul>
    </div>
  );
};

export default ContactNav;