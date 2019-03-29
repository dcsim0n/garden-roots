const SuggestedPlants = {

    showSuggests: function (event) {
        const bedId = event.target.dataset.id
        const suggestList = document.getElementById("suggestions")
        suggestList.innerHTML= ""
        fetchAll(`${SUGGEST_URL}/${bedId}`,(data)=>{
            data.forEach((plant)=>{
                this.renderPlant(plant)
            })
        })
    },

    renderPlant: function(plantObj){
        const li = document.createElement("li")
        li.innerHTML = plant.name
        suggestList.appendChild(li)
    }
}