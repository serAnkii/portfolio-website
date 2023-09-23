import "./style.css";
import Home from "./Components/Home";
import { About } from "./Components/About";
import Projects from "./Components/Projects";
import { Contact } from "./Components/Contact";
import Skills from "./Components/Skills";
import Footer from "./Components/Footer";
import { Route, Routes } from "react-router-dom";
import Projectdescription from "./Components/Projectdescription";
import { ele } from "./Components/apiforprojectdesc";


export default function App() {
  return (
    <>
      <div id="wrapper">
        
        <Routes>
          <Route
            path="/projects/1"
            element={
              <Projectdescription
                name={ele[0].name}
                description={ele[0].description}
                context={ele[0].context}
                role={ele[0].role}
                skills={ele[0].skills}
                outcome={ele[0].outcome}
                visuals={ele[0].visuals}
                code={ele[0].repo}
                deploy={ele[0].deploy}
                projectId={0}
              />
            }
          />
          <Route
            path="/projects/2"
            element={
              <Projectdescription
                name={ele[1].name}
                description={ele[1].description}
                context={ele[1].context}
                role={ele[1].role}
                skills={ele[1].skills}
                outcome={ele[1].outcome}
                visuals={ele[1].visuals}
                code={ele[1].repo}
                deploy={ele[1].deploy}
                projectId={1}
              />
            }
          />
          <Route
            path="/projects/3"
            element={
              <Projectdescription
                name={ele[2].name}
                description={ele[2].description}
                context={ele[2].context}
                role={ele[2].role}
                skills={ele[2].skills}
                outcome={ele[2].outcome}
                visuals={ele[2].visuals}
                code={ele[2].repo}
                deploy={ele[2].deploy}
                projectId={2}
              />
            }
          />
          <Route
            path="/projects/4"
            element={
              <Projectdescription
                name={ele[3].name}
                description={ele[3].description}
                context={ele[3].context}
                role={ele[3].role}
                skills={ele[3].skills}
                outcome={ele[3].outcome}
                visuals={ele[3].visuals}
                code={ele[3].repo}
                deploy={ele[3].deploy}
                projectId={3}
              />
            }
          />
          <Route
            path="/projects/5"
            element={
              <Projectdescription
                name={ele[4].name}
                description={ele[4].description}
                context={ele[4].context}
                role={ele[4].role}
                skills={ele[4].skills}
                outcome={ele[4].outcome}
                visuals={ele[4].visuals}
                code={ele[4].repo}
                deploy={ele[4].deploy}
                projectId={4}
              />
            }
          />
          <Route
            path="/projects/6"
            element={
              <Projectdescription
                name={ele[5].name}
                description={ele[5].description}
                context={ele[5].context}
                role={ele[5].role}
                skills={ele[5].skills}
                outcome={ele[5].outcome}
                visuals={ele[5].visuals}
                code={ele[5].repo}
                deploy={ele[5].deploy}
                projectId={5}
              />
            }
          />
        </Routes>
        
        
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
