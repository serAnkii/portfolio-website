import React, { useState } from "react";
import "./projects.css";
import { AnimatePresence } from "framer-motion";
// import withAssetLoading from '../withAssetLoading.jsx';
import { motion as m } from "framer-motion";
import { ProjectCards } from "./ProjectCards";
import { data } from "./api";

function Projects() {
  const [currentCardIndex, setCurrentCardIndex] = useState(0);

  const handlePreviousClick = () => {
    if (currentCardIndex > 0) {
      setCurrentCardIndex(currentCardIndex - 1);
    }
    else{
      window.alert("That's e-nough mate'")
    }
  };

  const handleNextClick = () => {
    if (currentCardIndex < data.length - 1) {
      setCurrentCardIndex(currentCardIndex + 1);
    }
    else{
      window.alert("That's E-nough mate'")
    }
  };

  const currele = [data[currentCardIndex]];

  return (
    <>
      <m.div
        id="projectsection"
        initial={{ width: 0 }}
        animate={{ width: "100%" }}
        exit={{ left: window.innerWidth }}
        transition={{ duration: 0.5, ease: "easeInOut" }}
      >
        <div id="cardcontain">
          <ProjectCards data={currele} />
        </div>
        <div id="buttoncontain">
          <button className="change" onClick={handlePreviousClick}>
            <span className="path" id="path1">
              {"<"}
            </span>
            <span className="path" id="path2">
              {"<"}
            </span>
            <span className="path" id="path3">
              {"<"}
            </span>
          </button>
          <button className="change" onClick={handleNextClick}>
            <span className="path" id="path4">
              {">"}
            </span>
            <span className="path" id="path5">
              {">"}
            </span>
            <span className="path" id="path6">
              {">"}
            </span>
          </button>
        </div>
      </m.div>
    </>
  );
}

export default Projects;
