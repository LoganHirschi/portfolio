import React from "react";
import globalColors from "../globals/global";
import "./mainbody.css";

const MainBody = ( Props: any ) => {
  return (
    <div className="main-wrapper" style={{backgroundColor: globalColors.mainPageBackgroundColor}} >
      <div style={{marginLeft: "200px"}}>{Props.page}</div>
    </div>
  );
};

export default MainBody;
