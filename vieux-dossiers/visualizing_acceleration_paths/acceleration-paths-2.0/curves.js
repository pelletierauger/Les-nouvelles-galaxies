var curves = [];

Curve = function(name, equation) {
    this.name = name;
    this.equation = equation;
    curves.push(this);
};

Curve.prototype.runEquation = function(t) {
    return this.equation(t);
};

var circle = new Curve("Circle", function(t) {
    var r = 100;
    var x = cos(t) * r;
    var y = sin(t) * r;
    return createVector(x, y);
});

var superellipse = new Curve("Superellipse", function(t) {
    var m = map(sin(t / (sc.value * pow(10, scPow.value))), -1, 1, 0, 4);
    var n = map(sin(t / (sc.value * pow(10, scPow.value))), -1, 1, 0, 4);
    // var m = map(sin(t / sc.value), -1, 1, 0, 4);
    // var n = map(sin(t / sc.value), -1, 1, 0, 4);
    var ct = cos(t);
    var st = sin(t);
    x = 2 * Math.sign(ct) * pow(abs(ct), 2 / m) * 40;
    y = 2 * Math.sign(st) * pow(abs(st), 2 / n) * 25;
    return createVector(x, y);
});

var n1 = 1;
// var n2 = 1;
var n3 = 1;
// var m = 5;
// var a = sin(t / sc);
var a = 1;
var b = 1;

var superformula = new Curve("Superformula", function(t) {

    // var a = map(abs(sin(t / (sc.value * pow(10, scPow.value)))), 0, 1, 0.5, 2);
    // var b = map(abs(sin(t / (sc.value * pow(10, scPow.value)))), 0, 1, 0.5, 2);
    var a = 1;
    var b = 1;
    var n1 = map(abs(sin(t / (sc.value * pow(10, scPow.value)))), 0, 1, 0.15, 2);
    // var a = map(abs(sin(t / (sc))), 0, 1, 0.5, 1);
    // var b = map(abs(sin(t / (sc))), 0, 1, 0.5, 1);
    var r;
    var part1 = (1 / a) * cos(t * m.value / 4);
    part1 = abs(part1);
    part1 = pow(part1, n2.value);

    var part2 = (1 / b) * sin(t * m.value / 4);
    part2 = abs(part2);
    part2 = pow(part2, n3);

    var part3 = pow(part1 + part2, 1 / n1);

    if (part3 === 0) {
        r = 0;
    } else {
        r = 1 / part3;
    }
    var x = cos(t) * r * 100;
    var y = sin(t) * r * 100;
    return createVector(x, y);
});

var lissajous = new Curve("Lissajous", function(t) {
    var x = sin(t * 2) * 100;
    var y = cos(t * 3) * 100;
    return createVector(x, y);
});