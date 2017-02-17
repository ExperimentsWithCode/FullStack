import * as APIUtil from '../util/question_api_util';


export const RECEIVE_CURRENT_QUESTION = "RECEIVE_CURRENT_QUESTION";
export const REMOVE_CURRENT_QUESTION = "REMOVE_CURRENT_QUESTION";
export const RECEIVE_QUESTIONS = "RECEIVE_QUESTIONS";
export const RECEIVE_ERRORS = "RECEIVE_ERRORS";

export const index = currentQuestion => dispatch => (
  APIUtil.index()
    .then(questions => dispatch(receiveQuestions(questions)),
      err => dispatch(receiveErrors(err.responseJSON)))
);

export const create = currentQuestion => dispatch => (
  APIUtil.create(currentQuestion)
    .then(currentQuestion => dispatch(receiveCurrentQuestion(currentQuestion)),
      err => dispatch(receiveErrors(err.responseJSON)))
);

export const update = currentQuestion => dispatch => (
  APIUtil.update(currentQuestion)
    .then(currentQuestion => dispatch(receiveCurrentQuestion(currentQuestion)),
      err => dispatch(receiveErrors(err.responseJSON)))
);

export const show = currentQuestion => dispatch => (
  APIUtil.show(currentQuestion)
    .then(currentQuestion => dispatch(receiveCurrentQuestion(currentQuestion)),
      err => dispatch(receiveErrors(err.responseJSON)))
);

export const destroy = currentQuestion => dispatch => (
  APIUtil.destroy(currentQuestion)
    .then(currentQuestion => dispatch(receiveCurrentQuestion(currentQuestion)),
      err => dispatch(receiveErrors(err.responseJSON)))
);

export const receiveCurrentQuestion = currentQuestion => {
  return {
  type: RECEIVE_CURRENT_QUESTION,
  currentQuestion};
};

export const receiveQuestions = Questions => ({
  type: RECEIVE_QUESTIONS,
  Questions
});

export const removeCurrentQuestion = currentQuestion => ({
  type: REMOVE_CURRENT_QUESTION,
  currentQuestion
});

export const receiveErrors = errors => ({
  type: RECEIVE_ERRORS,
  errors
});
