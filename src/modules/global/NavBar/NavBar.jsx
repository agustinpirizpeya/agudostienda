import "./navBar.css";
import { Link } from "react-router-dom";
import React from "react";
import logo from "../../../assets/icons/logo-market.svg";
import CardWidget from "../../../components/CartWidget/CardWidget";

function NavBar() {
  const categories = [
    {
      id: "Human",
    },
    {
      id: "Alien",
    },
  ];
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
      </div>
    </div>
  );
}

export default NavBar;
