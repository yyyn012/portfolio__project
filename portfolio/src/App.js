import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Main from "./components/section/Main";

import Kakaobank from "./components/contents/Kakaobank";
import Noticeboard from "./components/contents/Noticeboard";
import Todolist from "./components/contents/Todolist";
import Contact from "./components/contents/Contact";

function App() {
  return (
    <BrowserRouter>
      <Main />
      <Routes>
        <Route path="/KaKaobank" element={<Kakaobank />} />
        <Route path="/Noticeboard" element={<Noticeboard />} />
        <Route path="/Todolist" element={<Todolist />} />
        <Route path="/Contact" element={<Contact />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
