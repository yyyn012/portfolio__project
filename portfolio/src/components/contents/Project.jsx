import React from "react";

import Board from "../projects/Board";
import Portfolio from "../projects/Portfolio";
import Kakaobank from "../projects/Kakaobank";
import Skytour from "../projects/Skytour";

const Project = () => {
  return (
    <section id="project">
      <h1 className="subject__txt">
        <i className="fa-solid fa-asterisk"></i>Project
      </h1>
      <div className="project__content__wrap">
        <Portfolio />
        <Board />
      </div>
      <div className="project__content__wrap">
        <Kakaobank />
        <Skytour />
      </div>
    </section>
  );
};

export default Project;
