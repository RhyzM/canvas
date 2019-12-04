class DrawingTriangle extends PaintFunction{
    // constructor(contextReal, contextDraft){
    constructor(contextReal, contextDraft){
        super();
        this.contextReal = contextReal;
        this.contextDraft = contextDraft;
        // this.selectedStrokeColour = selectedStrokeColour;
        // this.selectedFillColour = selectedFillColour;
    }

    onMouseDown(coord,style){
        this.contextDraft.fillStyle = style.selectedFillColour;
        this.contextDraft.strokeStyle = style.selectedStrokeColour;
        // this.contextDraft.lineWidth = this.selectedLineWidth;
        // this.contextReal.fillStyle = style.selectedFillColour;
        // this.contextReal.strokeStyle = style.selectedStrokeColour;
        this.origX = coord[0];
        this.origY = coord[1];
        // this.contextDraft.clearRect(0,0,canvasDraft.width,canvasDraft.height);
        // this.contextDraft.beginPath();
        // console.log(this.origX, this.origY)
    }

    onDragging(coord,style){
        // this.contextDraft.fillStyle = "#000000";
        this.contextDraft.clearRect(0,0,canvasDraft.width,canvasDraft.height);
        // this.contextReal.strokeStyle = style.selectedStrokeColour;
        this.contextDraft.beginPath();
        this.contextDraft.moveTo(this.origX, this.origY);
        this.contextDraft.lineTo(coord[0], coord[1]);
        this.contextDraft.lineTo(this.origX, coord[1]*1.25);
        this.contextDraft.closePath();
        this.contextDraft.stroke();
        this.contextDraft.fill();
        this.contextDraft.lineWidth = 5;
        this.contextDraft.strokeStyle = style.selectedStrokeColour;
        this.contextDraft.lineJoin = 'miter';
    }

    onMouseMove(){}
    onMouseUp(coord,style){
        this.contextDraft.clearRect(0,0,canvasDraft.width,canvasDraft.height);
        // console.log(coord)
        this.contextReal.fillStyle = style.selectedFillColour;
        this.contextReal.strokeStyle = style.selectedStrokeColour;
        this.contextReal.lineWidth = 5;
        // this.contextReal.fillStyle = this.selectedFillColour;
        // this.contextReal.strokeStyle = this.selectedStrokeColour;
        // this.contextReal.lineWidth = this.selectedLineWidth;
        this.contextReal.beginPath();
        // this.contextReal.clearRect(0,0,canvasDraft.width,canvasDraft.height);
        this.contextReal.moveTo(this.origX, this.origY);
        this.contextReal.lineTo(coord[0], coord[1]);
        this.contextReal.lineTo(this.origX, coord[1]*1.25);
        this.contextReal.closePath();
        this.contextReal.stroke();
        this.contextReal.fill();
        this.contextReal.lineJoin = 'miter';

        // History
        // history.push($('#canvas-real')[0].toDataURL());
    }

    onMouseLeave(){}
    onMouseEnter(){}

}
