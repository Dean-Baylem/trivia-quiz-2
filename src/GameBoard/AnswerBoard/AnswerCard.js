import React from "react";
import "./AnswerCard.css";

const AnswerCard = props => {
    return (
      <li className="answer-card">
        <div className="option-marker">
          <p>{props.counter}</p>
        </div>
        <div className="option-text">
          <p>{props.option}</p>
        </div>
      </li>
    );
}

export default AnswerCard;