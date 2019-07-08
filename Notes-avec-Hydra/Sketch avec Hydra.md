p = new P5();
p.background(0);

a = 255;
a = 15;
s = 30;
p.draw = () => {
  p.fill(0);
  p.ellipse(400, 400, 50);
  p.fill(a, 0, 0);
  p.ellipse(400, 400, s);
  modifyS();
}

a = 105;
a = 255;

s2 = 10;
modifyS = function() {
    s = p.sin(p.frameCount * 0.01) * 200;
    s2 = p.sin((p.frameCount - 40) * 0.01) * 200; 
}

a;
b = 25;
p.draw = function(){
  p.background(0, b);
  //p.fill(0);
  //p.ellipse(400, 400, 250);
  p.fill(a, 0, 0);
  p.ellipse(400, 400, s);
  p.fill(255, 0, 255);
  p.ellipse(700, 400, s2);
  modifyS();
  for (let i = 0; i < points.length; i++) {
    p.ellipse(points[i].pos.x, points[i].pos.y, 5);
    points[i].pos.x += (Math.random() - 0.5) * r;
    points[i].pos.y += (Math.random() - 0.5) * r;
  }
}

r = 25;
p.noStroke();
points = [];

Points = function(x, y) {
    this.pos = {x:x, y:y};
    points.push(this);
};

for (let i = 0; i < points.length; i++) {
    points[i].pos.x = p.random(p.width);
    points[i].pos.y = p.random(p.height);
}

for (let i = 0; i < 150; i++) {
    var q = new Points(p.random(p.width), p.random(p.height));
}

p.noLoop();
p.loop();









p.noLoop();
p.loop();



https://hydra-editor-v1.glitch.me/?sketch_id=fOcoozeZ5x13L5C9&code=cCUyMCUzRCUyMG5ldyUyMFA1KCklM0IlMEFwLmJhY2tncm91bmQoMCklM0IlMEElMEFhJTIwJTNEJTIwMjU1JTNCJTBBYSUyMCUzRCUyMDE1JTNCJTBBcyUyMCUzRCUyMDMwJTNCJTBBcC5kcmF3JTIwJTNEJTIwKCklMjAlM0QlM0UlMjAlN0IlMEElMjAlMjBwLmZpbGwoMCklM0IlMEElMjAlMjBwLmVsbGlwc2UoNDAwJTJDJTIwNDAwJTJDJTIwNTApJTNCJTBBJTIwJTIwcC5maWxsKGElMkMlMjAwJTJDJTIwMCklM0IlMEElMjAlMjBwLmVsbGlwc2UoNDAwJTJDJTIwNDAwJTJDJTIwcyklM0IlMEElMjAlMjBtb2RpZnlTKCklM0IlMEElN0QlMEElMEFhJTIwJTNEJTIwMTA1JTNCJTBBYSUyMCUzRCUyMDI1NSUzQiUwQSUwQWZ1bmN0aW9uJTIwbW9kaWZ5UygpJTIwJTdCJTBBJTA5cyUyMCUzRCUyMHAuc2luKHAuZnJhbWVDb3VudCklMjAqJTIwMTAlM0IlMEElN0Q=