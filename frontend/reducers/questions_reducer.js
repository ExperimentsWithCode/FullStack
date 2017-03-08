import { RECEIVE_QUESTIONS, RECEIVE_CURRENT_QUESTION, REMOVE_CURRENT_QUESTION, RECEIVE_QUESTION_ERRORS } from '../actions/question_actions';

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
      return merge({}, _nullQuestion, {
        currentQuestion
      });
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

export default QuestionsReducer;
