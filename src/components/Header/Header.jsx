import React from "react";
import "./Header.css";

const Header = ({ setSearchTerm }) => {
  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  return (
    <header>
      <h1>Thomas' E-commerce</h1>
      <input
        type="text"
        placeholder="Search products..."
        onChange={handleSearchChange}
      />
    </header>
  );
};

export default Header;
