import { React, useEffect } from "react";
import "./HomeScreen.css";
import Product from "../components/Product";

//because we are using these hooks, we dont have to map through the object we reveive from our db
import { useSelector, useDispatch } from "react-redux";

//actions
import { getProducts as listProducts } from "../redux/actions/productActions";

const HomeScreen = () => {
  const dispatch = useDispatch();

  const getProducts = useSelector((state) => state.getProducts);

  const { products, loading, error } = getProducts;

  //on loading, make a disptch to list products.
  useEffect(() => {
    dispatch(listProducts());
  }, [dispatch]);
 
  return (
    <div className="homescreen">
      {" "}
      homescreen
      <h2 className="homescreen__title">Products</h2>
      <div className="homescreen__products">
        {loading ? (
          <h2> Loading...</h2>
        ) : error ? (
          <h2>{error}</h2>
        ) : (
          products.map((product) => (
            <Product
              key={product._id}
              productId={product._id}
              name={product.name}
              price={product.price}
              description={product.description}
              imageUrl={product.imageUrl}
            />
          ))
        )}
      </div>
    </div>
  );
};

export default HomeScreen;
