import React from "react";
import styled from "styled-components";
import { motion as m } from "framer-motion";
const Contact = () => {
  const [isTyping, setIsTyping] = React.useState(false);

  const handleTyping = (event) => {
    const { value } = event.target;
    setIsTyping(value !== "");
  };
  return (
    <>
      <m.div
      initial={{ width:0 }}
      animate={{ width:"100%" }}
      exit={{ left:window.innerWidth }}
      transition={{ duration: 0.5, ease: "easeInOut" }}
      >
        <Container>
          <FormContainer>
            <Title>Impressed with what you see?</Title>
            <Description>
              Let's chat about everything! I'm eager to hear from you, so go
              ahead and shoot me a message.
            </Description>
            <FormWrapper action="https://formspree.io/f/xwkjzqpr" method="post">
              <FormGroup>
                <Label htmlFor="email">Your email:</Label>
                <Input type="email" id="email" name="email" required />
              </FormGroup>
              <FormGroup>
                <Label htmlFor="message">Your message:</Label>
                <Textarea
                  required
                  id="message"
                  name="message"
                  isTyping={isTyping}
                  onChange={handleTyping}
                ></Textarea>
              </FormGroup>
              <Button type="submit">Send</Button>
            </FormWrapper>
          </FormContainer>
        </Container>
      </m.div>
    </>
  );
};

export { Contact };

const Container = styled.div`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background: #ffffff;
  padding: 2rem;
  border-radius: 0.5rem;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
`;

const Title = styled.h1`
  font-size: 2rem;
  margin-bottom: 1rem;
  color: #333333;
  text-align: center;
`;

const Description = styled.p`
  font-size: 1rem;
  margin-bottom: 2rem;
  color: #666666;
  text-align: center;
`;

const FormWrapper = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  width: 100%;
`;

const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
`;

const Label = styled.label`
  font-size: 1rem;
  font-weight: bold;
  margin-bottom: 0.5rem;
  color: #333333;
`;

const Input = styled.input`
  padding: 0.5rem;
  border: 1px solid #cccccc;
  border-radius: 0.3rem;
`;

const Textarea = styled.textarea`
  padding: 0.5rem;
  border: 1px solid #cccccc;
  border-radius: 0.3rem;
  resize: vertical;
  height: 20rem;
  background-image: ${(props) => (props.isTyping ? `url("/cat.gif")` : "none")};
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
`;

const Button = styled.button`
  padding: 0.5rem 1rem;
  background: #0055d6;
  color: #ffffff;
  border: none;
  border-radius: 0.3rem;
  cursor: pointer;
  font-weight: bold;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #0041a8;
  }
`;
