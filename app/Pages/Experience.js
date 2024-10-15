import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import "./../Styles/Experience.css";
import lady from "./../Assets/lady.gif";
import Image from "next/image";
import experience from "./../Assets/JSON/experience.json";
import dot from "./../Assets/dot.gif";

export default function Experience() {
  const [animationPlayed, setAnimationPlayed] = useState(false);
  const ref = useRef(null); // Ref to the component

  // Animation variants for the popping effect
  const bubbleAnimation = {
    hidden: {
      scale: 0, // Start scale
      opacity: 0, // Start with opacity 0
    },
    visible: {
      scale: 1, // End scale
      opacity: 1, // End with full opacity
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 20,
      },
    },
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setAnimationPlayed(true); // Trigger animation when the component comes into view
            observer.unobserve(ref.current); // Stop observing after the animation has played
          }
        });
      },
      { threshold: 0.1 } // Adjust threshold as needed
    );

    if (ref.current) {
      observer.observe(ref.current); // Start observing the component
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current); // Clean up observer on unmount
      }
    };
  }, []);

  return (
    <div className="exp-cont" ref={ref}>
      
      <div className="exp-l1">
        
        <h2 className="intro-skill" style={{ color: "#e66464" }}>
          MY JOURNEY SO FAR
        </h2>
        <h1 className="exp">WORK HISTORY</h1>
      </div>
      <div className="inner-cont-exp">
        <motion.div
          className="image-container"
          initial="hidden"
          animate={animationPlayed ? "visible" : "hidden"} // Control animation based on state
          variants={bubbleAnimation}
        >
          <Image src={lady} alt="Lady" className="Lady" />
        </motion.div>
        <div className="wela-data-cont">
          <motion.div
            initial={{ opacity: 0, translateX: 100 }}
            whileInView={{ opacity: 1, translateX: 0 }}
            transition={{
              bounce: 0.4,
              type: "spring",
              duration: 0.5,
              delay: 0.3,
            }}
          >
            <p className="exp-title">WELA SCHOOL SYSTEM</p>
            <p className="exp-sub">Web Developer - Wela School System</p>
            <p className="exp-date">(April 2024 – October 2024)</p>
          </motion.div>

          <div className="exp-detatils">
            {experience.experience.map((exp, index) => (
              <motion.div
                initial={{ opacity: 0, translateY: 100 }}
                whileInView={{ opacity: 1, translateY: 0 }}
                transition={{
                  bounce: 0.4,
                  type: "spring",
                  duration: 0.5,
                  delay: 0.3,
                }}
                key={index}
                className="exp-item"
              >
                <Image className="dot-img" src={dot}></Image>
                <motion.p className="exp-item-details">
                  {exp.experience_title}
                </motion.p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
