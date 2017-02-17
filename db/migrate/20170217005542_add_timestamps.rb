class AddTimestamps < ActiveRecord::Migration[5.0]
  def change
    add_timestamps(:users, default: Time.now)
    add_timestamps(:questions, default: Time.now )
  end
end
