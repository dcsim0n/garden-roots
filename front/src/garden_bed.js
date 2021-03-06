class GardenBed{
    constructor({id, name, sun, soil, plants}){
        Object.assign(this, {
            id,
            name,
            sun,
            soil,
            plants
        })
        this.container = document.createElement("div"),
        
        this.elements = {
            h: document.createElement("h3"),
            sun: document.createElement("p"),
            soil: document.createElement("p"),
            numOfPlants: document.createElement("p"),
            button: document.createElement("button")
        }
        
        //Configure elements here
        this.elements.h.innerHTML = this.name

        this.elements.sun.innerHTML = this.sun_str

        this.elements.soil.innerHTML = this.soil_str

        this.elements.button.innerText = "View Details"
        this.elements.button.className = "ui button"
        this.elements.button.dataset.id = this.id

        //Maybe display number of plants
        //This requires a change in the API to return
        //BedPlants with the get /garden_beds/index route
        //this.elements.numOfPlants.innerHTML = this.plants.length

        this.container.id = `garden-bed-${this.id}`
        this.container.className = "column"
        for(let element in this.elements){
            this.container.appendChild(this.elements[element])
        }

        

    }

    get sun_str(){
        switch (this.sun) {
            case 1:
                return "Full Shade"
            case 3:
                return "Part Sun"
            case 5:
                return "Full Sun"
            default:
                return "Unknown"
        }
    }

    get soil_str(){
        switch (this.soil) {
            case 1:
                return "Sandy Soil"
            case 3:
                return "Top Soil"
            case 5:
                return "Clay Soil"
            default:
                return "Unknown"
        }
    }

    delete(){
        deleteOne(BEDS_URL,this.id,(resp)=>{
            if (resp.ok) {
                this.container.remove()
            }else{
                alert("There was a problem deleting")
            }
        })
    }
}