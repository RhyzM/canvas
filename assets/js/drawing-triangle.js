
// Drawing Triangle Function

class DrawingTriangle extends PaintFunction{
    constructor(contextReal, contextDraft,selectedStrokeColour,selectedFillColour){
        super();
        this.contextReal = contextReal;
        this.contextDraft = contextDraft;
        this.selectedStrokeColour = selectedStrokeColour;
        this.selectedFillColour = selectedFillColour;
        this.origX = 0;
        this.origY = 0;
        this.newX = 0;
        this.newY = 0;
        this.mousedownCounter = 0;
    }
    onMouseDown(coord,style){
        if (this.mousedownCounter === 0) {
            this.origX = coord[0];
            this.origY = coord[1];
            this.contextReal.strokeStyle = style.selectedStrokeColour;
            this.contextReal.lineWidth = 1;
            this.contextReal.fillRect(this.origX,this.origY,1,1);
            this.mousedownCounter = 1;
        } else if (this.mousedownCounter === 1) {
            this.newX = coord[0];
            this.newY = coord[1];
            this.contextReal.strokeStyle = style.selectedStrokeColour;
            this.contextReal.fillStyle = style.selectedFillColour;
            this.contextReal.lineWidth = 1;
            this.contextReal.fillRect(this.newX,this.newY,1,1);
            this.contextReal.beginPath();
            this.contextReal.moveTo(this.origX, this.origY);
            this.contextReal.lineTo(this.newX,this.newY);
            this.contextReal.stroke();
            this.mousedownCounter = 2;
        } else {
            this.contextReal.beginPath();
            this.contextReal.moveTo(this.origX, this.origY);
            this.contextReal.lineTo(this.newX,this.newY);
            this.contextReal.lineTo(coord[0],coord[1]);
            this.contextReal.stroke();
            this.contextReal.fill();
            this.contextReal.lineJoin = 'miter';
            this.mousedownCounter = 0;
        }
    }
    onMouseMove(){}
    onMouseUp(){}
    onMouseLeave(){}
    onMouseEnter(){}

}
