import React, { useState } from "react";
import AboutMe from "./AboutMe";
import Menu from "./Menu";
import "/src/Components/Portfolio.scss";

const Portfolio = () => {
  return (
    <div>
      <h1>Portfolio</h1>
      <Menu />
      <AboutMe />
    </div>
  );
};

export default Portfolio;
