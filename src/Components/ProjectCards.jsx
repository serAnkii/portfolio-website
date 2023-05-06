import React, { useState } from "react";
import "../css/projectcard.css";
import { Link } from "react-router-dom";

export function ProjectCards(props) {
  const [tilt, setTilt] = useState({});

  const handleMouseMove = (e, id) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    const tiltX = ((e.clientX - centerX) / rect.width) * 50;
    const tiltY = ((e.clientY - centerY) / rect.height) * 50;
    setTilt({ ...tilt, [id]: { tiltX, tiltY } });
  };

  return (
    <>
      {props.data.map((ele) => {
        const { id, name, image, description, shadowcolor } = ele;
        const { tiltX = 0, tiltY = 0 } = tilt[id] || {};

        return (
          <div
            className="card"
            key={id}
            style={{
              background: image,
              backgroundSize: "35rem 40rem",
              backgroundRepeat: "no-repeat",
              transform: `rotateY(${tiltX}deg) rotateX(${tiltY}deg)`,
            }}
            onMouseMove={(e) => handleMouseMove(e, id)}
            onMouseEnter={(e) => {
              e.currentTarget.style.boxShadow = `1rem 1rem 2rem ${shadowcolor}, -1rem -1rem 2rem ${shadowcolor}`;
              e.currentTarget.style.transition = "box-shadow 0.3s ease";
              e.currentTarget.querySelector(".description").style.display =
                "flex";

              const ele = document.createElement("div");
              ele.className = "crsr";
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
              id="cardname"
              style={{
                fontSize: "2rem",
                textTransform: "capitalize",
                textOrientation: "mixed",
                writingMode: "vertical-rl",
                height: "40rem",
                borderRadius: "3rem",
                textShadow: "1px 1px 10px black",
                padding: "0.5rem",
              }}
            >
              {name}
            </div>

            <div
              className="description"
              style={{
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
                overflow: "scroll",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              {description}
              <br />
              <br />
              <h1
                className="linktosite"
                style={{
                  textTransform: "capitalize",
                  transition: "text-decoration 0.5s ease-in",
                }}
              >
                <Link
                  to={`/projects/${id}`}
                  className="linktosite"
                  style={{ textDecoration: "none", color: "white" }}
                >
                  see detailed version
                </Link>
              </h1>
            </div>
          </div>
        );
      })}
    </>
  );
}
