import React from "react";

import { kakaobankText } from "../../data/kakaobank";

const Kakaobank = () => {
  return (
    <div>
      {kakaobankText.map((project, key) => (
        <div className="project__content" key={key}>
          <img src={project.img} alt={project.title} />
        </div>
      ))}
    </div>
  );
};

export default Kakaobank;
