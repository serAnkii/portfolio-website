import React from 'react'
import TypewriterComponent from 'typewriter-effect'
import "./home.css"
import { Link } from 'react-router-dom';

export function Home() {
  function text(typewriter){
      typewriter.typeString("STUDENT").pauseFor(2000).deleteAll().start();
      typewriter.typeString("PROGRAMMER").pauseFor(2000).deleteAll().start();
      typewriter.typeString("WEB DEVELOPER").pauseFor(2000).deleteAll().start();
      typewriter.typeString("DEV-OPS ENTHUSIAST").pauseFor(2000).deleteAll().start();
      
  }
  return (
  <>
  <div id='home'>
    <h1>HII:THERE <br />🙋‍♂️ </h1>
    <div id='subhome'>
      <h2>I'am Ankit <br /></h2> <br />
      <div id='home3'>
      <p >
        <TypewriterComponent onInit={text}/>
      </p>
      </div>
    </div>
  </div>
  <div id='home_button'>
  <button ><Link to="/about">About me</Link></button>
  </div>
</>
  )
}

