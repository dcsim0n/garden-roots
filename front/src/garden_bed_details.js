GardenBedDetails = {

    updateDetails: function(bedObj) {
        console.log(bedObj)
        card = this.querryShow()
        card.title.innerHTML = bedObj.name

        card.details.innerHTML = ""
        const soil = document.createElement("li") 
        soil.innerHTML = `Soil Type: ${bedObj.soil_str}`
        card.details.appendChild(soil)
        
        const sun = document.createElement("li") 
        sun.innerHTML = `Light Condition: ${bedObj.sun_str}`
        card.details.appendChild(sun)

        //Iterate over the plants array
        //and add a list item for each one
        card.plants.innerHTML = ""
        bedObj.plants.forEach(plant => {
            this.addPlant(plant.name)
        });
        this.show()
    },

    addPlant: function(plantName){
        const deleteLink = document.createElement("button")
        deleteLink.innerText = "Remove"
        deleteLink.onclick = ()=>{alert("Are you sure?")}

        const li = document.createElement("li")
        li.innerHTML = plantName
        li.append(document.createElement("br"))
        li.append(deleteLink)
        
        const {plants} = this.querryShow()
        plants.appendChild(li)
    },

    querryShow: function() {
        const card = document.getElementById("show")
        return {
            title: card.querySelector("h1"),
            details: card.querySelector("#details ul"),
            plants: card.querySelector("#plants ul"),
            suggestionsButton: card.querySelector("#plants button"),
            graphics: card.querySelector("#graphics")
        }
    },

    close: function(){
        console.log("Closeing...")
        const card = document.getElementById("show")
        card.hidden = true
    },

    show: function () {
        const card = document.getElementById("show")
        card.hidden = false
    }
}