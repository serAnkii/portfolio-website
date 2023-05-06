import React, { useState } from "react";
import TypewriterComponent from "typewriter-effect";
import "./about.css";
import styled from "styled-components";
export function About() {
  const [imageSource, setImageSource] = useState("Exams.gif");

  function changeimage1() {
    setImageSource("Code typing.gif");
  }

  function changeimage2() {
    setImageSource("Programming.gif");
  }

  function changeimage3() {
    setImageSource("Exams.gif");
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
            <Customh1>I'm Ankit Negi</Customh1>
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

const Customh1 = styled.h1`
margin: 0;

font-size: 6rem !important;
color: transparent;
-webkit-text-stroke: 0.5px #0055d6;
position: relative;
cursor:none;

::after{
  content: "I'm Ankit Negi";
  position: absolute;
  left: 0;
  top: 0;
  color:#0055d6;
  width:0%;
  overflow:hidden;
  white-space:nowrap;
  font-size:6rem;
}

&:hover{
  ::after{
    animation:movetext 1s linear both;
    @keyframes movetext {
      to{
        width:100%;
        text-shadow:2px 2px 8px black;

      }
    }
  }


}
`;