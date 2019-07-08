var formulas = [];
var currentFormula = 0;

var Formula = function(eq) {
    this.run = eq;
    formulas.push(this);
};

var wideLemon = new Formula(function(t) {
    return {
        x: pow(cos(t), 3) * 600,
        y: sin(t) * 350
    }
});

var wideLemon2 = new Formula(function(t) {
    return {
        x: pow(cos(t), 3) * 600,
        y: sin(t) * cos(t) * 750
    }
});

var wideLemon3 = new Formula(function(t) {
    return {
        x: cos(t) * pow(cos(t * 2), 7) * 600,
        y: sin(t) * cos(t) * 750
    }
});

var wideLemon4 = new Formula(function(t) {
    return {
        x: cos(t * 2) * cos(t / 2) * 600,
        y: sin(t / 2) * 350
    }
});

var bigStrawberry = new Formula(function(t) {
    return {
        x: sin(t) * cos(t * 2) * 600,
        y: pow(cos(t), 13) * 350
    }
});

var beautifulArc = new Formula(function(t) {
    return {
        x: sin(t) * 600,
        y: pow(sin(t), 13) * 350
    }
});

var superellipse = new Formula(function(t) {
    // var vals = controller;
    var m = 0.15;
    var n = 5;
    // var m = map(sin(t / sc.value), -1, 1, 0, 4);
    // var n = map(sin(t / sc.value), -1, 1, 0, 4);
    var ct = cos(t);
    var st = sin(t);
    x = 2 * Math.sign(ct) * pow(abs(ct), 2 / m) * 300;
    y = 2 * Math.sign(st) * pow(abs(st), 2 / n) * 200;
    return createVector(x, y);
});

var superformula = new Formula(function(t) {
    var a = 1;
    var b = 1;
    var m = 2;
    var n1 = 1;
    var n2 = 3;
    var n3 = 1;
    var r;
    var part1 = (1 / a) * cos(t * m / 4);
    part1 = abs(part1);
    part1 = pow(part1, n2);

    var part2 = (1 / b) * sin(t * m / 4);
    part2 = abs(part2);
    part2 = pow(part2, n3);

    var part3 = pow(part1 + part2, 1 / n1);

    if (part3 === 0) {
        r = 0;
    } else {
        r = 1 / part3;
    }
    var x = cos(t) * r * 400;
    var y = sin(t) * r * 400;
    return createVector(x, y);
});

var newLemon = new Formula(function(t) {
    return {
        x: pow(cos(t), 1) * sin(t * 10) * sin(t * frameCount / 10000) * 600,
        y: sin(t) * 350
    }
});

var wideLemonAnimated = new Formula(function(t) {
    var m = frameCount / 10000;
    return {
        x: pow(cos(t * m), 3) * 600,
        y: sin(t) * 350
    }
});

var superellipseAnimated = new Formula(function(t) {
    var mm = 0.1 + frameCount / 100000;
    // var vals = controller;
    var m = 0.15;
    var n = 5;
    // var m = map(sin(t / sc.value), -1, 1, 0, 4);
    // var n = map(sin(t / sc.value), -1, 1, 0, 4);
    var ct = cos(t * mm);
    var st = sin(t);
    x = 2 * Math.sign(ct) * pow(abs(ct), 2 / m) * 300;
    y = 2 * Math.sign(st) * pow(abs(st), 2 / n) * 200;
    return createVector(x, y);
});

var wideLemonade = new Formula(function(t) {
    var m = 0.1 + frameCount / 100;
    return {
        x: pow(cos(t), 3) * sin(t + m) * 600,
        y: sin(t) * 350
    }
});

//Le plus beau et de loin.
var wideLemonade2 = new Formula(function(t) {
    var m = 0.1 + frameCount / 100;
    return {
        x: pow(cos(t), 3) * sin(t + m) * Math.sign(sin(t)) * 600,
        y: sin(t) * 350
    }
});

var wideLemonade3 = new Formula(function(t) {
    var m = 0.1 + frameCount / 100;
    return {
        x: pow(cos(t), 1) * cos(t + m) * Math.sign(sin(t)) * 600,
        y: sin(t) * sin(t + m) * Math.sign(cos(t)) * 350
    }
});

