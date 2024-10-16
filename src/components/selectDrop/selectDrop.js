import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import { ClickAwayListener } from "@mui/material";
import React, { useState } from "react";
import "./selectDrop.css";

const SelectDrop = ({ data, placeholder, icon }) => {
  const [isOpenSelect, setIsOpenSelect] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [selectedItem, setSelectedItem] = useState(placeholder);

  const [listData, setListData] = useState(data);
  const [listData2, setListData2] = useState(data);

  const openSelect = () => {
    setIsOpenSelect(!isOpenSelect);
  };

  const closeSelect = (i, name) => {
    setSelectedIndex(i);
    setSelectedItem(name);
    setIsOpenSelect(false);
  };

  const filterList = (e) => {
    const keyword = e.target.value.toLowerCase();
    const list = listData2.filter((item) => {
      return item.toLowerCase().includes(keyword);
    });
    const list2 = list.filter((item, index) => list.indexOf(item) === index);

    // console.log(list);
    setListData(list2);
  };

  return (
    <ClickAwayListener onClickAway={() => setIsOpenSelect(false)}>
      <div className="selectDropWrapper cursor position-relative">
        {icon}
        <span className="openSelect" onClick={openSelect}>
          {selectedItem.length > 14
            ? selectedItem.substr(0, 14) + "..."
            : selectedItem}
          <KeyboardArrowDownIcon className="arrow" />
        </span>
        {isOpenSelect && (
          <div className="selectDrop">
            <div className="searchField">
              <input
                type="text"
                placeholder="Search here..."
                onChange={filterList}
              />
            </div>
            <ul className="searchResults">
              {listData.map((category, i) => (
                <li
                  key={i}
                  onClick={() => closeSelect(i, category)}
                  className={`${selectedIndex === i ? "active" : ""}`}
                >
                  {category}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </ClickAwayListener>
  );
};

export default SelectDrop;
