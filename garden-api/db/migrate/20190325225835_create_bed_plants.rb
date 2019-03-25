class CreateBedPlants < ActiveRecord::Migration[5.2]
  def change
    create_table :bed_plants do |t|
      t.belongs_to :plant
      t.belongs_to :bed
      t.timestamps
    end
  end
end
