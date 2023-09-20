import React from "react";
import styled from "styled-components";
import { motion as m , AnimatePresence } from "framer-motion";
const Contact = () => {
  return (
    <>
    <AnimatePresence>
      <m.div
      initial={{ width:0 }}
      animate={{ width:"100%" }}
      exit={{ position:"relative",left:window.innerWidth }}
      transition={{ duration: 0.5, ease: "easeInOut" }}
      >
        <Container>
          <FormContainer>
            <Title>Feel Free to Contact Me !!!</Title>
            <Description>
              Let's chat about everything! I'm eager to hear from you, so go
              ahead and shoot me a message.
            </Description>
            <FormWrapper action="https://formspree.io/f/xwkjzqpr" method="post">
              <FormGroup>
                <Label htmlFor="email" >Your email:</Label>
                <Input type="email" id="email" name="email" required placeholder="Enter a Valid mail HERE"/>
              </FormGroup>
              <FormGroup>
                <Label htmlFor="message">Your message:</Label>
                <Textarea
                  required
                  id="message"
                  name="message"
                  placeholder="Type a Sweet Note HERE"
                ></Textarea>
              </FormGroup>
              <Button type="submit">Send</Button>
            </FormWrapper>
          </FormContainer>
        </Container>
      </m.div>
      </AnimatePresence>
    </>
  );
};

export { Contact };

const Container = styled.div`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: start;
`;

const FormContainer = styled.div`
  display: flex;
  margin-top:2%;
  flex-direction: column;
  align-items: center;
  background: #EDE7FA;
  padding: 1rem;
  border-radius: 0.5rem;
  box-shadow: 0 1px 10px #9D7FEA;
`;

const Title = styled.h1`
  font-size: 3rem;
  margin-bottom: 1rem;
  color: #9D7FEA;
  text-align: center;
  font-family:cursive;
`;

const Description = styled.p`
  font-size: 1.5rem;
  margin-bottom: 2rem;
  color:  #3D281D;
  text-align: center;
  font-family:cursive;
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
  font-size: 2rem;
  font-weight: bold;
  font-family:cursive;
  margin-bottom: 0.5rem;
  color: #333333;
`;

const Input = styled.input`
  padding: 0.5rem;
  border:none;
  outline:none;
  border-radius: 0.3rem;
  background: none;
  font-family:cursive;

`;

const Textarea = styled.textarea`
  outline:none;
  padding: 0.5rem;
  border:none;
  border-radius: 0.3rem;
  resize: vertical;
  height: 20rem;
  background:none;
  background-image: ${(props) => (props.isTyping ? `url("/cat.gif")` : "none")};
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  font-family:cursive;
`;

const Button = styled.button`
  width:fit-content;
  padding: 0.5rem 1rem;
  background: #9D7FEA;
  color:  #3D281D;
  border: none;
  border-radius: 0.3rem;
  cursor: pointer;
  font-weight: bold;
  transition: background-color 0.3s ease;
  padding:1rem;
`;
