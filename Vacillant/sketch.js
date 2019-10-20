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
const seed = 10;
const openSimplex = openSimplexNoise(seed);

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
}

draw = function() {
    gl.clear(gl.COLOR_BUFFER_BIT);
    runXSheet(xSheet);
    for (let i = 0; i < 3000; i++) {
        let v = Math.random();
        let s = (v > 0.99) ? 10 : 1;
        s = (v > 0.9995) ? s * random(1, 4) : 1;
        vertices.push(Math.random() * 2 - 1, Math.random() * 2 - 1, s +  Math.random() * 0.01 * s);
    }
    let n = Math.PI * 1 / 100;
    let s = Math.random() * Math.PI * 2;
    let sX = Math.random() * 2 - 1;
    let sY = Math.random() * 2 - 1;
    let sC = (Math.random() < 0.9) ? 0.01 : 1;
    for (let i = s; i < Math.PI + s; i += n) {
        let osc = Math.sin(drawCount);
        let x = cos(i) * cos(i * osc) * 0.1 + sX;
        let y = sin(i) * sin(i * osc) * 0.175 + sY;
        vertices.push(x, y, random(2, 20) * sC);
    }
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
    if (drawCount == 0) {
        setDotsShaders();
    }
    drawDots();
    //     setOverlayShaders();
    //     gl.uniform1f(time, drawCount);
    //     drawBG();
    drawCount += drawIncrement;
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