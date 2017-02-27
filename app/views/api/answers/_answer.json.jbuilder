json.extract! answer, :id, :body, :author_id, :question_id,  :created_at, :updated_at
json.author do
  json.extract! answer.author, :id, :username
end

json.vote_count  answer.votes.sum(:value)
json.votes do
  json.array! answer.votes, partial: 'api/votes/vote', as: :vote
end
