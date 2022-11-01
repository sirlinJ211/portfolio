import React from "react";
import "./contact.css";
import { FaEnvelope, FaPhone } from "react-icons/fa";
import { GoMarkGithub } from "react-icons/go";

const Contact = () => {
  return (
    <div className="contact page" id="contact">
      <div className="container">
        <h2>Contact</h2>
        <div className="content">
          <div className="numberEmailGithub">
            <div className="icons">
              <div className="circle">
                <FaEnvelope className="icon" />
              </div>
              <p className="contact-email">jeongsirlin@gmail.com</p>
            </div>
            <div className="icons">
              <div className="circle">
                <FaPhone className="icon" />
              </div>
              <p className="contact-number">+1 (226) 977-2967</p>
            </div>
            <div className="icons">
              <div className="circle">
                <GoMarkGithub className="icon" />
              </div>
              <p className="contact-github">
                <a href="https://github.com/sirlinJ211">
                  https://github.com/sirlinJ211
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
