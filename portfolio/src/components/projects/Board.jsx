import React from "react";

import board from "../../assets/img/board.png";

const Board = () => {
  return (
    <div className="project__content">
      <span>Board</span>
      <img className="project__img" src={board} alt="board__project" />
    </div>
  );
};

export default Board;
