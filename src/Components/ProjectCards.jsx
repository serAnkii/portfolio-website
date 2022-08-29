import React from "react";
import './projects.css'

export function ProjectCards(props){
  return (
    <>
    {props.data.map((ele)=>{
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
