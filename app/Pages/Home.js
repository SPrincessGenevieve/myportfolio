import React from "react";
import './../Styles/Home.css'
import avatar from "./../Assets/avatar.svg";
import bg from "./../Assets/abstract.png";
import { Email } from "@mui/icons-material";
import IconsDisplay from "../components/IconsDisplay";
import LineDivide from "../components/LineDivide";
import Image from "next/image";


export default function Home() {
  return (
    <div className="main-home">
      <Image className="bg" src={bg} alt="bg"></Image>
      <div className="home-cont">
        <div className="avatar-container">
          <Image src={avatar} className="avatar" alt="avatar"></Image>
        </div>

        <div className="right-container">
          <LineDivide></LineDivide>
          <div className="opening">
            <h1 className="top-text">Hi! I am Princess</h1>
            <p className="bottom-text">
              I am an aspiring frontend web developer with 2 years experience
              with React.
            </p>
            <p className="bottom-text-2">
              Reach out if you would like to learn more.
            </p>
            <div className="contact-btn">
              <button className="contact-me-btn">
                CONTACT ME <Email style={{ marginLeft: 20 }}></Email>
              </button>
            </div>
            <div className="icon-cont-home">
              <IconsDisplay></IconsDisplay>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
