import "./style.css";
import Home from "./Components/Home";
import { About } from "./Components/About";
import Projects from "./Components/Projects";
import { Contact } from "./Components/Contact";
import Skills from "./Components/Skills";
import Footer from "./Components/Footer";


export default function App() {
  return (
    <>
      <div id="wrapper">        
        <Home />
        <About />
        <Skills/>
        <Projects />
        <Contact />
        {/* <Footer /> */}
      </div>
    </>
  );
}
