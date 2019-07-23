let looping = true;
let keysActive = true;
let socket, cnvs, ctx, canvasDOM;
let fileName = "./frames/sketch";
// a shader variable
let gl;
let shaderProgram;
let vertices = [];
let drawCount = 0;
let drawIncrement = 0.00125;
let time;
let vertex_buffer;


let video;
let poseNet;
let poses = [];
let modelLoaded = false;
let poseNetModelShaderSet = false;

// function preload() {
//     // load the shader
//     shaderProgram = loadShader('points.vert', 'points.frag');
// }

function modelReady() {
    logJavaScriptConsole("The model is loaded.");
    modelLoaded = true;
    setPoseNetShader();
}

function setup() {
    socket = io.connect('http://localhost:8080');
    // shaders require WEBGL mode to work
    pixelDensity(1);
    cnvs = createCanvas(windowWidth, windowHeight, WEBGL);
    video = createCapture(VIDEO);
    video.size(270 * 3, 180 * 3);
    canvasDOM = document.getElementById('defaultCanvas0');
    gl = canvas.getContext('webgl');

    // Create a new poseNet method with a single detection
    poseNet = ml5.poseNet(video, modelReady);
    // This sets up an event that fills the global variable "poses"
    // with an array every time new poses are detected
    poseNet.on('pose', function(results) {
        poses = results;
    });
    // Hide the video element, and just show the canvas
    video.hide();





    // gl.cbf = gl.getExtension('WEBGL_color_buffer_float') || gl.getExtension('EXT_color_buffer_float');
    // gl.tf = gl.getExtension('OES_texture_float');

    gl.enable(gl.BLEND);
    gl.clearColor(0.0, 0.0, 0.0, 1.0);
    // gl.blendFunc(gl.SRC_ALPHA, gl.ONE_MINUS_SRC_ALPHA);
    gl.blendFuncSeparate(gl.SRC_ALPHA, gl.ONE_MINUS_SRC_ALPHA, gl.ONE, gl.ONE_MINUS_SRC_ALPHA);

    // gl.blendFunc(gl.SRC_ALPHA, gl.DST_ALPHA);
    frameRate(20);
    noStroke();

    // Create an empty buffer object to store the vertex buffer
    vertex_buffer = gl.createBuffer();

    // Set the view port
    gl.viewport(0, 0, canvas.width, canvas.height);
}

draw = function() {
    gl.clear(gl.COLOR_BUFFER_BIT);
    // shader() sets the active shader with our shader
    // shader(shaderProgram);
    // texcoordShader.setUniform('time', frameCount);
    // rect gives us some geometry on the screen
    // rect(0, 0, width, height);
    // console.log("Drawing!");
    //     setBGShaders();
    //     gl.uniform1f(time, drawCount);
    //     drawBG();
    // if (frameCount == 1) {
    // setDotsShaders();
    // }
    // drawDots();
    if (modelLoaded) {

        drawKeypoints();
    }
    //     setOverlayShaders();
    //     gl.uniform1f(time, drawCount);
    //     drawBG();
    drawCount += drawIncrement;
}


function drawKeypoints() {
    // Loop through all the poses detected
    let p = [];
    for (let i = 0; i < poses.length; i++) {
        // For each pose detected, loop through all the keypoints
        let pose = poses[i].pose;
        for (let j = 0; j < pose.keypoints.length; j++) {
            // A keypoint is an object describing a body part (like rightArm or leftShoulder)
            let keypoint = pose.keypoints[j];
            // Only draw an ellipse is the pose probability is bigger than 0.2
            if (keypoint.score > 0.2) {
                // fill(255, 0, 0);
                // noStroke();
                // ellipse(keypoint.position.x, keypoint.position.y, 10, 10);
                p.push({ x: keypoint.position.x, y: keypoint.position.y });
            }
        }
    }
    drawPoints(p);
}

// function windowResized() {
//     resizeCanvas(windowWidth, windowHeight);
// }

function keyPressed() {
    if (keysActive) {
        if (keyCode === 32) {
            if (looping) {
                noLoop();
                looping = false;
            } else {
                loop();
                looping = true;
            }
        }
        if (key == 'r' || key == 'R') {
            window.location.reload();
        }
        if (key == 'm' || key == 'M') {
            redraw();
        }
        if (key == 'p' || key == 'P') {
            frameExport();
        }
    }
}