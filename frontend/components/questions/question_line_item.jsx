import React from 'react';
import { Link } from 'react-router';
import AuthorBoxDisplay from '../user_box/author_box_display'


const QuestionLineItem = ({ question, router }) => {
  return (
  <li className="questions-list-item">
    <div className="question-stat-bar">
      <div className="question-stat">
        <span className="list-view-score">{question.vote_count}</span>
        <span className="list-view-label">votes</span>
      </div>
      <div className={`question-stat${
          question.answer_count > 0 ? " answered" : ""}`}>
        <span className="list-view-score">{question.answer_count}</span>
        <span className="list-view-label">answers</span>
      </div>
    </div>
    <div className="question-summary">
      <Link to={`/question/${question.id}`}>
        <span>{question.title}</span>
      </Link>
      <p>{question.body.substring(0,200)}</p>
      { AuthorBoxDisplay(question.author, question.created_at, true )}
    </div>

  </li>
);}

export default QuestionLineItem;
