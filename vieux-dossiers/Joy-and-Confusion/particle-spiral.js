function Particle() {
    this.pos = new p5.Vector(0, 0);
    this.vel = new p5.Vector(0, 0);

    this.reset = function() {
        this.pos = new p5.Vector(0, 0);
        this.vel = new p5.Vector(0, 0);
    }

    this.update = function(controller, vec, offset) {
        this.acc = p5.Vector.sub(vec, this.pos);
        if (norma) {
            this.acc.normalize();
        }
        this.acc.mult(controller.accMult);
        this.vel.add(this.acc);
        this.pos.add(this.vel);
        this.vel.mult(controller.velMult);
    }
}

Particle.prototype.run = function(controller, t) {
    var scalar = controller.privateValues.scalar;
    var g = [];
    var yellowGraph = [];
    for (var i = 0; i < 1000; i++) {
        var tt = (1000 * t + i) * controller.speed;
        var v = controller.privateValues.shape.runEquation(controller, tt);
        yellowGraph.push(v);
        this.update(controller, v, t);
        var vec = createVector(this.pos.x * scalar, this.pos.y * scalar);
        g.push(vec);

    }
    return {
        g: g,
        yellowGraph: yellowGraph
    }
};

function spiral(controller, t) {
    var graph = [];
    var scalar = controller.privateValues.scalar;
    var vals = controller.privateValues.spiral;
    var angleTrig = vals.angle;
    var hyp = controller.privateValues.spiral.hyp || 0.2;
    var x = 0;
    var y = 0;
    for (var j = 0; j < 1000; j++) {
        var vec = createVector(x * scalar, y * scalar);
        graph.push(vec);
        x += cos(angleTrig + angleTrig * j) * (hyp + (j / 50));
        y += sin(angleTrig + angleTrig * j) * (hyp + (j / 50));
    }
    return graph;
}

function octogonalSpiral(controller, t) {
    var graph = [];
    var scalar = controller.privateValues.scalar;
    var vals = controller.privateValues.spiral;
    var angleTrig = vals.angle;
    var hyp = controller.privateValues.spiral.hyp || 0.2;
    var x = 0;
    var y = 0;
    for (var j = 0; j < 1000; j++) {
        var t = angleTrig + angleTrig * j;
        var vec = createVector(x * scalar, y * scalar);
        graph.push(vec);
        x += cos(t) * cos(t * 4) * cos(t * 4) * (hyp + (j / 50));
        y += sin(t) * cos(t * 4) * cos(t * 4) * (hyp + (j / 50));
    }
    return graph;
}

function spiderWebSpiral(controller, t) {
    var graph = [];
    var scalar = controller.privateValues.scalar;
    var vals = controller.privateValues.spiral;
    var angleTrig = vals.angle;
    var hyp = controller.privateValues.spiral.hyp || 0.2;;
    var x = 0;
    var y = 0;

    for (var j = 0; j < 1000; j++) {
        var t = angleTrig + angleTrig * j;
        var vec = createVector(x * scalar, y * scalar);
        graph.push(vec);

        x += cos(t) * cos(t * 1) * cos(t * 0.5) * (hyp + (j / 50));
        y += sin(t) * cos(t * 1) * cos(t * 0.5) * (hyp + (j / 50));

    }
    return graph;
}

function triSpiral(controller, t) {
    var graph = [];
    var scalar = controller.privateValues.scalar;
    var vals = controller.privateValues.spiral;
    var angleTrig = vals.angle;
    var hyp = controller.privateValues.spiral.hyp || 0.2;
    var x = 0;
    var y = 0;

    for (var j = 0; j < 1000; j++) {
        var t = angleTrig + angleTrig * j;
        var vec = createVector(x * scalar, y * scalar);
        graph.push(vec);

        x += cos(t) * pow(cos(t * 3), 1) * (hyp + (j / 50));
        y += sin(t) * pow(cos(t * 3), 1) * (hyp + (j / 50));
    }
    return graph;
}

function starrySpiral(controller, t) {
    var graph = [];
    var scalar = controller.privateValues.scalar;
    var vals = controller.privateValues.spiral;
    var angleTrig = vals.angle;
    var hyp = controller.privateValues.spiral.hyp || 0.2;
    var x = 0;
    var y = 0;

    for (var j = 0; j < 1000; j++) {
        var t = angleTrig + angleTrig * j;
        var vec = createVector(x * scalar, y * scalar);
        graph.push(vec);

        x += cos(t) * pow(cos(t * 4), 1) * (hyp + (j / 50));
        y += sin(t) * pow(cos(t * 4), 1) * (hyp + (j / 50));

    }
    return graph;
}

function nonCrossingStarSpiral(controller, t) {
    var graph = [];
    var scalar = controller.privateValues.scalar;
    var vals = controller.privateValues.spiral;
    var angleTrig = vals.angle;
    var hyp = controller.privateValues.spiral.hyp || 0.2;
    var x = 0;
    var y = 0;

    for (var j = 0; j < 1000; j++) {
        var t = angleTrig + angleTrig * j;
        var vec = createVector(x * scalar, y * scalar);
        graph.push(vec);

        x += cos(t) * cos(t * 2) * cos(t * 2) * sin(t * 2) * (hyp + (j / 50));
        y += sin(t) * cos(t * 2) * cos(t * 2) * sin(t * 2) * (hyp + (j / 50));


    }
    return graph;
}

