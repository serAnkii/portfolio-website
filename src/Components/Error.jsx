import "./error.css"


import React from 'react'
import { useNavigate } from 'react-router-dom'
export function Error() {
    let redirect= useNavigate();
  return (
    <div id="error">
      <h4 id="text">
        Error occured!!
      </h4>
        
    <br />
<button id="butt" onClick={()=>{
        redirect("/")
    }}>Redirect to home page?</button>
    </div>

  )
}

