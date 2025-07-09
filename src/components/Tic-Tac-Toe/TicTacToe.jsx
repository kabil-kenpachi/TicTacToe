import React, { useRef, useState } from "react";
import "./TicTacToe.css";
import circle_icon from "../assets/circle.png";
import cross_icon from "../assets/cross.png";

const TicTacToe = () => {
  const [boxes, setBoxes] = useState(["", "", "", "", "", "", "", "", ""]);
  const [lock, setLock] = useState(false);
  const [count, setCount] = useState(0);
  const titleRef = useRef(null);

  const handleClick = (e, num) => {
    if (lock === true) {
      return;
    }
    if (boxes[num] !== "") {
      return; // case déjà remplie
    }

    const newBoxes = [...boxes];

    if (count % 2 === 0) {
      newBoxes[num] = "x";
      e.target.innerHTML = `<img src='${cross_icon}' alt='cross' />`;
    } else {
      newBoxes[num] = "o";
      e.target.innerHTML = `<img src='${circle_icon}' alt='circle' />`;
    }

    setBoxes(newBoxes);
    setCount(count + 1);
    checkWin(newBoxes);
  };

  const checkWin = (boxes) => {
    if (boxes[0] == boxes[1] && boxes[1] == boxes[2] && boxes[2] != "") {
      win(boxes[2]);
    } else if (boxes[3] == boxes[4] && boxes[4] == boxes[5] && boxes[5] != "") {
      win(boxes[5]);
    } else if (boxes[6] == boxes[7] && boxes[7] == boxes[8] && boxes[8] != "") {
      win(boxes[8]);
    } else if (boxes[0] == boxes[4] && boxes[4] == boxes[8] && boxes[8] != "") {
      win(boxes[8]);
    } else if (boxes[2] == boxes[4] && boxes[4] == boxes[6] && boxes[6] != "") {
      win(boxes[6]);
    } else if (boxes[1] == boxes[4] && boxes[4] == boxes[7] && boxes[7] != "") {
      win(boxes[7]);
    } else if (boxes[0] == boxes[3] && boxes[3] == boxes[6] && boxes[6] != "") {
      win(boxes[6]);
    } else if (boxes[2] == boxes[5] && boxes[5] == boxes[8] && boxes[8] != "") {
      win(boxes[8]);
    }
  };

  const win = (player) => {
    if (player === "x") {
      titleRef.current.innerHTML = `Congratulations : <img src='${cross_icon}' alt='cross' /> win !`;
    } else {
      titleRef.current.innerHTML = `Congratulations : <img src='${circle_icon}' alt='circle' /> win !`;
    }
    setLock(true);
  };

  const resetGame = () => {
    setBoxes(["", "", "", "", "", "", "", "", ""]);
    setCount(0);
    setLock(false);
    titleRef.current.innerHTML = `Tic Tac Toe game in <span>React</span>`;
    document.querySelectorAll(".boxes").forEach((box) => {
      box.innerHTML = "";
    });
  };

  return (
    <div className="container">
      <div className="title" ref={titleRef}>
        Tic Tac Toe game in <span>React</span>
      </div>
      <div className="board">
        <div className="row1">
          <div className="boxes" onClick={(e) => handleClick(e, 0)}></div>
          <div className="boxes" onClick={(e) => handleClick(e, 1)}></div>
          <div className="boxes" onClick={(e) => handleClick(e, 2)}></div>
        </div>
        <div className="row2">
          <div className="boxes" onClick={(e) => handleClick(e, 3)}></div>
          <div className="boxes" onClick={(e) => handleClick(e, 4)}></div>
          <div className="boxes" onClick={(e) => handleClick(e, 5)}></div>
        </div>
        <div className="row3">
          <div className="boxes" onClick={(e) => handleClick(e, 6)}></div>
          <div className="boxes" onClick={(e) => handleClick(e, 7)}></div>
          <div className="boxes" onClick={(e) => handleClick(e, 8)}></div>
        </div>
      </div>
      <button onClick={resetGame}>reset</button>
    </div>
  );
};

export default TicTacToe;
