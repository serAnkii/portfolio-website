import React , {useState, useEffect} from "react";
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
import { GiRobotGolem } from "react-icons/gi";
import { TbHexagonLetterA } from "react-icons/tb";
import { MdInterests } from "react-icons/md";
import styled from "styled-components";
const Skills = () => {
  const [isAsideOpen, setIsAsideOpen] = useState(true); // State to track aside position
  const skillsData = [
    {
      icon: <SiCplusplus className="skillicons" fill="#00427e" />,
      name: "C++",
    },
    {
      icon: <SiCsharp className="skillicons" fill="#95478e" />,
      name: "Csharp",
    },
    {
      icon: <SiHtml5 className="skillicons" fill="#dd4b25" />,
      name: "HTML5",
    },
    {
      icon: <SiCss3 className="skillicons" fill="blue" />,
      name: "CSS3",
    },
    {
      icon: <SiJavascript className="skillicons" fill="#f3c900" />,
      name: "Javascript",
    },
    {
      icon: <SiPhp className="skillicons" fill="#7377ad" />,
      name: "Php",
    },
    {
      icon: <SiReact className="skillicons" fill="#05bbdd" />,
      name: "React",
    },
    {
      icon: <SiNextdotjs className="skillicons" />,
      name: "Next.js",
    },
    {
      icon: <SiDotnet className="skillicons" fill="#5c2d91" />,
      name: "Dotnet",
    },
    {
      icon: <SiMysql className="skillicons" fill="#045f87" />,
      name: "MySQL",
    },
    {
      icon: <SiMongodb className="skillicons" fill="#4ea441" />,
      name: "MongoDB",
    },
    {
      icon: <SiPython className="skillicons" fill="#3470a2" />,
      name: "Python",
    },
    {
      icon: <SiGit className="skillicons" fill="#e84d31"/>,
      name: "Git",
    },
    {
      icon: <SiGithub className="skillicons" />,
      name: "GitHub",
    },
  ];


  const toggleAside = () => {
    document.getElementById("sidediv").style.left = "0px"
    setIsAsideOpen(!isAsideOpen); // Toggle the state to open/close the aside
  };

  const closeaside = () => {
    document.getElementById("sidediv").style.left = "-1000px"
    setIsAsideOpen(!isAsideOpen); // Toggle the state to open/close the aside
  };

  useEffect(() => {
    const handleResize = () => {
      const windowWidth = window.innerWidth;
      const sidediv = document.getElementById("sidediv");

      if (windowWidth > 760) {
        sidediv.style.left = "0px";
      } else {
        sidediv.style.left = "-1000px";
      }
    };
    
    // Initial check
    handleResize();

    // Add resize event listener
    window.addEventListener("resize", handleResize);

    // Remove event listener on component unmount
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);


  return (
    <div id="skills" className="common">
      <aside id="sidediv" >
        <SkillsNav  func={closeaside}/>
        <div id="learning">
          <div id="learninghead">
            <h1>
              INTERESTS
            </h1>
            <i>
                <MdInterests fill="var(--whiteshade)" />
              </i>
          </div>
          <div id="inter">
          <h1>Improving Myself Everyday</h1>
          <h1>Artificial Intelligence</h1>
          <h1>DSA Problem Solving  </h1>
          <h1>Playing Chess</h1>
          <h1>Watching Movies/Shows </h1>
          </div>
        </div>
      </aside>
      <div id="skillsparent">
        <div id="skill-heading">
        <button id="statebutton" onClick={toggleAside}>+</button>
          <h1>Default (Skill-GPT-3.5)</h1>
        </div>
        <div id="responsecontainer">
          <div id="question">
            <TbHexagonLetterA
              className="resicon"
              fill="var(--whiteshade)"
              stroke="var(--text)"
            />
            <h1>List all the Skills</h1>
          </div>
          <div id="response">
            <GiRobotGolem
              className="resicon"
              id="responseicon"
              fill="var(--text)"
            />
            <div className="skills-container">
              {skillsData.map((skill, index) => (
                <div className="skill" key={index}>
                  <i className="skillicon">{skill.icon}</i>
                  <h3 id="skill-name">{skill.name}</h3>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;

//
//
//

/* blockchain,java,jquery,node.js,redux,sass,tailwind. */

//
//

//
//
//
//
//
//
//
//
//
