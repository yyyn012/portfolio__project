import React from "react";
import AboutMe from "../contents/AboutMe";
import Project from "../contents/Project";
import Contact from "../contents/Contact";

const Home = () => {
  return (
    <div className="main" role="main">
      <AboutMe />
      <Project />
      <Contact />
    </div>
  );
};

export default Home;
