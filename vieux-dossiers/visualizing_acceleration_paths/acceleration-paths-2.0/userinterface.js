var sliders = [];

Slider = function(name, max, min, start, step) {
    this.name = name;
    this.max = max;
    this.min = min;
    this.start = start;
    this.value = start;
    this.step = step;

    this.paragraph = createP(this.name + " : " + this.start);
    this.paragraph.parent(infoDiv);

    this.slider = createSlider(max, min, start, step);
    this.slider.parent(infoDiv);
    this.slider.style('width', '300px');
    this.slider.style('margin-top', '-15px');
    this.slider.style('margin-bottom', '0px');

    var that = this;
    this.slider.input(function() {
        that.value = that.slider.value();
        that.connection = that.value;
        that.paragraph.html(that.name + " : " + that.value);
    });
    sliders.push(this);
}


Divider = function(name) {
    this.name = name;
    this.divider = createP(name);
    this.divider.parent(infoDiv);
    this.divider.style('margin-bottom', '0em');
    this.divider.style('font-size', '1.25em');
    this.divider.style('font-weight', 'bold');
    this.divider.style('line-height', '1.2em');
    this.divider.style('text-align', 'center');
}

//----------------------Information Div-----------------------------------------//
var infoDiv;
var sliderInfo1, sliderInfo2, sliderInfo3, sliderInfo4, sliderInfo5, sliderInfo6, sliderInfo8;
var info1, info2, info3, info4, info5;

var speedSlider, accMultSlider, velMultSlider;
var resetW, resetA;

var sel, selDiv, selMag;
var divier, divider2, divider3;

var speed;
var accMult;
var velMult;
var amounts;
var zoom;
var n2, m
var sc;
var s;

function toggleInfoDiv() {
    if (showPanel) {
        showPanel = false;
        infoDiv.style("display", "none");
    } else {
        showPanel = true;
        infoDiv.style("display", "block");
    }
}

function setupInfoDiv() {
    if (!showPanel) {
        infoDiv.style("display", "none");
    } else {
        infoDiv.style("display", "block");
    }
}

function createInfoDiv() {
    infoDiv = createDiv('');
    infoDiv.style('position', 'absolute');
    infoDiv.style('bottom', '0');
    infoDiv.style('padding', '20px');
    infoDiv.style('opacity', '0.55');
    infoDiv.style('background', '#222222');
    infoDiv.style('font-family', 'Inconsolata', 'Helvetica', 'Arial');
    infoDiv.style('line-height', '0.4em');
    infoDiv.style('color', '#cecece');

    resetW = createButton('Reset white dot position and velocity');
    resetW.parent(infoDiv);
    resetA = createButton('Reset all');
    resetA.parent(infoDiv);
    resetA.style('float', 'right');

    var whiteDotDivider = new Divider("White dot");

    selDiv = createDiv('');
    selDiv.parent(infoDiv);
    selDiv.style('width', '100%');
    selDiv.style('padding-top', '1em');
    selDiv.style('padding-bottom', '1.5em');
    selMag = createSelect();
    selMag.parent(selDiv);
    selMag.style('float', 'left');

    selMag.option('Acceleration not normalized');
    selMag.option('Acceleration normalized');
    selMag.changed(selMagEvent);

    accMult = new Slider("Acceleration rate", 0, 1, 1, 0.001);
    velMult = new Slider("Friction", 0.999, 1, 0.999, 0.00001);

    var yellowDotDivider = new Divider("Yellow dot");
    speed = new Slider("Rotation rate", 0, 1, 0.5, 0.01);

    selDiv = createDiv('');
    selDiv.parent(infoDiv);
    selDiv.style('width', '100%');
    selDiv.style('padding-top', '1em');
    selDiv.style('padding-bottom', '1em');

    var selInfo = createDiv('Path : ');
    selInfo.parent(selDiv);
    selInfo.style('float', 'left');
    selInfo.style('padding-right', '0.8em');
    selDiv2 = createDiv('');
    selDiv2.parent(selDiv);
    selDiv2.style('float', 'left');
    selDiv2.style('margin-top', '-0.4em');

    //-------- Curve selector------------------//
    sel = createSelect();
    sel.parent(selDiv2);
    sel.style('float', 'left');

    for (var c = 0; c < curves.length; c++) {
        sel.option(curves[c].name);
    }
    sel.changed(mySelectEvent);
    //-----------------------------------------//

    var sketchDivider = new Divider("Sketch");

    resetW.mousePressed(function() {
        w.reset();
    });

    resetA.mousePressed(function() {
        drawCount = 0;
        background(0);
        w.reset();
        for (var i = 0; i <  sliders.length; i++) {
            sliders[i].value = sliders[i].start;
            sliders[i].slider.value(sliders[i].start);
        }
        sel.value(curves[2].name);
        selMag.value('Acceleration not normalized');
        shape = curves[2];
        showYellow = true;
        norma = false;
    });

    function mySelectEvent() {
        var item = sel.value();
        for (var i = 0; i <  curves.length; i++) {
            if (item === curves[i].name) {
                shape = curves[i];
            }
        }
    }

    sel.value(curves[2].name);
    shape = curves[2];

    function selMagEvent() {
        var item = selMag.value();
        switch (item) {
            case "Not normalized":
                norma = "false";
                break;
            default:
                norma = "true";
        }
    }

    amounts = new Slider("Updates per frame", 0, 1000, 1000, 1);
    zoom = new Slider("Canvas scale", 0, 20, 1, 0.01);
    n2 = new Slider("n2", 0, 10, 1, 0.1);
    sc = new Slider("sc", 0, 100, 20, 1);
    scPow = new Slider("scPow", -10, 10, 0, 1);
    m = new Slider("m", 0, 30, 5, 1);
    s = new Slider("Dot size", 0, 40, 2.5, 0.1);
}