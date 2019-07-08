var p;
var pSize = 200;
var theSize;
var iteration = 1;
var lerpIteration = 0;
var looping = true;

function setup() {
    createCanvas(windowWidth, windowHeight);
    frameRate(24);
    rotate(PI);
    background(0);
    noStroke();
    fill(255, 150);
}

function draw() {
    translate(width / 2, height / 2);
    background(0);
    p = [];

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

    for (var j = 0; j < p.length; j++) {
        ellipse(p[j].x, p[j].y, 2.5, 2.5);
    }

    lerpIteration += 0.005;
    if (lerpIteration > 1) {
        lerpIteration = 0;
        if (iteration > pSize) {
            iteration = 0;
        }
        iteration++;
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
}