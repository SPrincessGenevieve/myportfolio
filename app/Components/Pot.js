import React from "react";
import "./Styles/pot.css";
import {
  GitHub,
  RemoveRedEyeRounded,
  WebStoriesRounded,
} from "@mui/icons-material";
import Link from "next/link";
import react from "./../Assets/react-w.png";
import next from "./../Assets/Next.png";
import figma from "./../Assets/Figma-logo-w.svg.png";
import mindee from "./../Assets/mindee.png";
import Image from "next/image";

export default function Pot({
  gitLink,
  webLink,
  desc,
  title,
  date,
  classNameV2,
  mainCont,
  classNameNext,
  classNameMindee,
  circleLink,
}) {
  return (
    <div className={`project-detail-cont ${mainCont}`}>
      <div className="main-lid-cont">
        <div className="lid-top-cont">
          <div className="cicle-cont">
            <div className="c-one">
              <div className="c-two">
                <Link href={circleLink} className="c-three"><div className={`c-three ${classNameV2}`}></div></Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="title-cont-pot">
        <p className="pot-name">{title}</p>
      </div>
      <div className="lid-body-cont">
        <div className="top-pot">
          <div className="lan-cont">
            <Image className="react-icon" src={react}></Image>
            <Image className={`next-icon ${classNameNext}`} src={next}></Image>
            <Image
              className={`mindee-icon ${classNameMindee}`}
              src={mindee}
            ></Image>
          </div>
          <p className="pot-date">{date}</p>
          <p className="pot-details">{desc}</p>
        </div>
        <div className="icon-cont-proj">
            <Link href={gitLink} target="_blank">
              <GitHub className="github-icon" />
            </Link>
            <Link href={webLink}>
              <WebStoriesRounded className="eye-icon" />
            </Link>
          </div>
      </div>
    </div>
  );
}
