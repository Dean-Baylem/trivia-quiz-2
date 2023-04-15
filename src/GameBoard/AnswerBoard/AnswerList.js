import React from "react";
import AnswerCard from "./AnswerCard";
import "./AnswerList.css";

const AnswerList = props => {
    return (
      <ul className="answer-list">
        <AnswerCard counter="A" option="Test answer" />
        <AnswerCard counter="B" option="Test answer" />
        <AnswerCard counter="C" option="Test answer" />
        <AnswerCard counter="D" option="Test answer" />
      </ul>
    );
}

export default AnswerList;