import { Link } from "react-router-dom";
import ButtonStyled from "../Button/Button";
import "./item.css";

export default function Item(props) {
  return (
    <div className="itemContainer">
      <div className="imgContainer">
        <img src={props.productItem.image}></img>
      </div>
      <div className="itemInfoContainer">
        <div className="itemTitle">
          <h4>{props.productItem.name}</h4>
        </div>
        <h3>${props.productItem.price}</h3>
        <Link to={`/item/${props.productItem.id}`}>
          {" "}
          <ButtonStyled
            text="Detalle"
          />
        </Link>
      </div>
    </div>
  );
}
