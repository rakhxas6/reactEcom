import React from "react";
import { GridView, HeadphonesOutlined } from "@mui/icons-material";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";
import "./nav.css";

const Nav = () => {
  // const [isOpenDropDown, setIsOpenDropDown] = useState(false);
  return (
    <div className="nav d-flex align-items-center">
      <div className="container-field  ">
        <div className="row d-flex align-items-center position-relative">
          <div className="col-sm-2 part1 d-flex align-items-center">
            <Button className="bg-green text-white  catTab">
              <GridView /> &nbsp; Browse All Categories
              <KeyboardArrowDownIcon />
            </Button>
          </div>
          <div className="col-sm-8   part2 position-static">
            <nav>
              <ul className="list list-line mb-0 ">
                <li className="list-inline-item">
                  <Button>
                    <Link>Home</Link>
                  </Button>
                </li>
                <li className="list-inline-item">
                  <Button>
                    <Link>About</Link>
                  </Button>
                </li>
                <li className="list-inline-item">
                  <Button>
                    <Link>Shop</Link>
                  </Button>
                </li>
                <li className="list-inline-item">
                  <Button>
                    <Link>Vendors</Link>
                  </Button>
                  <div className="dropdown_menu">
                    <ul>
                      <li>
                        <Button>
                          <Link to="/about">About Us</Link>
                        </Button>
                      </li>
                      <li>
                        <Button>
                          <Link to="/about">Contact</Link>
                        </Button>
                      </li>
                      <li>
                        <Button>
                          <Link to="/about">My Account</Link>
                        </Button>
                      </li>
                      <li>
                        <Button>
                          <Link to="/about">Login</Link>
                        </Button>
                      </li>
                      <li>
                        <Button>
                          <Link to="/about">Register</Link>
                        </Button>
                      </li>
                      <li>
                        <Button>
                          <Link to="/about">Forget Password</Link>
                        </Button>
                      </li>
                      <li>
                        <Button>
                          <Link to="/about">Reset Password</Link>
                        </Button>
                      </li>
                      <li>
                        <Button>
                          <Link to="/about">Privacy Policy</Link>
                        </Button>
                      </li>
                      <li>
                        <Button>
                          <Link to="/about">Terms of Service</Link>
                        </Button>
                      </li>
                      <li>
                        <Button>
                          <Link to="/about">404 Page</Link>
                        </Button>
                      </li>
                    </ul>
                  </div>
                </li>
                <li className="list-inline-item position-static">
                  <Button>
                    <Link>
                      Mega Menu <KeyboardArrowDownIcon />
                    </Link>
                  </Button>
                  <div className="dropdown_menu megaMenu w-100">
                    <div className="row">
                      <div className="col">
                        <h4 className="text-g">Fruit & Vegetables</h4>
                        <ul className="mt-4 mb-0">
                          <li>
                            <Link to="">Meat & Poultry</Link>
                          </li>
                          <li>
                            <Link to="">Fresh Vegetables</Link>
                          </li>
                          <li>
                            <Link to="">Herbs & Seasonings</Link>
                          </li>
                          <li>
                            <Link to="">Cuts & Sprouts</Link>
                          </li>
                          <li>
                            <Link to="">Exotic Fruits & Veggies</Link>
                          </li>
                          <li>
                            <Link to="">Packaged Produced</Link>
                          </li>
                        </ul>
                      </div>
                      <div className="col">
                        <h4 className="text-g">Breakfast & Dairy</h4>
                        <ul className="mt-4 mb-0">
                          <li>
                            <Link to="">Meat & Poultry</Link>
                          </li>
                          <li>
                            <Link to="">Fresh Vegetables</Link>
                          </li>
                          <li>
                            <Link to="">Herbs & Seasonings</Link>
                          </li>
                          <li>
                            <Link to="">Cuts & Sprouts</Link>
                          </li>
                          <li>
                            <Link to="">Exotic Fruits & Veggies</Link>
                          </li>
                          <li>
                            <Link to="">Packaged Produced</Link>
                          </li>
                        </ul>
                      </div>
                      <div className="col">
                        <h4 className="text-g">Meat & Seafood</h4>
                        <ul className="mt-4 mb-0">
                          <li>
                            <Link to="">Meat & Poultry</Link>
                          </li>
                          <li>
                            <Link to="">Fresh Vegetables</Link>
                          </li>
                          <li>
                            <Link to="">Herbs & Seasonings</Link>
                          </li>
                          <li>
                            <Link to="">Cuts & Sprouts</Link>
                          </li>
                          <li>
                            <Link to="">Exotic Fruits & Veggies</Link>
                          </li>
                          <li>
                            <Link to="">Packaged Produced</Link>
                          </li>
                        </ul>
                      </div>
                      <div className="col">
                        <img
                          src="https://wp.alithemes.com/html/nest/demo/assets/imgs/banner/banner-menu.png"
                          className="w-100"
                          alt=""
                        />
                      </div>
                    </div>
                  </div>
                </li>
                <li className="list-inline-item">
                  <Button>
                    <Link>Blog</Link>
                  </Button>
                </li>

                <li className="list-inline-item">
                  <Button>
                    <Link>
                      Pages <KeyboardArrowDownIcon />
                    </Link>
                  </Button>

                  <div className="dropdown_menu">
                    <ul className="mb-0">
                      <li>
                        <Button>
                          <Link to="/about">About Us</Link>
                        </Button>
                      </li>
                      <li>
                        <Button>
                          <Link to="/about">Contact</Link>
                        </Button>
                      </li>
                      <li>
                        <Button>
                          <Link to="/about">My Account</Link>
                        </Button>
                      </li>
                      <li>
                        <Button>
                          <Link to="/about">Login</Link>
                        </Button>
                      </li>
                      <li>
                        <Button>
                          <Link to="/about">Register</Link>
                        </Button>
                      </li>
                      <li>
                        <Button>
                          <Link to="/about">Forget Password</Link>
                        </Button>
                      </li>
                      <li>
                        <Button>
                          <Link to="/about">Reset Password</Link>
                        </Button>
                      </li>
                      <li>
                        <Button>
                          <Link to="/about">Privacy Policy</Link>
                        </Button>
                      </li>
                      <li>
                        <Button>
                          <Link to="/about">Terms of Service</Link>
                        </Button>
                      </li>
                      <li>
                        <Button>
                          <Link to="/about">404 Page</Link>
                        </Button>
                      </li>
                    </ul>
                  </div>
                </li>

                <li className="list-inline-item">
                  <Button>
                    <Link>Contact</Link>
                  </Button>
                </li>
              </ul>
            </nav>
          </div>
          <div className="col-sm-2 part3  d-flex align-items-center ">
            <div className="phNo d-flex align-items-center ml-auto ">
              <span className="flex align-items-center">
                <HeadphonesOutlined />
              </span>
              <div className="info ml-3 mt-3">
                <h3 className="text-g mb-0">9886-675</h3>
                <p>24/7 Support Center</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Nav;
