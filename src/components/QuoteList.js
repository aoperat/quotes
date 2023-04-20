import React, { useState, useEffect } from 'react';
import quotes from '../quotes.json';
import './QuoteList.css';

const QuoteList = () => {
  const [quoteList, setQuoteList] = useState([]);

  useEffect(() => {
    setQuoteList(quotes);
  }, []);

  const copyToClipboard = (quote) => {
    navigator.clipboard.writeText(quote).then(
      () => {
        alert(`복사 완료:\r\n"${quote}"`);
      },
      (err) => {
        alert('복사 실패');
      },
    );
  };

  return (
    <div className="container quote-container">
      <h1 className="display-4 text-center mb-4">명언 모음</h1>
      <div className="row">
        {quoteList.map((quote, index) => (
          <div
            key={index}
            className="col-md-6 col-lg-4 mb-4"
            onClick={() => copyToClipboard(`${quote.quote} \r\n -${quote.author}-`)}
          >
            <div className="card h-100">
              <div className="card-body">
                <blockquote className="blockquote mb-0">
                  <p>{quote.quote}</p>
                  <footer className="blockquote-footer">{quote.author}</footer>
                </blockquote>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};


export default QuoteList;
