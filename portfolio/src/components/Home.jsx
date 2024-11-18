import React from "react";
import Main from "../components/section/Main";
import AboutMe from "./contents/AboutMe";
import Project from "./contents/Project";
import Contact from "./contents/Contact";

const Home = () => {
  return (
    <Main>
      <AboutMe />
      <Project />
      <Contact />
    </Main>
  );
};

export default Home;
