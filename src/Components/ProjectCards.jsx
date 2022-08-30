import React from "react";
import './projectcard.css'

export function ProjectCards(props){
  return (
    <>
    {props.data.map((ele)=>{
        return(
        <>  
        <div class="card">  
          <div class="card-image" style={{background:ele.image}}>
          
          </div>
          
          <div class="card-text">
            <h2>{ele.name}</h2>
            <p>{ele.description}</p>
          </div>
        </div>
        </>
        )
    })}
    </>
  )
}