var circle = new Formula(function(t) {
    return {
        x: cos(t) * 600,
        y: sin(t) * 350
    }
});

//DÉBILE... Avec iteration à 70 = délicieux.
var wideLemonade4 = new Formula(function(t) {
    var m = 0.1 + frameCount / 100;
    return {
        x: pow(cos(t), 1) * cos(t + m) * Math.sign(sin(t)) * 600,
        y: sin(t) * cos(t + m) * Math.sign(sin(t)) * 350
    }
});

var creepyRombus = new Formula(function(t) {
    var m = 0.1 + frameCount / 100;
    return {
        x: cos(t) * cos(t + m) * Math.sign(sin(t)) * 600,
        y: sin(t) * sin(t + m) * Math.sign(cos(t)) * 350
    }
});

var wideLemonade5 = new Formula(function(t) {
    var m = 0.1 + frameCount / 100;
    return {
        x: cos(t) * cos(t + m) * Math.sign(sin(t)) * 600,
        y: sin(t) * Math.sign(cos(t)) * 350
    }
});
var wideLemonade6 = new Formula(function(t) {
    var m = 0.1 + frameCount / 100;
    return {
        x: sin(t) * sin(t + m) * Math.sign(cos(t)) * 600,
        y: cos(t) * cos(t + m) * Math.sign(sin(t)) * 350
    }
});
var wideLemonade7 = new Formula(function(t) {
    var m = 0.1 + frameCount / 100;
    return {
        x: cos(t) * sin(t + m) * Math.sign(sin(t)) * 600,
        y: cos(t) * sin(t + m) * Math.sign(cos(t)) * 350
    }
});
var wideLemonade8 = new Formula(function(t) {
    var m = 0.1 + frameCount / 100;
    return {
        x: cos(t + m) * sin(t + m) * Math.sign(sin(t)) * 600,
        y: cos(t) * sin(t + m) * Math.sign(cos(t)) * 350
    }
});

var wideLemonade9 = new Formula(function(t) {
    var m = 0.1 + frameCount / 100;
    return {
        x: cos(t + m) * sin(t + m) * Math.sign(sin(t)) * 1200,
        y: cos(t + m) * sin(t + m) * Math.sign(cos(t)) * 750
    }
});

var wideLemonade10 = new Formula(function(t) {
    var m = 0.1 + frameCount / 100;
    return {
        x: cos(t + m) * Math.sign(sin(t)) * 800,
        y: cos(t + m) * Math.sign(cos(t)) * 350
    }
});

var wideLemonade11 = new Formula(function(t) {
    var m = 0.1 + frameCount / 100;
    return {
        x: cos(t + m) * Math.sign(sin(t)) * 800,
        y: sin(t + m) * Math.sign(cos(t)) * 350
    }
});

var wideLemonade12 = new Formula(function(t) {
    var m = 0.1 + frameCount / 100;
    return {
        x: cos(t + m) * Math.sign(sin(t)) * 800,
        y: sin(t) * Math.sign(cos(t)) * 350
    }
});

var wideLemonade13 = new Formula(function(t) {
    var m = 0.1 + frameCount / 100;
    return {
        x: cos(t + m) * Math.sign(sin(t)) * 800,
        y: sin(t) / cos(t) * Math.sign(cos(t)) * 30
    }
});

var wideLemonade14 = new Formula(function(t) {
    var m = 0.1 + frameCount / 100;
    return {
        x: cos(t + m) * sin(t) * Math.sign(sin(t)) * 700,
        y: sin(t) / cos(t) * Math.sign(cos(t)) * 10
    }
});

var wideLemonade15 = new Formula(function(t) {
    var m = 0.1 + frameCount / 100;
    return {
        x: cos(t + m) * Math.sign(sin(t)) * 600,
        y: sin(t * 2) * Math.sign(cos(t)) * 350
    }
});

var wideLemonade16 = new Formula(function(t) {
    var m = 0.1 + frameCount / 100;
    return {
        x: cos(t + m) * Math.sign(sin(t)) * 600,
        y: sin(t * 1.5) * Math.sign(cos(t)) * 350
    }
});

var wideLemonade17 = new Formula(function(t) {
    var m = 0.1 + frameCount / 100;
    return {
        x: cos(t + m) * Math.sign(sin(t)) * 600,
        y: sin(t + m) * 350
    }
});

