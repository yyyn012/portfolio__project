import React from "react";

import profile from "../../assets/img/profile.jpg";

const AboutMe = () => {
  return (
    <section id="aboutme">
      <div className="aboutme__wrap">
        <img src={profile} alt="profile_img" />
        <div className="aboutme__txt__wrap">
          <h1 className="subject__txt">
            <i className="fa-solid fa-asterisk"></i>AboutMe
          </h1>
          <span>
            안녕하세요. 항상 발전하는 개발자가 되고 싶은 이혜연입니다.
          </span>
          <div className="skill">
            <h1>skill</h1>
            <ul className="skill__ul">
              <li>HTML</li>
              <li>CSS</li>
              <li>REACT</li>
              <li>JAVASCRIPT</li>
              <li>GIT</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
