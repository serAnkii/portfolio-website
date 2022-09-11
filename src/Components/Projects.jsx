import React from 'react'
import "./projects.css"
import {ProjectCards} from './ProjectCards' 
import { data } from './api'
export function Projects() {
//state variable
const [currele,setele] = React.useState(data);

//function to show only pirticualr cateogary of cards
const filterItem = (arg)=>{
const updatedlist = data.filter((ele)=>{
  return ele.group===arg
})
setele(updatedlist);
}


  return (
  <>

  <div id='buttons'>
    <button className="category" onClick={()=>{
      filterItem("ml");
    }}>Machine Learning</button>
    
    
    <button className="category" onClick={()=>{
      filterItem("development");
    }}>Web-Development</button>


    <button className="category" onClick={()=>{
      filterItem("blockchain");
    }}>Blockchain</button>


    <button className="category" onClick={()=>{
      setele(data);
    }}>ALL</button>
  </div>
  <div id='parentcontainer'>
  <div id="container">
  <ProjectCards data={currele} />
  </div>
  </div>
  </> )
}

