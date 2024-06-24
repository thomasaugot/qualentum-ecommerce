import React, { useContext } from "react";
import "./ProductList.css";
import { AuthContext } from "../../context/AuthContext";
import ProductCard from "../ProductCard/ProductCard";

const ProductList = ({ products }) => {
  const { user } = useContext(AuthContext);

  return (
    <div className="product-list-container">
      <div className="user-message">
        {user ? (
          <p>¡{user.username}, aprovéchate de tu 20% de descuento!</p>
        ) : (
          <p>Crea una cuenta para disfrutar de nuestros descuentos.</p>
        )}
      </div>
      <div className="product-list">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default ProductList;
