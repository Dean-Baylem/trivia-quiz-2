import React from "react";
import QuestionBoard from "./QuestionBoard/QuestionBoard";
import "./GameBoard.css";
import AnswerBoard from "./AnswerBoard/AnswerBoard";

const GameBoard = props => {
    return (
      <div className="game-container">
        <QuestionBoard />
        <AnswerBoard />
      </div>
    );
}

export default GameBoard;