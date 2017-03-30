class Question < ActiveRecord::Base
  include PgSearch
  # multisearchable :against => [:body, :title]
  pg_search_scope :search,
  against: [:title, :body],
  using: [:tsearch, :trigram, :dmetaphone]

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

  has_many(
  :answers,
  -> {order('created_at desc')},
  class_name: "Answer",
  foreign_key: :question_id,
  primary_key: :id
  )
end
