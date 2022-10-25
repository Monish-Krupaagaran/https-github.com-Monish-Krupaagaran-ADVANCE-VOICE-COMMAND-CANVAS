noseX = 0
noseY = 0

rightX = 0
leftX = 0

difference = 0

function setup() {

    canvas = createCanvas(550, 550)
    canvas.position(800, 200)

    video = createCapture(VIDEO)
    video.size(500, 500)

    posenet = ml5.poseNet(video, model_loaded)
    posenet.on("pose", gotposes)
}

function model_loaded() {

    console.log("model is loaded")
}

function gotposes(result) {

    if(result.length > 0) {

        console.log(result);

        noseX = result[0].pose.nose.x 
        nosey = result[0].pose.nose.y 

        leftX = result[0].pose.leftWrist.x
        rightX = result[0].pose.rightWrist.x 

        difference = floor(leftX - rightX)
    }
}

function draw() {

    background("black")

    stroke("white")
    fill("white")
    square(noseX, noseY, difference)

    document.getElementById("px").innerHTML = difference + " px"
}