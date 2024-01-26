import React from "react";
import "./icontabs.css";
import globalColors from "../globals/global";"../globals/global"
import IconItem from './IconItem'


const IconTabs = () => {
  return (
    <div className="icon-tabs-wrapper">
        <IconItem icon="f" />
        <IconItem icon="X" />
        <IconItem icon="G+" />
        <IconItem icon="in" />
        <div className="contact-me-button" style={{backgroundColor: globalColors.secondaryColor}}>
          Contact Me:<br />
          (435)669-3368
        </div>
    </div>
  );
};

export default IconTabs;
