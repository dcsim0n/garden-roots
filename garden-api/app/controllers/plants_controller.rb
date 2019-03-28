class PlantsController < ApplicationController
    
    def index
        @plants = Plant.all

        render json: @plants, status: :ok
    end
    def show
        @plant = Plant.find(params[:id])
        #FIX-ME: Should a plant return all beds asscociated with it?
        render json: @plant, status: :ok
    end
end