import React from "react";

import profile from "../../assets/img/profile.jpg";

const AboutMe = () => {
  return (
    <section id="aboutme">
      <h1 className="subject__txt">
        <i className="fa-solid fa-asterisk"></i>AboutMe
      </h1>
      <div className="aboutme__wrap">
        <img src={profile} alt="profile_img" />
        <div className="aboutme__txt">
          <h1>Lorem ipsum</h1>
          <span>
            dolor sit, amet consectetur adipisicing elit. Quis eligendi dicta
            culpa? Blanditiis porro ea ipsa magnam laboriosam aut delectus iste,
            sequi eveniet quia iusto sunt soluta neque, accusamus excepturi.
          </span>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
