
// Changing Tools Function

$(`#free`).click(function (){
    currentFunction = new DrawingLine(contextReal,contextDraft, style.selectedStrokeColour, style.selectedFillColour);
    $(`.hide-line-width`).toggle("show");
    // if ($(`.hide-eraser-width`).display("show") === true){
    // $(`.hide-eraser-width`).toggle("hide")}
    // else{return}
})

$("#line-width").on("input", function(e) {
    ctx.lineWidth = $(this).val()
 });

$('#eraser').click(function(){
    currentFunction = new Eraser(contextReal,contextDraft, style.selectedStrokeColour, style.selectedFillColour);
    $(`.hide-eraser-width`).toggle("show");

    // if ($(`.hide-line-width`).display("show") === true){
    //     $(`.hide-line-width`).toggle("hide")}
    //     else{return}
})

$("#eraser-width").on("input", function(e) {
    ctx.lineWidth = $(this).val()
 });

$(`#line`).click(function (){
    currentFunction = new DrawingHeart(contextReal,contextDraft, style.selectedStrokeColour, style.selectedFillColour);
})

$(`#curve`).click(function (){
    currentFunction = new DrawingCurve(contextReal,contextDraft, style.selectedStrokeColour, style.selectedFillColour);
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

$(`#stamp`).click(function(){
    currentFunction = new ImagePoop(contextReal,contextDraft, style.selectedStrokeColour, style.selectedFillColour);
})

$(`#undo`).click(function(){
    undo();
})

$(`#redo`).click(function(){
    redo();
})

$(`#clear`).click(function(){
    contextReal.fillStyle = '#ffffff';
    contextReal.fillRect(0, 0, canvasReal.width, canvasReal.height);
})

$(`#download`).click(function(){
    download_img(this);
})