import React from "react";

import portfolio from "../../assets/img/profile.jpg";

const Portfolio = () => {
  return (
    <div className="project__content">
      <img className="project__img" src={portfolio} alt="portfolio__project" />
    </div>
  );
};

export default Portfolio;
