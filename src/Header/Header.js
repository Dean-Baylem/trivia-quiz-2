import React from "react";
import "./Header.css";
import HeaderTopicList from "./HeaderTopicList";

const Header = () => {
    return (
      <header className="trivia-header">
      <HeaderTopicList />
        <div className="score-card-container">
            <div className="score-title">
                <p>Score</p>
            </div>
            <div className="score-number">
                <p>5</p>
            </div>
        </div>
      </header>
    );
}

export default Header;