import React, { useState } from "react";
import "./Search.css";

const Search = () => {
  const [searchInput, setSearchInput] = useState("");

  const handleSearchInput = (e) => {
    setSearchInput(e.target.value);
  };
  return (
    <div className="search">
      <input
        value={searchInput}
        type="text"
        placeholder="Search"
        onChange={handleSearchInput}
      />
      <ion-icon name="search-outline"></ion-icon>
    </div>
  );
};

export default Search;
