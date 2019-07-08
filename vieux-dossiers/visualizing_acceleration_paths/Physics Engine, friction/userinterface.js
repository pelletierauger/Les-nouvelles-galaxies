//----------------------Information Div-----------------------------------------//
var infoDiv;
var sliderInfo1, sliderInfo2, sliderInfo3, sliderInfo4, sliderInfo5, sliderInfo6, sliderInfo8;
var info1,info2,info3, info4, info5;
var sliders = [];
var speedSlider, accMultSlider, velMultSlider;
var resetW, resetA;
var zoom;
var sel, selDiv, selMag;
var divier, divider2, divider3;

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
    // infoDiv.style('heigth', '100%');
    // infoDiv.style('top', '0');
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

    divider = createP('White dot');
    divider.parent(infoDiv);
    divider.style('margin-bottom','0em');
    divider.style('font-size','1.25em');
    divider.style('font-weight','bold');
    divider.style('line-height','1.2em');
    // divider.style('border-bottom','solid 2px #ffffff');
    divider.style('text-align','center');


    selDiv = createDiv('');
    selDiv.parent(infoDiv);
    selDiv.style('width','100%');
    selDiv.style('padding-top','1em');
    selDiv.style('padding-bottom','1.5em');
    selMag = createSelect();
    selMag.parent(selDiv);
    selMag.style('float', 'left');
    // selMag.style('padding','10px');
    selMag.option('Acceleration not normalized');
    selMag.option('Acceleration normalized');
    selMag.changed(selMagEvent);

    sliderInfo6 = createP('White dot velocity : 0');
    sliderInfo6.parent(infoDiv);
    sliderInfo6.style('padding-bottom','0.5em');

    sliderInfo7 = createP('White dot acc : 0');
    sliderInfo7.parent(infoDiv);
    sliderInfo7.style('padding-bottom','0.5em');

    sliderInfo2 = createP('Slider 2');
    sliderInfo2.parent(infoDiv);

    accMultSlider = createSlider(0, 1000, 1);
    accMultSlider.parent(infoDiv);

    sliderInfo8 = createP('Slider 2');
    sliderInfo8.parent(infoDiv);

    velMultSlider = createSlider(99900, 100000, 100000);
    velMultSlider.parent(infoDiv);

    divider2 = createP('Yellow dot');
    divider2.parent(infoDiv);
    divider2.style('margin-bottom','0em');
    divider2.style('font-weight','bold');
    divider2.style('font-size','1.25em');
    divider2.style('line-height','1.2em');
    divider2.style('text-align','center');
    // divider2.style('border-bottom','solid 2px #ffffff');


    sliderInfo1 = createP('Slider 1');
    sliderInfo1.parent(infoDiv);

    speedSlider = createSlider(0, 100, 1);
    speedSlider.parent(infoDiv);

        selDiv = createDiv('');
    selDiv.parent(infoDiv);
    selDiv.style('width','100%');
    selDiv.style('padding-top','1em');
    selDiv.style('padding-bottom','1em');

    var selInfo = createDiv('Path : ');
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
    sel.option('Personnelle');
    sel.changed(mySelectEvent);

    divider3 = createP('Sketch');
    divider3.parent(infoDiv);
    divider3.style('margin-bottom','0em');
    divider3.style('font-weight','bold');
    divider3.style('font-size','1.25em');
    divider3.style('line-height','1.2em');
    divider3.style('text-align','center');
    // divider3.style('background', '#585858')
    // divider3.style('border-bottom','solid 2px #ffffff');


    sliderInfo3 = createP('Slider 2');
    sliderInfo3.parent(infoDiv);

    amountsSlider = createSlider(1, 1000, 1);
    amountsSlider.parent(infoDiv);

    sliderInfo4 = createP('Zoom');
    sliderInfo4.parent(infoDiv);

    zoomSlider = createSlider(0, 20, 10);
    zoomSlider.parent(infoDiv);


    sliderInfo5 = createP('Press "t" to toggle panel visibility, <br>"y" to toggle yellow dot visibility,<br>"p" to pause the sketch.');
    sliderInfo5.parent(infoDiv);
    sliderInfo5.style("line-height","1.1em");
    sliderInfo5.style("margin-bottom","0em");

    sliders.push(speedSlider);
    sliders.push(accMultSlider);
    sliders.push(velMultSlider);
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
        sliderInfo1.html("Rotation rate : " + speed);
        accMult = 1/1000;
        accMultSlider.value(1);
        sliderInfo2.html("Acceleration scalar : " + accMult);
        amounts = 1;
        amountsSlider.value(1);
        sliderInfo3.html("Updates per frame : " + amounts);
        zoom = 1;
        zoomSlider.value(10);
        sliderInfo4.html("Canvas scale : " + zoom);
        sel.value("Circle");
        selMag.value('Acceleration not normalized');
        shape = "circle";
        showYellow = true;
        norma = false;
        velMult = 1;
        velMultSlider.value(100000);
        sliderInfo8.html("Friction (Velocity scalar) : " + velMult);
    });

    speedSlider.input(function(){
        setSpeedSlider();
    });

    accMultSlider.input(function(){
        setAccMultSlider();
    });

    velMultSlider.input(function(){
        setVelMultSlider();
    });

    amountsSlider.input(function(){
        setamountsSlider();
    });

    zoomSlider.input(function(){
        setZoomSlider();
    });

    setSpeedSlider();
    setAccMultSlider();
    setVelMultSlider();
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
            case "Personnelle" : 
                shape = "personnelle";
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
        sliderInfo1.html("Rotation rate : " + Math.round(speed*1000)/100);
    }
    function setAccMultSlider() {
        accMult = accMultSlider.value()/1000;
        sliderInfo2.html("Acceleration scalar : " + accMult);
    }
    function setVelMultSlider() {
        velMult = velMultSlider.value()/100000;
        sliderInfo8.html("Friction (Velocity scalar) : " + velMult);
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