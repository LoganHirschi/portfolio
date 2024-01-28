import React from "react";
import "./sidenav.css";
import globalColors from "../globals/global";
import NavItem from "./NavItem";


const Sidenav = (Props: any) => {

  const [aboutMeActive, setAboutMeActive] = React.useState(true);
  const [resumeActive, setresumeMeActive] = React.useState(false);
  const [projectsActive, setprojectsMeActive] = React.useState(false);
  const [contactMeActive, setContactMeActive] = React.useState(false);


  function setFalsePages() {
    setAboutMeActive(false)
    setresumeMeActive(false)
    setprojectsMeActive(false)
    setContactMeActive(false)
  }


  function changePage(location: string) {
    return (event: React.MouseEvent) => {
      if (location == "aboutMe") {
        setFalsePages()
        setAboutMeActive(true)
      } else if (location == "resume") {
        setFalsePages()
        setresumeMeActive(true)
      } else if (location == "projects") {
        setFalsePages()
        setprojectsMeActive(true)
      } else if (location == "contactMe") {
        setFalsePages()
        setContactMeActive(true)
      } else {
        console.log("Error: invalid location");
      }
      Props.getPage(location)
      event.preventDefault();
    };
  }

  return (
    <div className="side-nav-wrapper side-nav-width">
      <div>
        <div className="profile-picture"></div>
        <div style={{marginTop: "-20px", backgroundColor: globalColors.secondaryColor, padding: "5px", textAlign: "center", color: "white", fontFamily: "sans-serif"}}>Logan Hirschi</div>
      </div>
      <div onClick={changePage("aboutMe")}>
        <NavItem title="About Me" name="About Me" subName="Who am I" isActive={aboutMeActive} />
      </div>
      <div onClick={changePage("resume")}>
        <NavItem title="Resume" name="Resume" subName="Achievements" isActive={resumeActive} />
      </div>
      <div onClick={changePage("projects")}>
        <NavItem title="Projects" name="Portfolio" subName="Projects" isActive={projectsActive} />
      </div>
      <div onClick={changePage("contactMe")}>
        <NavItem title="Contact Me" name="Contact Me" subName="Get in Touch"  isActive={contactMeActive}/>
      </div>
    </div>
  );
};

export default Sidenav;
