import React from "react";
import logo from "../../assets/images/logo.svg";
import appStore from "../../assets/images/app-store.jpg";
import playStore from "../../assets/images/google-play.jpg";
import pGateway from "../../assets/images/payment-method.png";
import Icon1 from "../../assets/images/icon-1.svg";
import Icon2 from "../../assets/images/icon-2.svg";
import Icon3 from "../../assets/images/icon-3.svg";
import Icon4 from "../../assets/images/icon-4.svg";
import Icon5 from "../../assets/images/icon-5.svg";
import Banner9 from "../../assets/images/banner-9.png";
import NewsLetter from "../newsletter/NewsLetter";
import "./footer.css";
import { Link } from "react-router-dom";

import {
  LocationOnOutlined,
  HeadphonesOutlined,
  EmailOutlined,
  WatchLaterOutlined,
  FacebookRounded,
  Twitter,
  Instagram,
  LinkedIn,
  YouTube,
} from "@mui/icons-material";

const Footer = () => {
  return (
    <>
      <section className="newsLetterSection">
        <div className="container-field">
          <div className="box d-flex align-items-center">
            <div className="info">
              <h2>Stay home & get your daily needs from our shop</h2>
              <p>Start Your Daily Shopping with Nest Mart</p>
              <br />
              <br />
              <NewsLetter />
            </div>
            <div className="img">
              <img src={Banner9} className="w-100" alt="" />
            </div>
          </div>
        </div>
      </section>
      <div className="footerWrapper">
        <div className="footerBoxes">
          <div className="container-field">
            <div className="row">
              <div className="col">
                <div className="box d-flex align-items-center w-100">
                  <span>
                    <img src={Icon1} alt="" className="w-100" />
                  </span>
                  <div className="info">
                    <h4>Best prices & offers</h4>
                    <p>Orders $50 or more</p>
                  </div>
                </div>
              </div>
              <div className="col">
                <div className="box d-flex align-items-center w-100">
                  <span>
                    <img src={Icon2} alt="" className="w-100" />
                  </span>
                  <div className="info">
                    <h4>Free delivery</h4>
                    <p>24/7 amazing services</p>
                  </div>
                </div>
              </div>
              <div className="col">
                <div className="box d-flex align-items-center w-100">
                  <span>
                    <img src={Icon3} alt="" className="w-100" />
                  </span>
                  <div className="info">
                    <h4>Great daily deal</h4>
                    <p>When you sign up</p>
                  </div>
                </div>
              </div>
              <div className="col">
                <div className="box d-flex align-items-center w-100">
                  <span>
                    <img src={Icon4} alt="" className="w-100" />
                  </span>
                  <div className="info">
                    <h4>Wide assortment</h4>
                    <p>Mega Discounts</p>
                  </div>
                </div>
              </div>
              <div className="col">
                <div className="box d-flex align-items-center w-100">
                  <span>
                    <img src={Icon5} alt="" className="w-100" />
                  </span>
                  <div className="info">
                    <h4>Easy returns</h4>
                    <p> Within 30 days</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <footer>
          <div className="container-field">
            <div className="row">
              <div className="col-md-3 part1">
                <Link to="/">
                  <img src={logo} alt="" />
                </Link>
                <br />
                <br />
                <p>Awesome grocery store website template</p>
                <br />
                <p>
                  <LocationOnOutlined />
                  <strong>Address:</strong> 5171 W Campbell Ave undefined Kent,
                  Utah 53127 United States
                </p>
                <p>
                  <HeadphonesOutlined />
                  <strong>Call us:</strong>
                  (+91) - 540-025-124553
                </p>
                <p>
                  <EmailOutlined />
                  <strong>Email:</strong>info sale@Nest.com
                </p>
                <p>
                  <WatchLaterOutlined />
                  <strong>Hours:</strong>
                  0:00 - 18:00, Mon - Sat
                </p>
              </div>
              <div className="col-md-6 part2">
                <div className="row">
                  <div className="col">
                    <h3>Company</h3>
                    <ul class="footer-list mb-sm-5 mb-md-0">
                      <li>
                        <Link href="#">About Us</Link>
                      </li>
                      <li>
                        <Link href="#">Delivery Information</Link>
                      </li>
                      <li>
                        <Link href="#">Privacy Policy</Link>
                      </li>
                      <li>
                        <Link href="#">Terms &amp; Conditions</Link>
                      </li>
                      <li>
                        <Link href="#">Contact Us</Link>
                      </li>
                      <li>
                        <Link href="#">Support Center</Link>
                      </li>
                      <li>
                        <Link href="#">Careers</Link>
                      </li>
                    </ul>
                  </div>
                  <div className="col">
                    <h3>Account</h3>
                    <ul class="footer-list mb-sm-5 mb-md-0">
                      <li>
                        <Link href="#">Sign In</Link>
                      </li>
                      <li>
                        <Link href="#">View Cart</Link>
                      </li>
                      <li>
                        <Link href="#">My Wishlist</Link>
                      </li>
                      <li>
                        <Link href="#">Track My Order</Link>
                      </li>
                      <li>
                        <Link href="#">Help Ticket</Link>
                      </li>
                      <li>
                        <Link href="#">Shipping Details</Link>
                      </li>
                      <li>
                        <Link href="#">Compare products</Link>
                      </li>
                    </ul>
                  </div>
                  <div className="col">
                    <h3>Corporate</h3>
                    <ul class="footer-list mb-sm-5 mb-md-0">
                      <li>
                        <Link href="#">Become a Vendor</Link>
                      </li>
                      <li>
                        <Link href="#">Affiliate Program</Link>
                      </li>
                      <li>
                        <Link href="#">Farm Business</Link>
                      </li>
                      <li>
                        <Link href="#">Farm Careers</Link>
                      </li>
                      <li>
                        <Link href="#">Our Suppliers</Link>
                      </li>
                      <li>
                        <Link href="#">Accessibility</Link>
                      </li>
                      <li>
                        <Link href="#">Promotions</Link>
                      </li>
                    </ul>
                  </div>
                  <div className="col">
                    <h3>Popular</h3>
                    <ul class="footer-list mb-sm-5 mb-md-0">
                      <li>
                        <Link href="#">Milk &amp; Flavoured Milk</Link>
                      </li>
                      <li>
                        <Link href="#">Butter and Margarine</Link>
                      </li>
                      <li>
                        <Link href="#">Eggs Substitutes</Link>
                      </li>
                      <li>
                        <Link href="#">Marmalades</Link>
                      </li>
                      <li>
                        <Link href="#">Sour Cream and Dips</Link>
                      </li>
                      <li>
                        <Link href="#">Tea &amp; Kombucha</Link>
                      </li>
                      <li>
                        <Link href="#">Cheese</Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col-md-3 part3">
                <h3>Install App</h3>
                <br />
                <p className="mb-0">From App Store or Google Play</p>

                <div className="d-flex direction">
                  <Link to="https://www.apple.com/app-store/">
                    <img src={appStore} alt="" width={140} />
                  </Link>
                  <Link to="https://play.google.com/store/apps?pli=1">
                    <img src={playStore} alt="" width={140} />
                  </Link>
                </div>

                <br />

                <p>Secured Payment Gateways</p>
                <br />
                <div className="d-flex">
                  <img src={pGateway} alt="" />
                </div>
              </div>
            </div>

            <hr />

            <div className="row lastStrip">
              <div className="col-md-3">
                <p>
                  © 2022, <span className="text-g">Nest</span> - HTML Ecommerce
                  Template All rights reserved
                </p>
              </div>
              <div className="col-md-6 d-flex">
                <div className="m-auto d-flex align-items-center">
                  <div className="phNo d-flex align-items-center mx-4 mb-3 ">
                    <span className="d-flex align-items-center">
                      <HeadphonesOutlined />
                    </span>
                    <div className="info ml-3 ">
                      <h3 className="text-g mb-0">9886-675</h3>
                      <p className="mb-0">24/7 Support Center</p>
                    </div>
                  </div>
                  <div className="phNo d-flex align-items-center mx-4 mb-3 ">
                    <span className="d-flex align-items-center">
                      <HeadphonesOutlined />
                    </span>
                    <div className="info ml-3">
                      <h3 className="text-g mb-0">9806-600</h3>
                      <p className="mb-0">24/7 Support Center</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-3 part3">
                <div className="d-flex align-items-center">
                  <h5>Follow us</h5>
                  <ul className="list list-inline">
                    <li className="list-inline-item">
                      <Link to="/facebook.com">
                        <FacebookRounded />
                      </Link>
                    </li>
                    <li className="list-inline-item">
                      <Link to="/x.com">
                        <Twitter />
                      </Link>
                    </li>
                    <li className="list-inline-item">
                      <Link to="/instagram.com">
                        <Instagram />
                      </Link>
                    </li>
                    <li className="list-inline-item">
                      <Link to="/linkedin.com">
                        <LinkedIn />
                      </Link>
                    </li>
                    <li className="list-inline-item">
                      <Link to="/youtube.com">
                        <YouTube />
                      </Link>
                    </li>
                  </ul>
                </div>
                <p className="mb-0">
                  Up to 15% discount on your first subscribe
                </p>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
};

export default Footer;
