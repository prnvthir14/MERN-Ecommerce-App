import * as actionTypes from "../constants/cartConstants";

// can now access all action types from the cartConstants folder
// const ADD_TO_CART = actionTypes.ADD_TO_CART

//export cartReducer, function with parameteres of initial state and the
// action that will update the state
export const cartReducer = (state = { cartItems: [] }, action) => {
  
  //create a switch statement based on the action received..
  //the action received will contain a payload of data 
  //which will use to conduct the state update as needed
  switch (action.type) {
    //default case for if there is no change to cartItems/action is not recognised
    default:
      return state;
  }
};
