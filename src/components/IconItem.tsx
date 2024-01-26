import React from "react";
import globalColors from "../globals/global";
import "./iconitem.css";

interface Props {
  icon?: string;
}

const IconItem = ({ icon = "Icon" }: Props) => {
  return (
    <div className="icon-wrapper" style={{backgroundColor: globalColors.primaryColor}}>{icon}</div>
  );
};

export default IconItem;
