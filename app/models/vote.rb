class Vote < ActiveRecord::Base
  validates :user_id, :votable_id, :votable_type, presence: true

  belongs_to(
  :user,
  class_name: "User",
  foreign_key: :user_id,
  primary_key: :id
  )

  belongs_to(
  :votable,
  polymorphic: true
  )
end