function pseudoSuperellipseSpiral(controller, t) {
    var graph = [];
    var scalar = controller.privateValues.scalar;
    var vals = controller.privateValues.spiral;
    var angleTrig = vals.angle;
    var hyp = controller.privateValues.spiral.hyp || 0.2;
    var x = 0;
    var y = 0;

    for (var j = 0; j < 1000; j++) {
        var t = angleTrig + angleTrig * j;
        var vec = createVector(x * scalar, y * scalar);
        graph.push(vec);

        x += cos(t) * cos(t * 2) * cos(t * 2) * (hyp + (j / 50));
        y += sin(t) * cos(t * 2) * cos(t * 2) * (hyp + (j / 50));


    }
    return graph;
}

function pseudoSuperellipseSpiral2(controller, t) {
    var graph = [];
    var scalar = controller.privateValues.scalar;
    var vals = controller.privateValues.spiral;
    var angleTrig = vals.angle;
    var hyp = controller.privateValues.spiral.hyp || 0.2;
    var x = 0;
    var y = 0;

    for (var j = 0; j < 1000; j++) {
        var t = angleTrig + angleTrig * j;
        var vec = createVector(x * scalar, y * scalar);
        graph.push(vec);

        x += cos(t) * sin(t * 0.5) * (hyp + (j / 50));
        y += sin(t) * sin(t * 0.5) * (hyp + (j / 50));


    }
    return graph;
}


function pseudoSuperellipseSpiral3(controller, t) {
    var graph = [];
    var scalar = controller.privateValues.scalar;
    var vals = controller.privateValues.spiral;
    var angleTrig = vals.angle;
    var hyp = controller.privateValues.spiral.hyp || 0.2;
    var x = 0;
    var y = 0;

    for (var j = 0; j < 1000; j++) {
        var t = angleTrig + angleTrig * j;
        var vec = createVector(x * scalar, y * scalar);
        graph.push(vec);

        x += cos(t / 2) * cos(t * 2) * cos(t * 2) * (hyp + (j / 50));
        y += sin(t / 2) * cos(t * 2) * cos(t * 2) * (hyp + (j / 50));


    }
    return graph;
}



function tiltedSquareSpiral(controller, t) {
    var graph = [];
    var scalar = controller.privateValues.scalar;
    var vals = controller.privateValues.spiral;
    var angleTrig = vals.angle;
    var hyp = controller.privateValues.spiral.hyp || 0.2;
    var x = 0;
    var y = 0;

    for (var j = 0; j < 1000; j++) {
        var t = angleTrig + angleTrig * j;
        var vec = createVector(x * scalar, y * scalar);
        graph.push(vec);

        x += cos(t) * cos(t * 7.5) * cos(t * 7.5) * (hyp + (j / 50));
        y += sin(t) * cos(t * 7.5) * cos(t * 7.5) * (hyp + (j / 50));



    }
    return graph;
}

function starrySpiral2(controller, t) {
    var graph = [];
    var scalar = controller.privateValues.scalar;
    var vals = controller.privateValues.spiral;
    var angleTrig = vals.angle;
    var hyp = controller.privateValues.spiral.hyp || 0.2;
    var x = 0;
    var y = 0;

    for (var j = 0; j < 1000; j++) {
        var t = angleTrig + angleTrig * j;
        var vec = createVector(x * scalar, y * scalar);
        graph.push(vec);

        x += cos(t) * cos(t * 2) * sin(t * 4) * (hyp + (j / 50));
        y += sin(t) * cos(t * 2) * sin(t * 4) * (hyp + (j / 50));


    }
    return graph;
}

function starrySpiralOctober(controller, t) {
    var graph = [];
    var scalar = controller.privateValues.scalar;
    var vals = controller.privateValues.spiral;
    var angleTrig = vals.angle;
    var hyp = controller.privateValues.spiral.hyp || 0.2;
    var x = 0;
    var y = 0;

    for (var j = 0; j < 1000; j++) {
        var t = angleTrig + angleTrig * j;
        var vec = createVector(x * scalar, y * scalar);
        graph.push(vec);

        x += cos(t) * pow(cos(t * 2), 1) * (hyp + (j / 50));
        y += sin(t) * pow(cos(t * 4), 1) * (hyp + (j / 50));

    }
    return graph;
}

function starrySpiralOctober2(controller, t) {
    var graph = [];
    var scalar = controller.privateValues.scalar;
    var vals = controller.privateValues.spiral;
    var angleTrig = vals.angle;
    var hyp = controller.privateValues.spiral.hyp || 0.2;
    var x = 0;
    var y = 0;
    var xx = 0;
    var yy = 0;
    var n = map(sin(t / 10), -1, 1, 0, 0.4);
    for (var j = 0; j < 1000; j++) {
        var t = angleTrig + angleTrig * j;
        var lerpX = lerp(x, xx, 0.95);
        var lerpY = lerp(y, yy, 0.95);
        // ellipse(lerpX, lerpY, s, s);
        var vec = createVector(x * scalar, y * scalar);
        graph.push(vec);


        xx += cos(t) * pow(cos(t * 5), 1) * (hyp + (j / 50));
        yy += sin(t) * pow(cos(t * 5), 1) * (hyp + (j / 50));

        x += pow(cos(t), 1) * pow(cos(t * 0.5) * 10, 1) * (hyp + (j / 50));
        y += pow(sin(t), 1) * pow(cos(t * 0.5) * 10, 1) * (hyp + (j / 50));

    }
    return graph;
}



