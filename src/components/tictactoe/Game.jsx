import React, { useReducer } from "react";
import Board from "./Board";
import "./GameStyle.css";
import { checkWinner } from "./Helper";

const initialState = {
  board: Array(9).fill(null),
  xIsNext: true,
};
// immuatable state => muoons thay doi state thi phai clone no ra
const gameReducer = (state, action) => {
  switch (action.type) {
    case "CLICK": {
      const { board, xIsNext } = state;
      const { index, winner } = action.payload;
      if (winner || board[index]) return state;
      const nextState = JSON.parse(JSON.stringify(state));
      nextState.board[index] = xIsNext ? "X" : "O";
      nextState.xIsNext = !xIsNext;
      return nextState;
    }
    case "RESET": {
      const nextState = JSON.parse(JSON.stringify(state));
      nextState.board = Array(9).fill(null);
      nextState.xIsNext = true;
      return nextState;
    }
    default:
      console.log("Error");
      break;
  }
  return state;
};

function Game(props) {
  // const [board, setBoard] = useState(Array(9).fill(null));
  // const [xIsNext, setXIsNext] = useState(true);
  // const [state, setState] = useState({
  //   board: Array(9).fill(null),
  //   xIsNext: true,
  // });

  const [state, dispatch] = useReducer(gameReducer, initialState);
  // const action = { type: "CLICK", payload: {} };
  // dispatch({ type: "CLICK" });
  const winner = checkWinner(state.board);

  const handleClick = (index) => {
    // const boardCopy = [...state.board];
    // if (winner || boardCopy[index]) return;
    dispatch({ type: "CLICK", payload: { index, winner } });
    // boardCopy[index] = state.xIsNext ? "X" : "O";
    // console.log(boardCopy[index]);
    // state.setBoard(boardCopy);
    // state.setXIsNext((xIsNext) => !xIsNext);
    // setState({
    //   ...state,
    //   board: boardCopy,
    //   xIsNext: !state.xIsNext,
    // });
  };

  const handleResetGame = () => {
    dispatch({ type: "RESET" });
    // state.setBoard(Array(9).fill(null));
    // state.setXIsNext(true);
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
      <Board cells={state.board} onClick={handleClick}></Board>

      <button className="button-reset" onClick={handleResetGame}>
        Reset Game
      </button>
    </div>
  );
}

export default Game;