var wideLemonade2b = new Formula(function(t) {
    var m = 0.1 + frameCount / 100;
    return {
        x: pow(cos(t), 3) * sin(t + m) * Math.sign(sin(t)) * 0.01,
        y: sin(t) * 0.01
    }
});

var morningMedusa = new Formula(function(t) {
    var m = 0.1 + frameCount / 100;
    return {
        x: pow(cos(t), 3) * Math.sign(sin(t)) * 600,
        y: pow(sin(t + m), 3) * 370
    }
});

var morningMedusa2 = new Formula(function(t) {
    var m = 0.1 + frameCount / 10;
    return {
        x: pow(cos(t + m), 3) * Math.sign(sin(t)) * 600,
        y: pow(sin(t + m), 3) * 370
    }
});

var morningMedusa3 = new Formula(function(t) {
    var m = 0.1 + frameCount / 1000;
    return {
        x: pow(cos(t * m), 3) * Math.sign(sin(t)) * 600,
        y: pow(sin(t * m), 3) * 370
    }
});

var morningMedusa4 = new Formula(function(t) {
    var m = 0.1 + frameCount / 10;
    return {
        x: pow(cos(t + m), 3) * sin(t) * Math.sign(sin(t)) * 600,
        y: pow(sin(t + m), 3) * sin(t) * 370
    }
});

//iteration 79
var morningMedusa5 = new Formula(function(t) {
    var m = 0.1 + frameCount / 10;
    return {
        x: pow(cos(t + m), 3) * sin(t) * Math.sign(sin(t)) * 600,
        y: pow(sin(t + m), 3) * sin(t) * Math.sign(sin(t)) * 370
    }
});

var morningMedusa6 = new Formula(function(t) {
    var m = 0.1 + frameCount / 10;
    return {
        x: pow(cos(t), 1) * sin(t * 3) * Math.sign(sin(t)) * 600,
        y: pow(sin(t + m), 1) * sin(t + m) * Math.sign(sin(t)) * 370
    }
});

var morningMedusa7 = new Formula(function(t) {
    var m = 0.1 + frameCount / 10;
    return {
        x: pow(cos(t), 1) * sin(t) * Math.sign(sin(t)) * 600,
        y: pow(sin(t + m), 1) * sin(t + m) * Math.sign(sin(t)) * 370
    }
});

var morningMedusa8 = new Formula(function(t) {
    var m = 0.1 + frameCount / 10;
    return {
        x: pow(cos(t + m), 1) * sin(t) * Math.sign(tan(t)) * 600,
        y: pow(sin(t + m), 3) * cos(t + m) * Math.sign(sin(t)) * 870
    }
});

var morningMedusa9 = new Formula(function(t) {
    var m = 0.1 + frameCount / 10;
    return {
        x: pow(cos(t + m), 3) * sin(t) * Math.sign(tan(t)) * 600,
        y: pow(sin(t + m), 3) * cos(t + m) * Math.sign(sin(t)) * 870
    }
});

var morningMedusa10 = new Formula(function(t) {
    var m = 0.1 + frameCount / 10;
    return {
        x: pow(cos(t + m), 7) * sin(t) * Math.sign(tan(t)) * 600,
        y: pow(sin(t + m), 7) * cos(t + m) * Math.sign(sin(t)) * 1670
    }
});

var morningMedusa11 = new Formula(function(t) {
    var m = 0.1 + frameCount / 10;
    return {
        x: pow(cos(t + m), 7) * sin(t) * Math.sign(tan(t)) * 600,
        y: pow(sin(t + m), 7) * cos(t + m) * Math.sign(tan(t)) * 1670
    }
});

var morningMedusa12 = new Formula(function(t) {
    var m = 0.1 + frameCount / 10;
    return {
        x: sin(pow(cos(t + m), 3) * sin(t) * Math.sign(tan(t))) * 700,
        y: cos(pow(sin(t + m), 7) * cos(t + m)) * Math.sign(tan(t)) * 370
    }
});

var morningMedusa13 = new Formula(function(t) {
    var m = 0.1 + frameCount / 10;
    return {
        x: sin(pow(cos(t + m), 3) * sin(t) * Math.sign(tan(t))) * 700,
        y: cos(pow(sin(t + m), 7) * cos(t)) * Math.sign(tan(t)) * 370
    }
});

