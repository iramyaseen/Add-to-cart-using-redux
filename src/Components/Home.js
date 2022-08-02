import React from "react";
import { useGetAllProductsQuery } from "../featucer/ProductApi";
import { useDispatch } from "react-redux";
import { addToCart } from "../featucer/CartsSlice";
import { useNavigate } from "react-router-dom";

function Home() {
  const { data, error, isLoading } = useGetAllProductsQuery();
  const dispatch = useDispatch();

  const navigate = useNavigate();

  const handleAddToCart = (product) => {
    dispatch(addToCart(product));
    navigate("/cart-products");
  };
  return (
    <div className="home-container">
      {isLoading ? (
        <p>Loading...</p>
      ) : error ? (
        <p>An error can occurs</p>
      ) : (
        <>
          <h2>New Products</h2>
          <div className="products">
            {data?.map((product) => (
              <div key={product.id} className="product">
                <h3>{product.title}</h3>
                <img src={product.image} alt={product.title} />
                <div className="details">
                  <span>{product.category}</span>
                  <span className="price">${product.price}</span>
                </div>
                <button onClick={() => handleAddToCart(product)}>
                  Add to cart
                </button>
              </div>
            ))}
          </div>
        </>
      )}
    </div>
  );
}

export default Home;
