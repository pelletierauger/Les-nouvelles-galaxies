// Version revue au mois d'avril 2016.
var x, y, t, xx, yy, tt, oscillator, oscNorm, morphX, morphY;
var vertices = [], reached = [], unreached = [];
var looping = true;
var dC = 0;

function setup() {
  createCanvas(windowWidth, windowHeight);
  translate(width/2,height/2);
  background(0);
  frameRate(24);
  createVertices();
  drawVertices();
  unreached = vertices.slice();
  reached = [];
  reached.push(unreached[0]);
  unreached.splice(0, 1);
  // findEdges();
}

function draw() {
  background(0);
  vertices = [];
  //Le classique
  // dC = sin(frameCount/20)/100;
  dC = sin(frameCount/700)/5;
   // dC = sin(frameCount/700)/15;
  // var nI = map(sin(frameCount/20),-1,1,0,1000);
  createVertices(dC);
  drawVerticesSimple();
  // stroke(255, 50);
  // for (var i = 0; i < vertices.length; i++) {
  //   if (vertices[i+1]) {
  //     var lineLength = dist(vertices[i].x, vertices[i].y, vertices[i+1].x,vertices[i+1].y);
  //     var lineMap = map(lineLength,0,50,0,1);
  //     strokeWeight(lineMap);
  //     line(vertices[i].x, vertices[i].y, vertices[i+1].x,vertices[i+1].y);
  //   }
  // }
  // Saving frames as needed.
  var formattedFrameCount = "" + frameCount;
  while (formattedFrameCount.length < 4) {
    formattedFrameCount = "0" + formattedFrameCount;
  }
  // save("avecprim001_" + formattedFrameCount + ".png");
}

function findEdges() {
  var record = 100000;
  var rIndex;
  var uIndex;
  for (var i = 0; i < reached.length; i++) {
    for (var j = 0; j < unreached.length; j++) {
      var v1 = reached[i];
      var v2 = unreached[j];
      var d = dist(v1.x, v1.y, v2.x, v2.y);
      if (d < record) {
        record = d;
        rIndex = i;
        uIndex = j;
      }
    }
  }
  drawEdge(reached[rIndex], unreached[uIndex]);
  reached.push(unreached[uIndex]);
  unreached.splice(uIndex, 1);
  if (unreached.length > 0 && !stopped) {
    setTimeout(function() {
      findEdges();
    }, 1);
  } else {
    console.log("Unreached is empty.");
  }
}

