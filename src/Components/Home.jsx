import { Canvas } from "@react-three/fiber";
import "../css/home.css";
import styled from "styled-components";
import { AiOutlineStar } from "react-icons/ai";

const Home = () => {
  return (
    <>
      <div id="home">
        <Container1>
          <Text1 id="text1">
            A WEB-DEVELOPER
            {/* <span id="stars">
              <h1>*</h1>
              <h1>*</h1>
              <h1>*</h1>
              <h1>*</h1>
            </span> */}
          </Text1>
          <Text2>Your company can rely upon</Text2>
        </Container1>
        {/* <Container1>
          <Text1>A WEB-DEVELOPER</Text1>
          <Text2>Your company can rely upon</Text2>
        </Container1>
        <Container1>
          <Text1>A WEB-DEVELOPER</Text1>
          <Text2>Your company can rely upon</Text2>
        </Container1>
        <Container1>
          <Text1>A WEB-DEVELOPER</Text1>
          <Text2>Your company can rely upon</Text2>
        </Container1>
        <Container1>
          <Text1>A WEB-DEVELOPER</Text1>
          <Text2>Your company can rely upon</Text2>
        </Container1> */}
      </div>
    </>
  );
};

export { Home };

const Container1 = styled.div`
  position: relative;
  flex-direction: column;
  height: 92vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  scroll-snap-align: center;
`;

const Text1 = styled.h1`
  font-size: 6rem;
  font-weight: bold;
  color: #2f2f2f;
  transform: translate(-50%, -10%);
  z-index: 1;
  text-shadow: 0px 0px 10px rgba(0, 0, 0, 0.25);
`;

const Text2 = styled.h2`
  font-size: 2.5rem;
  color: #4f4f4f;
  transform: translate(-50%, -35%);
  z-index: 1;
  text-shadow: 0px 0px 10px rgba(0, 0, 0, 0.25);
`;
