import React from "react";
import "./ProductScreen.css";

const ProductScreen = () => {
  return (
    <div className="productscreen">
      <div className="productscreen__left">
        <div className="left__image">
          <img
            src="https://images.unsplash.com/photo-1518444065439-e933c06ce9cd?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1267&q=80"
            alt="product name"
          />
        </div>
        <div className="left__info">
          <p className="left__name">PRODUCT 1</p>
          <p>PRICE:$$$</p>
          <p>Description:TEXT ABOUT Description</p>
        </div>
      </div>

      <div className="productscreen__right">
        <div className="right__info">
          <p>
            Price: <span>$499.99</span>
          </p>
          <p>
            Status: <span>IN Stock</span>
          </p>
          <p>
            Qty:{" "}
            <select>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
            </select>
          </p>
          <p>
            <button type="button">Add to cart</button>
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProductScreen;
