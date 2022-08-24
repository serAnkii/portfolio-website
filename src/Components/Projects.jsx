import React from 'react'
import "./projects.css"
import Projectcards from "./Projectcards"

export function Projects() {
  return (<>

  
  <div>
      <h1 id='project'>These are the some projects Made by me</h1>
      <div id='cards'> 
      <Projectcards name="web3_twitter" image="./t.jpg" button="google.com"/>
      <Projectcards name="credit card fraud detection" img="url(t.jpg)"/>
      <Projectcards name="face recognisation attendence system"/>
      <Projectcards name="portfolio_website"/>
      <Projectcards name="Blockchain based food distribution system"/>
      </div>
    </div>
  
  </> )
}

