import React from "react";
import { ButtonBase } from "@mui/material";
import "./CategoryCard.css";

const CategoryCard = props => {

  const handleClick = () => {
    props.handleTopicSelect(props.category, props.url)
  }

    return (
      <ButtonBase>
        <div className="category-card" onClick={handleClick}>
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