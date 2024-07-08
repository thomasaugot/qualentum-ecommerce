import React, { useContext } from "react";
import "./ProductList.css";
import ProductCard from "../../components/ProductCard/ProductCard";
import { ProductContext } from "../../context/ProductContext";
import Loading from "../../components/Loading/Loading";

const ProductList = () => {
  const { filteredProducts, loading } = useContext(ProductContext);

  if (loading) {
    return <Loading />;
  }

  return (
    <div className="product-list">
      {filteredProducts.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
};

export default ProductList;
