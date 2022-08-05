class CreateLends < ActiveRecord::Migration[7.0]
  def change
    create_table :lends do |t|
      t.integer :user_id
      t.string :image_url
      t.string :type
      t.integer :amount
      t.date :from

      t.timestamps
    end
  end
end
