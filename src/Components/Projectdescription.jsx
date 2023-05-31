import React from "react";
import "../css/projectdesc.css";
import styled from "styled-components";
import { data } from "./api";
import { motion as m } from "framer-motion";
const Projectdescription = (props) => {
  return (
    <m.div
      id="maincontainer"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5, ease: "easeInOut" }}
    >
      <div style={{ Position: "relative" }}>
        <h1 id="headingdesc">#project{props.projectId + 1}</h1>
        <Divname
          id="nameofproject"
          className="pulse"
          
          shadowcolor={data[props.projectId].shadowcolor}
        >
          <h1>{props.name}</h1>
        </Divname>
      </div>
      <div id="summary">
        <p>{props.description}</p>
      </div>
      <div id="Visuals">
        <h3>Visuals</h3>
        <br />

        {/* <div className="content" id="imagecontainer">
          <br />
          {props.visuals.map((visual, index) => (
            <img key={index} src={visual} alt={`Visual ${index + 1}`} />
          ))}
        </div> */}
      </div>
      <div id="context">
        <h3>Context</h3>
        <br />
        <p className="content">{props.context}</p>
      </div>

      <div id="role">
        <h3>Role</h3>
        <br />
        <p className="content">{props.role}</p>
      </div>
      <div id="skills">
        <h3>Skills</h3>
        <br />
        <ul className="content">
          {props.skills.map((skill, index) => (
            <li key={index}>{skill}</li>
          ))}
        </ul>
      </div>
      <div id="Outcome">
        <h3>Outcome</h3>
        <br />
        <p className="content">{props.outcome}</p>
      </div>

      <div className="code-links">
        <a className="code-link" href={props.code}>
          View Code
        </a>
        {/* <a className="deploy-link" href={props.deploy}>
          View Deployment
        </a> */}
      </div>
    </m.div>
  );
};

export default Projectdescription;

const Divname = styled.div`
  @keyframes neon6 {
    from {
      text-shadow: 0 0 10px #fff, 0 0 20px #fff, 0 0 30px #fff,
        0 0 40px ${(props) => props.shadowcolor},
        0 0 70px ${(props) => props.shadowcolor},
        0 0 80px ${(props) => props.shadowcolor},
        0 0 100px ${(props) => props.shadowcolor},
        0 0 150px ${(props) => props.shadowcolor};
    }
    to {
      text-shadow: 0 0 5px #fff, 0 0 10px #fff, 0 0 15px #fff,
        0 0 20px ${(props) => props.shadowcolor},
        0 0 35px ${(props) => props.shadowcolor},
        0 0 40px ${(props) => props.shadowcolor},
        0 0 50px ${(props) => props.shadowcolor},
        0 0 75px ${(props) => props.shadowcolor};
    }
  }
`;
