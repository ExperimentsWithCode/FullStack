import {
  RECEIVE_CURRENT_ANSWER,
  REMOVE_CURRENT_ANSWER,
  RECEIVE_ANSWERS,
  RECEIVE_ANSWER_ERRORS } from '../actions/answer_actions';
import merge from 'lodash/merge';

const _nullAnswer = Object.freeze({
  currentAnswer: {},
  answers: {},
  errors: []
});



const AnswerReducer = (state = _nullAnswer, action) => {
  Object.freeze(state);
  switch(action.type) {
    case RECEIVE_CURRENT_ANSWER:
      // const currentAnswer = action.currentAnswer;
      const newAnswer = {[action.currentAnswer.id]: action.currentAnswer};
      return merge({}, state, {
        newAnswer
      });
    case RECEIVE_ANSWERS:
      return {questions: action.answers}
    case REMOVE_CURRENT_ANSWER:
      return merge({}, _nullAnswer);
    case RECEIVE_ANSWER_ERRORS:
      const errors = action.errors;
      return Object.assign({}, state, {errors});
    default:
      return state;
  }
};

export default AnswerReducer;
