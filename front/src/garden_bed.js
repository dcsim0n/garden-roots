class GardenBed{
    constructor({id, name, sun, soil}){
        Object.assign(this, {
            id,
            name,
            sun,
            soil
        })
        const center = new paper.Point(Math.random() * 700, Math.random() * 500)
        this.shape = new paper.Shape.Circle(center,50)
        this.shape.strokeColor = "black"
        this.shape.fillColor = "white"
        
        this.title = new paper.PointText({
            point: center,
            content: name,
            fillColor: 'black',
            fontFamily: 'Georgia',
            fontSize: 18
        })
        //Center the title around the shape
        this.title.position = this.title.position.add([-(this.title.bounds.width/2),-55]) 
        
        //Group everything here
        this.group = new paper.Group([this.title,this.shape])
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