import React from 'react';
import { Link } from 'react-router';

const QuestionLineItem = ({ question, router }) => (
  <li className="questions-list-item">
    <div className="question-stat-bar">
      <span className="list-view-score">0</span>
      <span className="list-view-label">answers</span>
    </div>
    <div className="question-summary">
      <Link to={`/question/${question.id}`}>
        <span>{question.title}</span>
      </Link>
      <p>{question.body.substring(0,200)}</p>
    </div>
  </li>
);

export default QuestionLineItem;
