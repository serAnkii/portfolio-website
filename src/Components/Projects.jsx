import React from "react";
import "./projects.css";
import {Projectnav} from "./Projectnav"
import { ProjectCards } from "./ProjectCards";
import { data } from "./api";
function Projects() {
  return (
    <div id="projectdiv" className="common">
      <Projectnav/>
      <div id="gridcontainer">
        <div id="cardcontainer">
          <ProjectCards data={data} />
        </div>
      </div>
    </div>
  );
}

export default Projects;
