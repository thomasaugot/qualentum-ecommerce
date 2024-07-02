import React, { useState, useContext } from "react";
import { ProductContext } from "../../context/ProductContext";
import "./SearchBar.css";

const SearchBar = () => {
  const { setSearchTerm } = useContext(ProductContext);
  const [localSearchTerm, setLocalSearchTerm] = useState("");

  const handleSearch = (e) => {
    const searchValue = e.target.value;
    setLocalSearchTerm(searchValue);
    setSearchTerm(searchValue);
  };

  return (
    <input
      type="text"
      placeholder="Buscar productos..."
      value={localSearchTerm}
      onChange={handleSearch}
      className="searchbar"
    />
  );
};

export default SearchBar;
