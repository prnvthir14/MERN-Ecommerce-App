import * as actionTypes from "../constants/cartConstants";

// can now access all action types from the cartConstants folder
// const ADD_TO_CART = actionTypes.ADD_TO_CART

//export cartReducer, function with parameteres of initial state and the
// action that will update the state
export const cartReducer = (state = { cartItems: [] }, action) => {
  //create a switch statement based on the action received..(action.type)
  //the action received will contain a payload of data
  //which will use to conduct the state update as needed
  switch (action.type) {

    //we have 3 actions defined:
    // ADD_TO_CART
    // REMOVE_TO_CART
    // CART_RESET
    ///////////////////////////////////////////////////////////////////////////////////////////////////////////#1
    case actionTypes.ADD_TO_CART:
      //action of adding item to cart;
      console.log("cartREDUCER.js action.payload", action.payload);
      //get item from payload
      const item = action.payload;

      //now want to check if item is in the cart:
      const existItem = state.cartItems.find((x) => {
        //go through each item in state.cartItems (x)
        //x is an object so we want to check x.product against
        //what was received in the action.payload i.e. item;

        //don't really need this
        if (x.product === item.product) {
          return true;
        } else {
          return false;
        }
      });
      console.log(existItem, "should be all items in current cart");
      if (existItem) {
        return {
          //spread current state
          ...state,
          //add to the state based on following logic:
          // x is each element in the cart (current state)
          cartItems: state.cartItems.map((x) => x.product === existItem.product ? item : x);
        }
      } else {
        //add to cart
        return{
          //spread current state, add new item to  state.cartItems array
          ...state,
          cartItems:[...state.cartItems, item]
        }
      }
    
    ///////////////////////////////////////////////////////////////////////////////////////////////////////////#2  
    case action.REMOVE_TO_CART:
      //loosk like we can send back specific things in the payload depending on each action
      //in this case, payload will contain just the id of the product to be removed
      return {
        ...state, 
        cartItems: state.cartItems.filter((x)=> x.product !== action.payload)
      }

      
    

      //default case for if there is no change to cartItems/action is not recognised
    default:
      return state;
 
 
 
  }
};
