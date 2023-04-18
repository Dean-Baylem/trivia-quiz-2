import React, { useState, useEffect, useContext, useCallback } from "react";
import { useHttpRequest } from "../Hooks/request-hook";
import { GameContext } from "../Context/GameContext";
import QuestionBoard from "./QuestionBoard/QuestionBoard";
import "./GameBoard.css";
import AnswerBoard from "./AnswerBoard/AnswerBoard";
import { QuestionContext } from "../Context/QuestionContext";

const GameBoard = (props) => {
  const game = useContext(GameContext);

  // Question Constant to be managed from here.

  const [allQuestions, setAllQuestions] = useState([]);
  const [currentQuestion, setCurrentQuestion] = useState("");
  const [answers, setAnswers] = useState([]);
  const [correctAnswer, setCorrectAnswer] = useState("");
  const [loadingQuestion, setLoadingQuestion] = useState(true);
  const [questionCount, setQuestionCount] = useState(1);

  const nextQuestion = useCallback(async () => {
    if (questionCount < 5) {
    let next = allQuestions[questionCount]
    setCurrentQuestion(next);
    const shuffledAnswers = await formAnswers(
      next.correctAnswer,
      next.incorrectAnswers
    );
    setAnswers(shuffledAnswers);
    setCorrectAnswer(next.correctAnswer);
    setQuestionCount(questionCount+1);
    setLoadingQuestion(false);
    } else {
      props.handleFadeOut(); // This is where we will check for End of Game and update the Context.
      if (game.selectedTopics.length === 3) {
        game.endGame();
      }
    }
  })

  const changeLoading = useCallback(() => {
    setLoadingQuestion(!loadingQuestion);
  }, [loadingQuestion]);

  // Functions to make request for questions.
  const { error, sendRequest } = useHttpRequest();
  const formAnswers = async (correct, incorrect) => {
    let group = [];
    group.push(correct);
    await incorrect.forEach((element) => group.push(element));
    group.sort(() => Math.random() - 0.5);
    return group;
  };

  useEffect(() => {
    const fetchQuestions = async () => {
      try {
        const responseData = await sendRequest(
          game.currentTopic,
          game.difficulty
        );
        const shuffledAnswers = await formAnswers(
          responseData[0].correctAnswer,
          responseData[0].incorrectAnswers
        );
        setCurrentQuestion(responseData[0]);
        setCorrectAnswer(responseData[0].correctAnswer)
        setAnswers(shuffledAnswers);
        setAllQuestions(responseData);
        setLoadingQuestion(false);
        setQuestionCount(1);
      } catch (err) {
        console.log(err);
      }
    };
    fetchQuestions();
  }, []);

  return (
    <QuestionContext.Provider
      value={{
        allQuestions: allQuestions,
        currentQuestion: currentQuestion,
        answers: answers,
        correctAnswer: correctAnswer,
        loadingQuestion: loadingQuestion,
        questionCount: questionCount,
        nextQuestion: nextQuestion,
        changeLoading: changeLoading
      }}
    >
      <div className="game-container">
        <QuestionBoard />
        <AnswerBoard />
      </div>
    </QuestionContext.Provider>
  );
};

export default GameBoard;
