import React from "react";
import "../css/skills.css";
import SkillsNav from "./SkillsNav.jsx";
import {
  SiCplusplus,
  SiCsharp,
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiPhp,
  SiReact,
  SiNextdotjs,
  SiDotnet,
  SiPython,
  SiMysql,
  SiMongodb,
  SiGit,
  SiGithub,
  SiAdobephotoshop,
} from "react-icons/si";
import styled from "styled-components";
import { images } from "./tech.js";
const Skills = () => {
  return (
    <div id="skills" className="common">
      <SkillsNav />
      <div id="skillscontainer">
        <div id="techstack">
          <SiCplusplus className="skillicons" fill="#00427e" />
          <SiCsharp className="skillicons" fill="#95478e" />
          <SiHtml5 className="skillicons" fill="#dd4b25"/>
          <SiCss3 className="skillicons" fill="blue"/>
          <SiJavascript className="skillicons" fill="#f3c900" />
          
          <SiPhp className="skillicons" fill="#7377ad"/>
          <div className="gridheading">
            <h1>Tech stack</h1>
          </div>
          <SiNextdotjs className="skillicons" />
          
          <SiReact className="skillicons"fill="#05bbdd" />
          <SiPython className="skillicons" fill="#3470a2"/>
          <SiMysql className="skillicons" fill="#045f87" />
          <SiMongodb className="skillicons" fill="#4ea441" />
          <SiGit className="skillicons" fill="#e84d31" />
          <SiGithub className="skillicons" />
          <SiDotnet className="skillicons" fill="#5c2d91" />
          {/* blockchain,java,jquery,node.js,redux,sass,tailwind. */}
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
