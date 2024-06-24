import React, { useState, useEffect } from "react";
import "./App.css";
import Header from "./components/Header/Header";
import ProductList from "./components/ProductList/ProductList";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Product from "./components/ProductDetails/ProductDetails";
import { CartProvider } from "./context/CartContext";
import { AuthProvider } from "./context/AuthContext";
import Cart from "./components/Cart/Cart";
import Login from "./components/Login/Login";

const App = () => {
  const [products, setProducts] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    fetch("/src/constants/data.json")
      .then((response) => response.json())
      .then((data) => setProducts(data))
      .catch((error) => console.error("Error loading products:", error));
  }, []);

  const filteredProducts = products.filter((product) =>
    product.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <Router>
      <AuthProvider>
        <CartProvider>
          <Header setSearchTerm={setSearchTerm} />
          <Routes>
            <Route
              path="/"
              element={<ProductList products={filteredProducts} />}
            />
            <Route
              path="/product/:id"
              element={<Product products={products} />}
            />
            <Route path="/cart" element={<Cart />} />
            <Route path="/login" element={<Login />} />
          </Routes>
        </CartProvider>
      </AuthProvider>
    </Router>
  );
};

export default App;
