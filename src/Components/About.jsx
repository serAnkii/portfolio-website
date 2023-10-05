import React, { useState } from "react";
import "../css/about.css";
import AboutNav from "./AboutNav";

export function About() {
  return (
    <div className="common" id="about">
      <AboutNav />

      <div id="greeting">
        <h1>HELLO! </h1>
      </div>

     

      <div id="para">
        <p>
          I'm a recent Computer Science graduate actively seeking job
          opportunities. My education and enthusiasm for technology drive
          me to excel in the field.
          Let's connect and explore how I can contribute to your team.

        </p>
        <a
          href="/AnkitNegi.pdf"
          target="_blank"
          id="resume"
        >Download <br /> Resume</a>
      </div>

      <img src="/ankit.jpg" alt="" id="profile" />
      
       
      
    </div>
  );
}

{
  /* <TypewriterComponent
                  onInit={text}
                  options={{ autoStart: true, loop: true }}
                /> */
}
