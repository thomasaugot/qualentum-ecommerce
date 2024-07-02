import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../context/AuthContext";
import ProductList from "../ProductList/ProductList";
import { useTheme } from "../../context/ThemeContext";

const Home = () => {
  const { user } = useContext(AuthContext);
  const { darkMode, toggleDarkMode } = useTheme();
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
    <div className="home">
      <div className="user-message">
        {user ? (
          <p>¡{user.username}, aprovecha tu 20% de descuento!</p>
        ) : (
          <p>Crea una cuenta para disfrutar de nuestros descuentos.</p>
        )}
      </div>
      <ProductList products={filteredProducts} />
    </div>
  );
};

export default Home;
