class CreatePlants < ActiveRecord::Migration[5.2]
  def change
    create_table :plants do |t|
      t.string :name
      t.integer :sun
      t.integer :soil
      t.integer :water
      t.boolean :perinnial
      t.string :bloom_period
      t.integer :height
      t.string :color

      t.timestamps
    end
  end
end
