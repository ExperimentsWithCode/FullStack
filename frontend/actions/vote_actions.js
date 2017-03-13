import * as APIUtil from '../util/vote_api_util';


export const RECEIVE_CURRENT_VOTE = "RECEIVE_CURRENT_VOTE";
export const REMOVE_CURRENT_VOTE = "REMOVE_CURRENT_VOTE";
export const RECEIVE_VOTES = "RECEIVE_VOTES";
export const RECEIVE_VOTE_ERRORS = "RECEIVE_VOTE_ERRORS";

export const index = currentVote => dispatch => (
  APIUtil.index()
    .then(votes => dispatch(receiveVotes(votes)),
      err => dispatch(receiveVoteErrors(err.responseJSON)))
);

export const create = currentVote => dispatch => (
  APIUtil.create(currentVote)
    .then(currentVote => dispatch(receiveCurrentVote(currentVote)),
      err => dispatch(receiveVoteErrors(err.responseJSON)))
);

export const update = currentVote => dispatch => (
  APIUtil.update(currentVote)
    .then(currentVote => dispatch(receiveCurrentVote(currentVote)),
      err => dispatch(receiveVoteErrors(err.responseJSON)))
);

export const show = currentVote => dispatch => (
  APIUtil.show(currentVote)
    .then(currentVote => dispatch(receiveCurrentVote(currentVote)),
      err => dispatch(receiveVoteErrors(err.responseJSON)))
);

export const destroy = currentVote => dispatch => (
  APIUtil.destroy(currentVote)
    .then(currentVote => dispatch(removeCurrentVote(currentVote)),
      err => dispatch(receiveVoteErrors(err.responseJSON)))
);

export const receiveCurrentVote = currentVote => {
  return {
  type: RECEIVE_CURRENT_VOTE,
  currentVote};
};

export const receiveVote = votes => {
  return {
  type: RECEIVE_VOTES,
  votes
}};

export const removeCurrentVote = currentVote => ({
  type: REMOVE_CURRENT_VOTE,
  currentVote
});

export const receiveVoteErrors = errors => ({
  type: RECEIVE_VOTE_ERRORS,
  errors
});
