import {
  DeleteOutlineOutlined,
  KeyboardArrowDown,
  KeyboardArrowUp,
} from "@mui/icons-material";
import { Rating } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import "./Cart.css";
const Cart = () => {
  const [number, setNumber] = React.useState(1);
  const plus = () => {
    setNumber(number + 1);
  };
  const minus = () => {
    if (number !== 1) {
      setNumber(number - 1);
    }
  };
  return (
    <>
      <div className="breadCrumbWrapper mb-5 ">
        <div className="container-field">
          <ul className="breadcrumb breadcrumb2 mb-0">
            <li>
              <Link to={"/"}>Home</Link>
            </li>
            <li>Shop</li>
            <li>Cart</li>
          </ul>
        </div>
      </div>

      <section className="cartSection mb-5">
        <div className="container-field">
          <div className="row">
            <div className="col-md-7">
              <div className="d-flex align-items-center w-100">
                <div className="left">
                  <h1 className="hd mb-0">Your Cart</h1>
                  <p>
                    There are <span className="text-g">3</span> products in your
                    cart
                  </p>
                </div>

                <span className="ml-auto d-flex align-items-center clearCart cursor ">
                  <DeleteOutlineOutlined /> Clear Cart
                </span>
              </div>

              <div className="cartWrapper mt-4">
                <div className="tableResponsive">
                  <table className="table">
                    <thead>
                      <tr>
                        <th>Product</th>
                        <th>Unit Price</th>
                        <th>Quantity</th>
                        <th>Subtotal</th>
                        <th>Remove</th>
                      </tr>
                    </thead>

                    <tbody>
                      <tr>
                        <td>
                          <div className="d-flex align-items-center ">
                            <div className="img">
                              <img
                                src="https://wp.alithemes.com/html/nest/demo/assets/imgs/shop/product-1-1.jpg"
                                alt=""
                                className="w-100"
                              />
                            </div>
                            <div className="info pl-4">
                              <Link to={"/product/details"}>
                                <h4 className="">
                                  Field Roast Chao Cheese Creamy Original
                                </h4>
                              </Link>
                              <Rating
                                name="half-rating-read"
                                value={4.5}
                                precision={0.5}
                                readOnly
                              />
                              <span className="text-light">(4.5)</span>
                            </div>
                          </div>
                        </td>

                        <td>
                          <span>$2.51</span>
                        </td>
                        <td>
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
                          </div>
                        </td>
                        <td>
                          <span className="text-g font-weight-bold">$2.51</span>
                        </td>
                        <td>
                          <span className="cursor">
                            <DeleteOutlineOutlined />
                          </span>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
            <div className="col-md-5">
              <div className="card p-4">
                <div className="d-flex align-items-center mb-4">
                  <h5 className="mb-0 text-light">SubTotal</h5>
                  <h3 className="ml-auto mb-0 font-weight-bold">
                    <span>$12.31</span>
                  </h3>
                </div>
                <div className="d-flex align-items-center mb-4">
                  <h5 className="mb-0 text-light">Shipping</h5>
                  <h3 className="ml-auto mb-0 font-weight-bold">
                    <span>Free</span>
                  </h3>
                </div>
                <div className="d-flex align-items-center mb-4">
                  <h5 className="mb-0 text-light">SubTotal</h5>
                  <h3 className="ml-auto mb-0 font-weight-bold">
                    <span>$12.31</span>
                  </h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
export default Cart;
