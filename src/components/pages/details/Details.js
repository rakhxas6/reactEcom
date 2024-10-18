import { Button, Rating } from "@mui/material";
import React, { useRef, useState } from "react";
import InnerImageZoom from "react-inner-image-zoom";
import "react-inner-image-zoom/lib/InnerImageZoom/styles.css";
import { Link } from "react-router-dom";
import Sidebar from "../../sidebar/Sidebar";
import "./Details.css";

import {
  CompareArrows,
  FavoriteBorderOutlined,
  KeyboardArrowDown,
  KeyboardArrowUp,
  ShoppingCart,
} from "@mui/icons-material";
import Slider from "react-slick";

const Details = () => {
  const zoomRef = useRef();
  const [zoomImage, setZoomImage] = useState(
    "https://www.jiomart.com/images/product/original/490000363/maggi-2-minute-masala-noodles-70-g-product-images-o490000363-p490000363-0-202305292130.jpg"
  );

  const [bigImageSize, setBigImageSize] = useState([1500, 1500]);
  const [smallImageSize, setSmallZoomImage] = useState([150, 150]);

  const [activeSize, setActiveSize] = useState(0);
  const [number, setNumber] = useState(1);

  var settings = {
    dots: false,
    arrows: true,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    fade: false,
  };

  const goTo = (url) => {
    setZoomImage(url);
  };

  const isActive = (index) => {
    setActiveSize(index);
  };
  const plus = () => {
    setNumber(number + 1);
  };
  const minus = () => {
    if (number !== 1) {
      setNumber(number - 1);
    }
  };

  return (
    <section className="detailsPage">
      <div className="breadCrumbWrapper mb-4">
        <div className="container-field">
          <ul className="breadcrumb breadcrumb2 mb-0">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link>Vegetables & Tubers</Link>
            </li>
            <li>Seeds of Change Organic</li>
          </ul>
        </div>
      </div>
      <div className="container-field detailsContainer">
        <div className="row pt-3 mb-3">
          <div className="col-md-9 part1 leftPart">
            <div className="row">
              {/* Product zOOM CODE STARTS HERE */}
              <div className="col-md-5">
                <div className="productZoom">
                  <InnerImageZoom
                    zoomScale={1}
                    zoomType="hover"
                    src={`${zoomImage}?im=Resize=(${bigImageSize[0]},${bigImageSize[1]})`}
                  />
                </div>
                <Slider {...settings} className="zoomSlider" ref={zoomRef}>
                  <div className="item">
                    <img
                      src={`https://www.jiomart.com/images/product/original/490000363/maggi-2-minute-masala-noodles-70-g-product-images-o490000363-p490000363-0-202305292130.jpg?im=Resize=(${smallImageSize[0]},${smallImageSize[1]})`}
                      alt=""
                      className="w-100"
                      onClick={() =>
                        goTo(
                          "https://www.jiomart.com/images/product/original/490000363/maggi-2-minute-masala-noodles-70-g-product-images-o490000363-p490000363-0-202305292130.jpg"
                        )
                      }
                    />
                  </div>
                  <div className="item">
                    <img
                      src={`https://www.jiomart.com/images/product/original/490000363/maggi-2-minute-masala-noodles-70-g-product-images-o490000363-p490000363-1-202305292130.jpg?im=Resize=(${smallImageSize[0]},${smallImageSize[1]})`}
                      alt=""
                      className="w-100"
                      onClick={() =>
                        goTo(
                          "https://www.jiomart.com/images/product/original/490000363/maggi-2-minute-masala-noodles-70-g-product-images-o490000363-p490000363-1-202305292130.jpg"
                        )
                      }
                    />
                  </div>
                  <div className="item">
                    <img
                      src={`https://www.jiomart.com/images/product/original/490000363/maggi-2-minute-masala-noodles-70-g-product-images-o490000363-p490000363-2-202305292130.jpg?im=Resize=(${smallImageSize[0]},${smallImageSize[1]})`}
                      alt=""
                      className="w-100"
                      onClick={() =>
                        goTo(
                          "https://www.jiomart.com/images/product/original/490000363/maggi-2-minute-masala-noodles-70-g-product-images-o490000363-p490000363-2-202305292130.jpg"
                        )
                      }
                    />
                  </div>
                  <div className="item">
                    <img
                      src={`https://www.jiomart.com/images/product/original/490000363/maggi-2-minute-masala-noodles-70-g-product-images-o490000363-p490000363-3-202305292130.jpg?im=Resize=(${smallImageSize[0]},${smallImageSize[1]})`}
                      alt=""
                      className="w-100"
                      onClick={() =>
                        goTo(
                          "https://www.jiomart.com/images/product/original/490000363/maggi-2-minute-masala-noodles-70-g-product-images-o490000363-p490000363-3-202305292130.jpg"
                        )
                      }
                    />
                  </div>
                  <div className="item">
                    <img
                      src={`https://www.jiomart.com/images/product/original/490000363/maggi-2-minute-masala-noodles-70-g-legal-images-o490000363-p490000363-5-202305292130.jpg?im=Resize=(${smallImageSize[0]},${smallImageSize[1]})`}
                      alt=""
                      className="w-100"
                      onClick={() =>
                        goTo(
                          "https://www.jiomart.com/images/product/original/490000363/maggi-2-minute-masala-noodles-70-g-legal-images-o490000363-p490000363-5-202305292130.jpg"
                        )
                      }
                    />
                  </div>

                  <div className="item">
                    <img
                      src={` https://www.jiomart.com/images/product/original/490000363/maggi-2-minute-masala-noodles-70-g-legal-images-o490000363-p490000363-5-202305292130.jpg?im=Resize=(${smallImageSize[0]},${smallImageSize[1]})`}
                      alt=""
                      className="w-100"
                      onClick={() =>
                        goTo(
                          "https://www.jiomart.com/images/product/original/490000363/maggi-2-minute-masala-noodles-70-g-legal-images-o490000363-p490000363-5-202305292130.jpg"
                        )
                      }
                    />
                  </div>
                  <div className="item">
                    <img
                      src={`https://www.jiomart.com/images/product/original/490000363/maggi-2-minute-masala-noodles-70-g-legal-images-o490000363-p490000363-6-202305292130.jpg?im=Resize=(${smallImageSize[0]},${smallImageSize[1]})`}
                      alt=""
                      className="w-100"
                      onClick={() =>
                        goTo(
                          "https://www.jiomart.com/images/product/original/490000363/maggi-2-minute-masala-noodles-70-g-legal-images-o490000363-p490000363-6-202305292130.jpg"
                        )
                      }
                    />
                  </div>
                </Slider>
              </div>
              {/* Product zOOM CODE endS HERE */}

              {/* Product info CODE endS HERE */}
              <div className="col-md-7 productInfo">
                <h1>Maggi 2-Minute Masala Noodles 70 g</h1>

                <div className="d-flex align-items-center mb-4">
                  <Rating name="read-only" value={4.5} readOnly />
                  <span className="text-light">(32 Reviews)</span>
                </div>

                <div className="priceSec d-flex align-items-center mb-3">
                  <span className="text-g priceLarge">$1.25</span>

                  <div className="ml-2 d-flex flex-column">
                    <span className="text-org">26% Off</span>
                    <span className="text-light oldPrice">$1.99</span>
                  </div>
                </div>
                <p className="mb-0">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo
                  ipsum fugiat ratione cumque dolore necessitatibus cum
                  voluptate magnam ex doloremque.
                </p>

                <div className="productSize d-flex align-items-center mb-3">
                  <span>Size / Weight</span>
                  <ul className="list list-inline mb-0 pl-4">
                    <li className="list-inline-item">
                      <a
                        className={`tag ${activeSize === 0 ? "active" : ""}`}
                        onClick={() => isActive(0)}
                      >
                        50g
                      </a>
                    </li>
                    <li className="list-inline-item">
                      <a
                        className={`tag ${activeSize === 1 ? "active" : ""}`}
                        onClick={() => isActive(1)}
                      >
                        60g
                      </a>
                    </li>
                    <li className="list-inline-item">
                      <a
                        className={`tag ${activeSize === 2 ? "active" : ""}`}
                        onClick={() => isActive(2)}
                      >
                        70g
                      </a>
                    </li>
                    <li className="list-inline-item">
                      <a
                        className={`tag ${activeSize === 3 ? "active" : ""}`}
                        onClick={() => isActive(3)}
                      >
                        80g
                      </a>
                    </li>
                    <li className="list-inline-item">
                      <a
                        className={`tag ${activeSize === 4 ? "active" : ""}`}
                        onClick={() => isActive(4)}
                      >
                        90g
                      </a>
                    </li>
                  </ul>
                </div>

                <div className="addCartSection pt-4 pb-4 d-flex align-items-center">
                  <div className="countSection mr-3">
                    <input type="number" value={number} />
                    <span className="up arrow" onClick={plus}>
                      <KeyboardArrowUp />
                    </span>
                    <span className="down arrow" onClick={minus}>
                      <KeyboardArrowDown />
                    </span>
                  </div>

                  <Button className="btn-g btn-lg btn-top  addToCartIcon btn-border">
                    <ShoppingCart  className="opacity"/>
                    Add to Cart
                  </Button>

                  <Button className=" btn-lg ml-3 addToCartIcon btn-border">
                    <FavoriteBorderOutlined />
                  </Button>

                  <Button className=" btn-lg ml-3 addToCartIcon btn-border">
                    <CompareArrows />
                  </Button>
                </div>
              </div>
              {/* Product info CODE endS HERE */}
            </div>
          </div>

          <div className="col-md-3 rightPart sidebarWrapper pl-5">
            <Sidebar />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Details;
