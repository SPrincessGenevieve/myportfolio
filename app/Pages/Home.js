import React from "react";
import './../Styles/Home.css'
import avatar from "./../Assets/avatar.svg";
import bg from "./../Assets/abstract.png";
import { Email } from "@mui/icons-material";
import IconsDisplay from "./../Components/IconsDisplay";
import LineDivide from "./../Components/LineDivide";
import Image from "next/image";
import Popup from "../Components/Popup";


export default function Home({onClick}) {
  return (
    <div className="main-home">
      
      <Image className="bg" src={bg} alt="bg"></Image>
      <div className="home-cont">

        <div className="avatar-container">
          <Image src={avatar} className="avatar" alt="avatar"></Image>
        </div>

        <div className="right-container">
          <div className="line-cont-home">
            <LineDivide></LineDivide>
          </div>
          <div className="opening">
              <h1 className="top-text">Hi! I am Princess</h1>
            
              <p className="bottom-text">
                I&apos;m a recent IT graduate specializing in Full Stack Development, with a strong focus on Front-End Development. I'm passionate about crafting engaging and dynamic user interfaces. Let&apos;s Connect!
              </p>
              
            <div className="contact-btn">
              <button onClick={onClick} className="contact-me-btn">
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
