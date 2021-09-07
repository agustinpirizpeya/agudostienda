import { useState, useEffect, useContext } from "react";
import ItemCount from "../ItemCount/ItemCount";
import Button from "../Button/Button";
import { CartContext } from "../../context/cartContext";
import { Link } from "react-router-dom";
import "./itemDetail.css";

export default function ItemDetail(props) {
  const { addItem } = useContext(CartContext);
  const [items, setItems] = useState(0);
  const [cartItem, setCartItem] = useState({});

  useEffect(() => {
    showFinishPurchase();
  }, [items]);

  const showFinishPurchase = () => {
    return items > 0;
  };

  const onAddCart = () => {
    setCartItem(
      {
        ...props.itemDetail,
        quantity: items,
      }
    );
    addItem(cartItem);
  }

  return (
    <div className="detailContainer">
      <div className="imgDetailContainer">
        <img src={props.itemDetail.image}></img>
      </div>
      <div className="itemDetailInfoContainer">
        <div className="itemDetailTitle">
          <h4>{props.itemDetail.name}</h4>
        </div>
        <h4>{props.itemDetail.species}</h4>
        <h3>{props.itemDetail.created}</h3>
        <ItemCount stock={5} initial={0} onAdd={setItems} items={items} />
        {showFinishPurchase && (
          <Link to="/cart">
            {" "}
            <button
              onClick={onAddCart}
            >
              Terminar mi compra
            </button>{" "}
          </Link>
        )}
      </div>
    </div>
  );
}
