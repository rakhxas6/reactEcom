import React, { useState } from "react";
import cat1 from "../../assets/images/category-1.svg";
import cat2 from "../../assets/images/category-2.svg";
import cat3 from "../../assets/images/category-3.svg";
import cat4 from "../../assets/images/category-4.svg";
import cat5 from "../../assets/images/category-5.svg";
import "./Sidebar.css";
import BannerImg from "../../assets/images/banner-1.png"
import { Button, Checkbox, Slider } from "@mui/material";
import FilterAltIcon from "@mui/icons-material/FilterAlt";

const Sidebar = () => {
  const [value, setValue] = useState([200, 500]);

  function valueText(value) {
    return `${value}`;
  }

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const label = { inputProps: { "aria-label": "Checkbox demo" } };
  return (
    <>
      <div className="sidebar">
        <div className="card border-0 shadow">
          <h3>Category</h3>
          <div className="catList">
            <div className="catItem d-flex align-items-center">
              <span className="img">
                <img src={cat1} alt="" width={30} />
              </span>
              <h4 className="mb-0 ml-3 mr-3">Milks & Dairies</h4>
              <span className="d-flex align-items-center rounded-circle justify-content-center ml-auto">
                30
              </span>
            </div>
            <div className="catItem d-flex align-items-center">
              <span className="img">
                <img src={cat2} alt="" width={30} />
              </span>
              <h4 className="mb-0 ml-3 mr-3">Clothing</h4>
              <span className="d-flex align-items-center rounded-circle justify-content-center ml-auto">
                30
              </span>
            </div>
            <div className="catItem d-flex align-items-center">
              <span className="img">
                <img src={cat3} alt="" width={30} />
              </span>
              <h4 className="mb-0 ml-3 mr-3">Pet Foods</h4>
              <span className="d-flex align-items-center rounded-circle justify-content-center ml-auto">
                30
              </span>
            </div>
            <div className="catItem d-flex align-items-center">
              <span className="img">
                <img src={cat4} alt="" width={30} />
              </span>
              <h4 className="mb-0 ml-3 mr-3">Baking Material</h4>
              <span className="d-flex align-items-center rounded-circle justify-content-center ml-auto">
                30
              </span>
            </div>
            <div className="catItem d-flex align-items-center">
              <span className="img">
                <img src={cat5} alt="" width={30} />
              </span>
              <h4 className="mb-0 ml-3 mr-3">Fresh Fruit</h4>
              <span className="d-flex align-items-center rounded-circle justify-content-center ml-auto">
                30
              </span>
            </div>
          </div>
        </div>

        <div className="card border-0 shadow ">
          <h3 className="">Fill By Price</h3>
          <Slider
            min={0}
            step={10}
            max={1000}
            getAriaLabel={() => "Price range"}
            value={value}
            onChange={handleChange}
            valueLabelDisplay="auto"
            getAriaValueText={valueText}
            color="success"
          />

          <div className="d-flex pt-2 mb-3 priceRange">
            <span>
              From: <strong className="text-success">${value[0]}</strong>
            </span>
            <span className="ml-auto">
              To: <strong className="text-success">${value[1]}</strong>
            </span>
          </div>

          <div className="filters">
            <h5>Color</h5>
            <ul className="mb-0">
              <li>
                <Checkbox {...label} color="success" />
                Red (56)
              </li>
              <li>
                <Checkbox {...label} color="success" />
                Blue (60)
              </li>
              <li>
                <Checkbox {...label} color="success" />
                Black (25)
              </li>
            </ul>
          </div>
          <div className="filters ">
            <h5>Item Condition</h5>
            <ul className="mb-0">
              <li>
                <Checkbox {...label} color="success" />
                New (56)
              </li>
              <li>
                <Checkbox {...label} color="success" />
                Refurbished (60)
              </li>
              <li>
                <Checkbox {...label} color="success" />
                Used (25)
              </li>
            </ul>
          </div>
          <div className="d-fle">
            <Button className="btn btn-g">
              <FilterAltIcon />
              Filter
            </Button>
                  </div>
                  
              </div>
              
              <img src={BannerImg} alt=""  className="w-100"/>
      </div>
    </>
  );
};

export default Sidebar;
