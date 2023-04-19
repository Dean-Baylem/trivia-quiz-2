import React from "react";
import "./HeaderTopicListItem.css";

const HeaderTopicListItem = props => {
    return <li className="topic-list-item">{props.content}</li>;
}

export default HeaderTopicListItem;