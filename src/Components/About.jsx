import React from 'react'
import { RiPagesLine } from 'react-icons/ri'
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
  <div class="grid-item1"> <h2>I'am a<br /></h2> <br /></div>
  <div class="grid-item2"><p ><TypewriterComponent onInit={text} options={{autoStart:true,loop:true,}}/></p>
</div>
  <div class="grid-item3"><h1>This is my  <RiPagesLine/></h1></div>
  <div class="grid-item4"><a href="https://drive.google.com/drive/folders/1cPsEL96CIrUwhvxv1ZcxV0Mo2zS6t_3m" target="_">RESUME </a>
</div>
  <div class="grid-item5">5</div>
  <div class="grid-item6">6</div>
</div>
    
    </>
  )
}

