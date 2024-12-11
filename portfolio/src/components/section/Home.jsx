import React from "react";
import AboutMe from "../contents/AboutMe";
// import Project from "../contents/Project";
import Contact from "../contents/Contact";
import ProjectHome from "../contents/ProjectHome";

const Home = () => {
  return (
    <div className="main" role="main">
      <AboutMe />
      <ProjectHome />
      <Contact />
    </div>
  );
};

export default Home;
