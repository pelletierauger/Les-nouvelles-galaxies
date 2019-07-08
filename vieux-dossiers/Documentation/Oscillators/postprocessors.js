var g = 150;
var s = 2.5;

Postprocessor = function(renderer) {
    this.renderer = renderer;
    this.alpha = 1;
}

Postprocessor.prototype.output = function(graph, a) {
    this.alpha = a;
    for (var i = 0; i < graph.length; i++) {
        this.renderer(graph[i], this.alpha, i);
    }
};

var simple = new Postprocessor(function(vertex, alpha, i) {
    var rX = random(-0.25, 0.25);
    var rY = random(-0.25, 0.25);
    rX += noise(drawCount / 10) * 10;
    rY += noise(drawCount / 10) * 10;
    // noStroke();
    // fill(255,180 * alpha);
    // fill(255, g);
    // var rS = random(2, 4);
    var rS = noise(i + drawCount / 2) * 5 + (i / 2000);
    // var rS = noise(sin(i + drawCount / 10) * 2) * 16;

    // ellipse(vertex.x + rX, vertex.y + rY, rS, rS);
    ellipse(vertex.x, vertex.y, s, s);
});

var lessSimple = new Postprocessor(function(vertex, alpha, i) {
    if (vertex.x !== 0 && vertex.y !== 0) {
        fill(255, 2 * alpha);
        ellipse(vertex.x, vertex.y, 20, 20);
        fill(255, 2 * alpha);
        ellipse(vertex.x, vertex.y, 15, 15);
        fill(255, 5 * alpha);
        ellipse(vertex.x, vertex.y, 10, 10);
        fill(255, 10 * alpha);
        ellipse(vertex.x, vertex.y, 5, 5);
        fill(255, 10 * alpha);
        ellipse(vertex.x, vertex.y, 3, 3);
        fill(255, 155 * alpha);
        ellipse(vertex.x, vertex.y, 2, 2);
    }
});

var purpleBubbles = new Postprocessor(function(vertex, alpha, i) {
    var bubbleSmudge = random(0.04, 0.08);
    // for (var size = 0; size < 2; size += 0.05) {
    //     var alpha = map(size, 0, 2, 0, 30);
    //     var dynRed = map(vertex.y, 0, height, 80, 255);
    //     var dynGreen = map(size, 0, 2, 155, 100);
    //     fill(dynRed, dynGreen, 180, alpha);
    //     ellipse(vertex.x,vertex.y, size * 4, size * 4);
    // }

    for (var size2 = 0; size2 < 2.5; size2 += bubbleSmudge) {
        var alpha2 = map(size2, 0, 2, 0, 5);
        var dynRed2 = map(vertex.y, 0, height, 180, 255);
        var dynGreen2 = map(size2, 0, 2, 155, 100);
        fill(dynRed2, dynGreen2, 180, alpha2);
        ellipse(vertex.x, vertex.y, size2 * 4, size2 * 4);
    }
});

var purpleBubblesOriginal = new Postprocessor(function(vertex, alpha, i) {
    var bubbleSmudge = random(0.04, 0.08);
    for (var size = 0; size < 2; size += 0.05) {
        var alpha = map(size, 0, 2, 0, 30);
        var dynRed = map(vertex.y, 0, height, 80, 255);
        var dynGreen = map(size, 0, 2, 155, 100);
        fill(dynRed, dynGreen, 180, alpha);
        ellipse(vertex.x, vertex.y, size * 4, size * 4);
    }

    for (var size2 = 0; size2 < 4.5; size2 += bubbleSmudge) {
        var alpha2 = map(size2, 0, 2, 0, 2);
        var dynRed2 = map(vertex.y, 0, height, 180, 255);
        var dynGreen2 = map(size2, 0, 2, 155, 100);
        fill(dynRed2, dynGreen2, 180, alpha2);
        ellipse(vertex.x, vertex.y, size2 * 4, size2 * 4);
    }
});