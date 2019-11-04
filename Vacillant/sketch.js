let looping = true;
let keysActive = true;
let socket, cnvs, ctx, canvasDOM;
let fileName = "./frames/sketch";
let maxFrames = 20;
let gl, shaderProgram;
let time;
let positive = true;
let intensity;
let drawCount = 0;
let drawIncrement = 1;
let vertexBuffer;
let vertices = [];
var drawingGeometry = true;
let shaderPrograms = {};
const seed = 10;
const openSimplex = openSimplexNoise(seed);
let mS = 1;
let amountOfScratches = 3;
// drawCount = 6000;
var maxDrawCount = 12500;


// wobSpeed = 1, alLow = 0.025, alHigh = 1.5, borHigh = 0, midHigh = 0.5
// let noisy = { wS: 1, aL: 0.025, aH: 1.5, bH: 0, mH: 1 };

let noiseLevel = 1;
let noisy;

function makeNoise(lin) {
    return {
        wS: lerp(0.1, 1, lin),
        aL: lerp(1, 0.025, lin),
        aH: lerp(1, 1.5, lin),
        bH: Math.max(lerp(1, 0, lin), 1),
        mH: lerp(1, 0.5, lin)
    };
}

function setup() {
    socket = io.connect('http://localhost:8080');
    // socket.on('receiveOSC', receiveOSC);
    pixelDensity(1);
    cnvs = createCanvas(windowWidth, windowWidth * 9 / 16, WEBGL);
    canvasDOM = document.getElementById('defaultCanvas0');
    // noCanvas();
    // cnvs = document.getElementById('my_Canvas');
    gl = canvas.getContext('webgl');
    // canvasDOM = document.getElementById('my_Canvas');
    // canvasDOM = document.getElementById('defaultCanvas0');
    // gl = canvasDOM.getContext('webgl');
    // gl = cnvs.drawingContext;

    // gl = canvasDOM.getContext('webgl', { premultipliedAlpha: false });



    // gl.colorMask(false, false, false, true);
    // gl.colorMask(false, false, false, true);

    // Clear the canvas
    gl.clearColor(0.0, 0.0, 0.0, 1.0);

    // Enable the depth test
    gl.enable(gl.DEPTH_TEST);
    gl.depthMask(false);

    // Clear the color buffer bit
    gl.clear(gl.COLOR_BUFFER_BIT);
    // gl.colorMask(true, true, true, true);
    // gl.clear(gl.COLOR_BUFFER_BIT);
    gl.enable(gl.BLEND);
    // gl.blendFunc(gl.SRC_ALPHA, gl.ONE_MINUS_SRC_ALPHA);
    // gl.blendFunc(gl.SRC_ALPHA, gl.ONE_MINUS_SRC_ALPHA);
    gl.blendFuncSeparate(gl.SRC_ALPHA, gl.ONE_MINUS_SRC_ALPHA, gl.ONE, gl.ONE_MINUS_SRC_ALPHA);
    // gl.blendFunc(gl.SRC_ALPHA, gl.DST_ALPHA);
    // gl.blendFunc(gl.SRC_ALPHA, gl.DST_ALPHA);
    // Set the view port
    gl.viewport(0, 0, cnvs.width, cnvs.height);
    frameRate(20);
    // background(0);
    // fill(255, 50);
    noStroke();

    vertex_buffer = gl.createBuffer();
    if (!looping) {
        noLoop();
    }
    createInfoDiv();
    setupInfoDiv();
    noisy = makeNoise(noiseLevel);
}

draw = function() {
    gl.clear(gl.COLOR_BUFFER_BIT);
    // runXSheet(xSheet2);
    runXSheet(xSheet);
    if (drawCount == 0) {
        // setDotsShaders();
        createWhiteDots();
        gl.useProgram(shaderPrograms["whiteDots"].shaderProgram);
    }
    // gl.useProgram(shaderPrograms["whiteDots"].shaderProgram);
    // drawDots("whiteDots", 3000);
    // vertices = [];
    // gl.useProgram(shaderPrograms["redDots"].shaderProgram);
    // drawScratches();
    drawDots("whiteDots", 6000 + (amountOfScratches * 100));
    sheetSlider.value(drawCount);
    // info1.html();
    sliderInfo1.html(queryXSheet(xSheet) + ": " + drawCount);
    // shader() sets the active shader with our shader
    // shader(shaderProgram);
    // texcoordShader.setUniform('time', frameCount);
    // rect gives us some geometry on the screen
    // rect(0, 0, width, height);
    // console.log("Drawing!");
    //     setBGShaders();
    //     gl.uniform1f(time, drawCount);
    //     drawBG();
    //     setOverlayShaders();
    //     gl.uniform1f(time, drawCount);
    //     drawBG();
    drawCount += drawIncrement;
    if (exporting && drawCount < maxDrawCount) {
        frameExport();
    }
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
    }
}