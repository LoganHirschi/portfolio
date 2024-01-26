import React from "react";
import globalColors from "../globals/global";
import "./mainbody.css";

const MainBody = () => {
  const [location, setLocation] = React.useState("index");
  return (
    <div className="main-wrapper" style={{backgroundColor: globalColors.mainPageBackgroundColor}} >
      <div style={{marginLeft: "200px"}}>{location}</div>
    </div>
  );
};

export default MainBody;
