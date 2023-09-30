Webcam.set({
    width:350,
    height:300,
    image_format:"png",
    png_quality:90
});

Webcam.attach("#camera");

function take_snapshot(){
    Webcam.snap(function(data_uri){
     document.getElementById("result").innerHTML = "<img id='taken_img' src='"+data_uri+"'>";   
    });
}

console.log(ml5.version);
var classifier = ml5.imageClassifier("", modelloaded);

function modelloaded(){
    console.log("model has loaded");
}