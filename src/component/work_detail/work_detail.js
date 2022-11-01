import React from "react";
import { useLocation } from "react-router-dom";
import Carousel from "react-elastic-carousel";
import "./work_detail.css";

const WorkDetail = () => {
  const location = useLocation();

  const {
    projectImgSrc,
    projectCategory,
    projectName,
    projectTechnologies,
    projectPurpose,
    projectFunction,
    projectURL,
    gitHubURL,
  } = location.state.work;

  return (
    <div className="workDetail">
      <div className="container">
        <div className="content">
          <div className="carousel">
            <Carousel>
              {projectImgSrc.map((src, index) => {
                return (
                  <div className="img-box" key={index}>
                    <img
                      src={process.env.PUBLIC_URL + src}
                      alt={"num" + index}
                    />
                  </div>
                );
              })}
            </Carousel>
          </div>
          <div className="information">
            <h3 className="title">{projectName}</h3>
            <h4 className="underTitle">-{projectCategory}-</h4>
            <div className="project-box">
              <div className="project">
                <div className="project-tag">Technologies</div>:
                <div className="project-text">{projectTechnologies}</div>
              </div>
              <div className="project">
                <div className="project-tag">Purpose</div>:
                <div className="project-text">{projectPurpose}</div>
              </div>
              <div className="project">
                <div className="project-tag">Function</div>:
                <div className="project-text">{projectFunction}</div>
              </div>
              {projectURL ? (
                <div className="project">
                  <div className="project-tag">ProjectURL</div>:
                  <div className="project-text">
                    <a
                      href={projectURL}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {projectURL}
                    </a>
                  </div>
                </div>
              ) : null}

              <div className="project">
                <div className="project-tag">GitHubURL</div>:
                <div className="project-text">
                  <a href={gitHubURL} target="_blank" rel="noopener noreferrer">
                    {gitHubURL}
                  </a>
                </div>
              </div>
            </div>
          </div>
          <br />
        </div>
      </div>
    </div>
  );
};

export default WorkDetail;
