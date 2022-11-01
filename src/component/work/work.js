import React from "react";
import { useNavigate } from "react-router-dom";
import "./work.css";

const ImgDiv = ({ work }) => {
  const img = work.projectImgSrc[0];
  return (
    <div className="work-img">
      <img src={process.env.PUBLIC_URL + img} alt="projectMain" />
    </div>
  );
};

const TextDiv = ({ work }) => {
  const navigate = useNavigate();
  const { projectCategory, projectName, projectTechnologies } = work;
  return (
    <div className="text">
      <h3 className="projectName">{projectName}</h3>
      <h4 className="projectCategory">- {projectCategory} -</h4>
      <div className="projectTechlonogies">{projectTechnologies}</div>
      <button
        onClick={() => {
          navigate("/work", { state: { work } });
        }}
      >
        View Details
      </button>
    </div>
  );
};

const Work = ({ work }) => {
  const { projectId } = work;

  if (projectId % 2 === 1) {
    return (
      <div className="work-box work-box-Gra1">
        <div className="work">
          <ImgDiv work={work} />
          <TextDiv work={work} />
        </div>
      </div>
    );
  } else {
    return (
      <>
        <div className="work-box work-box-second work-box-Gra2">
          <div className="work">
            <TextDiv work={work} />
            <ImgDiv work={work} />
          </div>
        </div>
        <div className="work-box work-box-second work-box-Gra2">
          <div className="work">
            <ImgDiv work={work} />
            <TextDiv work={work} />
          </div>
        </div>
      </>
    );
  }
};

export default Work;
