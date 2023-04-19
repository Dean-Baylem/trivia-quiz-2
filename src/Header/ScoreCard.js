import React from "react";
import "./Header.css";
import { Paper } from "@mui/material";

const ScoreCard = (props) => {
  return (
    <div className="score-card">
      <Paper sx={{ height: "fit-content" }} elevation={3}>
        <div className="topic-list-container">
          <div className="topic-title">
            <p>Score</p>
            <hr className="topic-horizontal-line"></hr>
          </div>
          <div className="score-number">
            <p>{props.score}</p>
          </div>
        </div>
      </Paper>
    </div>
  );
};

export default ScoreCard;
