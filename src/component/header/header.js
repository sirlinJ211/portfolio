import React from "react";
import { Link } from "react-router-dom";
import Logo from "../../source/logo-sirlin.png";
import "./header.css";

const Header = () => {
  return (
    <header>
      <nav className="header">
        <div className="logo">
          <Link to="/">
            <img src={Logo} alt="logo" />
          </Link>
        </div>
      </nav>
    </header>
  );
};

export default Header;
