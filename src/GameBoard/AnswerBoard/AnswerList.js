import React, { useContext, useState, useEffect } from "react";
import { QuestionContext } from "../../Context/QuestionContext";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import AnswerCard from "./AnswerCard";
import "./AnswerList.css";
import { GameContext } from "../../Context/GameContext";

const AnswerList = props => {

  const questionManager = useContext(QuestionContext);
  const game = useContext(GameContext);

  const [showAnswers, setShowAnswers] = useState(false);

  useEffect(() => {
    if (!questionManager.loadingQuestion) {
      setShowAnswers(true);
    } else {
      setShowAnswers(false);
    }
  }, [questionManager.loadingQuestion])

  const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

  const handleChoice = async (choice) => {
    if (questionManager.correctAnswer === choice) {
      console.log("Ding! Ding! Ding!");
      delay(300);
      setShowAnswers(false);
      game.addPoint(game.difficulty);
      questionManager.changeLoading(true);
      questionManager.nextQuestion();
      await delay(200);
      setShowAnswers(true);
    } else {
      setShowAnswers(false);
      console.log("Oh no...that's wrong!")
      questionManager.changeLoading(true);
      questionManager.nextQuestion();
      await delay(200);
      setShowAnswers(true);
    }
  }

    return (
      <CSSTransition
        in={showAnswers}
        timeout={500}
        classNames="fade"
        unmountOnExit
      >
        <ul className="answer-list">
          <AnswerCard
            handleChoice={handleChoice}
            counter="A"
            option={questionManager.answers[0]}
          />
          <AnswerCard
            handleChoice={handleChoice}
            counter="B"
            option={questionManager.answers[1]}
          />
          <AnswerCard
            handleChoice={handleChoice}
            counter="C"
            option={questionManager.answers[2]}
          />
          <AnswerCard
            handleChoice={handleChoice}
            counter="D"
            option={questionManager.answers[3]}
          />
        </ul>
      </CSSTransition>
    );
}

export default AnswerList;