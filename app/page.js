"use client";
import About from "./Pages/About";
import { useRef, useState, useEffect } from "react";
import Contact from "./Pages/Contact";
import Home from "./Pages/Home";
import Info from "./Pages/Info";
import Image from "next/image";
import Project from "./Pages/Project";
import { Parallax, ParallaxLayer } from "@react-spring/parallax";
import './Styles/Bottom.css'
import './globals.css'
import Experience from "./Pages/Experience";
import Skills from "./Pages/Skills";
import Overview from "./Components/Overview";
import Education from "./Pages/Education";
import Certificate from "./Pages/Certificate";
import floral from './Assets/floral.png'
import { Email, Facebook, LinkedIn, Phone } from "@mui/icons-material";
import Link from "next/link";
import { motion, Variants } from "framer-motion";


export default function App() {
  const windowWidth = typeof window !== "undefined" ? window.innerWidth : 0; // Get the window width

  const educationOffset = windowWidth <= 350 ? 3.5 : windowWidth <= 801 ? 3 : windowWidth <= 1206 ? 3 : 2.5;
  const certOffset = windowWidth <= 1206 ? 4.2 : 3.5;
  const expOffset =   windowWidth <= 801 ? 6.5 :  windowWidth <= 1206 ? 6 : 5;


  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const handlePopupOpen = () => {
    setIsPopupOpen(true);
  };

  const handlePopupClose = () => {
    setIsPopupOpen(false);
  };

  const handleContentClick = (e) => {
    e.stopPropagation();
  };


  return (
    <main className="App">
      <div>
      <div className="con-card">
            {isPopupOpen && 
              <div className="pop-cont" onClick={handlePopupClose}>
                <motion.div
                  className="black-cont"
                  initial={{ opacity: 0, scale: 0.9 }} // Start state
                  animate={{ opacity: 1, scale: 1 }} // Animate to
                  exit={{ opacity: 0, scale: 0.9 }} // Exit state
                  transition={{
                    type: "spring",
                    duration: 1,
                    bounce: 0.4,
                  }}
                >
                  <motion.div
                    className="white-cont"
                    onClick={handleContentClick}
                    initial={{ opacity: 0, scale: 0.9 }} // Start state
                    animate={{ opacity: 1, scale: 1 }} // Animate to
                    exit={{ opacity: 0, scale: 0.9 }} // Exit state
                    transition={{
                      type: "spring",
                      duration: 1,
                      delay: 0.2,
                      bounce: 0.4,
                    }}
                  >
                    <div className="shine" /> {/* Add this line for the shine effect */}
                    <p className="name-card full-name">Princess Genevieve Sagrado</p>
                    <p className="name-card position">Web | Mobile Frontend Developer</p>
                    <div className="icon-name start-icon">
                      <Email className="icon-css"></Email> <p className="name-info">sprincessgenevieve@gmail.com</p>
                    </div>
                    <div className="icon-name">
                      <LinkedIn className="icon-css"></LinkedIn> <Link href="https://www.linkedin.com/in/princess-genevieve-sagrado-92bb692a7/" className="name-info linkin">LinkedIn</Link>
                    </div>
                    <div className="icon-name">
                      <Phone className="icon-css"></Phone> <p className="name-info">09063491341</p>
                    </div>
                    <div className="icon-name">
                      <Facebook className="icon-css"></Facebook> <Link href="https://web.facebook.com/princessgenevieve.sagrado" className="name-info linkin">Facebook</Link>
                    </div>
                    <Image className="floral" src={floral}></Image>
                  </motion.div>
                </motion.div>
              </div>
              }
            </div>
        <Parallax pages={10}>
          <ParallaxLayer offset={0} style={{}}>
            <Home onClick={handlePopupOpen}></Home>
            
            
          </ParallaxLayer>

          <ParallaxLayer offset={1} style={{}}>
            <Overview ></Overview>
          </ParallaxLayer>

          <ParallaxLayer offset={educationOffset}>
            <Education></Education>
          </ParallaxLayer>

          <ParallaxLayer offset={certOffset}>
            <Certificate></Certificate>
          </ParallaxLayer>

          <ParallaxLayer offset={expOffset} style={{}}>
            <Experience></Experience>
          </ParallaxLayer>

          {/* <ParallaxLayer offset={skillOffset} style={{}}>
            <Skills></Skills>
          </ParallaxLayer> */}

          <ParallaxLayer offset={7} factor={3}>
            <Project></Project>
          </ParallaxLayer>
        </Parallax>
      </div>
    </main>
  );
}
