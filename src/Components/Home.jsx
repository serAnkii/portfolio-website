import React, { useState } from 'react';
import "../css/home.css"

const Home = () => {
  const [inputValue, setInputValue] = useState("");
  const [isInputEmpty, setIsInputEmpty] = useState(true);

  const click = () => {
    window.alert("chatbot is under construction")
  };

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
    setIsInputEmpty(event.target.value === "");
  };

  return (
    <>
      <div id="home">
        <div id="tagline">
          <h1>
            Welcome to my Dark
          </h1>
          <h1 id='redtext'>" Less "  </h1>
          <h1> Side</h1>
        </div>
        <div id='chatbox'>
          <h1>Hii there , How can i help ya?</h1>
          <input
            type="text"
            id='inputtext'
            placeholder='Ask Anything'
            value={inputValue}
            onChange={handleInputChange}
          />
          <button onClick={click} disabled={isInputEmpty} className={isInputEmpty ? "disabled" : ""}>go</button>
        </div>
      </div>
    </>
  );
};

export { Home };
