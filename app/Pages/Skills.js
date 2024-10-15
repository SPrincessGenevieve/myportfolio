import React, { useEffect, useRef } from "react";
import './../Styles/Skills.css';
import skillsData from './../Assets/JSON/skills.json'; // Import the JSON file
import exp from './../Assets/exp.png'
import Image from "next/image";

// Import your icons here

export default function Skills() {
  const skillBarRefs = useRef([]); // Create an array to hold multiple refs

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const skillBar = entry.target; // Get the current skill bar being observed
          const skillPercent = skillBar.querySelector('.skill-percent');
          const skillData = skillsData.skills.find(skill => skill.skill_name === skillBar.dataset.skill); // Get corresponding skill data

          // Set the width based on the original percent value minus 10
          const adjustedPercent = Math.max(0, skillData.percent - 10); // Calculate adjusted percent for width
          skillPercent.style.width = `${adjustedPercent}%`; // Set the width
          skillPercent.classList.add('skill-active'); // Add animation class
          observer.unobserve(skillBar); // Stop observing after the animation has run
        }
      });
    });

    skillBarRefs.current.forEach(skillBar => {
      observer.observe(skillBar); // Observe each skill bar
    });

    return () => {
      observer.disconnect(); // Cleanup observer on component unmount
    };
  }, []);

  return (
    <div className="skills-cont">
      <div className="skill-l1">
        <h2 className="intro-skill" style={{ color: "#fff" }}>TECHNOLOGIES I USE</h2>
        <h1 className="skill">SKILLS & EXPERTISE</h1>
      </div>
      {skillsData.skills.map((skill, index) => (
        <div
          className="skill-cont-bar"
          ref={el => skillBarRefs.current[index] = el}
          key={index}
          data-skill={skill.skill_name} // Set a data attribute for the skill name
        >
          
          <div className="skill-name">
            <div className="icon-cont-skill">
              <img className="icon-skill" src={`${skill.icon}`} alt={`${skill.skill_name} icon`} />
            </div>
            <p className="skill-title">{skill.skill_name}</p>
          </div>
          <div className="skill-percent" style={{ width: '0%' }}>
            <p className="percent-title">{skill.percent}%</p> {/* Display original percent */}
          </div>
        </div>
      ))}
    </div>
  );
}
