import React from "react";
import Work from "../work/work";
import "./works.css";

const Works = () => {
  const works = [
    {
      projectId: 1,
      projectCategory: "Personal Project",
      projectName: "Moonstone Studio",
      projectImgSrc: [
        "/images/project/moonstone-home.png",
        "/images/project/moonstone-slide.png",
        "/images/project/moonstone-gallery.png",
        "/images/project/moonstone-contact.png",
      ],
      projectTechnologies: "HTML, CSS, JavaScript, React.JS, Firebase",
      projectPurpose:
        "Built a photo studio website to advertise and guide a studio.",
      projectFunction:
        "handle photo data in gallery and submit review and contact information.",
      projectURL: "https://sirlinj211.github.io/moonstone/",
      gitHubURL: "https://github.com/sirlinJ211/moonstone",
    },
    {
      projectId: 2,
      projectCategory: "Application Team Project",

      projectName: "Rental Buddy",
      projectImgSrc: [
        "/images/project/rentalbuddy-vacancy.png",
        "/images/project/rentalbuddy-CRUD.png",
        "/images/project/rentalbuddy-contact.png",
      ],
      projectTechnologies: "PHP, JavaScript, Bootstrap, MariaDB",
      projectPurpose:
        "Built a web application to provide convenient, clear, and open communications between landlord and tenant.",
      projectFunction:
        "Handle the crud functions of users, landlord and rental properties.",
      gitHubURL:
        "https://github.com/TaehyungAlexKim/Application-Project-Rental-Buddy",
    },
    {
      projectId: 3,
      projectCategory: "LAMP Team Project",

      projectName: "Alberto-s-Pizzaria",
      projectImgSrc: [
        "/images/project/pizzaria-Welcome.png",
        "/images/project/pizzaria-menu.png",
        "/images/project/pizzaria-OrderPizza.png",
        "/images/project/pizzaria-OrderSummary.png",
      ],
      projectTechnologies: "LINUX, Apache, MySQL, PHP",
      projectPurpose:
        "Build the pizza ordering site to provide an accessible, clear and easy paths to pizza ordering.",
      projectFunction:
        "Handle the function of order system, order summary and simple authentication.",
      gitHubURL: "https://github.com/sirlinJ211/Alberto-s-Pizzaria",
    },
  ];

  return (
    <div className="works page" id="works">
      <div className="container">
        <h2>Works</h2>
        <div className="content">
          {works.map((work, i) => {
            return (
              <div className="content-work" key={i}>
                <Work work={work} />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Works;
