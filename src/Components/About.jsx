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
          opacity: 0.5,
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
            <img src="/ankit.jpg" alt="myimage" />
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