var morningMedusa14 = new Formula(function(t) {
    var m = 0.1 + frameCount / 10;
    return {
        x: sin(pow(cos(t), 1) * sin(t + m) * Math.sign(tan(t))) * 700,
        y: cos(cos(t)) * Math.sign(tan(t)) * 370
    }
});

var morningMedusa15 = new Formula(function(t) {
    var m = 0.1 + frameCount / 10;
    return {
        x: sin(sin(t + m) * Math.sign(tan(t))) * 700,
        y: cos(cos(t * t)) * Math.sign(tan(t)) * 370
    }
});

var morningMedusa16 = new Formula(function(t) {
    var m = 0.1 + frameCount / 10;
    return {
        x: sin(sin(t) * Math.sign(tan(t))) * 700,
        y: cos(cos(t + m)) * Math.sign(sin(t)) * 370
    }
});

var morningMedusa17 = new Formula(function(t) {
    var m = 0.1 + frameCount / 2000;
    return {
        x: sin(sin(t * m) * Math.sign(tan(t))) * 700,
        y: cos(cos(t * m)) * Math.sign(sin(t)) * 370
    }
});

//iteration = 60
var morningMedusa18 = new Formula(function(t) {
    var m = 0.1 + frameCount / 2000;
    return {
        x: sin(sin(t * m) * Math.sign(cos(t))) * 700,
        y: cos(cos(t * m)) * Math.sign(sin(t)) * 370
    }
});

//Les mouvements d'insectes
var morningMedusa19 = new Formula(function(t) {
    var m = 0.1 + frameCount / 10;
    return {
        x: tan(sin(t) * Math.sign(cos(t))) * 700,
        y: ((t)) * Math.sign(sin(t + m)) * 2
    }
});


var morningMedusa20 = new Formula(function(t) {
    var m = 0.1 + frameCount / 10;
    return {
        x: tan(sin(t + m / 10) * Math.sign(cos(t))) * 500,
        y: ((t)) * Math.sign(sin(t + m / 2)) * 2
    }
});


var morningMedusa21 = new Formula(function(t) {
    var m = 0.1 + frameCount / 10;
    return {
        x: pow(cos(t * t), 3) * sin(t) * Math.sign(cos(t)) * 500,
        y: ((t * t + m)) * Math.sign(sin(t + m / 2)) * 0.01
    }
});

var newCritter = new Formula(function(t) {
    var m = 0.1 + frameCount / 1000;
    return {
        x: pow(cos(t * m), 3) * 600,
        y: sin(t * m) * 350
    }
});

var newCritter2 = new Formula(function(t) {
    var m = 0.1 + frameCount / 1000;
    return {
        x: pow(cos(t * m), 3) * Math.sign(cos(t * m / 2)) * 600,
        y: sin(t * m) * 350
    }
});

//iteration = 60
var newCritter3 = new Formula(function(t) {
    var m = 0.1 + frameCount / 1000;
    return {
        x: pow(cos(t * m), 3) * Math.sign(sin(t)) * 600,
        y: sin(t * m) * Math.sign(sin(t)) * 350
    }
});

var newCritter4 = new Formula(function(t) {
    var m = 0.5 + frameCount / 5;
    return {
        x: pow(cos(t), 3) * Math.sign(sin(t + m)) * 600,
        y: cos(tan(t) * sin(t)) * 350
    }
});

var newCritter5 = new Formula(function(t) {
    var m = 0.5 + frameCount / 50;
    return {
        x: pow(cos(t), 1) * Math.sign(sin(t + m * 10)) * 600,
        y: cos(tan(t) * sin(t)) * 350
    }
});

var newCritter6 = new Formula(function(t) {
    var m = 0.5 + frameCount * 0.001;
    return {
        x: cos(t * m) * 600,
        y: sin(t) * 350
    }
});

var newCritter7 = new Formula(function(t) {
    var m = 0.5 + frameCount * 0.05;
    return {
        x: cos(t + m) * sin(t) * 600,
        y: sin(t) * 350
    }
});

var newCritter8 = new Formula(function(t) {
    var m = 50 + frameCount;
    return {
        x: 600 * sin(t + m * 3 / 50) * pow(cos(t + m * 2 / 50), 2),
        y: 350 * sin(t + m * 2 / 50) * pow(cos(t + m * 3 / 50), 2)
    }
});

