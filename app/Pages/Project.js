import React from "react";
import './../Styles/Project.css'
import etcmf from './../Assets/etcmf.PNG'
import mobile from './../Assets/mob.png'
import portfolio from './../Assets/port.PNG'
import missArt from './../Assets/miss.png'
import cdo from './../Assets/cdo.PNG'
import projects from './../Assets/JSON/projects_info.json'
import Image from "next/image";
import { motion } from "framer-motion";

const imageMapping = {
  "eTCMF - Web": etcmf,
  "eTCMF - Mob": mobile,
  "Portfolio": portfolio,
  "MissArt": missArt,
  "CDORental": cdo,
};


export default function Project() {
  return (
    <div className="project-cont">
      <div className="project-l1">
        <h2 className="intro-over">WHAT I HAVE DONE SO FAR</h2>
        <h1 className="over">PROJECTS</h1>
      </div>
      {projects.projects.map((project, index) => (
        <div className="box-cont" key={index}>
          <div className="desc-cont-pro">
            <div className="image-pro">
              <Image
                style={{ width: "100%", height: "40%", borderRadius: 10 }}
                src={imageMapping[project.title] || abstract}
                alt={project.title}
              ></Image>
              <p className="title-project">{project.title}</p>
              <p className="subtitle-pro">{project.client}</p>
              <p className="minisub-pro">{project.role || project['mini-title']}</p>
              <p className="detail-pro">{project.details}</p>
              <p className="language">{project.language.join(', ')}</p>
            </div>
          </div>
          <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
            <div style={{ width: 20, height: 20, borderRadius: 50, backgroundColor: "#e66464", marginTop: 10 }}></div>
            <div className="line-division"></div>
          </div>
          <div className="date-cont-pro">
            <p style={{ width: "100%", fontFamily: "Arial", fontWeight: 700 }}>{project.date}</p>
          </div>
        </div>
      ))}
    </div>
  );
}