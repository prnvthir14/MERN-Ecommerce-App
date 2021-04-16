import React from "react";
import "./HomeScreen.css";
import Product from "../components/Product"

const HomeScreen = () => {
  return (
    <div className="homescreen"> homescreen
      <h2 className="homescreen__title">Products</h2>
      
      <div className="homescreen__products">
        <Product/>
        <Product/>
        <Product/>
        <Product/>
        <Product/>
      
      </div>
    </div>
  );
};

export default HomeScreen;
