//---------------------- Declaration of the scenes-----------------------------------------------//

var userControlledParticle = new Scene();

userControlledParticle.runBackground = function(t) {
    var step = map(abs(sin(t / 20)), 0, 1, 0.1, 0.3);
    // this.localValues.gradient = [{
    //     offset: 0,
    //     r: 255,
    //     g: 255,
    //     b: 0
    // }, {
    //     offset: 0.25,
    //     r: 55,
    //     g: 120,
    //     b: 0
    // }, {
    //     offset: 0.8,
    //     r: 255,
    //     g: 50,
    //     b: 0
    // }];

    //All black background
    this.localValues.gradient = [{
        offset: 0,
        r: 0,
        g: 0,
        b: 0
    }, {
        offset: 0.25,
        r: 0,
        g: 0,
        b: 0
    }, {
        offset: 0.8,
        r: 0,
        g: 0,
        b: 0
    }];

    // for (var i = 0; i < this.localValues.gradient.length; i++) {
    //     this.localValues.gradient[i] = adjustLevels(sliders.darkBg.value, sliders.midBg.value, sliders.lightBg.value, this.localValues.gradient[i]);
    //     this.localValues.gradient[i] = adjustHsv(sliders.hueBg.value, sliders.satBg.value, sliders.brightnessBg.value, this.localValues.gradient[i]);
    // }
};

userControlledParticle.runLayout = function(t) {
    this.localValues.zoom = sliders.zoom.value;
    this.localValues.rotation = 0;
};

userControlledParticle.runPositions = function(t) {
    this.privateValues.scalar = sliders.particleScalar.value;
    this.speed = sliders.speed.value;
    this.accMult = sliders.accMult.value;
    this.velMult = sliders.velMult.value;
    this.sc = sliders.sc.value;
    this.scPow = sliders.scPow.value;
    this.privateValues.shape = shape;

    this.superformula = {
        n1: map(abs(sin(t / (sliders.sc.value * pow(10, sliders.scPow.value)))), 0, 1, 0.15, 2),
        n2: sliders.n2.value,
        n3: 1,
        a: 1,
        b: 1,
        m: sliders.m.value
    };

    this.privateValues.graphs = this.particle.run(this, t);
    this.privateValues.posGraph = this.privateValues.graphs.g;
    this.localValues.yellowGraph = this.privateValues.graphs.yellowGraph;
};

userControlledParticle.runColors = function(t) {
    this.privateValues.paletteIndex = sliders.dotPalette.value;
    if (allPalettes) {
        this.privateValues.palette = allPalettes[this.privateValues.paletteIndex];
    } else {
        this.privateValues.palette = palette;
    }
    this.privateValues.colorGraph = [];
    var currentColor = 0;
    for (var i = 0; i < 1000; i++) {
        var colorValues = hexToRgb(this.privateValues.palette[currentColor]);
        colorValues = adjustLevels(sliders.dark.value, sliders.mid.value, sliders.light.value, colorValues);
        colorValues = adjustHsv(sliders.hue.value, sliders.sat.value, sliders.brightness.value, colorValues);
        currentColor++;
        if (currentColor > 4) {
            currentColor = 0;
        }
        //All white dots
        colorValues = {
            r: 255,
            g: 255,
            b: 255
        };
        this.privateValues.colorGraph.push(colorValues);
    }
};

//--------------------------------------------------------------------------------------------//

var exitParticle = new Scene();
exitParticle.privateValues.paletteIndex = 236;

exitParticle.runBackground = function(t) {
    this.localValues.gradient = [{
        offset: 0,
        r: 0,
        g: 0,
        b: 0
    }, {
        offset: 0.01,
        r: 0,
        g: 0,
        b: 0
    }, {
        offset: 0.03,
        r: 0,
        g: 0,
        b: 0
    }];
};

exitParticle.runLayout = function(t) {
    // this.localValues.zoom = sliders.zoom.value;
    // this.localValues.rotation = 0.01;
    this.localValues.zoom = 0.1;
    this.localValues.rotation = 0;
};

exitParticle.runPositions = function(t) {
    this.privateValues.scalar = 50;
    this.speed = 0.29;
    this.accMult = 1;
    this.velMult = sliders.velMult.value;
    this.sc = 20;
    this.scPow = 0;
    this.privateValues.shape = shape;

    this.superformula = {
        n1: map(abs(sin(t / (20 * pow(10, 0)))), 0, 1, 0.15, 2),
        n2: 1,
        n3: 1,
        a: 1,
        b: 1,
        m: 5
    };

    this.privateValues.graphs = this.particle.run(this, t);
    this.privateValues.posGraph = this.privateValues.graphs.g;
    this.localValues.yellowGraph = this.privateValues.graphs.yellowGraph;
};

exitParticle.runSizes = function(t) {
    this.localValues.sizes = [];
    for (var i = 0; i < 1000; i++) {
        var s = 85;
        // if (drawCount > 5482) {
        //     s = 0;
        // }
        this.localValues.sizes.push(s);
    }
};


//--------------------------------------------------------------------------------------------//

var exitParticles = new Scene();
exitParticles.privateValues.paletteIndex = 236;

exitParticles.particles = [];

for (var i = 0; i < 1000; i++) {
    var v = new Particle();
    exitParticles.particles.push(v);
}

exitParticles.runBackground = function(t) {
    this.localValues.gradient = [{
        offset: 0,
        r: 0,
        g: 0,
        b: 0
    }, {
        offset: 0.01,
        r: 0,
        g: 0,
        b: 0
    }, {
        offset: 0.03,
        r: 0,
        g: 0,
        b: 0
    }];
};

exitParticles.runLayout = function(t) {
    // this.localValues.zoom = sliders.zoom.value;
    // this.localValues.rotation = 0.01;
    this.localValues.zoom = 0.2;
    this.localValues.rotation = 0;
};

exitParticles.runPositions = function(t) {
    this.privateValues.scalar = 50;
    this.speed = 0.29;
    this.accMult = 1;
    this.velMult = sliders.velMult.value;
    this.sc = 20;
    this.scPow = 0;
    this.privateValues.shape = shape;

    this.superformula = {
        n1: map(abs(sin(t / (20 * pow(10, 0)))), 0, 1, 0.15, 2),
        n2: 1,
        n3: 1,
        a: 1,
        b: 1,
        m: 5
    };

    this.privateValues.graphs = this.particle.run(this, t);
    this.privateValues.posGraph = this.privateValues.graphs.g;
    this.localValues.yellowGraph = this.privateValues.graphs.yellowGraph;
};

exitParticles.runSizes = function(t) {
    this.localValues.sizes = [];
    for (var i = 0; i < 1000; i++) {
        var s = 25;
        // if (drawCount > 5482) {
        //     s = 0;
        // }
        this.localValues.sizes.push(s);
    }
};





//--------------------------------------------------------------------------------------------//



var userControlledSpiral = new Scene();

userControlledSpiral.runBackground = function(t) {
    // var step = map(abs(sin(t / 20)), 0, 1, 0.1, 0.3);
    this.localValues.gradient = [{
        offset: 0,
        r: 155,
        g: 175,
        b: 0
    }, {
        offset: 0.1,
        r: 55,
        g: 120,
        b: 0
    }, {
        offset: 0.8,
        r: 255,
        g: 50,
        b: 0
    }];
    for (var i = 0; i < this.localValues.gradient.length; i++) {
        this.localValues.gradient[i] = adjustLevels(sliders.darkBg.value, sliders.midBg.value, sliders.lightBg.value, this.localValues.gradient[i]);
        this.localValues.gradient[i] = adjustHsv(sliders.hueBg.value, sliders.satBg.value, sliders.brightnessBg.value, this.localValues.gradient[i]);
    }
};

userControlledSpiral.runLayout = function(t) {
    this.localValues.zoom = sliders.zoom.value;
    this.localValues.rotation = 0;
};

userControlledSpiral.runPositions = function(t) {
    this.privateValues.scalar = sliders.spiralScalar.value;

    this.accMult = sliders.accMult.value;
    this.velMult = sliders.velMult.value;
    this.sc = sliders.sc.value;
    this.scPow = sliders.scPow.value;
    this.privateValues.shape = shape;

    this.superformula = {
        n1: map(abs(sin(t / (sliders.sc.value * pow(10, sliders.scPow.value)))), 0, 1, 0.15, 2),
        n2: sliders.n2.value,
        n3: 1,
        a: 1,
        b: 1,
        m: sliders.m.value
    };

    if (!this.privateValues.spiral) {
        this.privateValues.spiral = {
            startingAngle: 0,
            angle: 0,
            speed: sliders.spiSpeed.value
        };
    }
    this.privateValues.spiral.speed = sliders.spiSpeed.value;
    var spiralVal = this.privateValues.spiral;
    this.privateValues.spiral.angle = spiralVal.startingAngle + t * spiralVal.speed * -1;

    this.privateValues.posGraph = currentSpiralFormula(this, t);
};

userControlledSpiral.runColors = function(t) {
    this.privateValues.paletteIndex = sliders.dotPalette.value;
    if (allPalettes) {
        this.privateValues.palette = allPalettes[this.privateValues.paletteIndex];
    } else {
        this.privateValues.palette = palette;
    }
    this.privateValues.colorGraph = [];
    var currentColor = 0;
    for (var i = 0; i < 1000; i++) {
        var colorValues = hexToRgb(this.privateValues.palette[currentColor]);
        colorValues = adjustLevels(sliders.dark.value, sliders.mid.value, sliders.light.value, colorValues);
        colorValues = adjustHsv(sliders.hue.value, sliders.sat.value, sliders.brightness.value, colorValues);
        currentColor++;
        if (currentColor > 4) {
            currentColor = 0;
        }
        this.privateValues.colorGraph.push(colorValues);
    }
};

userControlledSpiral.runSizes = function(t) {
    this.localValues.sizes = [];
    for (var i = 0; i < 1000; i++) {
        var s = sliders.s.value;
        var growthMap = map(i, 0, 1000, 0, sliders.sizeGrowth.value);
        s += growthMap;
        this.localValues.sizes.push(s);
    }
};

//--------------------------------------------------------------------------------------------//

var spiderSpiral = new Scene();

// spiderSpiral.runBackground = userControlledSpiral.runBackground;
spiderSpiral.runBackground = function(t) {
    var step = map(abs(sin(t / 20)), 0, 1, 0.1, 0.3);
    this.localValues.gradient = [{
        offset: 0,
        r: 255,
        g: 255,
        b: 0
    }, {
        offset: step,
        r: 255,
        g: 120,
        b: 0
    }, {
        offset: 0.8,
        r: 155,
        g: 55,
        b: 250
    }];
};
spiderSpiral.privateValues.paletteIndex = 236;
spiderSpiral.runLayout = function(t) {
    this.localValues.zoom = 2;
    this.localValues.rotation = 0.01;
};

spiderSpiral.runPositions = function(t) {
    this.privateValues.scalar = 30;
    this.accMult = sliders.accMult.value;
    this.velMult = sliders.velMult.value;
    this.sc = sliders.sc.value;
    this.scPow = sliders.scPow.value;
    this.privateValues.shape = shape;

    this.superformula = {
        n1: map(abs(sin(t / (sliders.sc.value * pow(10, sliders.scPow.value)))), 0, 1, 0.15, 2),
        n2: sliders.n2.value,
        n3: 1,
        a: 1,
        b: 1,
        m: sliders.m.value
    };

    if (!this.privateValues.spiral) {
        this.privateValues.spiral = {
            startingAngle: 2,
            angle: 2,
            speed: 0.05 / 360 * Math.PI * 2 /  50,
            hyp: 0.1
        };
    }
    var spiralVal = this.privateValues.spiral;
    this.privateValues.spiral.angle = spiralVal.startingAngle + t * spiralVal.speed * -1;

    this.privateValues.posGraph = spiderWebSpiral(this, t);
};

spiderSpiral.runSizes = function(t) {
    var pos = this.privateValues.posGraph;
    this.localValues.sizes = [];
    for (var i = 0; i < 1000; i++) {
        var currentPos = dist(0, 0, pos[i].x, pos[i].y);
        var s = 10 + map(currentPos, 0, 1000, 0, 300);
        this.localValues.sizes.push(s);
    }
};

//--------------------------------------------------------------------------------------------//


spiderSpiral2 = new Scene();

spiderSpiral2.runBackground = function(t) {
    var col = floor(map(abs(sin(t / 20)), 0, 1, 0, 255));
    var col2 = floor(map(abs(sin(t / 40)), 0, 1, 0, 255));
    var step = map(abs(sin(t / 2)), 0, 1, 0.1, 0.3);

    this.localValues.gradient = [{
        offset: 0,
        r: 255,
        g: col2,
        b: 0
    }, {
        offset: step,
        r: col,
        g: 120,
        b: 0
    }, {
        offset: 0.8,
        r: 155,
        g: 55,
        b: col2
    }];
};
spiderSpiral2.privateValues.paletteIndex = 236;
spiderSpiral2.runLayout = function(t) {
    this.localValues.zoom = 2;
    this.localValues.rotation = 0.01;
};

spiderSpiral2.runPositions = function(t) {
    this.privateValues.scalar = 30;
    this.accMult = sliders.accMult.value;
    this.velMult = sliders.velMult.value;
    this.sc = sliders.sc.value;
    this.scPow = sliders.scPow.value;
    this.privateValues.shape = shape;

    this.superformula = {
        n1: map(abs(sin(t / (sliders.sc.value * pow(10, sliders.scPow.value)))), 0, 1, 0.15, 2),
        n2: sliders.n2.value,
        n3: 1,
        a: 1,
        b: 1,
        m: sliders.m.value
    };

    if (!this.privateValues.spiral) {
        this.privateValues.spiral = {
            startingAngle: 2,
            angle: 2,
            speed: 0.05 / 360 * Math.PI * 2 /  2,
            hyp: 0.1
        };
    }
    var spiralVal = this.privateValues.spiral;
    this.privateValues.spiral.angle = spiralVal.startingAngle + t * spiralVal.speed * -1;

    this.privateValues.posGraph = spiderWebSpiral(this, t);
};

spiderSpiral2.runSizes = function(t) {
    var pos = this.privateValues.posGraph;
    this.localValues.sizes = [];
    for (var i = 0; i < 1000; i++) {
        var currentPos = dist(0, 0, pos[i].x, pos[i].y);
        var s = 10 + map(currentPos, 0, 1000, 0, 300);
        this.localValues.sizes.push(s);
    }
};

spiderSpiral2.runColors = function(t) {
    if (!this.privateValues.paletteIndex) {
        this.privateValues.paletteIndex = 236;
    }
    if (!this.privateValues.paletteIndex2) {
        this.privateValues.paletteIndex2 = 238;
        //Très beau aussi.
        //this.privateValues.paletteIndex2 = 3014;
    }

    if (allPalettes) {
        this.privateValues.palette = allPalettes[this.privateValues.paletteIndex];
        this.privateValues.palette2 = allPalettes[this.privateValues.paletteIndex2];
    } else {
        this.privateValues.palette = palette;
        this.privateValues.palette2 = palette;
    }

    this.privateValues.colorGraph = [];
    var currentColor = 0;
    for (var i = 0; i < 1000; i++) {
        var colorValues1 = hexToRgb(this.privateValues.palette[currentColor]);
        var colorValues2 = hexToRgb(this.privateValues.palette2[currentColor]);
        var lerpy = map(sin(t / 10), -1, 1, 0, 1);
        var colorValues = {
            r: lerp(colorValues1.r, colorValues2.r, lerpy),
            g: lerp(colorValues1.g, colorValues2.g, lerpy),
            b: lerp(colorValues1.b, colorValues2.b, lerpy)
        };
        currentColor++;
        if (currentColor > 4) {
            currentColor = 0;
        }
        this.privateValues.colorGraph.push(colorValues);
    }
};


//--------------------------------------------------------------------------------------------//


spiderSpiral3 = new Scene();

spiderSpiral3.runBackground = function(t) {
    var col = floor(map(abs(sin(t / 20)), 0, 1, 0, 255));
    var col2 = floor(map(abs(sin(t / 40)), 0, 1, 0, 255));
    var step = map(abs(sin(t / 20)), 0, 1, 0.1, 0.3);
    this.localValues.gradient = [{
        offset: 0,
        r: 0,
        g: 255,
        b: col
    }, {
        offset: step,
        r: col,
        g: 255,
        b: 0
    }, {
        offset: 0.7,
        r: 255,
        g: 0,
        b: col2
    }];
};

spiderSpiral3.runLayout = function(t) {
    this.localValues.zoom = 2;
    this.localValues.rotation = 0.01;
};

spiderSpiral3.runPositions = function(t) {
    this.privateValues.scalar = 30;
    if (!this.privateValues.spiral) {
        this.privateValues.spiral = {
            startingAngle: 2,
            angle: 2,
            speed: 0.05 / 360 * Math.PI * 2 /  8,
            hyp: 0.1
        };
    }
    var spiralVal = this.privateValues.spiral;
    this.privateValues.spiral.angle = spiralVal.startingAngle + t * spiralVal.speed * -1;

    this.privateValues.posGraph = nonCrossingStarSpiral(this, t);
};

spiderSpiral3.runSizes = function(t) {
    var pos = this.privateValues.posGraph;
    this.localValues.sizes = [];
    for (var i = 0; i < 1000; i++) {
        var currentPos = dist(0, 0, pos[i].x, pos[i].y);
        var s = 10 + map(currentPos, 0, 1000, 0, 300);
        this.localValues.sizes.push(s);
    }
};

spiderSpiral3.runColors = function(t) {
    if (!this.privateValues.paletteIndex) {
        this.privateValues.paletteIndex = 274;
    }
    if (!this.privateValues.paletteIndex2) {
        this.privateValues.paletteIndex2 = 1258;
        //Très beau aussi.
        //this.privateValues.paletteIndex2 = 3014;
    }

    if (allPalettes) {
        this.privateValues.palette = allPalettes[this.privateValues.paletteIndex];
        this.privateValues.palette2 = allPalettes[this.privateValues.paletteIndex2];
    } else {
        this.privateValues.palette = palette;
        this.privateValues.palette2 = palette;
    }

    this.privateValues.colorGraph = [];
    var currentColor = 0;
    for (var i = 0; i < 1000; i++) {
        var colorValues1 = hexToRgb(this.privateValues.palette[currentColor]);
        var colorValues2 = hexToRgb(this.privateValues.palette2[currentColor]);
        var lerpy = map(sin(t / 10), -1, 1, 0, 1);
        var colorValues = {
            r: lerp(colorValues1.r, colorValues2.r, lerpy),
            g: lerp(colorValues1.g, colorValues2.g, lerpy),
            b: lerp(colorValues1.b, colorValues2.b, lerpy)
        };
        currentColor++;
        if (currentColor > 4) {
            currentColor = 0;
        }
        this.privateValues.colorGraph.push(colorValues);
    }
};

//--------------------------------------------------------------------------------------------//
var firstSpiral = new Scene();
firstSpiral.privateValues.paletteIndex = 3;

firstSpiral.runBackground = function(t) {
    var fadeSize = cosineFadeSynchronous(t, 0, 30);
    var curSize = map(fadeSize, 0, 1, 1, 0);
    curSize = constrain(curSize, 0, 1);
    var fadeSize2 = cosineFadeSynchronous(t, 0, 20);
    var curSize2 = map(fadeSize2, 0, 1, 1, 0);
    curSize2 = constrain(curSize2, 0, 1);
    var step = map(abs(sin(t / 100)), 0, 1, 0.15, 0.2);
    this.localValues.gradient = [{
        offset: 0,
        r: 155,
        g: 150,
        b: 55
    }, {
        offset: 0.15 * curSize,
        r: 155,
        g: 0,
        b: 0
    }, {
        offset: 0.8 * curSize2,
        r: 0,
        g: 0,
        b: 0
    }];
    // for (var i = 0; i < this.localValues.gradient.length; i++) {
    //     this.localValues.gradient[i] = adjustLevels(sliders.darkBg.value, sliders.midBg.value, sliders.lightBg.value, this.localValues.gradient[i]);
    //     this.localValues.gradient[i] = adjustHsv(sliders.hueBg.value, sliders.satBg.value, sliders.brightnessBg.value, this.localValues.gradient[i]);
    // }

    if (drawCount > 540 && drawCount < 590) {
        for (var i = 0; i < this.localValues.gradient.length; i++) {
            // var s = sin(drawCount * 10);
            var sMap = map(drawCount, 540, 590, 0, 180);
            sMap = constrain(sMap, 0, 180);
            // this.localValues.gradient[i] = adjustLevels(sliders.darkBg.value, sliders.midBg.value, sliders.lightBg.value, this.localValues.gradient[i]);
            this.localValues.gradient[i] = adjustHsv(sMap, 0, 0, this.localValues.gradient[i]);
        }
    }
};

