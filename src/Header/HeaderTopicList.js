import React, { useContext } from "react";
import { GameContext } from "../Context/GameContext";
import { Paper } from "@mui/material";
import HeaderTopicListItem from "./HeaderTopicListItem";
import "./Header.css";

const HeaderTopicList = (props) => {
  const game = useContext(GameContext);

  return (
    <div className="prev-topics">
      <Paper sx={{ height: "fit-content" }} elevation={3}>
        <div className="topic-list-container">
          <div className="topic-title">
            <p>Previous Topics</p>
            <hr className="topic-horizontal-line"></hr>
          </div>
          <ul className="topic-list">
            {game.selectedTopics.map((topic, index) => (
              <HeaderTopicListItem content={topic} key={index} />
            ))}
          </ul>
        </div>
      </Paper>
    </div>
  );
};

export default HeaderTopicList;
