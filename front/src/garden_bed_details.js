GardenBedDetails = {
    bedObj: null,

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
    }
}