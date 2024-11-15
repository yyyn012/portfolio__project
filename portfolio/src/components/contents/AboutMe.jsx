import React from "react";

import profile from "../../assets/img/profile.jpg";

const AboutMe = () => {
  return (
    <section id="aboutme">
      <img src={profile} alt="profile_img" />
      <div className="txt_aboutme">
        <h1>Lorem ipsum</h1>
        <span>
          dolor sit, amet consectetur adipisicing elit. Quis eligendi dicta
          culpa? Blanditiis porro ea ipsa magnam laboriosam aut delectus iste,
          sequi eveniet quia iusto sunt soluta neque, accusamus excepturi.
        </span>
      </div>
    </section>
  );
};

export default AboutMe;