var newCritter9 = new Formula(function(t) {
    var m = 50 + frameCount * 0.9;
    t /= 10;
    return {
        x: 600 * sin(t + m * 3 / 30) * pow(cos(t + m * 2 / 50), 3),
        y: 350 * sin(t + m * 2 / 50) * pow(cos(t + m * 3 / 50), 3)
    }
});

var newCritter10 = new Formula(function(t) {
    var m = 50 + frameCount * 0.9;
    t *= 100;
    return {
        x: 1900 * sin(t + m * 3 / 50) * pow(cos(t * 2 / 50), 1.5),
        y: 1200 * sin(t * 2 / 50) * pow(cos(t * 3 / 50), 3)
    }
});

var newCritter11 = new Formula(function(t) {
    var m = 0.1 + frameCount / 10;
    return {
        x: cos(t + m) * cos(t + m) * Math.sign(sin(t)) * 600,
        y: sin(t + m) * Math.sign(cos(t)) * 350
    }
});

var daysOfStOurs = new Formula(function(t) {
    var m = 0.1 + frameCount * 0.006;

    return {
        x: 2600 * sin(t * 2 / 50) * pow(cos(t * m * 2 / 50), 71),
        y: 350 * sin(t * m * 2 / 50) * pow(sin(t * 10 / 50), 2)
    }
});

//beau avec iteration = 60
var daysOfStOurs2 = new Formula(function(t) {
    var m = 20 + frameCount * 0.006;
    // t *= 0.1;
    return {
        x: 1000 * sin(t * 2 / 50) * pow(cos(t * m * 2 / 50), 1),
        y: 350 * sin(t * m * 2 / 50) * pow(sin(t * 10 / 50), 1)
    }
});

//Débile avec 60, 68
var daysOfStOurs3 = new Formula(function(t) {
    var m = 20 + frameCount * 0.06;
    t *= 0.1;
    return {
        x: 500 * sin(t) * 2,
        y: 350 * sin(t * cos(m * 2 / 50)) * pow(sin(t * 10 / 50), 3) * 2
    }
});

//DÉBILE avec 75 iteration
var daysOfStOurs4 = new Formula(function(t) {
    var m = 20 + frameCount * 0.06;
    t *= 0.5;
    return {
        x: 500 * sin(t * cos(m * 2 / 50)) * 2,
        y: 350 * sin(t * cos(m * 2 / 50)) * pow(sin(t * 10 / 50), 3) * 2
    }
});

var daysOfStOurs5 = new Formula(function(t) {
    var m = 20 + frameCount * 0.006;
    t *= 1;
    var x = 300 * cos(t + m) * 2;
    var y = 350 * sin(t + m);
    var xx = 300 * sin(t) * 2;
    var yy = 350 * cos(t + m) * cos(t + m);

    var l = map(sin(frameCount * 0.1), -1, 1, 0, 1);
    return {
        x: lerp(x, xx, l),
        y: lerp(y, yy, l)
    }
});
var daysOfStOurs6 = new Formula(function(t) {
    var m = 20 + frameCount * 0.006;
    t *= 1;
    var x = 300 * cos(t) * 2;
    var y = 350 * sin(t);
    var xx = 300 * sin(t * m) * 2;
    var yy = 350 * cos(t);

    var l = map(sin(frameCount * 0.1), -1, 1, 0, 1);
    return {
        x: lerp(x, xx, l),
        y: lerp(y, yy, l)
    }
});

var daysOfStOurs7 = new Formula(function(t) {
    var m = 20 + frameCount * 0.006;
    t *= 1;
    var x = 300 * cos(t) * 2;
    var y = 350 * sin(t);
    var xx = 300 * sin(t / 2 + m) * 2;
    var yy = 350 * cos(t / 2 + m);

    var l = map(sin(frameCount * 0.1), -1, 1, 0, 1);
    return {
        x: lerp(x, xx, l),
        y: lerp(y, yy, l)
    }
});

