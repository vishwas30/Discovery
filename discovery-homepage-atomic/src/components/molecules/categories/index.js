import React from "react";
import "./index.css";
import Image from "../../atoms/image";
import Title from "../../atoms/title";
import image1 from "../../../assets/carouselImage.jpeg";
import image2 from "../../../assets/image1.jpeg";
import image3 from "../../../assets/image2.jpeg";

const categoryList = [
  {
    src: image1,
    catName: "Adventure",
  },
  {
    src: image2,
    catName: "Science",
  },
  {
    src: image3,
    catName: "Hostory",
  },
  {
    src: image1,
    catName: "Free Watch",
  },
  {
    src: image2,
    catName: "Investigation",
  },
  {
    src: image3,
    catName: "Nature",
  },
];

const Categories = (props) => {
  return (
    <div className="catogory-holder">
      {categoryList.map((category, index) => {
        return (
          <div className="category-item" key={index}>
            <Image
              srcName={category.src}
              altName="image"
              className="category-image"
            />
            <Title className="category-title">{category.catName}</Title>
          </div>
        );
      })}
    </div>
  );
};
export default Categories;
