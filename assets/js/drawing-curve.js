
// Drawing Curve Function

class DrawingCurve extends PaintFunction{
    constructor(contextReal,contextDraft,selectedStrokeColour){
        super();
        this.contextReal = contextReal;
        this.contextDraft = contextDraft;
        this.selectedStrokeColour = selectedStrokeColour;
        this.origX = 0;
        this.origY = 0;
        this.newX = 0;
        this.newY = 0;
        this.mousedownCounter = 0;
    }
    onMouseDown(coord){
        if (this.mousedownCounter === 0) {
        this.contextReal.fillRect(this.origX,this.origY,3,3);
        this.origX = coord[0];
        this.origY = coord[1];
        console.log('md0',this.origX,this.origY);
        }
    }
    onDragging(coord,style){
        this.contextDraft.strokeStyle = style.selectedStrokeColour;
        this.contextDraft.lineWidth = 5;
        if (this.mousedownCounter === 0) {
            this.contextDraft.beginPath();
            this.contextDraft.clearRect(0,0,canvasDraft.width,canvasDraft.height);
            this.contextDraft.moveTo(this.origX,this.origY);
            this.contextDraft.lineTo(coord[0],coord[1]);
            this.contextDraft.stroke();    
            this.newX = coord[0];
            this.newY = coord[1];
        } else if (this.mousedownCounter === 1) {
            this.contextDraft.beginPath();
            this.contextDraft.clearRect(0,0,canvasDraft.width,canvasDraft.height);
            this.contextDraft.moveTo(this.origX,this.origY);
            this.contextDraft.quadraticCurveTo(coord[0],coord[1],this.newX,this.newY);
            this.contextDraft.stroke();
            this.contextDraft.beginPath();
            this.contextDraft.fillRect(coord[0],coord[1],5,5);
            this.contextDraft.stroke();
        }
    }
    onMouseMove(){}
    onMouseUp(coord,style){
        if (this.mousedownCounter === 0) {
            this.mousedownCounter = 1;
        } else {
            this.contextReal.strokeStyle = style.selectedStrokeColour;
            this.contextReal.lineWidth = 5;
            this.contextDraft.clearRect(0,0,canvasDraft.width,canvasDraft.height);
            this.contextReal.beginPath();
            this.contextReal.moveTo(this.origX,this.origY);
            this.contextReal.quadraticCurveTo(coord[0], coord[1], this.newX, this.newY);
            this.contextReal.stroke();
            this.mousedownCounter = 0;
            console.log('mu1',this.origX,this.origY,this.newX,this.newY);
        }
    }
    onMouseLeave(){}
    onMouseEnter(){}
}
