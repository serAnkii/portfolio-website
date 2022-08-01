import React from 'react'
import "./home.css"
import { Link } from 'react-router-dom';

export function Home() {
  
  return (
  <>
  <div id='home'>
  <div id='home_button'>
  <button ><Link to="/about">About me</Link></button>
  </div>
  </div>
</>
  )
}

