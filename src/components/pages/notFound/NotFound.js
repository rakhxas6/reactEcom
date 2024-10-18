import React from "react";
import Image404 from "../../../assets/images/page-404.png";
import "./NotFound.css";
import { Button } from "@mui/material";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <>
      <div className="notFound">
        <div className="container-field">
          <div className="box">
            <img src={Image404} alt="" />
            <br />
            <h1 className="mb-0">Page Not Found</h1>
            <br />
            <p className="">
              Sorry, the page you are looking for does not exist.
            </p>

            <div className="d-flex align-items-center justify-content-center">
              <Button className="buttons">
                <Link to="/"> Back To Home Page</Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default NotFound;
