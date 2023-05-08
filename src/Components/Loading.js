import React from "react";
import LoadingIcon from "../assets/loading.svg";
const Loading = () => {
  return (
    <div className="w-full h-screen flex justify-center items-center">
      <img src={LoadingIcon} alt="Error"></img>
    </div>
  );
};

export default Loading;
