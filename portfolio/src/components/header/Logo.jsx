import React from "react";
import { Link } from "react-router-dom";

const Logo = ({ toggleMenu }) => {
  return (
    <div className="header__logo">
      <Link to="/">
        <span onClick={toggleMenu}>LeeHyeYeon Portfolio</span>
      </Link>
    </div>
  );
};

export default Logo;
