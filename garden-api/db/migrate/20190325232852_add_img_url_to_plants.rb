class AddImgUrlToPlants < ActiveRecord::Migration[5.2]
  def change
    add_column :plants, :img_1_url, :string
  end
end
