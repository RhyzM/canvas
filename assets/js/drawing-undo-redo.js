
// Undo & Redo Function

let canvasImg = new Image();
let data = [];
let redoData = [];

function saveState() {
    let dataURL = canvasReal.toDataURL();
    data.push(dataURL)
}

function undo() {
    if (data.length === 0) {
        return
    }

    if (data.length === 1) {
        contextReal.fillStyle = '#ffffff';
        contextReal.fillRect(0, 0, canvasReal.width, canvasReal.height);
        redoData.push(data.pop());
    }

    else {
        let dataPopped = data.pop();
        let undoLast = data[data.length - 1];
        canvasImg.src = undoLast;
        redoData.push(dataPopped);

        canvasImg.onload = function () {
            contextReal.drawImage(canvasImg, 0, 0);
        }
        if (data.length === 0) {
            return;
        }
    }
}

function redo() {
    if (redoData.length === 0) {
        return;
    }

    let poppedRedo = redoData.pop();
    data.push(poppedRedo);
    let redoLast = redoData[redoData.length - 1];
    canvasImg.src = poppedRedo;
    canvasImg.onload = function () { contextReal.drawImage(canvasImg, 0, 0); }
}