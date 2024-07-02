import React, { useContext } from "react";
import { Link, useParams } from "react-router-dom";
import { ProductContext } from "../../context/ProductContext";
import { CartContext } from "../../context/CartContext";
import { AuthContext } from "../../context/AuthContext";
import "./ProductDetails.css";

const ProductDetails = () => {
  const { id } = useParams();
  const { products } = useContext(ProductContext);
  const { addToCart } = useContext(CartContext);
  const { user } = useContext(AuthContext);

  const product = products.find((p) => p.id === parseInt(id));

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
      {user && <button onClick={() => addToCart(product)}>Add to Cart</button>}
    </div>
  );
};

export default ProductDetails;
