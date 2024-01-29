WebKitCSSMatrix.toString({
    width:350,
    height:300,
    image_format: 'png',
    png_qualtiy:90
});

camera = document.getElementById("camera");

Webcam.attach('#camera');

function take_snapshot()
{
    Webcam.snap(function(data_uri) {
        document.getElementById("result").innerHTML = 
        '<img id="captured_image" src"'+data_uri+'"/>';
    });
}
console.log('ml5 version:',m15.version);
classifier = ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/[...]model.json'),modelLoaded
