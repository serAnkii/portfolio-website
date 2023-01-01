import React from "react";
import "./projects.css";

import { ProjectCards } from "./ProjectCards";
import { data } from "./api";
export function Projects() {
  //state variable
  const [currele, setele] = React.useState(data);
  const [filterstate, changestate] = React.useState(0);

  //function to show filter menu
  const menu = document.getElementById("buttons");
  function showfilter() {
    if (filterstate === 0) {
      menu.style.left = "-100rem";
      changestate(1);
    } else if (filterstate === 1) {
      menu.style.left = "0";
      changestate(0);
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
          <button className="category" onClick={showfilter}>
            filters
          </button>

          <div id="buttons">
            <button
              className="category"
              onClick={() => {
                filterItem("ml");
              }}
            >
              Machine Learning
            </button>

            <button
              className="category"
              onClick={() => {
                filterItem("development");
              }}
            >
              Development
            </button>

            <button
              className="category"
              onClick={() => {
                filterItem("blockchain");
              }}
            >
              Blockchain
            </button>

            <button
              className="category"
              onClick={() => {
                setele(data);
              }}
            >
              ALL
            </button>
          </div>
        </div>
        <div id="parentcontainer">
          <div id="container">
            <ProjectCards data={currele} />
          </div>
        </div>
      </div>
    </>
  );
}
