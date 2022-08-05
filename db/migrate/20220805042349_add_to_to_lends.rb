class AddToToLends < ActiveRecord::Migration[7.0]
  def change
    add_column :lends, :to, :date
  end
end
