import React from "react";

const Square = ({ value }) => {
  const handleClick = () => {
    console.log("button clicked");
  };
  return (
    <button
      onClick={handleClick}
      className="bg-white border border-gray-400 h-12 w-12 m-1 leading-9 text-xl"
    >
      {value}
    </button>
  );
};

export default Square;
