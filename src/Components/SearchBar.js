import React from "react";
import "../styles.css";

export const SearchBar = ({ placeholder, updateChange, searched }) => (
  <div>
    <form
      className="search"
      type="search"
      placeholder={placeholder}
      onSubmit={updateChange}
    >
      Enter Pokemon: <input type="text" id="search-input" />
      <input type="submit" value="Submit" />
    </form>
  </div>
);

export default SearchBar;
