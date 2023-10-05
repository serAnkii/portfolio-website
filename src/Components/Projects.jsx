import React from "react";
import "../css/projects.css";
import { Projectnav } from "./Projectnav";
import { ProjectCards } from "./ProjectCards";
import { data } from "./api";
import Lottie  from "lottie-react";
import animationdata from "../../public/project.json"
import { useState, useRef } from "react";
function Projects() {
  const cardcontref = useRef(null);
  const Slide = (direction) => {
    const container = cardcontref.current;
    const scrollAmount = 400;
    container.scrollLeft += direction * scrollAmount;
  };

  const ref = useRef()

  

  return (
    <div id="projectdiv" className="common">
      <Projectnav />
      <Lottie animationData={animationdata} lottieRef={ref} loop={true} className="projectanimation"/>
      <div id="cardcontainer" ref={cardcontref}>
        <ProjectCards data={data} />
      </div>
      
      <div id="buttondiv">
        <h1 id="info">Tilt mobile to move the card</h1>
        <button onClick={() => Slide(-1)}>Previous</button>
        <button onClick={() => Slide(1)}>Next</button>
      </div>
    </div>
  );
}

export default Projects;
