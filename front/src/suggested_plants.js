const SuggestedPlants = {

    showSuggests: function (event) {
        const bedId = event.target.dataset.id
        const suggestList = document.getElementById("suggestions")
        //suggestList.innerHTML= ""
        fetchAll(`${SUGGEST_URL}/${bedId}`,(data)=>{
            data.forEach((plant)=>{
                SuggestedPlants.renderPlant(plant)
            })
        })
    },

    renderPlant: function(plantObj){
        const suggestions = document.getElementById("suggestions")
        
        const card = suggestions.lastElementChild.cloneNode(true)
        card.querySelector("h4").innerHTML = plantObj.name
        card.querySelector("img").src = plantObj.img_1_url
        card.hidden = false
        suggestions.appendChild(card)
        
    },

}