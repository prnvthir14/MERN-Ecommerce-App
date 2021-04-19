import { createStore, combineReducers, applyMiddleware } from "redux";

import thunk from "redux-thunk";

import { composeWithDevTools } from "redux-devtools-extension";

//Reducers
import {cartReducer} from './reducers/cartReducers' 


const reducer = combineReducers({
  cart: cartReducer
});

//thunk - make asynch requests with redux
const middleware = [thunk];

const store = createStore(
  reducer,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
