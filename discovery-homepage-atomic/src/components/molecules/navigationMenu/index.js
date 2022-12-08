import React from "react";
import ContentText from "../../atoms/contentText";
import "./index.css";

const menuItems = ["Home", "Explore", "Kids", "Shorts", "Mindblown", "Premium"];

const NavMenu = (props) => {
  return (
    <div className="menu-holder">
      {menuItems.map((item, index) => {
        return (
          <a href={item} key={index} className="menu-link">
            <ContentText className="menu-text">{item}</ContentText>
          </a>
        );
      })}
    </div>
  );
};

export default NavMenu;
