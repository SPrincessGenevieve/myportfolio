"use client";
import Image from "next/image";
import "./ContactMe.css";
import FB from './../Assets/FB.png';
import Email from './../Assets/Email.png';
import LI from './../Assets/LinkedIn.png';
import Link from "next/link";
import Send from './../Assets/Line.png'

export default function ContactMe() {
  return (
    <div className="cont-cont">
      <div className="contactMe-l1">
        <h2 className="intro-over">FEEL FREE TO REACH OUT</h2>
        <h1 className="over-contact">CONTACTC ME</h1>
      </div>
          <div className="link-cont">
              <Image className="logo-contact" src={LI} alt=""></Image>
              <Link className="link-style" href={"https://www.linkedin.com/in/princess-genevieve-sagrado-92bb692a7/"}>LinkedIn Profile
              </Link>
          </div>
          <div className="link-cont">
              <Image className="logo-contact"  src={Email} alt=""></Image>
              <p>sprincessgenevieve@gmail.com
              </p>
          </div>
          <div className="link-cont">
              <Image className="logo-contact" src={FB} alt=""></Image>
              <Link className="link-style" href={"https://web.facebook.com/princessgenevieve.sagrado"}>Facebook Profile
              </Link>
          </div>
          <div style={{width:"100%", display:"flex", justifyContent:"end"}}>
          <Image src={Send} alt=""></Image>

          </div>
          
    </div>
  );
}
