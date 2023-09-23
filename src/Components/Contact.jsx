import React from "react";
import "../css/contact.css";
import {AiOutlineGithub ,AiOutlineLinkedin, AiOutlineInstagram,AiOutlineTwitter} from 'react-icons/ai'
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
            <p>Find me here :</p>
            <div className="socialicons">
              <a href="">
                <i><AiOutlineGithub/></i>
              </a>
              <a href="#">
                <i><AiOutlineLinkedin/></i>
              </a>
              <a href="#">
                <i><AiOutlineInstagram/></i>
              </a>
              <a href="#">
                <i><AiOutlineTwitter/></i>
              </a>
            </div>
          </div>
        </div>
        <div className="contactform">
          <span className="circle one"></span>
          <span className="circle two"></span>
          <form action="index.html" autocomplete="off">
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

// https://formspree.io/f/xwkjzqpr
