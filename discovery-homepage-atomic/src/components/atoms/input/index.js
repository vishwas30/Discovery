import React from "react";
import "./index.css";

const Input = (props) => {
  return (
    <input
      className={props.className}
      type="text"
      placeholder="Search for a show, episode, shorts etc"
    ></input>
  );
};

Input.defaultProps = {
  onClick: () => {},
  className: "",
};

export default Input;
