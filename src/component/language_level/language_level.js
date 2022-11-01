import React from "react";

const LanguageLevel = ({ languageName, percentage }) => {
  return (
    <div className="languageLevel">
      <p className="language">{languageName}</p>
      <div className="level">
        <div className="level-bar" style={{ width: `${percentage}%` }}></div>
      </div>
    </div>
  );
};

export default LanguageLevel;
