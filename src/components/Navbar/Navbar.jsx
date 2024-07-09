import React from "react";
import { NavLink } from "react-router-dom";
import { FaHome, FaShoppingCart, FaSun, FaMoon, FaUser } from "react-icons/fa";
import { useSelector, useDispatch } from "react-redux";
import { toggleDarkMode } from "../../redux/actions";
import { selectCart } from "../../redux/reducers/cartReducer";
import { selectDarkMode } from "../../redux/reducers/themeReducer";
import SearchBar from "../SearchBar/SearchBar";
import "./Navbar.css";
import { selectUser } from "../../redux/reducers/userReducer";

const Navbar = () => {
  const darkMode = useSelector(selectDarkMode);
  const cart = useSelector(selectCart);
  const user = useSelector(selectUser);
  const dispatch = useDispatch();

  const handleToggleDarkMode = () => {
    dispatch(toggleDarkMode());
    document.body.classList.toggle("dark-mode");
  };

  return (
    <header className="navbar">
      <div className="navbar-content">
        <div className="navbar-left">
          <h1 className="navbar-title">Thomas' E-commerce</h1>
          <SearchBar />
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
            <FaShoppingCart size={24} />({cart?.length})
          </NavLink>
          <button onClick={handleToggleDarkMode} className="nav-button">
            {darkMode ? <FaSun size={24} /> : <FaMoon size={24} />}
          </button>
          {user ? (
            <NavLink
              to="/profile"
              className="nav-link"
              activeClassName="active-link"
            >
              <FaUser size={24} />
            </NavLink>
          ) : (
            <NavLink
              to="/login"
              className="nav-link"
              activeClassName="active-link"
            >
              <FaUser size={24} />
            </NavLink>
          )}
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
