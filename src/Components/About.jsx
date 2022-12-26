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
      
        <div id='typewrite'>
              <h2>I'am Ankit Negi</h2>
              <div >
              <p id='item2' ><TypewriterComponent onInit={text} options={{autoStart:true,loop:true,}}/></p>
              <p>Hi there! I was born and raised in Dehradun. My main expertise lies in website design, though I do dabble in Blockchain and machine learning. If you like my site, don’t hesitate to reach out!</p>
              </div>
        </div>
        <div id='details'>  
        <h1>What i Like</h1>
        <ul>
          <li>Interest in traveling to new locations to learn about different cultures</li>
          <li>Watching English Movies and listening to the songs</li>
          <li>Improving myself </li>
        </ul>
        <h1>My Tech Stack</h1>
        <ul>
          <h2>Development:</h2>
          <li>HTML,CSS</li>
          <li>JavaScript</li>
          <li>React</li>
          <h2>Programming</h2>
          <li>Java</li>
          <li>C++</li>
          <h2>Machine Learning</h2>
          <li>Python</li>
          <h2>Blockchain</h2>
          <li>Solidity</li>
          <h1>Database</h1>
          <li>mySQL</li>
          <li>MongoDB</li>
        </ul>
        </div>
    </div>
      
  </>
  )
}

