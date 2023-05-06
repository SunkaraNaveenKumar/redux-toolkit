import React from "react";
import { Link, Route, Routes } from "react-router-dom";
import Home from "./Home";
import SearchBar from "./SearchBar";
import NewsDetails from "./NewsDetails";

const Navigation = () => {
  return (
    <div>
      <div className="bg-blue-200 h-10 flex flex-row items-center justify-center">
        <SearchBar />
      </div>
    </div>
  );
};

export default Navigation;
