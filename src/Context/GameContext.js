import { createContext } from "react";

export const GameContext = createContext({
    score: null,
    selectedTopics: [],
    currentTopic: null,
    quizUrl: null,
    difficulty: null,
    gameOver: null,
    addPoint: () => {},
    changeTopic: () => {},
    storeTopic: () => {},
    storeURL: () => {},
    setDifficutly: () => {},
    endGame: () => {},
    resetGame: () => {},
})