function spiderWebSpiralNight(controller, t) {
    var graph = [];
    var scalar = controller.privateValues.scalar;
    var vals = controller.privateValues.spiral;
    var angleTrig = vals.angle;
    var hyp = controller.privateValues.spiral.hyp || 0.2;;
    var x = 0;
    var y = 0;

    for (var j = 0; j < 1000; j++) {
        var t = angleTrig + angleTrig * j;
        var vec = createVector(x * scalar, y * scalar);
        graph.push(vec);

        x += cos(t * 0.5) * (hyp + (j / 50));
        y += sin(t * 0.5) * cos(t * 1) * (hyp + (j / 50));

    }
    return graph;
}

function spiderWebSpiralNight2(controller, t) {
    var graph = [];
    var scalar = controller.privateValues.scalar;
    var vals = controller.privateValues.spiral;
    var angleTrig = vals.angle;
    var hyp = controller.privateValues.spiral.hyp || 0.2;;
    var x = 0;
    var y = 0;

    for (var j = 0; j < 1000; j++) {
        var t = angleTrig + angleTrig * j;
        var vec = createVector(x * scalar, y * scalar);
        graph.push(vec);

        x += cos(t * 3) * cos(t * 1) * (hyp + (j / 50));
        y += sin(t * 3) * cos(t * 1) * (hyp + (j / 50));

    }
    return graph;
}

function spiderWebSpiralNight3(controller, t) {
    var graph = [];
    var scalar = controller.privateValues.scalar;
    var vals = controller.privateValues.spiral;
    var angleTrig = vals.angle;
    var hyp = controller.privateValues.spiral.hyp || 0.2;;
    var x = 0;
    var y = 0;

    for (var j = 0; j < 1000; j++) {
        var t = angleTrig + angleTrig * j;
        var vec = createVector(x * scalar, y * scalar);
        graph.push(vec);

        x += cos(t * 3) * cos(sin(t * 1)) * (hyp + (j / 50));
        y += sin(t * 3) * cos(sin(t * 1)) * (hyp + (j / 50));

    }
    return graph;
}

function spiderWebSpiralNight4(controller, t) {
    var graph = [];
    var scalar = controller.privateValues.scalar;
    var vals = controller.privateValues.spiral;
    var angleTrig = vals.angle;
    var hyp = controller.privateValues.spiral.hyp || 0.2;;
    var x = 0;
    var y = 0;

    for (var j = 0; j < 1000; j++) {
        var t = angleTrig + angleTrig * j;
        var vec = createVector(x * scalar, y * scalar);
        graph.push(vec);

        x += cos(t * 0.5) * cos(sin(t * 10)) * (hyp + (j / 50));
        y += sin(t * 0.5) * cos(sin(t * 10)) * (hyp + (j / 50));

    }
    return graph;
}

function spiderWebSpiralNight5(controller, t) {
    var graph = [];
    var scalar = controller.privateValues.scalar;
    var vals = controller.privateValues.spiral;
    var angleTrig = vals.angle;
    var hyp = controller.privateValues.spiral.hyp || 0.2;;
    var x = 0;
    var y = 0;

    for (var j = 0; j < 1000; j++) {
        var t = angleTrig + angleTrig * j;
        var vec = createVector(x * scalar, y * scalar);
        graph.push(vec);

        x += sin(cos(t * 0.5)) * cos(sin(t * 5)) * (hyp + (j / 50));
        y += sin(sin(t * 0.5)) * cos(sin(t * 5)) * (hyp + (j / 50));

    }
    return graph;
}

function spiderWebSpiralNight6(controller, t) {
    var graph = [];
    var scalar = controller.privateValues.scalar;
    var vals = controller.privateValues.spiral;
    var angleTrig = vals.angle;
    var hyp = controller.privateValues.spiral.hyp || 0.2;;
    var x = 0;
    var y = 0;

    for (var j = 0; j < 1000; j++) {
        var t = angleTrig + angleTrig * j;
        var vec = createVector(x * scalar, y * scalar);
        graph.push(vec);

        x += sin(pow(sin(t), 3)) * (hyp + (j / 50));
        y += sin(cos(t)) * (hyp + (j / 50));

    }
    return graph;
}

function spiderWebSpiralNight6b(controller, t) {
    var graph = [];
    var scalar = controller.privateValues.scalar;
    var vals = controller.privateValues.spiral;
    var angleTrig = vals.angle;
    var hyp = controller.privateValues.spiral.hyp || 0.2;;
    var x = 0;
    var y = 0;

    for (var j = 0; j < 1000; j++) {
        var t = angleTrig + angleTrig * j;
        var vec = createVector(x * scalar, y * scalar);
        graph.push(vec);

        x += sin(t * 1.5) * sin(t * 0.5) * (hyp + (j / 50));
        y += cos(t * 1.5) * cos(t * 0.5) * (hyp + (j / 50));

    }
    return graph;
}

//with autumnSpiral8
function spiderWebSpiralNight7(controller, t) {
    var graph = [];
    var scalar = controller.privateValues.scalar;
    var vals = controller.privateValues.spiral;
    var angleTrig = vals.angle;
    var hyp = controller.privateValues.spiral.hyp || 0.2;;
    var x = 0;
    var y = 0;

    for (var j = 0; j < 1000; j++) {
        var t = angleTrig + angleTrig * j;
        var vec = createVector(x * scalar, y * scalar);
        graph.push(vec);

        x += sin(pow(sin(t), 3)) * (hyp + (j / 50));
        y += sin(pow(cos(t), 3)) * (hyp + (j / 50));

    }
    return graph;
}

