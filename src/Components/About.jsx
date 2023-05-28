import React, { useState } from "react";
import TypewriterComponent from "typewriter-effect";
import "./about.css";
import styled from "styled-components";
import { AnimatePresence } from "framer-motion";

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
      <AnimatePresence>
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
          <div id="typewriteandname">
          <h1 className="mainh1">I'm Ankit Negi</h1>
          <div id="typewrite">
            <div
              style={{ textAlign: "center", fontFamily: "cursive" }}
            >
              <p
                id="item2"
                style={{
                  color:"#FFECE8",
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
          </div>
          <div id="poetry" style={{overflow:"scroll"}}>
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
          <h1 className="mainh1">My Tech Stack</h1>
          <div id="tech">
            {images.map((image, index) => {
              return (
                <>
                  <div className="skillsec">
                    <Img key={index} src={image.primary_url} alt={image.name} changeimg={image.secondary_url} />
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
      </AnimatePresence>
    </>
  );
}

const Img = styled.img`
  height: 10rem;
  width: 10rem;
  &:hover {
    content: url(${(props) => props.changeimg});
  }
`;
