import React from "react";

import { boardText } from "../../data/board";

const Board = () => {
  return (
    <div>
      {boardText.map((project, key) => (
        <div className="project__content" key={key}>
          <img src={project.img} alt={project.title} />
        </div>
      ))}
    </div>
  );
};

export default Board;
