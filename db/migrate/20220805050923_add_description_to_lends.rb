class AddDescriptionToLends < ActiveRecord::Migration[7.0]
  def change
    add_column :lends, :description, :string
  end
end
