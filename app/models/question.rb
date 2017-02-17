class Question < ActiveRecord::Base

  attr_reader :password
  attr_reader :confirm

  validates :title, :body, presence: true, uniqueness: true
  validates :author_id, presence: true
  validates :body, length: {minimum: 40}
  validates :password, length: {minimum:6, allow_nil: true }

  belongs_to(
  :author,
  class_name: "User",
  foreign_key: :author_id,
  primary_key: :id
  )
end
