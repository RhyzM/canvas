
// Drawing Circle Function

class DrawingCircle extends PaintFunction{
    constructor(contextReal, contextDraft){
        super();
        this.contextReal = contextReal;
        this.contextDraft = contextDraft;
        this.selectedLineWidth = 5;
    }

    onMouseDown(coord,style){
        this.contextReal.fillStyle = style.selectedFillColour;
        this.contextReal.strokeStyle = style.selectedStrokeColour;
        this.contextReal.lineWidth = this.selectedLineWidth
        this.origX = coord[0];
        this.origY = coord[1];
    }

    onDragging(coord,style){
        this.contextDraft.fillStyle = style.selectedFillColour;
        this.contextDraft.strokeStyle = style.selectedStrokeColour;
        this.contextDraft.lineWidth = this.selectedLineWidth;
        this.contextDraft.beginPath();
        this.contextDraft.clearRect(0,0,canvasDraft.width,canvasDraft.height);
        this.contextDraft.arc(this.origX, this.origY, Math.sqrt(Math.pow((coord[0]-this.origX),2)+Math.pow((coord[1]-this.origY),2)), 0, 2*Math.PI);
        this.contextDraft.fill();
        this.contextDraft.stroke();
    }

    onMouseMove(){}
    onMouseUp(coord){
        this.contextReal.beginPath();
        this.contextDraft.clearRect(0,0,canvasDraft.width,canvasDraft.height);
        this.contextReal.arc(this.origX, this.origY, Math.sqrt(Math.pow((coord[0]-this.origX),2)+Math.pow((coord[1]-this.origY),2)), 0, 2*Math.PI);
        this.contextReal.lineWidth = this.selectedLineWidth;
        this.contextReal.fill();
        this.contextReal.stroke();

    }
    onMouseLeave(){}
    onMouseEnter(){}
}