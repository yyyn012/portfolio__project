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
            안녕하세요.<br></br> 기초에 집중하여 발전하는 개발자, 이혜연입니다.
          </span>
          <div className="skill">
            <h1>skill</h1>
            <hr />
            <ul className="skill__ul">
              <li>
                <span>HTML</span>
              </li>
              <li>
                <span>CSS</span>
              </li>
              <li>
                <span>REACT</span>
              </li>
              <li>
                <span>SCSS</span>
              </li>
              <li>
                <span>JAVASCRIPT</span>
              </li>
              <li>
                <span>GIT</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
