class SuggestController < ApplicationController
    def show
        @bed = GardenBed.find(params[:id])
        
        #This is pretty bare bones
        #It would be nice to return results sorted by compatibility, sort by soil type?

        @suggest_plants = Plant.where(sun: @bed.sun).sort_by{|p| p.soil_delta(@bed.soil)}

        render json: @suggest_plants, status: :ok
    end
end