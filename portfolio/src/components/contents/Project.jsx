import React from "react";

import Board from "../projects/Board";
import Todolist from "../projects/Todolist";
import Kakaobank from "../projects/Kakaobank";
import Skytour from "../projects/Skytour";

const Project = () => {
  return (
    <section id="project">
      <h1 className="subject__txt">
        <i class="fa-solid fa-asterisk"></i>Project
      </h1>
      <div className="project__content__wrap">
        <Board />
        <Todolist />
      </div>
      <div className="project__content__wrap">
        <Kakaobank />
        <Skytour />
      </div>
    </section>
  );
};

export default Project;
