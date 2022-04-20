import React from "react";
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


export function ModulesComponent() {
  
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };

  return (
    <div>
      <h1>ssssssssssss</h1>
       <Slider {...settings}>
        {[1,2,3,4,5].map((item, index) => (
          <div key={index}>item</div>
        ))}
      </ Slider>
    </div>
  )
}