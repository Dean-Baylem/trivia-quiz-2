import React, { useContext, useState, useEffect } from "react";
import useSound from 'use-sound';
import correctSound from '../../media/audio/correct.mp3';
import wrongSound from '../../media/audio/wrong.mp3';
import { QuestionContext } from "../../Context/QuestionContext";
import { ButtonBase } from "@mui/material";
import "./AnswerCard.css";

const AnswerCard = props => {


  const [correct, setCorrect] = useState();
  const [clicked, setClicked] = useState(false);

  const questionManager = useContext(QuestionContext);

  const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

  useEffect(() => {
    if (questionManager.correctAnswer === props.option) {
      setCorrect(true);
    } else {
      setCorrect(false);
    }
  }, [props.option])

  const [playCorrect] = useSound(correctSound, { volume: 0.3 });
  const [playWrong] = useSound(wrongSound, { volume: 0.3 });


  const handleClick = async () => {
    if (correct === true) {
      playCorrect();
    } else {
      playWrong();
    }
    setClicked(true);
    await delay(1000);
    setClicked(false);
    await props.handleChoice(props.option);
  }

    return (
      <ButtonBase sx={{ display: "block" }}>
        <li
          onClick={handleClick}
          className={
            "base-answer-card " +
            (clicked === true
              ? `${correct === true ? "correct" : "incorrect"}`
              : "answer-card")
          }
        >
          <div className="option-marker">
            <p>{props.counter}</p>
          </div>
          <div className="option-text">
            <p>{props.option}</p>
          </div>
        </li>
      </ButtonBase>
    );
}

export default AnswerCard;