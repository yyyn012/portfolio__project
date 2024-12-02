import React from "react";
import { Link } from "react-router-dom";

const Contact = () => {
  return (
    <div id="contact">
      <h1 className="subject__txt">
        <i className="fa-solid fa-asterisk"></i>Contact
      </h1>

      <div className="contact__wrap">
        <span>
          github :
          <a href="https://github.com/yyyn012"> https://github.com/yyyn012</a>
        </span>
        <span>e-main : yyyn12_@naver.com</span>
      </div>
    </div>
  );
};

export default Contact;
