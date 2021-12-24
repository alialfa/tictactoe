import React from "react";

const squareStyle = {
  width: "100px",
  height: "100px",
  backgroundColor: "#ddd",
  margin: "4px",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  fontSize: "20px",
  color: "white",
  border: "4px solid indigo",
};

function TSquare(props) {
  return (
    <div className="square" style={squareStyle} onClick={props.handleClick}>
      <h2 style={{ color: "darkred", fontFamily: "cursive" }}>
        {props.squareVal}
      </h2>
    </div>
  );
}

export default TSquare;
