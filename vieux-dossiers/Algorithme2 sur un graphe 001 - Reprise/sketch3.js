var p;
var pSize = 200;
var theSize;
var iteration = 55;
var lerpIteration = 0;
var looping = true;
var s = 2.5;
var bufferRedraw = true;
var a = 150;

p5.disableFriendlyErrors = true;

function setup() {
    createCanvas(windowWidth, windowHeight);
    frameRate(24);
    rotate(PI);
    noStroke();;
}

function draw() {
    fill(255, a)
    translate(width / 2, height / 2);
    // background(0);
    if (bufferRedraw) {
        background(0);
    }
    p = [];
    // lerpIteration = map(sin(frameCount / 500), -1, 1, 0.25, 0.85);

    for (var i = 0; i < pSize; i++) { 
        var t = i / (PI * 0.25);
        // t = i;
        v = daysOfStOurs6.run(t);
        p.push(v);
    }

    var theOriginalSize = p.length;
    for (var mi = 0; mi < 40; mi++) {
        theSize = p.length;
        for (var li = mi * theOriginalSize; li < theSize; li++) {
            viHart2(li, iteration);
        }
    }

    for (var j = 0; j < p.length; j++) {
        ellipse(p[j].x, p[j].y, s, s);
    }

    lerpIteration += 0.05;
    if (lerpIteration > 1) {
        lerpIteration = 0;
        if (iteration > pSize) {
            iteration = 0;
        }
        iteration++;
    }
    // console.log(frameRate());
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
