import React from 'react'
import "./projects.css"
import {ProjectCards} from './ProjectCards'
import {data} from "./api"
import { useState } from 'react'
export function Projects() {
  const [cardelem,setcardelem] = React.useState(data);
  return (
  <>
  <div className='cards_Container'>
 <ProjectCards />
 </div>
  </> )
}

