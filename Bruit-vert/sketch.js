let looping = true;
let keysActive = true;
let socket, cnvs, ctx, canvasDOM;
let fileName = "./frames/alligator/alligator";
fileName = "./frames/pulsar/pulsar";
// fileName = "./frames/smoke/smoke";
fileName = "./frames/swirl/swirl";
fileName = "./frames/swirl-fadeout-flicker/swirl-fadeout-flicker";
fileName = "./frames/alligator-flicker2/alligator-flicker2";
fileName = "./frames/smoke/smoke";
fileName = "./frames/meadow/meadow";
fileName = "./frames/alligator-new/alligator-new";
fileName = "./frames/pulsar-super/pulsar-super";
fileName = "./frames/swirl-fadeout-flicker-02/swirl-fadeout-flicker-02";
fileName = "./frames/purple-swirl/purple-swirl";
fileName = "./frames/foggy-swirl/foggy-swirl";
fileName = "./frames/purple-swirl-flicker/purple-swirl-flicker";
fileName = "./frames/alligator-foggy/alligator-foggy";
fileName = "./frames/purple-pulsar/purple-pulsar";
fileName = "./frames/brume/brume";
fileName = "./frames/pink-pulsar/pink-pulsar";
fileName = "/Volumes/Volumina/frames/lueurs/pink-pulsar/pink-pulsar"
fileName = "/Volumes/Volumina/frames/lueurs/swirl-quiet/swirl-quiet"
let maxFrames = 15000;
// maxFrames = 925;
// maxFrames = 3000;
// maxFrames = 1300;
// maxFrames = 1200;
// maxFrames = 1100;
let gl;
let time;
let positive = true;
let intensity;
let drawCount = 1110;
drawCount = 0;
let drawIncrement = 1;
let vertexBuffer;
let vertices = [];
const seed = 10;
const openSimplex = openSimplexNoise(seed);
let mS = 1;
let amountOfScratches = 3;
let fluctuation = 1;
let namedPrograms = {};

// a shader variable
let texcoordShader;
let dotsVBuf, bgVBuf;

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
    dotsVBuf = gl.createBuffer();
    bgVBuf = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, vertex_buffer);
    if (!looping) {
        noLoop();
    }
    shadersReadyToInitiate = true;
    initializeShaders();
    createWhiteDots();
    time = gl.getUniformLocation(getProgram("pulsar-fog"), "time");
}

// draw = function() {
//     if (frameCount == 1) {
//         setShaders();
//     }
//     // gl.uniform1fv(time, frameCount);
//     // sendSuperCollider();
//     gl.uniform1f(time, drawCount);
//     // shader() sets the active shader with our shader
//     // shader(texcoordShader);
//     // shaderProgram.setUniform('time', frameCount);
//     // rect gives us some geometry on the screen
//     // rect(0, 0, width, height);
//     let aspect = cnvs.width / cnvs.height;
//     let vertices = new Float32Array([-1, 1, 1, 1, 1, -1, // Triangle 1
//         -1, 1, 1, -1, -1, 1 // Triangle 2
//     ]);
//     let vbuffer = gl.createBuffer();
//     gl.bindBuffer(gl.ARRAY_BUFFER, vbuffer);
//     gl.bufferData(gl.ARRAY_BUFFER, vertices, gl.STATIC_DRAW);
//     let itemSize = 2;
//     let numItems = vertices.length / itemSize;
//     // gl.useProgram(shaderProgram);
//     // program.uColor = gl.getUniformLocation(program, "uColor");
//     // gl.uniform4fv(program.uColor, [0.0, 0.3, 0.0, 1.0]);
//     shaderProgram.aVertexPosition = gl.getAttribLocation(shaderProgram, "aPosition");
//     gl.enableVertexAttribArray(shaderProgram.aVertexPosition);
//     gl.vertexAttribPointer(shaderProgram.aVertexPosition, itemSize, gl.FLOAT, false, 0, 0);
//     gl.drawArrays(gl.TRIANGLES, 0, numItems);
//     drawCount += drawIncrement;
// }

// function windowResized() {
//     resizeCanvas(windowWidth, windowHeight);
// }
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
    // if (drawCount == 0) {
    //     setDotsShaders();
    // }
    // console.log("Bloink!");
    // if (drawCount == 0) {
    //     // setDotsShaders();
    //     createWhiteDots();
    // }
    let currentProgram = getProgram("pulsar-fog");
    gl.useProgram(currentProgram);
    drawBG(currentProgram);
    // oldSetBGShaders();
    // oldDrawBG();
    // currentProgram = namedPrograms["redDots"].shaderProgram;
    // currentProgram = getProgram("white-flickering-dots");
    currentProgram = getProgram("new-flickering-dots");
    // currentProgram = getProgram("gold");
    // currentProgram = getProgram("pulsar-dots");
    // currentProgram = getProgram("white-pulsar-dots");
    // console.log(currentProgram);
    // currentProgram = getProgram("faster-dots");
    gl.useProgram(currentProgram);
    // drawPulsar(currentProgram);
    drawSwirl(currentProgram);
    // if (drawCount % 100 == 0) {
    //     mS = random(0.8, 1);
    // }
    // if (drawCount % 10 == 0) {
    //     if (Math.random() > 0.97) {
    //         amountOfScratches = random(160, 60);
    //         // fluctuation = 4;
    //     } else {
    //         amountOfScratches = 3;
    //         // fluctuation = 1;
    //     }
    //     // amountOfScratches = (Math.random() > 0.95) ? random(160, 60) : 3;
    //     // fluctuation = (Math.random() > 0.95) ? 4 : 1;
    // }
    // vertices = [];
    // for (let i = 0; i < 3000; i++) {
    //     let v = Math.random();
    //     let s = (v >  0.99) ? 10 : 1;
    //     s = (v > 0.9995) ? s * random(1, 4) : s;
    //     s *= mS;
    //     vertices.push(Math.random() * 2 - 1, Math.random() * 2 - 1, s + Math.random() * 0.5 * s);
    // }
    // let n = Math.PI * 1 / 100;
    // for (let m = 0; m < amountOfScratches; m++) {
    //     let s = Math.random() * Math.PI * 2;
    //     let sX = Math.random() * 2 - 1;
    //     let sY = Math.random() * 2 - 1;
    //     let sC = (Math.random() < 0.5) ? 0.01 : 1;
    //     let osc = Math.sin(drawCount * m);
    //     for (let i = s; i < Math.PI + s; i += n) {
    //         //         let x = cos(i) * cos(i * osc) * 0.1 + sX;
    //         //         let y = sin(i) * sin(i * osc) * 0.175 + sY;
    //         let x = cos(i * 0.1) * tan(osc * 10) * cos(i * osc) * 0.1 + sX;
    //         let y = sin(i * 0.1) * tan(osc * 10) * sin(i * osc) * 0.175 + sY;
    //         vertices.push(x, y, random(2, 20) * sC * mS);
    //     }
    // }
    // gl.useProgram(shaderPrograms["scratches"].shaderProgram);
    // drawGenericDots(shaderPrograms["scratches"].shaderProgram, 3000 + (amountOfScratches * 100));
    //     setOverlayShaders();
    //     gl.uniform1f(time, drawCount);
    //     drawBG();
    drawCount += drawIncrement;
    // if (exporting && frameCount < maxFrames && drawCount > 1113) {
    if (exporting && frameCount < maxFrames && drawCount > 556) {
        frameExport();
    }
}

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