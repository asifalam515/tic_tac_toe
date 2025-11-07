import React from "react";
import { useState } from "react";
const Square = ({ value, onSquareClick }) => {
  return (
    <button
      onClick={onSquareClick}
      className="bg-white border border-gray-400 h-12 w-12 m-1 leading-9 text-xl"
    >
      {value}{" "}
    </button>
  );
};

export default Square;
