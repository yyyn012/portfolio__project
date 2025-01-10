import React from "react";

import { skytourText } from "../../data/skytour";

const Skytour = () => {
  return (
    <div>
      {skytourText.map((project, key) => (
        <div className="project__content" key={key}>
          <img src={project.img} alt={project.title} />
        </div>
      ))}
    </div>
  );
};

export default Skytour;
