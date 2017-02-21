import { RECEIVE_QUESTIONS } from '../actions/question_actions';

import merge from 'lodash/merge';

const _nullQuestion = Object.freeze({
  currentQuestion: {},
  questions: {},
  errors: []
});



const QuestionsReducer = (state = _nullQuestion, action) => {
  Object.freeze(state);
  switch(action.type) {
    case RECEIVE_QUESTIONS:
      return {questions: action.questions}
    default:
      return state;
  }
};

export default QuestionsReducer;