firstSpiral.runLayout = function(t) {
    var z = map(t, 0, 1000, 1, 0.8);
    z = constrain(z, 0.1, 1);
    this.localValues.zoom = z;
    this.localValues.rotation = 0.01;
};

firstSpiral.runPositions = function(t) {
    this.privateValues.scalar = 20;

    if (!this.privateValues.spiral) {
        this.privateValues.spiral = {
            startingAngle: 0,
            angle: 0,
            speed: 0.05 / 360 * Math.PI * 2 / 5 * 1.11125,
            hyp: 8
        };
    }
    var coFade = cosineFade(0, 500);
    this.privateValues.spiral.hyp = map(coFade, 0, 1, 0.1, 8);
    // console.log(this.privateValues.spiral.hyp);
    this.privateValues.spiral.hyp = constrain(this.privateValues.spiral.hyp, 0.1, 8);
    var spiralVal = this.privateValues.spiral;
    this.privateValues.spiral.angle = spiralVal.startingAngle + t * spiralVal.speed * -1;

    this.privateValues.posGraph = spiral(this, t);
};

firstSpiral.runSizes = function(t) {
    this.localValues.sizes = [];
    for (var i = 0; i < 1000; i++) {
        var sizeSpeed = map(i, 0, 5, 40, 60);
        var ss = map(t, 0, sizeSpeed, 0, 1);
        var fadeSize = cosineFadeSynchronous(t, 0, sizeSpeed);
        var curSize = map(fadeSize, 0, 1, 1, 0);
        curSize = constrain(curSize, 0, 1);
        var s = 200 * curSize;
        this.localValues.sizes.push(s);
    }
};

firstSpiral.runColors = function(t) {
    if (!this.privateValues.paletteIndex) {
        this.privateValues.paletteIndex = 1000;
    }

    if (allPalettes) {
        this.privateValues.palette = allPalettes[this.privateValues.paletteIndex];
    } else {
        this.privateValues.palette = palette;
    }

    this.privateValues.colorGraph = [];
    var currentColor = 0;

    for (var i = 0; i < 1000; i++) {
        var colorValues = hexToRgb(this.privateValues.palette[currentColor]);
        // colorValues = adjustLevels(sliders.dark.value, sliders.mid.value, sliders.light.value, colorValues);

        colorValues = adjustLevels(-30, 0, 23, colorValues);

        var hueShift = map(i, 0, 1000, 0, -180);
        colorValues = adjustHsv(hueShift, 0, 0, colorValues);

        // colorValues = adjustHsv(sliders.hue.value, sliders.sat.value, sliders.brightness.value, colorValues);


        if (drawCount > 578 && drawCount < 587) {

            var s = sin(drawCount * 10);
            var sMap = map(s, -1, 1, 0, 380);
            // this.localValues.gradient[i] = adjustLevels(sliders.darkBg.value, sliders.midBg.value, sliders.lightBg.value, this.localValues.gradient[i]);
            colorValues = adjustHsv(sMap, 0, 0, colorValues);
        }





        currentColor++;
        if (currentColor > 4) {
            currentColor = 0;
        }
        this.privateValues.colorGraph.push(colorValues);
    }
};


//-------------------------------------------------------------------------------------------------//

var secondSpiral = new Scene();
secondSpiral.privateValues.paletteIndex = 11;
secondSpiral.runBackground = firstSpiral.runBackground;
secondSpiral.runLayout = firstSpiral.runLayout;
secondSpiral.runPositions = firstSpiral.runPositions;
// secondSpiral.runSizes = firstSpiral.runSizes;

secondSpiral.runSizes = function(t) {
    this.localValues.sizes = [];
    for (var i = 0; i < 1000; i++) {
        var s = 200;
        this.localValues.sizes.push(s);
    }
};
secondSpiral.runColors = function(t) {
    if (!this.privateValues.paletteIndex) {
        this.privateValues.paletteIndex = 1000;
    }
    if (!this.privateValues.paletteIndex2) {
        this.privateValues.paletteIndex2 = 3008;
        //Très beau aussi.
        //this.privateValues.paletteIndex2 = 3014;
    }

    if (allPalettes) {
        this.privateValues.palette = allPalettes[this.privateValues.paletteIndex];
        this.privateValues.palette2 = allPalettes[this.privateValues.paletteIndex2];
    } else {
        this.privateValues.palette = palette;
        this.privateValues.palette2 = palette;
    }

    this.privateValues.colorGraph = [];
    if (!this.privateValues.currentColor) {
        this.privateValues.currentColor = 0;
    }
    if (!this.privateValues.nextColor) {
        this.privateValues.nextColor = 3;
    }
    var lerpyColorOffset = map(sin(t / 10), -1, 1, 0, 1);
    // console.log(lerpyColorOffset);
    // if (lerpyColorOffset <= 0.007) {
    //     // console.log("lerp lerp!! min");
    //     // for (var i = 0; i < 1; i++) {
    //     //     this.privateValues.nextColor++;
    //     //     if (this.privateValues.nextColor > 4) {
    //     //         this.privateValues.nextColor = 0;
    //     //     }
    //     // }
    //     // this.privateValues.paletteIndex2++;
    // }
    // if (lerpyColorOffset >= 0.99) {
    //     // console.log("lerp lerp!! max");
    //     // for (var i = 0; i < 1; i++) {
    //     //     this.privateValues.currentColor++;
    //     //     if (this.privateValues.currentColor > 4) {
    //     //         this.privateValues.currentColor = 0;
    //     //     }
    //     // }
    //     // this.privateValues.paletteIndex++;
    // }

    for (var i = 0; i < 1000; i++) {
        var colorValues1 = hexToRgb(this.privateValues.palette[this.privateValues.currentColor]);
        var colorValues2 = hexToRgb(this.privateValues.palette2[this.privateValues.nextColor]);
        var lerpy = map(sin(t / 10), -1, 1, 0, 1);
        var colorValues = {
            r: lerp(colorValues1.r, colorValues2.r, lerpy),
            g: lerp(colorValues1.g, colorValues2.g, lerpy),
            b: lerp(colorValues1.b, colorValues2.b, lerpy)
        };
        colorValues = adjustLevels(-30, 0, 23, colorValues);

        var hueShift = map(i, 0, 1000, 0, -80);
        // colorValues = adjustHsv(hueShift, 0, 0, colorValues);

        this.privateValues.currentColor++;
        if (this.privateValues.currentColor > 4) {
            this.privateValues.currentColor = 0;
        }
        this.privateValues.nextColor++;
        if (this.privateValues.nextColor > 4) {
            this.privateValues.nextColor = 0;
        }
        this.privateValues.colorGraph.push(colorValues);
    }
};

var thirdSpiral = new Scene();
thirdSpiral.privateValues.paletteIndex = 15;
thirdSpiral.runBackground = firstSpiral.runBackground;
thirdSpiral.runLayout = firstSpiral.runLayout;
thirdSpiral.runPositions = firstSpiral.runPositions;
thirdSpiral.runSizes = firstSpiral.runSizes;
thirdSpiral.runColors = function(t) {
    if (!this.privateValues.paletteIndex) {
        this.privateValues.paletteIndex = 1000;
    }
    if (!this.privateValues.paletteIndex2) {
        this.privateValues.paletteIndex2 = 3008;
        //Très beau aussi.
        //this.privateValues.paletteIndex2 = 3014;
    }

    if (allPalettes) {
        this.privateValues.palette = allPalettes[this.privateValues.paletteIndex];
        this.privateValues.palette2 = allPalettes[this.privateValues.paletteIndex2];
    } else {
        this.privateValues.palette = palette;
        this.privateValues.palette2 = palette;
    }

    this.privateValues.colorGraph = [];
    var currentColor = 0;
    for (var i = 0; i < 1000; i++) {
        var colorValues1 = hexToRgb(this.privateValues.palette[currentColor]);
        var colorValues2 = hexToRgb(this.privateValues.palette2[currentColor]);
        var lerpy = map(sin(t / 10), -1, 1, 0, 1);
        var colorValues = {
            r: lerp(colorValues1.r, colorValues2.r, lerpy),
            g: lerp(colorValues1.g, colorValues2.g, lerpy),
            b: lerp(colorValues1.b, colorValues2.b, lerpy)
        };
        currentColor++;
        if (currentColor > 4) {
            currentColor = 0;
        }
        this.privateValues.colorGraph.push(colorValues);
    }
};

var fourthSpiral = new Scene();
fourthSpiral.privateValues.paletteIndex = 17;
fourthSpiral.runBackground = firstSpiral.runBackground;
fourthSpiral.runLayout = firstSpiral.runLayout;
fourthSpiral.runPositions = firstSpiral.runPositions;
fourthSpiral.runSizes = firstSpiral.runSizes;



//--------------------------------------------------------------------------------------------//


var firstParticle = new Scene();
firstParticle.privateValues.paletteIndex = 18;

firstParticle.runBackground = function(t) {
    var step = map(abs(sin(t / 20)), 0, 1, 0.1, 0.3);
    this.localValues.gradient = [{
        offset: 0,
        r: 155,
        g: 150,
        b: 55
    }, {
        offset: step,
        r: 155,
        g: 100,
        b: 50
    }, {
        offset: 0.8,
        r: 0,
        g: 0,
        b: 150
    }];
};

firstParticle.runLayout = function(t) {
    this.localValues.zoom = 1.58;
    this.localValues.rotation = 0;
};

firstParticle.runPositions = function(t) {
    this.privateValues.scalar = 3.158;
    this.speed = 0.58;
    this.accMult = 0.756;
    this.velMult = 0.999;
    this.sc = 20;
    this.scPow = 7;
    this.privateValues.shape = shape;

    this.superformula = {
        n1: map(abs(sin(t / (sliders.sc.value * pow(10, sliders.scPow.value)))), 0, 1, 0.15, 2),
        n2: 0,
        n3: 1,
        a: 1,
        b: 1,
        m: 26
    };

    this.privateValues.graphs = this.particle.run(this, t);
    this.privateValues.posGraph = this.privateValues.graphs.g;
    this.localValues.yellowGraph = this.privateValues.graphs.yellowGraph;
};

firstParticle.runSizes = function(t) {
    this.localValues.sizes = [];
    for (var i = 0; i < 1000; i++) {
        var s = 2.5;
        this.localValues.sizes.push(s);
    }
};

//--------------------------------------------------------------------------------------------//

var octoSpiral = new Scene();
octoSpiral.runBackground = function(t) {
    // var step = map(abs(sin(t / 20)), 0, 1, 0.1, 0.3);
    this.localValues.gradient = [{
        offset: 0,
        r: 155,
        g: 175,
        b: 0
    }, {
        offset: 0.1,
        r: 55,
        g: 120,
        b: 0
    }, {
        offset: 0.8,
        r: 255,
        g: 50,
        b: 0
    }];
    // for (var i = 0; i < this.localValues.gradient.length; i++) {
    //     this.localValues.gradient[i] = adjustLevels(sliders.darkBg.value, sliders.midBg.value, sliders.lightBg.value, this.localValues.gradient[i]);
    //     this.localValues.gradient[i] = adjustHsv(sliders.hueBg.value, sliders.satBg.value, sliders.brightnessBg.value, this.localValues.gradient[i]);
    // }
};

// L'originale
octoSpiral.privateValues.paletteIndex = 40;

//La nouvelle
octoSpiral.privateValues.paletteIndex = 96;

// octoSpiral.runLayout = firstSpiral.runLayout;

octoSpiral.runLayout = function(t) {
    this.localValues.zoom = 2;
    this.localValues.rotation = 0.01;
};

octoSpiral.runPositions = function(t) {
    this.privateValues.scalar = 10;

    this.speed = 0.29; //sliders.speed.value;
    this.accMult = 1; //sliders.accMult.value;
    this.velMult = 0.999; //sliders.velMult.value;
    this.sc = 20; //sliders.sc.value;
    this.scPow = 0; //sliders.scPow.value;
    this.privateValues.shape = shape;

    this.superformula = {
        n1: map(abs(sin(t / (this.sc * pow(10, this.scPow)))), 0, 1, 0.15, 2),
        n2: 1, //sliders.n2.value,
        n3: 1,
        a: 1,
        b: 1,
        m: 5 //sliders.m.value
    };
    if (!this.privateValues.spiral) {
        this.privateValues.spiral = {
            startingAngle: 0,
            angle: 0,
            // speed: 0.05 / 360 * Math.PI * 2 / 10 * 1.1
            speed: firstSpiral.privateValues.spiral.speed / 2
        };
    }
    var spiralVal = this.privateValues.spiral;
    this.privateValues.spiral.angle = spiralVal.startingAngle + t * spiralVal.speed * -1;

    this.privateValues.spiGraph = octogonalSpiral(this, t);

    this.privateValues.parGraph = this.particle.run(this, t);

    this.privateValues.posGraph = [];

    var lerpTiming = map(drawCount, 1200, 1440, 0, 0.005);
    lerpTiming = constrain(lerpTiming, 0, 1);
    for (var i = 0; i < 1000; i++) {
        var x = this.privateValues.spiGraph[i].x;
        var y = this.privateValues.spiGraph[i].y;
        var xx = this.privateValues.parGraph.g[i].x;
        var yy = this.privateValues.parGraph.g[i].y;
        var lerpX = lerp(x, xx, lerpTiming);
        var lerpY = lerp(y, yy, lerpTiming);
        var v = createVector(lerpX, lerpY);
        this.privateValues.posGraph.push(v);
    }
};

octoSpiral.runSizes = function(t) {
    this.localValues.sizes = [];
    for (var i = 0; i < 1000; i++) {
        var s = 40;
        this.localValues.sizes.push(s);
    }
};

//--------------------------------------------------------------------------------------------//

var triangularSpiral = new Scene();
triangularSpiral.runBackground = function(t) {
    var step = map(abs(sin(t / 100)), 0, 1, 0.15, 0.2);
    this.localValues.gradient = [{
        offset: 0,
        r: 155,
        g: 150,
        b: 55
    }, {
        offset: step,
        r: 155,
        g: 0,
        b: 0
    }, {
        offset: 0.8,
        r: 0,
        g: 0,
        b: 0
    }];
};



// gradient.addColorStop(0, "rgba(0,255," + col + ",255)");
// gradient.addColorStop(step, "rgba(" + col + ",255,0,255)");
// gradient.addColorStop(0.7, "rgba(255,0," + col2 + ",255)");


triangularSpiral.privateValues.paletteIndex = 50;
// octoSpiral.runLayout = firstSpiral.runLayout;

triangularSpiral.runLayout = function(t) {
    this.localValues.zoom = 2;
    this.localValues.rotation = 0.01;
};

triangularSpiral.runPositions = function(t) {
    if (!this.privateValues.scalar) {
        this.privateValues.scalar = 55;
    }

    this.accMult = sliders.accMult.value;
    this.velMult = sliders.velMult.value;
    this.sc = sliders.sc.value;
    this.scPow = sliders.scPow.value;
    this.privateValues.shape = shape;

    this.superformula = {
        n1: map(abs(sin(t / (sliders.sc.value * pow(10, sliders.scPow.value)))), 0, 1, 0.15, 2),
        n2: sliders.n2.value,
        n3: 1,
        a: 1,
        b: 1,
        m: sliders.m.value
    };

    if (!this.privateValues.spiral) {
        this.privateValues.spiral = {
            startingAngle: 0.5,
            angle: 2,
            speed: 0.05 / 360 * Math.PI * 2 /  20
        };
    }
    var spiralVal = this.privateValues.spiral;
    this.privateValues.spiral.angle = spiralVal.startingAngle + t * spiralVal.speed * -1;

    this.privateValues.posGraph = triSpiral(this, t);
};

triangularSpiral.runSizes = function(t) {
    this.localValues.sizes = [];
    for (var i = 0; i < 1000; i++) {
        var s = 5 + i / 20;
        this.localValues.sizes.push(s);
    }
};
//--------------------------------------------------------------------------------------------//



var triangularSpiral2 = new Scene();

triangularSpiral2.privateValues.scalar = 25;

triangularSpiral2.runBackground = function(t) {
    var col = floor(map(abs(sin(t / 20)), 0, 1, 0, 255));
    var col2 = floor(map(abs(sin(t / 40)), 0, 1, 0, 255));
    var step = map(abs(sin(t / 20)), 0, 1, 0.1, 0.3);
    this.localValues.gradient = [{
        offset: 0,
        r: 0,
        g: 255,
        b: col
    }, {
        offset: step,
        r: col,
        g: 255,
        b: 0
    }, {
        offset: 0.7,
        r: 255,
        g: 0,
        b: col2
    }];
};

triangularSpiral2.privateValues.paletteIndex = 76;
triangularSpiral2.runLayout = triangularSpiral.runLayout;
triangularSpiral2.runPositions = triangularSpiral.runPositions;
triangularSpiral2.runSizes = function(t) {
    this.localValues.sizes = [];
    for (var i = 0; i < 1000; i++) {
        var s = 5 + i / 20;
        this.localValues.sizes.push(s);
    }
};
triangularSpiral2.runColors = function(t) {
    if (!this.privateValues.paletteIndex) {
        this.privateValues.paletteIndex = 76;
    }
    if (!this.privateValues.paletteIndex2) {
        //3056, 3012
        this.privateValues.paletteIndex2 = 3056;
        //Très beau aussi.
        //this.privateValues.paletteIndex2 = 3014;
    }

    if (allPalettes) {
        this.privateValues.palette = allPalettes[this.privateValues.paletteIndex];
        this.privateValues.palette2 = allPalettes[this.privateValues.paletteIndex2];
    } else {
        this.privateValues.palette = palette;
        this.privateValues.palette2 = palette;
    }

    this.privateValues.colorGraph = [];
    var currentColor = 0;
    for (var i = 0; i < 1000; i++) {
        var colorValues1 = hexToRgb(this.privateValues.palette[currentColor]);
        var colorValues2 = hexToRgb(this.privateValues.palette2[currentColor]);
        var lerpy = map(sin(t / 10), -1, 1, 0, 1);
        var colorValues = {
            r: lerp(colorValues1.r, colorValues2.r, lerpy),
            g: lerp(colorValues1.g, colorValues2.g, lerpy),
            b: lerp(colorValues1.b, colorValues2.b, lerpy)
        };
        currentColor++;
        if (currentColor > 4) {
            currentColor = 0;
        }
        this.privateValues.colorGraph.push(colorValues);
    }
};

//--------------------------------------------------------------------------------------------//


var starSpiral = new Scene();

starSpiral.runBackground = function(t) {
    var col = floor(map(abs(sin(t / 20)), 0, 1, 0, 255));
    var col2 = floor(map(abs(sin(t / 40)), 0, 1, 0, 255));
    var step = map(abs(sin(t / 20)), 0, 1, 0.1, 0.3);
    this.localValues.gradient = [{
        offset: 0,
        r: 0,
        g: 55,
        b: col
    }, {
        offset: step,
        r: col,
        g: 55,
        b: 0
    }, {
        offset: 0.7,
        r: 55,
        g: 0,
        b: col2
    }];
};

starSpiral.privateValues.paletteIndex = 96;
starSpiral.runLayout = function(t) {
    this.localValues.zoom = 1;
    this.localValues.rotation = 0.01;
};
starSpiral.runPositions = function(t) {
    if (!this.privateValues.scalar) {
        this.privateValues.scalar = 25;
    }

    if (!this.privateValues.spiral) {
        this.privateValues.spiral = {
            startingAngle: 0.1,
            angle: 2,
            speed: 0.05 / 360 * Math.PI * 2 /  40
        };
    }
    var spiralVal = this.privateValues.spiral;
    this.privateValues.spiral.angle = spiralVal.startingAngle + t * spiralVal.speed * -1;

    this.privateValues.posGraph = starrySpiral(this, t);
};
starSpiral.runSizes = function(t) {
    this.localValues.sizes = [];
    for (var i = 0; i < 1000; i++) {
        var s = map(i, 0, 1000, 50, 0);
        this.localValues.sizes.push(s);
    }
};


//--------------------------------------------------------------------------------------------//

