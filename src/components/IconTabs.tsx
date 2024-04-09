// import React from "react";
import globalColors from "../globals/global";
import "./icontabs.css";
"../globals/global"
// import IconItem from './IconItem'
import { FaFacebookF, FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';



const IconTabs = () => {
  return (
    <div className="icon-tabs-wrapper">
        <a href="https://web.facebook.com/logan.hirschi" style={{color: 'black'}}><FaFacebookF className="icon" style={{backgroundColor: globalColors.primaryColor}} size={30} /></a>
        <a href="https://twitter.com/LoganHirschi"  style={{color: 'black'}}><FaTwitter className="icon" style={{backgroundColor: globalColors.primaryColor}} size={30} /></a>
        <a href="https://github.com/loganhirschi"  style={{color: 'black'}}><FaGithub className="icon" style={{backgroundColor: globalColors.primaryColor}} size={30} /></a>
        <a href="https://www.linkedin.com/in/logan-hirschi-92b545204/"  style={{color: 'black'}}><FaLinkedin className="icon" style={{backgroundColor: globalColors.primaryColor}} size={30} /></a>
        <div className="contact-me-button prevent-select" style={{backgroundColor: globalColors.secondaryColor}}>
          &#169; 2024 Logan Dev

        </div>
    </div>
  );
};

export default IconTabs;
