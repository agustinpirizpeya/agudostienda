import { useState, useEffect, useContext } from "react";
import ItemCount from "../ItemCount/ItemCount";
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
    setCartItem({
      ...props.itemDetail,
      quantity: items,
    });
    addItem(cartItem);
  };

  return (
    <div className="detailContainer">
      <div className="itemDetailInfoContainer">
        <div className="imgDetailContainer">
          <img src={props.itemDetail.image}></img>
        </div>
        <div className="detailContainerRigth">
          <div className="itemDetailTitle">
            <h4>{props.itemDetail.name}</h4>
          </div>
          <h4>{props.itemDetail.description}</h4>
          <h3>${props.itemDetail.price}</h3>
          <div className="detailCount">
            <ItemCount stock={5} initial={0} onAdd={setItems} items={items} />
          </div>
          {showFinishPurchase && (
            <div className="buttonDetail">
              <Link to="/cart">
                {" "}
                <button onClick={onAddCart}>Terminar mi compra</button>{" "}
              </Link>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