function spiderWebSpiralNight8(controller, t) {
    var graph = [];
    var scalar = controller.privateValues.scalar;
    var vals = controller.privateValues.spiral;
    var angleTrig = vals.angle;
    var hyp = controller.privateValues.spiral.hyp || 0.2;;
    var x = 0;
    var y = 0;

    for (var j = 0; j < 1000; j++) {
        var t = angleTrig + angleTrig * j;
        var vec = createVector(x * scalar, y * scalar);
        graph.push(vec);

        x += sin(pow(sin(t), 3)) * (hyp + (j / 30));
        y += sin(pow(cos(t), 9)) * (hyp + (j / 30));

    }
    return graph;
}


function octogonalSpiralAutumn(controller, t) {
    var graph = [];
    var scalar = controller.privateValues.scalar;
    var vals = controller.privateValues.spiral;
    var angleTrig = vals.angle;
    var hyp = controller.privateValues.spiral.hyp || 0.2;
    var x = 0;
    var y = 0;
    for (var j = 0; j < 1000; j++) {
        var t = angleTrig + angleTrig * j;
        var vec = createVector(x * scalar, y * scalar);
        graph.push(vec);
        x += cos(t / 2) * cos(t * 4) * cos(t * 4) * (hyp + (j / 50));
        y += sin(t / 2) * cos(t * 4) * cos(t * 4) * (hyp + (j / 50));
    }
    return graph;
}

function octogonalSpiralAutumn2(controller, t) {
    var graph = [];
    var scalar = controller.privateValues.scalar;
    var vals = controller.privateValues.spiral;
    var angleTrig = vals.angle;
    var hyp = controller.privateValues.spiral.hyp || 0.2;
    var x = 0;
    var y = 0;
    for (var j = 0; j < 1000; j++) {
        var t = angleTrig + angleTrig * j;
        var vec = createVector(x * scalar, y * scalar);
        graph.push(vec);
        x += cos(t) * (hyp + (j / 50)) + cos(t) * (hyp + (j / 50));
        y += sin(t) * (hyp + (j / 50));
    }
    return graph;
}

function octogonalSpiralAutumn3(controller, t) {
    var graph = [];
    var scalar = controller.privateValues.scalar;
    var vals = controller.privateValues.spiral;
    var angleTrig = vals.angle;
    var hyp = controller.privateValues.spiral.hyp || 0.2;
    var x = 0;
    var y = 0;
    for (var j = 0; j < 1000; j++) {
        var t = angleTrig + angleTrig * j;
        var vec = createVector(x * scalar, y * scalar);
        graph.push(vec);
        x += cos(t) * (hyp + (j / 50)) + cos(t * 2) * (hyp + (j / 50));
        y += sin(t) * (hyp + (j / 50));
    }
    return graph;
}

function octogonalSpiralAutumn4(controller, t) {
    var graph = [];
    var scalar = controller.privateValues.scalar;
    var vals = controller.privateValues.spiral;
    var angleTrig = vals.angle;
    var hyp = controller.privateValues.spiral.hyp || 0.2;
    var x = 0;
    var y = 0;
    for (var j = 0; j < 1000; j++) {
        var t = angleTrig + angleTrig * j;
        var vec = createVector(x * scalar, y * scalar);
        graph.push(vec);
        x += cos(t) * (hyp + (j / 50)) + cos(t * 3) * (hyp + (j / 50));
        y += sin(t) * (hyp + (j / 50));
    }
    return graph;
}

function octogonalSpiralAutumn5(controller, t) {
    var graph = [];
    var scalar = controller.privateValues.scalar;
    var vals = controller.privateValues.spiral;
    var angleTrig = vals.angle;
    var hyp = controller.privateValues.spiral.hyp || 0.2;
    var x = 0;
    var y = 0;
    for (var j = 0; j < 1000; j++) {
        var t = angleTrig + angleTrig * j;
        var vec = createVector(x * scalar, y * scalar);
        graph.push(vec);
        x += cos(t) * (hyp + (j / 50)) + cos(t * 0.5) * (hyp + (j / 50));
        y += sin(t * 0.5) * (hyp + (j / 50)) + cos(t) * (hyp + (j / 50));
    }
    return graph;
}

function octogonalSpiralAutumn6(controller, t) {
    var graph = [];
    var scalar = controller.privateValues.scalar;
    var vals = controller.privateValues.spiral;
    var angleTrig = vals.angle;
    var hyp = controller.privateValues.spiral.hyp || 0.2;
    var x = 0;
    var y = 0;
    for (var j = 0; j < 1000; j++) {
        var t = angleTrig + angleTrig * j;
        var vec = createVector(x * scalar, y * scalar);
        graph.push(vec);
        x += cos(t) * (hyp + (j / 50) * 0.5) + cos(t * 0.5) * (hyp + (j / 50));
        y += sin(t * 0.5) * (hyp + (j / 50)) + cos(t * 2) * (hyp + (j / 50));
    }
    return graph;
}

