import React, { useState } from "react";
import "../css/home.css";
import styled from "styled-components"

const Home = () => {

    
  
  return (
    <div className="common" id="header">
      <div id="vignetee"></div>
      <img src="/paralleximg/sky.png" className="parallex" id="sky" />
      <img
        src="/paralleximg/mountains.png"
        className="parallex"
        id="mountains"
      />
      <div id="hometext">
        <h1 id="homeheading">WELCOME!</h1>
        
      </div>
      <img src="/paralleximg/fog_2.png" alt="" className="parallex" id="fog" />
      <img src="/paralleximg/trees.png" className="parallex" id="trees" />
      <img src="/paralleximg/rocks.png" className="parallex" id="rocks" />
      <img src="/paralleximg/rays.png" className="parallex" id="rays" />
    </div>
  );
};

export default Home;



