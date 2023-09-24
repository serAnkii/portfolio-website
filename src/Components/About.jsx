import React, { useState } from "react";
import "./about.css";
import AboutNav from "./AboutNav";

export function About() {
 

  return (
    <div className="common" id="about">
        <AboutNav />

        <div id="greeting">
          <h1>HELLO!</h1>
        </div>

        <div id="para">
          <p>I'm a recent Computer Science graduate actively seeking job opportunities. <br /> My education and enthusiasm for technology drive me to excel in the field. <br />
           Let's connect and explore how I can contribute to your team.</p>
        </div>

        <img src="/ankit.jpg" alt="" id="profile"/>
    </div>
  );
}

{
  /* <TypewriterComponent
                  onInit={text}
                  options={{ autoStart: true, loop: true }}
                /> */
}