function octogonalSpiralAutumn7(controller, t) {
    var graph = [];
    var scalar = controller.privateValues.scalar;
    var vals = controller.privateValues.spiral;
    var angleTrig = vals.angle;
    var hyp = controller.privateValues.spiral.hyp || 0.2;
    var x = 0;
    var y = 0;
    for (var j = 0; j < 1000; j++) {
        var t = angleTrig + angleTrig * j;
        var vec = createVector(x * scalar, y * scalar);
        graph.push(vec);
        x += cos(t * 2) * (hyp + (j / 50)) + cos(t) * (hyp + (j / 50)) + cos(t) * (hyp + (j / 50));
        y += sin(t * 0.5) * (hyp + (j / 50)) + cos(t) * (hyp + (j / 50)) + cos(t) * (hyp + (j / 50));
    }
    return graph;
}

function octogonalSpiralAutumn8(controller, t) {
    var graph = [];
    var scalar = controller.privateValues.scalar;
    var vals = controller.privateValues.spiral;
    var angleTrig = vals.angle;
    var hyp = controller.privateValues.spiral.hyp || 0.2;
    hyp *= 0.1;
    var x = 0;
    var y = 0;
    for (var j = 0; j < 1000; j++) {
        var t = angleTrig + angleTrig * j;
        var vec = createVector(x * scalar, y * scalar);
        graph.push(vec);
        x += cos(t * 2) * (hyp + (j / 50)) + cos(t * 0.5) * (hyp + (j / 50)) + cos(t) * (hyp + (j / 50));
        y += sin(t * 0.5) * (hyp + (j / 50)) + sin(t * 0.5) * (hyp + (j / 50)) + cos(t) * (hyp + (j / 50));
    }
    return graph;
}

function octogonalSpiralAutumn9(controller, t) {
    var graph = [];
    var scalar = controller.privateValues.scalar;
    var vals = controller.privateValues.spiral;
    var angleTrig = vals.angle;
    var hyp = controller.privateValues.spiral.hyp || 0.2;
    hyp *= 0.1;
    var x = 0;
    var y = 0;
    for (var j = 0; j < 1000; j++) {
        var t = angleTrig + angleTrig * j;
        var vec = createVector(x * scalar, y * scalar);
        graph.push(vec);
        x += cos(t) * (hyp + (j / 50));
        y += sin(t) * cos(t * 0.5) * (hyp + (j / 50));
    }
    return graph;
}

function octogonalSpiralAutumn10(controller, t) {
    var graph = [];
    var scalar = controller.privateValues.scalar;
    var vals = controller.privateValues.spiral;
    var angleTrig = vals.angle;
    var hyp = controller.privateValues.spiral.hyp || 0.2;
    hyp *= 0.1;
    var x = 0;
    var y = 0;
    for (var j = 0; j < 1000; j++) {
        var t = angleTrig + angleTrig * j;
        var vec = createVector(x * scalar, y * scalar);
        graph.push(vec);

        x += cos(t) * (hyp + (j / 25));
        y += cos(t) + sin(t) * (hyp + (j / 25));

    }
    return graph;
}

function octogonalSpiralAutumn11(controller, t) {
    var graph = [];
    var scalar = controller.privateValues.scalar;
    var vals = controller.privateValues.spiral;
    var angleTrig = vals.angle;
    var hyp = controller.privateValues.spiral.hyp || 0.2;
    hyp *= 0.1;
    var x = 0;
    var y = 0;
    for (var j = 0; j < 1000; j++) {
        var t = angleTrig + angleTrig * j;
        var vec = createVector(x * scalar, y * scalar);
        graph.push(vec);

        x += cos(t / 3) * (hyp + (j / 50)) + cos(t * 3) * (hyp + (j / 50));
        y += sin(t / 3) * (hyp + (j / 50)) + cos(t * 3) * (hyp + (j / 50));

    }
    return graph;
}

function octogonalSpiralAutumn12(controller, t) {
    var graph = [];
    var scalar = controller.privateValues.scalar;
    var vals = controller.privateValues.spiral;
    var angleTrig = vals.angle;
    var hyp = controller.privateValues.spiral.hyp || 0.2;
    hyp *= 0.1;
    var x = 0;
    var y = 0;
    for (var j = 0; j < 1000; j++) {
        var t = angleTrig + angleTrig * j;
        var vec = createVector(x * scalar, y * scalar);
        graph.push(vec);

        x += cos(t / 6) * (hyp + (j / 50)) + cos(t * 6) * (hyp + (j / 50));
        y += sin(t / 6) * (hyp + (j / 50)) + sin(t * 6) * (hyp + (j / 50));

    }
    return graph;
}


function octogonalSpiralAutumn13(controller, t) {
    var graph = [];
    var scalar = controller.privateValues.scalar;
    var vals = controller.privateValues.spiral;
    var angleTrig = vals.angle;
    var hyp = controller.privateValues.spiral.hyp || 0.2;
    hyp *= 0.1;
    var x = 0;
    var y = 0;
    var n, m;
    for (var j = 0; j < 1000; j++) {
        var t = angleTrig + angleTrig * j;
        var vec = createVector(x * scalar, y * scalar);
        graph.push(vec);

        m = map((sin(t / 80)), -1, 1, 1, 2);
        n = map((cos(t / 80)), -1, 1, 1, 2);
        x += cos(t + m) * (hyp + (j / 50));
        y += sin(t + n) * (hyp + (j / 50));

    }
    return graph;
}

