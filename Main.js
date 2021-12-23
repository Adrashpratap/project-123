function setup(){
    video = createCapture(VIDEO);
    video.size(550,500);

    canvas = createCanvas(550,350);
    canvas.position(700,200);
    
    poseNet = ml5.poseNet(video,modelLoaded);
    poseNet.on("pose",gotPoses);
}

function modelLoaded()
{
    console.log("Model is loaded");
}

function gotPoses(results){
    if (results = length > 0) {
        console.log(results);
    }
}

function draw()
{
    background("black"); 
}