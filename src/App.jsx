import "./style.css";

import { About } from "./Components/About";
import { Projects } from "./Components/Projects";
import { Error } from "./Components/Error";

import { Route, Routes } from "react-router-dom";
import { Link } from "react-router-dom";

import "./css/eye.css";
import "./css/shapes.css";
import "./css/footer.css";

//icons
import { SiAboutdotme, SiTwitter } from "react-icons/si";
import { GiThorHammer } from "react-icons/gi";
import { GoMarkGithub } from "react-icons/go";
import { BsInstagram } from "react-icons/bs";

//code to change the eye balls position
document.addEventListener("mousemove", (e) => {
  const mousex = e.clientX;
  const mousey = e.clientY;
  const eye = document.getElementById("eyeim1");
  const rekt = eye.getBoundingClientRect();
  const eyex = rekt.left + rekt.width / 2;
  const eyey = rekt.top + rekt.height / 2;

  const ang = angle(mousex, mousey, eyex, eyey);

  const eyes = document.querySelectorAll(".eys");

  eyes.forEach((temp) => {
    temp.style.transform = `rotate(${90 + ang}deg)`;
    eye.style.filter = `hue-rotate(${ang}deg)`;
  });
});

function angle(cx, cy, ex, ey) {
  const dx = ex - cx;
  const dy = ey - cy;
  const rad = Math.atan2(dy, dx);

  const angdeg = (rad * 180) / Math.PI;
  return angdeg;
}

export default function App() {
  return (
    <>
      <div id="body">
        <div id="main">
          <div id="title">
            <div id="eye">
              <img src="eyeback.jpg" alt="eye" id="eyeim1" />
              <img className="eys" id="eye1" src="eye.png" alt="eye" />
              <img className="eys" id="eye2" src="eye.png" alt="eye" />
            </div>
          </div>
          <div id="name">
            <div className="shapes" id="s1"></div>
            <div className="shapes" id="s2"></div>
            <div className="shapes" id="s3"></div>
            <div className="shapes" id="s4"></div>
            <div className="shapes" id="s5"></div>
          </div>
          <div id="links">
            <Link className="link" to="/">
              ABOUT <SiAboutdotme />
            </Link>
            <Link className="link" to="/project">
              <GiThorHammer /> PROJECTS
            </Link>
          </div>
        </div>
        <Routes>
          <Route path="/" element={<About />} />
          <Route path="/project" element={<Projects />} />
          <Route path="*" element={<Error />} />
        </Routes>
        <footer>
          <div id="footcontact">
            <h1>CONTACT</h1>
            <hr
              style={{
                background: "black",
                color: "#fffff",
                width: "40%",
                height: "0.1rem",
              }}
            />
            <div>
              <h1>
                <a
                  href="www.gmail.com/recruitankitnegi2023@gmail.com"
                  target="_blank"
                >
                  E-mail
                </a>
              </h1>
              <h1>
                <a href="www.github.com" target="_blank">
                  Resume
                </a>
              </h1>
            </div>
          </div>
          <div id="footsocial">
            <h1>SOCIAL </h1>
            <hr
              style={{
                background: "black",
                color: "#fffff",
                width: "40%",
                height: "0.1rem",
              }}
            />
            <div>
              <h1 className="social" id="twitter">
                <a href="https://twitter.com/AnkitNe14613482" target="_blank">
                  <SiTwitter fill="black" />
                </a>
              </h1>
              <h1 className="social" id="insta">
                <BsInstagram fill="black" />
              </h1>
              <h1 className="social" id="github">
                <a href="https://www.github.com/serAnkii" target="_blank">
                  <GoMarkGithub fill="black" />
                </a>
              </h1>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
}
