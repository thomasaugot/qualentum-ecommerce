import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { FaHome, FaShoppingCart, FaSun, FaMoon, FaUser } from "react-icons/fa";
import { CartContext } from "../../context/CartContext";
import "./Header.css";

const Header = ({ setSearchTerm }) => {
  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const { cart } = useContext(CartContext);

  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    document.body.classList.toggle("dark-mode", !darkMode);
  };

  return (
    <header className="header">
      <div className="header-content">
        <div className="header-left">
          <h1 className="header-title">Thomas' E-commerce</h1>
          <input
            type="text"
            placeholder="Search products..."
            onChange={handleSearchChange}
            className="search-input"
          />
        </div>
        <nav className="nav-links">
          <Link to="/" className="nav-link">
            <FaHome size={26} />
          </Link>
          <Link to="/cart" className="nav-link cart-link">
            <FaShoppingCart size={24} />
            <span className="cart-quantity">{cart.length}</span>
          </Link>
          <button onClick={toggleDarkMode} className="nav-button">
            {darkMode ? <FaSun size={24} /> : <FaMoon size={24} />}
          </button>
          <Link to="/login" className="nav-link">
            <FaUser size={24} />
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
