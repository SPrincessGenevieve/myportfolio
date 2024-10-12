import React from "react";
import './Styles/LineDivideH.css'
export default function LineDivideH({title}) {
  return (
    <div className="line-divide-h">
      <div className="circle-h"></div>
      <div className="line-cont-h">
        <p className="line-title">{title}</p>
      </div>
    </div>
  );
}
