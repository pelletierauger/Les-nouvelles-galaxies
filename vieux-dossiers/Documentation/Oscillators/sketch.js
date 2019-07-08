var x, y, t;
var b = 255;
var globalGraph = [];
var drawCount = 0;
var looping = false;
var exporting = false;
var drawingGeometry = true;

function setup() {
    createCanvas(windowWidth, windowWidth * 9 / 16);
    translate(width / 2, height / 2);
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
    background(0, b);
    // scale(0.8,0.8);
    runXSheet(xSheet);
    simple.output(globalGraph, 1);
    // purpleBubbles.output(globalGraph, 1);
    if (exporting) {
        frameExport();
    }
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
    if (key == 'p' || key == 'P') {
        prim();
    }
}

function frameExport() {
    var formattedFrameCount = "" + drawCount;
    while (formattedFrameCount.length < 5) {
        formattedFrameCount = "0" + formattedFrameCount;
    }
    save("oscillators_001_" + formattedFrameCount + ".png");
}
