const SuggestedPlants = {

    showSuggests: function (event) {
        const bedId = event.target.dataset.id
        const suggestList = document.getElementById("suggestions")
        //suggestList.innerHTML= ""
        fetchAll(`${SUGGEST_URL}/${bedId}`,(data)=>{
            data.forEach((plant)=>{
                SuggestedPlants.renderPlant(plant,bedId)
            })
        })
    },

    renderPlant: function(plantObj,bedId){
        const suggestions = document.getElementById("suggestions")
        
        const card = suggestions.lastElementChild.cloneNode(true)
        card.querySelector("h4").innerHTML = plantObj.name
        card.querySelector("img").src = plantObj.img_1_url
        card.querySelector("button").dataset.plant_id = plantObj.id
        card.querySelector("button").dataset.bed_id = bedId
        card.querySelector("button").addEventListener("click",this.assignPlant)
        
        suggestions.appendChild(card)
        
    },

    assignPlant: function (event) {
        const {plant_id, bed_id} = event.target.dataset
        const body = {
            plant_id: plant_id,
            bed_id: bed_id
        }
        postOne(BEDPLANT_URL,body,(data)=>{
            console.log(data)
            GardenBedDetails.updateDetails(data)

        })
        
    }

}