function octogonalSpiralAutumn14(controller, t) {
    var graph = [];
    var scalar = controller.privateValues.scalar;
    var vals = controller.privateValues.spiral;
    var angleTrig = vals.angle;
    var hyp = controller.privateValues.spiral.hyp || 0.2;
    hyp *= 0.1;
    var x = 0;
    var y = 0;
    var n, m;
    for (var j = 0; j < 1000; j++) {
        var t = angleTrig + angleTrig * j;
        var vec = createVector(x * scalar, y * scalar);
        graph.push(vec);

        m = map((sin(t / 80)), -1, 1, 1, 1.5);
        n = map((cos(t / 80)), -1, 1, 1, 1.5);
        x += cos(t + m) * (hyp + (j / 50));
        y += sin(t + n) * (hyp + (j / 50));

    }
    return graph;
}

function octogonalSpiralAutumn15(controller, t) {
    var graph = [];
    var scalar = controller.privateValues.scalar;
    var vals = controller.privateValues.spiral;
    var angleTrig = vals.angle;
    var hyp = controller.privateValues.spiral.hyp || 0.2;
    hyp *= 0.1;
    var x = 0;
    var y = 0;
    var n, m;
    for (var j = 0; j < 1000; j++) {
        var t = angleTrig + angleTrig * j;
        var vec = createVector(x * scalar, y * scalar);
        graph.push(vec);

        m = map((sin(t / 80)), 1, -1, 1, 1.25);
        n = map((cos(t / 80)), -1, 1, 1, 1.25);
        x += cos(t + m) * (hyp + (j / 50));
        y += sin(t + n) * (hyp + (j / 50));

    }
    return graph;
}

function octogonalSpiralAutumn16(controller, t) {
    var graph = [];
    var scalar = controller.privateValues.spiral.scalar;
    var vals = controller.privateValues.spiral;
    var angleTrig = vals.angle;
    var hyp = controller.privateValues.spiral.hyp || 0.2;
    hyp *= 0.1;
    var x = 0;
    var y = 0;
    var n, m;
    for (var j = 0; j < 1000; j++) {
        var t = angleTrig + angleTrig * j;
        var vec = createVector(x * scalar, y * scalar);
        graph.push(vec);

        m = map((sin(t / 80)), 1, -1, 1, 1.5);
        n = map((cos(t / 80)), -1, 1, 1, 1.5);
        x += cos(t + m) * (hyp + (j / 50));
        y += sin(t + n) * (hyp + (j / 50));

    }
    return graph;
}

function octogonalSpiralAutumn17(controller, t) {
    var graph = [];
    var scalar = controller.privateValues.scalar;
    var vals = controller.privateValues.spiral;
    var angleTrig = vals.angle;
    var hyp = controller.privateValues.spiral.hyp || 0.2;
    hyp *= 0.1;
    var x = 0;
    var y = 0;
    var n, m;
    for (var j = 0; j < 1000; j++) {
        var t = angleTrig + angleTrig * j;
        var vec = createVector(x * scalar, y * scalar);
        graph.push(vec);

        m = map((sin(t / 800)), -1, 1, 1, 0.5);
        n = map((cos(t / 200)), -1, 1, 1, 3);
        x += cos(t + m) * (hyp + (j / 50));
        y += sin(t + n) * (hyp + (j / 50));

    }
    return graph;
}

function octogonalSpiralAutumn18(controller, t) {
    var graph = [];
    var scalar = controller.privateValues.scalar;
    var vals = controller.privateValues.spiral;
    var angleTrig = vals.angle;
    var hyp = controller.privateValues.spiral.hyp || 0.2;
    hyp *= 0.1;
    var x = 0;
    var y = 0;
    var n, m;
    for (var j = 0; j < 1000; j++) {
        var t = angleTrig + angleTrig * j;
        var vec = createVector(x * scalar, y * scalar);
        graph.push(vec);

        m = map((sin(t / 1600)), -1, 1, -2, 0.5);
        n = map((cos(t / 100)), -1, 1, 0, 3) / 5;
        x += cos(t + m) * (hyp + (j / 50));
        y += sin(t + n) * (hyp + (j / 50));

    }
    return graph;
}

function octogonalSpiralAutumn19(controller, t) {
    var graph = [];
    var scalar = controller.privateValues.scalar;
    var vals = controller.privateValues.spiral;
    var angleTrig = vals.angle;
    var hyp = controller.privateValues.spiral.hyp || 0.2;
    hyp *= 0.1;
    var x = 0;
    var y = 0;
    var n, m;
    for (var j = 0; j < 1000; j++) {
        var t = angleTrig + angleTrig * j;
        var vec = createVector(x * scalar, y * scalar);
        graph.push(vec);

        m = map((sin(t / 800)), -1, 1, -0.5, 0.5);
        n = map((cos(t / 800)), -1, 1, -3, 3);
        x += cos(t + m) * (hyp + (j / 50)) + cos(t + n) * (hyp + (j / 50));
        y += sin(t + n) * (hyp + (j / 50)) + cos(t + m) * (hyp + (j / 50));

    }
    return graph;
}

