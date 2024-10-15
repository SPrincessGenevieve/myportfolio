import React from "react";
import "./Styles/pot.css";
import {
  GitHub,
  RemoveRedEyeRounded,
  WebStoriesRounded,
} from "@mui/icons-material";
import Link from "next/link";
import react from './../Assets/react-w.png'
import next from './../Assets/Next.png'
import figma from './../Assets/Figma-logo-w.svg.png'
import Image from "next/image";

export default function Pot({ gitLink, webLink, desc, title, date, classNameV2 }) {
  return (
    <div className="project-detail-cont">
      <div className="body-cont-pot">
        <div className="lid-pot">
          <div className="lid-pot-2">
            <div className="circle-cont">
              <div className="circle-section c-one"></div>
              <div className="circle-section c-two"></div>

              <Link className="circle-section c-three" href="">
                <div
                  className={`circle-section c-three ${classNameV2}`}
                ></div>
              </Link>
            </div>
            <div className="lid"></div>
          </div>
        </div>

        <div className="web-title-cont">
          <p className="pot-name">{title}</p>
        </div>
        <div className="lid-body">
        <div className="lan-cont">
            <Image className="react-icon" src={react}></Image>
            <Image className="next-icon" src={next}></Image>
          </div>
          <p className="pot-date">{date}</p>
          
          <p className="pot-details">{desc}</p>
          
          <div className="icon-cont-proj">
            <Link href={gitLink} target="_blank">
              <GitHub className="github-icon" />
            </Link>
            <Link href={webLink}>
              <WebStoriesRounded className="eye-icon" />
            </Link>
            <Link href=""><Image className="figma-cont"  src={figma}></Image></Link>
          </div>
        </div>
      </div>
    </div>
  );
}
