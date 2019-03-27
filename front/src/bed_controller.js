const BedController = {
    beds: [],
    initCanvas : function (canvas) {
        this.canvas = canvas
        paper.setup(this.canvas)
        paper.view.draw()
        const newBedButton = new paper.Group([
        new paper.Shape.Rectangle({
                                    point:[0,0],
                                    size:[100,30],
                                    fillColor: "lightgrey",
                                    shadowColor: "darkgrey",
                                    shadowBlur: 5,
                                    shadowOffset: [3,3]
                                }),
        new paper.PointText({
                                point: [20,20],
                                content: "New Garden",
                                fillColor: 'black',
                                fontFamily: 'Arial',
                                fontSize: 12
                            })
        ])

        newBedButton.onClick = this.showNewForm
        
    },
    draw : function(){
        paper.view.draw()
    },
    
    addBed : function (bed) {
        this.beds.push(bed)
        console.log("new bed...")

        //Do some conditional math to create a grid layout
        //The grid is 3x2 200px wide, 200px tall
        const gridPoint = (()=>{
            let point = {x:200, y:200}
            if(this.beds.length > 3){
                point.y += 200
                point.x = ((this.beds.length - 3)*200)
            }else{
                point.x = (this.beds.length * 200)
            }
            console.log(point)
            return point
        })()
        bed.group.position = gridPoint
        bed.group.onMouseDrag = this.dragBed
    },

    dragBed : function(event){
        const newPoint = new paper.Point(event.target.position.add(event.delta))
        event.target.setPosition(newPoint)
        
        //
    },
    showNewForm: function(event){
        const popover = document.getElementById("new-bed")
        popover.hidden = !popover.hidden
        //Need more testing for this
        //How do we handle two canvas elements in one page?
        //DrawBedShape.initCanvas()
    }

    

    

}