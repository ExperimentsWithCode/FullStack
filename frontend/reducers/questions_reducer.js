import { RECEIVE_QUESTIONS, RECEIVE_CURRENT_QUESTION,
  REMOVE_CURRENT_QUESTION, RECEIVE_QUESTION_ERRORS,
  SORT_QUESTIONS } from '../actions/question_actions';
import {
    SORT_ANSWERS_OLDEST,
    SORT_ANSWERS_VOTES,
    SORT_ANSWERS_ACTIVE } from '../actions/answer_actions';
import { selectAllQuestions, selectAllAnswers } from './selectors.js';

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
  let tempState
  switch(action.type) {
    case RECEIVE_QUESTIONS:
      tempState = merge({}, state)
      tempState.questions =  action.questions
      return tempState;
    case RECEIVE_CURRENT_QUESTION:
      // const test = merge({}, state, { currentQuestion: action.currentQuestion});
      tempState = merge({}, state)
      tempState.currentQuestion = action.currentQuestion
      return tempState
      // return merge({}, state, { currentQuestion: action.currentQuestion});
    case REMOVE_CURRENT_QUESTION:
      return merge({}, state);
    case RECEIVE_QUESTION_ERRORS:
      tempState = merge({}, state)
      tempState.errors = action.errors
      return tempState
    case SORT_QUESTIONS:
      return {questions: selectAllQuestions(state, action.sort)}
    case SORT_ANSWERS_ACTIVE:
      tempState = merge({}, state)
      tempState.currentQuestion.answers = selectAllAnswers(state, "active")
      return tempState
    case SORT_ANSWERS_OLDEST:
      tempState = merge({}, state)
      tempState.currentQuestion.answers = selectAllAnswers(state, "oldest")
      return tempState
    case SORT_ANSWERS_VOTES:
      tempState = merge({}, state)
      tempState.currentQuestion.answers = selectAllAnswers(state, "votes")
      return tempState
    default:
      return state;
  }
};

export default QuestionsReducer;
