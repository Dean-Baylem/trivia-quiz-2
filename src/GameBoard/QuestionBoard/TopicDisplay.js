import React from "react";
import "./TopicDisplay.css";

const TopicDisplay = (props) => {
  return (
    <div className="topic-container">
      <div className="topic-display">
        <h5>The topic name goes here</h5>
      </div>
      <div className="Question counter">
        <h5>n / 5</h5>
      </div>
    </div>
  );
};

export default TopicDisplay;