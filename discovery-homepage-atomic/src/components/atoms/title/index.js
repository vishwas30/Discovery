import React from "react";
import "./index.css";

const Title = (props) => <h5 className={props.className}>{props.children}</h5>;

Title.defaultProps = {
  className: "",
  children: "",
};

export default Title;
