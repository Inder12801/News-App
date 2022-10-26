import React from "react";

const NewsCards = ({ articles }) => {
  return (
    <div>
      {articles.map((article, i) => {
        return (
          <div>
            <h2>{article.title}</h2>
            <p>{article.date}</p>
          </div>
        );
      })}
    </div>
  );
};

export default NewsCards;
