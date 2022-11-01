import React from "react";
import "./intro.css";
import Background from "../../source/intro.jpg";

const Intro = () => {
  return (
    <div className="intro page">
      <div className="container">
        <div className="content">
          <div className="background">
            <img src={Background} alt="intro" />
            <div className="intro-text">
              <div className="intro-box">
                <div className="intro-intro">Hi! I'm,</div>
                <div className="name-box">
                  <div className="intro-name first">SIRLIN JEONG.</div>
                  <div className="intro-name second">SIRLIN JEONG.</div>
                </div>
                <p className="intro-job">
                  A FULL STACK <br />
                  DEVELOPER
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Intro;
