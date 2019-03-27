class BedPlantsController < ApplicationController
    def create
        @bed = GardenBed.find(params[:bed_id])
        @plant = Plant.find(params[:plant_id])
        @bed.plants << @plant
        render json: @bed.to_json(include: :plants), status: :ok
    end

    def destroy
        @bedplant = BedPlant.find(params[:id])
        @bedplant.destroy
        render json: @bedplant, status: :ok
    end
end