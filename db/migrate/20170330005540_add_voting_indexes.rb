class AddVotingIndexes < ActiveRecord::Migration[5.0]
  def change
    add_index :votes, [:ref_type, :ref_id]
  end
end
