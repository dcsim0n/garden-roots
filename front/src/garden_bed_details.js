GardenBedDetails = {

    updateDetails: function(bedObj) {
        console.log(bedObj)
        card = this.querryShow()
        card.title.innerHTML = bedObj.name

        //Reset details
        card.details.innerHTML = ""

        //create soil element
        const soil = document.createElement("li") 
        soil.innerHTML = `Soil Type: ${bedObj.soil_str}`
        card.details.appendChild(soil)
        
        //Create Sun element
        const sun = document.createElement("li") 
        sun.innerHTML = `Light Condition: ${bedObj.sun_str}`
        card.details.appendChild(sun)

        card.suggestionsButton.dataset.id = bedObj.id
        card.suggestionsButton.addEventListener("click", this.showSuggests)
        
        $('.suggest.modal')
            .modal('attach events', '.show.modal .button')
        //Iterate over the plants array
        //and add a list item for each one
        card.plants.innerHTML = ""
        bedObj.plants.forEach(plant => {
            this.addPlant(plant)
        });
        this.show()
    },

    addPlant: function(plant){
        const deleteLink = document.createElement("button")
        deleteLink.innerText = "Remove"
        deleteLink.onclick = ()=>{this.removePlant(plant.id)}
        deleteLink.dataset.id = plant.id

        const li = document.createElement("li")
        li.innerHTML = plant.name
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

    removePlant: function(id){
        if(confirm("Are you sure?")){
            //Got stuck because we don't have a GardenBedId
            //May have to change the API to get this to work
            
        }
    },

    // close: function(){
    //     console.log("Closeing...")
    //     const card = document.getElementById("show")
    //     card.hidden = true
    // },
    showSuggests: function (event) {
        const bedId = event.target.dataset.id
        const suggestList = document.getElementById("suggestions")
        suggestList.innerHTML= ""
        fetchAll(`${SUGGEST_URL}/${bedId}`,(data)=>{
            data.forEach((plant)=>{
                const li = document.createElement("li")
                li.innerHTML = plant.name
                suggestList.appendChild(li)
            })
        })
    },

    show: function () {
        const card = document.getElementById("show")
        card.hidden = false
        $('.fullscreen.modal.show').modal('show')
    }
}