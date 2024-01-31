import React, { ReactElement } from "react";
import "./navItem.css";
import { FaUser } from "react-icons/fa";
import { FaFolder } from "react-icons/fa";
import { FaCamera } from "react-icons/fa";
import { FaPhone } from "react-icons/fa";
import { IconType } from "react-icons/lib";

interface Props {
  title?: string;
  name?: string;
  subName?: string;
  isActive?: boolean;
}

const NavItem = ({
  title = "Title",
  name = "Default",
  subName = "SubDefault",
  isActive = false,
}: Props) => {
  function getIcon(): ReactElement<IconType> {
    if (title == "About Me") {
      return (
        <FaUser
          style={{ margin: "auto", display: "block", paddingTop: "20px" }}
          size={55}
        />
      );
    } else if (title == "Resume") {
      return (
        <FaFolder
          style={{ margin: "auto", display: "block", paddingTop: "20px" }}
          size={55}
        />
      );
    } else if (title == "Projects") {
      return (
        <FaCamera
          style={{ margin: "auto", display: "block", paddingTop: "20px" }}
          size={55}
        />
      );
    } else {
      return (
        <FaPhone
          style={{ margin: "auto", display: "block", paddingTop: "20px" }}
          size={55}
        />
      );
    }
  }

  return (
    <div className={`nav-item-wrapper ${isActive ? "nav-item-active" : ""}`}>
      <div className={`${isActive ? "nav-arrow" : ""}`}></div>
      {/* <div className={`${isActive ? "arrow-right" : ""}`}></div> */}
      {getIcon()}
      <div className="nav-title">{name}</div>
      <div className="nav-subtitle">{subName}</div>
    </div>
  );
};

export default NavItem;