//66
var daysOfStOurs8 = new Formula(function(t) {
    // rotate(frameCount / 10000);
    var m = 20 + frameCount * 0.006;
    t *= 10;
    var x = 600 * sin(t) * pow(cos(t), 3);
    var y = 400 * sin(t + m) * pow(sin(t), 3);

    var xx = 600 * sin(t) * pow(cos(t), 3);
    var yy = 400 * sin(t) * pow(sin(t), 3);


    var l = map(sin(frameCount * 0.1), -1, 1, 0, 1);
    return {
        x: lerp(x, xx, l) * 2,
        y: -100 + lerp(y, yy, l) * 2
    }
});

var daysOfStOurs9 = new Formula(function(t) {
    // rotate(frameCount / 10000);
    var m = 20 + frameCount * 0.006;
    t *= 10;
    var x = 600 * sin(t) * pow(cos(t), 3);
    var y = 400 * sin(t + m) * pow(sin(t), 3);

    var xx = 600 * sin(t + m) * pow(cos(t), 3);
    var yy = 400 * sin(t) * pow(sin(t), 3);


    var l = map(sin(frameCount * 0.1), -1, 1, 0, 1);
    return {
        x: lerp(x, xx, l) * 2,
        y: -100 + lerp(y, yy, l) * 2
    }
});

var daysOfStOurs10 = new Formula(function(t) {
    // rotate(frameCount / 10000);
    var m = 20 + frameCount * 0.006;
    t *= 10;
    var x = 1400 * sin(t) * pow(cos(t), 3);
    var y = 600 * sin(t) * pow(sin(t), 3);
    t *= 0.1;
    var xx = 1400 * sin(t) * pow(cos(t), 3);
    var yy = 600 * sin(t) * pow(sin(t), 3);

    var l = map(sin(frameCount * 0.1), -1, 1, 0, 1);
    return {
        x: lerp(x, xx, l) * 1.2,
        y: -350 + lerp(y, yy, l) * 1.2
    }
});

var daysOfStOurs11 = new Formula(function(t) {
    // rotate(frameCount / 10000);
    var m = 20 + frameCount * 0.006;
    t *= 1;
    var x = 1400 * sin(t + m) * sin(t) * pow(cos(t), 3);
    var y = 600 * sin(t + m) * sin(t) * pow(sin(t), 3);
    m *= 5;
    var xx = 1400 * sin(t + m) * sin(t) * pow(cos(t), 3);
    var yy = 600 * sin(t + m) * sin(t) * pow(sin(t), 3);

    var l = map(sin(frameCount * 0.1), -1, 1, 0, 1);
    return {
        x: lerp(x, xx, l) * 2,
        y: lerp(y, yy, l) * 0.6
    }
});
var daysOfStOurs12 = new Formula(function(t) {
    // rotate(frameCount / 10000);
    var m = 2 + frameCount * 0.06;
    t *= 100;
    var x = 1400 * sin(t + m) * pow(cos(t), 3);
    var y = 600 * pow(sin(t), 3);
    m *= 0.1;
    var xx = 1400 * sin(t + m) * pow(cos(t), 3);
    var yy = 600 * pow(sin(t), 3);

    var l = map(sin(frameCount * 0.1), -1, 1, 0, 1);
    return {
        x: lerp(x, xx, l) * 1,
        y: lerp(y, yy, l) * 0.6
    }
});

var nightsOfStOurs = new Formula(function(t) {
    // rotate(frameCount / 10000);
    var m = 2 + frameCount * 0.06;
    t *= 100;
    var x = 1400 * sin(t + m) * pow(cos(t), 3);
    var y = 600 * pow(sin(t + m), 3);
    m *= 0.1;
    var xx = 1400 * sin(t + m) * pow(cos(t), 3);
    var yy = 600 * pow(sin(t + m), 3);

    var l = map(sin(frameCount * 0.1), -1, 1, 0, 1);
    return {
        x: lerp(x, xx, l) * 1,
        y: lerp(y, yy, l) * 0.6
    }
});

var nightsOfStOurs2 = new Formula(function(t) {
    // rotate(frameCount / 10000);
    var m = 2 + frameCount * 0.03;
    t *= 10;
    var x = 1400 * sin(t + m) * pow(cos(t), 3);
    var y = 600 * pow(tan(t + m), -1);
    m *= 0.1;
    var xx = 1400 * sin(t + m) * pow(cos(t), 3);
    var yy = 600 * pow(tan(t + m), -1);

    var l = map(sin(frameCount * 0.1), -1, 1, 0, 1);
    return {
        x: lerp(x, xx, l) * 1,
        y: lerp(y, yy, l) * 0.26
    }
});

