import React from "react";
import Square from "./TSquare";

const rowStyle = {
  display: "flex",
};

const boardStyle = {
  backgroundColor: "#eee",
  width: "350px",
  alignItems: "center",
  justifyContent: "center",
  display: "flex",
  flexDirection: "column",
  border: "4px lightblue solid",
};

const containerStyle = {
  display: "flex",
  alignItems: "center",
  flexDirection: "column",
};

const instructionsStyle = {
  marginTop: "5px",
  marginBottom: "5px",
  fontWeight: "bold",
  fontSize: "16px",
};

const buttonStyle = {
  marginTop: "15px",
  marginBottom: "16px",
  width: "80px",
  height: "40px",
  backgroundColor: "darkgreen",
  color: "white",
  fontSize: "16px",
};

function TBoard(props) {
  return (
    <div style={containerStyle} className="gameBoard">
      <div id="statusArea" className="status" style={instructionsStyle}>
        Next player: &nbsp;<span> {props.playermode}</span>
      </div>
      <div id="winnerArea" className="winner" style={instructionsStyle}>
        Winner: &nbsp;<span>{props.winner}</span>
      </div>
      <button style={buttonStyle} onClick={props.reset}>
        RESET
      </button>
      <div style={boardStyle}>
        <div className="board-row" style={rowStyle}>
          <Square
            handleClick={(e) => props.handleClick(e, 0)}
            squareVal={props.squareVal[0]}
          />
          <Square
            handleClick={(e) => props.handleClick(e, 1)}
            squareVal={props.squareVal[1]}
          />
          <Square
            handleClick={(e) => props.handleClick(e, 2)}
            squareVal={props.squareVal[2]}
          />
        </div>
        <div className="board-row" style={rowStyle}>
          <Square
            handleClick={(e) => props.handleClick(e, 3)}
            squareVal={props.squareVal[3]}
          />
          <Square
            handleClick={(e) => props.handleClick(e, 4)}
            squareVal={props.squareVal[4]}
          />
          <Square
            handleClick={(e) => props.handleClick(e, 5)}
            squareVal={props.squareVal[5]}
          />
        </div>
        <div className="board-row" style={rowStyle}>
          <Square
            handleClick={(e) => props.handleClick(e, 6)}
            squareVal={props.squareVal[6]}
          />
          <Square
            handleClick={(e) => props.handleClick(e, 7)}
            squareVal={props.squareVal[7]}
          />
          <Square
            handleClick={(e) => props.handleClick(e, 8)}
            squareVal={props.squareVal[8]}
          />
        </div>
      </div>
    </div>
  );
}

export default TBoard;
