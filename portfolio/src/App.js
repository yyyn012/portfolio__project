import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Main from "./components/section/Main";

import AboutMe from "./components/contents/AboutMe";
import Project from "./components/contents/Project";
import Contact from "./components/contents/Contact";

function App() {
  return (
    <BrowserRouter>
      <Main>
        <Routes>
          <Route path="/AboutMe" element={<AboutMe />} />
          <Route path="/Project" element={<Project />} />
          <Route path="/Contact" element={<Contact />} />
        </Routes>
      </Main>
    </BrowserRouter>
  );
}

export default App;
