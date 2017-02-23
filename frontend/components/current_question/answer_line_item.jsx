import React from 'react';
import { Link } from 'react-router';
import AuthorBoxDisplay from '../user_box/author_box_display'


const AnswerLineItem = ({ answer, router }) => (
  <li className="questions-list-item">
    <div className="question-stat-bar">
      <span className="list-view-score">0</span>
      <span className="list-view-label">answers</span>
    </div>
    <div className="question-summary">
      <p>{answer.body}</p>
      { AuthorBoxDisplay(answer.author, answer.created_at, true )}
    </div>
  </li>
);

export default AnswerLineItem;
