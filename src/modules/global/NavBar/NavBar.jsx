import "./navBar.css";
import { Link } from "react-router-dom";
import { React, useContext } from "react";
import logo from "../../../assets/icons/logo-market.svg";
import { CartContext } from "../../../context/cartContext";
import logoCart from "../../../assets/icons/cart-shopping.svg";
import CardWidget from "../../../components/CardWidget/CardWidget";
import CartWidget from "../../../components/CartWidget/CartWidget";

function NavBar() {
  const categories = [
    {
      id: "action",
    },
    {
      id: "thriller",
    },
    {
      id: "suspense",
    },
  ];

  const { cartItems } = useContext(CartContext);

  return (
    <div>
      <div className="navbar">
        <div className="logo">
          <Link to="/">
            <CardWidget icon={logo} />
          </Link>
        </div>
        <div className="topnav">
          {/* <a className='active'></a> */}
          <Link className="active" to="/">
            Home
          </Link>
          <div class="dropdown">
            <button class="dropbtn">
              Categories
              <i class="fa fa-caret-down"></i>
            </button>
            <div class="dropdown-content">
              {categories.map((category) => (
                <Link to={`/category/${category.id}`}>{category.id}</Link>
              ))}
            </div>
          </div>
        </div>
        <div className="cartIconContainer icon-button">
          <Link to="/cart">
            <CartWidget icon={logoCart} />
          </Link>
          {cartItems.length > 0 && (
            <span class="icon-button__badge">{cartItems.length}</span>
          )}
        </div>
      </div>
    </div>
  );
}

export default NavBar;
