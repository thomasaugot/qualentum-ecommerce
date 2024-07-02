import React, { createContext, useState, useEffect } from "react";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState(() => {
    const storedCart = localStorage.getItem("cart");
    return storedCart ? JSON.parse(storedCart) : [];
  });

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  const addToCart = (product) => {
    const itemIndex = cart.findIndex((item) => item.id === product.id);

    if (itemIndex !== -1) {
      const updatedCart = [...cart];
      updatedCart[itemIndex].quantity++;
      setCart(updatedCart);
    } else {
      const itemToAdd = { ...product, quantity: 1 };
      setCart([...cart, itemToAdd]);
    }
  };

  const clearCart = () => {
    setCart([]);
  };

  return (
    <CartContext.Provider value={{ cart, addToCart, clearCart }}>
      {children}
    </CartContext.Provider>
  );
};
