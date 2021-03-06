export const index = (query) => {
  query = query ? query : false
  return $.ajax({
    method: 'GET',
    url: '/api/questions',
    data: {query}
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
    url: `/api/questions/${question.id}`,
    data: {question}
  });
};

export const show = (id) => {
  return $.ajax({
    method: 'GET',
    url: `/api/questions/${id}`
  });
};

export const destroy = ({id}) => {
  return $.ajax({
    method: 'DELETE',
    url: `/api/questions/${id}`
  });
};
