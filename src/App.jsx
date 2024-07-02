import React from "react";
import { RouterProvider } from "react-router-dom";
import { CartProvider } from "./context/CartContext";
import { AuthProvider } from "./context/AuthContext";
import { ThemeProvider } from "./context/ThemeContext";
import { ProductProvider } from "./context/ProductContext";
import { router } from "./router/index";
import "./App.css";
import Layout from "./views/Layout";

const App = () => {
  return (
    <ThemeProvider>
      <AuthProvider>
        <CartProvider>
          <ProductProvider>
            <RouterProvider router={router}>
              <Layout />
            </RouterProvider>
          </ProductProvider>
        </CartProvider>
      </AuthProvider>
    </ThemeProvider>
  );
};

export default App;
