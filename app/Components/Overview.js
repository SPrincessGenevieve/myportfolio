import React from "react";
import "./overview.css";
import WebDev from "./../assets/css.svg";
import ReactDev from "./../assets/react.svg";
import GraphicDev from "./../assets/graphic.svg";
import Image from "next/image";
import { Tilt } from "react-tilt";
import { motion } from "framer-motion";
import {fadeIn, textVariant} from './utils/motion'

export default function Overview() {
  return (
    <div className="overview-cont">
      <div className="overview-l1">
        <h2 className="intro-over">INTRODUCTION</h2>
        <h1 className="over">OVERVIEW</h1>
      </div>
      <div className="overview-l2">
        <p className="long-intro">
          As a final-year college student with a robust foundation in React,
          HTML5, CSS, and JavaScript, along with familiarity with Jira and REST,
          I am enthusiastic about contributing to a dynamic team in a role that
          values innovation and high-quality deliverables. My skills extend
          beyond technical proficiency; I excel in collaborating with teammates
          to develop and deliver successful projects.
        </p>
      </div>
      <div className="over-box">
        <Tilt>
          <div
            className="box 1">
            <Image className="dev css" src={WebDev} alt=""></Image>
            <h2 className="over-title">WEB DEVELOPER</h2>
          </div>
        </Tilt>
        
        <Tilt>
          <div className="box 2">
            <Image className="dev react" src={ReactDev} alt=""></Image>
            <h2 className="over-title">REACT DEVELOPER</h2>
          </div>
        </Tilt>
        
        <Tilt>
          <div className="box 3">
            <Image className="dev graph" src={GraphicDev} alt=""></Image>
            <h2 className="over-title">GRAPHIC DESIGNER</h2>
          </div>
        </Tilt>
        
      </div>
    </div>
  );
}
