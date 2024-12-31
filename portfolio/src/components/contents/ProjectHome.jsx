import React from "react";

import Board from "../projects/Board";
import Portfolio from "../projects/Portfolio";
import Kakaobank from "../projects/Kakaobank";
import Skytour from "../projects/Skytour";

const ProjectHome = () => {
  return (
    <section id="project__home">
      <div className="project__home__content__wrap">
        <div className="project__content">
          <Portfolio />
        </div>
        <div className="project__content">
          <Board />
        </div>
        <div className="project__content">
          <Kakaobank />
        </div>
        <div className="project__content">
          <Skytour />
        </div>
      </div>
      <h1 className="subject__txt">Project</h1>
    </section>
  );
};

export default ProjectHome;
