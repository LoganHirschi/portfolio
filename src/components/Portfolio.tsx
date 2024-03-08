import React, { ReactElement } from "react";
import "./page.css";

interface Props {
  title?: string;
}

const Portfolio = ({
  title = "Title"
}: Props) => {
  return (
    <div className="main-wrapper">
      <h1 style={{textAlign: "center"}}>Portfolio</h1>
      <div className="black-line"></div>
      <h3 style={{textAlign: "center"}}>Logan Hirschi</h3>
      <div className="textWrapper">
        <div style={{width: "45%"}}>
          <p>Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.</p>
        </div>
        <div style={{width: "45%"}}>
          <p>Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.</p>
        </div>
      </div>
      <div className="textWrapper">
        <div style={{width: "45%"}}>
          <p>Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.</p>
        </div>
        <div style={{width: "45%"}}>
          <p>Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.</p>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
