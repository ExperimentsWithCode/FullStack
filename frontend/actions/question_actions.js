import * as APIUtil from '../util/question_api_util';


export const RECEIVE_CURRENT_QUESTION = "RECEIVE_CURRENT_QUESTION";
export const REMOVE_CURRENT_QUESTION = "REMOVE_CURRENT_QUESTION";
export const RECEIVE_QUESTIONS = "RECEIVE_QUESTIONS";
export const RECEIVE_QUESTION_ERRORS = "RECEIVE_QUESTION_ERRORS";
export const SORT_QUESTIONS_NEWEST = "SORT_QUESTIONS_NEWEST"
export const SORT_QUESTIONS_ACTIVE = "SORT_QUESTIONS_ACTIVE"
export const SORT_QUESTIONS_VOTES = "SORT_QUESTIONS_VOTES"



export const index = query => dispatch => (
  APIUtil.index(query)
    .then(questions => dispatch(receiveQuestions(questions)),
      err => dispatch(receiveQuestionErrors(err.responseJSON)))
);

export const create = currentQuestion => dispatch => (
  APIUtil.create(currentQuestion)
    .then(currentQuestion => dispatch(receiveCurrentQuestion(currentQuestion)),
      err => dispatch(receiveQuestionErrors(err.responseJSON)))
);

export const update = currentQuestion => dispatch => (
  APIUtil.update(currentQuestion)
    .then(currentQuestion => dispatch(receiveCurrentQuestion(currentQuestion)),
      err => dispatch(receiveQuestionErrors(err.responseJSON)))
);

export const show = currentQuestion => dispatch => (
  APIUtil.show(currentQuestion)
    .then(currentQuestion => dispatch(receiveCurrentQuestion(currentQuestion)),
      err => dispatch(receiveQuestionErrors(err.responseJSON)))
);

export const destroy = currentQuestion => dispatch => (
  APIUtil.destroy(currentQuestion)
    .then(currentQuestion => dispatch(receiveCurrentQuestion(currentQuestion)),
      err => dispatch(receiveQuestionErrors(err.responseJSON)))
);

export const receiveCurrentQuestion = currentQuestion => {
  return {
  type: RECEIVE_CURRENT_QUESTION,
  currentQuestion};
};

export const receiveQuestions = questions => {
  return {
  type: RECEIVE_QUESTIONS,
  questions
}};

export const removeCurrentQuestion = currentQuestion => ({
  type: REMOVE_CURRENT_QUESTION,
  currentQuestion
});

export const receiveQuestionErrors = errors => ({
  type: RECEIVE_QUESTION_ERRORS,
  errors
});

export const sortQuestionsActive = errors => {
  return (
  {
    type: SORT_QUESTIONS_ACTIVE,
    errors
  });
}
export const sortQuestionsNewest = errors => ({
  type: SORT_QUESTIONS_NEWEST,
  errors
});
export const sortQuestionsVotes = errors => ({
  type: SORT_QUESTIONS_VOTES,
  errors
});
