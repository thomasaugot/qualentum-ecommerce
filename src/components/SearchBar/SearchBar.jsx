import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  setSearchTerm,
  selectSearchTerm,
} from "../../store/slices/productSlice";
import "./SearchBar.css";

const SearchBar = () => {
  const dispatch = useDispatch();
  const searchTerm = useSelector(selectSearchTerm);
  const [localSearchTerm, setLocalSearchTerm] = useState(searchTerm);

  useEffect(() => {
    setLocalSearchTerm(searchTerm);
  }, [searchTerm]);

  const handleSearch = (e) => {
    const searchValue = e.target.value;
    setLocalSearchTerm(searchValue);
    dispatch(setSearchTerm(searchValue));
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
