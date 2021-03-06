import * as APIUtil from '../util/answer_api_util';


export const RECEIVE_CURRENT_ANSWER = "RECEIVE_CURRENT_ANSWER";
export const REMOVE_CURRENT_ANSWER = "REMOVE_CURRENT_ANSWER";
export const RECEIVE_ANSWERS = "RECEIVE_ANSWERS";
export const RECEIVE_ANSWER_ERRORS = "RECEIVE_ANSWER_ERRORS";
export const SORT_ANSWERS_OLDEST = "SORT_ANSWERS_OLDEST"
export const SORT_ANSWERS_VOTES = "SORT_ANSWERS_VOTES"
export const SORT_ANSWERS_ACTIVE = "SORT_ANSWERS_ACTIVE"

export const index = currentAnswer => dispatch => (
  APIUtil.index()
    .then(answers => dispatch(receiveAnswers(answers)),
      err => dispatch(receiveAnswerErrors(err.responseJSON)))
);

export const create = currentAnswer => dispatch => (
  APIUtil.create(currentAnswer)
    .then(currentAnswer => dispatch(receiveCurrentAnswer(currentAnswer)),
      err => dispatch(receiveAnswerErrors(err.responseJSON)))
);

export const update = currentAnswer => dispatch => (
  APIUtil.update(currentAnswer)
    .then(currentAnswer => dispatch(receiveCurrentAnswer(currentAnswer)),
      err => dispatch(receiveAnswerErrors(err.responseJSON)))
);

export const show = currentAnswer => dispatch => (
  APIUtil.show(currentAnswer)
    .then(currentAnswer => dispatch(receiveCurrentAnswer(currentAnswer)),
      err => dispatch(receiveAnswerErrors(err.responseJSON)))
);

export const destroy = currentAnswer => dispatch => (
  APIUtil.destroy(currentAnswer)
    .then(currentAnswer => dispatch(receiveCurrentAnswer(currentAnswer)),
      err => dispatch(receiveAnswerErrors(err.responseJSON)))
);

export const receiveCurrentAnswer = currentAnswer => {
  return {
  type: RECEIVE_CURRENT_ANSWER,
  currentAnswer};
};

export const receiveAnswer = answers => {
  return {
  type: RECEIVE_ANSWERS,
  answers
}};

export const removeCurrentAnswer = currentAnswer => ({
  type: REMOVE_CURRENT_ANSWER,
  currentAnswer
});

export const receiveAnswerErrors = errors => ({
  type: RECEIVE_ANSWER_ERRORS,
  errors
});


export const sortAnswersActive = errors => {
  return (
  {
    type: SORT_ANSWERS_ACTIVE,
    errors
  });
}

export const sortAnswersVotes = errors => ({
  type: SORT_ANSWERS_VOTES,
  errors
});

export const sortAnswersOldest = errors => ({
  type: SORT_ANSWERS_OLDEST,
  errors
});
