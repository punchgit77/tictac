import React from 'react';

const History = ({ history,moveTo,currentMove }) => {
    return (
        <div className="history-wrapper">
            <h2 className="hist">Current Game History</h2>
        <ul className="history">
            {history.map((_,move) => {
             return(
     
             <li key={move}>
                
                <button type="button" onClick={() => {moveTo(move)}} className={`btn-move ${move===currentMove?'active':''}`}
                 > 
                     {move === 0 ?'Go to start' : `Go to move #${move}`}
                     </button>
                    </li>
             );
        })}
        </ul>
        </div>
    );
}

export default History;
