class AddUserAssociationToVotes < ActiveRecord::Migration[5.0]
  def change
    add_column :votes, :user_id, :integer, null: false
  end
end
