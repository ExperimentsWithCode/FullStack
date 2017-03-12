import { RECEIVE_QUESTIONS, RECEIVE_CURRENT_QUESTION,
  REMOVE_CURRENT_QUESTION, RECEIVE_QUESTION_ERRORS,
  SORT_QUESTIONS_ACTIVE, SORT_QUESTIONS_NEWEST } from '../actions/question_actions';
import { selectAllQuestions } from './selectors.js';

import merge from 'lodash/merge';

const _nullQuestion = Object.freeze({
  currentQuestion: {},
  questions: {},
  errors: []
});


const _nullCurrentQuestion = Object.freeze({
  answers : {}
});

const QuestionsReducer = (state = _nullQuestion, action) => {
  Object.freeze(state);
  switch(action.type) {
    case RECEIVE_QUESTIONS:
      return {questions: action.questions, currentQuestion: _nullCurrentQuestion}
    case RECEIVE_CURRENT_QUESTION:
      const currentQuestion = action.currentQuestion;
      return merge({}, state, {currentQuestion});
    case REMOVE_CURRENT_QUESTION:
      return merge({}, state);
    case RECEIVE_QUESTION_ERRORS:
      const errors = action.errors;
      return merge({}, state, {
        errors
      });
    case SORT_QUESTIONS_ACTIVE:
      return {questions: selectAllQuestions(state, "active"),
        currentQuestion: _nullCurrentQuestion}
    case SORT_QUESTIONS_NEWEST:
      return {questions: selectAllQuestions(state, "newest"),
        currentQuestion: _nullCurrentQuestion}
    default:
      return state;
  }
};

export default QuestionsReducer;
