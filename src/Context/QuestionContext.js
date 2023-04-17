import { createContext } from "react";

export const QuestionContext = createContext({
  allQuestions: null,
  currentQuestion: null,
  answers: null,
  correctAnswer: null,
  loadingQuestion: null,
  questionCount: 0,
  changeLoading: () => {},
  nextQuestion: () => {}
});
