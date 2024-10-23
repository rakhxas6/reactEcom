import { KeyboardArrowDown, KeyboardArrowUp } from "@mui/icons-material";
import React from "react";

const QuantityBox = () => {
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
    <div className="addCartSection pt-0 pb-4 d-flex align-items-center ">
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
  );
};

export default QuantityBox;
