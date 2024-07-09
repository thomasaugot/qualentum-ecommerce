import React, { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { addToCart } from "../../store/slices/cartSlice";
import {
  selectAllProducts,
  fetchProductsThunk,
  selectProductsLoading,
} from "../../store/slices/productSlice";
import "./ProductDetails.css";

const ProductDetails = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const products = useSelector(selectAllProducts);
  const loading = useSelector(selectProductsLoading);

  useEffect(() => {
    if (!products.length) {
      dispatch(fetchProductsThunk());
    }
  }, [dispatch, products]);

  const product = products.find((p) => p.id === id);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!product) {
    return <div>Product not found</div>;
  }

  return (
    <div className="product">
      <Link to="/" className="back-link">
        Back to Home
      </Link>
      <img src={product.image} alt={product.title} />
      <h1>{product.title}</h1>
      <p>{product.description}</p>
      <p>${product.price}</p>
      <p>Category: {product.category}</p>
      <p>
        Rating: {product.rating.rate} ({product.rating.count} reviews)
      </p>
      <button onClick={() => dispatch(addToCart(product))}>Add to Cart</button>
    </div>
  );
};

export default ProductDetails;
