import React, { useState } from "react";
import "../css/home.css";
import styled from "styled-components";
import { useRef } from "react";
import { AiFillStar, AiOutlineStar } from "react-icons/ai";
import { GiFallingStar } from "react-icons/gi";
import { HiLightBulb, HiOutlineLightBulb } from "react-icons/hi";
const Home = ({ isdark }) => {
  const ref = useRef(null);
  window.addEventListener("scroll", (e) => {});

  return (
    <div className="common" id="header">
      {/* ////lightmode/////// */}
      {/* {isdark && <img src="/parallex/bg.png" alt="bg" className="lightparallex" />}
      {isdark && <img src="/parallex/4.png" alt="" className="lightparallex" />}
      {isdark && <img src="/parallex/3.png" alt="" className="lightparallex" />}
      {isdark && <img src="/parallex/2nd.png" alt="" className="lightparallex" />}
      {isdark && <img src="/parallex/front.png" alt="" className="lightparallex" />} */}

      {/* /////darkmode////// */}
      {/* {!isdark && <div id="vignetee"></div>}
      {!isdark && <img src="/moon.png" className="parallex" id="nightsky" />}
      {!isdark && (
        <h1 className="parallex" id="darkhomeheading">
          Ohh! I see <br /> (ʘ ͜ʖ ʘ) !!!
        </h1>
      )}
      {!isdark && (
        <h2 id="darkhomepara" className="parallex">
          You are searching for a potential Candidate.
        </h2>
      )}
      {!isdark && (
        <h1 className="parallex" id="darkhomepara2">
          WELL
        </h1>
      )}
      {!isdark && (
        <h1 className="parallex" id="fourthpara">
          You just Found The one
        </h1>
      )} */}

      <h1>Creating Tommorow Together</h1>

      <div id="starsdiv">
        <h2>Imagine The possiblites O_O</h2>
        <i className="stars">{isdark?<HiLightBulb/>:<HiOutlineLightBulb/>}</i>
        <i className="stars">{<GiFallingStar/>}</i>
        <i className="stars">{isdark?<AiFillStar/>:<AiOutlineStar/>}</i>
        <i className="stars"></i>
        <i className="stars"></i>
        <i className="stars"></i>
        <i className="stars"></i>
        <i className="stars"></i>
        <i className="stars"></i>
        <i className="stars"></i>
      </div>
    </div>
  );
};

export default Home;
