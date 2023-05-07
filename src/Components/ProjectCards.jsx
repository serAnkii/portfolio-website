import React, { useState } from "react";
import "../css/projectcard.css";
import { Link } from "react-router-dom";
import styled from "styled-components";



export function ProjectCards(props) {
  const [tilt, setTilt] = useState({});
  const [dotPosition, setDotPosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e, id) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    const tiltX = ((e.clientX - centerX) / rect.width) * 50;
    const tiltY = ((e.clientY - centerY) / rect.height) * 50;
    setTilt({ ...tilt, [id]: { tiltX, tiltY } });

    const cardLeft = rect.left ;
    const cardTop = rect.top;
    const offsetX = e.clientX - cardLeft;
    const offsetY = e.clientY - cardTop;
    setDotPosition({ x: offsetX, y: offsetY });
  };

  return (
    <>
      {props.data.map((ele) => {
        const { id, name, image, description, shadowcolor } = ele;
        const { tiltX = 0, tiltY = 0 } = tilt[id] || {};

        return (
          <CardContainer
            coordinates={dotPosition}
            shadow={shadowcolor}
            className="card"
            key={id}
            style={{
              background: image,
              backgroundSize: "40rem 40rem",
              backgroundRepeat: "no-repeat",
              transform: `rotateY(${tiltX}deg) rotateX(${tiltY}deg)`,
            }}
            onMouseMove={(e) => handleMouseMove(e, id)}
            onMouseEnter={(e) => {
              e.currentTarget.style.boxShadow = `1rem 1rem 2rem ${shadowcolor}, -1rem -1rem 2rem ${shadowcolor}`;
              e.currentTarget.style.transition = "box-shadow 0.3s ease";
              e.currentTarget.querySelector(".description").style.display =
                "flex";
            }}
            onMouseLeave={(e) => {
              setTilt({ ...tilt, [id]: { tiltX: 0, tiltY: 0 } });
              e.currentTarget.style.boxShadow = "none";
              e.currentTarget.style.transition = "box-shadow 0.3s ease";
              e.currentTarget.querySelector(".description").style.display =
                "none";
            }}
          >
            

            <div
              className="description"
              style={{
                background:"#000000dd",
                display: "none",
                position: "absolute",
                top: "0",
                left: "0",
                width: "100%",
                height: "100%",
                backgroundColor: "rgba(0,0,0,0.8)",
                color: "#fff",
                fontSize: "1.5rem",
                borderRadius: "3rem",
                padding: "2rem",
                boxSizing: "border-box",
                overflow:"hidden",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "space-evenly",
              }}
            >
              <div
              id="cardname"
              style={{
                textAlign:"center",
                fontSize: "4rem",
                background:"black",
                width:"40rem",
                textTransform: "capitalize",
                height: "fit-content",
                
                textShadow: "1px 1px 10px black",
                padding: "0.5rem",
              }}
            >
              {name}
            </div>
              {description}
              <br />
              <br />
              <h1
                className="linktosite"
                style={{
                  cursor: "none",
                  fontSize:"2.5rem",
                  height: "fit-content",
                  textTransform: "capitalize",
                  transition: "text-decoration 0.5s ease-in",
                }}
              >
                <Link
                  to={`/projects/${id}`}
                  style={{
                    textDecoration: "none",
                    color: "transparent",
                    WebkitTextStroke:"1px white",
                    cursor: "none",
                    
                  }}
                >
                  see detailed version
                </Link>
              </h1>
            </div>
          </CardContainer>
        );
      })}
    </>
  );
}

const CardContainer = styled.div`
  display: grid;
  grid-template-rows: 25rem 5rem 10rem 10rem;
  height: 40rem;
  width: 40rem;
  cursor: none;
  margin: 3rem;
  border-radius: 3rem;
  /* transition: transform 0.2s ease, box-shadow 0.2s ease; */
  animation: fade 0.7s alternate;
  transform-style: preserve-3d;
  position: relative;

  &:hover {
    ::after {
      content: "";
      transform: translate(
        ${(props) => props.coordinates.x}px,
        ${(props) => props.coordinates.y}px
      );
      width: 4px;
      height: 4px;
      border-radius: 50%;
      background-color: white;
      box-shadow: 0px 0px 15px 15px ${(props) => props.shadow};
    }
  }
`;
