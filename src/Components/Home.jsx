import React, { useState } from 'react';
import "../css/home.css"

const Home = () => {
  
  
  return (
    <>
      <img src="eyeback8.jpg" alt="" style={{
        width:"10px",
        height:"10px",
        position:'relative'
        
      }} />
      <div id="home">
        <div id="tagline">
          <h1>If(code works)</h1>
          <h2>everyone asks how ???</h2>
          <h1>Thank God</h1>
          <h2>I didn't pass the (if) Condition</h2>
          <h1>(else)</h1>
          <h2 id='cyan'>How to answer how without knowing how???</h2>
          <h1>It's just WOAH !!!</h1>
        </div>
        <div id='quote'>
          <h1>welcome to my Dark</h1>
          <h1 id='seperate'>"less"</h1>
          <h1>Side...</h1>
        </div>
        
        
      </div>
      
    </>
  );
};

export { Home };
