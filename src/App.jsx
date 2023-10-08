import "./style.css";
import Home from "./Components/Home";
import { About } from "./Components/About";
import Projects from "./Components/Projects";
import { Contact } from "./Components/Contact";
import Skills from "./Components/Skills";
import { HiLightBulb } from "react-icons/hi2";
import { TbBulb } from "react-icons/tb";
import { useState } from "react";
import Lottie from "lottie-react";
import animationdata from "../public/footer.json";


export default function App() {
  const [isdark, setdark] = useState(false);
  const changetheme = () => {
    document.body.classList.toggle("darkmode");
    setdark(!isdark);
  };


  return (
    <>
      <div id="wrapper">
        <input type="checkbox" id="switch" />
        <label htmlFor="switch" id="switchlabel" onClick={changetheme}>
          {" "}
          <TbBulb className="theme" id="colour" />
          <HiLightBulb className="theme" id="dark" />
        </label>
        <Home isdark={isdark} />
        <About />
        <Projects />
        <Skills />
        <Contact />
        <div className="common" id="tempdiv"></div>
      </div>
      <div className="footer">
        <Lottie animationData={animationdata}  className="footeranime" />
      </div>
    </>
  );
}
