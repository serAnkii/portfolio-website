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
        <li className="link">About</li>
        <li className="link">Skills</li>
        <li className="link">Projects</li>

      </ul>
    </div>
  );
};

export default ContactNav;
