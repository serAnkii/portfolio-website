import React from "react";
import "../css/projectdesc.css";
const Projectdescription = (props) => {
  return (
    <>
      <div id="maincontainer">
        <div id="nameofproject">
          <h1>{props.name}</h1>
        </div>

        <div id="summary"> <p>{props.description}</p></div>

        <div id="context">{props.context}</div>

        <div id="role">{props.role}</div>
        <div id="skills">{props.skills}</div>
        <div id="Outcome">{props.outcome}</div>
        <div id="Visuals">{props.visuals}</div>

        <div id="codelinks"></div>
      </div>
    </>
  );
};

export default Projectdescription;
