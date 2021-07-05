import React,{ useState } from "react";
import Board from './components/Board'
import { calculatewinner } from "./helpers";
import "./styles/root.scss"
const App = () => {
  const [board,setBoard]=useState(Array(9).fill(null));
  const [isXnext,setIsXnext]=useState(false);
  const winner = calculatewinner(board);
  const message = winner? `winner is ${winner} `:`Next Player is ${isXnext?'X':'0'}`;
  const handleSquareClick = (position) => {

      if(board[position] || winner ){
          return;
      }
              setBoard ((prev) => {
                 return  prev.map((square,pos)=>{
                  if(pos===position){
                      return  isXnext?'X':'0';
                  }
                  return square;
                 
                  })
                    
              })
               setIsXnext(prev=>!prev);
  };

  
  return (
  <div className="app">
    <h1>TIC TAC TOE</h1>
    <h2>{message}</h2>
    <Board board={board} handleSquareClick={handleSquareClick}/>
  </div>
   );
}

  export default App