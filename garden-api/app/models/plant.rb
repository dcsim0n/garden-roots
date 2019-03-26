class Plant < ApplicationRecord
    has_many :bed_plants
    has_many :garden_beds, through: :bed_plants
end
