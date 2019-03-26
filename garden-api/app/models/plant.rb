class Plant < ApplicationRecord
    has_many :bed_plants
    has_many :garden_beds, through: :bed_plants

    def soil_delta(soil_int)
        #calculate difference as absolute value
        (self.soil - soil_int).abs
    end
end