var starSpiral2 = new Scene();
starSpiral2.runBackground = function(t) {
    var col = floor(map(abs(sin(t / 20)), 0, 1, 0, 255));
    var col2 = floor(map(abs(cos(t / 40)), 0, 1, 0, 255));
    var step = map(abs(sin(t / 20)), 0, 1, 0.1, 0.3);
    this.localValues.gradient = [{
        offset: 0,
        r: 255,
        g: 255,
        b: 0
    }, {
        offset: step,
        r: 255,
        g: col2,
        b: 55
    }, {
        offset: 0.7,
        r: 5,
        g: 120,
        b: col2
    }];
    // for (var i = 0; i < this.localValues.gradient.length; i++) {
    //     this.localValues.gradient[i] = adjustLevels(sliders.darkBg.value, sliders.midBg.value, sliders.lightBg.value, this.localValues.gradient[i]);
    //     this.localValues.gradient[i] = adjustHsv(sliders.hueBg.value, sliders.satBg.value, sliders.brightnessBg.value, this.localValues.gradient[i]);
    // }
};
// starSpiral2.privateValues.scalar = 10;
starSpiral2.privateValues.paletteIndex = 116;
starSpiral2.privateValues.paletteIndex2 = 3052;
starSpiral2.runLayout = function(t) {
    this.localValues.zoom = 1.25;
    this.localValues.rotation = 0.01;
};
starSpiral2.runPositions = function(t) {
    if (!this.privateValues.scalar) {
        this.privateValues.scalar = 55;
    }

    if (!this.privateValues.spiral) {
        this.privateValues.spiral = {
            startingAngle: 0.25,
            angle: 2,
            speed: 0.05 / 360 * Math.PI * 2 / 5,
            hyp: 0.02
        };
    }
    var spiralVal = this.privateValues.spiral;
    this.privateValues.spiral.angle = spiralVal.startingAngle + t * spiralVal.speed * -1;

    this.privateValues.posGraph = starrySpiral2(this, t);
};
// starSpiral2.runSizes = starSpiral.runSizes;

starSpiral2.runSizes = function(t) {
    this.localValues.sizes = [];
    for (var i = 0; i < 1000; i++) {
        var s = 10 + map(i, 0, 1000, 0, 200);
        this.localValues.sizes.push(s);
    }
};

// starSpiral2.runSizes = function(t) {
//     var pos = this.privateValues.posGraph;
//     this.localValues.sizes = [];
//     for (var i = 0; i < 1000; i++) {
//         var currentPos = dist(0, 0, pos[i].x, pos[i].y);
//         var s = 10 + map(currentPos, 0, 1000, 0, 350);
//         this.localValues.sizes.push(s);
//     }
// };
starSpiral2.runColors = function(t) {
    if (!this.privateValues.paletteIndex) {
        this.privateValues.paletteIndex = 1000;
    }
    if (!this.privateValues.paletteIndex2) {
        this.privateValues.paletteIndex2 = 3008;
        //Très beau aussi.
        //this.privateValues.paletteIndex2 = 3014;
    }

    if (allPalettes) {
        this.privateValues.palette = allPalettes[this.privateValues.paletteIndex];
        this.privateValues.palette2 = allPalettes[this.privateValues.paletteIndex2];
    } else {
        this.privateValues.palette = palette;
        this.privateValues.palette2 = palette;
    }

    this.privateValues.colorGraph = [];
    var currentColor = 0;
    for (var i = 0; i < 1000; i++) {
        var colorValues1 = hexToRgb(this.privateValues.palette[currentColor]);
        var colorValues2 = hexToRgb(this.privateValues.palette2[currentColor]);
        var lerpy = map(sin(t / 10), -1, 1, 0, 1);
        var colorValues = {
            r: lerp(colorValues1.r, colorValues2.r, lerpy),
            g: lerp(colorValues1.g, colorValues2.g, lerpy),
            b: lerp(colorValues1.b, colorValues2.b, lerpy)
        };
        // colorValues = adjustLevels(sliders.dark.value, sliders.mid.value, sliders.light.value, colorValues);
        // colorValues = adjustHsv(sliders.hue.value, sliders.sat.value, sliders.brightness.value, colorValues);

        colorValues = adjustLevels(-100, 0, 0, colorValues);

        // var mapMiddle = map(i, 0, 1000, 0, -50);
        // colorValues = adjustLevels(0, mapMiddle, 0, colorValues)

        //New, temporary way of adjusting the color levels.
        // var lev = sliders.levels.value;
        // colorValues.r = constrain(map(colorValues.r, 0, 255, lev, 255), 0, 255);
        // colorValues.g = constrain(map(colorValues.g, 0, 255, lev, 255), 0, 255);
        // colorValues.b = constrain(map(colorValues.b, 0, 255, lev, 255), 0, 255);



        currentColor++;
        if (currentColor > 4) {
            currentColor = 0;
        }
        this.privateValues.colorGraph.push(colorValues);
    }
};




//--------------------------------------------------------------------------------------------//

var superellipseSpiral = new Scene();
superellipseSpiral.runBackground = function(t) {
    var col = floor(map(abs(sin(t / 20)), 0, 1, 0, 255));
    var col2 = floor(map(abs(cos(t / 40)), 0, 1, 0, 255));
    var step = map(abs(sin(t / 20)), 0, 1, 0.1, 0.3);
    this.localValues.gradient = [{
        offset: 0,
        r: 255,
        g: 155,
        b: col
    }, {
        offset: step,
        r: col,
        g: col2,
        b: 255
    }, {
        offset: 0.7,
        r: 55,
        g: 0,
        b: col2
    }];
};
superellipseSpiral.privateValues.scalar = 12;
// superellipseSpiral.privateValues.paletteIndex = 96;
superellipseSpiral.runLayout = starSpiral.runLayout;
superellipseSpiral.runPositions = function(t) {
    if (!this.privateValues.scalar) {
        this.privateValues.scalar = 25;
    }

    if (!this.privateValues.spiral) {
        this.privateValues.spiral = {
            startingAngle: 0.135,
            angle: 2,
            speed: 0.05 / 360 * Math.PI * 2 / 2.5
        };
    }
    var spiralVal = this.privateValues.spiral;
    this.privateValues.spiral.angle = spiralVal.startingAngle + t * spiralVal.speed * -1;

    this.privateValues.posGraph = pseudoSuperellipseSpiral(this, t);
};
superellipseSpiral.runSizes = function(t) {
    var pos = this.privateValues.posGraph;
    this.localValues.sizes = [];
    for (var i = 0; i < 1000; i++) {
        var currentPos = dist(0, 0, pos[i].x, pos[i].y);
        var s = 10 + map(currentPos, 0, 1000, 0, 175);
        this.localValues.sizes.push(s);
    }
};
superellipseSpiral.runColors = function(t) {
    if (!this.privateValues.paletteIndex) {
        this.privateValues.paletteIndex = 320;
    }
    if (!this.privateValues.paletteIndex2) {
        this.privateValues.paletteIndex2 = 3340;
        //Très beau aussi.
        //this.privateValues.paletteIndex2 = 3014;
    }

    if (allPalettes) {
        this.privateValues.palette = allPalettes[this.privateValues.paletteIndex];
        this.privateValues.palette2 = allPalettes[this.privateValues.paletteIndex2];
    } else {
        this.privateValues.palette = palette;
        this.privateValues.palette2 = palette;
    }

    this.privateValues.colorGraph = [];
    var currentColor = 0;
    for (var i = 0; i < 1000; i++) {
        var colorValues1 = hexToRgb(this.privateValues.palette[currentColor]);
        var colorValues2 = hexToRgb(this.privateValues.palette2[currentColor]);
        var lerpy = map(sin(t / 10), -1, 1, 0, 1);
        var colorValues = {
            r: lerp(colorValues1.r, colorValues2.r, lerpy),
            g: lerp(colorValues1.g, colorValues2.g, lerpy),
            b: lerp(colorValues1.b, colorValues2.b, lerpy)
        };


        // colorValues = adjustLevels(sliders.dark.value, sliders.mid.value, sliders.light.value, colorValues);
        // colorValues = adjustHsv(sliders.hue.value, sliders.sat.value, sliders.brightness.value, colorValues);

        colorValues = adjustLevels(-90, 0, 0, colorValues);



        currentColor++;
        if (currentColor > 4) {
            currentColor = 0;
        }
        this.privateValues.colorGraph.push(colorValues);
    }
};

//--------------------------------------------------------------------------------------------//

superellipseSpiral2 = new Scene();

superellipseSpiral2.runBackground = function(t) {
    var col = floor(map(abs(sin(t / 20)), 0, 1, 0, 255));
    var col2 = floor(map(abs(cos(t / 40)), 0, 1, 0, 255));
    var step = map(abs(sin(t / 20)), 0, 1, 0.1, 0.3);
    this.localValues.gradient = [{
        offset: 0,
        r: 255,
        g: 255,
        b: col
    }, {
        offset: step,
        r: 255,
        g: col2,
        b: col
    }, {
        offset: 0.7,
        r: 255,
        g: col,
        b: col2
    }];
};
superellipseSpiral2.privateValues.scalar = 6;
superellipseSpiral2.privateValues.paletteIndex = 100;
superellipseSpiral2.privateValues.paletteIndex2 = 3012;
superellipseSpiral2.runLayout = function(t) {
    this.localValues.zoom = 1;
    this.localValues.rotation = 0.01;
};
superellipseSpiral2.runPositions = function(t) {
    if (!this.privateValues.scalar) {
        this.privateValues.scalar = 25;
    }

    this.speed = sliders.speed.value;
    this.accMult = sliders.accMult.value;
    this.velMult = sliders.velMult.value;
    this.sc = sliders.sc.value;
    this.scPow = sliders.scPow.value;
    this.privateValues.shape = shape;

    this.superformula = {
        n1: map(abs(sin(t / (sliders.sc.value * pow(10, sliders.scPow.value)))), 0, 1, 0.15, 2),
        n2: sliders.n2.value,
        n3: 1,
        a: 1,
        b: 1,
        m: sliders.m.value
    };

    if (!this.privateValues.spiral) {
        this.privateValues.spiral = {
            startingAngle: -0.103,
            angle: 2,
            speed: 0.05 / 360 * Math.PI * 2 /  2
        };
    }
    var spiralVal = this.privateValues.spiral;
    this.privateValues.spiral.angle = spiralVal.startingAngle + t * spiralVal.speed * -1;

    this.privateValues.spiGraph = pseudoSuperellipseSpiral2(this, t);
    this.privateValues.parGraph = this.particle.run(this, t);

    this.privateValues.posGraph = [];
    for (var i = 0; i < 1000; i++) {
        var x = this.privateValues.spiGraph[i].x;
        var y = this.privateValues.spiGraph[i].y;
        var xx = this.privateValues.parGraph.g[i].x;
        var yy = this.privateValues.parGraph.g[i].y;
        var lerpX = lerp(x, xx, 0.01);
        var lerpY = lerp(y, yy, 0.01);
        var v = createVector(lerpX, lerpY);
        this.privateValues.posGraph.push(v);
    }
};
superellipseSpiral2.runSizes = function(t) {
    var pos = this.privateValues.posGraph;
    this.localValues.sizes = [];
    for (var i = 0; i < 1000; i++) {
        // var currentPos = dist(0, 0, pos[i].x, pos[i].y);
        // var s = 10 + map(currentPos, 0, 1000, 0, 150);
        var s = 40 + i / 8;
        this.localValues.sizes.push(s);
    }
};
superellipseSpiral2.runColors = superellipseSpiral.runColors;


//--------------------------------------------------------------------------------------------//

var octoSpiral2 = new Scene();
octoSpiral2.privateValues.paletteIndex = 1150;
octoSpiral2.privateValues.paletteIndex2 = 3028;
octoSpiral2.runBackground = function(t) {
    var col = floor(map(abs(cos(t / 20)), 0, 1, 0, 255));
    var col2 = floor(map(abs(cos(t / 40)), 0, 1, 0, 255));
    var step = map(abs(sin(t / 20)), 0, 1, 0.1, 0.3);
    this.localValues.gradient = [{
        offset: 0,
        r: 255,
        g: col,
        b: 150
    }, {
        offset: step,
        r: 255,
        g: col2,
        b: 50
    }, {
        offset: 0.7,
        r: col2,
        g: 255,
        b: 150
    }];
};
// octoSpiral2.privateValues.paletteIndex = 40;
// octoSpiral.runLayout = firstSpiral.runLayout;
octoSpiral2.runColors = superellipseSpiral.runColors;

octoSpiral2.runLayout = function(t) {
    this.localValues.zoom = 1;
    this.localValues.rotation = 0.1;
};

octoSpiral2.runPositions = function(t) {
    this.privateValues.scalar = 20;

    if (!this.privateValues.spiral) {
        this.privateValues.spiral = {
            startingAngle: 0,
            angle: 0,
            speed: 0.05 / 360 * Math.PI * 2 /  2.5
        };
    }
    var spiralVal = this.privateValues.spiral;
    this.privateValues.spiral.angle = spiralVal.startingAngle + t * spiralVal.speed * -1;

    this.privateValues.posGraph = octogonalSpiral(this, t);
};

// octoSpiral2.runSizes = function(t) {
//     this.localValues.sizes = [];
//     for (var i = 0; i < 1000; i++) {
//         var s = 20;
//         this.localValues.sizes.push(s);
//     }
// };
octoSpiral2.runSizes = function(t) {
    var pos = this.privateValues.posGraph;
    this.localValues.sizes = [];
    for (var i = 0; i < 1000; i++) {
        var currentPos = dist(0, 0, pos[i].x, pos[i].y);
        var s = 10 + map(currentPos, 0, 1000, 0, 200);
        this.localValues.sizes.push(s);
    }
};

//--------------------------------------------------------------------------------------------//

var fastSpiral = new Scene();
fastSpiral.privateValues.paletteIndex = 1150;
fastSpiral.privateValues.paletteIndex2 = 3028;
fastSpiral.runBackground = function(t) {
    var col = floor(map(abs(cos(t / 5)), 0, 1, 0, 255));
    var col2 = floor(map(abs(cos(t / 10)), 0, 1, 0, 255));
    var step = map(abs(sin(t / 5)), 0, 1, 0.1, 0.3);
    this.localValues.gradient = [{
        offset: 0,
        r: 255,
        g: col,
        b: 150
    }, {
        offset: step,
        r: 255,
        g: col2,
        b: 50
    }, {
        offset: 0.7,
        r: col2,
        g: 255,
        b: 150
    }];
};
// octoSpiral2.privateValues.paletteIndex = 40;
// octoSpiral.runLayout = firstSpiral.runLayout;
fastSpiral.runColors = superellipseSpiral.runColors;

fastSpiral.runLayout = function(t) {
    this.localValues.zoom = 1;
    this.localValues.rotation = 0.1;
};

fastSpiral.runPositions = function(t) {
    var sc = map(sin(t / 7), -1, 1, 5, 175);
    this.privateValues.scalar = sc;

    if (!this.privateValues.spiral) {
        this.privateValues.spiral = {
            startingAngle: -3.6,
            angle: 0,
            speed: 0.05 / 360 * Math.PI * 5
        };
    }
    var spiralVal = this.privateValues.spiral;
    this.privateValues.spiral.angle = spiralVal.startingAngle + t / 1000 + t * spiralVal.speed * -1;
    this.privateValues.posGraph = spiral(this, t);
};

// octoSpiral2.runSizes = function(t) {
//     this.localValues.sizes = [];
//     for (var i = 0; i < 1000; i++) {
//         var s = 20;
//         this.localValues.sizes.push(s);
//     }
// };
fastSpiral.runSizes = function(t) {
    var pos = this.privateValues.posGraph;
    this.localValues.sizes = [];
    for (var i = 0; i < 1000; i++) {
        var currentPos = dist(0, 0, pos[i].x, pos[i].y);
        var s = 10 + map(currentPos, 0, 1000, 0, 400);
        this.localValues.sizes.push(s);
    }
};

//--------------------------------------------------------------------------------------------//

var fastSpiral2 = new Scene();
fastSpiral2.privateValues.paletteIndex = 0;
fastSpiral2.privateValues.paletteIndex2 = 58;
fastSpiral2.runBackground = function(t) {
    var col = floor(map(abs(cos(t / 5)), 0, 1, 0, 255));
    var col2 = floor(map(abs(cos(t / 10)), 0, 1, 0, 255));
    var step = map(abs(sin(t / 5)), 0, 1, 0.1, 0.3);
    this.localValues.gradient = [{
        offset: 0,
        r: 255,
        g: col,
        b: 150
    }, {
        offset: step,
        r: 255,
        g: col2,
        b: 50
    }, {
        offset: 0.7,
        r: col2,
        g: 255,
        b: 150
    }];
};
// octoSpiral2.privateValues.paletteIndex = 40;
// octoSpiral.runLayout = firstSpiral.runLayout;
fastSpiral2.runColors = superellipseSpiral.runColors;

fastSpiral2.runLayout = function(t) {
    this.localValues.zoom = 1;
    this.localValues.rotation = 0.1;
};

fastSpiral2.runPositions = function(t) {
    // this.privateValues.paletteIndex += 2;
    // this.privateValues.paletteIndex2 += 2;

    var paletteRunner = round(abs(sin(t)) * 4000);
    this.privateValues.paletteIndex = paletteRunner;
    this.privateValues.paletteIndex2 = paletteRunner;
    var sc = map(sin(t / 4), -1, 1, 5, 175);
    this.privateValues.scalar = sc;

    if (!this.privateValues.spiral) {
        this.privateValues.spiral = {
            startingAngle: -3.6,
            angle: 0,
            speed: 0.05 / 360 * Math.PI * 50
        };
    }
    var spiralVal = this.privateValues.spiral;
    this.privateValues.spiral.angle = spiralVal.startingAngle + t / 1000 + t * spiralVal.speed * -1;
    this.privateValues.posGraph = spiral(this, t);
};

// octoSpiral2.runSizes = function(t) {
//     this.localValues.sizes = [];
//     for (var i = 0; i < 1000; i++) {
//         var s = 20;
//         this.localValues.sizes.push(s);
//     }
// };
fastSpiral2.runSizes = function(t) {
    var pos = this.privateValues.posGraph;
    this.localValues.sizes = [];
    for (var i = 0; i < 1000; i++) {
        var currentPos = dist(0, 0, pos[i].x, pos[i].y);
        var s = 10 + map(currentPos, 0, 1000, 0, 400);
        this.localValues.sizes.push(s);
    }
};

//--------------------------------------------------------------------------------------------//
var exitSpiral = new Scene();
exitSpiral.privateValues.paletteIndex = 3500;

exitSpiral.runBackground = function(t) {
    var col = floor(map(abs(cos(t / 20)), 0, 1, 0, 255));
    var col2 = floor(map(abs(cos(t / 40)), 0, 1, 0, 255));
    var step = map(abs(sin(t / 20)), 0, 1, 0.1, 0.3);
    this.localValues.gradient = [{
        offset: 0,
        r: 255,
        g: col,
        b: 150
    }, {
        offset: step,
        r: 255,
        g: col2,
        b: 50
    }, {
        offset: 0.7,
        r: col2,
        g: 255,
        b: 150
    }];
};

exitSpiral.runLayout = function(t) {
    // var z = map(t, 0, 1000, 1, 0.8);
    // z = constrain(z, 0.1, 1);
    this.localValues.zoom = 0.5;
    this.localValues.rotation = 0.1;
};

exitSpiral.runPositions = function(t) {
    this.privateValues.scalar = 20;

    if (!this.privateValues.spiral) {
        this.privateValues.spiral = {
            startingAngle: -0.09,
            angle: 0,
            speed: 0.05 / 360 * Math.PI * 0.5,
            hyp: 8
        };
    }
    // var coFade = cosineFade(-4600, 500);
    // this.privateValues.spiral.hyp = map(coFade, 0, 1, 0.1, 8);
    // // console.log(this.privateValues.spiral.hyp);
    // this.privateValues.spiral.hyp = constrain(this.privateValues.spiral.hyp, 0.1, 8);
    var spiralVal = this.privateValues.spiral;
    this.privateValues.spiral.angle = spiralVal.startingAngle + t * spiralVal.speed * -1;

    this.privateValues.posGraph = spiral(this, t);
};

