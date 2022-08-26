import React from "react";
import './projects.css'
import {data} from './api'

export function ProjectCards(){
  return (
    <>
    {data.map((ele)=>{
        return(
        <>  
            <div className="card" key={ele.id}>
            <h2>{ele.name}</h2>
            <p>{ele.description}</p>
            <img src={ele.image} alt="" />
            </div>
        </>
        )
    })}
    </>
  )
}
