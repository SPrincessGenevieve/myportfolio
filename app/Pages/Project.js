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
        />
        </div>
        <div className="p-pot">
          <Pot
          gitLink=""
          webLink=""
          title="Portfolio"
          date="JANUARY 2023 – PRESENT"
          desc="Visit my portfolio website to explore a curated collection of my work, showcasing a blend of web development projects and captivating graphic design pieces. Get a glimpse of my skills, creativity, and dedication to delivering impactful digital solutions."
          classNameV2="port-bg"
        />
        </div>
        <div className="p-pot">
          <Pot
          gitLink=""
          webLink=""
          title="Portfolio"
          date="JANUARY 2023 – PRESENT"
          desc="Visit my portfolio website to explore a curated collection of my work, showcasing a blend of web development projects and captivating graphic design pieces. Get a glimpse of my skills, creativity, and dedication to delivering impactful digital solutions."
          classNameV2="port-bg"
        />
        </div>
     
      </div>
    </div>
  );
}
