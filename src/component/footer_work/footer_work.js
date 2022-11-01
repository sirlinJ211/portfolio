import React from "react";
import { Link } from "react-router-dom";
import "./footer_work.css";

const FooterWork = () => {
  return (
    <div className="footerWork">
      <div className="lists">
        <div className="list">
          <Link to="/" className="list-link">
            HOME
          </Link>
        </div>
      </div>
    </div>
  );
};

export default FooterWork;