exitSpiral.runColors = function(t) {
    if (!this.privateValues.paletteIndex) {
        this.privateValues.paletteIndex = 1000;
    }
    if (!this.privateValues.paletteIndex2) {
        this.privateValues.paletteIndex2 = 3008;
        //Très beau aussi.
        //this.privateValues.paletteIndex2 = 3014;
    }

    if (allPalettes) {
        this.privateValues.palette = allPalettes[this.privateValues.paletteIndex];
        this.privateValues.palette2 = allPalettes[this.privateValues.paletteIndex2];
    } else {
        this.privateValues.palette = palette;
        this.privateValues.palette2 = palette;
    }

    this.privateValues.colorGraph = [];
    var currentColor = 0;
    for (var i = 0; i < 1000; i++) {
        var colorValues1 = hexToRgb(this.privateValues.palette[currentColor]);
        var colorValues2 = hexToRgb(this.privateValues.palette2[currentColor]);
        var lerpy = map(sin(t / 10), -1, 1, 0, 1);
        var colorValues = {
            r: lerp(colorValues1.r, colorValues2.r, lerpy),
            g: lerp(colorValues1.g, colorValues2.g, lerpy),
            b: lerp(colorValues1.b, colorValues2.b, lerpy)
        };

        // colorValues = adjustLevels(sliders.dark.value, sliders.mid.value, sliders.light.value, colorValues);
        // colorValues = adjustHsv(sliders.hue.value, sliders.sat.value, sliders.brightness.value, colorValues);

        colorValues = adjustLevels(-67, 0, 31, colorValues);


        currentColor++;
        if (currentColor > 4) {
            currentColor = 0;
        }
        this.privateValues.colorGraph.push(colorValues);
    }
};


exitSpiral.runSizes = function(t) {
    this.localValues.sizes = [];
    for (var i = 0; i < 1000; i++) {
        var s = 200;
        this.localValues.sizes.push(s);
    }
};


//--------------------------------------------------------------------------------------------//
var exitSpiral2 = new Scene();
exitSpiral2.privateValues.paletteIndex = 3522;

exitSpiral2.runBackground = function(t) {
    var col = floor(map(abs(cos(t / 20)), 0, 1, 0, 255));
    var col2 = floor(map(abs(cos(t / 40)), 0, 1, 0, 255));
    var step = map(abs(sin(t / 20)), 0, 1, 0.1, 0.3);
    var premappy = map(drawCount, 5200, 5430, 1, 0);
    premappy = constrain(premappy, 1, 0);
    var premappy2 = map(drawCount, 5200, 5330, 1, 0);
    premappy2 = constrain(premappy2, 1, 0);
    this.localValues.gradient1 = [{
        offset: 0,
        r: 255,
        g: col / 2,
        b: 150
    }, {
        offset: 0.3,
        r: 255 * premappy,
        g: col2 / 2,
        b: 50
    }, {
        offset: 0.7,
        r: col2 * premappy2,
        g: 55 * premappy2,
        b: 150 * premappy2
    }];
    var mappy = map(drawCount, 5300, 5530, 1, 0);
    mappy = constrain(mappy, 1, 0);
    var mappy2 = map(drawCount, 5300, 5550, 1, 0);
    mappy2 = constrain(mappy2, 1, 0);
    this.localValues.gradient2 = [{
        offset: 0,
        r: 255 * mappy2,
        g: 200 * mappy2,
        b: 100 * mappy2
    }, {
        offset: 0.04,
        r: 155 * mappy,
        g: 90 * mappy,
        b: 150 * mappy
    }, {
        offset: 0.06,
        r: 0,
        g: 0,
        b: 0
    }];
    var lerpy = map(drawCount, 5200, 5480, 0, 1);
    lerpy = constrain(lerpy, 0, 1);
    this.localValues.gradient = [{
        offset: lerp(this.localValues.gradient1[0].offset, this.localValues.gradient2[0].offset, lerpy),
        r: lerp(this.localValues.gradient1[0].r, this.localValues.gradient2[0].r, lerpy),
        g: lerp(this.localValues.gradient1[0].g, this.localValues.gradient2[0].g, lerpy),
        b: lerp(this.localValues.gradient1[0].b, this.localValues.gradient2[0].b, lerpy)
    }, {
        offset: lerp(this.localValues.gradient1[1].offset, this.localValues.gradient2[1].offset, lerpy),
        r: lerp(this.localValues.gradient1[1].r, this.localValues.gradient2[1].r, lerpy),
        g: lerp(this.localValues.gradient1[1].g, this.localValues.gradient2[1].g, lerpy),
        b: lerp(this.localValues.gradient1[1].b, this.localValues.gradient2[1].b, lerpy)
    }, {
        offset: lerp(this.localValues.gradient1[2].offset, this.localValues.gradient2[2].offset, lerpy),
        r: lerp(this.localValues.gradient1[2].r, this.localValues.gradient2[2].r, lerpy),
        g: lerp(this.localValues.gradient1[2].g, this.localValues.gradient2[2].g, lerpy),
        b: lerp(this.localValues.gradient1[2].b, this.localValues.gradient2[2].b, lerpy)
    }];
};

exitSpiral2.runLayout = function(t) {
    // var z = map(t, 0, 1000, 1, 0.8);
    // z = constrain(z, 0.1, 1);
    this.localValues.zoom = 0.04;
    this.localValues.rotation = 0.1;
};
exitSpiral2.runPositions = function(t) {
    // var mappyScalar = map(drawCount, 5480, 5500, 20, 1255);
    // mappyScalar = constrain(mappyScalar, 20, 1255);

    this.privateValues.scalar = 30;

    if (!this.privateValues.spiral) {
        this.privateValues.spiral = {
            startingAngle: -0.09,
            angle: 0,
            speed: 0.05 / 360 * Math.PI * 0.5,
            hyp: 0.8
        };
    }
    // var coFade = cosineFade(-4600, 500);
    // this.privateValues.spiral.hyp = map(coFade, 0, 1, 0.1, 8);
    // // console.log(this.privateValues.spiral.hyp);
    // this.privateValues.spiral.hyp = constrain(this.privateValues.spiral.hyp, 0.1, 8);
    var spiralVal = this.privateValues.spiral;
    this.privateValues.spiral.angle = spiralVal.startingAngle + t * spiralVal.speed * -1;

    this.privateValues.posGraph = spiral(this, t);
};
exitSpiral2.runColors = function(t) {
    if (!this.privateValues.paletteIndex) {
        this.privateValues.paletteIndex = 1000;
    }
    if (!this.privateValues.paletteIndex2) {
        this.privateValues.paletteIndex2 = 3044;
        //Très beau aussi.
        //this.privateValues.paletteIndex2 = 3014;
    }

    if (allPalettes) {
        this.privateValues.palette = allPalettes[this.privateValues.paletteIndex];
        this.privateValues.palette2 = allPalettes[this.privateValues.paletteIndex2];
    } else {
        this.privateValues.palette = palette;
        this.privateValues.palette2 = palette;
    }

    this.privateValues.colorGraph = [];
    var currentColor = 0;
    for (var i = 0; i < 1000; i++) {
        var colorValues1 = hexToRgb(this.privateValues.palette[currentColor]);
        var colorValues2 = hexToRgb(this.privateValues.palette2[currentColor]);
        var lerpy = map(sin(t / 10), -1, 1, 0, 1);
        var colorValues = {
            r: lerp(colorValues1.r, colorValues2.r, lerpy),
            g: lerp(colorValues1.g, colorValues2.g, lerpy),
            b: lerp(colorValues1.b, colorValues2.b, lerpy)
        };

        // colorValues = adjustLevels(sliders.dark.value, sliders.mid.value, sliders.light.value, colorValues);
        // colorValues = adjustHsv(sliders.hue.value, sliders.sat.value, sliders.brightness.value, colorValues);

        colorValues = adjustLevels(-67, 0, 31, colorValues);

        // var mappyLevels = map(drawCount, 5300, 5509, 0, 255);
        // mappyLevels = constrain(mappyLevels, 0, 255);
        // colorValues = adjustLevels(mappyLevels, mappyLevels, mappyLevels, colorValues);
        // colorValues = adjustHsv(0, 0, mappyLevels, colorValues);

        currentColor++;
        if (currentColor > 4) {
            currentColor = 0;
        }
        this.privateValues.colorGraph.push(colorValues);
    }
};

exitSpiral2.runSizes = exitSpiral.runSizes;

//-----------------------------------------Version 0.05---------------------------------------------//
var autumnSpiral = new Scene();

// spiderSpiral.runBackground = userControlledSpiral.runBackground;
autumnSpiral.runBackground = function(t) {
    var step = map(abs(sin(t / 20)), 0, 1, 0.1, 0.3);
    this.localValues.gradient = [{
        offset: 0,
        r: 255,
        g: 255,
        b: 0
    }, {
        offset: step,
        r: 255,
        g: 120,
        b: 0
    }, {
        offset: 0.8,
        r: 155,
        g: 55,
        b: 250
    }];
};
// autumnSpiral.privateValues.paletteIndex = 1244;
autumnSpiral.privateValues.paletteIndex = 1300;
autumnSpiral.runLayout = function(t) {
    this.localValues.zoom = 1;
    this.localValues.rotation = 0.01;
};

autumnSpiral.runPositions = function(t) {
    this.privateValues.scalar = 30;
    this.accMult = sliders.accMult.value;
    this.velMult = sliders.velMult.value;
    this.sc = sliders.sc.value;
    this.scPow = sliders.scPow.value;
    this.privateValues.shape = shape;

    this.superformula = {
        n1: map(abs(sin(t / (sliders.sc.value * pow(10, sliders.scPow.value)))), 0, 1, 0.15, 2),
        n2: sliders.n2.value,
        n3: 1,
        a: 1,
        b: 1,
        m: sliders.m.value
    };

    if (!this.privateValues.spiral) {
        this.privateValues.spiral = {
            startingAngle: 20,
            angle: 3,
            speed: 0.05 / 360 * Math.PI * 2 /  10,
            hyp: 0.1
        };
    }
    var spiralVal = this.privateValues.spiral;
    this.privateValues.spiral.angle = spiralVal.startingAngle + t * spiralVal.speed * -1;

    this.privateValues.posGraph = starrySpiralOctober(this, t);
};

autumnSpiral.runSizes = function(t) {
    var pos = this.privateValues.posGraph;
    this.localValues.sizes = [];
    for (var i = 0; i < 1000; i++) {
        var currentPos = dist(0, 0, pos[i].x, pos[i].y);
        var s = 10 + map(currentPos, 0, 1000, 0, 300);
        this.localValues.sizes.push(s);
    }
};


//-----------------------------------------Version 0.05---------------------------------------------//
var autumnSpiral2 = new Scene();

// spiderSpiral.runBackground = userControlledSpiral.runBackground;
autumnSpiral2.runBackground = function(t) {
    var step = map(abs(sin(t / 20)), 0, 1, 0.1, 0.3);
    this.localValues.gradient = [{
        offset: 0,
        r: 255,
        g: 255,
        b: 0
    }, {
        offset: step,
        r: 255,
        g: 120,
        b: 0
    }, {
        offset: 0.8,
        r: 155,
        g: 55,
        b: 250
    }];
};
// autumnSpiral.privateValues.paletteIndex = 1244;
// autumnSpiral2.privateValues.paletteIndex = 1304;
// autumnSpiral2.privateValues.paletteIndex = 1398;
// autumnSpiral2.privateValues.paletteIndex = 1472;


autumnSpiral2.runColors = function(t) {
    if (!this.privateValues.paletteIndex) {
        this.privateValues.paletteIndex = 1472;
        this.privateValues.palettesSubgroup = [1472, 1474, 2395, 1478, 2428, 1482, 1484];
        this.privateValues.paletteSubgroupIndex = 0;
    }

    if (t % 9 == 0) {
        // this.privateValues.paletteIndex += 2;
        // this.privateValues.paletteIndex2 += 2;
        this.privateValues.paletteSubgroupIndex++;
        if (!this.privateValues.palettesSubgroup[this.privateValues.paletteSubgroupIndex]) {
            this.privateValues.paletteSubgroupIndex = 0;
        }
    }

    this.privateValues.paletteIndex = this.privateValues.palettesSubgroup[this.privateValues.paletteSubgroupIndex];


    if (allPalettes) {
        this.privateValues.palette = allPalettes[this.privateValues.paletteIndex];
    } else {
        this.privateValues.palette = palette;
    }

    this.privateValues.colorGraph = [];
    var currentColor = 0;
    for (var i = 0; i < 1000; i++) {
        var colorValues = hexToRgb(this.privateValues.palette[currentColor]);
        // var lev = sliders.levels.value;
        // colorValues.r = constrain(map(colorValues.r, 0, 255, lev, 255), 0, 255);
        // colorValues.g = constrain(map(colorValues.g, 0, 255, lev, 255), 0, 255);
        // colorValues.b = constrain(map(colorValues.b, 0, 255, lev, 255), 0, 255);

        colorValues = adjustLevels(-90, 0, 0, colorValues)

        currentColor++;
        if (currentColor > 4) {
            currentColor = 0;
        }
        this.privateValues.colorGraph.push(colorValues);
    }
};



autumnSpiral2.runLayout = function(t) {
    this.localValues.zoom = 1;
    this.localValues.rotation = 0.01;
};

autumnSpiral2.runPositions = function(t) {
    this.privateValues.scalar = 30;
    this.accMult = sliders.accMult.value;
    this.velMult = sliders.velMult.value;
    this.sc = sliders.sc.value;
    this.scPow = sliders.scPow.value;
    this.privateValues.shape = shape;

    this.superformula = {
        n1: map(abs(sin(t / (sliders.sc.value * pow(10, sliders.scPow.value)))), 0, 1, 0.15, 2),
        n2: sliders.n2.value,
        n3: 1,
        a: 1,
        b: 1,
        m: sliders.m.value
    };

    //Taken from spiderSpiral
    // if (!this.privateValues.spiral) {
    //     this.privateValues.spiral = {
    //         startingAngle: 2,
    //         angle: 2,
    //         speed: 0.05 / 360 * Math.PI * 2 /  50,
    //         hyp: 0.1
    //     };
    // }

    if (!this.privateValues.spiral) {
        this.privateValues.spiral = {
            // startingAngle: 0.9786,
            startingAngle: 0.86246,
            angle: 0.9786,
            speed: 0.05 / 360 * Math.PI * 2,
            hyp: 0.1
        };
    }
    // console.log(this.privateValues.spiral.angle);
    var spiralVal = this.privateValues.spiral;
    this.privateValues.spiral.angle = spiralVal.startingAngle + t * spiralVal.speed * -1;

    this.privateValues.posGraph = pseudoSuperellipseSpiral3(this, t);
};

autumnSpiral2.runSizes = function(t) {
    var pos = this.privateValues.posGraph;
    this.localValues.sizes = [];
    for (var i = 0; i < 1000; i++) {
        var currentPos = dist(0, 0, pos[i].x, pos[i].y);
        var s = 10 + map(currentPos, 0, 1000, 0, 200);
        this.localValues.sizes.push(s);
    }
};

//-----------------------------------------Version 0.05---------------------------------------------//
var autumnSpiral2b = new Scene();

// spiderSpiral.runBackground = userControlledSpiral.runBackground;
autumnSpiral2b.runBackground = function(t) {
    var col = floor(map(abs(sin(t / 20)), 0, 1, 0, 255));
    var col2 = floor(map(abs(cos(t / 40)), 0, 1, 0, 255));
    // var step = map(abs(sin(t / 20)), 0, 1, 0.1, 0.3);
    var step = map(abs(sin(t / 20)), 0, 1, 0.1, 0.7);
    this.localValues.gradient = [{
        offset: 0,
        r: 255,
        g: 0,
        b: col
    }, {
        offset: step,
        r: min(col2 * 2, 255),
        g: 220,
        b: 150
    }, {
        offset: 0.8,
        r: 155,
        g: 55,
        b: col
    }];
    // for (var i = 0; i < this.localValues.gradient.length; i++) {
    //     this.localValues.gradient[i] = adjustLevels(sliders.darkBg.value, sliders.midBg.value, sliders.lightBg.value, this.localValues.gradient[i]);
    //     this.localValues.gradient[i] = adjustHsv(sliders.hueBg.value, sliders.satBg.value, sliders.brightnessBg.value, this.localValues.gradient[i]);
    // }
};
// autumnSpiral.privateValues.paletteIndex = 1244;
// autumnSpiral2.privateValues.paletteIndex = 1304;
// autumnSpiral2.privateValues.paletteIndex = 1398;
// autumnSpiral2.privateValues.paletteIndex = 1472;


autumnSpiral2b.runColorsB = function(t) {
    if (!this.privateValues.paletteIndex) {
        this.privateValues.paletteIndex = 1472;
    }

    if (allPalettes) {
        this.privateValues.palette = allPalettes[this.privateValues.paletteIndex];
    } else {
        this.privateValues.palette = palette;
    }

    this.privateValues.colorGraph = [];
    var currentColor = 0;
    for (var i = 0; i < 1000; i++) {
        var colorValues = hexToRgb(this.privateValues.palette[currentColor]);
        // var lev = sliders.levels.value;
        // colorValues.r = constrain(map(colorValues.r, 0, 255, lev, 255), 0, 255);
        // colorValues.g = constrain(map(colorValues.g, 0, 255, lev, 255), 0, 255);
        // colorValues.b = constrain(map(colorValues.b, 0, 255, lev, 255), 0, 255);


        // colorValues = adjustLevels(sliders.dark.value, sliders.mid.value, sliders.light.value, colorValues);
        // colorValues = adjustHsv(sliders.hue.value, sliders.sat.value, sliders.brightness.value, colorValues);

        colorValues = adjustLevels(-70, 0, 0, colorValues);


        currentColor++;
        if (currentColor > 4) {
            currentColor = 0;
        }
        this.privateValues.colorGraph.push(colorValues);
    }
};

autumnSpiral2b.runColors = function(t) {
    if (!this.privateValues.paletteIndex) {
        this.privateValues.paletteIndex = 1772;
    }
    if (!this.privateValues.paletteIndex2) {
        this.privateValues.paletteIndex2 = 3160;
        //Très beau aussi.
        //this.privateValues.paletteIndex2 = 3014;
    }

    if (allPalettes) {
        this.privateValues.palette = allPalettes[this.privateValues.paletteIndex];
        this.privateValues.palette2 = allPalettes[this.privateValues.paletteIndex2];
    } else {
        this.privateValues.palette = palette;
        this.privateValues.palette2 = palette;
    }

    this.privateValues.colorGraph = [];
    var currentColor = 0;
    for (var i = 0; i < 1000; i++) {
        var colorValues1 = hexToRgb(this.privateValues.palette[currentColor]);
        var colorValues2 = hexToRgb(this.privateValues.palette2[currentColor]);
        var lerpy = map(sin(t / 10), -1, 1, 0, 1);
        var colorValues = {
            r: lerp(colorValues1.r, colorValues2.r, lerpy),
            g: lerp(colorValues1.g, colorValues2.g, lerpy),
            b: lerp(colorValues1.b, colorValues2.b, lerpy)
        };

        //New, temporary way of adjusting the color levels.
        // var lev = sliders.levels.value;
        // colorValues.r = constrain(map(colorValues.r, 0, 255, lev, 255), 0, 255);
        // colorValues.g = constrain(map(colorValues.g, 0, 255, lev, 255), 0, 255);
        // colorValues.b = constrain(map(colorValues.b, 0, 255, lev, 255), 0, 255);


        // colorValues = adjustLevels(sliders.dark.value, sliders.mid.value, sliders.light.value, colorValues);
        // colorValues = adjustHsv(sliders.hue.value, sliders.sat.value, sliders.brightness.value, colorValues);


        colorValues = adjustLevels(-51, 0, 33, colorValues);

        currentColor++;
        if (currentColor > 4) {
            currentColor = 0;
        }
        this.privateValues.colorGraph.push(colorValues);
    }
};


autumnSpiral2b.runLayout = function(t) {
    this.localValues.zoom = 1.2;
    this.localValues.rotation = 0.01;
};

autumnSpiral2b.runPositions = function(t) {
    this.privateValues.scalar = 30;
    this.accMult = sliders.accMult.value;
    this.velMult = sliders.velMult.value;
    this.sc = sliders.sc.value;
    this.scPow = sliders.scPow.value;
    this.privateValues.shape = shape;

    this.superformula = {
        n1: map(abs(sin(t / (sliders.sc.value * pow(10, sliders.scPow.value)))), 0, 1, 0.15, 2),
        n2: sliders.n2.value,
        n3: 1,
        a: 1,
        b: 1,
        m: sliders.m.value
    };

    //Taken from spiderSpiral
    // if (!this.privateValues.spiral) {
    //     this.privateValues.spiral = {
    //         startingAngle: 2,
    //         angle: 2,
    //         speed: 0.05 / 360 * Math.PI * 2 /  50,
    //         hyp: 0.1
    //     };
    // }

    if (!this.privateValues.spiral) {
        this.privateValues.spiral = {
            startingAngle: 1.19786,
            angle: 0.9786,
            speed: 0.05 / 360 * Math.PI * 2 / 4,
            hyp: 0.1
        };
    }
    // console.log(this.privateValues.spiral.angle);
    var spiralVal = this.privateValues.spiral;
    this.privateValues.spiral.angle = spiralVal.startingAngle + t * spiralVal.speed * -1;

    this.privateValues.posGraph = pseudoSuperellipseSpiral3(this, t);
};

