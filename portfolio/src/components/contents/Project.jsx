import React from "react";

import Board from "../projects/Board";
import Todolist from "../projects/Todolist";
import Kakaobank from "../projects/Kakaobank";

const Project = () => {
  return (
    <section id="project">
      <Board />
      <Todolist />
      <Kakaobank />
    </section>
  );
};

export default Project;
