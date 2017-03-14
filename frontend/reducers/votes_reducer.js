import {
  RECEIVE_CURRENT_VOTE,
  REMOVE_CURRENT_VOTE,
  RECEIVE_VOTES,
  RECEIVE_VOTE_ERRORS } from '../actions/vote_actions';

import merge from 'lodash/merge';

const _nullVote = Object.freeze({
  currentVote: {},
  votes: [],
  errors: []
});



const VoteReducer = (state = _nullVote, action) => {
  Object.freeze(state);
  switch(action.type) {
    case RECEIVE_CURRENT_VOTE:
      // const currentVote = action.currentVote;
      const newVote = {[action.currentVote.id]: action.currentVote};
      return merge({}, state, {newVote});
    case RECEIVE_VOTES:
      return {questions: action.votes}
    case REMOVE_CURRENT_VOTE:
      let test = merge({}, state)
      return merge({}, state);
    case RECEIVE_VOTE_ERRORS:
      const errors = action.errors;
      return merge({}, state, {
        errors
      });
    default:
      return state;
  }
};

export default VoteReducer;
