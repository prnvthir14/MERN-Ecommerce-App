import { React, useEffect } from "react";
import "./CartScreen.css";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { addToCart, removeFromCart } from "../redux/actions/cartActions";

//components
import CartItem from "../components/CartItem";

const CartScreen = () => {
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart);

  const qtyChangeHandler = (id, qty) => {
    dispatch(addToCart(id, qty));
  };

  const emptyFromCartHandler = (x) => {
    dispatch(removeFromCart(x));
  };

  //in both of these reduce functions, we do the followin:
  //for each element (item) in the cartItems array do the following
  //getCartCount - current cart quantity (item.qty) + existing previous qty
  const getCartCount = () => {
    return cartItems.reduce((qty, item) => Number(item.qty) + qty, 0);
  };

  const getCartSubTotal = () => {
    return cartItems.reduce((price, item) => (item.price * item.qty)  + price, 0);
  };

  const { cartItems } = cart;

  return (
    <div className="cartscreen">
      <div className="cartscreen__left">
        <h2>Shopping Cart</h2>
        {cartItems.length === 0 ? (
          <div>
            CART IS EMPTY
            <Link to="/">GO BACK TO SHOP</Link>
          </div>
        ) : (
          cartItems.map((item) => (
            <CartItem
              key={item.product}
              item={item}
              qtyChangeHandler={qtyChangeHandler}
              emptyFromCartHandler={emptyFromCartHandler}
            />
          ))
        )}
      </div>
      <div className="cartscreen__right">
        <div className="cartscreen__info">
          <p>Subtotal ({getCartCount()}) items</p>
          <p>${getCartSubTotal()}</p>
        </div>
        <div>
          <button>Proceed to Checkout</button>
        </div>
      </div>
    </div>
  );
};

export default CartScreen;
