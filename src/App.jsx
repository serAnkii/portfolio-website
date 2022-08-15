import "./style.css"
import {Home} from "./Components/Home"
import {About} from "./Components/About"
import {Projects} from './Components/Projects'
import { Error } from "./Components/Error"

import { Route,Routes} from "react-router-dom";
import { Link } from "react-router-dom"


//icons 
import {RiHomeSmileFill} from "react-icons/ri"
import {SiAboutdotme,SiTwitter} from "react-icons/si"
import {GiThorHammer} from 'react-icons/gi'
import {GoMarkGithub} from 'react-icons/go'
import {BsInstagram} from "react-icons/bs"

export default function App(){


  return(
    <>

    <div id="body">    
        <div id="main">
                      
                      <div id="title">
                        <h1>Ankit <span id='negi' style={{color:"hsl(211deg 87% 64%)"}}>Negi</span></h1>
                      </div> 
                            
                      <div id="links">
                          <Link className="link" to="/"><RiHomeSmileFill/>  HOME</Link>
                          <Link className="link" to="/about">ABOUT   <SiAboutdotme/></Link>
                          <Link className="link" to="/project"><GiThorHammer />   PROJECTS</Link>
                      </div>
                        
                      <div id="links2">
                            <h1 className="social"><SiTwitter fill="#53a1f2"/></h1>
                            <h1 className="social"><BsInstagram fill="#c536a0"/></h1>
                            <h1 className="social"><GoMarkGithub/></h1>
                        </div>
                  </div>
            <Routes >
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/project" element={<Projects />} />
            <Route path="*" element={<Error />}/>
            </Routes>
          {/* <footer>
            sfasdfadfadfadf
          </footer> */}
 
  </div>

    </>
  );
}   