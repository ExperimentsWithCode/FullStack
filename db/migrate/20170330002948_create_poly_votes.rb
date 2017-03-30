class CreatePolyVotes < ActiveRecord::Migration[5.0]
  def change
    create_table :votes do |t|
      t.integer :value, default: 1
      t.integer :ref_id, null: false
      t.string :ref_type, null: false
      t.timestamps
    end
  end
end
