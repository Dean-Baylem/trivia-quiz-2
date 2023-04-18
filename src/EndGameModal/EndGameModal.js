import React, { useContext, useState } from "react";
import { GameContext } from "../Context/GameContext";
import ReactDOM from "react-dom";
import { CSSTransition } from "react-transition-group";
import Backdrop from "./Backdrop";
import { Button } from "@mui/material";
import ModalForm from "./ModalForm";

import "./EndGameModal.css";
import ModalHeader from "./ModalHeader";

const ModalOverlay = (props) => {
  const game = useContext(GameContext);
  const [startSave, setStartSave] = useState(false);
  const [saveFinished, setSaveFinished] = useState(false);

  const handleStartSave = () => {
    setStartSave(!startSave);
  };

  const content = (
    <div className="modal-container">
      <ModalHeader>
        <h2>Trivia Quiz - Game Over</h2>
      </ModalHeader>
      <div className="modal-content">
        <div className="modal-token-container">
          <img
            src="https://cdn-icons-png.flaticon.com/512/1248/1248716.png?w=826&t=st=1681795258~exp=1681795858~hmac=661ca79189a810865e0217e3c0f063f327e5ff7ab53e0f4d2dfe8fc34412699d"
            alt="finished"
          />
        </div>
        {!startSave && <p>You got a score of {props.score}</p>}
        {saveFinished && (
          <p>Thank you for playing! Your score has been saved!</p>
        )}
        {startSave && (
          <ModalForm
            score={game.score}
            setStartSave={setStartSave}
            setSaveFinished={setSaveFinished}
          />
        )}
      </div>
      <footer className="modal-footer">
        {!startSave && (
          <Button onClick={game.resetGame} size="small" variant="contained">
            Start Again
          </Button>
        )}
        {!startSave && !saveFinished && (
          <Button onClick={handleStartSave} size="small" variant="outlined">
            Save Score
          </Button>
        )}
        {startSave && (
          <Button form="saveForm" variant="contained" type="submit">
            Submit Score
          </Button>
        )}
        {startSave && (
          <Button onClick={handleStartSave} variant="outlined">
            Go Back
          </Button>
        )}
      </footer>
    </div>
  );
  return ReactDOM.createPortal(content, document.getElementById("modal-hook"));
};

const EndGameModal = (props) => {
  const game = useContext(GameContext);

  return (
    <React.Fragment>
      {game.gameOver === true && <Backdrop />}
      <CSSTransition
        in={game.gameOver === true}
        mountOnEnter
        unmountOnExit
        timeout={200}
        classNames="modal"
      >
        <ModalOverlay {...props} score={game.score} />
      </CSSTransition>
    </React.Fragment>
  );
};

export default EndGameModal;
