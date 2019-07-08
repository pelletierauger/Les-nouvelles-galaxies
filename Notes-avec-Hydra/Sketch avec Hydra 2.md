p1.frameRate(30);
p1.noStroke();
p1.fill(0);
j = 0;
a = 1;

console.log("Gotcha!!!");
p1.draw = function() {
  p1.background(255, 150);
  let v = Math.sin(j * 0.1);
  v = p1.map(v, -1, 1, 8, -8);
  for (var i = 0; i < 600; i+= 0.5) {
    let x = (p1.cos(i + j) * 
             Math.sin(i * v)) * 
            i * a + (p1.width * 0.5);
    let y = (p1.sin(i * j) * 
             Math.sin(i * v)) * i 
            * a + (p1.height * 0.5);
  p1.ellipse(x, y, 4, 4);
    }
  j += 0.00005;
};

p1.noLoop();
p1.fill(0);
p1.loop();

myTest = function() {
    console.log("this is a test");
};

//---------------------------------------------------------------------------------------------------------------

p1.frameRate(30);
p1.noStroke();
p1.fill(0);
j = 0;
a = 1;

console.log("Gotcha!!!");
p1.draw = function() {
  p1.background(255, 150);
  let v = Math.sin(j * 0.1);
  v = p1.map(v, -1, 1, 8, -8);
  for (var i = 0; i < 600; i+= 0.5) {
  let x = (p1.cos(i * j) * 
             Math.sin(i * v)) * 
          i * a + (p1.width * 0.5);
    let y = (p1.sin(i * j) * 
             Math.sin(i * v)) * i 
        * a + (p1.height * 0.5);
  p1.ellipse(x, y, 4, 4);
  }
  j += 0.0005;
};

p1.noLoop();
p1.fill(0);
p1.loop();

myTest = function() {
  console.log("this is a test");
};



//---------------------------------------------------------------------------------------------------------------






p1.frameRate(30);
p1.noStroke();
p1.fill(0);
j = 0;
a = 1;

console.log("Gotcha!!!");
p1.draw = function() {
  p1.background(255, 255);
  let v = Math.sin(j * 0.1);
  v = p1.map(v, -1, 1, 8, -8);
  for (var i = 0; i < 600; i+= 0.5) {
  let x = (p1.cos(i * j) * 
             Math.tan(i * v)) * 
          i * a + (p1.width * 0.5);
    let y = (p1.sin(i * j) * 
             Math.tan(i * v)) * i 
        * a + (p1.height * 0.5);
  p1.ellipse(x, y, 4, 4);
  }
  j += 0.00005;
};

p1.noLoop();
p1.fill(0);
p1.loop();

myTest = function() {
  console.log("this is a test");
};








p1.frameRate(30);
p1.noStroke();
p1.fill(0);
j = 0;
a = 1;

console.log("Gotcha!!!");
p1.draw = function() {
  p1.background(255, 255);
  let v = Math.sin(j * 0.1);
  v = p1.map(v, -1, 1, 8, -8);
  for (var i = 0; i < 600; i+= 0.5) {
  let x = (p1.cos(i * j) + 
             Math.tan(Math.pow(i,j))) * 
          i * a + (p1.width * 0.5);
    let y = (p1.sin(i * j) + 
             Math.tan(Math.pow(i,j))) * i 
        * a + (p1.height * 0.5);
  p1.ellipse(x, y, 4, 4);
  }
  j += 0.0005;
};

p1.noLoop();
p1.fill(0);
p1.loop(); 

myTest = function() {
  console.log("this is a test");
};





p1.frameRate(30);
p1.noStroke();
p1.fill(0);
j = 0; 
a = 1;

console.log("Gotcha!!!");
p1.draw = function() {
  p1.background(255, 255);
  let v = Math.sin(j * 0.1);
  v = p1.map(v, -1, 1, 8, -8);
  for (var i = 0; i < 600; i+= 0.5) {
  let x = -300 + (p1.cos(i * j) + 
             Math.tan(Math.pow(j,j))) * 
          i * a + (p1.width * 0.5);
    let y = -300 + (p1.sin(i * j) + 
             Math.tan(Math.pow(j,j))) * i 
        * a + (p1.height * 0.5);
  p1.ellipse(x, y, 4, 4);
  }
  j += 0.00005;
};

p1.noLoop();
p1.fill(0);
p1.loop(); 

myTest = function() {
  console.log("this is a test");
};






