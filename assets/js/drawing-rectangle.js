class DrawingRectangle extends PaintFunction{
    constructor(contextReal,contextDraft, selectedStrokeColour, selectedFillColour){
        super();
        this.contextReal = contextReal;
        this.contextDraft = contextDraft;       
        // this.selectedStrokeColour = selectedStrokeColour;
        // this.selectedFillColour = selectedFillColour;     
    }
    
    onMouseDown(coord,style){
        this.contextReal.fillStyle = style.selectedFillColour;
        this.origX = coord[0];
        this.origY = coord[1];
    }
    onDragging(coord){
        this.contextDraft.fillStyle = style.selectedFillColour;
        this.contextDraft.clearRect(0,0,canvasDraft.width,canvasDraft.height);
        this.contextDraft.fillRect(this.origX,this.origY,coord[0]- this.origX,coord[1] - this.origY);
    }

    onMouseMove(){}
    onMouseUp(coord){
        this.contextDraft.clearRect(0,0,canvasDraft.width,canvasDraft.height);
        this.contextReal.fillRect(this.origX,this.origY,coord[0]- this.origX,coord[1] - this.origY);
    }
    onMouseLeave(){}
    onMouseEnter(){}
}

