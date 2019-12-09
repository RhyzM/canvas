
// Download Canvas Image Function

function download_img(dl) {
    var image = canvasReal.toDataURL("image/jpg");
    dl.href = image
}