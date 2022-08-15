import React from 'react'
import { RiPagesLine  } from 'react-icons/ri'
import {CgArrowLongRightC} from 'react-icons/cg'
import TypewriterComponent from 'typewriter-effect'
import "./about.css"
export function About() {
  function text(typewriter){
    typewriter.typeString("STUDENT").pauseFor(2000).deleteAll().start();
    typewriter.typeString("PROGRAMMER").pauseFor(2000).deleteAll().start();
    typewriter.typeString("WEB DEVELOPER").pauseFor(2000).deleteAll().start();
    typewriter.typeString("DEV-OPS ENTHUSIAST").pauseFor(2000).deleteAll().start();
    
}
  return (
    
    <>
    <div class="about">
<div id='typerwrite'>  
  <div id='item1'> <h2>I'am a <CgArrowLongRightC/></h2></div>
  <div >
    <p id='item2' ><TypewriterComponent onInit={text} options={{autoStart:true,loop:true,}}/></p>
  </div>
</div>
  <div ><h1>This is my  <RiPagesLine/></h1></div>
  <div >
    <a href="https://drive.google.com/drive/folders/1cPsEL96CIrUwhvxv1ZcxV0Mo2zS6t_3m" target="_">RESUME </a>
  </div>
</div>
    
    </>
  )
}

