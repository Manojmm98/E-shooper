import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import "./carosal.css";

function Carosal() {
  return (
    <Carousel infiniteLoop autoPlay>
      <div className="image">
        <img src="assets/images/home/girl1.jpg" />
      </div>
      <div className="image">
        <img src="assets/images/home/girl2.jpg" />
      </div>
      <div className="image">
        <img src="assets/images/home/girl3.jpg" />
      </div>
    </Carousel>
  );
}

export default Carosal;
