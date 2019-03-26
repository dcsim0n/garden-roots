class SuggestController < ApplicationController
    def show
        @bed = GardenBed.find(params[:id])
        
        render json: @bed, status: :ok
    end
end