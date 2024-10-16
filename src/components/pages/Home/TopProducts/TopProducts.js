import React from "react";
import thumbNail1 from "../../../../assets/images/thumbnail-1.jpg";
import thumbNail2 from "../../../../assets/images/thumbnail-2.jpg";
import thumbNail3 from "../../../../assets/images/thumbnail-3.jpg";
import { Link } from "react-router-dom";
import { Rating } from "@mui/material";
import "./TopProducts.css";

const TopProducts = ({ title }) => {
  return (
    <>
      <div className="topSellingBox">
        <h3>{title}</h3>

        <div className="items d-flex align-items-center transition">
          <div className="img">
            <Link>
              <img src={thumbNail1} className="w-100" alt="" />
            </Link>
          </div>
          <div className="info px-3">
            <Link to="">
              <h4>Nestle Original Coffee-Mate Coffee Creamer</h4>
            </Link>
            <Rating
              name="half-rating-read"
              defaultValue={3.5}
              precision={0.5}
              readOnly
              className="mt-0"
            />
            <div className="d-flex align-items-center pp">
              <span className="price text-g font-weight-bold mr-2">$12.99</span>
              <span className="oldPrice">$19.99</span>
            </div>
          </div>
        </div>
        <div className="items d-flex align-items-center transition">
          <div className="img">
            <Link>
              <img src={thumbNail2} className="w-100" alt="" />
            </Link>
          </div>
          <div className="info px-3">
            <Link to="">
              <h4>Nestle Original Coffee-Mate Coffee Creamer</h4>
            </Link>
            <Rating
              name="half-rating-read"
              defaultValue={3.5}
              precision={0.5}
              readOnly
              className="mt-0"
            />
            <div className="d-flex align-items-center">
              <span className="price text-g font-weight-bold mr-2">$12.99</span>
              <span className="oldPrice">$19.99</span>
            </div>
          </div>
        </div>
        <div className="items d-flex align-items-center transition">
          <div className="img">
            <Link>
              <img src={thumbNail3} className="w-100" alt="" />
            </Link>
          </div>
          <div className="info px-3">
            <Link to="">
              <h4>Nestle Original Coffee-Mate Coffee Creamer</h4>
            </Link>
            <Rating
              name="half-rating-read"
              defaultValue={3.5}
              precision={0.5}
              readOnly
              className="mt-0"
            />
            <div className="d-flex align-items-center">
              <span className="price text-g font-weight-bold mr-2">$12.99</span>
              <span className="oldPrice">$19.99</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default TopProducts;
