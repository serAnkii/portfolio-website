import React from "react";
import "../css/projectdesc.css";

const Projectdescription = (props) => {
  return (
    <div id="maincontainer">
      <div id="nameofproject" className="pulse">
        <h1>{props.name}</h1>
      </div>

      <div id="summary">
        <p>{props.description}</p>
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
      <div id="Visuals">
        <h3>Visuals</h3>
        <br />
        <div className="content">
          {props.visuals.map((visual, index) => (
            <img key={index} src={visual} alt={`Visual ${index + 1}`} />
          ))}
        </div>
        
      </div>
      <div class="code-links">
        <a class="code-link" href={props.code}>
          View Code
        </a>
        <a class="deploy-link" href={props.deploy}>
          View Deployment
        </a>
      </div>
    </div>
  );
};

export default Projectdescription;
