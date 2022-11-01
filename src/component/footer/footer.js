import React, { useState } from "react";
import { Link } from "react-scroll";
import "./footer.css";
import { FaBars, FaTimes } from "react-icons/fa";

const Footer = () => {
  const [click, setClick] = useState(false);
  const handleClick = () => {
    setClick(!click);
  };
  return (
    <div className="footer">
      <div className={click ? "lists active" : "lists"}>
        <div className="list">
          <Link
            className="list-link"
            activeClass="active"
            to="home"
            spy={true}
            smooth={true}
            offset={-100}
            duration={500}
          >
            HOME
          </Link>
        </div>
        <div className="list">
          <Link
            className="list-link"
            activeClass="active"
            to="about"
            spy={true}
            smooth={true}
            offset={-10}
            duration={500}
          >
            ABOUT
          </Link>
        </div>
        <div className="list">
          <Link
            className="list-link"
            activeClass="active"
            to="works"
            spy={true}
            smooth={true}
            offset={-10}
            duration={500}
          >
            WORKS
          </Link>
        </div>
        <div className="list">
          <Link
            className="list-link"
            activeClass="active"
            to="skill"
            spy={true}
            smooth={true}
            offset={-10}
            duration={500}
          >
            SKILL
          </Link>
        </div>
        <div className="list">
          <Link
            className="list-link"
            activeClass="active"
            to="contact"
            spy={true}
            smooth={true}
            offset={50}
            duration={500}
          >
            CONTACT
          </Link>
        </div>
      </div>

      <div className="zip" onClick={handleClick}>
        {click ? <FaTimes size={20} /> : <FaBars size={20} />}
      </div>
    </div>
  );
};

export default Footer;
