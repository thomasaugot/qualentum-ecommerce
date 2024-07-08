import React, { createContext, useState, useEffect } from "react";
import useProducts from "../hooks/useProducts";

export const ProductContext = createContext();

export const ProductProvider = ({ children }) => {
  const productHook = useProducts();
  const { products, loading } = productHook;
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredProducts, setFilteredProducts] = useState([]);

  useEffect(() => {
    setFilteredProducts(products);
  }, [products]);

  useEffect(() => {
    if (searchTerm.trim() === "") {
      setFilteredProducts(products);
    } else {
      const filtered = products.filter((product) =>
        product.title.toLowerCase().includes(searchTerm.toLowerCase())
      );
      setFilteredProducts(filtered);
    }
  }, [searchTerm, products]);

  return (
    <ProductContext.Provider
      value={{ ...productHook, searchTerm, setSearchTerm, filteredProducts }}
    >
      {children}
    </ProductContext.Provider>
  );
};
