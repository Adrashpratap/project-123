leftwirstX = 0;
rightwristX = 0;
diffrence = 0;

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

        leftwirstX = results[0].pose.leftwirst.x;
        rightwristX = results[0].pose.rightwrist.x;
        diffrence = floor(leftwirstX-rightwristX);

        console.log("leftwristX = "+ leftwirstX +"rightwristX = "+ rightwristX);
    }
}

function draw()
{
    background("black"); 
    text("Adarsh",50,400);
    fill(255, 204, 0);
}