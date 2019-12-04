let heartHeight;
let topCurveHeight;
let width;

class DrawingHeart extends PaintFunction{
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
        heartHeight = Math.abs(coord[1] - this.origY);
        topCurveHeight = heartHeight * 0.3;
        width = Math.abs(coord[0] - this.origX);
    }

    onDragging(coord,style){
        this.contextDraft.fillStyle = style.selectedFillColour;
        this.contextDraft.strokeStyle = style.selectedStrokeColour;
        this.contextDraft.lineWidth = this.selectedLineWidth;
        this.contextDraft.lineJoin = 'round';
        this.contextDraft.beginPath();
        this.contextDraft.clearRect(0,0,canvasDraft.width,canvasDraft.height);
        this.contextDraft.moveTo(this.origX, this.origY+topCurveHeight);
        this.contextDraft.bezierCurveTo(this.origX, this.origY, this.origX-width/2, this.origY, coord[0]-width/2, coord[1]+topCurveHeight);
        this.contextDraft.bezierCurveTo(this.origX-width/2, this.origY+(heartHeight+topCurveHeight)/2, this.origX, this.origY+(heartHeight+topCurveHeight)/2, coord[0], coord[1]+heartHeight);
        this.contextDraft.bezierCurveTo(this.origX, this.origY+(heartHeight+topCurveHeight)/2, this.origX+width/2, this.origY+(heartHeight+topCurveHeight)/2, coord[0]+width/2, coord[1]+topCurveHeight);
        this.contextDraft.bezierCurveTo(this.origX+width/2, this.origY, this.origX, this.origY, coord[0], coord[1]+topCurveHeight);
        this.contextDraft.closePath();
        this.contextDraft.fill();
        this.contextDraft.stroke();
    }

    onMouseMove(){}
    onMouseUp(coord){
        this.contextReal.beginPath();
        this.contextDraft.clearRect(0,0,canvasDraft.width,canvasDraft.height);
        this.contextReal.moveTo(this.origX, this.origY+topCurveHeight);
        this.contextReal.bezierCurveTo(this.origX, this.origY, this.origX-width/2, this.origY, coord[0]-width/2, coord[1]+topCurveHeight);
        this.contextReal.bezierCurveTo(this.origX-width/2, this.origY+(heartHeight+topCurveHeight)/2, this.origX, this.origY+(heartHeight+topCurveHeight)/2, coord[0], coord[1]+heartHeight);
        this.contextReal.bezierCurveTo(this.origX, this.origY+(heartHeight+topCurveHeight)/2, this.origX+width/2, this.origY+(heartHeight+topCurveHeight)/2, coord[0]+width/2, coord[1]+topCurveHeight);
        this.contextReal.bezierCurveTo(this.origX+width/2, this.origY, this.origX, this.origY, coord[0], coord[1]+topCurveHeight);
        this.contextReal.closePath();
        // this.contextReal.fillStyle = this.selectedFillColour;
        this.contextReal.lineJoin = 'round';
        this.contextReal.fill();
        this.contextReal.stroke();
        // History
        // history.push($('#canvas-real')[0].toDataURL());

    }
    onMouseLeave(){}
    onMouseEnter(){}
}