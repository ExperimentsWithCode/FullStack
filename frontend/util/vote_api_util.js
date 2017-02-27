export const index = () => {
  return $.ajax({
    method: 'GET',
    url: '/api/votes'
  });
};

export const create = (vote) => {
  return $.ajax({
    method: 'POST',
    url: '/api/votes',
    data: {vote}
  });
};

export const update = (vote) => {
  return $.ajax({
    method: 'PATCH',
    url: '/api/votes',
    data: {vote}
  });
};

export const show = (id) => {
  return $.ajax({
    method: 'GET',
    url: `/api/votes/${id}`
  });
};

export const destroy = ({id}) => {
  return $.ajax({
    method: 'DELETE',
    url: `/api/votes/${id}`
  });
};
