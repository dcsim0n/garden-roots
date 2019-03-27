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
        bed.button.onMouseUp = this.openDetail
    },

    dragBed : function(event){
        const newPoint = new paper.Point(event.target.position.add(event.delta))
        event.target.setPosition(newPoint)
        
        //
    },

    openDetail: function (event) {
        console.log("clickgin")
        const detailBox = new paper.Shape.Rectangle({
            point: [20,20],
            size: [760,540],
            strokeColer: "black",
            fillColer: "white"
        })
        const detailLayer = new paper.Layer([detailBox])
        detailLayer.bringToFront()
    }

}