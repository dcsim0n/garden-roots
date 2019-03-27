class GardenBedsController < ApplicationController
    def create
        #Do some params
        @new_bed = GardenBed.new(bed_params)
        if (@new_bed.save)
            render json: @new_bed, status: :ok
        else
            render json: @new_bed.errors.full_messages, status: :unprocessable_entity
            ## !!FIX ME!!: Add error handling ##
        end
    end

    def destroy
        @bed = GardenBed.find(params[:id])
        @bed.destroy()
        render json: @bed, status: :ok
    end
    
    def index
        @beds = GardenBed.all
        render json: @beds, status: :ok
    end

    def show
        @bed = GardenBed.find(params[:id])
        #The show route will return detials about the bed,
        #More importantly will return all associated plants
        render json: @bed.to_json(include: :plants), status: :ok
    end


    private
    def bed_params
        params.permit(["name", "sun", "soil"])
    end
end