import React from "react";
import "./index.css";
import Image from "../../atoms/image";
import ContentText from "../../atoms/contentText";
import mailIcon from "../../../assets/mail-icon.png";
import callIcon from "../../../assets/call-icon.png";
import locIcon from "../../../assets/location-icon.png";
import youtubeIcon from "../../../assets/youtube-icon.png";
import facebkIcon from "../../../assets/facebook-icon.png";
import playStoreIcon from "../../../assets/playstore-icon.png";
import appStoreIcon from "../../../assets/appstore-icon.png";

const Footer = (props) => {
  return (
    <div>
      <div className="up-section">
        <div className="left-section">
          <div className="contact-item">
            <Image
              srcName={mailIcon}
              className="contact-icon"
              altName="mailIcon"
            />
            <ContentText className="contact-text">
              hello@discovery.com
            </ContentText>
          </div>
          <div className="contact-item">
            <Image
              srcName={callIcon}
              className="contact-icon"
              altName="callIcon"
            />
            <ContentText className="contact-text">
              022-43491100, +91-8433774761 (Mon-Fri, excluding Holidays
              11am-4pm)
            </ContentText>
          </div>
          <div className="contact-item">
            <Image
              srcName={locIcon}
              className="contact-icon"
              altName="locIcon"
            />
            <ContentText className="contact-text">
              Discovery India, 5th Floor, WeWork BKC, C20 G Block, Bandra Kurla
              Complex, Mumbai 400051
            </ContentText>
          </div>
        </div>
        <div className="right-section">
          <div className="follow-us">
            <ContentText className="contact-text">Follow us</ContentText>
            <div className="icon-holder">
              <Image
                srcName={youtubeIcon}
                className="followus-icon"
                altName="youtubeIcon"
              />
              <Image
                srcName={facebkIcon}
                className="followus-icon"
                altName="facebookIcon"
              />
            </div>
          </div>
          <div className="store-links">
            <ContentText className="contact-text">discovery+ App</ContentText>
            <div className="appicon-holder">
              <Image
                srcName={appStoreIcon}
                className="store-icon"
                altName="appstoreIcon"
              />
              <Image
                srcName={[playStoreIcon]}
                className="store-icon"
                altName="playStoreIcon"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="down-section">
        <ContentText className="bottom-text">
          Advertising Services Terms & Conditions
        </ContentText>
        <ContentText className="bottom-text">
          Online Advertising Order
        </ContentText>
        <ContentText className="bottom-text">Support</ContentText>
      </div>
    </div>
  );
};

export default Footer;

// <div>
//         <p>hello@discovery.com</p>
//       </div>
//       <div>
//         <p>
//           +91-8433774761, +91-8072045018 (Mon-Fri, excluding Holidays 11am-4pm),
//           022-43491100
//         </p>
//       </div>
//       <div>
//         <p>
//           Discovery India, 5th Floor, WeWork BKC, C20 G Block, Bandra Kurla
//           Complex, Mumbai 400051
//         </p>
//       </div>
