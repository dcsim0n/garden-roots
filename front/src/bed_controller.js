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
        this.beds.push(bed)
        console.log("new bed...")
        
        bed.group.onMouseDrag = this.dragBed
    },

    dragBed : function(event){
        const newPoint = new paper.Point(event.target.position.add(event.delta))
        event.target.setPosition(newPoint)
        
        //
    }

}