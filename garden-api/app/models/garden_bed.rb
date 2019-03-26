class GardenBed < ApplicationRecord
    has_many :bed_plants
    has_many :plants, through: :bed_plants
end
