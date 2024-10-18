import React from "react";
import Slider from "react-slick";
import SliderBanner from "./slider/index";

import Banners from "../../banners/banner";
import CatSlider from "../../catSlider/index";

import Banner4 from "../../../assets/images/banner-4.jpg";
import Product from "../../product/product";
import TopProducts from "./TopProducts/TopProducts";


import "./index.css";

const Home = () => {
  var settings = {
    dots: false,
    arrows: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    fade: false,
    autoplay: 3000,
  };
  return (
    <>
      <SliderBanner />
      <CatSlider />

      <Banners />

      <section className="homeProducts ">
        <div className="container-field">
          <div className="d-flex align-items-center">
            <h2 className="hd mb-0 mt-0">Popular Products</h2>
            <ul className="list list-inline ml-auto  filterTab mb-0">
              <li className="list-inline-item">
                <a href="" className="cursor">
                  All
                </a>
              </li>
              <li className="list-inline-item">
                <a href="" className="cursor">
                  Milks & Dairies
                </a>
              </li>
              <li className="list-inline-item">
                <a href="" className="cursor">
                  Coffees & Teas
                </a>
              </li>
              <li className="list-inline-item">
                <a href="" className="cursor">
                  Pet Foods
                </a>
              </li>
              <li className="list-inline-item">
                <a href="" className="cursor">
                  Meats
                </a>
              </li>
              <li className="list-inline-item">
                <a href="" className="cursor">
                  Vegetables
                </a>
              </li>
              <li className="list-inline-item">
                <a href="" className="cursor">
                  Fruits
                </a>
              </li>
            </ul>
          </div>
          <div className=" productRow ">
            <div className="item">
              <Product tag="sale" />
            </div>
            <div className="item">
              <Product />
            </div>
            <div className="item">
              <Product />
            </div>
            <div className="item">
              <Product tag="new" />
            </div>
            <div className="item">
              <Product />
            </div>
            <div className="item">
              <Product tag="hot" />
            </div>
            <div className="item">
              <Product />
            </div>
            <div className="item">
              <Product tag="best" />
            </div>
            <div className="item">
              <Product />
            </div>
            <div className="item">
              <Product />
            </div>
            <div className="item">
              <Product />
            </div>
            <div className="item">
              <Product tag="new" />
            </div>
          </div>
        </div>
      </section>

      <section className="homeProducts homeProductsRow2 pt-0">
        <div className="container-field">
          <div className="d-flex align-items-center">
            <h2 className="hd mb-0 mt-0">Daily Best Sells</h2>
            <ul className="list list-inline ml-auto  filterTab mb-0">
              <li className="list-inline-item">
                <a href="" className="cursor">
                  Featured
                </a>
              </li>
              <li className="list-inline-item">
                <a href="" className="cursor">
                  Popular
                </a>
              </li>
              <li className="list-inline-item">
                <a href="" className="cursor">
                  New Added
                </a>
              </li>
            </ul>
          </div>

          <br />
          <br />
          <div className="row">
            <div className="col-md-3 pr-3">
              <img src={Banner4} alt="" className="w-100" />
            </div>
            <div className="col-md-9">
              <Slider {...settings} className="prodSlider">
                <div className="item">
                  <Product tag="hot" />
                </div>
                <div className="item">
                  <Product tag="best" />
                </div>
                <div className="item">
                  <Product tag="new" />
                </div>
                <div className="item">
                  <Product tag="sale" />
                </div>
              </Slider>
            </div>
          </div>
        </div>
      </section>

      <section className="topProductsSection">
        <div className="container-field">
          <div className="row">
            <div className="col">
              <TopProducts title="Top Selling" />
            </div>
            <div className="col">
              <TopProducts title="Trending Products" />
            </div>
            <div className="col">
              <TopProducts title="Recently Added" />
            </div>
            <div className="col">
              <TopProducts title="Top Rated" />
            </div>
          </div>
        </div>
      </section>

      

    </>
  );
};

export default Home;
