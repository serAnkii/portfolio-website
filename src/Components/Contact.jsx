import React from 'react'
import "./form.css"
export function Contact() {

  return (
    <>
    <div id='form'>
        <form action="/">
        <label htmlFor="name">NAME</label>
        <input type="text" id="name" /><br />
        <label htmlFor="email">EMAIL</label>
        <input type="email" id="email" /><br />
        <label htmlFor="topic">TOPIC</label>
        <input type="text" id="topic" /><br />
        <input type="submit" id="submit" />   
        </form>
     </div> 
    </>
  )
}

