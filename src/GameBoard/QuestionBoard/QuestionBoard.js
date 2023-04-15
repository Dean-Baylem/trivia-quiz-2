import React from "react";
import TopicDisplay from "./TopicDisplay";
import QuestionDisplay from "./QuestionDisplay";

const QuestionBoard = props => {
    return (
      <div className="gameboard-container">
        <TopicDisplay />
        <QuestionDisplay />
      </div>
    );
}

export default QuestionBoard;