import React, { useState } from "react";
import Board from "./Board";
import "./GameStyle.css";
import { checkWinner } from "./Helper";

function Game(props) {
  const [board, setBoard] = useState(Array(9).fill(null));
  const [xIsNext, setXIsNext] = useState(true);
  const winner = checkWinner(board);

  const handleClick = (index) => {
    const boardCopy = [...board];
    if (winner || boardCopy[index]) return;
    boardCopy[index] = xIsNext ? "X" : "O";
    console.log(boardCopy[index]);
    setBoard(boardCopy);
    setXIsNext((xIsNext) => !xIsNext);
  };

  const handleResetGame = () => {
    setBoard(Array(9).fill(null));
    setXIsNext(true);
  };

  return (
    <div className="wrapper">
      <div className="game-winner">
        {winner ? "The winner is " : ""}
        <p
          className={
            winner === "X" ? "game-winner-symbol isX" : "game-winner-symbol isO"
          }
        >
          {winner ? winner : ""}
        </p>
      </div>
      <Board cells={board} onClick={handleClick}></Board>

      <button className="button-reset" onClick={handleResetGame}>
        Reset Game
      </button>
    </div>
  );
}

export default Game;
