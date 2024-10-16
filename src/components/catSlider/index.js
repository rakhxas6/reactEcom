import React, { useState } from "react";
import Slider from "react-slick";
import "./index.css";

const CatSlider = () => {
  const [itemBg, setItemBg] = useState([
    "#fffceb",
    "#ecffec",
    "#feefea",
    "#fff3eb",
    "#fff3ff",
    "#f2fce4",
    "#feefea",
    "#fffceb",
    "#feefea",
    "#ecffec",
    "#feefea",
    "#fff3eb",
    "#fff3ff",
    "#f2fce4",
    "#feefea",
    "#fffceb",
    "#feefea",
    "#ecffec",
  ]);
  var settings = {
    dots: false,
    arrows: true,
    infinite: true,
    speed: 500,
    slidesToShow: 10,
    slidesToScroll: 1,
    fade: false,
    autoplay: 2000,
    centerMode: true,
  };
  return (
    <>
      <div className="catSliderSection">
        <div className="container-field">
          <h2 className="hd"> Featured Categories</h2>
          <Slider {...settings} className="catSliderMain" id="catSliderMain">
            {itemBg.length !== 0 &&
              itemBg.map((item, index) => {
                return (
                  <div className="item">
                    <div className="info" style={{ background: item }}>
                      <img
                        src="https://wp.alithemes.com/html/nest/demo/assets/imgs/shop/cat-13.png"
                        alt=""
                      />
                      <h5>Cake & Milk</h5>
                      <p>26 items</p>
                    </div>
                  </div>
                );
              })}
            {/*             
            <div className="item">
              <div className="info">
                <img
                  src="https://wp.alithemes.com/html/nest/demo/assets/imgs/shop/cat-12.png"
                  alt=""
                />
                <h5>Cake & Milk</h5>
                <p>26 items</p>
              </div>
            </div>
            <div className="item">
              <div className="info">
                <img
                  src="https://wp.alithemes.com/html/nest/demo/assets/imgs/shop/cat-11.png"
                  alt=""
                />
                <h5>Cake & Milk</h5>
                <p>26 items</p>
              </div>
            </div>
            <div className="item">
              <div className="info">
                <img
                  src="https://wp.alithemes.com/html/nest/demo/assets/imgs/shop/cat-10.png"
                  alt=""
                />
                <h5>Cake & Milk</h5>
                <p>26 items</p>
              </div>
            </div>
            <div className="item">
              <div className="info">
                <img
                  src="https://wp.alithemes.com/html/nest/demo/assets/imgs/shop/cat-9.png"
                  alt=""
                />
                <h5>Cake & Milk</h5>
                <p>26 items</p>
              </div>
            </div>
            <div className="item">
              <div className="info">
                <img
                  src="https://wp.alithemes.com/html/nest/demo/assets/imgs/shop/cat-8.png"
                  alt=""
                />
                <h5>Cake & Milk</h5>
                <p>26 items</p>
              </div>
            </div>
            <div className="item">
              <div className="info">
                <img
                  src="https://wp.alithemes.com/html/nest/demo/assets/imgs/shop/cat-7.png"
                  alt=""
                />
                <h5>Cake & Milk</h5>
                <p>26 items</p>
              </div>
            </div>
            <div className="item">
              <div className="info">
                <img
                  src="https://wp.alithemes.com/html/nest/demo/assets/imgs/shop/cat-6.png"
                  alt=""
                />
                <h5>Cake & Milk</h5>
                <p>26 items</p>
              </div>
            </div>
            <div className="item">
              <div className="info">
                <img
                  src="https://wp.alithemes.com/html/nest/demo/assets/imgs/shop/cat-5.png"
                  alt=""
                />
                <h5>Cake & Milk</h5>
                <p>26 items</p>
              </div>
            </div>
            <div className="item">
              <div className="info">
                <img
                  src="https://wp.alithemes.com/html/nest/demo/assets/imgs/shop/cat-4.png"
                  alt=""
                />
                <h5>Cake & Milk</h5>
                <p>26 items</p>
              </div>
            </div> */}
          </Slider>
        </div>
      </div>
    </>
  );
};

export default CatSlider;
