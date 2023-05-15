import { Canvas } from "@react-three/fiber";
import "../css/home.css";
import styled from "styled-components";
import React from "react";

const Home = () => {
  return (
    <>
      <div id="home">
        <Container1>
          <Div id="div1">
          <Text1 id="text1">Code</Text1> <Text2>is my paintbrush,</Text2>
          </Div>
          <Div id="div2">
          <Text2>
            and the</Text2> <Text1 id="text1">Web</Text1><Text2> is my canvas.</Text2>
          </Div>
          <Div id="div3">
          <Text2 id="textdiv3">Let me craft an extraordinary online presence that leaves a lasting impression.</Text2>
          </Div>
        </Container1>
      </div>
    </>
  );
};

export { Home };

const Container1 = styled.div`
  position: relative;
  height: 100vh;
  display: flex;
  flex-direction:column;
  justify-content: center;
  text-align: center;

`;

const Div = styled.div`
  height:fit-content;
  border-radius: 255px 15px 225px 15px/15px 225px 15px 255px;
  border:dashed 1px white;
  width:60vw;
  display:flex;
  align-items:center;
  // justify-content:center;
  gap:3rem;
  padding:1rem;
  letter-spacing:5px;
`

const Text1 = styled.h1`
  font-size: 5rem;
  font-weight: bold;
  color: #2f2f2f;
  z-index: 1;
  text-shadow: 0px 0px 10px rgba(0, 0, 0, 0.25);
  height-fit-content;
  margin:0;
`;

const Text2 = styled.h2`
  font-size: 5rem;
  color: #4f4f4f;
  z-index: 1;
  color: white;
  font-family:"Roboto mono";
  line-height:6rem;
`;
