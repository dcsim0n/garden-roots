class GardenBed{
    constructor({id, name, sun, soil}){
        Object.assign(this, {
            id,
            name,
            sun,
            soil
        })
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
                return "Sandy"
            case 3:
                return "Top Soil"
            case 5:
                return "Clay"
            default:
                return "Unknown"
        }
    }

    get bedDiv(){
        const beddiv = document.createElement("div")
        const bedElements = {
        h: document.createElement("h3"),
        sun: document.createElement("p"),
        soil: document.createElement("p")
        }
        
        bedElements.h.innerHTML = this.name
        bedElements.sun.innerHTML = this.sun_str
        bedElements.soil.innerHTML = this.soil_str

        beddiv.id = `garden-bed-${this.id}`
        beddiv.className = "bed"

        for(let element in bedElements){
            beddiv.appendChild(bedElements[element])
        }

        return beddiv
    }
}