import React from "react";
import "./index.css";

const Image = (props) => (
  <img
    className={props.className}
    src={props.srcName}
    alt={props.altName}
  ></img>
);

Image.defaultProps = {
  className: "",
  srcName: "",
  altName: "",
};

export default Image;
