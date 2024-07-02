import React, { useContext } from "react";
import "./ProductCard.css";
import { Link } from "react-router-dom";
import { CartContext } from "../../context/CartContext";
import { AuthContext } from "../../context/AuthContext";

const ProductCard = ({ product }) => {
  const { addToCart } = useContext(CartContext);
  const { user } = useContext(AuthContext);

  const handleAddToCart = (event) => {
    event.stopPropagation();
    addToCart(product);
  };

  return (
    <div className="product-card">
      <Link to={`/products/${product.id}`} className="product-details">
        <img src={product.image} alt={product.title} />
        <h2>{product.title}</h2>
        <p>${product.price}</p>
      </Link>
      <div className="product-card-buttons">
        {user && (
          <button className="btn-add-to-cart" onClick={handleAddToCart}>
            Add to Cart
          </button>
        )}
      </div>
    </div>
  );
};

export default ProductCard;
