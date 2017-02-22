json.array! @questions do |question|
  json.partial! '/api/questions/questions', question: question
end
