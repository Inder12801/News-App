import React from "react";
import NewsCard from "../NewsCard/NewsCard";

const NewsCards = ({ articles }) => {
  console.log(articles);
  return (
    <div>
      {articles.map((article, i) => {
        return <NewsCard />;
      })}
    </div>
  );
};

export default NewsCards;
