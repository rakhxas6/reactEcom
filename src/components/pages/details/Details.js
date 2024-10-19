import { Button, Rating } from "@mui/material";
import React, { useRef, useState } from "react";
import InnerImageZoom from "react-inner-image-zoom";
import "react-inner-image-zoom/lib/InnerImageZoom/styles.css";
import { Link } from "react-router-dom";
import Sidebar from "../../sidebar/Sidebar";
import Product from "../../product/product"
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
  const zoomRefBig = useRef();
  const [zoomImage, setZoomImage] = useState(
    "https://www.jiomart.com/images/product/original/490000363/maggi-2-minute-masala-noodles-70-g-product-images-o490000363-p490000363-0-202305292130.jpg"
  );

  const [bigImageSize, setBigImageSize] = useState([1500, 1500]);
  const [smallImageSize, setSmallZoomImage] = useState([150, 150]);

  const [activeSize, setActiveSize] = useState(0);
  const [activeTabs, setActiveTabs] = useState(0);
  const [number, setNumber] = useState(1);

  var settings = {
    dots: false,
    arrows: true,
    infinite: false,
    speed: 1000,
    slidesToShow: 5,
    slidesToScroll: 1,
    fade: false,
  };
  var settings2 = {
    dots: false,
    arrows: false,
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    fade: false,
  };

   var relatedSettings = {
     dots: false,
     arrows: true,
     infinite: true,
     speed: 500,
     slidesToShow: 3,
     slidesToScroll: 1,
     fade: false,
     autoplay: 1500,
   };

  const goTo = (index) => {
    zoomRef.current.slickGoTo(index);
    zoomRefBig.current.slickGoTo(index);
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
    <section className="detailsPage mb-5">
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
                  <Slider
                    {...settings2}
                    className="zoomSliderBig"
                    ref={zoomRefBig}
                  >
                    <div className="item">
                      <InnerImageZoom
                        zoomScale={1}
                        zoomType="hover"
                        src={`https://www.jiomart.com/images/product/original/490000363/maggi-2-minute-masala-noodles-70-g-product-images-o490000363-p490000363-0-202305292130.jpg?im=Resize=(${bigImageSize[0]},${bigImageSize[1]})`}
                      />
                    </div>
                    <div className="item">
                      <InnerImageZoom
                        zoomScale={1}
                        zoomType="hover"
                        src={`https://www.jiomart.com/images/product/original/490000363/maggi-2-minute-masala-noodles-70-g-product-images-o490000363-p490000363-1-202305292130.jpg?im=Resize=(${bigImageSize[0]},${bigImageSize[1]})`}
                      />
                    </div>
                    <div className="item">
                      <InnerImageZoom
                        zoomScale={1}
                        zoomType="hover"
                        src={`https://www.jiomart.com/images/product/original/490000363/maggi-2-minute-masala-noodles-70-g-product-images-o490000363-p490000363-2-202305292130.jpg?im=Resize=(${bigImageSize[0]},${bigImageSize[1]})`}
                      />
                    </div>
                    <div className="item">
                      <InnerImageZoom
                        zoomScale={1}
                        zoomType="hover"
                        src={`https://www.jiomart.com/images/product/original/490000363/maggi-2-minute-masala-noodles-70-g-product-images-o490000363-p490000363-3-202305292130.jpg?im=Resize=(${bigImageSize[0]},${bigImageSize[1]})`}
                      />
                    </div>
                    <div className="item">
                      <InnerImageZoom
                        zoomScale={1}
                        zoomType="hover"
                        src={`https://www.jiomart.com/images/product/original/490000363/maggi-2-minute-masala-noodles-70-g-legal-images-o490000363-p490000363-5-202305292130.jpg?im=Resize=(${bigImageSize[0]},${bigImageSize[1]})`}
                      />
                    </div>
                    <div className="item">
                      <InnerImageZoom
                        zoomScale={1}
                        zoomType="hover"
                        src={`https://www.jiomart.com/images/product/original/490000363/maggi-2-minute-masala-noodles-70-g-legal-images-o490000363-p490000363-5-202305292130.jpg?im=Resize=(${bigImageSize[0]},${bigImageSize[1]})`}
                      />
                    </div>
                    <div className="item">
                      <InnerImageZoom
                        zoomScale={1}
                        zoomType="hover"
                        src={`https://www.jiomart.com/images/product/original/490000363/maggi-2-minute-masala-noodles-70-g-legal-images-o490000363-p490000363-6-202305292130.jpg?im=Resize=(${bigImageSize[0]},${bigImageSize[1]})`}
                      />
                    </div>
                  </Slider>
                </div>
                <Slider {...settings} className="zoomSlider" ref={zoomRef}>
                  <div className="item">
                    <img
                      src={`https://www.jiomart.com/images/product/original/490000363/maggi-2-minute-masala-noodles-70-g-product-images-o490000363-p490000363-0-202305292130.jpg?im=Resize=(${smallImageSize[0]},${smallImageSize[1]})`}
                      alt=""
                      className="w-100"
                      onClick={() => goTo(0)}
                    />
                  </div>
                  <div className="item">
                    <img
                      src={`https://www.jiomart.com/images/product/original/490000363/maggi-2-minute-masala-noodles-70-g-product-images-o490000363-p490000363-1-202305292130.jpg?im=Resize=(${smallImageSize[0]},${smallImageSize[1]})`}
                      alt=""
                      className="w-100"
                      onClick={() => goTo(1)}
                    />
                  </div>
                  <div className="item">
                    <img
                      src={`https://www.jiomart.com/images/product/original/490000363/maggi-2-minute-masala-noodles-70-g-product-images-o490000363-p490000363-2-202305292130.jpg?im=Resize=(${smallImageSize[0]},${smallImageSize[1]})`}
                      alt=""
                      className="w-100"
                      onClick={() => goTo(2)}
                    />
                  </div>
                  <div className="item">
                    <img
                      src={`https://www.jiomart.com/images/product/original/490000363/maggi-2-minute-masala-noodles-70-g-product-images-o490000363-p490000363-3-202305292130.jpg?im=Resize=(${smallImageSize[0]},${smallImageSize[1]})`}
                      alt=""
                      className="w-100"
                      onClick={() => goTo(3)}
                    />
                  </div>
                  <div className="item">
                    <img
                      src={`https://www.jiomart.com/images/product/original/490000363/maggi-2-minute-masala-noodles-70-g-legal-images-o490000363-p490000363-5-202305292130.jpg?im=Resize=(${smallImageSize[0]},${smallImageSize[1]})`}
                      alt=""
                      className="w-100"
                      onClick={() => goTo(4)}
                    />
                  </div>

                  <div className="item">
                    <img
                      src={` https://www.jiomart.com/images/product/original/490000363/maggi-2-minute-masala-noodles-70-g-legal-images-o490000363-p490000363-5-202305292130.jpg?im=Resize=(${smallImageSize[0]},${smallImageSize[1]})`}
                      alt=""
                      className="w-100"
                      onClick={() => goTo(5)}
                    />
                  </div>
                  <div className="item">
                    <img
                      src={`https://www.jiomart.com/images/product/original/490000363/maggi-2-minute-masala-noodles-70-g-legal-images-o490000363-p490000363-6-202305292130.jpg?im=Resize=(${smallImageSize[0]},${smallImageSize[1]})`}
                      alt=""
                      className="w-100"
                      onClick={() => goTo(6)}
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

                <div className="priceSec d-flex align-items-center mb-1">
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

                <div className="productSize d-flex align-items-center mb-0">
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

                <div className="addCartSection pt-0 pb-4 d-flex align-items-center">
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
                    <ShoppingCart className="opacity" />
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
            <div className="card mt-5 p-5 detailsPageTabs">
              <div className="customTabs">
                <ul className="list inline-item">
                  <li className="list-inline-item">
                    <Button
                      className={`${activeTabs === 0 && "active"} `}
                      onClick={() => setActiveTabs(0)}
                    >
                      Description
                    </Button>
                  </li>
                  <li className="list-inline-item">
                    <Button
                      className={`${activeTabs === 1 && "active"} `}
                      onClick={() => setActiveTabs(1)}
                    >
                      Additional info
                    </Button>
                  </li>
                  <li className="list-inline-item">
                    <Button
                      className={`${activeTabs === 2 && "active"} `}
                      onClick={() => setActiveTabs(2)}
                    >
                      vendor
                    </Button>
                  </li>
                  <li className="list-inline-item">
                    <Button
                      className={`${activeTabs === 3 && "active"} `}
                      onClick={() => setActiveTabs(3)}
                    >
                      Reviews (3)
                    </Button>
                  </li>
                </ul>

                <br />
                {activeTabs === 0 && (
                  <div className="tabContent">
                    <p className="mb-0">
                      Uninhibited carnally hired played in whimpered dear
                      gorilla koala depending and much yikes off far quetzal
                      goodness and from for grimaced goodness unaccountably and
                      meadowlark near unblushingly crucial scallop tightly
                      neurotic hungrily some and dear furiously this apart.
                    </p>
                    <p className="mb-0">
                      Spluttered narrowly yikes left moth in yikes bowed this
                      that grizzly much hello on spoon-fed that alas rethought
                      much decently richly and wow against the frequent fluidly
                      at formidable acceptably flapped besides and much circa
                      far over the bucolically hey precarious goldfinch mastodon
                      goodness gnashed a jellyfish and one however because.
                    </p>
                    <ul class="product-more-information">
                      <li>
                        <span>Type Of Packing</span> Bottle
                      </li>
                      <li>
                        <span>Color</span> Green, Pink, Powder Blue, Purple
                      </li>
                      <li>
                        <span>Quantity Per Case</span> 100ml
                      </li>
                      <li>
                        <span>Ethyl Alcohol</span> 70%
                      </li>
                      <li>
                        <span>Piece In One</span> Carton
                      </li>
                    </ul>
                    <br />
                    <h2>Packaging & Delivery</h2>
                    <hr />
                    <p className="mb-0">
                      Less lion goodness that euphemistically robin
                      expeditiously bluebird smugly scratched far while thus
                      cackled sheepishly rigid after due one assenting regarding
                      censorious while occasional or this more crane went more
                      as this less much amid overhung anathematic because much
                      held one exuberantly sheep goodness so where rat wry well
                      concomitantly.
                    </p>
                    <p className="mb-0">
                      Scallop or far crud plain remarkably far by thus far
                      iguana lewd precociously and and less rattlesnake contrary
                      caustic wow this near alas and next and pled the yikes
                      articulate about as less cackled dalmatian in much less
                      well jeering for the thanks blindly sentimental whimpered
                      less across objectively fanciful grimaced wildly some wow
                      and rose jeepers outgrew lugubrious luridly irrationally
                      attractively dachshund.
                    </p>
                    <hr />
                    <h2>Suggested Use</h2>
                    <p>Refrigeration not necessary.</p>
                    <p>Stir before serving</p>
                    <hr />
                    <h2>Other Ingredients</h2>
                    <p>Organic raw pecans, organic raw cashews.</p>
                    <p>
                      This butter was produced using a LTG (Low Temperature
                      Grinding) process
                    </p>
                    <p>
                      Made in machinery that processes tree nuts but does not
                      process peanuts, gluten, dairy or soy
                    </p>
                    <hr />
                    <h2>Warnings</h2>
                    <p>
                      Oil separation occurs naturally. May contain pieces of
                      shell.
                    </p>
                  </div>
                )}
                {activeTabs === 1 && (
                  <div className="tabContent">
                    <div className="table-responsive">
                      <table className="table table-bordered">
                        <table>
                          <tbody>
                            <tr class="stand-up">
                              <th>Stand Up</th>
                              <td>
                                <p>
                                  35″L x 24″W x 37-45″H(front to back wheel)
                                </p>
                              </td>
                            </tr>
                            <tr class="folded-wo-wheels">
                              <th>Folded (w/o wheels)</th>
                              <td>
                                <p>32.5″L x 18.5″W x 16.5″H</p>
                              </td>
                            </tr>
                            <tr class="folded-w-wheels">
                              <th>Folded (w/ wheels)</th>
                              <td>
                                <p>32.5″L x 24″W x 18.5″H</p>
                              </td>
                            </tr>
                            <tr class="door-pass-through">
                              <th>Door Pass Through</th>
                              <td>
                                <p>24</p>
                              </td>
                            </tr>
                            <tr class="frame">
                              <th>Frame</th>
                              <td>
                                <p>Aluminum</p>
                              </td>
                            </tr>
                            <tr class="weight-wo-wheels">
                              <th>Weight (w/o wheels)</th>
                              <td>
                                <p>20 LBS</p>
                              </td>
                            </tr>
                            <tr class="weight-capacity">
                              <th>Weight Capacity</th>
                              <td>
                                <p>60 LBS</p>
                              </td>
                            </tr>
                            <tr class="width">
                              <th>Width</th>
                              <td>
                                <p>24″</p>
                              </td>
                            </tr>
                            <tr class="handle-height-ground-to-handle">
                              <th>Handle height (ground to handle)</th>
                              <td>
                                <p>37-45″</p>
                              </td>
                            </tr>
                            <tr class="wheels">
                              <th>Wheels</th>
                              <td>
                                <p>12″ air / wide track slick tread</p>
                              </td>
                            </tr>
                            <tr class="seat-back-height">
                              <th>Seat back height</th>
                              <td>
                                <p>21.5″</p>
                              </td>
                            </tr>
                            <tr class="head-room-inside-canopy">
                              <th>Head room (inside canopy)</th>
                              <td>
                                <p>25″</p>
                              </td>
                            </tr>
                            <tr class="pa_color">
                              <th>Color</th>
                              <td>
                                <p>Black, Blue, Red, White</p>
                              </td>
                            </tr>
                            <tr class="pa_size">
                              <th>Size</th>
                              <td>
                                <p>M, S</p>
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </table>
                    </div>
                  </div>
                )}
                {activeTabs === 2 && (
                  <div className="tabContent">
                    <div class="tab-pane fade active show" id="Vendor-info">
                      <div class="vendor-logo d-flex mb-30">
                        <img
                          src="https://wp.alithemes.com/html/nest/demo/assets/imgs/vendor/vendor-18.svg"
                          alt=""
                        />
                        <div class="vendor-name ml-15">
                          <h6>
                            <Link>Noodles Co.</Link>
                          </h6>
                          <div class="product-rate-cover text-end">
                            <div class="product-rate d-inline-block">
                              <Rating name="read-only" value={4} readOnly />
                            </div>
                            <span class="font-small ml-1 text-muted">
                              (32 reviews)
                            </span>
                          </div>
                        </div>
                      </div>
                      <ul class="contact-infor mb-4">
                        <li>
                          <img
                            src="https://wp.alithemes.com/html/nest/demo/assets/imgs/theme/icons/icon-location.svg"
                            alt=""
                          />
                          <strong className="ml-2 mr-2">Address: </strong>
                          <span className="">
                            5171 W Campbell Ave undefined Kent, Utah 53127
                            United States
                          </span>
                        </li>
                        <li>
                          <img
                            src="https://wp.alithemes.com/html/nest/demo/assets/imgs/theme/icons/icon-contact.svg"
                            alt=""
                          />
                          <strong className="ml-2 mr-2">Contact Seller:</strong>
                          <span className="">(+91) - 540-025-553</span>
                        </li>
                      </ul>
                      <div class="d-flex mb-4">
                        <div class="mr-4">
                          <p class="text-brand font-xs">Rating</p>
                          <h4 class="mb-0">92%</h4>
                        </div>
                        <div class="mr-4">
                          <p class="text-brand font-xs">Ship on time</p>
                          <h4 class="mb-0">100%</h4>
                        </div>
                        <div>
                          <p class="text-brand font-xs">Chat response</p>
                          <h4 class="mb-0">89%</h4>
                        </div>
                      </div>
                      <p>
                        Noodles &amp; Company is an American fast-casual
                        restaurant that offers international and American noodle
                        dishes and pasta in addition to soups and salads.
                        Noodles &amp; Company was founded in 1995 by Aaron
                        Kennedy and is headquartered in Broomfield, Colorado.
                        The company went public in 2013 and recorded a $457
                        million revenue in 2017.In late 2018, there were 460
                        Noodles &amp; Company locations across 29 states and
                        Washington, D.C.
                      </p>
                    </div>
                  </div>
                )}
                {activeTabs === 3 && (
                  <div className="tabContent">
                    <div className="row">
                      <div className="col-md-8">
                        <h3>Customers questions & answers</h3>
                        <br />
                        <div className="card p-4 reviewsCard flex-row">
                          <div className="image">
                            <div className="rounded-circle">
                              <img
                                src="https://wp.alithemes.com/html/nest/demo/assets/imgs/blog/author-2.png"
                                alt=""
                              />
                            </div>
                            <span className="text-g d-block text-center font-weight-bold">
                              Sienna
                            </span>
                          </div>
                          <div className="info pl-3">
                            <div className="d-flex align-items-center">
                              <h5 className="text-light">
                                December 4, 2022 at 3:12 pm
                              </h5>
                              <div className="ml-auto">
                                <Rating name="read-only" value={4} readOnly />
                              </div>
                            </div>
                            <p>
                              Lorem ipsum dolor sit amet consectetur,
                              adipisicing elit. Quam porro unde excepturi odit
                              maiores culpa eum voluptatum architecto. Quibusdam
                              laudantium iure, impedit illo quasi totam
                              voluptates repellendus dignissimos ea architecto.
                            </p>
                          </div>
                        </div>
                        <div className="card p-4 reviewsCard flex-row">
                          <div className="image">
                            <div className="rounded-circle">
                              <img
                                src="https://wp.alithemes.com/html/nest/demo/assets/imgs/blog/author-3.png"
                                alt=""
                              />
                            </div>
                            <span className="text-g d-block text-center font-weight-bold">
                              Grenna
                            </span>
                          </div>
                          <div className="info pl-3">
                            <div className="d-flex align-items-center">
                              <h5 className="text-light">
                                December 4, 2022 at 3:12 pm
                              </h5>
                              <div className="ml-auto">
                                <Rating name="read-only" value={4} readOnly />
                              </div>
                            </div>
                            <p>
                              Lorem ipsum dolor sit amet consectetur,
                              adipisicing elit. Quam porro unde excepturi odit
                              maiores culpa eum voluptatum architecto. Quibusdam
                              laudantium iure, impedit illo quasi totam
                              voluptates repellendus dignissimos ea architecto.
                            </p>
                          </div>
                        </div>
                        <div className="card p-4 reviewsCard flex-row">
                          <div className="image">
                            <div className="rounded-circle">
                              <img
                                src="https://wp.alithemes.com/html/nest/demo/assets/imgs/blog/author-4.png"
                                alt=""
                              />
                            </div>
                            <span className="text-g d-block text-center font-weight-bold">
                              Brenna
                            </span>
                          </div>
                          <div className="info pl-3">
                            <div className="d-flex align-items-center">
                              <h5 className="text-light">
                                December 4, 2022 at 3:12 pm
                              </h5>
                              <div className="ml-auto">
                                <Rating name="read-only" value={4} readOnly />
                              </div>
                            </div>
                            <p>
                              Lorem ipsum dolor sit amet consectetur,
                              adipisicing elit. Quam porro unde excepturi odit
                              maiores culpa eum voluptatum architecto. Quibusdam
                              laudantium iure, impedit illo quasi totam
                              voluptates repellendus dignissimos ea architecto.
                            </p>
                          </div>
                        </div>

                        <br />
                        <br />

                        <form action="" className="reviewForm">
                          <h1>Add a Review</h1> <br />
                          <div className="form-group">
                            <textarea
                              className="form-control"
                              placeholder="Write a Review"
                            ></textarea>
                          </div>
                          <div className="row">
                            <div className="col-md-6">
                              <div className="form-group">
                                <input
                                  type="text"
                                  className="form-control"
                                  placeholder="Name"
                                />
                              </div>
                            </div>
                            <div className="col-md-6">
                              <div className="form-group">
                                <input
                                  type="text"
                                  className="form-control"
                                  placeholder="Email"
                                />
                              </div>
                            </div>
                          </div>
                          <div className="form-group">
                            <input
                              type="text"
                              className="form-control"
                              placeholder="Website"
                            />
                          </div>
                          <br />
                          <div className="form-group">
                            <Button className="btn-g btn-lg">
                              Submit Review
                            </Button>
                          </div>
                        </form>
                      </div>
                      <div className="col-md-4 pl-3">
                        <h4>Customer Reviews</h4>

                        <div className="d-flex align-items-center mt-2">
                          <Rating
                            name="half-rating-read"
                            defaultValue={4.5}
                            precision={0.5}
                            readOnly
                          />
                          <strong className="ml-2">4.8 out of 5</strong>
                        </div>
                        <br />
                        <div className="progressBarBox d-flex align-items-center">
                          <span className="mr-2">5 star</span>
                          <div
                            className="progress"
                            style={{ width: "80%", height: "20px" }}
                          >
                            <div
                              className="progress-bar bg-success"
                              style={{ width: "100%", height: "20px" }}
                            >
                              100%
                            </div>
                          </div>
                        </div>
                        <div className="progressBarBox d-flex align-items-center">
                          <span className="mr-2">4 star</span>
                          <div
                            className="progress"
                            style={{ width: "80%", height: "20px" }}
                          >
                            <div
                              className="progress-bar bg-success"
                              style={{ width: "70%", height: "20px" }}
                            >
                              70%
                            </div>
                          </div>
                        </div>
                        <div className="progressBarBox d-flex align-items-center">
                          <span className="mr-2">3 star</span>
                          <div
                            className="progress"
                            style={{ width: "80%", height: "20px" }}
                          >
                            <div
                              className="progress-bar bg-success"
                              style={{ width: "50%", height: "20px" }}
                            >
                              50%
                            </div>
                          </div>
                        </div>
                        <div className="progressBarBox d-flex align-items-center">
                          <span className="mr-2">2 star</span>
                          <div
                            className="progress"
                            style={{ width: "80%", height: "20px" }}
                          >
                            <div
                              className="progress-bar bg-success"
                              style={{ width: "35%", height: "20px" }}
                            >
                              35%
                            </div>
                          </div>
                        </div>
                        <div className="progressBarBox d-flex align-items-center">
                          <span className="mr-2">1 star</span>
                          <div
                            className="progress"
                            style={{ width: "80%", height: "20px" }}
                          >
                            <div
                              className="progress-bar bg-success"
                              style={{ width: "25%", height: "20px" }}
                            >
                              25%
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
            <div className="relatedProducts pt-5 pb-4">
              <h2 className="hd mb-0 mt-0">Related Products</h2>
              <Slider {...relatedSettings} className="prodSlider">
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

          <div className="col-md-3 rightPart sidebarWrapper pl-5">
            <Sidebar />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Details;
