import Square from "./components/Square/Square";

const Board = () => {
  return (
    <>
      <div>
        <Square value="X"></Square>
        <Square value="0"></Square>
        <Square value="X"></Square>
      </div>

      <div>
        <Square value="X"></Square>
        <Square value="0"></Square>
        <Square value="X"></Square>
      </div>
      <div>
        <Square value="X"></Square>
        <Square value="0"></Square>
        <Square value="X"></Square>
      </div>
    </>
  );
};

export default Board;
