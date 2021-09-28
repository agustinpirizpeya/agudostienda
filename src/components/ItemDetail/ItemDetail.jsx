import { useState, useEffect, useContext } from "react";
import ItemCount from "../ItemCount/ItemCount";
import { CartContext } from "../../context/cartContext";
import { useHistory } from "react-router-dom";
import "./itemDetail.css";
import ButtonStyled from "../Button/Button";
import { isEmptyObject } from "../../utils/object";
import Loader from "../Loader/Loader";

export default function ItemDetail(props) {
  const { addItem } = useContext(CartContext);
  const [items, setItems] = useState(0);
  const [cartItem, setCartItem] = useState({});
  const [showAddCart, setShowAddCart] = useState({});

  const history = useHistory();

  useEffect(() => {
    setShowAddCart(items > 0);
  }, [items]);

  useEffect(() => {
    onAddItem();
  }, [cartItem]);

  const onAddItem = () => {
    addItem(cartItem);
  };

  const onAddCart = async () => {
    await setCartItem({
      ...props.itemDetail,
      quantity: items,
      price: items * props.itemDetail.price,
    });
    history.push(`/`);
  };

  return (
    <div className="detailContainer">
      {isEmptyObject(props.itemDetail) ? (
        <Loader />
      ) : (
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
            <div className="buttonDetail">
              <ButtonStyled
                onClick={onAddCart}
                text="Agregar a carrito"
                disabled={!showAddCart}
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
