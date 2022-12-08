import React from "react";
import "./index.css";

const ContentText = (props) => (
  <h5 className={props.className}>{props.children}</h5>
);

ContentText.defaultProps = {
  className: "",
  children: "",
};

export default ContentText;
