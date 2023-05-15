import React, { useState } from "react";
import TypewriterComponent from "typewriter-effect";
import "./about.css";
import styled from "styled-components";

import { images } from "./tech.js";
import {motion as m} from "framer-motion"

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
      <m.div
        className="about"
        initial={{
          opacity: 0,
          backdropFilter: "invert(50%)",
        }}
        animate={{
          opacity: 1,
          backdropFilter: "invert(0%)",
        }}
        exit={{
          opacity: 0,
          backdropFilter: "blur(0)",
        }}
        transition={{ duration: 1, ease: "easeIn" }}
      >
        <div id="section1" className="section">
          <div id="typewrite">
            <Customh1a>I'm Ankit Negi</Customh1a>
            <div
              style={{ textAlign: "center", fontFamily: "Arial, sans-serif" }}
            >
              <p
                id="item2"
                style={{
                  fontStyle: "italic",
                  fontSize: "1.5rem",
                  marginBottom: "2rem",
                }}
              >
                <TypewriterComponent
                  onInit={text}
                  options={{ autoStart: true, loop: true }}
                />
              </p>
              <div id="illustrations">
                <img id="img1" src={imageSource} />
              </div>
            </div>
          </div>

          <div id="poetry">
            <p
              style={{
                textAlign: "start",
                lineHeight: "1.5",
                marginBottom: "2rem",
              }}
            >
              In the realm of India's digital sphere,
              <br />
              I, the web maestro, craft experiences premier.
              <br />
              With engineering prowess and rhythmic finesse,
              <br />I weave interfaces that leave viewers impressed.
            </p>
            <p
              style={{
                textAlign: "center",
                lineHeight: "1.5",
                marginBottom: "2rem",
              }}
            >
              Employing the MERN stack, a symphony profound,
              <br />
              I orchestrate designs where rhythm is found.
              <br />
              Lines of code dance, a synchronized sensation,
              <br />
              Creating immersive worlds with flawless coordination.
            </p>
            <p
              style={{
                textAlign: "start",
                lineHeight: "1.5",
                marginBottom: "2rem",
              }}
            >
              Each pixel aligns with meticulous care,
              <br />
              Forming a symphony of visuals rare.
              <br />
              A composition of colors, a professional endeavor,
              <br />
              Engaging users with a sense of awe and fervor.
            </p>
            <p
              style={{
                textAlign: "start",
                lineHeight: "1.5",
                marginBottom: "2rem",
              }}
            >
              Witness the artistry, behold the grand display,
              <br />
              Where digital realms unfold in a masterful way.
              <br />
              In India's domain, where excellence resides,
              <br />
              Web experiences flourish with professional strides.
            </p>
          </div>
        </div>
        <div id="section2" className="section">
          <Customh1b>My Tech Stack</Customh1b>
          <div id="tech">
            {images.map((image, index) => {
              return (
                <>
                  <div className="skillsec">
                    <Img key={index} src={image.primary_url} alt={image.name} />
                    <h1>{image.name}</h1>
                  </div>
                </>
              );
            })}
          </div>
        </div>
        {/* <div id="section3" className="section">
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
          </div>
        </div> */}
      </m.div>
    </>
  );
}

const Img = styled.img`
  height: 10rem;
  width: 10rem;
`;

const Customh1a = styled.h1`
  margin: 0;

  font-size: 4.5rem !important;
  color: transparent;
  -webkit-text-stroke: 0.3px white;
  position: relative;
  cursor: none;

  ::after {
    // content: ${(props) => props.data};
    content: "I'm Ankit Negi";
    position: absolute;
    left: 0;
    top: 0;
    color: #0055d6;
    width: 0%;
    overflow: hidden;
    white-space: nowrap;
    font-size: 4.5rem;
  }

  &:hover {
    -webkit-text-stroke: 1px #0055d6;
    ::after {
      text-decoration: underline;
      animation: movetext 1s linear both;
      @keyframes movetext {
        to {
          width: 100%;
          text-shadow: -10px -10px 8px #0055d6;
        }
      }
    }
  }
`;

const Customh1b = styled.h1`
  margin: 0;

  font-size: 6rem !important;
  color: transparent;
  -webkit-text-stroke: 1px white;
  position: relative;
  cursor: none;

  ::after {
    // content: ${(props) => props.data};
    content: "My Tech Stack";
    position: absolute;
    left: 0;
    top: 0;
    color: #0055d6;
    width: 0%;
    overflow: hidden;
    white-space: nowrap;
    font-size: 6rem;
  }

  &:hover {
    -webkit-text-stroke: 0.5px #0055d6;
    ::after {
      text-decoration: underline;
      animation: movetext 1s linear both;
      @keyframes movetext {
        to {
          width: 100%;
          text-shadow: -10px -10px 8px #0055d6;
        }
      }
    }
  }
`;
