document.addEventListener("DOMContentLoaded",()=>{
    const newForm = document.getElementById("new-form")
    newForm.addEventListener("submit", handleBedForm)
})
const BEDS_URL = "http://localhost:3000/beds"
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

    postOne(BEDS_URL,bedObj,(resp)=>{
        console.log(resp.status)
    })

}



