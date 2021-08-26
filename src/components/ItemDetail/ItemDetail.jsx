import { useState, useEffect } from "react";
import ItemCount from "../ItemCount/ItemCount";
import Button from "../Button/Button";
import { Link } from "react-router-dom";
import "./itemDetail.css";

export default function ItemDetail(props) {
  const [items, setItems] = useState(0);

  useEffect(() => {
    showFinishPurchase();
    console.log(showFinishPurchase());
  }, [items]);

  const showFinishPurchase = () => { return items > 0 } 

  useEffect(() => {}, [items]);

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
           <Link to="/cart"> Terminar mi compra </Link>
        )}
      </div>
    </div>
  );
}
