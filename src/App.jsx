import "./style.css"
import {Home} from "./Components/Home"
import {About} from "./Components/About"
import {Contact} from  "./Components/Contact"
import {Projects} from './Components/Projects'
import { Error } from "./Components/Error"
import Additional from "./Components/Additional"

import { Route,Routes} from "react-router-dom";
import { Link } from "react-router-dom"
import { useState } from "react"

//icons 
import {RiHomeSmileFill} from "react-icons/ri"
import {SiAboutdotme} from "react-icons/si"
import {GrProjects} from 'react-icons/gr'
import {MdOutlineConnectWithoutContact} from "react-icons/md"
import {GiHamburgerMenu} from "react-icons/gi"

export default function App(){
  const [count , chnagecount] = useState(0);
  const [style,changesty] = useState({left:'-1500',top:'0'});
  const [buttonshadow,changeshadow]=useState({boxShadow: '4px 3px 3px black',
  borderRadius: '10PX',
  backgroundColor:'coral'});

  function shadow()
  {
    

    // for hiding the bar
    if(count===0){
      changesty({left:'0',top:'0'})
        chnagecount(1);
        changeshadow({boxShadow: '4px 3px 40px 10000px coral',borderRadius: '100PX' , color:'white',backgroundColor: 'rgb(104, 53, 192)'});
    }
    else {
      changesty({left:'-1500',top:'0'});
      chnagecount(0);
      changeshadow({boxShadow: '4px 3px 10px black',borderRadius: '10PX',backgroungColor:'coral'});
    }
  }


  return(
    <>
    <div>
    <div id="hamburger">
    <button id="button" onClick={shadow}  style={buttonshadow}> <GiHamburgerMenu/></button>
    <nav style={style}>
      {/* <a id="home" href="/">Home</a>
      <a  id="project" href="/project">Projects</a>
      <a id="" href="/about">About</a>
      <a href="/contact">Contact page </a> */}
 
      
  <Link to="/"><RiHomeSmileFill/>  HOME</Link>
  <Link to="/about">ABOUT   <SiAboutdotme/></Link>
  <Link to="/project"><GrProjects />   PROJECTS</Link>
  <Link to="/contact"><MdOutlineConnectWithoutContact/>   CONTACT</Link>
  <Link to="/additional">Additional things</Link>

    </nav>
      <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/project" element={<Projects />} />
      <Route path="/additional" element={<Additional />} />
      <Route path="*" element={<Error />}/>
      </Routes>
  </div>
    <footer>
  <a href="https://github.com/serAnkii">
  <svg fill="#000000" xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 64 64" width="64px" height="64px"><path d="M32 6C17.641 6 6 17.641 6 32c0 12.277 8.512 22.56 19.955 25.286-.592-.141-1.179-.299-1.755-.479V50.85c0 0-.975.325-2.275.325-3.637 0-5.148-3.245-5.525-4.875-.229-.993-.827-1.934-1.469-2.509-.767-.684-1.126-.686-1.131-.92-.01-.491.658-.471.975-.471 1.625 0 2.857 1.729 3.429 2.623 1.417 2.207 2.938 2.577 3.721 2.577.975 0 1.817-.146 2.397-.426.268-1.888 1.108-3.57 2.478-4.774-6.097-1.219-10.4-4.716-10.4-10.4 0-2.928 1.175-5.619 3.133-7.792C19.333 23.641 19 22.494 19 20.625c0-1.235.086-2.751.65-4.225 0 0 3.708.026 7.205 3.338C28.469 19.268 30.196 19 32 19s3.531.268 5.145.738c3.497-3.312 7.205-3.338 7.205-3.338.567 1.474.65 2.99.65 4.225 0 2.015-.268 3.19-.432 3.697C46.466 26.475 47.6 29.124 47.6 32c0 5.684-4.303 9.181-10.4 10.4 1.628 1.43 2.6 3.513 2.6 5.85v8.557c-.576.181-1.162.338-1.755.479C49.488 54.56 58 44.277 58 32 58 17.641 46.359 6 32 6zM33.813 57.93C33.214 57.972 32.61 58 32 58 32.61 58 33.213 57.971 33.813 57.93zM37.786 57.346c-1.164.265-2.357.451-3.575.554C35.429 57.797 36.622 57.61 37.786 57.346zM32 58c-.61 0-1.214-.028-1.813-.07C30.787 57.971 31.39 58 32 58zM29.788 57.9c-1.217-.103-2.411-.289-3.574-.554C27.378 57.61 28.571 57.797 29.788 57.9z"/></svg>
  </a>
    </footer>
    </div>
    </>
  );
}   