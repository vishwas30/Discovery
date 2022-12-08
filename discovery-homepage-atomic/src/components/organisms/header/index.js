import React from "react";
import HamburgerIcon from "../../molecules/hamburgerIcon";
import DiscoveryLogo from "../../molecules/discoveryLogo";
import NavigationMenu from "../../molecules/navigationMenu";
import SearchBox from "../../molecules/searchBox";
import SignIn from "../../molecules/signIn";
import "./index.css";

const Header = (props) => {
  return (
    <>
      <div className="header-holder">
        <HamburgerIcon />
        <DiscoveryLogo />
        <NavigationMenu />
        <SearchBox />
        <SignIn />
      </div>
    </>
  );
};

export default Header;
