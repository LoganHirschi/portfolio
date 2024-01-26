import React from "react";
import "./navItem.css";

interface Props {
  title?: string;
  icon?: string;
  isActive?: boolean;
}

const NavItem = ({ title = "Title", icon = "Icon", isActive=false }: Props) => {
  return (
    <div className={`nav-item-wrapper ${isActive ? 'nav-item-active' : ''}`} >
      <div className={`${isActive ? 'nav-arrow' : ''}`}></div>
      <div className="nav-item-text">{title}</div>
      <div className="nav-item-icon">{icon}</div>
    </div>
  );
};

export default NavItem;
