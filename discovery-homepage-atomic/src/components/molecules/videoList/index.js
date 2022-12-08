import React from "react";
import "./index.css";
import Image from "../../atoms/image";
import Title from "../../atoms/title";
import ContentText from "../../atoms/contentText";
import image1 from "../../../assets/carouselImage.jpeg";
import image2 from "../../../assets/image1.jpeg";
import image3 from "../../../assets/image2.jpeg";

const videoList = [image1, image2, image3, image1];

const VideoList = (props) => {
  return (
    <div className="videolist-body">
      <div>
        <ContentText className="videolist-title">Newly Added Shows</ContentText>
        <ContentText className="view-all">View All</ContentText>
      </div>
      <div className="videos-holder">
        {videoList.map((video, index) => {
          return (
            <div className="video-item" key={index}>
              <Image srcName={video} altName="image" className="video-image" />
            </div>
          );
        })}
      </div>
    </div>
  );
};
export default VideoList;
