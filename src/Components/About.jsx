import React, { useState } from "react";
import "../css/about.css";
import AboutNav from "./AboutNav";
import {AiOutlineDownload} from "react-icons/ai"

export function About() {
  return (
    <div className="common" id="about">
      <AboutNav />

      <div id="abouttext">
        <div id="greeting">
          <div className="greetingframe">
          <h1>HELLO</h1>
          </div>
          <div id="seconditem" className="greetingframe">
          <h1> I'm Ankit Negi </h1>
          </div>
        </div>

        <div id="para">
          <ul id="ulpara">
            <li>I recently graduated in 2023 with a B.Tech in Computer Science from Graphic Era Hill University.</li>
            <li>By day, I'm a Full Stack Web Developer equiped <br /> with the latest tools of the trade, crafting seamless digital experiences. Whether it's front-end or back-end, I've got it covered.</li>
            <li>But wait, there's more! I'm not just about pixels and code; <br /> I'm also a Machine Learning enthusiast. I thrive on creating intelligent applications that tackle real-world challenges.</li>
            <li> Ready to turn ideas into reality? <br /> Let's explore how I can contribute to your team!</li>
          </ul>
        </div>
        <div id="resumediv">
          <a href="/Ankit_Negi.pdf" target="_blank" id="resume">
            Resume <AiOutlineDownload/>
          </a>
        </div>
      </div>

      <div id="aboutimage">
        <img src="/ankit.jpg" alt="" id="profile" />
      </div>
    </div>
  );
}

{
  /* <TypewriterComponent
                  onInit={text}
                  options={{ autoStart: true, loop: true }}
                /> */
}
