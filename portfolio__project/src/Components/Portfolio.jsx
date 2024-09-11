import React, { useState } from "react";
import AboutMe from "./AboutMe";
import Menu from "./Menu";
import "./Portfolio.scss";

const Portfolio = () => {
  return (
    <div className="div">
      <h1>Portfolio</h1>
      <Menu />
      <AboutMe />
    </div>
  );
};

export default Portfolio;
