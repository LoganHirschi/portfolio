import React, { ReactElement } from "react";
import globalColors from "../globals/global";
import "./mainbody.css";
import AboutMe from './AboutMe'
import Resume from './Resume'
import Portfolio from './Portfolio'
import ContactMe from './ContactMe'

const MainBody = ( Props: any ) => {
  console.log(Props.page);
  function returnBody(): ReactElement<any> {
    if(Props.page == "aboutMe") {
      return <AboutMe />
    }
    else if (Props.page == "resume") {
      return <Resume />
    }
    else if (Props.page == "projects") {
      return <Portfolio />
    }
    else {
      // Contact Me
      return <ContactMe />
    }
  }
  return (
    <div className="top-wrapper" >
      <div className="main-title">
        {
          returnBody()
        }
        </div>
    </div>
  );
};

export default MainBody;
