import { ReactElement } from "react";
import AboutMe from './AboutMe';
import ContactMe from './ContactMe';
import Portfolio from './Portfolio';
import Resume from './Resume';
import "./mainbody.css";

const MainBody = ( Props: any ) => {
  console.log(Props.page);
  function returnBody(): ReactElement<any> {
    if(Props.page == "aboutMe") {
      return <AboutMe title="About Me" />
    }
    else if (Props.page == "resume") {
      return <Resume title="Resume" />
    }
    else if (Props.page == "projects") {
      return <Portfolio title="Portfolio" />
    }
    else {
      // Contact Me
      return <ContactMe title="Contact Me" />
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
