var w;
var v;
var x, y, t, tt, xx, yy, lerpX, lerpY, morph;
var drawCount = 0;
var looping = true;
var drawingGeometry = true;
var speed = 0;
var accMult = 0;
var amounts = 1;

function setup() {
  createCanvas(windowWidth,windowHeight);
  frameRate(30);
  createInfoDiv();
  setupInfoDiv();
  translate(width/2, height/2);
  scale(0.5,0.5);
  background(0);
  if(!looping){noLoop();}
  noStroke();
  fill(255,250);
  w = new Walker();
}

function draw() {
    background(0,10);
    scale(zoom, zoom);
    for (var i = 0; i < amounts; i++) {
        morph = map(sin(drawCount/20000),-1,1,0,1);
        t = drawCount*speed;
        x = 2 * pow((abs(cos(t))*cos(t)+abs(sin(t))*sin(t)),1) * 300;
        y = 2 * pow((abs(cos(t))*cos(t)-abs(sin(t))*sin(t)),1) * 300;
        xx = pow(sin(t),1) * 200;
        yy = pow(cos(t),1) * 200;
        lerpX = lerp(x, xx, 1);
        lerpY = lerp(y, yy, 1);
        v = createVector(lerpX, lerpY);
        w.update(v);
        fill(255);
        w.display();
        fill(255,255,0);
        ellipse(lerpX,lerpY, 5, 5);
        drawCount++;
    }
}

function Walker()  {
  this.pos = createVector(0, 0);
  this.vel = createVector(0, 0);
  // this.acc = createVector(0, 0.1);

  this.reset = function() {
    this.pos = createVector(0,0);
    this.vel = createVector(0, 0);
  }
  
  this.update = function(vec)  {
    var mouse = createVector(mouseX, mouseY);
    this.acc = p5.Vector.sub(vec, this.pos);
    // this.acc.normalize();
    this.acc.mult(accMult);
    // this.acc = createVector(random(-1,1), random(-1,1));
  
    this.vel.add(this.acc);
    this.pos.add(this.vel);
  }
  
  this.display = function() {
    ellipse(this.pos.x, this.pos.y, 5, 5);
  }
}

function keyPressed() {
    if (keyCode === 32) {
        if (looping) {noLoop(); looping = false;} else {loop(); looping = true;}
    }
}