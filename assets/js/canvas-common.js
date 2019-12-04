// const canvas = document.querySelector('#picasso');
// const ctx = canvas.getContext('2d');
// // canvas.height = 500;
// // canvas.width = 1200;

// let painting = false;

// ctx.strokeStyle = "#000000"
// ctx.lineCap = "round";
// ctx.lineWidth = 5;

// $('#picasso').mousedown(function(e){
//     let mouseX = e.offsetX;
//     let mouseY = e.offsetY;
//     ctx.beginPath();
//     ctx.moveTo(mouseX,mouseY);
//     draw(mouseX,mouseY);
//     painting = true;
// });
// $('#picasso').mousemove(function(e){
//     if(painting){
//         let mouseX = e.offsetX;
//         let mouseY = e.offsetY;
//         draw(mouseX,mouseY);
//     }
// });
// $('#picasso').mouseup(function(e){
//     painting = false;
// });
// $('#picasso').mouseleave(function(e){
//     painting = false;
// });

// function draw(x,y){
//     ctx.lineTo(x,y);
//     ctx.moveTo(x,y);
//     ctx.closePath();
//     ctx.stroke();
// }

let canvasReal = document.getElementById('canvas-real');
let contextReal = canvasReal.getContext('2d');
let canvasDraft = document.getElementById('canvas-draft');
let contextDraft = canvasDraft.getContext('2d');
let currentFunction;
let dragging = false;
let style = {
    selectedStrokeColour: 'black',
    selectedFillColour: 'black'
};

$('#canvas-draft').mousedown(function(e){

    let mouseX = e.offsetX;
    let mouseY = e.offsetY;
    currentFunction.onMouseDown([mouseX,mouseY],style,e);
    dragging = true;
});

$('#canvas-draft').mousemove(function(e){
    let mouseX = e.offsetX;
    let mouseY = e.offsetY;
    if(dragging){
        currentFunction.onDragging([mouseX,mouseY],style,e);
    }
    currentFunction.onMouseMove([mouseX,mouseY],style,e);
});

$('#canvas-draft').mouseup(function(e){
    dragging = false;
    let mouseX = e.offsetX;
    let mouseY = e.offsetY;
    currentFunction.onMouseUp([mouseX,mouseY],style,e);
});

$('#canvas-draft').mouseleave(function(e){
    dragging = false;
    let mouseX = e.offsetX;
    let mouseY = e.offsetY;
    currentFunction.onMouseLeave([mouseX,mouseY],e);
});

$('#canvas-draft').mouseenter(function(e){
    let mouseX = e.offsetX;
    let mouseY = e.offsetY;
    currentFunction.onMouseEnter([mouseX,mouseY],e);
});

class PaintFunction{
    constructor(){}
    onMouseDown(){}
    onDragging(){}
    onMouseMove(){}
    onMouseUp(){}
    onMouseLeave(){}
    onMouseEnter(){}
}    