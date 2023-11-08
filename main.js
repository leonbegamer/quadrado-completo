noseX = 0;
noseY = 0;
difference = 0;
rightWristX = 0;
leftWristX = 0;

function setup()
{
    video = createCapture(VIDEO);
    video.size(550, 700);
    video.position(800, 150);
    canvas = createCanvas(560, 560);
    canvas.position(100, 250);
    //proxima aula

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose' , gotPoses);
}   

function modelLoaded()
{
    console.log('PoseNet Is Intialized');
}

function gotPoses(results)
{
    if(results.length > 0)
    {
     console.log(results);
     noseX = results[0].pose.nose.x;
     noseY = results[0].pose.nose.y;
     console.log("noseX =" + noseX + "noseY =" + noseY);

    leftWristX = results[0].pose.leftWrist.x;
    rightWristX = results[0].pose.rightWrist.x;

    difference = floor(leftWristX -rightWristX);

    console.log("leftWristX= "  + leftWristX + "rightWristX" + rightWristX + "difference =" + difference);
    }
}

function draw()
{
    background('red');
   
    document.getElementById("square_side").innerHTML = "largura e altura serão = " + difference +"px";
    fill('blue');
    stroke('black');
    square(noseX, noseY, difference);

}