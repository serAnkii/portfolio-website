import React from "react";
import "./projects.css";

import { ProjectCards } from "./ProjectCards";
import { data } from "./api";
export function Projects() {
  //state variable
  const [currele, setele] = React.useState([]);
  const [filterstate, changestate] = React.useState(0);

  React.useEffect(() => {
    setele(data);
  },[data]);
  //function to show filter menu
  const menu = document.getElementById("buttons");
  function showfilter() {
    const menu = document.getElementById("buttons");
    if(filterstate === 0) {
      changestate(1);
      menu.style.left = "0";
    } else if (filterstate === 1) {
      changestate(0);
      menu.style.left = "-100rem";
    }
  }

  //function to show only pirticualr cateogary of cards
  const filterItem = (arg) => {
    const updatedlist = data.filter((ele) => {
      return ele.group === arg;
      
    });
    setele(updatedlist);
  };

  return (
    <>
      <div id="projectsection">
        <div id="filter">
          <button id="mainbutton" className="category" onClick={showfilter}>
           filters
          </button>

          <div id="buttons">
            <button
              className="category"
              onClick={() => {
                filterItem("ml");
              }}
            >
              <p>Machine L.</p>
            </button>

            <button
              className="category"
              onClick={() => {
                filterItem("development");
              }}
            >
              <p>Development</p>
            </button>

            <button
              className="category"
              onClick={() => {
                filterItem("blockchain");
              }}
            >
              <p>Blockchain</p>
            </button>

            <button
              className="category"
              onClick={() => {
                setele(data);
              }}
              >
              <p>ALL</p>
            </button>
          </div>
        </div>
        <div id="parentcontainer">
          <div id="container">
            <ProjectCards data={currele}/>
          </div>
        </div>
      </div>
    </>
  );
}
