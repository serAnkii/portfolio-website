import React from "react";
import "../css/skillnav.css"
import {MdOutlineArrowUpward ,MdOutlineArrowDownward} from "react-icons/md"
const SkillsNav = () => {
  return (
    <div id="skillsnav">
      <div id="skillhead">
        <div id="skillsubhead">
        <h1>Navigations</h1>
        </div>
      </div>
      <ul id="skilllinks">
        <li className="slink"> <a href="#about"> About <MdOutlineArrowUpward/></a> </li>
        <li className="slink"> <a href="#projectdiv"> Projects <MdOutlineArrowDownward/></a></li>
        <li className="slink"><a href="#contactdiv">Contact <MdOutlineArrowDownward/></a></li>
        
      </ul>
    </div>
  );
};

export default SkillsNav;
