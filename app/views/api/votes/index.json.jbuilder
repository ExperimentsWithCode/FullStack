json.array! @votes do |vote|
  json.partial! '/api/votes/vote', vote: vote
end