p1.frameRate(30);
p1.noStroke();
p1.fill(0);
j = 0; 
a = 0.5;

console.log("Gotcha!!!");
p1.draw = function() {
  p1.background(255, 255);
  let v = Math.sin(j * 0.1);
  v = p1.map(v, -1, 1, 8, -8);
  for (var i = 0; i < 600; i+= 0.5) {
  let x = -30 + (p1.sin(i * j) + 
             Math.tan(Math.pow(i,p1.sin(j)))) * 
          i * a + (p1.width * 0.5);
    let y = -30 + (p1.cos(i * j) + 
             Math.tan(Math.pow(i,p1.sin(j)))) * i 
        * a + (p1.height * 0.5);
  p1.ellipse(x, y, 4, 4);
  }
  j += 0.005;
};

p1.noLoop();
p1.fill(0);
p1.loop(); 

myTest = function() {
  console.log("this is a test");
};



p1.frameRate(30);
p1.noStroke();
p1.fill(0);
j = 0; 
a = 0.5;

console.log("Gotcha!!!");
p1.draw = function() {
  p1.background(255, 255);
  let v = Math.sin(j * 0.1);
  v = p1.map(v, -1, 1, 8, -8);
  for (var i = 0; i < 600; i+= 0.5) {
  let x = -30 + (p1.sin(i * j) + 
             Math.tan(Math.pow(i,p1.sin(j)))) * 
          i * a + (p1.width * 0.5);
    let y = -30 + (p1.cos(i * j) + 
             Math.tan(Math.pow(i,p1.cos(j)))) * i 
        * a + (p1.height * 0.5);
  p1.ellipse(x, y, 4, 4);
  }
  j += 0.0005;
};

p1.noLoop();
p1.fill(0);
p1.loop(); 

myTest = function() {
  console.log("this is a test");
};



p1.frameRate(30);
p1.noStroke();
p1.fill(0);
j = 0; 
a = 0.5;

console.log("Gotcha!!!");
p1.draw = function() {
  p1.background(255, 255);
  let v = Math.sin(j * 0.1);
  v = p1.map(v, -1, 1, 8, -8);
  for (var i = 0; i < 600; i+= 0.5) {
  let x = -30 + (p1.sin(i * j) + 
             Math.tan(Math.pow(i,p1.sin(j)))) * 
          i * a + (p1.width * 0.5);
    let y = -30 + (p1.cos(i * j) + 
             Math.tan(Math.pow(i,p1.tan(j)))) * i 
        * a + (p1.height * 0.5);
  p1.ellipse(x, y, 4, 4);
  }
  j += 0.0005;
};
 
p1.noLoop();
p1.fill(0);
p1.loop(); 

myTest = function() {
  console.log("this is a test");
};






p1.frameRate(30);
p1.noStroke();
p1.fill(0);
j = 0; 
a = 0.5;

console.log("Gotcha!!!");
p1.draw = function() {
  p1.background(255, 255);
  let v = Math.sin(j * 0.1);
  v = p1.map(v, -1, 1, 8, -8);
  for (var i = 0; i < 600; i+= 0.5) {
  let x = -30 + (p1.sin(i * j) + 
             Math.tan(Math.pow(i,p1.sin(i)))) * 
          i * a + (p1.width * 0.5);
    let y = -30 + (p1.cos(i * j) + 
             Math.tan(Math.pow(i,p1.tan(j)))) * i 
        * a + (p1.height * 0.5);
  p1.ellipse(x, y, 4, 4);
  }
  j += 0.0005;
};
 
p1.noLoop();
p1.fill(0);
p1.loop(); 

myTest = function() {
  console.log("this is a test");
};






p1.frameRate(30);
p1.noStroke();
p1.fill(0);
j = 0; 
a = 0.5;

console.log("Gotcha!!!");
p1.draw = function() {
  p1.background(255, 255);
  let v = Math.sin(j * 0.1);
  v = p1.map(v, -1, 1, 8, -8);
  for (var i = 0; i < 600; i+= 0.5) {
  let x = -30 + (p1.sin(i * j) + 
             Math.cos(Math.pow(p1.sin(i),0.1))) * 
          i * a + (p1.width * 0.5);
    let y = -30 + (p1.cos(i * j) + 
             Math.sin(Math.pow(p1.sin(i),0.1))) * i 
        * a + (p1.height * 0.5);
  p1.ellipse(x, y, 4, 4);
  }
  j += 0.0005;
};
 
p1.noLoop();
p1.fill(0);
p1.loop(); 

