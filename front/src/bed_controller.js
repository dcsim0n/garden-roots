const BedController = {
    beds: [],
    initCanvas : function (canvas) {
        this.canvas = canvas
        paper.setup(this.canvas)
        paper.view.draw()

        paper.view.onFrame = (e)=>{this.spinBeds(e)}


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

    spinBeds(event){
        this.beds.forEach((bed)=>{
            bed.group.rotate(1)
        })
    }

    

    

}