import React from "react";
import "./banner.css";
import { Link } from "react-router-dom";
import Banner1 from "../../assets/images/banner-1.png";
import Banner2 from "../../assets/images/banner-2.png";
import Banner3 from "../../assets/images/banner-3.png";
import { ChevronRight } from "@mui/icons-material";

const Banners = () => {
  return (
    <div className="bannerSection">
      <div className="container-field">
        <div className="row">
          <div className="col">
            <div className="box">
              <div
                class="banner-img wow "
                data-wow-delay="0"
                style={{ visibility: "visible" }}
              >
                <img src={Banner1} alt="" className="w-100 transition" />
                <div class="banner-text">
                  <h4>
                    Everyday Fresh &amp; <br />
                    Clean with Our
                    <br />
                    Products
                  </h4>
                  <Link href="/" class="btn-g tdn">
                    Shop Now <ChevronRight className="icon" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="box">
              <div
                class="banner-img wow "
                data-wow-delay="0"
                style={{ visibility: "visible" }}
              >
                <img src={Banner2} alt="" className="w-100 transition" />
                <div class="banner-text">
                  <h4>
                    Make your Breakfast
                    <br />
                    Healthy and Easy
                  </h4>
                  <Link href="/" class="btn-g tdn">
                    Shop Now <ChevronRight className="icon" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="box">
              <div
                class="banner-img wow "
                data-wow-delay="0"
                style={{ visibility: "visible" }}
              >
                <img src={Banner3} alt="" className="w-100 transition" />
                <div class="banner-text">
                  <h4>
                    The best Organic <br />
                    Products Online
                  </h4>
                  <Link href="/" class="btn-g tdn">
                    Shop Now <ChevronRight className="icon" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banners;
