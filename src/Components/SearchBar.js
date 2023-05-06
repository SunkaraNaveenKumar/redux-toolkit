import React, { useState } from "react";
import searchIcon from "../assets/search.svg";
const SearchBar = () => {
  const [searchText, setSearchText] = useState("");
  const handleSearchText = (e) => {
    const { value } = e.target;
    setSearchText(value);
  };
  return (
    <div className="flex flex-row h-7 bg-white rounded-lg overflow-hidden">
      <input
        className="focus:outline-none pl-5 w-80"
        value={searchText}
        placeholder="Enter the text here..."
        onChange={handleSearchText}
      ></input>
      <img src={searchIcon} />
    </div>
  );
};

export default SearchBar;
