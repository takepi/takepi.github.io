/*
function openCamera() {
    var video = document.querySelector('video');
    navigator.mediaDevices = navigator.mediaDevices
    || ((navigator.mozGetUserMedia 
    || navigator.webkitGetUserMedia) ? {
        getUserMedia: function(c) {
            return new Promise(function(y, n) {
                (navigator.mozGetUserMedia ||
                navigator.webkitGetUserMedia).call(navigator, c, y, n);
            });
        }
    } : null);
    var constraints = { video: { facingMode: 'user', aspectRatio:{exact: window.innerHeight / window.innerWidth} } };
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
}
*/
function opencvCamera() {
    var video = document.querySelector('video');
        navigator.mediaDevices = navigator.mediaDevices
    || ((navigator.mozGetUserMedia 
    || navigator.webkitGetUserMedia) ? {
        getUserMedia: function(c) {
            return new Promise(function(y, n) {
                (navigator.mozGetUserMedia ||
                navigator.webkitGetUserMedia).call(navigator, c, y, n);
            });
        }
    } : null);
    var constraints = { video: { facingMode: 'user', aspectRatio:{exact: window.innerHeight / window.innerWidth} } };
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
    
    let src = new cv.Mat(video.height, video.width, cv.CV_8UC4);
    let dst = new cv.Mat(video.height, video.width, cv.CV_8UC4);
    let gray = new cv.Mat(); 
    let cap = new cv.VideoCapture(video)
    const FPS = 30;
    
    try{
        if (!streaming){
            src.delete();
            dst.delete();
            gray.delete();
            return;
        }
    let begin = Date.now();
    cap.read(src);
    src.copyTo(dst);
    cv.cvtColor(dst, gray, cv.COLOR_RGBA2GRAY, 0);
    cv.imshow("canvasOutput", dst);
    let delay = 1000/FPS - (Date.now() - begin);
    } catch (err) {
        console.log('opencv error: ', err);
    }
}
