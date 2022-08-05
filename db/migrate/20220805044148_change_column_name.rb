class ChangeColumnName < ActiveRecord::Migration[7.0]
  def change
    rename_column :lends, :type, :bike_type
  end
end
