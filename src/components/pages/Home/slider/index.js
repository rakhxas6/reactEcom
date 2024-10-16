import React from "react";
import Slider from "react-slick";
import Slider1 from "../../../../assets/images/slider-1.png";
import Slider2 from "../../../../assets/images/slider-2.png";
import NewsLetter from "../../../newsletter/NewsLetter";


import "./index.css";

const HomeSlider = () => {
  var settings = {
    dots: true,
    arrows: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    fade: true,
    autoplay: 2000,
  };
  return (
    <div className="homeSlider">
      <div className="container-field position-relative">
        <Slider {...settings} className="homeSliderMain">
          <div className="item">
            <img src={Slider1} alt="" className="w-100" />
            <div className="info">
              <h2 className="mb-4">
                Don't miss amazing
                <br />
                grocery deals
              </h2>
              <p>Sign up for the daily newsletter</p>
            </div>
          </div>
          <div className="item">
            <img src={Slider2} alt="" className="w-100" />
            <div className="info">
              <h2 className="mb-3">
                Fresh Vegetables
                <br />
                Big Discount
              </h2>
              <p>Sign up to 50% on your first order</p>
            </div>
          </div>
        </Slider>
        <NewsLetter/>
      </div>
    </div>
  );
};

export default HomeSlider;
