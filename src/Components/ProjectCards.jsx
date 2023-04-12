import React from "react";
import "../css/projectcard.css";

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
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.boxShadow = "none";

              e.currentTarget.style.transition = "box-shadow 0.2s ease";
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

            <div id="linktopage"
            
            onMouseEnter={(e) => {
              e.currentTarget.style.display = "flex"
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.display = "none"
            }}
            >
              <a href="">click to see details</a>
            </div>
          </div>
        );
      })}
    </>
  );
}
