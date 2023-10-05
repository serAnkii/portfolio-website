import React, { useState, useEffect } from "react";
import "../css/home.css";

import { AiFillStar, AiOutlineStar } from "react-icons/ai";
import { GiFallingStar } from "react-icons/gi";
import { HiLightBulb, HiOutlineLightBulb } from "react-icons/hi";
const Home = ({ isdark }) => {
  

  return (
    <div className="common" id="header">
      <div id="homediv">
        <h1>Creating</h1>

        <div className="waviy">
          <span className="animetext" style={{ '--i': 2 }}>T</span>
          <span className="animetext" style={{ '--i': 3 }}>O</span>
          <span className="animetext" style={{ '--i': 4 }}>M</span>
          <span className="animetext" style={{ '--i': 5 }}>M</span>
          <span className="animetext" style={{ '--i': 6 }}>R</span>
          <span className="animetext" style={{ '--i': 7 }}>O</span>
          <span className="animetext" style={{ '--i': 8 }}>W</span>
          
        </div>
        <h1>Together</h1>
      </div>

      <div id="starsdiv">
        <h2>Imagine The possiblites ✨</h2>
        <i className="stars">
          {isdark ? <HiLightBulb /> : <HiOutlineLightBulb />}
        </i>
        <i className="stars">{<GiFallingStar />}</i>
        <i className="stars">{isdark ? <AiFillStar /> : <AiOutlineStar />}</i>
      </div>
    </div>
  );
};

export default Home;
