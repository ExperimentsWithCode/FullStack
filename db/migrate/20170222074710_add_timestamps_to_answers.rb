class AddTimestampsToAnswers < ActiveRecord::Migration[5.0]
  def change
      change_table(:answers) { |t| t.timestamps }
  end
end