function createVertices(m) {
  for (var i = 0; i < 3000; i++) {

    // t = i;
    // x = sin(t+m) * 200 * t/200;
    // y = t;

      // t = i/8;
      // x = cos(t+(m*10)) * sin(t*m) * 250 * t/1000;
      // y = sin(t+(m*40)) * 250;

      // //Liquéfieur de cerveau I
      // t = i/2;
      // x = cos(t+(m*10)) * 250 * t/1000;
      // y = sin(t+(m*40)) * 250;

      //High glitch
      // t = i/5;
      // x = cos(t+(m*10)) * cos(t*2/m*20) * 250 * t/500;
      // y = sin(t+(m*40)) * 250;

      //High glitch 2 - Signal faible.
      // t = i/500;
      // x = cos(t+(m*10)) * cos(t*4/m*20) * 450 * t/5;
      // y = sin(t+(m*40)) * 350;

      //High glitch 3 - Signal faible + tangente.
      // t = i/750;
      // x = cos(t+(m*10)) * cos(t*4/m*20) * 450 * t/5;
      // y = sin(t+(m*40)) * tan(t) * 350;

      //Bruyant champ de tangentes
      // t = i/750;
      // x = cos(t+(m*10)) * tan(t*4/m*20) * 450 * t/5;
      // y = sin(t+(m*40)) * cos(t*(2+m)) * 350;

      //Bruyant champ de tangentes 2 - champ roulé sur lui-même.
      // t = i/2000;
      // x = cos(t+(m*10)) * tan(t*4/m*2) * 450 * t/5;
      // y = sin(t+(m*40)) * cos(t*(2+m)) * 350;

      //Bruyant champ de tangentes 3 - champ en forme de serpent.
      // t = i/500;
      // x = cos(t+(m*10)) * lerp(tan(t+m),tan(t/m),0.1) * 450 * t/5;
      // y = sin(t+(m*40)) * 350;

      // //Citron/losage intéressant.
      // t = i/2;
      // x = cos(t+(m*50)) * 400 * t/1000;
      // y = pow(sin(t+(m*50)),3) * 350;

     //Citron/losage intéressant 2.
      // t = i/2;
      // x = cos(t+(m*50)) * 400 * t/1000;
      // y = pow(sin(t-(m*50)),3) * 350

     //Citron en ruban qui tourne sur lui-même
      // t = i/2;
      // x = cos(t+(m*50)) * 400 * t/1000;
      // y = pow(sin(t-(m*50)),3) * cos(t) * 350;

      //Citron en ruban qui tourne sur lui-même - Version débile.
      // t = i/2;
      // x = cos(t+(m*50)) * tan(t) * 400 * t/1000;
      // y = pow(sin(t-(m*50)),3) * cos(t) * 350;

      //Citron en ruban qui tourne sur lui-même - Version débile 2.
      // t = i/2;
      // x = cos(t+(m*50)) * tan(t) * 400 * t/1000;
      // y = pow(sin(t-(m*50)),1) * cos(t) * 350;

      //Citron en ruban qui tourne sur lui-même - Version fracturée.
      // t = i/2;
      // x = cos(t+(m*50)) * tan(t) * 400 * t/1000;
      // y = pow(sin(t-(m*50)),0.5) * cos(t) * 350;

     //Citron en ruban qui tourne sur lui-même - Version débile, var.1.
      // t = i/2;
      // x = sin(t+(m*50)) * tan(t+(m*2)) * 400 * t/1000;
      // y = pow(sin(t-(m*50)),1) * cos(t) * 350;

     //Citron en ruban qui tourne sur lui-même - Version débile, var. 2.
      // t = i/2;
      // x = sin(t+(m*50)) * lerp(tan(t+(m*2)),sin(t),0.9) * 400 * t/1000;
      // y = pow(sin(t-(m*50)),1) * cos(t) * 350;

     //Citron en ruban qui tourne sur lui-même - Version débile, var. 3.
      // t = i/2;
      // x = sin(t+(m*50)) * lerp(tan(t+(m*2)),cos(t),0.9) * 400 * t/1000;
      // y = pow(sin(t-(m*50)),1) * cos(t) * 350;

     //Citron en ruban qui tourne sur lui-même - Version débile, var. 4.
      t = i/2;
      x = sin(t+(m*50)) * lerp(tan(t+(m*2)),cos(t),0.9) * 400 * t/1000;
      y = pow(sin(t-(m*50)),1) * 350;

     // //Citron en ruban qui tourne sur lui-même - Version débile. var. 5.
     //  t = i/2;
     //  x = sin(t+(m*50)) * lerp(tan(t+(m*2)),cos(t),0.9) * 400 * t/1000;
     //  y = pow(sin(t-(m*50)),3) * 350;

     //Citron en ruban qui tourne sur lui-même - Version débile.
      // t = i/2;
      // x = sin(t+(m*50)) * lerp(tan(t+(m*2)),cos(t),0.9) * 400 * t/1000;
      // y = pow(sin(t-(m*50)),3) * 350;

      //MODULATOR
      //OscNorm max : 0.05;
      // t = i/2;
      // x = cos(t+(m*10)) * 350 * t/1000;
      // y = sin(t+(m*40)) * 350;

      // //OscNorm max : 1;
      // t = i/10;
      // x = sin(t*(2+m)) * asin(t*(m/20)) * 800 * i/1000;
      // y = cos(t*(2+m)) * asin(t*(m/20)) * 350;

      // t = i/750;
      // x = cos(t+(m*10)) * tan(t*4/m*20) * 450 * t/5;
      // y = sin(t+(m*40)) * cos(t*(2+m)) * 350;


      //CARRIER SIGNAL
      //Spirale ultra-magique.
      // tt = i/10;
      // xx = sin(t*(2+m)) * 400 * i/1000;
      // yy = cos(t*(2+m)) * sin(t*(4*m)) * 350;

      // tt = i/2;
      // xx = cos(t+(m*10)) * 250 * t/1000;
      // yy = sin(t+(m*40)) * 250;


      // // tt = i/10;
      // // xx = sin(t*(2+m)) * asin(t*(m/20)) * 800 * i/1000;
      // // yy = cos(t*(2+m)) * asin(t*(m/20)) * 350;

      //OSCILLATOR FUNCTION
      // oscillator = sin(frameCount/20);
      // oscNorm = map(oscillator, -1, 1, 0.9, 0.05);
      // morphX = lerp(x, xx, oscNorm);
      // morphY = lerp(y, yy, oscNorm);
      // x = morphX;
      // y = morphY;



      //----------------------------------Première nuit géométrique
      // Version A
      // x = sin(i)*cos(i*0.5) * 320 * Math.sign(sin(i)) * i/800 + width/2;
      // y = cos(tan(i)) * 370 + height/2;

      // Version A2
      // x = sin(i)*cos(i*0.5) * 320 * Math.sign(sin(i)) * i/800 + width/2;
      // y = cos(i) * 370 + height/2;

      // t = i/10;
      // x = cos(t) * sin(t/2) * (sin(t*2)/4) * 2400 * i/1000;
      // y = pow(sin(t),3) * cos(t/2) * 350;

      //Formule magique. 1000 itérations.
      // t = i/10;
      // x = cos(t) * sin(t/2) * (sin(t*(2+m))/4) * 2400 * i/1000;
      // y = pow(sin(t/2),3) * cos(t/20) * 350;

      //Formule modifiée - magique 2. 1000 itérations.
      // t = i/10;
      // // x = cos(t) * (sin(t*(2+m))/4) * 2400 * i/1000;
      // x = sin(t*(2+m)) * 400 * i/1000;
      // y = sin(t*(-2+m)) * 350;

      //Spirale en toupie horizontale. 1000 itérations.
      // t = i/10;
      // x = sin(t*(2+m)) * 400 * i/1000;
      // y = cos(t*(2+m)) * sin(t*(4*m)) * 350;

      //Formule modifiée - Spirale extra-magique 2. 1000 itérations.
      t = i/10;
      // x = cos(t) * (sin(t*(2+m))/4) * 2400 * i/1000;
      x = sin(t*(2+m)) * sin(t*(2*m)) * 400 * i/1000;
      y = cos(t*(2+m)) * sin(t*(2*m)) * 350;

      //Formule modifiée - Juste débile. 1000 itérations.
      // t = i/10;
      // // x = cos(t) * (sin(t*(2+m))/4) * 2400 * i/1000;
      // x = sin(t*(2+m)) * sin(t*(m/2)) * 800 * i/1000;
      // y = cos(t*(2+m)) * sin(t*(2*m)) * 350;

      // //Formule modifiée - Intéressant! 1000 itérations.
      // t = i/10;
      // // x = cos(t) * (sin(t*(2+m))/4) * 2400 * i/1000;
      // x = sin(t*(2+m)) * cos(t*(4*m)) * 800 * i/1000;
      // y = cos(t*(2+m)) * cos(t*(2*m)) * 350;

      //Spirale en toupies entrelacées. 1000 itérations.
      // t = i/10;
      // x = sin(t*(2+m)) * cos(t*(m/4)) * 800 * i/1000;
      // y = cos(t*(2+m)) * cos(t*(m/4)) * 350;

      //Spirale envoûtante. 1000 itérations.
      // t = i/10;
      // x = sin(t*(2+m)) * asin(t*(m/4)) * 800 * i/1000;
      // y = cos(t*(2+m)) * asin(t*(m/4)) * 350;

      //Formule modifiée - Pas mal cool.1000 itérations.
      // t = i/10;
      // x = sin(t*(2+m)) * asin(t*(m/4)) * 800 * i/1000;
      // y = cos(t*(2+m)) * asin(t*(m/4)) * (sin(t*(m))*m*20) * 350;

      //Formule modifiée - Pas mal cool aussi.1000 itérations.
      // t = i/10;
      // // x = cos(t) * (sin(t*(2+m))/4) * 2400 * i/1000;
      // x = sin(t*(2+m)) * asin(t*(m/4)) * 800 * i/1000;
      // y = cos(t*(2+m)) * asin(t*(m/4)) * (sin(t*(m))*t*m*10) * 350;

      //Formule modifiée - Nouvelle spirale rotative (débile!). 1000 itérations.
      // t = i/10;
      // x = sin(t*(-5+m)) * asin(t*(m/4)) * 800 * i/1000;
      // y = cos(t*(-5+m)) * asin(t*(m/4)) * (sin(t*(m))*t*m*1) * 350;

      //Formule modifiée - Beauté. - JUSQU'ICI, 1000 ITÉRATIONS.
      // t = i/10;
      // x = sin(t*(-5+m)) * asin(t*(m/4)) * 800 * i/1000;
      // y = cos(t*(10+m)) * asin(t*(m/4)) * (sin(t*(m))*t*m*1) * 350;

      //Formule modifiée - Débile avec 3000 itérations.
      // t = i/60;
      // x = sin(t*(-5+m)) * asin(t*(m/4)) * 800 * i/1000;
      // y = tan(t*(-5+m)) * asin(t*(m/4)) * (sin(t*(m))*t*m*1) * 350;

      //Formule modifiée - Variation avec 3000 itérations.
      // t = i/60;
      // x = sin(t*(-5+m)) * asin(t*(m/4)) * 800 * i/1000;
      // y = tan(t*(-5+m)) * asin(t*(m/4)) * (tan(t*(m))*t*m*1) * 350;

      //Formule modifiée - Fou dans la tête.
      // t = i/60;
      // x = tan(t*(-5+m)) * asin(t*(m/4)) * 800 * i/1000;
      // y = tan(t*(-5+m)) * asin(t*(m/4)) * (tan(t*(m))*t*m*1) * 350;

      //Formule modifiée - Fou dans la tête 2.
      // t = i/60;
      // // x = cos(t) * (sin(t*(2+m))/4) * 2400 * i/1000;
      // x = tan(t*(-5+m)) * asin(t*(m/4)) * 800 * i/1000;
      // y = tan(t*(5+m)) * asin(t*(m/4)) * (tan(t*(m))*t*m*1) * 350;

      //Formule modifiée - Incroyable.
      // t = i/60;
      // x = tan(t*(-5+m)) * asin(t*(m/4)) * 800 * i/1000;
      // y = tan(t*(5+m)) * asin(t*(m/4)) * 350;

      // //Formule modifiée - Autre incroyable.
      // t = i/60;
      // x = tan(t*(-5+m)) * asin(t*(m/4)) * 800 * i/1000;
      // y = sin(t*(5+m)) * asin(t*(m/4)) * 550;

      //Formule modifiée - Autre incroyable - zoomé.
      // t = i/60;
      // // x = cos(t) * (sin(t*(2+m))/4) * 2400 * i/1000;
      // x = tan(t*(-5+m)) * asin(t*10*(m/4)) * 800 * i/1000;
      // y = sin(t*(5+m)) * asin(t*10*(m/4)) * 550;

     //Formule modifiée - Folle spirale.
      // t = i/60;
      // x = sin(t*(-5+m)) * asin(t*10*(m/4)) * 800 * i/1000;
      // y = sin(t*(5+m)) * asin(t*10*(m/4)) * 550;

     //Formule modifiée - Folle spirale plus lente.
      // t = i/60;
      // // x = cos(t) * (sin(t*(2+m))/4) * 2400 * i/1000;
      // x = sin(t*(-5+m)) * asin(t*4*(m/4)) * 800 * i/1000;
      // y = sin(t*(5+m)) * asin(t*4*(m/4)) * 550;

     //Formule modifiée - Spirale tordue folle.
      // t = i/60;
      // // x = cos(t) * (sin(t*(2+m))/4) * 2400 * i/1000;
      // x = sin(t*(-15+m)) * asin(t*4*(m/4)) * 800 * i/1000;
      // y = sin(t*(5+m)) * asin(t*4*(m/4)) * 550;

      //Formule modifiée - Spirale étrange.
      // t = i/60;
      // // x = cos(t) * (sin(t*(2+m))/4) * 2400 * i/1000;
      // x = sin(t*(-15+m)) * asin(t*4*(m/4)) * 800 * i/1000;
      // y = sin(t*(15+m)) * asin(t*4*(m/4)) * 550;

      //Formule modifiée - Holy shit un autre.
      // t = i/60;
      // // x = cos(t) * (sin(t*(2+m))/4) * 2400 * i/1000;
      // x = sin(t*(-5+m)) * asin(t*4*(m/4)) * 800 * i/1000;
      // y = sin(t*(15+m)) * asin(t*4*(m/4)) * 550;

      //Formule modifiée - Ouais.
      // t = i/60;
      // // x = cos(t) * (sin(t*(2+m))/4) * 2400 * i/1000;
      // x = sin(t*(-5+m)) * asin(t*4*(m/4)) * 800 * i/1000;
      // y = sin(t*(15+(m*2))) * asin(t*4*(m/4)) * 550;

      //Formule modifiée - Ouais 2.
      // t = i/60;
      // // x = cos(t) * (sin(t*(2+m))/4) * 2400 * i/1000;
      // x = cos(t*(-5+m)) * asin(t*4*(m/4)) * 800 * i/1000;
      // y = sin(t*(15+(m*5))) * asin(t*4*(m/4)) * 550;

      //Formule modifiée - Un peu de variété.
      // t = i/320;
      // // x = cos(t) * (sin(t*(2+m))/4) * 2400 * i/1000;
      // x = cos(t*(-5+(m/20))) * cos(t*4*(m/4)) * 800 * i/1000;
      // y = sin(t*(15+(m*50))) * sin(t*4*(m/4)) * 550;

      //Formule modifiée - Belle tangeante.
      // t = i/320;
      // // x = cos(t) * (sin(t*(2+m))/4) * 2400 * i/1000;
      // x = sin(t*(-5+(m/20))) * cos(t*4*(m/4)) * 200 * i/1000;
      // y = tan(t*(4.5+(m*10))) * sin(t*4*(m/4)) * 550;

      //Formule modifiée - Tangeante délirante.
      // t = i/320;
      // // x = cos(t) * (sin(t*(2+m))/4) * 2400 * i/1000;
      // x = atan(t*(-50+(m/20))) * cos(t*40*(m)) * 200 * i/1000;
      // y = tan(t*(4.5+(m*10))) * tan(t*4*(m/4)) * 550;

      //Formule modifiée
      // t = i/320;
      // // x = cos(t) * (sin(t*(2+m))/4) * 2400 * i/1000;
      // x = atan(t*(-50+(m/20))) * asin(t*4*(m/4)) * 400 * i/1000;
      // y = tan(t*(4.5+(m*10))) * asin(t*4*(m/4)) * 50;

      //Formule modifiée - La chose la plus hot au monde. 1000 itérations.  
      // t = i/10;
      // // x = cos(t) * (sin(t*(2+m))/4) * 2400 * i/1000;
      // x = sin(t*(2+m)) * cos(t*(m/4)) * 800 * i/1000;
      // y = cos(t*(2+m)) * cos(t*(m/4)) * 350;



      // //2 triangles
      // t = i/50;
      // x = 600 * sin(t * 3 * (2+m)) * pow(cos(t *2),1.5) * i/2000;
      // y = 350 * sin(t * 2) * pow(sin(t *2),4);

       //2 triangles
      // t = i/50;
      //  x = 600 * sin(t * 3 * (2+m)) * pow(cos(t *2),1.5) * i/2000;
      // y = 350 * sin(t * 2) * pow(sin(t *2),4);

      //Version B
      // x = tan(sin(pow(i,10))) * 125 * i/320 + width/2;
      // y = cos(pow(i,10)) * 370 + height/2;

      // Version C
      // x = cos(cos(pow(i,10))) * 155 * i/500 + width/2;
      // y = tan(sin(pow(i,10))) * 240 + height/2;

      //-----------------------La troisième nuit géométrique-----------------------\\

      //Les nouvelles dimensions
      // t = i/2;
      // x = tan(t+(m*50)) * 400 * t/1000;
      // y = pow(sin(t-(m*50)),3) * 350;

      
      //Les nouvelles dimensions 2
      // t = i/2;
      // x = tan(t+(m*50)) * 400 * t/1000;
      // y = pow(tan(t-(m*50)),3) * 350;

      //Les tapis récursifs
      // t = i/2;
      // x = sin(t+(m*50)) * 400 * t/1000;
      // y = pow(tan(t-(m*50)),3) * 350;
      
      //Les tapis récursifs 2
      // t = i/2;
      // x = sin(t+(m*50)) * 400 * t/1000;
      // y = pow(tan(t-(m*50)),3) * tan(t-m) * 350;
      
      //Les murs
      // t = i/2;
      // x = sin(t+(m*50)) * cos(t+m) * 400 * t/1000;
      // y = pow(tan(t-(m*50)),3) * sin(t-m) * 350;
      
      //Les tapis déroulants
      // t = i/2;
      // x = (sin(t+(m*50))*5) * pow(cos(t+m),3) * 400 * t/1000;
      // y = pow(tan(t-(m*50)),3) * sin(t-m) * 350;
      
      //Les plantes formidables
      // t = i/100;
      // x = (sin(t+(m*50))*5) * (cos(t-m)/m) * 400 * t/1000;
      // y = pow(tan(t-(m*50)),3) * sin(t-m) * 350;

      //Les plantes formidables II (Moins bon.)
      // t = i/100;
      // x = (sin(t+(m*50))*5) * (tan(t-m)/m) * 400 * t/1000;
      // y = pow(tan(t-(m*50)),3) * sin(t-m) * tan(t) * 350;
      
      //Ah!
      // t = i/50;
      // x = (tan(t+(m*60))/2) * 1600 * t/200;
      // y = sin(t-m) * 350;
      
      //Le cracheur
      // t = i/50;
      // x = tan(cos(tan((t/1)+(m*10))+(m*10))+(m*10)) * 600 * t/200;
      // y = sin(t+m) * 350;

        //Le cracheur 2
        // t = i/50;
        // x = tan(cos(tan((t/1)+(m*10))+(m*10))+(m*10)) * 600 * t/200;
        // y = tan(t+m) * 350;

      //L'éventail
      // t = i/50;
      // x = tan(cos(tan((t/1)+(m*1))+(m*100))+(m*1)) * 1200 * t/200;
      // y = tan(t+m) * 350;

      //L'éventail problématique
      // t = i/50;
      // x = tan(cos(tan((t/1)+(m*50))+(m*100))+(m*1)) * 1200 * t/200;
      // y = tan(t+m) * 350;

      //Vers dansants
      // t = i/50;
      // x = cos(cos(cos((t/1)+(m*500))+(m*100))+(m*1)) * 1200 * t/200;
      // y = cos(t+m) * 350;

      //La courge molle
      // t = i/50;
      // x = cos(cos(cos((t/1)+(m*500))+(m*100))+(m*1)) * sin(t) * 1200 * t/200;
      // y = cos(t+m) * 350;

      //La courge molle 2
      // t = i/50;
      // x = cos(cos(cos((t/1)+(m*500))+(m*100))+(m*100)) * sin(t) * 1200 * t/200;
      // y = cos(t+m) * 350;

      //Rideaux
      // t = i/50;
      // x = cos(cos(cos((t/1)+(m*500))+(m*100))+(m*100)/m) * sin(t) * 1200 * t/150;
      // y = tan(t+(m*10)) * 350;


      //Rideaux 2
      // t = i/50;
      // x = cos(cos(cos((t/1)+(m*500))+(m*100))+(m*100)/m) * sin(t+(m*100)) * 1200 * t/150;
      // y = tan(t+(m*10)) * 350;

      //Rideaux 3
      // t = i/50;
      // x = cos(tan(sin((t/1)+(m*500))+(m*100))+(m*100)/m) * sin(t+(m*100)) * 1200 * t/150;
      // y = tan(t+(m*10)) * 350;
      
      //Les tapis récursifs
      // t = i/25;
      // x = sin(t+(m*1)) * 8200 * t/150;
      // y = cos(t+(m*1)) * cos(t*(m*5)) * sin(t+(m*1)) * 8500;
            
      // x*= frameCount/500;
      // y*= frameCount/500;

      var v = createVector(x, y);
      vertices.push(v);
    for (var k = 0; k < vertices.length; k++) {
    // vertices[k].x -= i/4000;
    }
  }

}

