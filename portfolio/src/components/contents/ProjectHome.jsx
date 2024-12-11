import React from "react";

import Board from "../projects/Board";
import Todolist from "../projects/Todolist";
import Kakaobank from "../projects/Kakaobank";
import Skytour from "../projects/Skytour";

const ProjectHome = () => {
  return (
    <section id="project">
      <h1 className="subject__txt">
        <i className="fa-solid fa-asterisk"></i>Project
      </h1>
      <div className="project__content__wrap">
        <Board />
        <Todolist />
        <Kakaobank />
        <Skytour />
      </div>
    </section>
  );
};

export default ProjectHome;
