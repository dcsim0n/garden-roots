const BedController = {
    beds: [],
    initCanvas : function (canvas) {
        this.canvas = canvas
        paper.setup(this.canvas)
        paper.view.draw()

    },
    draw : function(){
        paper.view.draw()
    },
    addBed : function (bed) {
        console.log("new bed...")
        const center = new paper.Point(Math.random() * 700, Math.random() * 500)
        const bedShape = new paper.Shape.Circle(center,50)
        
        const title = new paper.PointText({
            point: center,
            content: bed.name,
            fillColor: 'black',
            fontFamily: 'Georgia',
            fontSize: 18
        })
        //Center the title around the shape
        title.position = title.position.add([-(title.bounds.width/2),-55]) 
        
        //Group everything here
        const bedGroup = new paper.Group([bedShape,title])
        bedShape.strokeColor = "black"
        bedShape.fillColor = "white"
        bedGroup.onMouseDrag = (e)=>this.dragBed(e)
        
        
    },

    dragBed : function(event){
        const newPoint = new paper.Point(event.target.position.add(event.delta))
        event.target.setPosition(newPoint)
        
        //
    }

}