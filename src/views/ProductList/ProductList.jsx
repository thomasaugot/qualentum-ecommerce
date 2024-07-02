import React, { useContext } from "react";
import "./ProductList.css";
import ProductCard from "../../components/ProductCard/ProductCard";
import { ProductContext } from "../../context/ProductContext";

const ProductList = () => {
  const { filteredProducts } = useContext(ProductContext);

  return (
    <div className="product-list">
      {filteredProducts.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
};

export default ProductList;
