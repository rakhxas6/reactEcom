import React, { useEffect, useRef, useState } from "react";
import axios from "axios";
import logo from "../../assets/images/logo.svg";
import compareIcon from "../../assets/images/icon-compare.svg";
import wishlistIcon from "../../assets/images/icon-heart.svg";
import cartIcon from "../../assets/images/icon-cart.svg";
import userIcon from "../../assets/images/icon-user.svg";

import SearchIcon from "@mui/icons-material/Search";
import SelectDrop from "../selectDrop/selectDrop";
import Button from "@mui/material/Button";
import { ClickAwayListener } from "@mui/material";

import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import { Person2Outlined } from "@mui/icons-material";
import { FavoriteBorderOutlined } from "@mui/icons-material";
import { SettingsOutlined } from "@mui/icons-material";
import { LogoutOutlined } from "@mui/icons-material";

import Nav from "./nav/nav";
import "./header.css";

const Header = () => {
  const [isOpenDropDown, setIsOpenDropDown] = useState(false);
  const headerRef = useRef();

  const [categories, setCategories] = useState([
    "Milk and Dairies",
    "Wines & Drinks",
    "Clothing & Beauty",
    "Fresh Seafood",
    "Pet Foods & Toy",
    "Fast Food",
    "Baking Material",
    "Vegetables",
    "Fresh Fruit",
    "Bread and Juice",
  ]);

  const countryList = [];

  useEffect(() => {
    getCountry("https://countriesnow.space/api/v0.1/countries");
  }, []);

  const getCountry = async (url) => {
    try {
      await axios.get(url).then((res) => {
        if (res !== null) {
          // console.log(res.data.data);
          res.data.data.map((item, index) => {
            countryList.push(item.country);
          });
        }
      });
    } catch (error) {
      console.log(error.message);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", () => {
      let position = window.pageYOffset;
      if (position > 100) {
        headerRef.current.classList.add("fixed");
      } else {
        headerRef.current.classList.remove("fixed");
      }
    });
  }, []);

  return (
    <>
      <div className="headerWrapper transition" ref={headerRef}>
        <header>
          <div className="container-field">
            <div className="row">
              <div className="col-sm-2">
                <img src={logo} alt="logo" />
              </div>
              {/* header search start here */}

              <div className="col-sm-5 d-flex align-items-center ">
                <div className="headerSearch d-flex align-items-center ml-5">
                  <SelectDrop
                    data={categories}
                    placeholder={"All Categories"}
                    icon={false}
                  />

                  <div className="search">
                    <input type="text" placeholder="Search for items...." />
                    <SearchIcon className="searchIcon cursor" />
                  </div>
                </div>
              </div>
              {/* header search ends here */}

              <div className="col-sm-5 d-flex align-items-center ml-auto">
                <div className=" d-flex align-items-center">
                  {/* <div className="countryWrapper ">
                    <SelectDrop
                      data={countryList}
                      placeholder={"Your Location"}
                      icon={
                        <LocationOnOutlinedIcon
                          style={{
                            opacity: ".5",
                          }}
                        />
                      }
                    />
                  </div> */}

                  <div className="list list-inline mb-0 headerTabs">
                    <li className="list-inline-item">
                      <span>
                        <img src={compareIcon} alt="" />
                        <span className="badge bg-success rounded-circle">
                          3
                        </span>
                        Compare
                      </span>
                    </li>
                    <li className="list-inline-item">
                      <span>
                        <img src={wishlistIcon} alt="" />
                        <span className="badge bg-success rounded-circle">
                          3
                        </span>
                        Wishlist
                      </span>
                    </li>
                    <li className="list-inline-item">
                      <span>
                        <img src={cartIcon} alt="" />
                        <span className="badge bg-success rounded-circle">
                          3
                        </span>
                        Cart
                      </span>
                    </li>
                    <ClickAwayListener
                      onClickAway={() => setIsOpenDropDown(false)}
                    >
                      <li className="list-inline-item">
                        <span
                          onClick={() => setIsOpenDropDown(!isOpenDropDown)}
                        >
                          <img src={userIcon} alt="" />
                          Account
                        </span>

                        {isOpenDropDown !== false && (
                          <ul className="dropdownMenu">
                            <li>
                              <Button className="align-items-center">
                                <Person2Outlined />
                                My Account
                              </Button>
                            </li>
                            <li>
                              <Button>
                                <LocationOnOutlinedIcon />
                                Order Tracking
                              </Button>
                            </li>

                            <li>
                              <Button>
                                <FavoriteBorderOutlined />
                                My Wishlist
                              </Button>
                            </li>
                            <li>
                              <Button>
                                <SettingsOutlined />
                                Setting
                              </Button>
                            </li>
                            <li>
                              <Button>
                                <LogoutOutlined />
                                Sign out
                              </Button>
                            </li>
                          </ul>
                        )}
                      </li>
                    </ClickAwayListener>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </header>
        <Nav />
      </div>

      <div className="afterHeader"></div>
    </>
  );
};

export default Header;
