class Answer < ActiveRecord::Base
  validates :author_id, :question_id, presence: true
  validates :body, length: {minimum: 40}


  belongs_to(
  :author,
  class_name: "User",
  foreign_key: :author_id,
  primary_key: :id
  )

  belongs_to(
  :question,
  class_name: "Question",
  foreign_key: :question_id,
  primary_key: :id
  )
end