myTest = function() {
  console.log("this is a test");
};






p1.frameRate(30);
p1.noStroke();
p1.fill(0);
j = 0; 
a = 0.25;

console.log("Gotcha!!!");
p1.draw = function() {
  p1.background(255, 255);
  let v = Math.sin(j * 0.1);
  v = p1.map(v, -1, 1, 8, -8);
  for (var i = 0; i < 1200; i+= 1) {
  let x = -30 + (p1.sin(i * j) + 
             Math.cos(Math.pow(p1.sin(i * 0.01),0.1))) * 
          i * a + (p1.width * 0.5);
    let y = -30 + (p1.cos(i * j) + 
             Math.sin(Math.pow(p1.sin(i * 0.01),0.1))) * i 
        * a + (p1.height * 0.5);
  p1.ellipse(x, y, 4, 4);
  }
  j += 0.0005;
};
 
p1.noLoop();
p1.fill(0);
p1.loop(); 

myTest = function() {
  console.log("this is a test");
};






p1.frameRate(30);
p1.noStroke();
p1.fill(0);
j = 0; 
a = 0.5;

console.log("Gotcha!!!");
p1.draw = function() {
  p1.background(255, 255);
  let v = Math.sin(j * 0.1);
  v = p1.map(v, -1, 1, 8, -8);
  for (var i = 0; i < 1200; i+= 1) {
  let x = -30 + (p1.sin(i * j) / 
             Math.cos(Math.pow(p1.cos(i),1))) * 
          i * a + (p1.width * 0.5);
    let y = -30 + (p1.cos(i * j) + 
             Math.sin(Math.pow(p1.cos(i),1))) * i 
        * a + (p1.height * 0.5);
  p1.ellipse(x, y, 4, 4);
  }
  j += 0.00005;
};
 
p1.noLoop();
p1.fill(0);
p1.loop(); 

myTest = function() {
  console.log("this is a test");
};






p1.frameRate(30);
p1.noStroke();
p1.fill(0);
j = 0; 
a = 0.5;

console.log("Gotcha!!!");
p1.draw = function() {
  p1.background(255, 255);
  let v = Math.sin(j * 0.1);
  v = p1.map(v, -1, 1, 8, -8);
  for (var i = 0; i < 1200; i+= 1) {
  let x = -30 + (p1.sin(i * j) / 
             Math.cos(Math.pow(p1.cos(i),1))) * 
          i * a + (p1.width * 0.5);
    let y = -30 + (p1.cos(i * j) / 
             Math.sin(Math.pow(p1.cos(i),1))) * i 
        * a + (p1.height * 0.5);
  p1.ellipse(x, y, 4, 4);
  }
  j += 0.00005;
};
 
p1.noLoop();
p1.fill(0);
p1.loop(); 

myTest = function() {
  console.log("this is a test");
};






p1.frameRate(30);
p1.noStroke();
p1.fill(0);
j = 0;
a = 0.125;

console.log("Gotcha!!!");
p1.draw = function() {
  p1.background(255, 255);
  let v = Math.sin(j * 0.1);
  v = p1.map(v, -1, 1, 8, -8);
  for (var i = 0; i < 1200; i+= 1) {
  let x = -30 + (p1.sin(i - j) / 
             Math.cos(1)) * 
          i * a + (p1.width * 0.5);
    let y = -30 + (p1.cos(i * j) / 
             Math.sin(1)) * i 
        * a + (p1.height * 0.5);
  p1.ellipse(x, y, 4, 4);
  }
  j += 0.00005;
};
 
p1.noLoop();
p1.fill(0);
p1.loop(); 

myTest = function() {
  console.log("this is a test");
};






p1.frameRate(30);
p1.noStroke();
p1.fill(0);
j = 0;
a = 0.25;

console.log("Gotcha!!!");
p1.draw = function() {
  p1.background(255, 255);
  let v = Math.sin(j * 0.1);
  v = p1.map(v, -1, 1, 8, -8);
  for (var i = 0; i < 1200; i+= 1) {
  let x = -30 + (p1.cos(i + p1.pow(i,j))) * 
          i * a + (p1.width * 0.5);
    let y = -30 + (p1.sin(i + p1.pow(i,j))) * i 
        * a + (p1.height * 0.5);
  p1.ellipse(x, y, 4, 4);
  }
  j += 0.0005;
};
 
p1.noLoop();
p1.fill(0);
p1.loop(); 

myTest = function() {
  console.log("this is a test");
};




