import React from "react";
import Intro from "../intro/intro";
import About from "../about/about";
import Skill from "../skill/skill";
import Works from "../works/works";
import Contact from "../contact/contact";
import Footer from "../footer/footer";
import "./home.css";
import Header from "../header/header";

const Home = () => {
  return (
    <div className="home" id="home">
      <Header />
      <div className="page-box">
        <Intro />
        <About />
        <Works />
        <Skill />
        <Contact />
      </div>
      <Footer />
    </div>
  );
};

export default Home;
