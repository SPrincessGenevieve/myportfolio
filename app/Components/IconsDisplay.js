import React from "react";
import HTMLIcon from "./../Assets/html.webp";
import JS from "./../Assets/javascript.png";
import ReacrJs from "./../Assets/react.png";
import CSSIcon from "./../Assets/CSS.png";
import Py from "./../Assets/python.png";
import "./icondis.css";
import Image from "next/image";

export default function IconsDisplay() {
  return (
    <div className="icon-cont">
      <Image className="icon" src={HTMLIcon} alt="HTML"></Image>
      <Image className="icon" src={JS} alt="JS"></Image>
      <Image className="icon" src={CSSIcon} alt="CSS"></Image>
      <Image className="icon" src={Py} alt="Py"></Image>
      <Image className="icon react" src={ReacrJs} alt="React"></Image>
    </div>
  );
}
