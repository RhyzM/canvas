class DrawingCircle extends PaintFunction{
    constructor(contextReal, contextDraft){
        super();
        this.contextReal = contextReal;
        this.contextDraft = contextDraft;
        // this.selectedStrokeColour = selectedStrokeColour;
        // this.selectedFillColour = selectedFillColour;
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
        // this.contextDraft.moveTo(this.origX, this.origY);
        // this.contextDraft.clearRect(this.origX - coord[0]-this.origX/2 - 1, this.origY - coord[0]-this.origX/2 - 1, coord[0]-this.origX/2 * 2 + 2, coord[0]-this.origX/2 * 2 + 2);
        this.contextDraft.arc(this.origX, this.origY, Math.sqrt(Math.pow((coord[0]-this.origX),2)+Math.pow((coord[1]-this.origY),2)), 0, 2*Math.PI);
        this.contextDraft.fill();
        this.contextDraft.stroke();
    }

    onMouseMove(){}
    onMouseUp(coord){
        this.contextReal.beginPath();
        this.contextDraft.clearRect(0,0,canvasDraft.width,canvasDraft.height);
        //this.contextDraft.clearRect(this.origX - coord[0]-this.origX/2 - 1, this.origY - coord[0]-this.origX/2 - 1, coord[0]-this.origX/2 * 2 + 2, coord[0]-this.origX/2 * 2 + 2);
        // this.contextReal.moveTo(this.origX, this.origY);
        this.contextReal.arc(this.origX, this.origY, Math.sqrt(Math.pow((coord[0]-this.origX),2)+Math.pow((coord[1]-this.origY),2)), 0, 2*Math.PI);
        this.contextReal.lineWidth = this.selectedLineWidth;
        this.contextReal.fill();
        this.contextReal.stroke();
        // History
        // history.push($('#canvas-real')[0].toDataURL());

    }
    onMouseLeave(){}
    onMouseEnter(){}
}