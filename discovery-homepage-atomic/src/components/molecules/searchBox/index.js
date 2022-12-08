import React from "react";
import Input from "../../atoms/input";
import "./index.css";

const SearchBox = (props) => {
  return (
    <div className="input-holder">
      <Input className="search-box" />
    </div>
  );
};

export default SearchBox;
