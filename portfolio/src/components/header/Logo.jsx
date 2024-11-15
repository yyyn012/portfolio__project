import React from "react";

const Logo = ({ toggleMenu }) => {
  return (
    <div className="header__logo">
      <span onClick={toggleMenu}>LeeHyeYeon Portfolio</span>
    </div>
  );
};

export default Logo;
