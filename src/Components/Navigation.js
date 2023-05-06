import React from "react";
import { Link, Route, Routes } from "react-router-dom";
import Home from "./Home";
import SearchBar from "./SearchBar";

const Navigation = () => {
  return (
    <div>
      <div className="bg-blue-200 h-10 flex flex-row items-center justify-center">
        <SearchBar />
      </div>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </div>
  );
};

export default Navigation;
