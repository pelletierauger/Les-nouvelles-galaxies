var x, y, t, w;
var drawCount = 0;
var looping = true;
var showPanel = true;
var exporting = false;
var fileName = "lame_friction_01";
var shape;
var showYellow = true;
var norma = false;
var formattedXVel = 0;
var formattedYVel = 0;
var formattedXAcc = 0;
var formattedYAcc = 0;
var m = 4;
var n = 4;
// var a = 2;
// var sc = 100;
// var b = 2;
var bg = 255;
var al = 255;
// var s = 2.5;
var l = 1;
var rr, gg, bb;
var nb = true;


function setup() {
    loadJSON("https://dl.dropboxusercontent.com/u/1484440/art_numerique/palettes.json", gotPalettes);
    createCanvas(windowWidth, windowHeight);
    frameRate(30);
    createInfoDiv();
    setupInfoDiv();

    if (!looping) {
        noLoop();
    }
    noStroke();
    w = new Walker();
}

function draw() {
    translate(width / 2, height / 2);
    if (nb) {
        background(0, bg)
    } else {
        background(erase_color.r, erase_color.g, erase_color.b, bg);
    }
    scale(zoom.value, zoom.value);
    for (var i = 0; i < amounts.value; i++) {
        t = drawCount * speed.value;
        var v = shape.runEquation(t);
        w.update(v);

        if (nb) {
            fill(255, al);
        } else {
            var col = hexToRgb(palette[currentColor]);
            fill(col.r, col.g, col.b, al);
            currentColor++;
            if (currentColor > 4) {
                currentColor = 0
            };
        }
        w.display();
        if (showYellow) {
            fill(255, 255, 0);
            ellipse(v.x, v.y, 2.5, 2.5);
        }
        drawCount++;
    }
    if (exporting) {
        frameExport();
    }
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
        this.acc.mult(accMult.value);
        this.vel.add(this.acc);
        this.pos.add(this.vel);
        this.vel.mult(velMult.value);
    }

    this.display = function() {
        ellipse(this.pos.x, this.pos.y, s.value, s.value);
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
    if (key == 'y' || key == 'Y') {
        showYellow = (showYellow) ? false : true;
    }
    if (key == 'r' || key == 'R') {
        change_color();
    }
    if (key == 't' || key == 'T') {
        change_erase_color();
    }
    if (key == 'n' || key == 'N') {
        nb = (nb) ? false : true;
    }

    if (key == 'g' || key == 'G') {
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