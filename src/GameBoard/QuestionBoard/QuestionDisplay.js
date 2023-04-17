import React, {useContext} from "react";
import { QuestionContext } from "../../Context/QuestionContext";
import "./QuestionDisplay.css";

const QuestionDisplay = props => {

  const questionManager = useContext(QuestionContext);

    return (
      <div className="question-container">
        <div className="question-display">
          <h3>{!questionManager.loadingQuestion && questionManager.currentQuestion.question.text}</h3>
        </div>
      </div>
    );
}

export default QuestionDisplay;