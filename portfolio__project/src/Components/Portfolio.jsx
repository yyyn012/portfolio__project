import React, { useState } from "react";
import AboutMe from "./AboutMe";
import Menu from "./Menu";
import className from "className";
import "./Portfolio.scss";

const Portfolio = ({ size, color }) => {
  return (
    <div className={className("Div", size, color)}>
      <h1>Portfolio</h1>
      <Menu />
      <AboutMe />
    </div>
  );
};

export default Portfolio;
