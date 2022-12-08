import React from "react";
import Header from "../../organisms/header";
import Body from "../../organisms/body";
import Footer from "../../organisms/footer";
import "./index.css";

const HomePage = (props) => {
  return (
    <div className="home">
      <Header />
      <Body />
      <Footer />
    </div>
  );
};

export default HomePage;
