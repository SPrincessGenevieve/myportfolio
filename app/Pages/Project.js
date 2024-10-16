import React from "react";
import "./../Styles/Project.css";
import missArt from "./../Assets/miss.png"; // Assuming this is where your image is stored
import Pot from "../Components/Pot";
import projectData from './../Assets/JSON/projects_info.json'

export default function Project() {
  return (
    <div className="project-cont">
      <div className="project-l1">
        <h2 className="intro-over" style={{ color: "#e66464" }}>
          WHAT I HAVE DONE SO FAR
        </h2>
        <h1 className="over">PROJECTS</h1>
      </div>
      
      <div className="pot-cont-group">
        <div className="p-pot">
          <Pot
          gitLink=""
          webLink=""
          title="Portfolio"
          date="JANUARY 2023 – PRESENT"
          desc="Visit my portfolio website to explore a curated collection of my work, showcasing a blend of web development projects and captivating graphic design pieces. Get a glimpse of my skills, creativity, and dedication to delivering impactful digital solutions."
          classNameV2="port-bg"
          mainCont="first-cont-item"
          circleLink=""
          classNameMindee="visibilityMindee"
          />
        </div>
        <div className="p-pot">
        <Pot
          gitLink=""
          webLink=""
          title="E-TCMF Website"
          date="DECEMBER 2023 – FEBRUARY 2024"
          desc="A web-based platform has been developed to empower traffic enforcers, enabling them to efficiently monitor traffic violation citations and generate comprehensive reports for improved traffic management and enforcement."
          classNameV2="web-bg"
          circleLink=""
          classNameNext="visibilityNext"
          classNameMindee="visibilityMindee"
          />
        </div>
        <div className="p-pot">
        <Pot
          gitLink=""
          webLink=""
          title="E-TCMF Mobile"
          date="DECEMBER 2023 – FEBRUARY 2024"
          desc="The system allows users to generate citations via manual input or Mindee's OCR technology, enhancing accuracy and efficiency. It supports real-time violation monitoring and enables instant data transfers, streamlining the citation process."
          classNameV2="mob-bg"
          circleLink=""
          classNameNext="visibilityNext"
          />
        </div>
     
      </div>
    </div>
  );
}
