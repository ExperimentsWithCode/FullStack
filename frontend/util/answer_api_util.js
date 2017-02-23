import { receiveCurrentUser, receiveQuestionErrors } from '../actions/session_actions';

export const index = () => {
  return $.ajax({
    method: 'GET',
    url: '/api/answers'
  });
};

export const create = (answer) => {
  return $.ajax({
    method: 'POST',
    url: '/api/answers',
    data: {answer}
  });
};

export const update = (answer) => {
  return $.ajax({
    method: 'PATCH',
    url: '/api/answers',
    data: {answer}
  });
};

export const show = (id) => {
  return $.ajax({
    method: 'GET',
    url: `/api/answers/${id}`
  });
};

export const destroy = ({id}) => {
  return $.ajax({
    method: 'DELETE',
    url: `/api/answers/${id}`
  });
};