autumnSpiral2b.runSizes = function(t) {
    var pos = this.privateValues.posGraph;
    this.localValues.sizes = [];
    for (var i = 0; i < 1000; i++) {
        var currentPos = dist(0, 0, pos[i].x, pos[i].y);
        var s = 10 + map(currentPos, 0, 1000, 0, 200);
        this.localValues.sizes.push(s);
    }
};

//-----------------------------------------Version 0.05---------------------------------------------//
var autumnSpiral3 = new Scene();

// spiderSpiral.runBackground = userControlledSpiral.runBackground;
autumnSpiral3.runBackground = function(t) {
    var col = floor(map(abs(sin(t / 20)), 0, 1, 0, 255));
    var col2 = floor(map(abs(sin(t / 40)), 0, 1, 0, 255));
    var step = map(abs(sin(t / 20)), 0, 1, 0.1, 0.3);
    this.localValues.gradient = [{
        offset: 0,
        r: 255,
        g: col,
        b: 155
    }, {
        offset: step,
        r: col2,
        g: 120,
        b: 205
    }, {
        offset: 0.8,
        r: 35,
        g: 35,
        b: 130
    }];
};
// autumnSpiral.privateValues.paletteIndex = 1244;
// autumnSpiral2.privateValues.paletteIndex = 1304;
// autumnSpiral2.privateValues.paletteIndex = 1398;
// autumnSpiral3.privateValues.paletteIndex = 1472;
// autumnSpiral3.privateValues.paletteIndex = 2586;


autumnSpiral3.runColorsB = function(t) {
    if (!this.privateValues.paletteIndex) {
        this.privateValues.paletteIndex = 2586;
    }

    if (allPalettes) {
        this.privateValues.palette = allPalettes[this.privateValues.paletteIndex];
    } else {
        this.privateValues.palette = palette;
    }

    this.privateValues.colorGraph = [];
    var currentColor = 0;
    for (var i = 0; i < 1000; i++) {
        var colorValues = hexToRgb(this.privateValues.palette[currentColor]);
        // var lev = sliders.levels.value;
        var lev = -50;
        colorValues.r = constrain(map(colorValues.r, 0, 255, lev, 255), 0, 255);
        colorValues.g = constrain(map(colorValues.g, 0, 255, lev, 255), 0, 255);
        colorValues.b = constrain(map(colorValues.b, 0, 255, lev, 255), 0, 255);
        currentColor++;
        if (currentColor > 4) {
            currentColor = 0;
        }
        this.privateValues.colorGraph.push(colorValues);
    }
};

autumnSpiral3.runColors = function(t) {
    if (!this.privateValues.paletteIndex) {
        this.privateValues.paletteIndex = 2586;
    }
    if (!this.privateValues.paletteIndex2) {
        // this.privateValues.paletteIndex2 = 222;
        this.privateValues.paletteIndex2 = 238;
        //Très beau aussi.
        //this.privateValues.paletteIndex2 = 3014;
    }

    if (allPalettes) {
        this.privateValues.palette = allPalettes[this.privateValues.paletteIndex];
        this.privateValues.palette2 = allPalettes[this.privateValues.paletteIndex2];
    } else {
        this.privateValues.palette = palette;
        this.privateValues.palette2 = palette;
    }

    this.privateValues.colorGraph = [];
    var currentColor = 0;
    for (var i = 0; i < 1000; i++) {
        var colorValues1 = hexToRgb(this.privateValues.palette[currentColor]);
        var colorValues2 = hexToRgb(this.privateValues.palette2[currentColor]);
        var lerpy = map(sin(t / 10), -1, 1, 0, 1);
        var colorValues = {
            r: lerp(colorValues1.r, colorValues2.r, lerpy),
            g: lerp(colorValues1.g, colorValues2.g, lerpy),
            b: lerp(colorValues1.b, colorValues2.b, lerpy)
        };

        //New, temporary way of adjusting the color levels.
        // var lev = sliders.levels.value;
        // colorValues.r = constrain(map(colorValues.r, 0, 255, lev, 255), 0, 255);
        // colorValues.g = constrain(map(colorValues.g, 0, 255, lev, 255), 0, 255);
        // colorValues.b = constrain(map(colorValues.b, 0, 255, lev, 255), 0, 255);


        // colorValues = adjustLevels(sliders.dark.value, sliders.mid.value, sliders.light.value, colorValues);
        // colorValues = adjustHsv(sliders.hue.value, sliders.sat.value, sliders.brightness.value, colorValues);


        colorValues = adjustLevels(-51, 0, 0, colorValues);

        currentColor++;
        if (currentColor > 4) {
            currentColor = 0;
        }
        this.privateValues.colorGraph.push(colorValues);
    }
};


autumnSpiral3.runLayout = function(t) {
    // this.localValues.zoom = sliders.zoom.value;
    this.localValues.zoom = 0.72;
    this.localValues.rotation = 0.01;
};

autumnSpiral3.runPositions = function(t) {
    this.privateValues.scalar = 3;
    this.accMult = sliders.accMult.value;
    this.velMult = sliders.velMult.value;
    this.sc = sliders.sc.value;
    this.scPow = sliders.scPow.value;
    this.privateValues.shape = shape;

    this.superformula = {
        n1: map(abs(sin(t / (sliders.sc.value * pow(10, sliders.scPow.value)))), 0, 1, 0.15, 2),
        n2: sliders.n2.value,
        n3: 1,
        a: 1,
        b: 1,
        m: sliders.m.value
    };

    //Taken from spiderSpiral
    // if (!this.privateValues.spiral) {
    //     this.privateValues.spiral = {
    //         startingAngle: 2,
    //         angle: 2,
    //         speed: 0.05 / 360 * Math.PI * 2 /  50,
    //         hyp: 0.1
    //     };
    // }

    if (!this.privateValues.spiral) {
        this.privateValues.spiral = {
            startingAngle: 0.786,
            angle: 0,
            speed: 0.05 / 360 * Math.PI * 1.5,
            hyp: 0.01
        };
    }
    // console.log(this.privateValues.spiral.angle);
    var spiralVal = this.privateValues.spiral;
    this.privateValues.spiral.angle = spiralVal.startingAngle + t * spiralVal.speed * -1;

    this.privateValues.posGraph = starrySpiralOctober2(this, t);
};

autumnSpiral3.runSizes = function(t) {
    var pos = this.privateValues.posGraph;
    this.localValues.sizes = [];
    for (var i = 0; i < 1000; i++) {
        var currentPos = dist(0, 0, pos[i].x, pos[i].y);
        var s = 20 + map(currentPos, 0, 1000, 0, 200);
        this.localValues.sizes.push(s);
    }
};


//-----------------------------------------Version 0.05---------------------------------------------//
var autumnSpiral4 = new Scene();

// spiderSpiral.runBackground = userControlledSpiral.runBackground;
autumnSpiral4.runBackground = function(t) {
    var step = map(abs(sin(t / 20)), 0, 1, 0.1, 0.3);
    this.localValues.gradient = [{
        offset: 0,
        r: 255,
        g: 255,
        b: 155
    }, {
        offset: step,
        r: 155,
        g: 120,
        b: 205
    }, {
        offset: 0.8,
        r: 35,
        g: 35,
        b: 130
    }];
};
// autumnSpiral.privateValues.paletteIndex = 1244;
// autumnSpiral2.privateValues.paletteIndex = 1304;
// autumnSpiral2.privateValues.paletteIndex = 1398;
// autumnSpiral3.privateValues.paletteIndex = 1472;
// autumnSpiral3.privateValues.paletteIndex = 2586;

autumnSpiral4.runColors = function(t) {
    if (!this.privateValues.paletteIndex) {
        this.privateValues.paletteIndex = 2646;
    }

    if (allPalettes) {
        this.privateValues.palette = allPalettes[this.privateValues.paletteIndex];
    } else {
        this.privateValues.palette = palette;
    }

    this.privateValues.colorGraph = [];
    var currentColor = 0;
    for (var i = 0; i < 1000; i++) {
        var colorValues = hexToRgb(this.privateValues.palette[currentColor]);
        // var lev = sliders.levels.value;
        // colorValues.r = constrain(map(colorValues.r, 0, 255, lev, 255), 0, 255);
        // colorValues.g = constrain(map(colorValues.g, 0, 255, lev, 255), 0, 255);
        // colorValues.b = constrain(map(colorValues.b, 0, 255, lev, 255), 0, 255);
        currentColor++;
        if (currentColor > 4) {
            currentColor = 0;
        }
        this.privateValues.colorGraph.push(colorValues);
    }
};


autumnSpiral4.runLayout = function(t) {
    // this.localValues.zoom = sliders.zoom.value;
    this.localValues.zoom = 1;
    this.localValues.rotation = 0.01;
};

autumnSpiral4.runPositions = function(t) {
    this.privateValues.scalar = 30;
    this.accMult = sliders.accMult.value;
    this.velMult = sliders.velMult.value;
    this.sc = sliders.sc.value;
    this.scPow = sliders.scPow.value;
    this.privateValues.shape = shape;

    this.superformula = {
        n1: map(abs(sin(t / (sliders.sc.value * pow(10, sliders.scPow.value)))), 0, 1, 0.15, 2),
        n2: sliders.n2.value,
        n3: 1,
        a: 1,
        b: 1,
        m: sliders.m.value
    };

    //Taken from spiderSpiral
    // if (!this.privateValues.spiral) {
    //     this.privateValues.spiral = {
    //         startingAngle: 2,
    //         angle: 2,
    //         speed: 0.05 / 360 * Math.PI * 2 /  50,
    //         hyp: 0.1
    //     };
    // }

    if (!this.privateValues.spiral) {
        this.privateValues.spiral = {
            startingAngle: 0.786,
            angle: 0,
            speed: 0.05 / 360 * Math.PI * 0.5,
            hyp: 0.1
        };
    }
    // console.log(this.privateValues.spiral.angle);
    var spiralVal = this.privateValues.spiral;
    this.privateValues.spiral.angle = spiralVal.startingAngle + t * spiralVal.speed * -1;

    this.privateValues.posGraph = spiderWebSpiralNight(this, t);
};

autumnSpiral4.runSizes = function(t) {
    var pos = this.privateValues.posGraph;
    this.localValues.sizes = [];
    for (var i = 0; i < 1000; i++) {
        var currentPos = dist(0, 0, pos[i].x, pos[i].y);
        var s = 20 + map(currentPos, 0, 1000, 0, 200);
        this.localValues.sizes.push(s);
    }
};


//-----------------------------------------Version 0.05---------------------------------------------//
var autumnSpiral5 = new Scene();

// spiderSpiral.runBackground = userControlledSpiral.runBackground;
autumnSpiral5.runBackground = function(t) {
    var step = map(abs(sin(t / 20)), 0, 1, 0.1, 0.3);
    this.localValues.gradient = [{
        offset: 0,
        r: 255,
        g: 255,
        b: 155
    }, {
        offset: step,
        r: 155,
        g: 120,
        b: 205
    }, {
        offset: 0.8,
        r: 35,
        g: 35,
        b: 130
    }];
};
// autumnSpiral.privateValues.paletteIndex = 1244;
// autumnSpiral2.privateValues.paletteIndex = 1304;
// autumnSpiral2.privateValues.paletteIndex = 1398;
// autumnSpiral3.privateValues.paletteIndex = 1472;
// autumnSpiral3.privateValues.paletteIndex = 2586;

autumnSpiral5.runColors = function(t) {
    if (!this.privateValues.paletteIndex) {
        this.privateValues.paletteIndex = 2714;
    }

    if (allPalettes) {
        this.privateValues.palette = allPalettes[this.privateValues.paletteIndex];
    } else {
        this.privateValues.palette = palette;
    }

    this.privateValues.colorGraph = [];
    var currentColor = 0;
    for (var i = 0; i < 1000; i++) {
        var colorValues = hexToRgb(this.privateValues.palette[currentColor]);
        // var lev = sliders.levels.value;
        // colorValues.r = constrain(map(colorValues.r, 0, 255, lev, 255), 0, 255);
        // colorValues.g = constrain(map(colorValues.g, 0, 255, lev, 255), 0, 255);
        // colorValues.b = constrain(map(colorValues.b, 0, 255, lev, 255), 0, 255);
        currentColor++;
        if (currentColor > 4) {
            currentColor = 0;
        }
        this.privateValues.colorGraph.push(colorValues);
    }
};


autumnSpiral5.runLayout = function(t) {
    // this.localValues.zoom = sliders.zoom.value;
    this.localValues.zoom = 1;
    this.localValues.rotation = 0.01;
};

autumnSpiral5.runPositions = function(t) {
    this.privateValues.scalar = 30;
    this.accMult = sliders.accMult.value;
    this.velMult = sliders.velMult.value;
    this.sc = sliders.sc.value;
    this.scPow = sliders.scPow.value;
    this.privateValues.shape = shape;

    this.superformula = {
        n1: map(abs(sin(t / (sliders.sc.value * pow(10, sliders.scPow.value)))), 0, 1, 0.15, 2),
        n2: sliders.n2.value,
        n3: 1,
        a: 1,
        b: 1,
        m: sliders.m.value
    };

    //Taken from spiderSpiral
    // if (!this.privateValues.spiral) {
    //     this.privateValues.spiral = {
    //         startingAngle: 2,
    //         angle: 2,
    //         speed: 0.05 / 360 * Math.PI * 2 /  50,
    //         hyp: 0.1
    //     };
    // }

    if (!this.privateValues.spiral) {
        this.privateValues.spiral = {
            startingAngle: 0.986,
            angle: 0,
            speed: 0.05 / 360 * Math.PI * 0.5,
            hyp: 0.1
        };
    }
    // console.log(this.privateValues.spiral.angle);
    var spiralVal = this.privateValues.spiral;
    // this.privateValues.spiral.angle = spiralVal.startingAngle + t * spiralVal.speed * -1;
    this.privateValues.spiral.angle = map(sin(t / 20), -1, 1, 0.900, 0.895);

    this.privateValues.posGraph = spiderWebSpiralNight4(this, t);

};

autumnSpiral5.runSizes = function(t) {
    var pos = this.privateValues.posGraph;
    this.localValues.sizes = [];
    for (var i = 0; i < 1000; i++) {
        var currentPos = dist(0, 0, pos[i].x, pos[i].y);
        var s = 20 + map(currentPos, 0, 1000, 0, 200);
        this.localValues.sizes.push(s);
    }
};

//-----------------------------------------Version 0.05---------------------------------------------//
var autumnSpiral6 = new Scene();

// spiderSpiral.runBackground = userControlledSpiral.runBackground;
autumnSpiral6.runBackground = function(t) {
    var step = map(abs(sin(t / 20)), 0, 1, 0.1, 0.3);
    this.localValues.gradient = [{
        offset: 0,
        r: 255,
        g: 255,
        b: 0
    }, {
        offset: 0.5,
        r: 255,
        g: 120,
        b: 100
    }, {
        offset: 0.8,
        r: 255,
        g: 35,
        b: 230
    }];
};
// autumnSpiral.privateValues.paletteIndex = 1244;
// autumnSpiral2.privateValues.paletteIndex = 1304;
// autumnSpiral2.privateValues.paletteIndex = 1398;
// autumnSpiral3.privateValues.paletteIndex = 1472;
// autumnSpiral3.privateValues.paletteIndex = 2586;

autumnSpiral6.runColors = function(t) {
    if (!this.privateValues.paletteIndex) {
        this.privateValues.paletteIndex = 2714;
        this.privateValues.palettesSubgroup = [2714, 2716, 94, 2987, 2935, 2724, 2726];
        this.privateValues.paletteSubgroupIndex = 0;
    }

    if (t % 9 == 0) {
        // this.privateValues.paletteIndex += 2;
        // this.privateValues.paletteIndex2 += 2;
        this.privateValues.paletteSubgroupIndex++;
        if (!this.privateValues.palettesSubgroup[this.privateValues.paletteSubgroupIndex]) {
            this.privateValues.paletteSubgroupIndex = 0;
        }
    }

    this.privateValues.paletteIndex = this.privateValues.palettesSubgroup[this.privateValues.paletteSubgroupIndex];

    if (allPalettes) {
        this.privateValues.palette = allPalettes[this.privateValues.paletteIndex];
    } else {
        this.privateValues.palette = palette;
    }

    this.privateValues.colorGraph = [];
    var currentColor = 0;
    for (var i = 0; i < 1000; i++) {
        var colorValues = hexToRgb(this.privateValues.palette[currentColor]);
        // var lev = sliders.levels.value;
        // colorValues.r = constrain(map(colorValues.r, 0, 255, lev, 255), 0, 255);
        // colorValues.g = constrain(map(colorValues.g, 0, 255, lev, 255), 0, 255);
        // colorValues.b = constrain(map(colorValues.b, 0, 255, lev, 255), 0, 255);

        colorValues = adjustLevels(-90, 0, 0, colorValues);
        currentColor++;
        if (currentColor > 4) {
            currentColor = 0;
        }
        this.privateValues.colorGraph.push(colorValues);
    }
};


autumnSpiral6.runLayout = function(t) {
    // this.localValues.zoom = sliders.zoom.value;
    this.localValues.zoom = 1;
    this.localValues.rotation = 0.01;
};

autumnSpiral6.runPositions = function(t) {
    this.privateValues.scalar = 30;
    this.accMult = sliders.accMult.value;
    this.velMult = sliders.velMult.value;
    this.sc = sliders.sc.value;
    this.scPow = sliders.scPow.value;
    this.privateValues.shape = shape;

    this.superformula = {
        n1: map(abs(sin(t / (sliders.sc.value * pow(10, sliders.scPow.value)))), 0, 1, 0.15, 2),
        n2: sliders.n2.value,
        n3: 1,
        a: 1,
        b: 1,
        m: sliders.m.value
    };

    //Taken from spiderSpiral
    // if (!this.privateValues.spiral) {
    //     this.privateValues.spiral = {
    //         startingAngle: 2,
    //         angle: 2,
    //         speed: 0.05 / 360 * Math.PI * 2 /  50,
    //         hyp: 0.1
    //     };
    // }

    if (!this.privateValues.spiral) {
        this.privateValues.spiral = {
            // Original startingAngle : 
            startingAngle: 0.63431,
            // New startingAngle : 
            // startingAngle: 1.0996,
            angle: 0,
            speed: 0.05 / 360 * Math.PI * 1,
            hyp: 0.1
        };
    }
    // console.log(this.privateValues.spiral.angle);
    var spiralVal = this.privateValues.spiral;
    this.privateValues.spiral.angle = spiralVal.startingAngle + t * spiralVal.speed * -1;
    // this.privateValues.spiral.angle = map(sin(t / 20), -1, 1, 0.950, 0.895);

    this.privateValues.posGraph = spiderWebSpiralNight5(this, t);

};

autumnSpiral6.runSizes = function(t) {
    var pos = this.privateValues.posGraph;
    this.localValues.sizes = [];
    for (var i = 0; i < 1000; i++) {
        var currentPos = dist(0, 0, pos[i].x, pos[i].y);
        var s = 20 + map(currentPos, 0, 1000, 0, 200);
        s = map(i, 0, 1000, 20, 200);
        this.localValues.sizes.push(s);
    }
};

//-----------------------------------------Version 0.05---------------------------------------------//
var autumnSpiral6c = new Scene();

// spiderSpiral.runBackground = userControlledSpiral.runBackground;
autumnSpiral6c.runBackground = function(t) {
    var step = map(abs(sin(t / 20)), 0, 1, 0.1, 0.3);
    this.localValues.gradient = [{
        offset: 0,
        r: 255,
        g: 255,
        b: 0
    }, {
        offset: 0.5,
        r: 255,
        g: 120,
        b: 100
    }, {
        offset: 0.8,
        r: 255,
        g: 35,
        b: 230
    }];
};
// autumnSpiral.privateValues.paletteIndex = 1244;
// autumnSpiral2.privateValues.paletteIndex = 1304;
// autumnSpiral2.privateValues.paletteIndex = 1398;
// autumnSpiral3.privateValues.paletteIndex = 1472;
// autumnSpiral3.privateValues.paletteIndex = 2586;

