import React from "react";
import './Carousel.css';

const Carousel = () => {
  return(
    <div className="carousel-wrapper">
      <button className="carousel-left"> prev </button>
      <div className="box-wrapper">
      <div className="carousel-box">1</div>
      {/* <div className="carousel-box">2</div>
      <div className="carousel-box">3</div>
      <div className="carousel-box">4</div> */}
      </div>
      <button className="carousel-right"> next </button>
    </div>
  );
};

export default Carousel;