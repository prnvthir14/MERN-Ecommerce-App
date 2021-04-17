import React from "react";
import "./CartItem.css";
import { Link } from "react-router-dom";

const CartItem = ({ show, click }) => {
  return (
    <div className="cartitem">
      <div className="cartitem__image">
        <img
          src="https://images.unsplash.com/photo-1606813907291-d86efa9b94db?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1352&q=80"
          alt="product name"
        />
      </div>
      <Link className="classitem__name" to={`/product/${111}`}>
        <p>product1</p>
      </Link>
      <p className="cartitem__price">$4999.99</p>
      <select className="cartitem__select">
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
        <option value="4">4</option>
      </select>

      <button className="cartitem__deteleBtn">
        <i className="fas fa-trash"></i>
      </button>
    </div>
  );
};

export default CartItem;
