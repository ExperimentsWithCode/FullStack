import { receiveCurrentUser, receiveErrors } from '../actions/session_actions';

export const index = () => {
  return $.ajax({
    method: 'GET',
    url: '/api/questions'
  });
};

export const create = (question) => {
  return $.ajax({
    method: 'POST',
    url: '/api/questions',
    data: {question}
  });
};

export const update = (question) => {
  return $.ajax({
    method: 'PATCH',
    url: '/api/questions',
    data: {question}
  });
};

export const show = ({id}) => {
  return $.ajax({
    method: 'POST',
    url: `/api/questions/${id}`
  });
};

export const destroy = ({id}) => {
  return $.ajax({
    method: 'DELETE',
    url: `/api/questions/${id}`
  });
};
