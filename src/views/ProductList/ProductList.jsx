import React from "react";
import { useSelector } from "react-redux";
import "./ProductList.css";
import ProductCard from "../../components/ProductCard/ProductCard";
import Loading from "../../components/Loading/Loading";
import { selectProductsLoading } from "../../redux/reducers/productReducer";

const ProductList = ({ products }) => {
  const loading = useSelector(selectProductsLoading);

  if (loading) {
    return <Loading />;
  }

  return (
    <div className="product-list">
      {products?.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
};

export default ProductList;
