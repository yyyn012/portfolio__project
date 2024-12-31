import React from "react";

import Board from "../projects/Board";
import Portfolio from "../projects/Portfolio";
import Kakaobank from "../projects/Kakaobank";
import Skytour from "../projects/Skytour";

const ProjectHome = () => {
  const projects = [<Portfolio />, <Board />, <Kakaobank />, <Skytour />];

  return (
    <section id="project__home">
      <div className="project__home__content__wrap">
        <div className="project__home__content__animation__wrap">
          {projects.map((project, index) => (
            <div className="project__content" key={index}>
              {project}
            </div>
          ))}

          {/* 클론1 */}
          {projects.map((project, index) => (
            <div className="project__content clone" key={`clone1-${index}`}>
              {project}
            </div>
          ))}

          {/* 클론2 */}
          {projects.map((project, index) => (
            <div className="project__content clone" key={`clone2-${index}`}>
              {project}
            </div>
          ))}
        </div>
      </div>
      <h1 className="subject__txt">Project</h1>
    </section>
  );
};

export default ProjectHome;
