import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Main from "./components/section/Main";

import Kakaobank from "./components/contents/KaKaobank";
import Noticeboard from "./components/contents/Noticeboard";
import Todolist from "./components/contents/Todolist";

function App() {
  return (
    <BrowserRouter>
      <Main />
      <Routes>
        <Route path="/KaKaobank" element={<Kakaobank />} />
        <Route path="/Noticeboard" element={<Noticeboard />} />
        <Route path="/Todolist" element={<Todolist />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
