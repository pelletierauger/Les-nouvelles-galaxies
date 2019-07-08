//----------------------Information Div-----------------------------------------//
var infoDiv;
var sliderInfo1, sliderInfo2, sliderInfo3, sliderInfo4, sliderInfo5, sliderInfo6;
var info1,info2,info3, info4, info5;
var sliders = [];
var speedSlider, accMultSlider;
var resetW, resetA;
var zoom;
var sel, selDiv, selMag;

function toggleInfoDiv() {
    if (showPanel) {
        showPanel = false;
        infoDiv.style("display","none");
    } else {
        showPanel = true;
        infoDiv.style("display","block");
    }
}

function setupInfoDiv() {
    if (!showPanel) {
        infoDiv.style("display","none");
    } else {
        infoDiv.style("display","block");
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

    selDiv = createDiv('');
    selDiv.parent(infoDiv);
    selDiv.style('width','100%');
    selDiv.style('padding-top','1em');
    selDiv.style('padding-bottom','1.5em');
    selMag = createSelect();
    selMag.parent(selDiv);
    selMag.style('float', 'left');
    selMag.style('padding','10px');
    selMag.option('White dot acceleration not normalized');
    selMag.option('White dot acceleration normalized');
    selMag.changed(selMagEvent);

    sliderInfo6 = createP('White dot velocity : 0');
    sliderInfo6.parent(infoDiv);
    sliderInfo6.style('padding-bottom','1em');

    sliderInfo7 = createP('White dot acc : 0');
    sliderInfo7.parent(infoDiv);
    sliderInfo7.style('padding-bottom','1em');

    sliderInfo2 = createP('Slider 2');
    sliderInfo2.parent(infoDiv);

    accMultSlider = createSlider(0, 1000, 1);
    accMultSlider.parent(infoDiv);

    sliderInfo1 = createP('Slider 1');
    sliderInfo1.parent(infoDiv);

    speedSlider = createSlider(0, 100, 1);
    speedSlider.parent(infoDiv);

    sliderInfo3 = createP('Slider 2');
    sliderInfo3.parent(infoDiv);

    amountsSlider = createSlider(1, 1000, 1);
    amountsSlider.parent(infoDiv);

    sliderInfo4 = createP('Zoom');
    sliderInfo4.parent(infoDiv);

    zoomSlider = createSlider(0, 20, 10);
    zoomSlider.parent(infoDiv);

    selDiv = createDiv('');
    selDiv.parent(infoDiv);
    selDiv.style('width','100%');
    selDiv.style('padding-top','1em');
    selDiv.style('padding-bottom','1em');

    var selInfo = createDiv('Yellow dot path : ');
    selInfo.parent(selDiv);
    selInfo.style('float','left');
    selInfo.style('padding-right','0.8em');
    selDiv2 = createDiv('');
    selDiv2.parent(selDiv);
    selDiv2.style('float', 'left');
    selDiv2.style('margin-top', '-0.4em');

    sel = createSelect();
    sel.parent(selDiv2);
    sel.style('float', 'left');
    sel.option('Circle');
    sel.option('Top');
    sel.option('Superellipse');
    sel.option('Lissajous Curve');
    sel.changed(mySelectEvent);

    sliderInfo5 = createP('Press "t" to toggle panel visibility, <br>"y" to toggle yellow dot visibility.');
    sliderInfo5.parent(infoDiv);
    sliderInfo5.style("line-height","1.1em");
    sliderInfo5.style("margin-bottom","0em");

    sliders.push(speedSlider);
    sliders.push(accMultSlider);
    sliders.push(amountsSlider);
    sliders.push(zoomSlider);

    for (var i = 0; i < sliders.length; i++) {
        sliders[i].style('width', '300px');
        sliders[i].style('margin-top', '-15px');
        sliders[i].style('margin-bottom', '10px');
    }

    resetW.mousePressed(function() {
        w.reset();
    });

    resetA.mousePressed(function() {
        drawCount = 0;
        background(0);
        w.reset();
        speedSlider.value(1);
        speed = 1/100;
        sliderInfo1.html("Yellow dot rotation rate : " + speed);
        accMult = 1/1000;
        accMultSlider.value(1);
        sliderInfo2.html("White dot acceleration scalar : " + accMult);
        amounts = 1;
        amountsSlider.value(1);
        sliderInfo3.html("Updates per frame : " + amounts);
        zoom = 1;
        zoomSlider.value(10);
        sliderInfo4.html("Canvas scale : " + zoom);
        sel.value("Circle");
        selMag.value('White dot acceleration not normalized');
        shape = "circle";
        showYellow = true;
        norma = false;
    });

    speedSlider.input(function(){
        setSpeedSlider();
    });

    accMultSlider.input(function(){
        setAccMultSlider();
    });

    amountsSlider.input(function(){
        setamountsSlider();
    });

    zoomSlider.input(function(){
        setZoomSlider();
    });

    setSpeedSlider();
    setAccMultSlider();
    setamountsSlider();
    setZoomSlider();

    function mySelectEvent() {
        var item = sel.value();
        switch (item) {
            case "Circle" :
                shape = "circle";
            break;
            case "Top" : 
                shape = "top";
            break;
            case "Superellipse" : 
                shape = "superellipse";
            break;
            case "Lissajous Curve" : 
                shape = "lissajous";
            break;
            default :
                shape = "circle";
        }
    }

    function selMagEvent() {
        var item = selMag.value();
        switch (item) {
            case "Not normalized" :
                norma = "false";
                // w.reset();
            break;
            default :
                norma = "true";
                // w.reset();
        }
    }

    function setSpeedSlider() {
        speed = speedSlider.value()/100;
        sliderInfo1.html("Yellow dot rotation rate : " + Math.round(speed*1000)/100);
    }
    function setAccMultSlider() {
        accMult = accMultSlider.value()/1000;
        sliderInfo2.html("White dot acceleration scalar : " + accMult);
    }
    function setamountsSlider() {
        amounts = amountsSlider.value();
        sliderInfo3.html("Updates per frame : " + amounts);
    }
    function setZoomSlider() {
        background(0);
        zoom = zoomSlider.value()/10;
        sliderInfo4.html("Canvas scale : " + zoom);
    }
}