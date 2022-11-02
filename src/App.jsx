import "./style.css"
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

    <div id="body" >    
        <div id="main">
        
        <div id="title">
          <h1 id="ankit">RDIT <span id='negi' style={{color:"hsl(211deg 87% 64%)"}}>User=Ankit_Negi</span><br></h1>
        </div> 
              
        <div id="links">
            <Link className="link" to="/">ABOUT   <SiAboutdotme/></Link>
            <Link className="link" to="/project"><GiThorHammer />   PROJECTS</Link>
        </div>
          
        <div id="links2">
              <h1 className="social" id="twitter"><a href="https://twitter.com/AnkitNe14613482" target="_blank"><SiTwitter fill="#53a1f2"/></a></h1>
              <h1 className="social" id="insta"><BsInstagram fill="#c536a0"/></h1>
              <h1 className="social" ><a href="https://www.github.com/serAnkii" target="_blank"><GoMarkGithub /></a></h1>
          </div>
    </div>
    <Routes >
    <Route path="/" element={<About />} />
    <Route path="/project" element={<Projects />} />
    <Route path="*" element={<Error />}/>
    </Routes>
  <footer>
    All rights reserved | Ankit Negi
  </footer>

  </div>

    </>
  );
}   
