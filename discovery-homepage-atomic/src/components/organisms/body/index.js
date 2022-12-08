import React from "react";
import CarouselSection from "../../molecules/carauselSection";
import Categories from "../../molecules/categories";
import VideoList from "../../molecules/videoList";
import "./index.css";

const Body = (props) => {
  return (
    <>
      <div className="body-container">
        <CarouselSection />
        <Categories />
        <VideoList />
        <VideoList />
        <VideoList />
        <VideoList />
      </div>
    </>
  );
};

export default Body;
