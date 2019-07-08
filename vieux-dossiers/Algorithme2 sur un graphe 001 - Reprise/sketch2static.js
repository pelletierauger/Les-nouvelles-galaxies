var p;
var pSize = 200;
var theSize;
var iteration = 60;
var lerpIteration = 0;
var looping = true;
var s = 2.5;
var bufferRedraw = true;
var exporting = true;
var a = 150;

p5.disableFriendlyErrors = true;

function setup() {
    createCanvas(windowWidth, windowHeight);
    frameRate(24);
    rotate(PI);
    noStroke();
    if (!looping) {
        noLoop();
    }
}

function draw() {
    fill(255, a)
    translate(width / 2, height / 2);
    background(0);
    if (bufferRedraw) {
        background(0);
    }
    p = [];
    lerpIteration = map(sin(frameCount / 500), -1, 1, 0.25, 0.85);

    for (var i = 0; i < pSize; i++) { 
        var t = i / (PI * 0.25);
        // t = i;
        v = formula.run(t);
        p.push(v);
    }

    var theOriginalSize = p.length;
    for (var mi = 0; mi < 40; mi++) {
        theSize = p.length;
        for (var li = mi * theOriginalSize; li < theSize; li++) {
            viHart2(li, iteration);
        }
    }

    // for (var j = 0; j < p.length; j++) {
    //     ellipse(p[j].x, p[j].y, s, s);
    // }
    // blendMode(ADD);
    // for (var q = 0; q < 5; q++) {
    //     var mapFill = map(q, 0, 4, 0, 10);
    //     var mapSize = map(q, 0, 4, 150, 0);
    //     for (var j = 0; j < p.length; j++) {
    //         fill(mapFill, 5);
    //         ellipse(p[j].x, p[j].y, mapSize, mapSize);
    //     }
    // }
    // for (var k = 0; k < 5; k++) {
    //     var mapFill = map(k, 0, 4, 0, 5);
    //     var mapSize = map(k, 0, 4, 50, 2);
    //     for (var j = 0; j < p.length; j++) {
    //         fill(mapFill, 50);
    //         ellipse(p[j].x, p[j].y, mapSize, mapSize);
    //     }
    // }

    for (var jjjj = 0; jjjj < p.length; jjjj++) {
        for (var k = 0; k < 100; k++) {
            var mapR = map(sin(frameCount / 8), -1, 1, 0, 50);
            push();
            translate(random(-mapR, mapR), random(-mapR, mapR));
            fill(255, 20);
            ellipse(p[jjjj].x, p[jjjj].y, 1, 1);
            pop();
        }
    }

    for (var jj = 0; jj < 5; jj++) {
        var mapAlpha = map(jj, 0, 4, 0, 155);
        var mapSize = map(jj, 0, 4, 5, 1);
        for (var j = 0; j < p.length; j++) {
            fill(255, mapAlpha);
            ellipse(p[j].x, p[j].y, mapSize, mapSize);
        }
    }

    // blendMode(BLEND);

    // lerpIteration += 0.005;
    // if (lerpIteration > 1) {
    //     lerpIteration = 0;
    //     if (iteration > pSize) {
    //         iteration = 0;
    //     }
    //     // iteration++;
    // }
    // console.log(frameRate());
    if (exporting) {
        frameExport();
    }
}

function viHart2(point, a) {
    var indexTarget = point + a;
    if (p[point] && p[indexTarget]) {
        var newX = lerp(p[point].x, p[indexTarget].x, lerpIteration);
        var newY = lerp(p[point].y, p[indexTarget].y, lerpIteration);
        var v = createVector(newX, newY);
        p.push(v);
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
    if (key == 'r' || key == 'R') {
        iteration++;
    }
    if (key == 'q' || key == 'Q') {
        if (bufferRedraw) {
            bufferRedraw = false;
        } else {
            bufferRedraw = true;
        }
    }
}

function frameExport() {
    var formattedFrameCount = "" + frameCount;
    while (formattedFrameCount.length < 5) {
        formattedFrameCount = "0" + formattedFrameCount;
    }
    save("algograph02" + formattedFrameCount + ".png");
}
