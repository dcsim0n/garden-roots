class Plant {
    constructor(id, name, sun, soil, water, perinnial, bloom_period, height, color) {

        this.id = id
        this.name = name 
        this.sun = sun
        this.soil = soil
        this.water = water
        this.perinnial = perinnial
        this.bloom_period = bloom_period
        this.height = height
        this.color = color
    }

    get plantSuggestions() {
        const plantSuggestions = document.getElementsById("new-suggestions")
        const newPlantSuggestions = document.createElement("ul")
        const plantList = doucment.createElement("li")
            
        plantSuggestions.appendChild(newPlantSuggestions)
        newPlantSuggestions.appendChild(plantList)

        plantSuggestions.id = `${this.id}`

        return plantSuggestions
    }

    //fetch to suggest route - bed id
        // garden/beds/id
}

// -plant class to get innerHTML to load
// -displays suggestion