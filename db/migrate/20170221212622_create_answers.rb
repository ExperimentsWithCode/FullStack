class CreateAnswers < ActiveRecord::Migration[5.0]
  def change
    create_table :answers do |t|
      t.integer :author_id, null: false
      t.integer :question_id, null: false
      t.text :body, null: false
    end
  end
end
