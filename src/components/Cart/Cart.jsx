import { useContext, useState } from "react";
import { collection, addDoc, Timestamp } from "firebase/firestore";
import DeleteRowIcon from "../../assets/icons/delete-row-icon.svg";
import { CartContext } from "../../context/cartContext";
import { Link } from "react-router-dom";
import { getData } from "../../firebase";
import "./cart.css";
import DeleteRowWidget from "../DeleteRowWidget/DeleteRowWidget";
import { useEffect } from "react";
import ModalStyled from "../Modal/Modal";

export default function Cart() {
  const { cartItems, removeItem, clear } = useContext(CartContext);
  const [userInfo, setUserInfo] = useState({});
  const [cartId, setCartId] = useState();

  const onDeleteRow = (cartItem) => {
    removeItem(cartItem);
  };

  const handleSumTotal = () => {
    const reducer = (accumulator, currentValue) =>
      accumulator + currentValue.price;
    const sum = cartItems.reduce(reducer, 0);
    return sum;
  };

  const handleBuy = async () => {
    const orderCollection = await addDoc(collection(getData(), "orders"), {
      buyer: userInfo,
      items: cartItems,
      date: Timestamp.fromDate(new Date()),
      total: handleSumTotal(),
    });
    if (orderCollection.id) {
      setCartId(orderCollection.id);
    }
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
                <div className="cartItemTitle">
                  {cartItem.name} x{cartItem.quantity}
                </div>

                <div className="rowRigthContent">
                  {`$${cartItem.price} `}
                  <div className="deleteRowContainer">
                    <DeleteRowWidget
                      onClick={onDeleteRow(cartItem)}
                      icon={DeleteRowIcon}
                    />
                  </div>
                </div>
              </div>
            ))}
            <h4>{`Total: $ ${handleSumTotal()}`}</h4>
            <ModalStyled
              formFirstName="Nombre"
              formLastName="Apellido"
              formEmail="Email"
              textPrimaryButton="Finalizar compra"
              modalPrimaryTitle="Completa tus datos"
              textSecondaryButton="Confirmar"
              textTerciaryButton="Listo"
              modalSecondaryTitle="¡Compra Confirmada!"
              modalSecondarySubtitle="Recibimos tu pedido correctamente, tu numero de referencia es: "
              cartId={cartId}
              cartForm={userInfo}
              sendOrder={handleBuy}
              onClearCart={clear}
              onFormChange={setUserInfo}
            ></ModalStyled>
          </>
        ) : (
          <h2>El carrito está vacio</h2>
        )}
      </div>
    </div>
  );
}
