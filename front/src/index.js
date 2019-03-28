const BEDS_URL = "http://localhost:3000/garden_beds"

document.addEventListener("DOMContentLoaded",()=>{
    const newForm = document.getElementById("new-form")
    newForm.addEventListener("submit", handleBedForm)

    renderBeds()

})

function renderBeds() {
    fetchAll(BEDS_URL,(data)=>{
        data.forEach((bed)=>{
            newBed = new GardenBed(bed)
            renderBed(newBed)

        })
    })
}

function renderBed(bed){
    const mainDiv = document.getElementById("main")
    mainDiv.appendChild(newBed.container)
}

function handleBedForm(event) {
    console.log("Building a new flower bed...")
    event.preventDefault()
    const {name, soil, sun} = event.target

    bedObj = Object.assign({}, {
        name: name.value,
        soil: soil.value,
        sun: sun.value,
        plants: []
    })

    postOne(BEDS_URL,bedObj,(data)=>{
        newBed = new GardenBed(data)
        renderBed(newBed)
    })

}



