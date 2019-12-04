class DrawingLine extends PaintFunction{
    constructor(contextReal){
        super();
        this.context = contextReal;            
        // this.selectedStrokeColour = selectedStrokeColour;
    }
    
    onMouseDown(coord,style){
        this.context.strokeStyle = style.selectedStrokeColour;
        this.context.lineCap = "round";
        this.context.lineWidth = 5;
        this.context.beginPath();
        this.context.moveTo(coord[0],coord[1]);
        this.draw(coord[0],coord[1]);
    }
    onDragging(coord){
        this.draw(coord[0],coord[1]);
    }

    onMouseMove(){}
    onMouseUp(){}
    onMouseLeave(){}
    onMouseEnter(){}

    draw(x,y){
        this.context.lineTo(x,y);
        this.context.moveTo(x,y);
        this.context.closePath();
        this.context.stroke();    
    }
}