autumnSpiral6c.runColors = function(t) {
    if (!this.privateValues.paletteIndex) {
        this.privateValues.paletteIndex = 2714;
        this.privateValues.palettesSubgroup = [2714, 2716, 2410, 2750, 2935, 2724, 2726];
        this.privateValues.paletteSubgroupIndex = 0;
    }

    if (t % 9 == 0) {
        // this.privateValues.paletteIndex += 2;
        // this.privateValues.paletteIndex2 += 2;
        this.privateValues.paletteSubgroupIndex++;
        if (!this.privateValues.palettesSubgroup[this.privateValues.paletteSubgroupIndex]) {
            this.privateValues.paletteSubgroupIndex = 0;
        }
    }

    this.privateValues.paletteIndex = this.privateValues.palettesSubgroup[this.privateValues.paletteSubgroupIndex];


    if (allPalettes) {
        this.privateValues.palette = allPalettes[this.privateValues.paletteIndex];
    } else {
        this.privateValues.palette = palette;
    }

    this.privateValues.colorGraph = [];
    var currentColor = 0;
    for (var i = 0; i < 1000; i++) {
        var colorValues = hexToRgb(this.privateValues.palette[currentColor]);
        // var lev = sliders.levels.value;
        // colorValues.r = constrain(map(colorValues.r, 0, 255, lev, 255), 0, 255);
        // colorValues.g = constrain(map(colorValues.g, 0, 255, lev, 255), 0, 255);
        // colorValues.b = constrain(map(colorValues.b, 0, 255, lev, 255), 0, 255);

        colorValues = adjustLevels(-90, 0, 0, colorValues)

        currentColor++;
        if (currentColor > 4) {
            currentColor = 0;
        }
        this.privateValues.colorGraph.push(colorValues);
    }
};


autumnSpiral6c.runLayout = function(t) {
    // this.localValues.zoom = sliders.zoom.value;
    this.localValues.zoom = 1;
    this.localValues.rotation = 0.01;
};

autumnSpiral6c.runPositions = function(t) {
    this.privateValues.scalar = 30;
    this.accMult = sliders.accMult.value;
    this.velMult = sliders.velMult.value;
    this.sc = sliders.sc.value;
    this.scPow = sliders.scPow.value;
    this.privateValues.shape = shape;

    this.superformula = {
        n1: map(abs(sin(t / (sliders.sc.value * pow(10, sliders.scPow.value)))), 0, 1, 0.15, 2),
        n2: sliders.n2.value,
        n3: 1,
        a: 1,
        b: 1,
        m: sliders.m.value
    };

    //Taken from spiderSpiral
    // if (!this.privateValues.spiral) {
    //     this.privateValues.spiral = {
    //         startingAngle: 2,
    //         angle: 2,
    //         speed: 0.05 / 360 * Math.PI * 2 /  50,
    //         hyp: 0.1
    //     };
    // }

    if (!this.privateValues.spiral) {
        this.privateValues.spiral = {
            // Original startingAngle : 
            // startingAngle: 0.7060928,

            // New startingAngle : 
            // startingAngle: 1.0996,
            // Third startingAngle :
            startingAngle: 0.8764805,
            angle: 0,
            speed: 0.05 / 360 * Math.PI * 4,
            hyp: 0.1
        };
    }
    // console.log(this.privateValues.spiral.angle);
    var spiralVal = this.privateValues.spiral;
    this.privateValues.spiral.angle = spiralVal.startingAngle + t * spiralVal.speed * -1;
    // this.privateValues.spiral.angle = map(sin(t / 20), -1, 1, 0.950, 0.895);

    this.privateValues.posGraph = spiderWebSpiralNight5(this, t);

};

autumnSpiral6c.runSizes = function(t) {
    var pos = this.privateValues.posGraph;
    this.localValues.sizes = [];
    for (var i = 0; i < 1000; i++) {
        var currentPos = dist(0, 0, pos[i].x, pos[i].y);
        var s = 20 + map(currentPos, 0, 1000, 0, 200);
        s = map(i, 0, 1000, 20, 200);
        this.localValues.sizes.push(s);
    }
};



//-----------------------------------------Version 0.05---------------------------------------------//
var autumnSpiral6b = new Scene();

// spiderSpiral.runBackground = userControlledSpiral.runBackground;
autumnSpiral6b.runBackground = function(t) {
    var col = floor(map(abs(sin(t / 20)), 0, 1, 0, 255));
    var col2 = floor(map(abs(cos(t / 40)), 0, 1, 0, 255));
    var step = map(abs(sin(t / 20)), 0, 1, 0.1, 0.3);
    this.localValues.gradient = [{
        offset: 0,
        r: 255,
        g: 255,
        b: 0
    }, {
        offset: 0.5,
        r: 255,
        g: 120,
        b: 100
    }, {
        offset: 0.8,
        r: 255,
        g: 35,
        b: 230
    }];
};
// autumnSpiral.privateValues.paletteIndex = 1244;
// autumnSpiral2.privateValues.paletteIndex = 1304;
// autumnSpiral2.privateValues.paletteIndex = 1398;
// autumnSpiral3.privateValues.paletteIndex = 1472;
// autumnSpiral3.privateValues.paletteIndex = 2586;

autumnSpiral6b.runColors2 = function(t) {
    if (!this.privateValues.paletteIndex) {
        this.privateValues.paletteIndex = 2714;
    }

    if (allPalettes) {
        this.privateValues.palette = allPalettes[this.privateValues.paletteIndex];
    } else {
        this.privateValues.palette = palette;
    }

    this.privateValues.colorGraph = [];
    var currentColor = 0;
    for (var i = 0; i < 1000; i++) {
        var colorValues = hexToRgb(this.privateValues.palette[currentColor]);
        // var lev = sliders.levels.value;
        // colorValues.r = constrain(map(colorValues.r, 0, 255, lev, 255), 0, 255);
        // colorValues.g = constrain(map(colorValues.g, 0, 255, lev, 255), 0, 255);
        // colorValues.b = constrain(map(colorValues.b, 0, 255, lev, 255), 0, 255);
        currentColor++;
        if (currentColor > 4) {
            currentColor = 0;
        }
        this.privateValues.colorGraph.push(colorValues);
    }
};


autumnSpiral6b.runLayout = function(t) {
    // this.localValues.zoom = sliders.zoom.value;
    this.localValues.zoom = 1;
    this.localValues.rotation = 0.01;
};

autumnSpiral6b.runPositions = function(t) {
    this.privateValues.scalar = 30;
    this.accMult = sliders.accMult.value;
    this.velMult = sliders.velMult.value;
    this.sc = sliders.sc.value;
    this.scPow = sliders.scPow.value;
    this.privateValues.shape = shape;

    this.superformula = {
        n1: map(abs(sin(t / (sliders.sc.value * pow(10, sliders.scPow.value)))), 0, 1, 0.15, 2),
        n2: sliders.n2.value,
        n3: 1,
        a: 1,
        b: 1,
        m: sliders.m.value
    };

    //Taken from spiderSpiral
    // if (!this.privateValues.spiral) {
    //     this.privateValues.spiral = {
    //         startingAngle: 2,
    //         angle: 2,
    //         speed: 0.05 / 360 * Math.PI * 2 /  50,
    //         hyp: 0.1
    //     };
    // }

    if (!this.privateValues.spiral) {
        this.privateValues.spiral = {
            // Original startingAngle : 
            // startingAngle: 0.986,
            // New startingAngle : 
            // startingAngle: 1.0996,
            // Test startingAngle :
            startingAngle: 0.896,
            angle: 0,
            speed: 0.05 / 360 * Math.PI * 2,
            hyp: 0.1
        };
    }
    // console.log(this.privateValues.spiral.angle);
    var spiralVal = this.privateValues.spiral;
    this.privateValues.spiral.angle = spiralVal.startingAngle + t * spiralVal.speed * -1;
    // this.privateValues.spiral.angle = map(sin(t / 20), -1, 1, 0.950, 0.895);

    this.privateValues.posGraph = spiderWebSpiralNight5(this, t);

};

autumnSpiral6b.runSizes = function(t) {
    var pos = this.privateValues.posGraph;
    this.localValues.sizes = [];
    for (var i = 0; i < 1000; i++) {
        var currentPos = dist(0, 0, pos[i].x, pos[i].y);
        var s = 20 + map(currentPos, 0, 1000, 0, 200);
        s = max(20, map(i, 0, 1000, 20, 200));
        this.localValues.sizes.push(s);
    }
};

autumnSpiral6b.runColors = function(t) {
    if (!this.privateValues.paletteIndex) {
        this.privateValues.paletteIndex = 2714;
    }
    if (!this.privateValues.paletteIndex2) {
        this.privateValues.paletteIndex2 = 3056;
        //Très beau aussi.
        //this.privateValues.paletteIndex2 = 3014;
    }

    if (allPalettes) {
        this.privateValues.palette = allPalettes[this.privateValues.paletteIndex];
        this.privateValues.palette2 = allPalettes[this.privateValues.paletteIndex2];
    } else {
        this.privateValues.palette = palette;
        this.privateValues.palette2 = palette;
    }

    this.privateValues.colorGraph = [];
    var currentColor = 0;
    for (var i = 0; i < 1000; i++) {
        var colorValues1 = hexToRgb(this.privateValues.palette[currentColor]);
        var colorValues2 = hexToRgb(this.privateValues.palette2[currentColor]);
        var lerpy = map(sin(t / 10), -1, 1, 0, 1);
        var colorValues = {
            r: lerp(colorValues1.r, colorValues2.r, lerpy),
            g: lerp(colorValues1.g, colorValues2.g, lerpy),
            b: lerp(colorValues1.b, colorValues2.b, lerpy)
        };

        //New, temporary way of adjusting the color levels.
        // var lev = sliders.levels.value;
        // colorValues.r = constrain(map(colorValues.r, 0, 255, lev, 255), 0, 255);
        // colorValues.g = constrain(map(colorValues.g, 0, 255, lev, 255), 0, 255);
        // colorValues.b = constrain(map(colorValues.b, 0, 255, lev, 255), 0, 255);


        // colorValues = adjustLevels(sliders.dark.value, sliders.mid.value, sliders.light.value, colorValues);
        // colorValues = adjustHsv(sliders.hue.value, sliders.sat.value, sliders.brightness.value, colorValues);

        currentColor++;
        if (currentColor > 4) {
            currentColor = 0;
        }
        this.privateValues.colorGraph.push(colorValues);
    }
};

//-----------------------------------------Version 0.05---------------------------------------------//
var autumnSpiral7 = new Scene();

// spiderSpiral.runBackground = userControlledSpiral.runBackground;
autumnSpiral7.runBackground = function(t) {
    var step = map(abs(sin(t / 20)), 0, 1, 0.1, 0.3);
    this.localValues.gradient = [{
        offset: 0,
        r: 255,
        g: 255,
        b: 0
    }, {
        offset: 0.5,
        r: 255,
        g: 120,
        b: 100
    }, {
        offset: 0.8,
        r: 255,
        g: 35,
        b: 230
    }];
};
// autumnSpiral.privateValues.paletteIndex = 1244;
// autumnSpiral2.privateValues.paletteIndex = 1304;
// autumnSpiral2.privateValues.paletteIndex = 1398;
// autumnSpiral3.privateValues.paletteIndex = 1472;
// autumnSpiral3.privateValues.paletteIndex = 2586;

autumnSpiral7.runColors = function(t) {
    if (!this.privateValues.paletteIndex) {
        this.privateValues.paletteIndex = 814;
    }

    if (allPalettes) {
        this.privateValues.palette = allPalettes[this.privateValues.paletteIndex];
    } else {
        this.privateValues.palette = palette;
    }

    this.privateValues.colorGraph = [];
    var currentColor = 0;
    for (var i = 0; i < 1000; i++) {
        var colorValues = hexToRgb(this.privateValues.palette[currentColor]);
        // var lev = sliders.levels.value;
        // colorValues.r = constrain(map(colorValues.r, 0, 255, lev, 255), 0, 255);
        // colorValues.g = constrain(map(colorValues.g, 0, 255, lev, 255), 0, 255);
        // colorValues.b = constrain(map(colorValues.b, 0, 255, lev, 255), 0, 255);
        currentColor++;
        if (currentColor > 4) {
            currentColor = 0;
        }
        this.privateValues.colorGraph.push(colorValues);
    }
};


autumnSpiral7.runLayout = function(t) {
    this.localValues.zoom = 1.25;
    this.localValues.rotation = 0.05;
};

autumnSpiral7.runPositions = function(t) {
    this.privateValues.scalar = 30;
    this.accMult = sliders.accMult.value;
    this.velMult = sliders.velMult.value;
    this.sc = sliders.sc.value;
    this.scPow = sliders.scPow.value;
    this.privateValues.shape = shape;

    this.superformula = {
        n1: map(abs(sin(t / (sliders.sc.value * pow(10, sliders.scPow.value)))), 0, 1, 0.15, 2),
        n2: sliders.n2.value,
        n3: 1,
        a: 1,
        b: 1,
        m: sliders.m.value
    };

    //Taken from spiderSpiral
    // if (!this.privateValues.spiral) {
    //     this.privateValues.spiral = {
    //         startingAngle: 2,
    //         angle: 2,
    //         speed: 0.05 / 360 * Math.PI * 2 /  50,
    //         hyp: 0.1
    //     };
    // }

    if (!this.privateValues.spiral) {
        this.privateValues.spiral = {
            startingAngle: 0.986,
            angle: 0,
            speed: 0.05 / 360 * Math.PI * 0.5,
            hyp: 0.1
        };
    }
    // console.log(this.privateValues.spiral.angle);
    var spiralVal = this.privateValues.spiral;
    this.privateValues.spiral.angle = spiralVal.startingAngle + t * spiralVal.speed * -1;
    // this.privateValues.spiral.angle = map(sin(t / 20), -1, 1, 0.950, 0.895);

    this.privateValues.posGraph = spiderWebSpiralNight6(this, t);

};

autumnSpiral7.runSizes = function(t) {
    var pos = this.privateValues.posGraph;
    this.localValues.sizes = [];
    for (var i = 0; i < 1000; i++) {
        var currentPos = dist(0, 0, pos[i].x, pos[i].y);
        var s = 20 + map(currentPos, 0, 1000, 0, 200);
        s = map(i, 0, 1000, 20, 50);
        // s = 20;
        this.localValues.sizes.push(s);
    }
};


//-----------------------------------------Version 0.05---------------------------------------------//
var autumnSpiral8 = new Scene();

// spiderSpiral.runBackground = userControlledSpiral.runBackground;
autumnSpiral8.runBackground = function(t) {
    var step = map(abs(sin(t / 20)), 0, 1, 0.1, 0.3);
    this.localValues.gradient = [{
        offset: 0,
        r: 255,
        g: 255,
        b: 0
    }, {
        offset: 0.5,
        r: 255,
        g: 120,
        b: 100
    }, {
        offset: 0.8,
        r: 185,
        g: 0,
        b: 180
    }];
};
// autumnSpiral.privateValues.paletteIndex = 1244;
// autumnSpiral2.privateValues.paletteIndex = 1304;
// autumnSpiral2.privateValues.paletteIndex = 1398;
// autumnSpiral3.privateValues.paletteIndex = 1472;
// autumnSpiral3.privateValues.paletteIndex = 2586;

autumnSpiral8.runColors = function(t) {
    if (!this.privateValues.paletteIndex) {
        // this.privateValues.paletteIndex = 908;
        this.privateValues.paletteIndex = 1032;
        //Also beautiful : 1102, 1150
    }

    if (allPalettes) {
        this.privateValues.palette = allPalettes[this.privateValues.paletteIndex];
    } else {
        this.privateValues.palette = palette;
    }

    this.privateValues.colorGraph = [];
    var currentColor = 0;
    for (var i = 0; i < 1000; i++) {
        var colorValues = hexToRgb(this.privateValues.palette[currentColor]);
        // var lev = sliders.levels.value;
        var lev = -90;
        colorValues.r = constrain(map(colorValues.r, 0, 255, lev, 255), 0, 255);
        colorValues.g = constrain(map(colorValues.g, 0, 255, lev, 255), 0, 255);
        colorValues.b = constrain(map(colorValues.b, 0, 255, lev, 255), 0, 255);
        currentColor++;
        if (currentColor > 4) {
            currentColor = 0;
        }
        this.privateValues.colorGraph.push(colorValues);
    }
};


autumnSpiral8.runLayout = function(t) {
    this.localValues.zoom = 1.25;
    this.localValues.rotation = 0.025;
};

autumnSpiral8.runPositions = function(t) {
    this.privateValues.scalar = 30;
    this.accMult = sliders.accMult.value;
    this.velMult = sliders.velMult.value;
    this.sc = sliders.sc.value;
    this.scPow = sliders.scPow.value;
    this.privateValues.shape = shape;

    this.superformula = {
        n1: map(abs(sin(t / (sliders.sc.value * pow(10, sliders.scPow.value)))), 0, 1, 0.15, 2),
        n2: sliders.n2.value,
        n3: 1,
        a: 1,
        b: 1,
        m: sliders.m.value
    };

    //Taken from spiderSpiral
    // if (!this.privateValues.spiral) {
    //     this.privateValues.spiral = {
    //         startingAngle: 2,
    //         angle: 2,
    //         speed: 0.05 / 360 * Math.PI * 2 /  50,
    //         hyp: 0.1
    //     };
    // }

    if (!this.privateValues.spiral) {
        this.privateValues.spiral = {
            startingAngle: 0.986,
            angle: 0,
            speed: 0.05 / 360 * Math.PI * 0.25,
            hyp: 0.1
        };
    }
    // console.log(this.privateValues.spiral.angle);
    var spiralVal = this.privateValues.spiral;
    this.privateValues.spiral.angle = spiralVal.startingAngle + t * spiralVal.speed * -1;
    // this.privateValues.spiral.angle = map(sin(t / 20), -1, 1, 0.950, 0.895);

    this.privateValues.posGraph = spiderWebSpiralNight8(this, t);

};

autumnSpiral8.runSizes = function(t) {
    var pos = this.privateValues.posGraph;
    this.localValues.sizes = [];
    for (var i = 0; i < 1000; i++) {
        var currentPos = dist(0, 0, pos[i].x, pos[i].y);
        var s = 20 + map(currentPos, 0, 1000, 0, 200);
        s = map(i, 0, 1000, 20, 60);
        // s = 20;
        this.localValues.sizes.push(s);
    }
};

//-----------------------------------------Version 0.05---------------------------------------------//
var autumnSpiral9 = new Scene();

// spiderSpiral.runBackground = userControlledSpiral.runBackground;
autumnSpiral9.runBackground = function(t) {
    var step = map(abs(sin(t / 20)), 0, 1, 0.1, 0.3);
    this.localValues.gradient = [{
        offset: 0,
        r: 205,
        g: 150,
        b: 155
    }, {
        offset: 0.2,
        r: 255,
        g: 120,
        b: 100
    }, {
        offset: 0.8,
        r: 0,
        g: 0,
        b: 280
    }];
};
// autumnSpiral.privateValues.paletteIndex = 1244;
// autumnSpiral2.privateValues.paletteIndex = 1304;
// autumnSpiral2.privateValues.paletteIndex = 1398;
// autumnSpiral3.privateValues.paletteIndex = 1472;
// autumnSpiral3.privateValues.paletteIndex = 2586;

autumnSpiral9.runColors = function(t) {
    if (!this.privateValues.paletteIndex) {
        this.privateValues.paletteIndex = 2014;
        this.privateValues.palettesSubgroup = [2014, 2358, 2018, 2020, 2395, 2088, 2026];
        this.privateValues.paletteSubgroupIndex = 0;
    }

    if (t % 9 == 0) {
        // this.privateValues.paletteIndex += 2;
        // this.privateValues.paletteIndex2 += 2;
        this.privateValues.paletteSubgroupIndex++;
        if (!this.privateValues.palettesSubgroup[this.privateValues.paletteSubgroupIndex]) {
            this.privateValues.paletteSubgroupIndex = 0;
        }
    }

    this.privateValues.paletteIndex = this.privateValues.palettesSubgroup[this.privateValues.paletteSubgroupIndex];

    if (allPalettes) {
        this.privateValues.palette = allPalettes[this.privateValues.paletteIndex];
    } else {
        this.privateValues.palette = palette;
    }

    this.privateValues.colorGraph = [];
    var currentColor = 0;
    for (var i = 0; i < 1000; i++) {
        var colorValues = hexToRgb(this.privateValues.palette[currentColor]);
        // var lev = sliders.levels.value;
        var lev = -90;
        colorValues.r = constrain(map(colorValues.r, 0, 255, lev, 255), 0, 255);
        colorValues.g = constrain(map(colorValues.g, 0, 255, lev, 255), 0, 255);
        colorValues.b = constrain(map(colorValues.b, 0, 255, lev, 255), 0, 255);

        colorValues = adjustLevels(-90, 0, 0, colorValues)
        currentColor++;
        if (currentColor > 4) {
            currentColor = 0;
        }
        this.privateValues.colorGraph.push(colorValues);
    }
};


