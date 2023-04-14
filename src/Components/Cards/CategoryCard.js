import React from "react";
import { ButtonBase } from "@mui/material";
import "./CategoryCard.css";

const CategoryCard = props => {
    return (
      <ButtonBase>
        <div className="category-card">
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