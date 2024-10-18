import {
  Home,
  GridViewOutlined,
  FilterListOutlined,
} from "@mui/icons-material";
import Button from "@mui/material/Button";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import Product from "../../product/product";
import Sidebar from "../../sidebar/Sidebar";

import "./Listing.css";

const Listing = () => {
  const [isOpenDropDown, setIsOpenDropDown] = useState(false);
  const [isOpenDropDown1, setIsOpenDropDown1] = useState(false);

  return (
    <section className="listingPage">
      <div className="container-field">
        <div className="breadcrumb flex-column">
          <h1>Snack</h1>
          <ul className="list inline-item mb-0 ">
            <li className="list-inline-item">
              <Link to={"/"}>
                <Home className="mb-1" />
                Home
              </Link>
            </li>
            <li className="list-inline-item">
              <Link to={"/"}>Shop</Link>
            </li>
            <li className="list-inline-item">
              <Link to={"/"}>Snack</Link>
            </li>
          </ul>
        </div>

        <div className="listingData">
          <div className="row">
            <div className="col-md-3 sidebarWrapper">
              <Sidebar />
            </div>
            <div className="col-md-9 rightContent homeProducts pt-0">
              <div className="topStrip d-flex align-items-center">
                <p className="mb-0">
                  We found <span className="text-success">29</span> items for
                  you!
                </p>
                <div className="ml-auto d-flex align-items-center">
                  <div className="tab position-relative">
                    <Button
                      className="btn_"
                      onClick={() => setIsOpenDropDown(!isOpenDropDown)}
                    >
                      <GridViewOutlined />
                      Show: 50
                    </Button>
                    {isOpenDropDown !== false && (
                      <ul className="dropdownMenu">
                        <li>
                          <Button
                            className="align-items-center"
                            onClick={() => setIsOpenDropDown(false)}
                          >
                            50
                          </Button>
                        </li>
                        <li>
                          <Button
                            onClick={() => setIsOpenDropDown(false)}
                            className="align-items-center"
                          >
                            100
                          </Button>
                        </li>

                        <li>
                          <Button
                            onClick={() => setIsOpenDropDown(false)}
                            className="align-items-center"
                          >
                            150
                          </Button>
                        </li>
                        <li>
                          <Button
                            onClick={() => setIsOpenDropDown(false)}
                            className="align-items-center"
                          >
                            200
                          </Button>
                        </li>
                        <li>
                          <Button
                            onClick={() => setIsOpenDropDown(false)}
                            className="align-items-center"
                          >
                            All
                          </Button>
                        </li>
                      </ul>
                    )}
                  </div>
                  <div className="tab ml-3 position-relative">
                    <Button
                      className="btn_"
                      onClick={() => setIsOpenDropDown1(!isOpenDropDown1)}
                    >
                      <FilterListOutlined />
                      Sort by: Featured
                    </Button>
                    {isOpenDropDown1 !== false && (
                      <ul className="dropdownMenu">
                        <li>
                          <Button
                            className="align-items-center"
                            onClick={() => setIsOpenDropDown1(false)}
                          >
                            Featured
                          </Button>
                        </li>
                        <li>
                          <Button
                            className="align-items-center"
                            onClick={() => setIsOpenDropDown1(false)}
                          >
                            Price: Low to High
                          </Button>
                        </li>

                        <li>
                          <Button
                            className="align-items-center"
                            onClick={() => setIsOpenDropDown1(false)}
                          >
                            Price: High to Low
                          </Button>
                        </li>
                        <li>
                          <Button
                            className="align-items-center"
                            onClick={() => setIsOpenDropDown1(false)}
                          >
                            Release Date
                          </Button>
                        </li>
                        <li>
                          <Button
                            className="align-items-center"
                            onClick={() => setIsOpenDropDown1(false)}
                          >
                            Average Rating
                          </Button>
                        </li>
                      </ul>
                    )}
                  </div>
                </div>
              </div>

              <div className="productRow pl-4 pr-3">
                <div className="item ">
                  <Product tag="best" />
                </div>
                <div className="item">
                  <Product tag="new" />
                </div>
                <div className="item">
                  <Product />
                </div>
                <div className="item">
                  <Product tag="sale" />
                </div>
                <div className="item">
                  <Product />
                </div>
                <div className="item">
                  <Product tag="sale" />
                </div>
                <div className="item">
                  <Product />
                </div>
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
                  <Product tag="hot" />
                </div>
                <div className="item">
                  <Product />
                </div>
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
                  <Product />
                </div>
                <div className="item">
                  <Product tag="sale" />
                </div>
                <div className="item">
                  <Product tag="hot" />
                </div>
                <div className="item">
                  <Product />
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
                  <Product />
                </div>
                <div className="item">
                  <Product />
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
                  <Product tag="hot" />
                </div>
                <div className="item">
                  <Product />
                </div>
                <div className="item">
                  <Product />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Listing;
