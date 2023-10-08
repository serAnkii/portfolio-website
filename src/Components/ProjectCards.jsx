import React from "react";
import "../css/projectcard.css";
import Tilt from "react-parallax-tilt";

const ProjectCards = (props) => {
  return (
    <>
      {props.data.map((ele) => {
        const { id, name, image, description, repo } = ele;
        return (
          <Tilt
            glareEnable={true}
            glareBorderRadius="18px"
            glarePosition="top"
            tiltMaxAngleX={10}
            tiltMaxAngleY={10}
            tiltReverse={false}
            gyroscope={true}
            glareColor="var(--cyanshade)"
          >
            <div className="card" key={id}>
              <div id="cardimage" style={{ background: `${image}` }}></div>
              
              <div id="linktogithub">
                <a href={repo} target="_blank">Code Link</a>
              </div>

              <div id="cardtext">
                <h2>{name}</h2>
                <p>{description}</p>
              </div>
            </div>
          </Tilt>
        );
      })}
    </>
  );
};

export { ProjectCards };
