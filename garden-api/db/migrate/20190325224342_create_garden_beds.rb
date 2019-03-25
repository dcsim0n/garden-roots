class CreateGardenBeds < ActiveRecord::Migration[5.2]
  def change
    create_table :garden_beds do |t|
      t.string :name
      t.integer :sun
      t.integer :soil
      t.timestamps
    end
  end
end
