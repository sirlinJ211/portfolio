import React, { useEffect } from "react";
import "./about.css";
import about from "../../source/about.png";
import AOS from "aos";

const About = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <div className="about page" id="about">
      <div className="container">
        <h2 className="aboutH1">About Me</h2>
        <div className="contents">
          <div
            className="content col1"
            data-aos="fade-up"
            data-aos-duration="3000"
          >
            <img className="aboutImg" src={about} alt="about" />
          </div>
          <div className="content col2" data-aos="fade-up">
            <p>
              I'm <span>SIRLIN JEONG</span> , and a{" "}
              <span>Full Stack Developer</span> located in London Ontario
            </p>
            <p>
              I'm passionate about choosing a theme for a site, building code
              and learning to incorporate new functions.
            </p>
            <p>
              My personality type is <span>ISFJ</span>. I have the advantage of
              meticulously confirming my work, and I am also conscientious,
              organized and persistent until the end of the job.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
