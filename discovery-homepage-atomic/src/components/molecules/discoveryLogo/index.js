import React from "react";
import "./index.css";
import Image from "../../atoms/image";
import discoveryLogo from "../../../assets/discovery-logo.png";

const DiscoveryLogo = (props) => {
  return (
    <Image
      srcName={discoveryLogo}
      altName="discoveryLogo"
      className="discovery-logo"
    />
  );
};

export default DiscoveryLogo;
