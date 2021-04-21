import { React, useEffect, useState } from "react";
import "./ProductScreen.css";

import { useDispatch, useSelector } from "react-redux";

import { getProductDetails } from "../redux/actions/productActions";
import { addToCart } from "../redux/actions/cartActions";

const ProductScreen = ({ match, history }) => {

  // console.log('herrrrrrrrrrrrrrrrreeeeeeeeeee1')
  const [qty, setQty] = useState(1);
  const dispatch = useDispatch();

  const productDetails = useSelector((state) => {
    console.log('state', state);
    return state.getProductDetails;
  });

  // console.log("productDetails - jsx productscreen", productDetails);

  const { product, loading, error } = productDetails;

  console.log('match.params.id herrrrrrrrrrrrrrrrreeeeeeeeeee', match.params.id)

  useEffect(() => {
    if (product && match.params.id !== product._id) {
      dispatch(getProductDetails(match.params.id));
    } else {
      console.log('herrrrrrrrrrrrrrrrreeeeeeeeeee')
    }
  }, [dispatch, match, product]);


  // return (
  //   <div className="productscreen">
  //     <div className="productscreen__left">
  //       <div className="left__image">
  //         <img
  //           src="https://images.unsplash.com/photo-1518444065439-e933c06ce9cd?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1267&q=80"
  //           alt="product name"
  //         />
  //       </div>
  //       <div className="left__info">
  //         <p className="left__name">PRODUCT 1</p>
  //         <p>PRICE:$$$</p>
  //         <p>Description:TEXT ABOUT Description</p>
  //       </div>
  //     </div>
  //     <div className="productscreen__right">
  //       <div className="right__info">
  //         <p>
  //           Price: <span>$499.99</span>
  //         </p>
  //         <p>
  //           Status: <span>IN Stock</span>
  //         </p>
  //         <p>
  //           Qty:{" "}
  //           <select>
  //             <option value="1">1</option>
  //             <option value="2">2</option>
  //             <option value="3">3</option>
  //             <option value="4">4</option>
  //           </select>
  //         </p>
  //         <p>
  //           <button type="button">Add to cart</button>
  //         </p>
  //       </div>
  //     </div>
  //   </div>
  // );

  return (
    <div className="productscreen">
      {loading ? (
        <h2>Loading ...</h2>
      ) : error ? (
        <h2>{error}</h2>
      ) : (
        <>
          <div className="productscreen__left">
            <div className="left__image">
              <img src={product.imageUrl} alt={product.name} />
            </div>
            <div className="left__info">
              <p className="left__name">PRODUCT 1</p>
              <p>Price: ${product.price}</p>
              <p>Description: {product.description}</p>
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
        </>
      )}
    </div>
  );
};

export default ProductScreen;
