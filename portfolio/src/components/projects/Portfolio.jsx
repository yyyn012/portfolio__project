import React from "react";

import { portfolioText } from "../../data/portfolio";

const Portfolio = () => {
  return (
    <div>
      {portfolioText.map((project, key) => (
        <div className="project__content" key={key}>
          <img src={project.img} alt={project.title} />
        </div>
      ))}
    </div>
  );
};

export default Portfolio;
