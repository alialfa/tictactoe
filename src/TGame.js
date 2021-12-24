import React, { Component } from "react";
import Board from "./TBoard";

class TGame extends Component {
  constructor(props) {
    super(props);
    this.state = {
      clickbool: false,
      clickcount: 0,
      gameover: false,
      playermode: "Y",
      winner: "None",
      squareVal: ["", "", "", "", "", "", "", "", ""],
    };
    this.handleClick = this.handleClick.bind(this);
    this.reset = this.reset.bind(this);
  }

  checkGameStatus() {
    //alert(trow1+"\n"+trow2);
    const { squareVal } = this.state;

    let trow1 = "";
    let trow2 = "";
    let trow3 = "";
    trow1 = squareVal[0] + squareVal[1] + squareVal[2];
    trow2 = squareVal[3] + squareVal[4] + squareVal[5];
    trow3 = squareVal[6] + squareVal[7] + squareVal[8];
    let tcol1 = "";
    let tcol2 = "";
    let tcol3 = "";
    tcol1 = squareVal[0] + squareVal[3] + squareVal[6];
    tcol2 = squareVal[1] + squareVal[4] + squareVal[7];
    tcol3 = squareVal[2] + squareVal[5] + squareVal[8];
    let tdiag1 = "";
    let tdiag2 = "";
    tdiag1 = squareVal[0] + squareVal[4] + squareVal[8];
    tdiag2 = squareVal[2] + squareVal[4] + squareVal[6];

    // row match
    if (
      trow1 === "XXX" ||
      trow2 === "XXX" ||
      trow3 === "XXX" ||
      trow1 === "YYY" ||
      trow2 === "YYY" ||
      trow3 === "YYY"
    ) {
      this.setState({
        gameover: true,
        winner: "PLAYER -- " + this.state.playermode + " -- WINS!!",
      });
    }
    // column match
    if (
      tcol1 === "XXX" ||
      tcol2 === "XXX" ||
      tcol3 === "XXX" ||
      tcol1 === "YYY" ||
      tcol2 === "YYY" ||
      tcol3 === "YYY"
    ) {
      this.setState({
        gameover: true,
        winner: "PLAYER -- " + this.state.playermode + " -- WINS!!",
      });
    }
    // diagonal match
    if (
      tdiag1 === "XXX" ||
      tdiag2 === "XXX" ||
      tdiag1 === "YYY" ||
      tdiag2 === "YYY"
    ) {
      this.setState({
        gameover: true,
        winner: "PLAYER -- " + this.state.playermode + " -- WINS!!",
      });
    }
  }

  checkGameOver() {
    const { squareVal } = this.state;
    let count = 1;
    for (var i = 0; i < 9; i++) {
      if (squareVal[i] !== "") {
        count += 1;
      }
    }
    if (count === 9) {
      this.setState({ gameover: true });
    }
    if (this.state.gameover === true) {
      alert("The Game is Over - Reset to Play again!");
    }
  }

  handleClick(e, id) {
    e.preventDefault();
    // check if game complete
    this.checkGameOver();

    // check if game active
    if (this.state.gameover === false) {
      let squareval = this.state.squareVal;
      if (squareval[id] === "") {
        // if square is unclicked
        if (this.state.clickbool === false) {
          this.setState({
            clickbool: !this.state.clickbool,
            clickcount: this.state.clickcount + 1,
            playermode: "X",
          });
        }
        if (this.state.clickbool === true) {
          this.setState({
            clickbool: !this.state.clickbool,
            clickcount: this.state.clickcount + 1,
            playermode: "Y",
          });
        }
        const { playermode } = this.state;
        if (playermode !== "") {
          squareval[id] = playermode; // fill square
        }
        this.setState({ squareVal: squareval });

        // monitor game status after click
        this.checkGameStatus();
      }
    }
  }

  reset(e) {
    this.setState({
      clickbool: false,
      clickcount: 0,
      gameover: false,
      playermode: "Y",
      winner: "None",
      squareVal: ["", "", "", "", "", "", "", "", ""],
    });
  }

  componentDidMount() {}

  render() {
    return (
      <div className="game">
        <h1 style={{ textAlign: "center" }}>
          <span style={{ color: "lightblue" }}>TIC</span>-
          <span style={{ color: "lightskyblue" }}>TAC</span>-
          <span style={{ color: "rgb(6, 87, 138)" }}>TOE</span>
        </h1>
        <div className="game-board">
          <Board
            handleClick={this.handleClick}
            reset={this.reset}
            clickbool={this.state.clickbool}
            clickcount={this.state.clickcount}
            playermode={this.state.playermode}
            winner={this.state.winner}
            squareVal={this.state.squareVal}
          />
        </div>
      </div>
    );
  }
}

export default TGame;
