import React, { useState, useEffect } from "react";
import Button from "../Button/Button";
import "./ItemCount.css";
import subtractIcon from "../../assets/icons/subtract-icon.svg";
import addIcon from "../../assets/icons/add-icon.svg";
import { Link } from "@material-ui/core";

export default function ItemCount({ stock, initial, onAdd , items }) {
  const [stockItem, setStockItem] = useState(stock);

  const addMoreItems = () => {
    if (stockItem > 1) {
      setStockItem(stockItem - 1);
      onAdd(items +1);
    }
  };
  const removeItems = () => {
    if (stockItem < 5) {
      setStockItem(stockItem + 1);
      onAdd(items -1);
    }
  };

  return (
    <div className="itemCountContainer">
      <div className="itemCountContent">
        <h4>{"Camisa negra"}</h4>
        <div className="countContent">
          <div className="counterContainer">
            <img
              className="cartIcon"
              src={subtractIcon}
              onClick={removeItems}
            />
            <div className="labelContainer">
              <label> {items} </label>
            </div>
            <img className="cartIcon" src={addIcon} onClick={addMoreItems} />
          </div>
        </div>
      </div>
    </div>
  );
}
