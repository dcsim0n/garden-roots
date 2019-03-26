class Plant {
    constructor(name, sun, soil, water, perinnial, bloom_period, height, color) {

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
        const ul = document.createElement("ul")
        document.getElementById("new-suggestions").appendChild(ul)

        const li = document.createElement("li")
        ul.appendChild(li)
    }
        
}