function octogonalSpiralAutumn20(controller, t) {
    var graph = [];
    var scalar = controller.privateValues.scalar;
    var vals = controller.privateValues.spiral;
    var angleTrig = vals.angle;
    var hyp = controller.privateValues.spiral.hyp || 0.2;
    hyp *= 0.1;
    var x = 0;
    var y = 0;
    var n, m;
    for (var j = 0; j < 1000; j++) {
        var t = angleTrig + angleTrig * j;
        var vec = createVector(x * scalar, y * scalar);
        graph.push(vec);

        m = map((cos(t / 800)), -1, 1, 0, 0.5);
        n = map((cos(t / 800)), -1, 1, 0, 3);
        x += cos(t + m) * (hyp + (j / 50)) + cos(t) * (hyp + (j / 50));
        y += sin(t + n) * (hyp + (j / 50)) + sin(t) * (hyp + (j / 50));

    }
    return graph;
}

function octogonalSpiralAutumn21(controller, t) {
    var graph = [];
    var scalar = controller.privateValues.scalar;
    var vals = controller.privateValues.spiral;
    var angleTrig = vals.angle;
    var hyp = controller.privateValues.spiral.hyp || 0.2;
    hyp *= 0.1;
    var x = 0;
    var y = 0;
    var z = 0;
    var n, m;
    for (var j = 0; j < 1000; j++) {
        var t = angleTrig + angleTrig * j;
        var vec = createVector(x * scalar * 2, y * scalar);
        graph.push(vec);

        // m = map((cos(t / 8000)), -1, 1, -0.5, 0.5);
        // n = map((sin(t / 8000)), -1, 1, -10.5, 10.5);
        x += cos(t) * (hyp + (j / 50) / 2);
        y += sin(t + z) * (hyp + (j / 50));
        z += sin(z * 10) * 100;
    }
    return graph;
}


function mysterySpiral(controller, t) {
    var graph = [];
    var scalar = controller.privateValues.scalar;
    var vals = controller.privateValues.spiral;
    var angleTrig = vals.angle;
    var hyp = controller.privateValues.spiral.hyp || 0.2;
    var x = 0;
    var y = 0;
    var m = sin(t);
    m = 0.486509;
    for (var j = 0; j < 1000; j++) {
        var t = angleTrig + angleTrig * j;
        var vec = createVector(x * scalar, y * scalar);
        graph.push(vec);
        x += cos(t) * sin(t * m) * (hyp + (j / 50));
        y += sin(t) * sin(t * m) * (hyp + (j / 50));
    }
    return graph;
}

function mysterySpiral2(controller, t) {
    var graph = [];
    var scalar = controller.privateValues.scalar;
    var vals = controller.privateValues.spiral;
    var angleTrig = vals.angle + 0.9;
    var hyp = controller.privateValues.spiral.hyp || 0.2;
    var x = 0;
    var y = 0;
    var m = sin(t / 100);
    m = 0.486509;
    for (var j = 0; j < 1000; j++) {
        var t = angleTrig + angleTrig * j;
        var vec = createVector(x * scalar, y * scalar);
        graph.push(vec);
        x += cos(t / 2) * sin(t * m / 2) * (hyp + (j / 50));
        y += sin(t / 2) * sin(t * m / 2) * (hyp + (j / 50));
    }
    return graph;
}

function mysterySpiral3(controller, t) {
    var graph = [];
    var scalar = controller.privateValues.scalar;
    var vals = controller.privateValues.spiral;
    var angleTrig = vals.angle + 0.9;
    var hyp = controller.privateValues.spiral.hyp || 0.2;
    var x = 0;
    var y = 0;
    var m = sin(t / 10000) / 10;
    // var n = sin(t / 10000) / 10;
    // m = 0.486509;
    for (var j = 0; j < 1000; j++) {
        var t = angleTrig + angleTrig * j;
        var vec = createVector(x * scalar, y * scalar);
        graph.push(vec);
        x += cos(t / 2) * sin(t * m / 2) * (hyp + (j / 50));
        y += sin(t / 2) * sin(t * m / 2) * (hyp + (j / 50));
    }
    return graph;
}


function mysterySpiral4(controller, t) {
    var graph = [];
    var scalar = controller.privateValues.scalar;
    var vals = controller.privateValues.spiral;
    var angleTrig = vals.angle + 0.9;
    var hyp = controller.privateValues.spiral.hyp || 0.2;
    var x = 0;
    var y = 0;
    var m = sin(t / 1000) / 100;
    var n = cos(t / 1000) / 100;
    // var n = sin(t / 10000) / 10;
    // m = 0.486509;
    for (var j = 0; j < 1000; j++) {
        var t = angleTrig + angleTrig * j;
        var vec = createVector(x * scalar, y * scalar);
        graph.push(vec);
        x += cos(t) * sin(t * m / 2) * (hyp + (j / 50));
        y += sin(t) * sin(t * n / 2) * (hyp + (j / 50));
    }
    return graph;
}

function mysterySpiral5(controller, t) {
    var graph = [];
    var scalar = controller.privateValues.scalar;
    var vals = controller.privateValues.spiral;
    var angleTrig = vals.angle + 0.9;
    var hyp = controller.privateValues.spiral.hyp || 0.2;
    var x = 0;
    var y = 0;
    var m = sin(t / 1000) / 100;
    var n = cos(t / 1000) / 100;
    // var n = sin(t / 10000) / 10;
    // m = 0.486509;
    for (var j = 0; j < 1000; j++) {
        var t = angleTrig + angleTrig * j;
        var vec = createVector(x * scalar, y * scalar);
        graph.push(vec);
        x += cos(t / 2) * sin(t * m / 2) * (hyp + (j / 50));
        y += sin(t / 2) * sin(t * n / 2) * (hyp + (j / 50));
    }
    return graph;
}