autumnSpiral9.runLayout = function(t) {
    this.localValues.zoom = 1.25;
    this.localValues.rotation = 0.025;
};

autumnSpiral9.runPositions = function(t) {
    this.privateValues.scalar = 30;
    this.accMult = sliders.accMult.value;
    this.velMult = sliders.velMult.value;
    this.sc = sliders.sc.value;
    this.scPow = sliders.scPow.value;
    this.privateValues.shape = shape;

    this.superformula = {
        n1: map(abs(sin(t / (sliders.sc.value * pow(10, sliders.scPow.value)))), 0, 1, 0.15, 2),
        n2: sliders.n2.value,
        n3: 1,
        a: 1,
        b: 1,
        m: sliders.m.value
    };

    //Taken from spiderSpiral
    // if (!this.privateValues.spiral) {
    //     this.privateValues.spiral = {
    //         startingAngle: 2,
    //         angle: 2,
    //         speed: 0.05 / 360 * Math.PI * 2 /  50,
    //         hyp: 0.1
    //     };
    // }

    if (!this.privateValues.spiral) {
        this.privateValues.spiral = {
            // startingAngle: 0.975528,
            startingAngle: 0.945421,
            angle: 0,
            speed: 0.05 / 360 * Math.PI * 0.5,
            hyp: 0.1
        };
    }
    // console.log(this.privateValues.spiral.angle);
    var spiralVal = this.privateValues.spiral;
    this.privateValues.spiral.angle = spiralVal.startingAngle + t * spiralVal.speed * -1;
    // this.privateValues.spiral.angle = map(sin(t / 20), -1, 1, 0.950, 0.895);

    this.privateValues.posGraph = octogonalSpiralAutumn(this, t);

};

autumnSpiral9.runSizes = function(t) {
    var pos = this.privateValues.posGraph;
    this.localValues.sizes = [];
    for (var i = 0; i < 1000; i++) {
        var currentPos = dist(0, 0, pos[i].x, pos[i].y);
        var s = 20 + map(currentPos, 0, 1000, 0, 200);
        // s = map(i, 0, 1000, 20, 60);
        // s = 20;
        this.localValues.sizes.push(s);
    }
};


//-----------------------------------------Version 0.05---------------------------------------------//
var autumnSpiral10 = new Scene();

// spiderSpiral.runBackground = userControlledSpiral.runBackground;
autumnSpiral10.runBackground = function(t) {
    var step = map(abs(sin(t / 20)), 0, 1, 0.1, 0.3);
    this.localValues.gradient = [{
        offset: 0,
        r: 205,
        g: 150,
        b: 155
    }, {
        offset: 0.2,
        r: 255,
        g: 120,
        b: 100
    }, {
        offset: 0.8,
        r: 0,
        g: 0,
        b: 280
    }];
};
// autumnSpiral.privateValues.paletteIndex = 1244;
// autumnSpiral2.privateValues.paletteIndex = 1304;
// autumnSpiral2.privateValues.paletteIndex = 1398;
// autumnSpiral3.privateValues.paletteIndex = 1472;
// autumnSpiral3.privateValues.paletteIndex = 2586;

autumnSpiral10.runColors = function(t) {
    if (!this.privateValues.paletteIndex) {
        // this.privateValues.paletteIndex = 908;
        // this.privateValues.paletteIndex = 2014;
        // this.privateValues.paletteIndex = 2114;
        // this.privateValues.paletteIndex = 2128;
        this.privateValues.paletteIndex = 2224;
        //Also beautiful : 1102, 1150
    }

    if (allPalettes) {
        this.privateValues.palette = allPalettes[this.privateValues.paletteIndex];
    } else {
        this.privateValues.palette = palette;
    }

    this.privateValues.colorGraph = [];
    var currentColor = 0;
    for (var i = 0; i < 1000; i++) {
        var colorValues = hexToRgb(this.privateValues.palette[currentColor]);
        // var lev = sliders.levels.value;
        var lev = -90;
        colorValues.r = constrain(map(colorValues.r, 0, 255, lev, 255), 0, 255);
        colorValues.g = constrain(map(colorValues.g, 0, 255, lev, 255), 0, 255);
        colorValues.b = constrain(map(colorValues.b, 0, 255, lev, 255), 0, 255);
        currentColor++;
        if (currentColor > 4) {
            currentColor = 0;
        }
        this.privateValues.colorGraph.push(colorValues);
    }
};


autumnSpiral10.runLayout = function(t) {
    // this.localValues.zoom = sliders.zoom.value;
    this.localValues.zoom = 1;
    this.localValues.rotation = 0.025;
};

autumnSpiral10.runPositions = function(t) {
    this.privateValues.scalar = 30;
    this.accMult = sliders.accMult.value;
    this.velMult = sliders.velMult.value;
    this.sc = sliders.sc.value;
    this.scPow = sliders.scPow.value;
    this.privateValues.shape = shape;

    this.superformula = {
        n1: map(abs(sin(t / (sliders.sc.value * pow(10, sliders.scPow.value)))), 0, 1, 0.15, 2),
        n2: sliders.n2.value,
        n3: 1,
        a: 1,
        b: 1,
        m: sliders.m.value
    };

    //Taken from spiderSpiral
    // if (!this.privateValues.spiral) {
    //     this.privateValues.spiral = {
    //         startingAngle: 2,
    //         angle: 2,
    //         speed: 0.05 / 360 * Math.PI * 2 /  50,
    //         hyp: 0.1
    //     };
    // }

    if (!this.privateValues.spiral) {
        this.privateValues.spiral = {
            startingAngle: 0.986,
            angle: 0,
            speed: 0.05 / 360 * Math.PI * 0.25,
            hyp: 0.1
        };
    }
    // console.log(this.privateValues.spiral.angle);
    var spiralVal = this.privateValues.spiral;
    this.privateValues.spiral.angle = spiralVal.startingAngle + t * spiralVal.speed * -1;
    // this.privateValues.spiral.angle = map(sin(t / 20), -1, 1, 0.950, 0.895);

    // this.privateValues.posGraph = octogonalSpiralAutumn2(this, t);
    // this.privateValues.posGraph = octogonalSpiralAutumn3(this, t);
    this.privateValues.posGraph = octogonalSpiralAutumn4(this, t);
    // this.privateValues.posGraph = octogonalSpiralAutumn5(this, t);
    // this.privateValues.posGraph = octogonalSpiralAutumn6(this, t);
    // this.privateValues.posGraph = octogonalSpiralAutumn7(this, t);
    // this.privateValues.posGraph = octogonalSpiralAutumn8(this, t);

    //Beautiful vibration :
    // whiteAcc : 0.163, yellRot:0.07, n2:0, sc:65, scPow:7, m:0, lerp:0.02,parScal:8.772

};

autumnSpiral10.runSizes = function(t) {
    var pos = this.privateValues.posGraph;
    this.localValues.sizes = [];
    for (var i = 0; i < 1000; i++) {
        var currentPos = dist(0, 0, pos[i].x, pos[i].y);
        var s = 10 + map(currentPos, 0, 1000, 0, 150);
        // s = map(i, 0, 1000, 20, 60);
        // s = 20;
        this.localValues.sizes.push(s);
    }
};

//-----------------------------------------Version 0.05---------------------------------------------//
var autumnSpiral11 = new Scene();

// spiderSpiral.runBackground = userControlledSpiral.runBackground;
autumnSpiral11.runBackground = function(t) {
    var step = map(abs(sin(t / 20)), 0, 1, 0.1, 0.3);
    this.localValues.gradient = [{
        offset: 0,
        r: 205,
        g: 250,
        b: 155
    }, {
        offset: 0.2,
        r: 255,
        g: 120,
        b: 100
    }, {
        offset: 0.8,
        r: 0,
        g: 0,
        b: 180
    }];
};
// autumnSpiral.privateValues.paletteIndex = 1244;
// autumnSpiral2.privateValues.paletteIndex = 1304;
// autumnSpiral2.privateValues.paletteIndex = 1398;
// autumnSpiral3.privateValues.paletteIndex = 1472;
// autumnSpiral3.privateValues.paletteIndex = 2586;

autumnSpiral11.runColors = function(t) {
    if (!this.privateValues.paletteIndex) {
        // this.privateValues.paletteIndex = 908;
        // this.privateValues.paletteIndex = 2014;
        // this.privateValues.paletteIndex = 2114;
        // this.privateValues.paletteIndex = 2128;
        this.privateValues.paletteIndex = 3090;
        //Also beautiful : 1102, 1150
    }

    if (allPalettes) {
        this.privateValues.palette = allPalettes[this.privateValues.paletteIndex];
    } else {
        this.privateValues.palette = palette;
    }

    this.privateValues.colorGraph = [];
    var currentColor = 0;
    for (var i = 0; i < 1000; i++) {
        var colorValues = hexToRgb(this.privateValues.palette[currentColor]);
        // var lev = sliders.levels.value;
        var lev = -120;
        colorValues.r = constrain(map(colorValues.r, 0, 255, lev, 255), 0, 255);
        colorValues.g = constrain(map(colorValues.g, 0, 255, lev, 255), 0, 255);
        colorValues.b = constrain(map(colorValues.b, 0, 255, lev, 255), 0, 255);
        currentColor++;
        if (currentColor > 4) {
            currentColor = 0;
        }
        this.privateValues.colorGraph.push(colorValues);
    }
};


autumnSpiral11.runLayout = function(t) {
    // this.localValues.zoom = 1.25;
    // this.localValues.zoom = sliders.zoom.value;
    this.localValues.zoom = 1;
    this.localValues.rotation = 0.025;
};

autumnSpiral11.runPositions = function(t) {
    this.privateValues.scalar = 30;
    this.accMult = sliders.accMult.value;
    this.velMult = sliders.velMult.value;
    this.sc = sliders.sc.value;
    this.scPow = sliders.scPow.value;
    this.privateValues.shape = shape;

    this.superformula = {
        n1: map(abs(sin(t / (sliders.sc.value * pow(10, sliders.scPow.value)))), 0, 1, 0.15, 2),
        n2: sliders.n2.value,
        n3: 1,
        a: 1,
        b: 1,
        m: sliders.m.value
    };

    //Taken from spiderSpiral
    // if (!this.privateValues.spiral) {
    //     this.privateValues.spiral = {
    //         startingAngle: 2,
    //         angle: 2,
    //         speed: 0.05 / 360 * Math.PI * 2 /  50,
    //         hyp: 0.1
    //     };
    // }

    if (!this.privateValues.spiral) {
        this.privateValues.spiral = {
            startingAngle: 1.486,
            angle: 0,
            speed: 0.05 / 360 * Math.PI * 0.65,
            hyp: 0.1
        };
    }
    // console.log(this.privateValues.spiral.angle);
    var spiralVal = this.privateValues.spiral;
    this.privateValues.spiral.angle = spiralVal.startingAngle + t * spiralVal.speed * -1;
    // this.privateValues.spiral.angle = map(sin(t / 20), -1, 1, 0.950, 0.895);

    this.privateValues.posGraph = octogonalSpiralAutumn9(this, t);
    // this.privateValues.posGraph = octogonalSpiralAutumn10(this, t);

    //Beautiful vibration :
    // whiteAcc : 0.163, yellRot:0.07, n2:0, sc:65, scPow:7, m:0, lerp:0.02,parScal:8.772

};

autumnSpiral11.runSizes = function(t) {
    var pos = this.privateValues.posGraph;
    this.localValues.sizes = [];
    for (var i = 0; i < 1000; i++) {
        var currentPos = dist(0, 0, pos[i].x, pos[i].y);
        var s = 10 + map(currentPos, 0, 1000, 0, 150);
        // s = map(i, 0, 1000, 20, 60);
        // s = 20;
        this.localValues.sizes.push(s);
    }
};

//-----------------------------------------Version 0.05---------------------------------------------//
var autumnSpiral12 = new Scene();

// spiderSpiral.runBackground = userControlledSpiral.runBackground;
autumnSpiral12.runBackground = function(t) {
    var step = map(abs(sin(t / 20)), 0, 1, 0.1, 0.3);
    this.localValues.gradient = [{
        offset: 0,
        r: 205,
        g: 250,
        b: 155
    }, {
        offset: 0.2,
        r: 255,
        g: 120,
        b: 100
    }, {
        offset: 0.8,
        r: 0,
        g: 0,
        b: 180
    }];
};
// autumnSpiral.privateValues.paletteIndex = 1244;
// autumnSpiral2.privateValues.paletteIndex = 1304;
// autumnSpiral2.privateValues.paletteIndex = 1398;
// autumnSpiral3.privateValues.paletteIndex = 1472;
// autumnSpiral3.privateValues.paletteIndex = 2586;

autumnSpiral12.runColors = function(t) {
    if (!this.privateValues.paletteIndex) {
        // this.privateValues.paletteIndex = 908;
        // this.privateValues.paletteIndex = 2014;
        // this.privateValues.paletteIndex = 2114;
        // this.privateValues.paletteIndex = 2128;
        this.privateValues.paletteIndex = 3148;
        //Also beautiful : 1102, 1150
    }

    if (allPalettes) {
        this.privateValues.palette = allPalettes[this.privateValues.paletteIndex];
    } else {
        this.privateValues.palette = palette;
    }

    this.privateValues.colorGraph = [];
    var currentColor = 0;
    for (var i = 0; i < 1000; i++) {
        var colorValues = hexToRgb(this.privateValues.palette[currentColor]);
        // var lev = sliders.levels.value;
        var lev = -120;
        colorValues.r = constrain(map(colorValues.r, 0, 255, lev, 255), 0, 255);
        colorValues.g = constrain(map(colorValues.g, 0, 255, lev, 255), 0, 255);
        colorValues.b = constrain(map(colorValues.b, 0, 255, lev, 255), 0, 255);
        currentColor++;
        if (currentColor > 4) {
            currentColor = 0;
        }
        this.privateValues.colorGraph.push(colorValues);
    }
};


autumnSpiral12.runLayout = function(t) {
    // this.localValues.zoom = 1.25;
    // this.localValues.zoom = sliders.zoom.value;
    this.localValues.zoom = 1;
    this.localValues.rotation = 0.025;
};

autumnSpiral12.runPositions = function(t) {
    this.privateValues.scalar = 30;
    this.accMult = sliders.accMult.value;
    this.velMult = sliders.velMult.value;
    this.sc = sliders.sc.value;
    this.scPow = sliders.scPow.value;
    this.privateValues.shape = shape;

    this.superformula = {
        n1: map(abs(sin(t / (sliders.sc.value * pow(10, sliders.scPow.value)))), 0, 1, 0.15, 2),
        n2: sliders.n2.value,
        n3: 1,
        a: 1,
        b: 1,
        m: sliders.m.value
    };

    //Taken from spiderSpiral
    // if (!this.privateValues.spiral) {
    //     this.privateValues.spiral = {
    //         startingAngle: 2,
    //         angle: 2,
    //         speed: 0.05 / 360 * Math.PI * 2 /  50,
    //         hyp: 0.1
    //     };
    // }

    if (!this.privateValues.spiral) {
        this.privateValues.spiral = {
            startingAngle: 1.486,
            angle: 0,
            speed: 0.05 / 360 * Math.PI * 0.65,
            hyp: 0.1
        };
    }
    // console.log(this.privateValues.spiral.angle);
    var spiralVal = this.privateValues.spiral;
    this.privateValues.spiral.angle = spiralVal.startingAngle + t * spiralVal.speed * -1;
    // this.privateValues.spiral.angle = map(sin(t / 20), -1, 1, 0.950, 0.895);

    this.privateValues.posGraph = octogonalSpiralAutumn10(this, t);
    // this.privateValues.posGraph = octogonalSpiralAutumn11(this, t);

    //Beautiful vibration :
    // whiteAcc : 0.163, yellRot:0.07, n2:0, sc:65, scPow:7, m:0, lerp:0.02,parScal:8.772

};

autumnSpiral12.runSizes = function(t) {
    var pos = this.privateValues.posGraph;
    this.localValues.sizes = [];
    for (var i = 0; i < 1000; i++) {
        var currentPos = dist(0, 0, pos[i].x, pos[i].y);
        var s = 10 + map(currentPos, 0, 1000, 0, 150);
        // s = map(i, 0, 1000, 20, 60);
        // s = 2;
        this.localValues.sizes.push(s);
    }
};

//-----------------------------------------Version 0.05---------------------------------------------//
var autumnSpiral13 = new Scene();

// spiderSpiral.runBackground = userControlledSpiral.runBackground;
autumnSpiral13.runBackground = function(t) {
    var step = map(abs(sin(t / 20)), 0, 1, 0.1, 0.3);
    this.localValues.gradient = [{
        offset: 0,
        r: 205,
        g: 250,
        b: 155
    }, {
        offset: 0.2,
        r: 255,
        g: 120,
        b: 100
    }, {
        offset: 0.8,
        r: 0,
        g: 0,
        b: 180
    }];
    // for (var i = 0; i < this.localValues.gradient.length; i++) {
    //     this.localValues.gradient[i] = adjustLevels(sliders.darkBg.value, sliders.midBg.value, sliders.lightBg.value, this.localValues.gradient[i]);
    //     this.localValues.gradient[i] = adjustHsv(sliders.hueBg.value, sliders.satBg.value, sliders.brightnessBg.value, this.localValues.gradient[i]);
    // }
};
// autumnSpiral.privateValues.paletteIndex = 1244;
// autumnSpiral2.privateValues.paletteIndex = 1304;
// autumnSpiral2.privateValues.paletteIndex = 1398;
// autumnSpiral3.privateValues.paletteIndex = 1472;
// autumnSpiral3.privateValues.paletteIndex = 2586;

autumnSpiral13.runColors = function(t) {
    if (!this.privateValues.paletteIndex) {
        // this.privateValues.paletteIndex = 908;
        // this.privateValues.paletteIndex = 2014;
        // this.privateValues.paletteIndex = 2114;
        // this.privateValues.paletteIndex = 2128;
        // this.privateValues.paletteIndex = 3160;
        this.privateValues.paletteIndex = 3192;
        //Also beautiful : 1102, 1150
    }

    if (allPalettes) {
        this.privateValues.palette = allPalettes[this.privateValues.paletteIndex];
    } else {
        this.privateValues.palette = palette;
    }

    this.privateValues.colorGraph = [];
    var currentColor = 0;
    for (var i = 0; i < 1000; i++) {
        var colorValues = hexToRgb(this.privateValues.palette[currentColor]);
        // colorValues = adjustLevels(sliders.dark.value, sliders.mid.value, sliders.light.value, colorValues);
        // colorValues = adjustHsv(sliders.hue.value, sliders.sat.value, sliders.brightness.value, colorValues);
        currentColor++;
        if (currentColor > 4) {
            currentColor = 0;
        }
        this.privateValues.colorGraph.push(colorValues);
    }
};


autumnSpiral13.runLayout = function(t) {
    // this.localValues.zoom = 1.25;
    // this.localValues.zoom = sliders.zoom.value;
    this.localValues.zoom = 1;
    this.localValues.rotation = 0.025;
};

