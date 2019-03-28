const BEDS_URL = "http://localhost:3000/garden_beds"
let BEDS = []
document.addEventListener("DOMContentLoaded",()=>{
    const newForm = document.getElementById("new-form")
    newForm.addEventListener("submit", handleBedForm)

    renderBeds()

})

function renderBeds() {
    fetchAll(BEDS_URL,(data)=>{
        data.forEach((bed)=>{
            const newBed = new GardenBed(bed)
            
            renderBed(newBed)
            BEDS.push(newBed)
        })
    })
}

function renderBed(bed){
    const mainDiv = document.getElementById("index")
    bed.elements.button.addEventListener("click",handleBedClick)
    mainDiv.appendChild(bed.container)
}

function handleBedClick(event) {
    const id = event.target.dataset.id
    console.log(event.target)
    fetchAll(`${BEDS_URL}/${id}`,(data)=>{
        bed = new GardenBed(data)
        GardenBedDetails.updateDetails(bed)
    })
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



