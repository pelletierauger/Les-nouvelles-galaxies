var p;
var pSize = 200;
var theSize;
var iteration = 50;
var lerpIteration = 0;
var looping = true;
var s = 2.5;
var bufferRedraw = true;
var a = 150;
var transitioning = false;
var transition = 0;

var scalar = 1;
var scalarTransitioning = false;
var scalarTransition = 0;

var iterationTransitioning = false;
var iterationTransition = 0;
var iterationFading = 0;

var transitionSpeed = 0.0001;

var iterationTransitionSpeed = 0.01;

p5.disableFriendlyErrors = true;

function setup() {
    createCanvas(windowWidth, windowHeight);
    frameRate(24);
    rotate(PI);
    noStroke();;
}

function draw() {
    fill(255, a);
    translate(width / 2, height / 2);
    // background(0);
    if (bufferRedraw) {
        background(0);
    }
    p = [];
    lerpIteration = map(sin(frameCount / 500), -1, 1, 0.25, 0.85);

    if (iterationTransitioning) {
        iterationTransition += iterationTransitionSpeed;
        iterationFading = cosineFade(iterationTransition);
        // console.log(iterationTransition);
        if (iterationTransition >= 1) {
            iterationTransitioning = false;
            iterationTransition = 0;
        }
    }

    for (var i = 0; i < pSize; i++) { 
        var t = i / (PI * 0.25);
        // t = i;

        if (!transitioning) {
            v = formulas[currentFormula].run(t);
        } else if (transitioning) {
            var previous = (currentFormula == 0) ? formulas.length - 1 : currentFormula - 1;
            var fade = cosineFade(transition);
            var v1 = formulas[previous].run(t);
            var v2 = formulas[currentFormula].run(t);
            v = {
                x: lerp(v1.x, v2.x, fade),
                y: lerp(v1.y, v2.y, fade)
            };
            transition += transitionSpeed;
            if (transition >= 1) {
                transitioning = false;
            }
        }

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
        // var mapR = map(sin(frameCount / 8), -1, 1, 0, 25);
        // push();
        // translate(random(-mapR, mapR), random(-mapR, mapR));
        // scale(abs(1 + mapR / 100), abs(1 + mapR / 100));
        ellipse(p[j].x * scalar, p[j].y * scalar, s, s);
        // pop();
    }

    // lerpIteration += 0.005;
    // if (lerpIteration > 1) {
    //     lerpIteration = 0;
    //     if (iteration > pSize) {
    //         iteration = 0;
    //     }
    //     // iteration++;
    // }
    // console.log(frameRate());
}

function viHart2(point, a) {
    if (!iterationTransitioning) {

        var indexTarget = point + a;
        if (p[point] && p[indexTarget]) {
            var newX = lerp(p[point].x, p[indexTarget].x, lerpIteration);
            var newY = lerp(p[point].y, p[indexTarget].y, lerpIteration);
            var v = createVector(newX, newY);
            p.push(v);
        }

    } else if (iterationTransitioning) {

        var indexTarget = point + a - 1;
        var indexTarget2 = point + a;

        if (p[point] && p[indexTarget] && p[indexTarget2]) {
            var newX = lerp(p[point].x, p[indexTarget].x, lerpIteration);
            var newY = lerp(p[point].y, p[indexTarget].y, lerpIteration);
            var v1 = createVector(newX, newY);

            var newX2 = lerp(p[point].x, p[indexTarget2].x, lerpIteration);
            var newY2 = lerp(p[point].y, p[indexTarget2].y, lerpIteration);
            var v2 = createVector(newX2, newY2);
        }
        var x = lerp(v1.x, v2.x, iterationFading);
        var y = lerp(v1.y, v2.y, iterationFading);
        var v = createVector(x, y);
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
    if (key == 'e' || key == 'E') {
        iteration--;
        iterationTransitioning = true;
        iterationTransition = 0;
    }
    if (key == 'r' || key == 'R') {
        iteration++;
        iterationTransitioning = true;
        iterationTransition = 0;
    }
    if (key == 'q' || key == 'Q') {
        if (bufferRedraw) {
            bufferRedraw = false;
        } else {
            bufferRedraw = true;
        }
    }
    if (key == 'a' || key == 'A') {
        if (currentFormula < formulas.length) {
            currentFormula++;
        } else {
            currentFormula = 0;
        }
        transitioning = true;
        transition = 0;
    }
    if (key == 'l' || key == 'L') {
        scalar += 0.1;
    }
    if (key == 'k' || key == 'K') {
        scalar -= 0.1;
    }
    if (key == 'n' || key == 'N') {
        transitionSpeed *= 0.5;
        transitionSpeed = max(0.0001, transitionSpeed);
    }
    if (key == 'm' || key == 'M') {
        transitionSpeed *= 2;
    }
    // if (key == 'v' || key == 'V') {
    //     iterationTransitionSpeed *= 0.5;
    //     iterationTransitionSpeed = max(0.0001, iterationTransitionSpeed);

    // }
    // if (key == 'b' || key == 'B') {
    //     iterationTransitionSpeed *= 2;
    // }


}

function cosineFade(sum) {
    // var fade = map(sum, 0, 1, 0, 1);
    // var fadeCons = constrain(fade, 0, 1);
    var fadeSmooth = sum * PI;
    var coFade = map(cos(fadeSmooth), 1, -1, 0, 1);
    return coFade;
}
