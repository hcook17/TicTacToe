import data from "./data";
import {useEffect, useState} from 'react';

export default function App() {
  const [board, setBoard] = useState(data.pieces);
  const [turn, setTurn] = useState("X");
  const [freeze, setFreeze] = useState(false);
  const [winner, setWinner] = useState('');

  function clickHandler(props) {
    if(board[props].symbol !== '-') {
      return;
    }

    const updatePiece = {
      id: props,
      symbol: turn
    }

    board[props] = updatePiece;
    setBoard([...board]);
    checkWin(board);

    if(turn === 'X') {
  
      setTurn('O');
      setFreeze(true);
      setTimeout(() => computerMove(board), 1500);
    } 
  
  }

  function computerMove(props) {
    const availableSpots = props.filter((piece) => piece.symbol === '-');
    if(availableSpots.length === 0) {
      return;
    }
    availableSpots[0].symbol = "O";
    setBoard([...board])
    checkWin(board);
    setTurn('X');
    setFreeze(false);
  }

  function checkWin(props) {
    const board = props;
    console.log(board);
    if(board[0].symbol == 'X' && board[3].symbol == 'X' && board[6].symbol == 'X') {
      setWinner('X');
      setFreeze(true);
    } else if (board[1].symbol === 'X' && board[4].symbol === 'X' && board[7].symbol === 'X') {
      setWinner('X');
      setFreeze(true);
    } else if (board[2].symbol === 'X' && board[5].symbol === 'X' && board[8].symbol === 'X') {
      setWinner('X');
      setFreeze(true);
    } else if (board[0].symbol === 'X' && board[1].symbol === 'X' && board[2].symbol === 'X') {
      setWinner('X');
      setFreeze(true);
    } else if (board[3].symbol === 'X' && board[4].symbol === 'X' && board[5].symbol === 'X') {
      setWinner('X');
      setFreeze(true);
    } else if (board[6].symbol === 'X' && board[7].symbol === 'X' && board[8].symbol === 'X') {
      setWinner('X');
      setFreeze(true);
    } else if (board[0].symbol === 'X' && board[4].symbol === 'X' && board[8].symbol === 'X') {
      setWinner('X');
      setFreeze(true);
    } else if (board[2].symbol === 'X' && board[4].symbol === 'X' && board[6].symbol === 'X') {
      setWinner('X');
      setFreeze(true);
    }
    if (board[0].symbol == 'O' && board[3].symbol == 'O' && board[6].symbol == 'O') {
      setWinner('O');
      setFreeze(true);
    } else if (board[1].symbol === 'O' && board[4].symbol === 'O' && board[7].symbol === 'O') {
      setWinner('O');
      setFreeze(true);
    } else if (board[2].symbol === 'O' && board[5].symbol === 'O' && board[8].symbol === 'O') {
      setWinner('O');
      setFreeze(true);
    } else if (board[0].symbol === 'O' && board[1].symbol === 'O' && board[2].symbol === 'O') {
      setWinner('O');
      setFreeze(true);
    } else if (board[3].symbol === 'O' && board[4].symbol === 'O' && board[5].symbol === 'O') {
      setWinner('O');
      setFreeze(true);
    } else if (board[6].symbol === 'O' && board[7].symbol === 'O' && board[8].symbol === 'O') {
      setWinner('O');
      setFreeze(true);
    } else if (board[0].symbol === 'O' && board[4].symbol === 'O' && board[8].symbol === 'O') {
      setWinner('O');
      setFreeze(true);
    } else if (board[2].symbol === 'O' && board[4].symbol === 'O' && board[6].symbol === 'O') {
      setWinner('O');
      setFreeze(true);
    }
  }

  return (
    <>
     <h1>R u smart? ...probably not ;)</h1>
      <h2>Turn: {turn}</h2>
      {
        winner &&
      <h2>
        Winner: {winner}
      </h2>
      }
      <div>
      {board.map((piece) => (
        <button key={piece.id} disabled={freeze} onClick={() => clickHandler(piece.id)}> {piece.symbol} </button>
      ))}
      </div>
    </>
  )};
  
     