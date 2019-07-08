var globalValues = {};

var scenes = [];

Scene = function() {
    this.localValues = {};
    this.privateValues = {};
    this.localValues.zoom = 1;
    this.localValues.rotate = 0;
    this.particle = new Particle();
    scenes.push(this);
};

Scene.prototype.run = function(offset) {
    offset = (offset) ? offset : 0;
    this.runBackground(drawCount - offset);
    this.runLayout(drawCount - offset);
    this.runPositions(drawCount - offset);
    this.runColors(drawCount - offset);
    this.runSizes(drawCount - offset);
    this.makeGlobal();
};

Scene.prototype.mix = function(offset1, otherScene, offset2, lerpValue) {
    //Getting the values from both Scenes.
    this.runBackground(drawCount - offset1);
    this.runLayout(drawCount - offset1);
    this.runPositions(drawCount - offset1);
    this.runColors(drawCount - offset1);
    this.runSizes(drawCount - offset1);

    otherScene.runBackground(drawCount - offset2);
    otherScene.runLayout(drawCount - offset2);
    otherScene.runPositions(drawCount - offset2);
    otherScene.runColors(drawCount - offset2);
    otherScene.runSizes(drawCount - offset2);

    //Lerping the positions and color graphs. Size graph needs to also be lerped.
    var mixedPosGraph = [];
    var mixedColorGraph = [];
    for (var i = 0; i < 1000; i++) {
        var x = this.privateValues.posGraph[i].x;
        var y = this.privateValues.posGraph[i].y;
        var xx = otherScene.privateValues.posGraph[i].x;
        var yy = otherScene.privateValues.posGraph[i].y;

        var r = this.privateValues.colorGraph[i].r;
        var g = this.privateValues.colorGraph[i].g;
        var b = this.privateValues.colorGraph[i].b;

        var rr = otherScene.privateValues.colorGraph[i].r;
        var gg = otherScene.privateValues.colorGraph[i].g;
        var bb = otherScene.privateValues.colorGraph[i].b;

        var lerpX = lerp(x, xx, lerpValue);
        var lerpY = lerp(y, yy, lerpValue);
        var lerpR = lerp(r, rr, lerpValue);
        var lerpG = lerp(g, gg, lerpValue);
        var lerpB = lerp(b, bb, lerpValue);

        var vec = createVector(lerpX, lerpY);
        var colorVec = {
            r: lerpR,
            g: lerpG,
            b: lerpB
        };
        mixedPosGraph.push(vec);
        mixedColorGraph.push(colorVec);
    }
    this.privateValues.posGraph = mixedPosGraph;
    this.privateValues.colorGraph = mixedColorGraph;

    //Lerping the gradient colors.
    var gradientArray = [];
    if (this.localValues.gradient.length == otherScene.localValues.gradient.length) {
        for (var i = 0; i < this.localValues.gradient.length; i++) {
            var offset = this.localValues.gradient[i].offset;
            var offset2 = otherScene.localValues.gradient[i].offset;
            var lerpOffset = lerp(offset, offset2, lerpValue);

            var gradR = this.localValues.gradient[i].r;
            var gradR2 = otherScene.localValues.gradient[i].r;
            var lerpGradR = floor(lerp(gradR, gradR2, lerpValue));

            var gradG = this.localValues.gradient[i].g;
            var gradG2 = otherScene.localValues.gradient[i].g;
            var lerpGradG = floor(lerp(gradG, gradG2, lerpValue));

            var gradB = this.localValues.gradient[i].b;
            var gradB2 = otherScene.localValues.gradient[i].b;
            var lerpGradB = floor(lerp(gradB, gradB2, lerpValue));
            var col = {
                offset: lerpOffset,
                r: lerpGradR,
                g: lerpGradG,
                b: lerpGradB
            };
            gradientArray.push(col);
        }
        this.localValues.gradient = gradientArray;
    }

    //Lerping zoom and rotation values.
    this.localValues.zoom = lerp(this.localValues.zoom, otherScene.localValues.zoom, lerpValue);
    this.localValues.rotation = lerp(this.localValues.rotation, otherScene.localValues.rotation, lerpValue);

    var sizesArray = [];
    for (var i = 0; i <  this.localValues.sizes.length; i++) {
        var s1 = this.localValues.sizes[i];
        var s2 = otherScene.localValues.sizes[i];
        var sLerp = lerp(s1, s2, lerpValue);
        sizesArray.push(sLerp);
    }
    this.localValues.sizes = sizesArray;
    this.makeGlobal();
};

Scene.prototype.makeGlobal = function() {
    this.localValues.graph = [];
    for (var i = 0; i < this.privateValues.posGraph.length; i++) {
        var dot = {
            pos: {
                x: this.privateValues.posGraph[i].x,
                y: this.privateValues.posGraph[i].y
            },
            col: {
                r: this.privateValues.colorGraph[i].r,
                g: this.privateValues.colorGraph[i].g,
                b: this.privateValues.colorGraph[i].b
            },
            size: 10
        };
        this.localValues.graph.push(dot);
    }
    globalValues = this.localValues;
};

Scene.prototype.runLayout = function(t) {
    this.localValues.zoom = sliders.zoom.value;
    this.localValues.rotation = 0;
};

Scene.prototype.runColors = function(t) {
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
        currentColor++;
        if (currentColor > 4) {
            currentColor = 0;
        }
        this.privateValues.colorGraph.push(colorValues);
    }
};

Scene.prototype.runSizes = function(t) {
    this.localValues.sizes = [];
    for (var i = 0; i < 1000; i++) {
        var s = sliders.s.value;
        this.localValues.sizes.push(s);
    }
};
