json.extract! question, :id, :title, :body, :author_id, :created_at, :updated_at
json.author do
  json.extract! question.author, :id, :username
end
json.answer_count  question.answers.length
tempQuestion = question.answers.order('created_at desc').first(1)[0]
if tempQuestion
  json.last_active question.answers.order('created_at desc').first(1)[0].updated_at
else
  json.last_active DateTime.new(0, 1, 1, 1, 1)
end
