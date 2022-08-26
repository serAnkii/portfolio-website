import React from 'react'
import "./projects.css"
import {ProjectCards} from './ProjectCards' 
export function Projects() {

  return (
  <>
  <h1 id='headingofprojects'>These are some projects made by me:-</h1>
  <div className='cards_Container'>
 <ProjectCards />
 </div>
  </> )
}

