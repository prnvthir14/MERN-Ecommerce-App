import React from "react";
import "./CartItem.css";
import { Link } from "react-router-dom";

const CartItem = ({ item }) => {
  return (
    <div className="cartitem">
      <div className="cartitem__image">
        <img src={item.imageUrl} alt={item.name} />
      </div>
      <Link className="cartitem__name" to={`/product/${item.product}`}>
        <p>{item.name}</p>
      </Link>
      <p className="cartitem__price">{item.price}</p>
      <select
        className="cartitem__select"
        value={item.qty}
        onChange={() => {
          console.log("HI");
        }}
      >
        {[...Array(item.countInStock).keys()].map((x) => (
          <option key={x + 1} value={x + 1}>
            {x + 1}
          </option>
        ))}
      </select>

      <button className="cartitem__deteleBtn">
        <i className="fas fa-trash"></i>
      </button>
    </div>
  );
};

export default CartItem;
