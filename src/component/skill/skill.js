import React from "react";
import LanguageLevel from "../language_level/language_level";
import "./skill.css";

const Skill = () => {
  return (
    <div className="skill page" id="skill">
      <div className="container">
        <h2>Skill</h2>
        <div className="content">
          <div className="languages">
            <LanguageLevel languageName="HTML" percentage="100" />
            <LanguageLevel languageName="CSS" percentage="100" />
            <LanguageLevel languageName="JavaScript" percentage="100" />
            <LanguageLevel languageName="ReactJS" percentage="90" />
            <LanguageLevel languageName="PHP" percentage="90" />
            <LanguageLevel languageName="MySQL, MariaDB" percentage="90" />
            <LanguageLevel languageName="WordPress" percentage="60" />
            <LanguageLevel languageName="Bootstrap" percentage="80" />
            <LanguageLevel languageName="Firebase" percentage="100" />
            <LanguageLevel languageName="XML" percentage="70" />
            <LanguageLevel languageName="Git" percentage="80" />
            <LanguageLevel languageName="Photoshop" percentage="60" />
            <LanguageLevel languageName="illustration" percentage="50" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skill;
