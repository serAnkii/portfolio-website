import React from "react";
import "./cards.css"

export default function Projectcards(props){
    console.log(props.image)
    return (
        <>
        <div id="card" >
        <img src={props.image} alt="image" />
        <h1>{props.name}</h1>


        </div>
        </>
    );
}