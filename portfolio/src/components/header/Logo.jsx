import React from "react";

const Logo = ({ toggleMenu }) => {
  return (
    <h1 className="header__logo">
      <span onClick={toggleMenu}>
        LeeHyeYeon <br /> Portfolio
      </span>
    </h1>
  );
};

export default Logo;
