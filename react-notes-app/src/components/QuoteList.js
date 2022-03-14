import React from "react";
import Quote from "./Quote";

const QuoteList = function (props) {
  return (
    <div className="quoteList">
      {
          props.quotes.map((phrase) => (
        <Quote quote={phrase.quote} author={phrase.author} />
      ))}
    </div>
  );
};
export default QuoteList;
