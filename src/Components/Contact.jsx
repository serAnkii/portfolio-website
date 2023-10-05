import React from "react";
import "../css/contact.css";
import {AiOutlineGithub ,AiOutlineLinkedin, AiOutlineInstagram,AiOutlineTwitter} from 'react-icons/ai'
import {FaXTwitter} from "react-icons/fa6"
const Contact = () => {
  return (
    <div className="common" id="contactdiv">
      <span class="bigcircle"></span>
      <img src="/shape.png" class="square" alt="" />
      <div className="form">
        <div className="contactinfo">
          <h3 className="title">Let's get in touch</h3>
          <p className="text">
            Feel Free to Connect!
          </p>

          <div className="info">
            <div className="information">
              <img src="/location.png" class="icon" alt="" />
              <p>Dehradun , INDIA</p>
            </div>
            <div className="information">
              <img src="/email.png" class="icon" alt="" />
              <p>recruitankitnegi2023@gmail.com</p>
            </div>
            <div className="information">
              <img src="/phone.png" className="icon" alt="" />
              <p>+91 9548623471</p>
            </div>
          </div>

          <div className="socialmedia">
            <p className="findme">Find me here :</p>
            <div className="socialicons">
              <a href="https://github.com/serAnkii/" target="_blank"  className="socialicon">
                <i><AiOutlineGithub /></i>
              </a>
              <a href="https://www.linkedin.com/in/ankit-negi-63289621a/" target="_blank" className="socialicon">
                <i><AiOutlineLinkedin fill="var(--whiteshade)" /></i>
              </a>
              <a href="https://www.instagram.com/ankit_negi______/" target="_blank" className="socialicon">
                <i><AiOutlineInstagram fill="var(--whiteshade)"/></i>
              </a>
              <a href="https://twitter.com/AnkitNe14613482" target="_blank" className="socialicon">
                <i><FaXTwitter fill="var(--whiteshade)"/></i>
              </a>
            </div>
          </div>
        </div>
        <div className="contactform">
          <span className="circle one"></span>
          <span className="circle two"></span>
          <form action="https://formspree.io/f/xwkjzqpr" autocomplete="off" method="post">
            <h3 className="title">Contact me</h3>
            <div className="inputcontainer">
              <input type="text" name="name" placeholder="Please enter your name" className="input" required />
             
              
            </div>
            <div className="inputcontainer">
              <input type="email" placeholder="Enter a valid Email" name="email" className="input" required />
              
            
            </div>
            <div className="inputcontainer textarea" >
              <textarea name="message" placeholder="Enter you message" className="input" required></textarea>
              
              
            </div>
            <input type="submit" value="Send"  className="btn" />
          </form>
        </div>
      </div>
    </div>
  );
};

export { Contact };

