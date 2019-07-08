var p = [];
var pSize = 40;
var theSize;
// console.log("Ah!");
function setup() {
  createCanvas(windowWidth,windowHeight);
  translate(width/2, height/2);
  frameRate(1);
  // scale(2,2);
  rotate(PI);
  background(0);
  for (var i = 0; i < pSize; i++) {
    var t = i/ (PI*2);
    var x = (150 * t) - 450;
    var y = cos(t) * 300;
    var v = createVector(x, y);
    p.push(v);
  }
  
  for (var mi = 0; mi < 10; mi++) {
    theSize = p.length;
    for(var li = 0; li < theSize; li++) {
      viHart2(li, 2);
    }
  }

  for (var j = 0; j < p.length; j++) {
    noStroke();
    fill(200);
    ellipse(p[j].x, p[j].y, 2.5, 2.5);
  }

  for(var k = 0; k < p.length; k++) {
    // findCloser(p[k]);
    // viHart(k, 10);
  }
}

function draw() {


}

function viHart2(point, a) {
  var indexTarget = point + a;
  if (p[point] && p[indexTarget]) {
    // var newX = p[point].x - p[indexTarget].x;
    // var newY = p[point].y - p[indexTarget].y;

    var newX = lerp(p[point].x, p[indexTarget].x, 0.5);
    var newY = lerp(p[point].y, p[indexTarget].y, 0.5);
    var v = createVector(newX, newY);
    p.push(v);
  }
  // console.log("Ah!");
}

function viHart(point, a) {
var indexTarget = point + a;
if (indexTarget > p.length - 1) {
  // indexTarget -= p.length;
}
// console.log(indexTarget);
// ellipse(p[point].x, p[point].y, 10, 10);
// ellipse(p[indexTarget].x, p[indexTarget].y, 10, 10);
// stroke(255, 150);
// strokeWeight(0.5);
if (indexTarget <= p.length - 1) {
  stroke(255, 40);
  strokeWeight(1.7);
  line(p[point].x, p[point].y, p[indexTarget].x, p[indexTarget].y);

  stroke(255, 70);
  strokeWeight(0.7);
  line(p[point].x, p[point].y, p[indexTarget].x, p[indexTarget].y);

  stroke(255,200);
  strokeWeight(0.25);
  line(p[point].x, p[point].y, p[indexTarget].x, p[indexTarget].y);
}
// line(p[point].x, p[point].y, p[indexTarget].x, p[indexTarget].y);
}

function findCloser(point) {
  var record = 100000;
  var closerIndex;
  for (var i = 0; i < p.length; i++) {
    var distance = dist(point.x, point.y, p[i].x, p[i].y);
    if (distance < record && distance !== 0) {
      record = distance;
      closerIndex = i;
    }
  }
  // ellipse(p[closerIndex].x, p[closerIndex].y, 8, 8);
  findFarther(point, closerIndex);
}

function findFarther(point, closerIndex) {
  var record = 0;
  var fartherIndex;
  for (var i = 0; i < p.length; i++) {
    var distance = dist(point.x, point.y, p[i].x, p[i].y);
    if (distance > record && distance !== 0) {
      record = distance;
      fartherIndex = i;
    }
  }
  // ellipse(p[fartherIndex].x, p[fartherIndex].y, 8, 8);
  // noStroke();
  stroke(255, 20);
  fill(255, 1);
  closerIndex+= 0;
  fartherIndex += 0;
  if (p[closerIndex] && p[fartherIndex]) {
    beginShape();
    vertex(point.x, point.y);
    vertex(p[closerIndex].x, p[closerIndex].y);
    vertex(p[fartherIndex].x, p[fartherIndex].y);
    endShape(CLOSE);
  }
}