function mysterySpiral6(controller, t) {
    var graph = [];
    var scalar = controller.privateValues.scalar;
    var vals = controller.privateValues.spiral;
    var angleTrig = vals.angle + 0.9;
    var hyp = controller.privateValues.spiral.hyp || 0.2;
    var x = 0;
    var y = 0;
    var m = sin(t / 10000) / 100;
    var n = cos(t / 10000) / 100;
    // var n = sin(t / 10000) / 10;
    // m = 0.486509;
    for (var j = 0; j < 1000; j++) {
        var t = angleTrig + angleTrig * j;
        var vec = createVector(x * scalar, y * scalar);
        graph.push(vec);
        x += cos(t / 4) * sin(t * m / 4) * (hyp + (j / 50));
        y += sin(t / 4) * sin(t * n / 4) * (hyp + (j / 50));
    }
    return graph;
}

function mysterySpiral7(controller, t) {
    var graph = [];
    var scalar = controller.privateValues.scalar;
    var vals = controller.privateValues.spiral;
    var angleTrig = vals.angle;
    var hyp = controller.privateValues.spiral.hyp || 0.2;
    var x = 0;
    var y = 0;
    var n = sin(frameCount / 10);
    for (var j = 0; j < 1000; j++) {
        var t = angleTrig + angleTrig * j;
        var vec = createVector(x * scalar, y * scalar);
        graph.push(vec);
        x += cos(t) * (hyp + (j / 5));
        y += sin(sqrt(t)) * sin(t) * (hyp + (j / 5));
    }
    return graph;
}

spiralFormulas = [
    [spiral, "spiral"],
    [octogonalSpiral, "octogonalSpiral"],
    [spiderWebSpiral, "spiderWebSpiral"],
    [triSpiral, "triSpiral"],
    [starrySpiral, "starrySpiral"],
    [starrySpiral2, "starrySpiral2"],
    [starrySpiralOctober, "starrySpiralOctober"],
    [starrySpiralOctober2, "starrySpiralOctober2"],
    [spiderWebSpiralNight, "spiderWebSpiralNight"],
    [spiderWebSpiralNight2, "spiderWebSpiralNight2"],
    [spiderWebSpiralNight3, "spiderWebSpiralNight3"],
    [spiderWebSpiralNight4, "spiderWebSpiralNight4"],
    [spiderWebSpiralNight5, "spiderWebSpiralNight5"],
    [spiderWebSpiralNight6, "spiderWebSpiralNight6"],
    [spiderWebSpiralNight6b, "spiderWebSpiralNight6b"],
    [spiderWebSpiralNight7, "spiderWebSpiralNight7"],
    [spiderWebSpiralNight8, "spiderWebSpiralNight8"],
    [octogonalSpiralAutumn, "octogonalSpiralAutumn"],
    [octogonalSpiralAutumn2, "octogonalSpiralAutumn2"],
    [octogonalSpiralAutumn3, "octogonalSpiralAutumn3"],
    [octogonalSpiralAutumn4, "octogonalSpiralAutumn4"],
    [octogonalSpiralAutumn5, "octogonalSpiralAutumn5"],
    [octogonalSpiralAutumn6, "octogonalSpiralAutumn6"],
    [octogonalSpiralAutumn7, "octogonalSpiralAutumn7"],
    [octogonalSpiralAutumn8, "octogonalSpiralAutumn8"],
    [octogonalSpiralAutumn9, "octogonalSpiralAutumn9"],
    [octogonalSpiralAutumn10, "octogonalSpiralAutumn10"],
    [octogonalSpiralAutumn11, "octogonalSpiralAutumn11"],
    [octogonalSpiralAutumn12, "octogonalSpiralAutumn12"],
    [octogonalSpiralAutumn13, "octogonalSpiralAutumn13"],
    [octogonalSpiralAutumn14, "octogonalSpiralAutumn14"],
    [octogonalSpiralAutumn15, "octogonalSpiralAutumn15"],
    [octogonalSpiralAutumn16, "octogonalSpiralAutumn16"],
    [octogonalSpiralAutumn17, "octogonalSpiralAutumn17"],
    [octogonalSpiralAutumn18, "octogonalSpiralAutumn18"],
    [octogonalSpiralAutumn19, "octogonalSpiralAutumn19"],
    [octogonalSpiralAutumn20, "octogonalSpiralAutumn20"],
    [octogonalSpiralAutumn21, "octogonalSpiralAutumn21"],
    [mysterySpiral, "mysterySpiral"],
    [mysterySpiral2, "mysterySpiral2"],
    [mysterySpiral3, "mysterySpiral3"],
    [mysterySpiral4, "mysterySpiral4"],
    [mysterySpiral5, "mysterySpiral5"],
    [mysterySpiral6, "mysterySpiral6"],
    [mysterySpiral7, "mysterySpiral7"],
    [nonCrossingStarSpiral, "nonCrossingStarSpiral"],
    [pseudoSuperellipseSpiral, "pseudoSuperellipseSpiral"],
    [pseudoSuperellipseSpiral2, "pseudoSuperellipseSpiral2"],
    [pseudoSuperellipseSpiral3, "pseudoSuperellipseSpiral3"],
    [tiltedSquareSpiral, "tiltedSquareSpiral"]
];

//     , , , , , , , , , , , , , , , , , , , , , , 
// ];
