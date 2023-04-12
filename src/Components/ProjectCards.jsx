import React from "react";
import "../css/projectcard.css";

import { Link} from "react-router-dom";
import Projectdescription from './Projectdescription';

export function ProjectCards(props) {
  return (
    <>
      {props.data.map((ele) => {
        return (
          <div
            className="card"
            key={ele.id}
            style={{
              background: ele.image,
              backgroundSize: "35rem 40rem",
              backgroundRepeat: "no-repeat",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.boxShadow = `2rem 2rem 7rem ${ele.shadowcolor},-2rem -2rem 7rem ${ele.shadowcolor}`;
              e.currentTarget.style.transition = "box-shadow 0.2s ease";
              e.currentTarget.querySelector(".description").style.display =
                "block";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.boxShadow = "none";
              e.currentTarget.style.transition = "box-shadow 0.2s ease";
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
              {ele.name}
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
              }}
            >
              {ele.description}
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
                  to={`/projects/${ele.id}`}
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
