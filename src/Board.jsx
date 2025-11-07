import { useState } from "react";
import Square from "./components/Square/Square";

const Board = () => {
  const [squares, setSquares] = useState(Array(9).fill(null));
  const handleClick = () => {
    setSquares("X");
  };
  return (
    <>
      <div className="flex">
        <Square value={squares[0]} onSquareClick={handleClick}></Square>
        <Square value={squares[1]}></Square>
        <Square value={squares[2]}></Square>
      </div>

      <div className="flex">
        <Square value={squares[3]}></Square>
        <Square value={squares[4]}></Square>
        <Square value={squares[5]}></Square>
      </div>
      <div className="flex">
        <Square value={squares[6]}></Square>
        <Square value={squares[7]}></Square>
        <Square value={squares[8]}></Square>
      </div>
    </>
  );
};

export default Board;
