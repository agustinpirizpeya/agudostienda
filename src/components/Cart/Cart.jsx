import { useState, useEffect, useContext } from "react";
import ItemCount from "../ItemCount/ItemCount";
import DeleteRowIcon from "../../assets/icons/delete-row-icon.svg";
import { CartContext } from "../../context/cartContext";
import { Link } from "react-router-dom";
import "./cart.css";
import DeleteRowWidget from "../DeleteRowWidget/DeleteRowWidget";

export default function Cart() {
  const { cartItems, removeItem } = useContext(CartContext);

  const onDeleteRow = cartItem => {
    removeItem(cartItem);
  };

  const handleSumTotal = () => {
    const reducer = (accumulator, currentValue) =>
      accumulator + currentValue.price;
    const sum = cartItems.reduce(reducer, 0);
    return sum;
  };

  return (
    <div className="cartContainer">
      <h1>Carrito</h1>
      <div className="detailTitleContainer">
        {cartItems.length > 0 ? (
          <>
            <h4>Detalle: </h4>
            {cartItems.map((cartItem) => (
              <div className="cartDetailItemsContainer">
                <div className="cartItemTitle">{cartItem.name}</div>

                <div className="rowRigthContent">
                  {`$${cartItem.price} `}
                  <div onClick={onDeleteRow(cartItem)} className="deleteRowContainer">
                    <DeleteRowWidget icon={DeleteRowIcon} />
                  </div>
                </div>
              </div>
            ))}
            <h4>{`Total: $ ${handleSumTotal()}`}</h4>
          </>
        ) : (
          <h2>El carrito está vacio</h2>
        )}
      </div>
    </div>
  );
}
