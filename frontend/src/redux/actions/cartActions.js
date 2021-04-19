import * as actionTypes from "../actions/cartConstants";
import axios from "axios";

export const addToCart = (id, qty) => async (dispatch, getState) => {
  const { data } = await axios.get(`/api/products/${id}`);

  dispatch({
    type: actionTypes.Add_TO_CART,
    payload: {
      product: data._id,
      name: data.name,
      imageUrl: data.imageUrl,
      price: data.price,
      countInStock: data.countInStock,
      qty,
    },
  });

  //update localStorage
  //getState -redux thunk method to get access to current state values

  localStorage.setItem("cart", JSON.stringify(getState().cart.cartItems));
};

export const removeFromCart = (id) => (dispatch, getState) => {
  //dispatch this info to initiate this action type----
  dispatch({
    type: actionTypes.REMOVE_FROM_CART,
    payload: id,
  });

  //update localStorage with current cart state
  localStorage.setItem("cart", JSON.stringify(getState().cart.cartItems));
};