p1.frameRate(30);
p1.noStroke();
p1.fill(0);
j = 0;
a = 0.25;

console.log("Gotcha!!!");
p1.draw = function() {
  p1.background(255, 255);
  let v = Math.sin(j * 0.1);
  v = p1.map(v, -1, 1, 8, -8);
  for (var i = 0; i < 1200; i+= 1) {
  let x = -30 + (p1.cos(j * p1.tan(i))) * 
          i * a + (p1.width * 0.5);
    let y = -30 + (p1.sin(j * p1.tan(i))) * i 
        * a + (p1.height * 0.5);
  p1.ellipse(x, y, 4, 4);
  }
  j += 0.005;
};
 
p1.noLoop();
p1.fill(0);
p1.loop(); 

myTest = function() {
  console.log("this is a test");
};



p1.frameRate(30);
p1.noStroke();
p1.fill(0);
j = 0;
a = 0.25;

console.log("Gotcha!!!");
p1.draw = function() {
  p1.background(255, 255);
  let v = Math.sin(j * 0.1);
  v = p1.map(v, -1, 1, 8, -8);
  for (var i = 0; i < 1200; i+= 1) {
  let x = -30 + (p1.cos(j * p1.tan(i))) * 
          i * a + (p1.width * 0.5);
    let y = -30 + (p1.sin(j * p1.tan(i))) * i 
        * a + (p1.height * 0.5);
  p1.ellipse(x, y, 4, 4);
  }
  j += 0.005;
};
 
p1.noLoop();
p1.fill(0);
p1.loop(); 

myTest = function() {
  console.log("this is a test");
};
















p1 = new P5();

p1.frameRate(3 0);
p1.noStroke();
p1.fill(0);

j = 2000;
a = 1.25;
increment = 0. 1;

p1.draw = () => {
  p1.background(200, 250);
  let v = Math.sin(j * 0.01);
  v = p1.map(v, -1, 1, 0.8, 0.5);
  for (var i = 0; i < 600; i+= 0.125) {
  let x = (p1.sin(i * 0.01) * Math.sin(i * v)) * i * a + (p1.width * 0.5);
    let y = p1.sin(i + j) * i * a + (p1.height * 0.5);
  p1.ellipse(x, y, 4, 4);
  }
  j += increment;
}

p1.noLoop();
p1.loop();











p1 = new P5();

p1.frameRate(3 0);
p1.noStroke();
p1.fill(0);

j = 2000;
a = 1;
increment = 0.1;

p1.draw = () => {
  p1.background(200, 250);
  let v = Math.sin(j * 0.01);
  v = p1.map(v, -1, 1, 0.8, 0.5);
  for (var i = 0; i < 600; i+= 0.125) {
  let x = (p1.sin(i * 0.01) - Math.sin(i - v)) * i * a + (p1.width * 0.5);
    let y = p1.sin(i - j) * i * a + (p1.height * 0.5);
  p1.ellipse(x, y, 4, 4);
  }
  j += increment;
}

p1.noLoop();
p1.loop();






p1 = new P5();

p1.frameRate(3 0);
p1.noStroke();
p1.fill(0);

j = 0;
a = 1;

increment = 0.008;
increment = 0.1;

p1.draw = () => {
  p1.background(200, 250);
  let v = Math.sin(j * 0.01);
  v = p1.map(v, -1, 1, 0.8, 0.5);
  for (var i = 0; i < 600; i+= 0.125) {
  let x = (p1.sin(j) - Math.cos(j)) * i * a + (p1.width * 0.5);
    let y = (p1.sin(i - j) - Math.cos(i * j)) * i * a + (p1.height * 0.5);
  p1.ellipse(x, y, 4, 4);
  }
  j += increment;
}

p1.noLoop();

p1.loop();










p1 = new P5();

p1.frameRate(3 0);
p1.noStroke();
p1.fill(0);

j = 0;
a = 1;

increment = 0.008;
increment = 0.1;

p1.draw = () => {
  p1.background(200, 250);
  let v = Math.sin(j * 0.01);
  v = p1.map(v, -1, 1, 0.8, 0.5);
  for (var i = 0; i < 600; i+= 0.125) {
  let x = (p1.sin(j) - Math.cos(j)) * i * a + (p1.width * 0.5);
    let y = (p1.sin(i - j) - Math.cos(i * j)) * i * a + (p1.height * 0.5);
  p1.ellipse(x, y, 4, 4);
  }
  j += increment;
}

p1.noLoop();

p1.loop();
