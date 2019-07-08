var x, y, t, yew;

function setup() {
  createCanvas(600,400);
  translate(width/2, height/2);
  yew = new yellowDot();
  
}

function draw() {
  t = frameCount;
  background(0);
  yew.update();
  yew.display();
  
}

function yellowDot() {
  this.pos = createVector(0,0);
  this.size = createVector(50,50);
  
  this.update = function() {
    this.pos.x += sin(t) * this.size.x;
    this.pos.y += cos(t) * this.size.y;
  }
  
  this.display = function() {
    fill(255,255,0);
    ellipse(this.pos.x, this.pos.y, 5, 5);
  }
}