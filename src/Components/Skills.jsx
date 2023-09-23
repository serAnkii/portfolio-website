import React from "react";
import "../css/skills.css"
import SkillsNav from "./SkillsNav.jsx";
import { images } from "./tech.js";
const Skills = () => {
  return (
    <div id="skills" className="common">
      <SkillsNav/>
      {/* <h1 className="mainh1">My Tech Stack</h1>
      <div id="tech">
        {images.map((image, index) => {
          return (
            <>
              <div className="skillsec">
                <Img
                  key={index}
                  src={image.primary_url}
                  alt={image.name}
                  changeimg={image.secondary_url}
                />
                <h1>{image.name}</h1>
              </div>
            </>
          );
        })}
      </div> */}
    </div>
  );
};

export default Skills;

