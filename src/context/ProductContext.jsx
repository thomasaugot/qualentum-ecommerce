import React, { createContext, useState, useEffect } from "react";

export const ProductContext = createContext();

export const ProductProvider = ({ children }) => {
  const [products, setProducts] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredProducts, setFilteredProducts] = useState([]);

  useEffect(() => {
    fetch("/src/constants/data.json")
      .then((response) => response.json())
      .then((data) => {
        setProducts(data);
        setFilteredProducts(data);
      })
      .catch((error) => console.error("Error loading products:", error));
  }, []);

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
      value={{ products, searchTerm, setSearchTerm, filteredProducts }}
    >
      {children}
    </ProductContext.Provider>
  );
};
