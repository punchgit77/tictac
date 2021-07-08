import React,{ useState } from "react";
import Board from './components/Board';
import Square from "./components/Square";
import History from "./components/History";
import StatusMessage from "./components/StatusMessage";
import { calculatewinner } from "./helpers";
import "./styles/root.scss"

const New_Game=[
    
  { board: Array(9).fill(null), isXnext : true },

]

const App = () => {
  const [history,setHistory]=useState(New_Game);
  const [currentMove,setcurrentmove]=useState(0);
  const current=history[currentMove];
  const { winner,winningsquares } = calculatewinner(current.board);
   
  
  const handleSquareClick = position => {

      if(current.board[position] || winner ){
          return;
      }
              setHistory (prev => {

                 const last = prev[prev.length-1];
                 const newBoard = last.board.map((square,pos) => {
                  if (pos === position) {
                      return  last.isXnext ? 'X' : '0';
                  }
                  return square;
                 
                  });

                 return prev.concat({ board: newBoard, isXnext: !last.isXnext });   
              });

               setcurrentmove(prev => prev+1);
  };
            
   const moveTo = move => {
     setcurrentmove(move);
   };
  
   const onNewGame=()=>{

     setHistory(New_Game);
     setcurrentmove(0);
   }

  return (
  <div className="app">
    <h1>TIC <span className="text-green">TAC</span> TOE</h1>
    <h2>{StatusMessage}</h2>
    <StatusMessage winner={winner} current={current}  />
    <Board board={current.board} handleSquareClick={handleSquareClick} winningsquares={winningsquares}/>
    <button type="button" onClick={onNewGame} className={`btn-reset ${winner?'active':' '}`}>Start New Game</button>
    <History history={history} moveTo={moveTo} currentMove={currentMove} />
    <div className="bg-balls"></div>
    <div className="bg-balls1"></div>
    <div className="bg-balls2"></div>
    <div className="bg-balls3"></div>


  </div>
   );
}

  export default App;