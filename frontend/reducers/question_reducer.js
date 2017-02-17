import {
  RECEIVE_CURRENT_QUESTION,
  RECEIVE_QUESTIONS,
  REMOVE_CURRENT_QUESTION,
  RECEIVE_QUESTION_ERRORS } from '../actions/question_actions';

import merge from 'lodash/merge';

const _nullQuestion = Object.freeze({
  currentQuestion: {},
  questions: {},
  errors: []
});



const QuestionReducer = (state = _nullQuestion, action) => {
  Object.freeze(state);
  switch(action.type) {
    case RECEIVE_CURRENT_QUESTION:
      const currentQuestion = action.currentQuestion;
      return merge({}, _nullQuestion, {
        currentQuestion
      });
    case RECEIVE_QUESTIONS:
      const questions = action.questions;
      return questions
    case REMOVE_CURRENT_QUESTION:
      return merge({}, _nullQuestion);
    case RECEIVE_QUESTION_ERRORS:
      const errors = action.errors;
      return merge({}, _nullQuestion, {
        errors
      });
    default:
      return state;
  }
};

export default QuestionReducer;
