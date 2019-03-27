const bedDetail = {

}

function fetchBedDetails() {
    //fetch on the click function from the bed controller
    fetch(`http://localhost:3000/garden_beds/${this.id}`)
    .then(res => res.json())
    //load details of selected bed
}

//show larger representation of selected bed
        //paper.js function of secondLayer

function openSecondLayer() {
    fetchBedDetails()
    let bedPath = new paper.Path.Rectangle(new Size.max())
}

//show side menu of suggested plants by picture and name

//add mouse event(hover over picture?) to show plant details(color?, height?)

//add mouse handler(drag) function to drag and drop plant from side menu into the bed.. representation smaller picture, or just color?
    function onMouseDrag(event) {
        const canvas = document.getElementById("paper")
        const detailPath = new.paper.Path()
        detailPath.add(event.point)
        //vector boundary? for circle path of bed (call BedController?)
    }

//POST will autosave to database
//(x) button to close and return to all beds view
    function handleClose() {
        const paper = document.getElementById("paper")
        const closeButton = document.createElement("button")
        closeButton.innerHTML = "X"

        closeButton.addEventListener("click", event => {

        })

    }

layers = []

let layer = new Layer()
     layer.name = firstLayer
        firstLayer = document.layers[0] //parent

let layer = new Layer()
    layer.name = secondLayer
        secondLayer = document.layers[1] //child

