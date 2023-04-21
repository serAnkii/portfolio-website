import React, { useState } from "react";
import TypewriterComponent from "typewriter-effect";
import "./about.css";

export function About() {
  const [imageSource, setImageSource] = useState("student.svg");

  function changeimage1() {
    setImageSource("programming.svg");
  }

  function changeimage2() {
    setImageSource("developer.svg");
  }

  function changeimage3() {
    setImageSource("student.svg");
  }

  function text(typewriter) {
    typewriter
      .typeString("STUDENT")
      .pauseFor(2000)
      .deleteAll()
      .callFunction(changeimage1)
      .typeString("PROGRAMMER")
      .pauseFor(2000)
      .deleteAll()
      .callFunction(changeimage2)
      .typeString("WEB_DEVELOPER")
      .pauseFor(2000)
      .deleteAll()
      .callFunction(changeimage3)
      .start();
  }

  return (
    <>
      <div className="about">
        <div id="section1">
          <div id="typewrite">
            <h2>I'am Ankit Negi</h2>
            <div>
              <p id="item2">
                <TypewriterComponent
                  onInit={text}
                  options={{ autoStart: true, loop: true }}
                />
              </p>
              <p>
                Hi there! I was born and raised in Dehradun. My main expertise
                lies in website design, though I do dabble in Blockchain and
                machine learning. If you like my site, don’t hesitate to reach
                out!
              </p>
            </div>
          </div>
          <div id="illustrations">
            <img id="img1" src={imageSource} />
          </div>
        </div>
        <div id="section2">
          <div id="details">
            <h1>What i Like</h1>
            <div id="likes">
              <ul>
                <li>
                  Interested in traveling to new locations to learn about
                  different things.
                </li>
                <li>Watching English Movies and listening to the songs</li>
                <li>Improving myself </li>
              </ul>
            </div>
            <h1>My Tech Stack</h1>
            <div id="tech">
              <ul>
                <h2>Development</h2>
                <li>HTML</li>
                <li>CSS</li>
                <li>JavaScript</li>
                <li>React</li>
                <h2>Programming</h2>
                <li>Java</li>
                <li>C++</li>
                <h2>Machine Learning</h2>
                <li>Python</li>
                <h2>Blockchain</h2>
                <li>Solidity</li>
                <h2>Database</h2>
                <li>mySQL</li>
                <li>MongoDB</li>
              </ul>
            </div>
            <h1>What I'm learning</h1>
            <div id="likes">
              <ul>
                <li>Node.js</li>
                <li>Deep Learning</li>
                <li>DevOps</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
