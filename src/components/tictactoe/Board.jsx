import React from "react";
import Cell from "./Cell";

function Board(props) {
  //   console.log(props);
  //   const cells = [null, null, null, "X", "X", "X", null, null, null];
  //   console.log(checkWinner(cells));
  return (
    <div className="game-board">
      {/* tạo một cái mảng có n phần tử rồi sau đó map thay vì tạo một cách thủ công */}

      {props.cells.map((item, index) => (
        <Cell
          key={index}
          value={item}
          onClick={() => props.onClick(index)}
          className={item === "X" ? "isX" : item === "O" ? "isO" : ""}
        ></Cell>
      ))}
    </div>
  );
}

export default Board;
