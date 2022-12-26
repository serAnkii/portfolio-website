import React from 'react'
import TypewriterComponent from 'typewriter-effect'
import "./about.css"
export function About() {
  function text(typewriter){
    typewriter.typeString("STUDENT").pauseFor(2000).deleteAll().start();
    typewriter.typeString("PROGRAMMER").pauseFor(2000).deleteAll().start();
    typewriter.typeString("WEB DEVELOPER").pauseFor(2000).deleteAll().start();
    
}
  return (
    
  <>
    <div class="about"> 
      <div id="type">
        <div id='typewrite'>
              <h2>I'am Ankit Negi</h2>
              <div >
              <p id='item2' ><TypewriterComponent onInit={text} options={{autoStart:true,loop:true,}}/></p>
              </div>
        </div>
      </div>
      <div id='resume' >
          <h1>What i've done and what can i do</h1>
          <p>Feel free to take a deeper look at what I've accomplished over the years and what I'm able to do for you.</p>
          <a href="https://drive.google.com/drive/folders/1cPsEL96CIrUwhvxv1ZcxV0Mo2zS6t_3m" target="_">RESUME </a>
      </div>
    </div>
      
  </>
  )
}

