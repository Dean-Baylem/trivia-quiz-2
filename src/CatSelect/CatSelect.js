import React, { useContext } from "react";
import { GameContext } from "../Context/GameContext";
import CategoryCard from "../Components/Cards/CategoryCard";
import "./CatSelect.css";

const categories = [
  {
    display: "Arts & Literature",
    url: "arts_and_literature",
    token:
      "https://cdn-icons-png.flaticon.com/512/43/43174.png?w=1060&t=st=1681460003~exp=1681460603~hmac=940a07559d1c572f08cffb33ac02d00dcb622316a33bd01229ab8108d5379f1a",
  },
  {
    display: "Film & TV",
    url: "film_and_tv",
    token:
      "https://cdn-icons-png.flaticon.com/512/49/49923.png?w=1060&t=st=1681459418~exp=1681460018~hmac=74af24a2c4634bc622d241c430dcd4e7be9a7413b8167bc421eaf35fed591f6b",
  },
  {
    display: "Food & Drink",
    url: "food_and_drink",
    token:
      "https://cdn-icons-png.flaticon.com/512/99/99260.png?w=1060&t=st=1681460031~exp=1681460631~hmac=b9981efb7a89eb496ac89acacae3528be1daf2ca28d55a756791dfe5175e0918",
  },
  {
    display: "General Knowledge",
    url: "general_knowledge",
    token:
      "https://cdn-icons-png.flaticon.com/512/765/765893.png?w=1060&t=st=1681460071~exp=1681460671~hmac=7fcbca964b78f14eeac8e31cc5d4a8fcaa09849a59fbb63ea487d6c7b12765d8",
  },
  {
    display: "History",
    url: "history",
    token:
      "https://cdn-icons-png.flaticon.com/512/43/43788.png?w=1060&t=st=1681460113~exp=1681460713~hmac=bab8ef424814d6c4dcd6c1bb16b317f2649d53cc054ba0a0d9ddd9bb11b82aed",
  },
  {
    display: "Music",
    url: "music",
    token:
      "https://cdn-icons-png.flaticon.com/512/1249/1249377.png?w=1060&t=st=1681460131~exp=1681460731~hmac=0bad83b162d7b070803edb3c801c9cdcc270c83e4f366b23abbd70ab4084995d",
  },
  {
    display: "Science",
    url: "science",
    token:
      "https://cdn-icons-png.flaticon.com/512/1128/1128055.png?w=1060&t=st=1681460157~exp=1681460757~hmac=f81db18961402c9f7a5c1e1d953192fd2effc83a9c775183175d3e70f79b25a6",
  },
  {
    display: "Society & Culture",
    url: "society_and_culture",
    token:
      "https://cdn-icons-png.flaticon.com/512/646/646503.png?w=1060&t=st=1681460180~exp=1681460780~hmac=0c9608308915dfbf50794638a1cd3413829d96677ecacb83b96497ce8872f949",
  },
  {
    display: "Sport & Leisure",
    url: "sport_and_leisure",
    token:
      "https://cdn-icons-png.flaticon.com/512/95/95780.png?w=1060&t=st=1681460216~exp=1681460816~hmac=70d340f69ac889270c5aa3d48d4d4f757cc08ef616108e19e09d0a67ca423d68",
  },
];

const CatSelect = props => {

  const game = useContext(GameContext)

    const handleTopicSelect = async (topic, url) => {
    game.changeTopic(topic);
    game.storeURL(url);
    game.storeTopic(topic);
    await game.changeDifficulty();
    props.handleFadeOut();
  }

  
    return (
      <div className="cat-select-container">
        <div className="select-title">
          <h3>Select a topic</h3>
        </div>
        <div className="category-card-container">
          {categories.map((category, index) => (
            <CategoryCard
              category={category.display}
              url={category.url}
              token={category.token}
              handleTopicSelect={handleTopicSelect}
              key={index}
            />
          ))}
        </div>
      </div>
    );
}

export default CatSelect;