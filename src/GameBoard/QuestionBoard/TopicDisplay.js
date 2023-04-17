import React, { useContext } from "react";
import { GameContext } from "../../Context/GameContext";
import "./TopicDisplay.css";
import { QuestionContext } from "../../Context/QuestionContext";

const TopicDisplay = (props) => {

  const game = useContext(GameContext);
  const questionManager = useContext(QuestionContext);

  return (
    <div className="topic-container">
      <div className="topic-display">
        <h5>{game.currentTopic}</h5>
      </div>
      <div className="Question counter">
        <h5>{questionManager.questionCount} / 5</h5>
      </div>
    </div>
  );
};

export default TopicDisplay;
