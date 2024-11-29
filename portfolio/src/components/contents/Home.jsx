import React from "react";
import AboutMe from "./AboutMe";
import Project from "./Project";
import Contact from "./Contact";

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
