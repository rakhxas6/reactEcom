import React from "react";
import { Link } from "react-router-dom";
import { Rating, Button } from "@mui/material";
import {
  ShoppingCartOutlined,
  FavoriteBorderOutlined,
  CompareArrowsOutlined,
  RemoveRedEyeOutlined,
} from "@mui/icons-material";
import Tooltip from "@mui/material/Tooltip";
import "./product.css";

const Product = (props) => {
  return (
    <div className="productThumb">
      {props.tag !== null && props.tag !== undefined && (
        <span className={`badge ${props.tag}`}>{props.tag}</span>
      )}
      <Link>
        <div className="imgWrapper">
          <img
            src="https://wp.alithemes.com/html/nest/demo/assets/imgs/shop/
product-2-1.jpg"
            alt="product"
            className="w-100"
          />
          <div className="overlay transition">
            <ul className="list list-inline mb-0 ">
              <Tooltip title="Add to wishlist" placement="top-start">
                <li className="list-inline-item">
                  <a href="" className="cursor">
                    <FavoriteBorderOutlined />
                  </a>
                </li>
              </Tooltip>
              <Tooltip title="Compare" placement="top-start">
                <li className="list-inline-item">
                  <a href="" className="cursor">
                    <CompareArrowsOutlined />
                  </a>
                </li>
              </Tooltip>
              <Tooltip title="Quick View" placement="top-start">
                <li className="list-inline-item">
                  <a href="" className="cursor">
                    <RemoveRedEyeOutlined />
                  </a>
                </li>
              </Tooltip>
            </ul>
          </div>
        </div>
      </Link>
      <div className="info ">
        <span className="d-block catName">Snack</span>
        <h4 className="title">
          <Link>Seeds of Change Organic Quinoa, Brown, & Red Rice</Link>
        </h4>
        <Rating
          name="half-rating-read"
          defaultValue={3.5}
          precision={0.5}
          readOnly
        />
        <span className="brand d-block text-g">
          By
          <Link href="" className="text-g ml-1">
            NestFood
          </Link>
        </span>

        <div className="d-flex align-items-center mt-3">
          <div className="d-flex align-items-center">
            <span className="price text-g font-weight-bold">$12.99</span>
            <span className="oldPrice">$19.99</span>
          </div>
          <Button className="transition ml-auto">
            {" "}
            <ShoppingCartOutlined />
            Add
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Product;
