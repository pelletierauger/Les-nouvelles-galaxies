var x, y, t, w;
var drawCount = 0;
var looping = true;
var showPanel = true;
var exporting = false;
var fileName = "lame_friction_01";
var speed = 0;
var accMult = 0;
var velMult = 1;
var amounts = 1;
var shape = "circle";
var showYellow = true;
var norma = false;
var formattedXVel = 0;
var formattedYVel = 0;
var formattedXAcc = 0;
var formattedYAcc = 0;
var drawUpdate = 0;
var m = 4;
var n = 4;
var a = 2;
var sc = 100;
var b = 2;
var bg = 10;
var al = 255;
var s = 2.5;
var l = 1;
var rr, gg, bb;


function setup() {
    createCanvas(windowWidth, windowHeight);
    frameRate(30);
    createInfoDiv();
    setupInfoDiv();
    translate(width / 2, height / 2);
    if (!looping) {
        noLoop();
    }
    noStroke();
    w = new Walker();
}

function draw() {
    if (drawUpdate > 5) {
        sliderInfo6.html("Velocity x: " + formattedXVel + ", y: " + formattedYVel);
        sliderInfo7.html("Acceleration x: " + formattedXAcc + ", y: " + formattedYAcc);

        drawUpdate = 0;
    }
    background(0, bg);
    scale(zoom, zoom);
    for (var i = 0; i < amounts; i++) {
        t = drawCount * speed;
        m = map(sin(t / sc), -1, 1, 0, 4);
        n = map(sin(t / sc), -1, 1, 0, 4);
        var v = createPath(t);
        w.update(v);
        fill(255, al);
        // rr = map(m,0,15,80,255);
        // // gg = map(m,0.5,5,0,180);
        // // bb = map(m,0.5,5,40,80);
        // rr = map(sin(t),-1,1,0,255);
        // gg = map(sin(t),-1,1,140,0);
        // bb = map(cos(t),-1,1,240,80);
        // bb = map(abs(w.pos.x),0, width,0,255);
        // fill(rr,gg,bb,al);
        w.display();
        if (showYellow) {
            fill(255, 255, 0);
            ellipse(v.x, v.y, 2.5, 2.5);
        }
        drawCount++;
    }
    drawUpdate++;
    if (exporting) {
        frameExport();
    }
}

function createPath(tt) {
    var x, y;
    switch (shape) {
        case "circle":
            x = sin(tt) * 100;
            y = cos(tt) * 100;
            var xx = pow(sin(tt), 11) * 100;
            var yy = cos(tt) * 100;
            var le = map(sin(tt / sc), -1, 1, -2, 2);
            var lerpX = lerp(x, xx, le);
            var lerpY = lerp(y, yy, le);
            x = lerpX;
            y = lerpY;
            break;
        case "top":
            x = pow(sin(tt), 11) * 100;
            y = cos(tt) * 100;
            break;
        case "superellipse":
            var ct = cos(tt);
            var st = sin(tt);
            x = a * Math.sign(ct) * pow(abs(ct), 2 / m) * 40;
            y = b * Math.sign(st) * pow(abs(st), 2 / n) * 25;
            break;
        case "lissajous":
            x = sin(tt * 2) * 100;
            y = cos(tt * 3) * 100;
            break;
        case "personnelle":
            var ct = cos(tt);
            var st = sin(tt);
            x = a * Math.sign(ct) * pow(abs(ct), 2 / m) * pow(sin(tt / 2), 7) * 40;
            y = b * Math.sign(st) * pow(abs(st), 2 / n) * sin(tt / 2) * 25;
            break;
        default:
            x = sin(tt) * 100;
            y = cos(tt) * 100;
    }
    var v = createVector(x, y);
    return v;
}

function Walker() {
    this.pos = createVector(0, 0);
    this.vel = createVector(0, 0);

    this.reset = function() {
        this.pos = createVector(0, 0);
        this.vel = createVector(0, 0);
    }

    this.update = function(vec) {
        this.acc = p5.Vector.sub(vec, this.pos);
        if (norma) {
            this.acc.normalize();
        }
        this.acc.mult(accMult);
        formattedXAcc = Math.round(this.acc.x * 100) / 100;
        formattedYAcc = Math.round(this.acc.y * 100) / 100;
        // this.acc.setMag(accMult);
        this.vel.add(this.acc);
        formattedXVel = Math.round(this.vel.x * 100) / 100;
        formattedYVel = Math.round(this.vel.y * 100) / 100;

        this.pos.add(this.vel);
        this.vel.mult(velMult);
    }

    this.display = function() {
        var t = drawCount;
        var xx = cos(t / (sin(t / 1000))) * 600;
        var yy = sin(t / (sin(t / 1000))) * 350;
        var lerpX = lerp(xx, this.pos.x, l);
        var lerpY = lerp(yy, this.pos.y, l);
        ellipse(lerpX, lerpY, s, s);
        // ellipse(this.pos.x, this.pos.y, s, s);
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
    if (key == 'p' || key == 'P') {
        if (looping) {
            noLoop();
            looping = false;
        } else {
            loop();
            looping = true;
        }
    }
    if (key == 'y' || key == 'Y') {
        showYellow = (showYellow) ? false : true;
    }

    if (key == 't' || key == 'T') {
        if (showPanel) {
            showPanel = false;
            infoDiv.style("display", "none");
        } else {
            showPanel = true;
            infoDiv.style("display", "block");
        }
    }
}

function frameExport() {
    var formattedFrameCount = "" + frameCount;
    while (formattedFrameCount.length < 5) {
        formattedFrameCount = "0" + formattedFrameCount;
    }
    save(fileName + "_" + formattedFrameCount + ".png");
}