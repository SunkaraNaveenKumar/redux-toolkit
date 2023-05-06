import React, { useState } from "react";
import searchIcon from "../assets/search.svg";
import { useDispatch, useSelector } from "react-redux";
import { addSearchText, getSearchData } from "../Store/Slices/hnSearchSlice";
const SearchBar = () => {
  const { searchText } = useSelector((state) => {
    return state.hnSearchData;
  });
  const dispatch = useDispatch();
  const handleSearchText = (e) => {
    const { value } = e.target;
    dispatch(addSearchText(value));
    dispatch(getSearchData(value));
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
