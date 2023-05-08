import React from "react";
import SearchBar from "./SearchBar";

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
