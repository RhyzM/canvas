
// Stamping Mr.Poop

class ImagePoop extends PaintFunction {
    constructor(contextReal) {
        super();
        this.contextReal = contextReal;
        this.contextDraft = contextDraft;  
    }
    onMouseDown(coord, event) {
        let img = new Image();
        img.src= './assets/img/poop.png'
        img.onload =  () => {
            this.contextReal.drawImage(img, coord[0], coord[1], 80, 80);
        }
    }
    onDragging(){}
    onMouseUp(){}
}

// $("#haha").on('click',function(){
//     currentStamp = "./asses/img/haha.jpg"
// })