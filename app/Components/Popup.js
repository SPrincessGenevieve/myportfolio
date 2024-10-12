import React from "react";
import "./Styles/popup.css"; // Ensure this is correctly importing your styles
import floral from './../Assets/floral.png'
import Image from "next/image";
import { Email } from "@mui/icons-material";

export default function Popup({ onClose }) {
  const handleOverlayClick = () => {
    onClose(); // Close the popup when overlay is clicked
  };

  const handleContentClick = (e) => {
    e.stopPropagation(); // Prevent click event from bubbling up to the overlay
  };

  return (
    <div className="pop-cont" onClick={handleOverlayClick}>
      <div className="black-cont">
      <Image className="floral" src={floral}></Image>
        <div className="white-holder">
            
            <div className="white-cont" onClick={handleContentClick}>
                
                <Email></Email>
                <p>This is a simple popup window!</p>
                <button onClick={onClose}>Close</button>
                
            </div>
        </div>
      </div>
    </div>
  );
}
