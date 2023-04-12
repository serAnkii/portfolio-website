import "./style.css";
//clamp
import { About } from "./Components/About";
import { Projects } from "./Components/Projects";
import { Error } from "./Components/Error";
import { Route, Routes } from "react-router-dom";
import { Link } from "react-router-dom";

import Projectdescription from "./Components/Projectdescription";

import "./css/eye.css";
import "./css/shapes.css";
import "./css/footer.css";
import "./css/navbar.css";

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
          <div id="name">
            <div className="shapes" id="s1"></div>
            <div className="shapes" id="s2"></div>
            <div className="shapes" id="s3"></div>
            <div className="shapes" id="s4"></div>
            <div className="shapes" id="s5"></div>
          </div>

          <div id="title">
            <div id="eye">
              <img src="eyeback.jpg" alt="eye" id="eyeim1" />
              <img className="eys" id="eye1" src="eye.png" alt="eye" />
              <img className="eys" id="eye2" src="eye.png" alt="eye" />
            </div>
          </div>

          <div id="links">
            <ul id="nav-list">
              
              <li>
                <Link className="link" to="/">
                <h1>ABOUT</h1>
                  <div className="icon">
                    <SiAboutdotme />
                  </div>
                  
                </Link>
              </li>
              <li className="list-item">
                <Link className="link" to="/project">
                <h1>PROJECTS</h1>
                  <div className="icon">
                    <GiThorHammer />
                  </div>{" "}
                  
                </Link>
              </li>

              {/* <li className="list-item">
                <Link className="link" to="/project">
                  <div className="icon">
                    <GiThorHammer />
                  </div>{" "}
                  <h1>THEME</h1>
                </Link>
              </li> */}
            </ul>
          </div>
        </div>

        <Routes>
          <Route path="/" element={<About />} />
          <Route path="/project" element={<Projects />} />
          <Route path="*" element={<Error />} />

          <Route path="/projects/1" element={<Projectdescription name = {"project1"}/>} />
          <Route path="/projects/2" element={<Projectdescription name = {"project2"}/>} />
          <Route path="/projects/3" element={<Projectdescription name = {"project3"}/>} />
          <Route path="/projects/4" element={<Projectdescription name = {"project4"}/>} />
          <Route path="/projects/5" element={<Projectdescription name = {"project5"}/>} />
          <Route path="/projects/6" element={<Projectdescription name = {"project6"}/>} />
        </Routes>
        <div className="wave">
          <svg
            data-name="Layer 1"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1200 120"
            preserveAspectRatio="none"
          >
            <path
              d="M1200,0H0V120H281.94C572.9,116.24,602.45,3.86,602.45,3.86h0S632,116.24,923,120h277Z"
              class="shape-fill"
            ></path>
          </svg>
        </div>
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
                <a href="https://drive.google.com/file/d/1z2XeeXXY2rpnAwvYelsHdli3Xo1Kk3WZ/view?usp=share_link" target="_blank">
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
                  <svg
                    className="icn"
                    xmlns=""
                    viewBox="0 0 50 50"
                    width="64px"
                    height="64px"
                  >
                    <path d="M 50.0625 10.4375 C 48.214844 11.257813 46.234375 11.808594 44.152344 12.058594 C 46.277344 10.785156 47.910156 8.769531 48.675781 6.371094 C 46.691406 7.546875 44.484375 8.402344 42.144531 8.863281 C 40.269531 6.863281 37.597656 5.617188 34.640625 5.617188 C 28.960938 5.617188 24.355469 10.21875 24.355469 15.898438 C 24.355469 16.703125 24.449219 17.488281 24.625 18.242188 C 16.078125 17.8125 8.503906 13.71875 3.429688 7.496094 C 2.542969 9.019531 2.039063 10.785156 2.039063 12.667969 C 2.039063 16.234375 3.851563 19.382813 6.613281 21.230469 C 4.925781 21.175781 3.339844 20.710938 1.953125 19.941406 C 1.953125 19.984375 1.953125 20.027344 1.953125 20.070313 C 1.953125 25.054688 5.5 29.207031 10.199219 30.15625 C 9.339844 30.390625 8.429688 30.515625 7.492188 30.515625 C 6.828125 30.515625 6.183594 30.453125 5.554688 30.328125 C 6.867188 34.410156 10.664063 37.390625 15.160156 37.472656 C 11.644531 40.230469 7.210938 41.871094 2.390625 41.871094 C 1.558594 41.871094 0.742188 41.824219 -0.0585938 41.726563 C 4.488281 44.648438 9.894531 46.347656 15.703125 46.347656 C 34.617188 46.347656 44.960938 30.679688 44.960938 17.09375 C 44.960938 16.648438 44.949219 16.199219 44.933594 15.761719 C 46.941406 14.3125 48.683594 12.5 50.0625 10.4375 Z" />
                  </svg>
                </a>
              </h1>
              <h1 className="social" id="insta">
                <svg
                  xmlns=""
                  viewBox="0 0 64 64"
                  width="64px"
                  height="64px"
                >
                  <path d="M 31.820312 12 C 13.439312 12 12 13.439312 12 31.820312 L 12 32.179688 C 12 50.560688 13.439312 52 31.820312 52 L 32.179688 52 C 50.560688 52 52 50.560688 52 32.179688 L 52 32 C 52 13.452 50.548 12 32 12 L 31.820312 12 z M 28 16 L 36 16 C 47.129 16 48 16.871 48 28 L 48 36 C 48 47.129 47.129 48 36 48 L 28 48 C 16.871 48 16 47.129 16 36 L 16 28 C 16 16.871 16.871 16 28 16 z M 41.994141 20 C 40.889141 20.003 39.997 20.900859 40 22.005859 C 40.003 23.110859 40.900859 24.003 42.005859 24 C 43.110859 23.997 44.003 23.099141 44 21.994141 C 43.997 20.889141 43.099141 19.997 41.994141 20 z M 31.976562 22 C 26.454563 22.013 21.987 26.501437 22 32.023438 C 22.013 37.545437 26.501437 42.013 32.023438 42 C 37.545437 41.987 42.013 37.498562 42 31.976562 C 41.987 26.454563 37.498562 21.987 31.976562 22 z M 31.986328 26 C 35.299328 25.992 37.992 28.673328 38 31.986328 C 38.007 35.299328 35.326672 37.992 32.013672 38 C 28.700672 38.008 26.008 35.327672 26 32.013672 C 25.992 28.700672 28.673328 26.008 31.986328 26 z" />
                </svg>
              </h1>
              <h1 className="social" id="github">
                <a href="https://www.github.com/serAnkii" target="_blank">
                  <svg
                    className="icn"
                    xmlns=""
                    viewBox="0 0 72 72"
                    width="64px"
                    height="64px"
                  >
                    <path d="M36,12c13.255,0,24,10.745,24,24c0,10.656-6.948,19.685-16.559,22.818c0.003-0.009,0.007-0.022,0.007-0.022	s-1.62-0.759-1.586-2.114c0.038-1.491,0-4.971,0-6.248c0-2.193-1.388-3.747-1.388-3.747s10.884,0.122,10.884-11.491	c0-4.481-2.342-6.812-2.342-6.812s1.23-4.784-0.426-6.812c-1.856-0.2-5.18,1.774-6.6,2.697c0,0-2.25-0.922-5.991-0.922	c-3.742,0-5.991,0.922-5.991,0.922c-1.419-0.922-4.744-2.897-6.6-2.697c-1.656,2.029-0.426,6.812-0.426,6.812	s-2.342,2.332-2.342,6.812c0,11.613,10.884,11.491,10.884,11.491s-1.097,1.239-1.336,3.061c-0.76,0.258-1.877,0.576-2.78,0.576	c-2.362,0-4.159-2.296-4.817-3.358c-0.649-1.048-1.98-1.927-3.221-1.927c-0.817,0-1.216,0.409-1.216,0.876s1.146,0.793,1.902,1.659	c1.594,1.826,1.565,5.933,7.245,5.933c0.617,0,1.876-0.152,2.823-0.279c-0.006,1.293-0.007,2.657,0.013,3.454	c0.034,1.355-1.586,2.114-1.586,2.114s0.004,0.013,0.007,0.022C18.948,55.685,12,46.656,12,36C12,22.745,22.745,12,36,12z" />
                  </svg>
                </a>
              </h1>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
}
