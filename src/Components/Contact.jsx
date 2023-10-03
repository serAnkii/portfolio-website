import React from "react";
import "../css/contact.css";
import ContactNav from "./ContactNav ";
import {AiOutlineGithub ,AiOutlineLinkedin, AiOutlineInstagram,AiOutlineTwitter} from 'react-icons/ai'
const Contact = () => {
  return (
    <div className="common" id="contactdiv">
      {/* <ContactNav/> */}
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
              <a href="https://github.com/serAnkii/" target="_blank">
                <i><AiOutlineGithub/></i>
              </a>
              <a href="https://www.linkedin.com/in/ankit-negi-63289621a/" target="_blank">
                <i><AiOutlineLinkedin/></i>
              </a>
              <a href="https://www.instagram.com/ankit_negi______/" target="_blank">
                <i><AiOutlineInstagram/></i>
              </a>
              <a href="https://twitter.com/AnkitNe14613482" target="_blank">
                <i><AiOutlineTwitter/></i>
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
              <input type="text" name="name" className="input" required />
              <label for="">Name</label>
              <span>Name</span>
            </div>
            <div className="inputcontainer">
              <input type="email" name="email" className="input" required />
              <label for="">Email</label>
              <span>Email</span>
            </div>
            <div className="inputcontainer textarea">
              <textarea name="message" className="input" required></textarea>
              <label for="">Message</label>
              <span>Message</span>
            </div>
            <input type="submit" value="Send" className="btn" />
          </form>
        </div>
      </div>
    </div>
  );
};

export { Contact };

