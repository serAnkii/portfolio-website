import React, { useState } from 'react';
import "../css/home.css"

const Home = () => {
  // const [inputValue, setInputValue] = useState("");
  // const [isInputEmpty, setIsInputEmpty] = useState(true);

  // const click = () => {
  //   window.alert("chatbot is under construction")
  // };

  // const handleInputChange = (event) => {
  //   setInputValue(event.target.value);
  //   setIsInputEmpty(event.target.value === "");
  // };

  return (
    <>
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
        {/* <div id='chatbox'>
          <h1>Hii there , How can i help ya?</h1>
          <input
            type="text"
            id='inputtext'
            placeholder='Ask Anything'
            value={inputValue}
            onChange={handleInputChange}
            
          />
          <button onClick={click} disabled={isInputEmpty} className={isInputEmpty ? "disabled" : ""}>go</button>
        </div> */}
      </div>
    </>
  );
};

export { Home };
