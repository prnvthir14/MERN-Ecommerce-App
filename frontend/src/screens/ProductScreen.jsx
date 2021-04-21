import { React, useEffect, useState } from "react";
import "./ProductScreen.css";

import { useDispatch, useSelector } from "react-redux";

import { getProductDetails } from "../redux/actions/productActions";
import { addToCart } from "../redux/actions/cartActions";

const ProductScreen = ({ match, history }) => {
  const [qty, setQty] = useState(1);
  const dispatch = useDispatch();

  const productDetails = useSelector((state) => {
    return state.getProductDetails;
  });

  const { product, loading, error } = productDetails;

  useEffect(() => {
    if (product && match.params.id !== product._id) {
      dispatch(getProductDetails(match.params.id));
    }
  }, [dispatch, match, product]);

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
              <p className="left__name">{product.name}</p>
              <p>Price: ${product.price}</p>
              <p>Description: {product.description}</p>
            </div>
          </div>

          <div className="productscreen__right">
            <div className="right__info">
              <p>
                Price: <span>${product.price}</span>
              </p>
              <p>
                Status:{" "}
                <span>
                  {product.countInStock > 0 ? "In STOCK" : "SORRY, NOT IN STOCK"}
                </span>
              </p>
              <p>
                Qty:{" "}
                <select
                  value={qty}
                  onChange={(evt) => setQty(evt.target.value)}
                >
                  {[...Array(product.countInStock).keys()].map((x) => 
                  (  <option key={x + 1} value={x + 1}>
                      {" "}
                      {x + 1}
                    </option>)
                  )}
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
