import React, { useState, useEffect } from 'react';
import quotes from '../quotes.json';

const QuoteList = () => {
  const [quoteList, setQuoteList] = useState([]);

  useEffect(() => {
    setQuoteList(quotes);
  }, []);

  return (
    <div className="container">
      <h1>명언 모음</h1>
      <ul className="list-group">
        {quoteList.map((quote, index) => (
          <li key={index} className="list-group-item">
            <blockquote>
              <p>{quote.quote}</p>
              <footer className="blockquote-footer">{quote.author}</footer>
            </blockquote>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default QuoteList;
