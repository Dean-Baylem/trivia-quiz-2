import React, { useState, useCallback } from "react";
import "./App.css";
import CatSelect from "./CatSelect/CatSelect";
import Header from "./Header/Header";
import GameBoard from "./GameBoard/GameBoard";
import { CSSTransition } from "react-transition-group";
import { GameContext } from "./Context/GameContext";
import EndGameModal from "./EndGameModal/EndGameModal";
import HeaderTopicList from "./Header/HeaderTopicList";
import ScoreCard from "./Header/ScoreCard";
import Footer from "./Footer/Footer";


function App() {
  
  // Code for handling the Game Context for the App
  // Constants used by Context
  const [score, setScore] = useState(0);
  const [currentTopic, setCurrentTopic] = useState("");
  const [selectedTopics, setSelectedTopics] = useState([]);
  const [quizURL, setQuizURL] = useState("");
  const [difficulty, setDifficulty] = useState("");
  const [gameOver, setGameOver] = useState(false);
  const [topScores, setTopScores] = useState([]);

  // Functions to handle changes in Context

  // Add points to the total score based on difficulty.
  const addPoint = (difficulty) => {
    switch (difficulty) {
      case 'easy':
        setScore((score + 1));
        break
      case 'medium':
        setScore((score + 2));
        break
      case 'hard':
        setScore((score + 3));
        break
      default:
        console.log("No difficulty found");  
    }
  }

  const changeTopScores = useCallback( async () => {
    try {
      const response = await fetch("http://localhost:5000/scores/getscores",
      {
        method: "GET",
      });
      const responseData = await response.json();
      setTopScores(responseData.scores);
    } catch (err) {
      console.log(err)
    }
  }, [])

  const changeTopic = useCallback((topic) => {
    setCurrentTopic(topic);
  }, [])

  const storeTopic = useCallback((topic) => {
    setSelectedTopics((prevValue) =>
      [...prevValue, topic]
    );
  }, [])

  const storeURL = useCallback((url) => {
    setQuizURL(url);
  }, [])

  const changeDifficulty = useCallback(() => {
    setDifficulty((prevValue) => {
      switch (prevValue) {
        case "easy":
          return "medium"
        case "medium":
          return "hard"
        default :
        return "easy"    
      }
    })
  }, [])

  const endGame = useCallback(() => {
    setGameOver(true);
    console.log(" GAME OVER ");
  }, [])

  const resetGame = useCallback(() => {
    setScore(0);
    setCurrentTopic("");
    setSelectedTopics([]);
    setQuizURL("");
    setDifficulty("");
    setGameOver(false);
  }, []);


  const [gameState, setGameState] = useState("select");
  const [nextGameState, setNextGameState] = useState("");
  // Functions to hanlde the Fade in and out - Will have to change these to 
  // correspond to events later.
  const handleFadeOut = () => {
    if (gameState === "select") {
      setNextGameState("quiz");
    } else {
      setNextGameState("select");
    }
    setGameState("");
  };

  const handleFadeIn = () => {
    setGameState(nextGameState);
  }
  

  return (
    <React.Fragment>
      <GameContext.Provider
        value={{
          score: score,
          selectedTopics: selectedTopics,
          currentTopic: currentTopic,
          quizUrl: quizURL,
          difficulty: difficulty,
          gameOver: gameOver,
          endGame: endGame,
          addPoint: addPoint,
          changeTopic: changeTopic,
          storeTopic: storeTopic,
          storeURL: storeURL,
          changeDifficulty: changeDifficulty,
          resetGame: resetGame,
          topScores: topScores,
          changeTopScores: changeTopScores,
        }}
      >
        <div className="body-container">
          <CSSTransition
            in={gameOver === true}
            classNames="fade"
            timeout={200}
            mountOnEnter
            unmountOnExit
            onEnter={changeTopScores}
          >
            <EndGameModal />
          </CSSTransition>
          <HeaderTopicList />
          <CSSTransition
            in={gameState === "select"}
            classNames="fade"
            timeout={300}
            unmountOnExit
            onExited={handleFadeIn}
          >
            <CatSelect handleFadeOut={handleFadeOut} />
          </CSSTransition>
          <CSSTransition
            in={gameState === "quiz"}
            classNames="fade"
            timeout={300}
            unmountOnExit
            onExited={handleFadeIn}
          >
            <GameBoard handleFadeOut={handleFadeOut} />
          </CSSTransition>
          <ScoreCard score={score} />
        </div>
      </GameContext.Provider>
      <Footer />
    </React.Fragment>
  );
}

export default App;
