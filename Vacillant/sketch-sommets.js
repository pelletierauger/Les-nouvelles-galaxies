let looping = true;
let socket, cnvs, ctx, canvasDOM;
let frameName = "./frames/oscillators";
// let maxFrames = 20;
//----
var x, y, t;
var b = 255;
var globalGraph = [];
var drawCount = 6000;
var maxDrawCount = 12500;
var drawingGeometry = true;

function setup() {
    socket = io.connect('http://localhost:8080');
    cnvs = createCanvas(windowWidth, windowWidth / 16 * 9);
    ctx = cnvs.drawingContext;
    canvasDOM = document.getElementById('defaultCanvas0');
    //---
    frameRate(24);
    createInfoDiv();
    background(0);
    fill(255, 150);
    noStroke();
    if (!looping) {
        noLoop();
    }
    setupInfoDiv();
}

function draw() {
    translate(width / 2, height / 2);
    background(0, b);
    runXSheet(xSheet);
    simple.output(globalGraph, 1);
    sheetSlider.value(drawCount);
    info1.html(queryXSheet(xSheet));
    // info2.html("length : " + globalGraph.length + ", 2999 : " + globalGraph[2999].x);
    // info4.html("1 : " + globalGraph[1].x);

    var sumZero = 0;
    for (var i = 0; i < globalGraph.length; i++) {
        if (globalGraph[i].x === 0 && globalGraph[i].y === 0)
            sumZero++;
    }
    info5.html("Sum of zeros : " + sumZero);
    sliderInfo1.html("drawCount : " + drawCount);
    drawCount++;
    if (exporting && drawCount < maxDrawCount) {
        frameExport();
    }
}

function keyPressed() {
    if (keyCode === 32) {
        if (looping) {
            noLoop();
            looping = false;
        } else {
            loop();
            looping = true;
        }
    }
    if (key == 'g' || key == 'G') {
        toggleInfoDiv();
    }
}