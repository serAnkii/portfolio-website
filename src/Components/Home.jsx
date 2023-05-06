import { Canvas } from "@react-three/fiber";
import "../css/home.css";
import styled from "styled-components";

const Home = () => {
  return (
    <>
      <div id="home">
        <Container>
          <Text1>
           A WEB-DEVELOPER
          </Text1>
          <Text2>
            Your company can rely upon
          </Text2>
        </Container>

        
      </div>
    </>
  );
};

export { Home };

const Container = styled.div`
  position: relative;
  height: 80vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
`;

const Text1 = styled.h1`
  font-size: 6rem;
  font-weight: bold;
  color: #2f2f2f;
  position: absolute;
  top: 10%;
  left: 50%;
  transform: translate(-50%, -10%);
  z-index: 1;
  text-shadow: 0px 0px 10px rgba(0, 0, 0, 0.25);
`;

const Text2 = styled.h2`
  font-size: 2.5rem;
  color: #4f4f4f;
  position: absolute;
  top: 35%;
  left: 50%;
  transform: translate(-50%, -35%);
  z-index: 1;
  text-shadow: 0px 0px 10px rgba(0, 0, 0, 0.25);
`;