var nightsOfStOurs3 = new Formula(function(t) {
    // rotate(frameCount / 10000);
    var m = 2 + frameCount * 0.003;
    t *= 10;
    var x = 600 * pow(tan(t + m), -1);
    var y = 1400 * sin(t + m) * pow(cos(t), 3);

    // m *= 0.1;
    t *= 10;
    var xx = 600 * pow(tan(t + m), -1);
    var yy = 1400 * sin(t + m) * pow(cos(t), 3);


    var l = map(sin(frameCount * 0.1), -1, 1, 0, 1);
    return {
        x: lerp(x, xx, l) * 0.025,
        y: lerp(y, yy, l) * 0.26
    }
});

var nightsOfStOurs4 = new Formula(function(t) {
    // rotate(frameCount / 10000);
    var m = 2 + frameCount * 0.03;
    t *= 100;
    var x = 600 * pow(sin(t + m), 1);
    var y = 1400 * sin(t + m) * pow(cos(t), 3);

    // m *= 0.1;
    t *= 1000;
    var xx = 600 * pow(sin(t + m), 1);
    var yy = 1400 * sin(t + m) * pow(cos(t), 3);


    // var l = map(sin(frameCount * 0.1), -1, 1, 0, 1);
    return {
        x: lerp(x, xx, 0.5) * 0.5,
        y: lerp(y, yy, 0.5) * 0.26
    }
});

//------------ For sketch4.js

var circle2 = new Formula(function(t) {
    var m = sin(frameCount / 100);
    return {
        x: cos(t + m) * 2 * t,
        y: sin(t + m) * 2 * t
    }
});

//beau avec 100, 119
var circle3 = new Formula(function(t) {
    var m = sin(frameCount / 1000);
    return {
        x: cos(t * m) * 2 * t,
        y: sin(t * m) * 2 * t
    }
});
var circle4 = new Formula(function(t) {
    var m = sin(frameCount / 1000);
    return {
        x: pow(cos(t * m), 3) * 2 * t,
        y: pow(sin(t * m), 3) * 2 * t
    }
});

var circle5 = new Formula(function(t) {
    var m = sin(frameCount / 1000);
    return {
        x: pow(cos(t / 10 + m * 10), 1) * 2 * t,
        y: pow(sin(t / 10 + m * 10), 1) * 2 * t
    }
});

//iteration = 60
var circle6 = new Formula(function(t) {
    var m = sin(frameCount / 100);
    return {
        x: cos(t + m * 10) * 2 * t,
        y: sin(t / 2 + m * 10) * 2 * t
    }
});

var circle7 = new Formula(function(t) {
    var m = sin(frameCount / 10000);
    return {
        x: sin(t * m) * Math.sign(cos(t * m)) * 2 * t,
        y: sin(t + m) * 2 * t
    }
});

var bigbang7 = new Formula(function(t) {
    var m = sin((frameCount) / 57000) * 2;
    t /= 10;
    var i = t;
    // t = sin(i);
    var z = 0.2 + sin(m / 100) * 10;
    return {
        x: tan(t + m / 20) * i / z / tan(t + m / 10000) * cos(t + m * i / 100) * m / z * 100,
        y: tan(t + m * i / 20) * m / z / tan(t + m * i / 10000) * sin(t + m * i / 100) * i / z * 100
    };
});


var octobre01 = new Formula(function(t) {
    var m = sin((frameCount) / 700) * 2;
    t = t / 30;
    // t = sin(i);
    var z = 2 + sin(m / 10) * 1;
    return {
        x: cos(t + m + t / 100000) * tan(t + m * 15 / 2) * cos(t + m * 10) * pow(sin(t), 5) * t / z * 400,
        y: cos(t + m + t / 100000) * tan(t + m * 15 / 2) * sin(t + m * 10) * pow(sin(t), 5) * t / z * 400
    };
});


var octobre02 = new Formula(function(t) {
    var m = sin((frameCount) / 5) * 2;
    // t *= 30;
    // t = sin(i);
    var z = 2 + sin(m) * 1;
    return {
        x: cos(t + m / 100) * sin(t * 15) * z * 200,
        y: sin(t + m / 10) * sin(t * 15) * z * 200
    };
});

