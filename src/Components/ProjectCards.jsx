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
            key={id}
            glareEnable={true}
            glareBorderRadius="18px"
            glarePosition="top"
            tiltMaxAngleX={5}
            tiltReverse={true}
            gyroscope={true}
          >
            <div className="card">
              <div id="cardimage" style={{ background: `${image}` }}></div>
              
              <div id="linktogithub">
                <a href={repo}>Code Link</a>
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