autumnSpiral13.runPositions = function(t) {
    this.privateValues.scalar = 30;
    this.accMult = sliders.accMult.value;
    this.velMult = sliders.velMult.value;
    this.sc = sliders.sc.value;
    this.scPow = sliders.scPow.value;
    this.privateValues.shape = shape;

    this.superformula = {
        n1: map(abs(sin(t / (sliders.sc.value * pow(10, sliders.scPow.value)))), 0, 1, 0.15, 2),
        n2: sliders.n2.value,
        n3: 1,
        a: 1,
        b: 1,
        m: sliders.m.value
    };

    //Taken from spiderSpiral
    // if (!this.privateValues.spiral) {
    //     this.privateValues.spiral = {
    //         startingAngle: 2,
    //         angle: 2,
    //         speed: 0.05 / 360 * Math.PI * 2 /  50,
    //         hyp: 0.1
    //     };
    // }

    if (!this.privateValues.spiral) {
        this.privateValues.spiral = {
            startingAngle: 1.486,
            angle: 0,
            speed: 0.05 / 360 * Math.PI * 0.65,
            hyp: 0.1
        };
    }
    // console.log(this.privateValues.spiral.angle);
    var spiralVal = this.privateValues.spiral;
    this.privateValues.spiral.angle = spiralVal.startingAngle + t * spiralVal.speed * -1;
    // this.privateValues.spiral.angle = map(sin(t / 20), -1, 1, 0.950, 0.895);

    // this.privateValues.posGraph = octogonalSpiralAutumn10(this, t);
    // this.privateValues.posGraph = octogonalSpiralAutumn11(this, t);
    // this.privateValues.posGraph = octogonalSpiralAutumn12(this, t);
    // this.privateValues.posGraph = octogonalSpiralAutumn13(this, t);
    this.privateValues.posGraph = octogonalSpiralAutumn16(this, t);
    //Beautiful vibration :
    // whiteAcc : 0.163, yellRot:0.07, n2:0, sc:65, scPow:7, m:0, lerp:0.02,parScal:8.772

};

autumnSpiral13.runSizes = function(t) {
    var pos = this.privateValues.posGraph;
    this.localValues.sizes = [];
    for (var i = 0; i < 1000; i++) {
        var currentPos = dist(0, 0, pos[i].x, pos[i].y);
        var s = 10 + map(currentPos, 0, 1000, 0, 150);
        // s = map(i, 0, 1000, 20, 200);
        // s = 20;
        this.localValues.sizes.push(s);
    }
};

//-----------------------------------------Version 0.05---------------------------------------------//
var autumnSpiral13b = new Scene();

// spiderSpiral.runBackground = userControlledSpiral.runBackground;
autumnSpiral13b.runBackground = function(t) {
    var step = map(abs(sin(t / 20)), 0, 1, 0.1, 0.3);
    this.localValues.gradient = [{
        offset: 0,
        r: 255,
        g: 255,
        b: 0
    }, {
        offset: step,
        r: 255,
        g: 120,
        b: 0
    }, {
        offset: 0.8,
        r: 155,
        g: 55,
        b: 250
    }];
    // for (var i = 0; i < this.localValues.gradient.length; i++) {
    //     this.localValues.gradient[i] = adjustLevels(sliders.darkBg.value, sliders.midBg.value, sliders.lightBg.value, this.localValues.gradient[i]);
    //     this.localValues.gradient[i] = adjustHsv(sliders.hueBg.value, sliders.satBg.value, sliders.brightnessBg.value, this.localValues.gradient[i]);
    // }
};


// spiderSpiral.privateValues.paletteIndex = 236;


autumnSpiral13b.runColors = function(t) {
    if (!this.privateValues.paletteIndex) {
        // this.privateValues.paletteIndex = 908;
        // this.privateValues.paletteIndex = 2014;
        // this.privateValues.paletteIndex = 2114;
        // this.privateValues.paletteIndex = 2128;
        // this.privateValues.paletteIndex = 3160;
        this.privateValues.paletteIndex = 236;
        //Also beautiful : 1102, 1150
    }

    if (allPalettes) {
        this.privateValues.palette = allPalettes[this.privateValues.paletteIndex];
    } else {
        this.privateValues.palette = palette;
    }

    this.privateValues.colorGraph = [];
    var currentColor = 0;
    for (var i = 0; i < 1000; i++) {
        var colorValues = hexToRgb(this.privateValues.palette[currentColor]);
        // colorValues = adjustLevels(sliders.dark.value, sliders.mid.value, sliders.light.value, colorValues);
        colorValues = adjustLevels(-30, 0, 0, colorValues);

        var mapMiddle = map(i, 0, 1000, -50, 0);
        colorValues = adjustLevels(0, mapMiddle, 0, colorValues)

        // colorValues = adjustHsv(sliders.hue.value, sliders.sat.value, sliders.brightness.value, colorValues);
        currentColor++;
        if (currentColor > 4) {
            currentColor = 0;
        }
        this.privateValues.colorGraph.push(colorValues);
    }
};


autumnSpiral13b.runLayout = function(t) {
    // this.localValues.zoom = 1.25;
    this.localValues.zoom = 1;
    // this.localValues.rotation = 0.025;
    this.localValues.rotation = 0.01;
};

autumnSpiral13b.runPositions = function(t) {
    // this.privateValues.scalar = 19.823 ||  sliders.particleScalar.value;
    // this.privateValues.scalar = sliders.particleScalar.value;

    var mapScalar = map(drawCount, 2540, 2590, 19.823, 70);
    mapScalar = constrain(mapScalar, 19.823, 70);
    this.privateValues.scalar = mapScalar;
    this.speed = 0.93 || sliders.speed.value;
    this.accMult = 1 || sliders.accMult.value;
    this.velMult = 0.999 || sliders.velMult.value;
    this.sc = 20 || sliders.sc.value;
    this.scPow = 0;
    this.privateValues.shape = shape;

    this.superformula = {
        n1: map(abs(sin(t / (this.sc * pow(10, this.scPow)))), 0, 1, 0.15, 2),
        n2: 1,
        n3: 1,
        a: 1,
        b: 1,
        m: 3 || sliders.m.value
    };

    //Taken from spiderSpiral
    // if (!this.privateValues.spiral) {
    //     this.privateValues.spiral = {
    //         startingAngle: 2,
    //         angle: 2,
    //         speed: 0.05 / 360 * Math.PI * 2 /  50,
    //         hyp: 0.1
    //     };
    // }

    if (!this.privateValues.spiral) {
        this.privateValues.spiral = {
            // Wider spiral
            // startingAngle: 0.9412020189746649,
            // Narrower spiral, taken from master branch
            startingAngle: 1.486,
            angle: 0,
            speed: 0.05 / 360 * Math.PI * 0.95 * 0.2,
            hyp: 0.1,
            scalar: 35
        };
    }
    // console.log(this.privateValues.spiral.angle);
    var spiralVal = this.privateValues.spiral;
    this.privateValues.spiral.angle = spiralVal.startingAngle + t * spiralVal.speed * -1;
    // this.privateValues.spiral.angle = map(sin(t / 20), -1, 1, 0.950, 0.895);

    // this.privateValues.posGraph = octogonalSpiralAutumn10(this, t);
    // this.privateValues.posGraph = octogonalSpiralAutumn11(this, t);
    // this.privateValues.posGraph = octogonalSpiralAutumn12(this, t);
    // this.privateValues.posGraph = octogonalSpiralAutumn13(this, t);
    // this.privateValues.posGraph = octogonalSpiralAutumn16(this, t);
    //Beautiful vibration :
    // whiteAcc : 0.163, yellRot:0.07, n2:0, sc:65, scPow:7, m:0, lerp:0.02,parScal:8.772
    this.privateValues.spiGraph = octogonalSpiralAutumn16(this, t);

    this.privateValues.parGraph = this.particle.run(this, t);
    this.localValues.yellowGraph = this.privateValues.parGraph.yellowGraph;

    this.privateValues.posGraph = [];

    var lerpTiming = map(drawCount, 2368, 2570, 0, 0.0025);
    // var lerpTiming = cosineFadeSynchronous(drawCount, 2368, 2590);
    // lerpTiming = map(lerpTiming, 1, 0, 0, 1);
    // console.log(lerpTiming);
    // lerpTiming *= 0.25;
    lerpTiming = constrain(lerpTiming, 0, 1);
    for (var i = 0; i < 1000; i++) {
        var x = this.privateValues.spiGraph[i].x;
        var y = this.privateValues.spiGraph[i].y;
        var xx = this.privateValues.parGraph.g[i].x;
        var yy = this.privateValues.parGraph.g[i].y;
        var lerpX = lerp(x, xx, lerpTiming);
        var lerpY = lerp(y, yy, lerpTiming);
        var v = createVector(lerpX, lerpY);
        this.privateValues.posGraph.push(v);
    }





};

autumnSpiral13b.runSizes = function(t) {
    var lerpTiming = map(drawCount, 2368, 2570, 0, 12);
    lerpTiming = constrain(lerpTiming, 0, 12);
    var pos = this.privateValues.posGraph;
    this.localValues.sizes = [];
    for (var i = 0; i < 1000; i++) {
        var currentPos = dist(0, 0, pos[i].x, pos[i].y);
        var s = 2 + map(currentPos, 0, 1000, 0, 250);
        s = Math.max(20, s);
        // s = map(i, 0, 1000, 20, 200);
        // s = 20;
        this.localValues.sizes.push(s);
    }
};



//-----------------------------------------Version 0.05---------------------------------------------//
var autumnSpiral14 = new Scene();

// spiderSpiral.runBackground = userControlledSpiral.runBackground;
autumnSpiral14.runBackground = function(t) {
    var step = map(abs(sin(t / 20)), 0, 1, 0.1, 0.3);
    this.localValues.gradient = [{
        offset: 0,
        r: 205,
        g: 250,
        b: 155
    }, {
        offset: 0.2,
        r: 255,
        g: 120,
        b: 100
    }, {
        offset: 0.8,
        r: 0,
        g: 0,
        b: 180
    }];
    // for (var i = 0; i < this.localValues.gradient.length; i++) {
    //     this.localValues.gradient[i] = adjustLevels(sliders.darkBg.value, sliders.midBg.value, sliders.lightBg.value, this.localValues.gradient[i]);
    //     this.localValues.gradient[i] = adjustHsv(sliders.hueBg.value, sliders.satBg.value, sliders.brightnessBg.value, this.localValues.gradient[i]);
    // }
};
// autumnSpiral.privateValues.paletteIndex = 1244;
// autumnSpiral2.privateValues.paletteIndex = 1304;
// autumnSpiral2.privateValues.paletteIndex = 1398;
// autumnSpiral3.privateValues.paletteIndex = 1472;
// autumnSpiral3.privateValues.paletteIndex = 2586;

autumnSpiral14.runColors = function(t) {
    if (!this.privateValues.paletteIndex) {
        // this.privateValues.paletteIndex = 908;
        // this.privateValues.paletteIndex = 2014;
        // this.privateValues.paletteIndex = 2114;
        // this.privateValues.paletteIndex = 2128;
        // this.privateValues.paletteIndex = 3160;
        this.privateValues.paletteIndex = 340;
        //Also beautiful : 1102, 1150
    }

    if (allPalettes) {
        this.privateValues.palette = allPalettes[this.privateValues.paletteIndex];
    } else {
        this.privateValues.palette = palette;
    }

    this.privateValues.colorGraph = [];
    var currentColor = 0;
    for (var i = 0; i < 1000; i++) {
        var colorValues = hexToRgb(this.privateValues.palette[currentColor]);
        // colorValues = adjustLevels(sliders.dark.value, sliders.mid.value, sliders.light.value, colorValues);
        // colorValues = adjustHsv(sliders.hue.value, sliders.sat.value, sliders.brightness.value, colorValues);
        currentColor++;
        if (currentColor > 4) {
            currentColor = 0;
        }
        this.privateValues.colorGraph.push(colorValues);
    }
};


autumnSpiral14.runLayout = function(t) {
    // this.localValues.zoom = 1.25;
    // this.localValues.zoom = sliders.zoom.value;
    this.localValues.zoom = 1;
    this.localValues.rotation = 0.025;
};

autumnSpiral14.runPositions = function(t) {
    this.privateValues.scalar = 30;
    this.accMult = sliders.accMult.value;
    this.velMult = sliders.velMult.value;
    this.sc = sliders.sc.value;
    this.scPow = sliders.scPow.value;
    this.privateValues.shape = shape;

    this.superformula = {
        n1: map(abs(sin(t / (sliders.sc.value * pow(10, sliders.scPow.value)))), 0, 1, 0.15, 2),
        n2: sliders.n2.value,
        n3: 1,
        a: 1,
        b: 1,
        m: sliders.m.value
    };

    //Taken from spiderSpiral
    // if (!this.privateValues.spiral) {
    //     this.privateValues.spiral = {
    //         startingAngle: 2,
    //         angle: 2,
    //         speed: 0.05 / 360 * Math.PI * 2 /  50,
    //         hyp: 0.1
    //     };
    // }

    if (!this.privateValues.spiral) {
        this.privateValues.spiral = {
            startingAngle: 1.486,
            angle: 0,
            speed: 0.05 / 360 * Math.PI * 0.65,
            hyp: 0.1
        };
    }
    // console.log(this.privateValues.spiral.angle);
    var spiralVal = this.privateValues.spiral;
    this.privateValues.spiral.angle = spiralVal.startingAngle + t * spiralVal.speed * -1;
    // this.privateValues.spiral.angle = map(sin(t / 20), -1, 1, 0.950, 0.895);


    this.privateValues.posGraph = octogonalSpiralAutumn21(this, t);
    //Beautiful vibration :
    // whiteAcc : 0.163, yellRot:0.07, n2:0, sc:65, scPow:7, m:0, lerp:0.02,parScal:8.772

};

autumnSpiral14.runSizes = function(t) {
    var pos = this.privateValues.posGraph;
    this.localValues.sizes = [];
    for (var i = 0; i < 1000; i++) {
        var currentPos = dist(0, 0, pos[i].x, pos[i].y);
        var s = 10 + map(currentPos, 0, 1000, 0, 150);
        // s = map(i, 0, 1000, 20, 200);
        // s = 20;
        this.localValues.sizes.push(s);
    }
};

//-----------------------------------------Version 0.05---------------------------------------------//
var autumnSpiral15 = new Scene();

// spiderSpiral.runBackground = userControlledSpiral.runBackground;
autumnSpiral15.runBackground = function(t) {
    var step = map(abs(sin(t / 20)), 0, 1, 0.1, 0.3);
    this.localValues.gradient = [{
        offset: 0,
        r: 205,
        g: 250,
        b: 155
    }, {
        offset: 0.2,
        r: 255,
        g: 120,
        b: 100
    }, {
        offset: 0.8,
        r: 0,
        g: 0,
        b: 180
    }];
    // for (var i = 0; i < this.localValues.gradient.length; i++) {
    //     this.localValues.gradient[i] = adjustLevels(sliders.darkBg.value, sliders.midBg.value, sliders.lightBg.value, this.localValues.gradient[i]);
    //     this.localValues.gradient[i] = adjustHsv(sliders.hueBg.value, sliders.satBg.value, sliders.brightnessBg.value, this.localValues.gradient[i]);
    // }
};
// autumnSpiral.privateValues.paletteIndex = 1244;
// autumnSpiral2.privateValues.paletteIndex = 1304;
// autumnSpiral2.privateValues.paletteIndex = 1398;
// autumnSpiral3.privateValues.paletteIndex = 1472;
// autumnSpiral3.privateValues.paletteIndex = 2586;

autumnSpiral15.runColors = function(t) {
    if (!this.privateValues.paletteIndex) {
        // this.privateValues.paletteIndex = 908;
        // this.privateValues.paletteIndex = 2014;
        // this.privateValues.paletteIndex = 2114;
        // this.privateValues.paletteIndex = 2128;
        // this.privateValues.paletteIndex = 3160;
        this.privateValues.paletteIndex = 342;
        //Also beautiful : 1102, 1150
    }

    if (allPalettes) {
        this.privateValues.palette = allPalettes[this.privateValues.paletteIndex];
    } else {
        this.privateValues.palette = palette;
    }

    this.privateValues.colorGraph = [];
    var currentColor = 0;
    for (var i = 0; i < 1000; i++) {
        var colorValues = hexToRgb(this.privateValues.palette[currentColor]);
        // colorValues = adjustLevels(sliders.dark.value, sliders.mid.value, sliders.light.value, colorValues);
        // colorValues = adjustHsv(sliders.hue.value, sliders.sat.value, sliders.brightness.value, colorValues);
        currentColor++;
        if (currentColor > 4) {
            currentColor = 0;
        }
        this.privateValues.colorGraph.push(colorValues);
    }
};


autumnSpiral15.runLayout = function(t) {
    // this.localValues.zoom = 1.25;
    // this.localValues.zoom = sliders.zoom.value;
    this.localValues.zoom = 1;
    this.localValues.rotation = 0.025;
};

autumnSpiral15.runPositions = function(t) {
    this.privateValues.scalar = 30;
    this.accMult = sliders.accMult.value;
    this.velMult = sliders.velMult.value;
    this.sc = sliders.sc.value;
    this.scPow = sliders.scPow.value;
    this.privateValues.shape = shape;

    this.superformula = {
        n1: map(abs(sin(t / (sliders.sc.value * pow(10, sliders.scPow.value)))), 0, 1, 0.15, 2),
        n2: sliders.n2.value,
        n3: 1,
        a: 1,
        b: 1,
        m: sliders.m.value
    };

    //Taken from spiderSpiral
    // if (!this.privateValues.spiral) {
    //     this.privateValues.spiral = {
    //         startingAngle: 2,
    //         angle: 2,
    //         speed: 0.05 / 360 * Math.PI * 2 /  50,
    //         hyp: 0.1
    //     };
    // }

    if (!this.privateValues.spiral) {
        this.privateValues.spiral = {
            startingAngle: 1.486,
            angle: 0,
            speed: 0.05 / 360 * Math.PI * 0.65,
            hyp: 0.1
        };
    }
    // console.log(this.privateValues.spiral.angle);
    var spiralVal = this.privateValues.spiral;
    this.privateValues.spiral.angle = spiralVal.startingAngle + t * spiralVal.speed * -1;
    // this.privateValues.spiral.angle = map(sin(t / 20), -1, 1, 0.950, 0.895);


    // this.privateValues.posGraph = mysterySpiral(this, t);
    // this.privateValues.posGraph = mysterySpiral(this, t);
    // this.privateValues.posGraph = mysterySpiral6(this, t);
    this.privateValues.posGraph = mysterySpiral7(this, t);


    //Beautiful vibration :
    // whiteAcc : 0.163, yellRot:0.07, n2:0, sc:65, scPow:7, m:0, lerp:0.02,parScal:8.772

};

autumnSpiral15.runSizes = function(t) {
    var pos = this.privateValues.posGraph;
    this.localValues.sizes = [];
    for (var i = 0; i < 1000; i++) {
        var currentPos = dist(0, 0, pos[i].x, pos[i].y);
        var s = 10 + map(currentPos, 0, 1000, 0, 150);
        // s = map(i, 0, 1000, 20, 200);
        // s = 10;
        this.localValues.sizes.push(s);
    }
};


//--------------------------------------------------------------------------------------------//

var creditsParticle = new Scene();
creditsParticle.privateValues.paletteIndex = 1;

creditsParticle.runBackground = function(t) {
    this.localValues.gradient = [{
        offset: 0,
        r: 0,
        g: 0,
        b: 0
    }, {
        offset: 0.01,
        r: 0,
        g: 0,
        b: 0
    }, {
        offset: 0.03,
        r: 0,
        g: 0,
        b: 0
    }];
};

creditsParticle.runLayout = function(t) {
    // this.localValues.zoom = sliders.zoom.value;
    // this.localValues.rotation = 0.01;
    this.localValues.zoom = 0.2;
    this.localValues.rotation = 0;
};

creditsParticle.runPositions = function(t) {
    this.privateValues.scalar = 50;
    this.speed = 0.29;
    this.accMult = 1;
    this.velMult = sliders.velMult.value;
    this.sc = 20;
    this.scPow = 0;
    this.privateValues.shape = shape;

    this.superformula = {
        n1: map(abs(sin(t / (20 * pow(10, 0)))), 0, 1, 0.15, 2),
        n2: 1,
        n3: 1,
        a: 1,
        b: 1,
        m: 5
    };
    var creditsGraph = [];
    for (var i = 0; i <  credits.length; i++) {
        var mapR = map(sin(t / 8), -1, 1, 0, 5);
        var mapNX = map(noise(i + t / 10), 0, 1, 0, 8);
        var mapNY = map(noise(i + 100 + t / 10), 0, 1, 0, 8);
        var v = createVector(credits[i][0] + mapNX, credits[i][1] + mapNY);
        v.mult(5);
        creditsGraph.push(v);
    }

    this.privateValues.graphs = this.particle.run(this, t);
    this.privateValues.posGraph = this.privateValues.graphs.g;
    this.privateValues.posGraph = creditsGraph;
    this.localValues.yellowGraph = this.privateValues.graphs.yellowGraph;
};

creditsParticle.runSizes = function(t) {
    this.localValues.sizes = [];
    for (var i = 0; i < 1000; i++) {
        var s = 85;
        // if (drawCount > 5482) {
        //     s = 0;
        // }
        this.localValues.sizes.push(s);
    }
};
