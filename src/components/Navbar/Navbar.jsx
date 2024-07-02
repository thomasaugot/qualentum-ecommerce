import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import { FaHome, FaShoppingCart, FaSun, FaMoon, FaUser } from "react-icons/fa";
import { useTheme } from "../../context/ThemeContext";
import { CartContext } from "../../context/CartContext";
import SearchBar from "../SearchBar/SearchBar";
import "./Navbar.css";

const Navbar = ({ setSearchTerm }) => {
  const { darkMode, toggleDarkMode } = useTheme();
  const { cart } = useContext(CartContext);

  const handleSearchChange = (searchTerm) => {
    setSearchTerm(searchTerm);
  };

  return (
    <header className="navbar">
      <div className="navbar-content">
        <div className="navbar-left">
          <h1 className="navbar-title">Thomas' E-commerce</h1>
          <SearchBar onSearch={handleSearchChange} />
        </div>
        <nav className="nav-links">
          <NavLink to="/" className="nav-link" activeClassName="active-link">
            <FaHome size={26} />
          </NavLink>
          <NavLink
            to="/cart"
            className="nav-link"
            activeClassName="active-link"
          >
            <FaShoppingCart size={24} />({cart.length})
          </NavLink>
          <button onClick={toggleDarkMode} className="nav-button">
            {darkMode ? <FaSun size={24} /> : <FaMoon size={24} />}
          </button>
          <NavLink
            to="/login"
            className="nav-link"
            activeClassName="active-link"
          >
            <FaUser size={24} />
          </NavLink>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
