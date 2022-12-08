import React from "react";
import Image from "../../atoms/image";
import Title from "../../atoms/title";
import ContentText from "../../atoms/contentText";
import Button from "../../atoms/button";
import leftArrow from "../../../assets/left-arrow.png";
import rightArrow from "../../../assets/right-arrow.png";
import playButton from "../../../assets/circle-play.png";
import carouselImage from "../../../assets/carouselImage.jpeg";
import "./index.css";

const CarouselSection = (props) => {
  return (
    <div className="carousel-holder">
      <Image srcName={leftArrow} altName="leftArrow" className="arrow-btn" />
      <div className="carousel-section">
        <div className="carousel-content">
          <Title className="content-title">
            Legends of The Ramayana With Amish
          </Title>
          <ContentText className="description">
            Amish Tripathi traverses 5,000 kilometers in thefootsteps of Rama.
          </ContentText>
          <div className="button-div">
            <Button className="extra-button">Don't Miss</Button>
            <Button className="extra-button">All New Episodes</Button>
          </div>
          <div className="play-button">
            <Image
              srcName={playButton}
              altName="playButton"
              className="circle-play"
            />
            <ContentText className="play-text">Play</ContentText>
          </div>
        </div>
        <div className="carousle-image">
          <Image
            srcName={carouselImage}
            altName="carouselImage"
            className="carousel-img"
          />
        </div>
      </div>
      <Image srcName={rightArrow} altName="rightArrow" className="arrow-btn" />
    </div>
  );
};

export default CarouselSection;
