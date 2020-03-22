function opencvCamera() {
    var video = document.getElementById('video');
    var constraints = { video: { facingMode: 'user'} };
    navigator.mediaDevices.getUserMedia(constraints)
        .then(function(stream) {
            video.srcObject = stream;
            video.onloadedmetadata = function(e) {
                video.play();
            };
        })
        .catch(function(err) {
            console.log(err);
        });
    
    let canvasFrame = document.getElementById("canvasOutput");
    let context = canvasFrame.getContext("2d");
    let src = new cv.Mat(video.height, video.width, cv.CV_8UC4);
    let dst = new cv.Mat(video.height, video.width, cv.CV_8UC1);
    let cap = new cv.VideoCapture(video)
    const FPS = 30;
    
    try{
        if (0){
            src.delete();
            dst.delete();
            gray.delete();
            return;
        }
    let begin = Date.now();
    cap.read(src);
//    src.copyTo(dst);
    cv.cvtColor(dst, dst, cv.COLOR_RGBA2GRAY);
    cv.imshow("canvasOutput", dst);
    let delay = 1000/FPS - (Date.now() - begin);
    } catch (err) {
        console.log('opencv error: ', err);
    }
}
