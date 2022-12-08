import React from "react";
import "./index.css";
import Image from "../../atoms/image";
import hamburgerIcon from "../../../assets/hamburger-icon.png";

const HamburgerIcon = (props) => {
  return (
    <Image
      srcName={hamburgerIcon}
      altName="hamburgerIcon"
      className="hamburger-icon"
    />
  );
};

export default HamburgerIcon;
