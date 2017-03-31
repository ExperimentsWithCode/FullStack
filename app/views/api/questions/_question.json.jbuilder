json.extract! question, :id, :title, :body, :author_id, :created_at, :updated_at
json.author do
  json.extract! question.author, :id, :username
end
json.answers do
  json.array! question.answers, partial: 'api/answers/answer', as: :answer
end
json.vote_count  question.votes.sum(:value)
json.votes do
  json.array! question.votes, partial: 'api/votes/vote', as: :vote
end
tempQuestion = question.answers.first(1)[0]
if tempQuestion
  json.last_active tempQuestion.updated_at
else
  json.last_active DateTime.new(0, 1, 1, 1, 1)
end
