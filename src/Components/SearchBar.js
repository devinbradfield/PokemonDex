import React from "react";
import "../styles.css";

export const SearchBar = ({ placeholder, updateChange }) => (
  <input
    className="search"
    type="search"
    placeholder={placeholder}
    onChange={updateChange}
  />
);

export default SearchBar;