function drawEdge(first, second) {
  var dynRed = map(abs(first.x), 0, width/2, 0, 255);
  var dynGreen = map(abs(first.x), 0, width/2, 100, 255);
  var dynBlue = map(abs(first.y), 0, height/2, 50, 255);
  // var alpha = map(sin(frameCount/3), -1, 1, 50, 255);
  var alpha = 255;
  fill(dynRed, dynGreen, dynBlue);
  stroke(dynRed, dynGreen, dynBlue, alpha);
  strokeWeight(1.2);
  blendMode(ADD);
  line(first.x, first.y, second.x, second.y);
}

function drawVerticesSimple() {
  for (var i = 0; i < vertices.length; i++) {
    noStroke();
    fill(255,150);
    ellipse(vertices[i].x, vertices[i].y, 3, 3);
  }
}

function drawVertices() {
  for (var i = 0; i < vertices.length; i++) {
    for (var l = 0; l < 10; l++) {
      noStroke();
      var size = map(l, 0, 10, 12, 4);
      var alpha = map(l, 0, 10, 0, 25);
      var dynRed = map(abs(vertices[i].x), 0, width/2, 50, 155);
      var dynGreen = map(abs(vertices[i].x), 0, width/2, 100, 155);
      var dynBlue = map(abs(vertices[i].y), 0, height/2, 50, 155);
      fill(dynRed, dynGreen, dynBlue, alpha);
      ellipse(vertices[i].x, vertices[i].y, size, size);
    }
  }
  
  for (var i = 0; i < vertices.length; i++) {
    for (var l = 0; l < 10; l++) {
      noStroke();
      var size = map(l, 0, 10, 6, 2);
      var alpha = map(l, 0, 10, 0, 50);
      var dynRed = map(abs(vertices[i].x), 0, width/2, 50, 155);
      var dynGreen = map(abs(vertices[i].x), 0, width/2, 100, 155);
      var dynBlue = map(abs(vertices[i].y), 0, height/2, 50, 155);
      fill(dynRed, dynGreen, dynBlue, alpha);
      ellipse(vertices[i].x, vertices[i].y, size, size);
    }
  }
}

function keyPressed() {
  if (keyCode === 32) {
    if (looping) {noLoop(); looping = false;} else {loop(); looping = true;}
  }
}