class GardenBed{
    constructor({id, name, sun, soil}){
        Object.assign(this, {
            id,
            name,
            sun,
            soil
        })
        const center = paper.view.center
        this.shape = new paper.Shape.Circle(center,50)
        const clipGrp = new paper.Group(this.soil_img,this.shape)
        this.shape.clipMask = true
        this.button = new paper.Raster("https://cdn0.iconfinder.com/data/icons/social-messaging-ui-color-shapes/128/add-circle-green-512.png",center.add([40,40]))
        this.deleteBtn = new paper.Raster("https://cdn1.iconfinder.com/data/icons/color-bold-style/21/05-512.png",center.add([-40,40]))
        this.button.scale(.05)
        this.deleteBtn.scale(.055)
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
        this.group = new paper.Group([clipGrp,this.title,this.button,this.deleteBtn])

        //Wrap handler in arrow function so we access the garden_bed ID
        this.deleteBtn.onMouseUp = (e)=>{this.handleDelete(e)}
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

    get soil_img(){
        switch(this.soil){
            case 1:
                return new paper.Raster("img/sandsoil.jpg",paper.view.center)
            case 3:
                return new paper.Raster("img/topsoil.jpg",paper.view.center)
            case 5:
                return new paper.Raster("img/claysoil.jpg", paper.view.center)
            default:
                return null
        }
    }

    handleDelete(event){
        event.target.parent.remove()
        deleteOne(BEDS_URL, this.id, ()=>{console.log("delteted")})
        

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