var octobre03 = new Formula(function(t) {
    var m = sin((frameCount) / 25) * 2;
    // t *= 30;
    // t = sin(i);
    var z = 2 + sin(m);
    return {
        x: tan(cos(t + m) * sin(t * 15)) * z * 150,
        y: tan(sin(t + m) * sin(t * 15)) * z * 150
    };
});

var octobre04 = new Formula(function(t) {
    var m = sin((frameCount) / 25) * 2;
    // t *= 30;
    // t = sin(i);
    var z = 2 + sin(m);
    return {
        x: tan(cos(t + m) * sin(t * 15)) * z * 150,
        y: tan(cos(t + m) * cos(t * 15)) * z * 150
    };
});

var octobre05 = new Formula(function(t) {
    var m = sin((frameCount) / 25) * 2;
    // t *= 30;
    // t = sin(i);
    var z = 2 + sin(m);
    return {
        x: tan(cos(t + m)) * z * 150,
        y: tan(cos(t + m * 2)) * z * 150
    };
});

var octobre06 = new Formula(function(t) {
    var m = sin((frameCount) / 5025) * 2;
    // t *= 30;
    // t = sin(i);
    var z = 2 + sin(m);
    return {
        x: cos(tan(t + m)) * z * 150,
        y: sin(tan(t + m)) * z * 150
    };
});


var octobre07 = new Formula(function(t) {
    var m = sin((frameCount) / 25) * 2;
    // t *= 30;
    // t = sin(i);
    var z = 2 + sin(m);
    return {
        x: cos(tan(t + m)) * cos(t) * z * 150,
        y: sin(tan(t + m)) * cos(t) * z * 150
    };
});


var octobre08 = new Formula(function(t) {
    var m = sin((frameCount) / 25) * 2;
    // t *= 30;
    // t = sin(i);
    var z = 2 + sin(m);
    return {
        x: cos(tan(t + m)) * cos(t) * z * 150,
        y: sin(sin(t + m)) * cos(t) * z * 150
    };
});


var octobre09 = new Formula(function(t) {
    var m = sin(frameCount / 5);
    // t *= 30;
    // t = sin(i);
    var z = 2 + sin(m);
    return {
        x: tan(cos(t + m) * cos(t)) * 250,
        y: tan((sin(t + m)) * sin(t)) * 250
    };
});

// Beau avec iteration = 95
var janvier2017a = new Formula(function(t) {
    var m = 0.1 + frameCount / 10;
    return {
        x: cos(t + m) * 600,
        y: pow(sin(t + m), 3) * 350
    }
});

var janvier2017b = new Formula(function(t) {
    var m = 0.1 + frameCount / 10;
    return {
        x: cos(t + m) * 350,
        y: pow(sin(t + m), 3) * 350
    }
});

var janvier2017c = new Formula(function(t) {
    var m = 0.1 + frameCount / 10;
    return {
        x: pow(cos(t + m), 3) * 350,
        y: pow(sin(t + m), 3) * 350
    }
});

var janvier2017d = new Formula(function(t) {
    var m = 0.1 + frameCount / 10;
    return {
        x: sin(pow(cos(t + m), 3)) * 650,
        y: sin(pow(sin(t + m), 3) * 2) * 350
    }
});

// Beau avec iteration = 60
var janvier2017e = new Formula(function(t) {
    var m = 0.1 + frameCount / 10;
    return {
        x: sin(pow(cos(t + m), 3) * 1.5) * 650,
        y: sin(pow(sin(t + m), 3) * 5) * 350
    }
});

var janvier2017f = new Formula(function(t) {
    var m = 0.1 + frameCount / 10;
    return {
        x: cos(t + m) * Math.sign(sin(t * 0.1)) * 600,
        y: sin(t + m * 0.3) * Math.sign(cos(t)) * 350
    }
});

var newCritterSlow = new Formula(function(t) {
    // iteration = 12;
    var m = 0.1 + frameCount / 10000;
    return {
        x: pow(cos(t * m), 3) * 600 * 3,
        y: sin(t * m) * 350 * 3
    }
});

var formula = formulas[currentFormula];

//----
