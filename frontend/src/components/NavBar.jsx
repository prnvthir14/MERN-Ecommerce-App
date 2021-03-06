//need this since we are using jsx//
import React from "react";
import { Link } from "react-router-dom";
import "./NavBar.css";
import logo from "../images/uru_logo.jpg";
import { useSelector } from "react-redux";

const NavBar = ({ click }) => {
  //get the cart from state
  const cart = useSelector(state => state.cart);
  const { cartItems } = cart;

  const getCartCount = () => {
    return cartItems.reduce((qty, item) => qty + Number(item.qty), 0);
  };

  return (
    <nav className="navbar">
      <Link to="/" className="navbar__logo">
        <img src={logo} alt="Logo" />
      </Link>

      <ul className="navbar__links">
        <li>
          <Link to="/cart" className="cart__link">
            <i className="fas fa-shopping-cart"></i>
            <span>
              Cart
              <span className="cartlogo__badge">{getCartCount()}</span>
            </span>
          </Link>
        </li>

        <li>
          <Link to="/">Shop</Link>
        </li>
      </ul>

      <div className="hamburger__menu" onClick={click}>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </nav>
  );
};

export default NavBar;
