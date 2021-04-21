import * as actionTypes from "../constants/productConstants";

export const getProductsReducer = (state = { products: [] }, action) => {
  switch (action.type) {
    case actionTypes.GET_PRODUCTS_REQUESTS:
      return {
        loading: true,

      };

    case actionTypes.GET_PRODUCTS_SUCCESS:
      return {
        loading: false,
        products: action.payload,
      };

    case actionTypes.GET_PRODUCTS_FAIL:
      return {
        loading: false,
        error: action.payload,
      };

    default:
      return state;
  }
};



// //see individual product details; when some clicks the link to see the individual product
// export const getProductDetailsReducer = (state = { product: {} }, action) => {
//   switch (action.type) {
//     case actionTypes.GET_PRODUCT_DETAILS_REQUESTS:
//       return {
//         loading: true,
//       };

//     case actionTypes.GET_PRODUCT_DETAILS_SUCCESS:
//       return {
//         loading: false,
//         product: action.payload,
//       };

//     case actionTypes.GET_PRODUCTS_FAIL:
//       return {
//         loading: false,
//         error: action.payload,
//       };

//     case actionTypes.GET_PRODUCT_DETAILS_RESET:
//       return {
//         product: {},
//       };

//     default:
//       return state;
//   }
// };

export const getProductDetailsReducer = (state = { product: {} }, action) => {
  switch (action.type) {
    case actionTypes.GET_PRODUCT_DETAILS_REQUEST:
      return {
        loading: true,
      };
    case actionTypes.GET_PRODUCT_DETAILS_SUCCESS:
      return {
        loading: false,
        product: action.payload,
      };
    case actionTypes.GET_PRODUCT_DETAILS_FAIL:
      return {
        loading: false,
        error: action.payload,
      };
    case actionTypes.GET_PRODUCT_DETAILS_RESET:
      return {
        product: {},
      };
    default:
      return state;
  }
};