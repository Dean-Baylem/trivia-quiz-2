import React, { useContext } from "react";
import { GameContext } from "../../Context/GameContext";
import { ButtonBase } from "@mui/material";
import "./CategoryCard.css";

const CategoryCard = props => {

  const game = useContext(GameContext);

  const handleClick = () => {
    props.handleTopicSelect(props.category, props.url)
  }

    return (
      <ButtonBase disabled={game.selectedTopics.includes(props.category) ? true : false}>
        <div className={game.selectedTopics.includes(props.category) ? "category-card used-card": "category-card"} onClick={handleClick}>
          <div className="token-container">
            <img className="category-token" src={props.token} alt="icon"></img>
          </div>
          <div className="category-name">
            <h5>{props.category}</h5>
          </div>
        </div>
      </ButtonBase>
    );
}

export default CategoryCard;