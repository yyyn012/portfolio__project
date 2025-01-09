import React from "react";

import board from "../../assets/img/board.png";

import { boardText } from "../../data/board";

const Board = () => {
  return (
    <div className="project__content">
      <img className="project__img" src={board} alt="board__project" />
    </div>
  );
};

export default Board;
