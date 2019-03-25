class ChangeBedplants < ActiveRecord::Migration[5.2]
  def change
    remove_column :bed_plants, :bed_id
    add_column :bed_plants, :garden_bed_id, :integer
  end
end
