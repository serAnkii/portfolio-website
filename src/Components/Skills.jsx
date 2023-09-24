import React from "react";
import "../css/skills.css"
import SkillsNav from "./SkillsNav.jsx";
import styled from "styled-components";
import { images } from "./tech.js";
const Skills = () => {
  return (
    <div id="skills" className="common">
      <SkillsNav/>
      
      <h1 className="mainh1">My Tech Stack</h1>
      <div id="techcontain">
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
      </div>
      </div>
    </div>
  );
};

export default Skills;

const Img = styled.img`
  height: 5rem;
  width: 5rem;
  &:hover {
    content: url(${(props) => props.changeimg});
  }
`;