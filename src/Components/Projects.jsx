import React from "react";
import "./projects.css";
import { motion as m } from "framer-motion";
import { ProjectCards } from "./ProjectCards";
import { data } from "./api";
export function Projects() {
  //state variable
  const [currele, setele] = React.useState([]);
  const [filterstate, changestate] = React.useState(0);

  React.useEffect(() => {
    setele(data);
  }, [data]);
  //function to show filter menu

  function showfilter() {
    const menu = document.getElementById("buttons");
    const buttons = Array.from(menu.getElementsByClassName("category"));

    if (filterstate === 0) {
      changestate(1);
      menu.style.left = "0";

      // Calculate positions for circular layout
      const radius = 140; // Adjust the radius as per your preference
      const angleStep = (2 * Math.PI) / buttons.length;

      buttons.forEach((button, index) => {
        const angle = index * angleStep;
        const x = radius * Math.cos(angle);
        const y = radius * Math.sin(angle);
        button.style.transform = `translate(${x - 5}px, ${y - 90}px)`;
      });
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
      <m.div
        id="projectsection"
        initial={{ width: 0 }}
        animate={{ width: "100%" }}
        exit={{ left: window.innerWidth }}
        transition={{ duration: 0.5, ease: "easeInOut" }}
      >
        <div id="filter">
          <button id="mainbutton" onClick={showfilter}>
            {filterstate ? "X" : "Filter"}
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
            <ProjectCards data={currele} />
          </div>
        </div>
      </m.div>
    </>
  );
}
