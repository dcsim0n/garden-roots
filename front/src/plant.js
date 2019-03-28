class Plant {
    constructor(id, name, sun, soil, water, perinnial, bloom_period, height, color) {

        this.id = id
        this.name = name 
        this.sun = sun
        this.soil = soil
        this.water = water
        this.perinnial = perinnial
        this.bloom_period = bloom_period
        this.height = height
        this.color = color
    }
}

    function renderAllPlants() {
        fetch(PLANTS_URL)
        .then(res => res.json())
        .then(data => data.map(plant => renderPlant(plant.name, plant.color, plant.img, plant.id)))
    }

     function renderPlant() {
        let getPlants = document.getElementById("plants-button")
        getPlants.addEventListener("click", fetchAll(PLANTS_URL))
        //map over to return plants that match soil/sun conditions

        let plantsUl = document.getElementById("plants-ul")
            const li = document.createElement("li")
            plantsUl.appendChild(li)
    }

    function handlePlantForm(event) {
        event.preventDefault()
        const plantName = event.target.elements["name"].value
        const plantColor = event.target.elements["color"].value
        const plantURL = event.target.elements["image"].value

        const newplant = {
            name: plantName,
            color: plantColor,
            img: plantURL}

        renderPlant(plantName, plantColor, plantURL)

        fetch(PLANTS_URL, {
            headers:{
                'Content-Type' : 'application/json'
            },
            method: 'POST',
            body: JSON.stringify(newplant)
        })
        
    }

