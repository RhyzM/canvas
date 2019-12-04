
$(`#free`).click(function (){
    currentFunction = new DrawingLine(contextReal,contextDraft, style.selectedStrokeColour, style.selectedFillColour);
})

$(`#line`).click(function (){
    currentFunction = new DrawingHeart(contextReal,contextDraft, style.selectedStrokeColour, style.selectedFillColour);
})

$(`#circle`).click(function (){
    currentFunction = new DrawingCircle(contextReal,contextDraft, style.selectedStrokeColour, style.selectedFillColour);
    
})

$(`#rectangle`).click(function (){
    currentFunction = new DrawingRectangle(contextReal,contextDraft, style.selectedStrokeColour, style.selectedFillColour);
})

$(`#triangle`).click(function (){
    currentFunction = new DrawingTriangle(contextReal,contextDraft, style.selectedStrokeColour, style.selectedFillColour);
})
