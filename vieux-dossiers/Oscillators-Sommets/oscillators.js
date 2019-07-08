//----------------------------------Première nuit géométrique------------------------------//

//Formule magique. 1000 itérations.
var osc0001 = new Oscillator(function(i, sum) {
    var m = sin((drawCount - sum) / 20) / 100;
    t = i / 10;
    return {
        x: cos(t) * sin(t / 2) * (sin(t * (2 + m)) / 4) * 2400 * i / 1000,
        y: pow(sin(t / 2), 3) * cos(t / 20) * 350
    };
});

//Recreation of osc0001 to make it work with 3000 iterations instead of 1000.
var osc0001b = new Oscillator(function(i, sum) {
    var m = sin((drawCount - sum) / 20) / 100;
    t = i / 30;
    return {
        x: cos(t) * sin(t / 2) * (sin(t * (2 + m)) / 4) * 2400 * i / 1000 / 3,
        y: pow(sin(t / 2), 3) * cos(t / 20) * 350
    };
});

//Formule modifiée - magique 2. 1000 itérations.
var osc0002 = new Oscillator(function(i, sum) {
    var m = sin((drawCount - sum) / 20) / 100;
    t = i / 10;
    return {
        x: sin(t * (2 + m)) * 400 * i / 1000,
        y: sin(t * (-2 + m)) * 350
    };
});

//Recréation de osc0002 pour qu'il fonctionne avec 3000 itérations au lieu de 1000.
var osc0002b = new Oscillator(function(i, sum) {
    var m = sin((drawCount - sum) / 20) / 100;
    t = i / 30;
    return {
        x: sin(t * (2 + m)) * 400 * i / 1000 / 3,
        y: sin(t * (-2 + m)) * 350
    };
});

//Spirale en toupie horizontale. 1000 itérations.
var osc0003 = new Oscillator(function(i, sum) {
    var m = sin((drawCount - sum) / 20) / 100;
    t = i / 10;
    return {
        x: sin(t * (2 + m)) * 400 * i / 1000,
        y: cos(t * (2 + m)) * sin(t * (4 * m)) * 350
    };
});

//Recréation de osc0003 pour qu'il fonctionne avec 3000 itérations au lieu de 1000.
var osc0003b = new Oscillator(function(i, sum) {
    var m = sin((drawCount - sum) / 20) / 100;
    t = i / 30;
    return {
        x: sin(t * (2 + m)) * 400 * i / 1000 /  3,
        y: cos(t * (2 + m)) * sin(t * (4 * m)) * 350
    };
});

//Formule modifiée - Spirale extra-magique 2. 1000 itérations.
var osc0004 = new Oscillator(function(i, sum) {
    var m = sin((drawCount - sum) / 20) / 100;
    t = i / 10;
    return {
        x: sin(t * (2 + m)) * sin(t * (2 * m)) * 400 * i / 1000,
        y: cos(t * (2 + m)) * sin(t * (2 * m)) * 350
    };
});

//Recreation of osc0004 to make it work with 3000 iterations instead of 1000.
var osc0004b = new Oscillator(function(i, sum) {
    var m = sin((drawCount - sum) / 20) / 100;
    t = i / 30;
    return {
        x: sin(t * (2 + m)) * sin(t * (2 * m)) * 400 * i / 1000 / 3,
        y: cos(t * (2 + m)) * sin(t * (2 * m)) * 350
    };
});

//Formule modifiée - Juste débile. 1000 itérations.
var osc0005 = new Oscillator(function(i, sum) {
    var m = sin((drawCount - sum) / 20) / 100;
    t = i / 10;
    return {
        x: sin(t * (2 + m)) * sin(t * (m / 2)) * 800 * i / 1000,
        y: cos(t * (2 + m)) * sin(t * (2 * m)) * 350
    };
});

//Recreation of osc0005 to make it work with 3000 iterations instead of 1000.
var osc0005b = new Oscillator(function(i, sum) {
    var m = sin((drawCount - sum) / 20) / 100;
    t = i / 30;
    return {
        x: sin(t * (2 + m)) * sin(t * (m / 2)) * 800 * i / 1000 / 3,
        y: cos(t * (2 + m)) * sin(t * (2 * m)) * 350
    };
});

//Formule modifiée - Intéressant! 1000 itérations.
var osc0006 = new Oscillator(function(i, sum) {
    var m = sin((drawCount - sum) / 20) / 100;
    t = i / 10;
    return {
        x: sin(t * (2 + m)) * cos(t * (4 * m)) * 800 * i / 1000,
        y: cos(t * (2 + m)) * cos(t * (2 * m)) * 350
    };
});

//Recreation of osc0006 to make it work with 3000 iterations instead of 1000.
var osc0006b = new Oscillator(function(i, sum) {
    var m = sin((drawCount - sum) / 20) / 100;
    t = i / 30;
    return {
        x: sin(t * (2 + m)) * cos(t * (4 * m)) * 800 * i / 1000 / 3,
        y: cos(t * (2 + m)) * cos(t * (2 * m)) * 350
    };
});

//Spirale en toupies entrelacées. 1000 itérations.
var osc0007 = new Oscillator(function(i, sum) {
    var m = sin((drawCount - sum) / 20) / 100;
    t = i / 10;
    return {
        x: sin(t * (2 + m)) * cos(t * (m / 4)) * 800 * i / 1000,
        y: cos(t * (2 + m)) * cos(t * (m / 4)) * 350
    };
});

//Spirale envoûtante. 1000 itérations.
var osc0008 = new Oscillator(function(i, sum) {
    var m = sin((drawCount - sum) / 20) / 100;
    t = i / 10;
    return {
        x: sin(t * (2 + m)) * asin(t * (m / 4)) * 800 * i / 1000,
        y: cos(t * (2 + m)) * asin(t * (m / 4)) * 350
    };
});

//Formule modifiée - Pas mal cool.1000 itérations.
var osc0009 = new Oscillator(function(i, sum) {
    var m = sin((drawCount - sum) / 20) / 100;
    t = i / 10;
    return {
        x: sin(t * (2 + m)) * asin(t * (m / 4)) * 800 * i / 1000,
        y: cos(t * (2 + m)) * asin(t * (m / 4)) * (sin(t * (m)) * m * 20) * 350
    };
});

//Formule modifiée - Pas mal cool aussi.1000 itérations.
var osc0010 = new Oscillator(function(i, sum) {
    var m = sin((drawCount - sum) / 20) / 100;
    t = i / 10;
    return {
        x: sin(t * (2 + m)) * asin(t * (m / 4)) * 800 * i / 1000,
        y: cos(t * (2 + m)) * asin(t * (m / 4)) * (sin(t * (m)) * t * m * 10) * 350
    };
});

//Formule modifiée - Nouvelle spirale rotative (débile!). 1000 itérations.
var osc0011 = new Oscillator(function(i, sum) {
    var m = sin((drawCount - sum) / 20) / 100;
    t = i / 10;
    return {
        x: sin(t * (-5 + m)) * asin(t * (m / 4)) * 800 * i / 1000,
        y: cos(t * (-5 + m)) * asin(t * (m / 4)) * (sin(t * (m)) * t * m * 1) * 350
    };
});

//Formule modifiée - Beauté. - JUSQU'ICI, 1000 ITÉRATIONS.
var osc0012 = new Oscillator(function(i, sum) {
    var m = sin((drawCount - sum) / 20) / 100;
    t = i / 10;
    return {
        x: sin(t * (-5 + m)) * asin(t * (m / 4)) * 800 * i / 1000,
        y: cos(t * (10 + m)) * asin(t * (m / 4)) * (sin(t * (m)) * t * m * 1) * 350
    };
});

//Recreation of osc0012 to make it work with 3000 iterations instead of 1000.
var osc0012b = new Oscillator(function(i, sum) {
    var m = sin((drawCount - sum) / 20) / 100;
    t = i / 30;
    return {
        x: sin(t * (-5 + m)) * asin(t * (m / 4)) * 800 * i / 3000,
        y: cos(t * (10 + m)) * asin(t * (m / 4)) * (sin(t * (m)) * t * m * 1) * 350
    };
});

//Formule modifiée - Débile avec 3000 itérations.
var osc0013 = new Oscillator(function(i, sum) {
    var m = sin((drawCount - sum) / 700) / 5;
    t = i / 60;
    return {
        x: sin(t * (-5 + m)) * asin(t * (m / 4)) * 800 * i / 1000,
        y: tan(t * (-5 + m)) * asin(t * (m / 4)) * (sin(t * (m)) * t * m * 1) * 350
    };
});

//Formule modifiée - Variation avec 3000 itérations.
var osc0014 = new Oscillator(function(i, sum) {
    var m = sin((drawCount - sum) / 700) / 5;
    t = i / 60;
    return {
        x: sin(t * (-5 + m)) * asin(t * (m / 4)) * 800 * i / 1000,
        y: tan(t * (-5 + m)) * asin(t * (m / 4)) * (tan(t * (m)) * t * m * 1) * 350
    };
});

//Formule modifiée - Fou dans la tête.
var osc0015 = new Oscillator(function(i, sum) {
    var m = sin((drawCount - sum) / 700) / 5;
    t = i / 60;
    return {
        x: tan(t * (-5 + m)) * asin(t * (m / 4)) * 800 * i / 1000,
        y: tan(t * (-5 + m)) * asin(t * (m / 4)) * (tan(t * (m)) * t * m * 1) * 350
    };
});

//Formule modifiée - Fou dans la tête 2.
var osc0016 = new Oscillator(function(i, sum) {
    var m = sin((drawCount - sum) / 700) / 5;
    t = i / 60;
    return {
        x: tan(t * (-5 + m)) * asin(t * (m / 4)) * 800 * i / 1000,
        y: tan(t * (5 + m)) * asin(t * (m / 4)) * (tan(t * (m)) * t * m * 1) * 350
    };
});

//Formule modifiée - Incroyable.
var osc0017 = new Oscillator(function(i, sum) {
    var m = sin((drawCount - sum) / 700) / 5;
    t = i / 60;
    return {
        x: tan(t * (-5 + m)) * asin(t * (m / 4)) * 800 * i / 1000,
        y: tan(t * (5 + m)) * asin(t * (m / 4)) * 350
    };
});

// //Formule modifiée - Autre incroyable.
var osc0018 = new Oscillator(function(i, sum) {
    var m = sin((drawCount - sum) / 700) / 5;
    t = i / 60;
    return {
        x: tan(t * (-5 + m)) * asin(t * (m / 4)) * 800 * i / 1000,
        y: sin(t * (5 + m)) * asin(t * (m / 4)) * 550
    };
});

//Formule modifiée - Autre incroyable - zoomé.
var osc0019 = new Oscillator(function(i, sum) {
    var m = sin((drawCount - sum) / 700) / 5;
    t = i / 60;
    return {
        x: tan(t * (-5 + m)) * asin(t * 10 * (m / 4)) * 800 * i / 1000,
        y: sin(t * (5 + m)) * asin(t * 10 * (m / 4)) * 550
    };
});

//Formule modifiée - Folle spirale.
var osc0020 = new Oscillator(function(i, sum) {
    var m = sin((drawCount - sum) / 700) / 5;
    t = i / 60;
    return {
        x: sin(t * (-5 + m)) * asin(t * 10 * (m / 4)) * 800 * i / 1000,
        y: sin(t * (5 + m)) * asin(t * 10 * (m / 4)) * 550
    };
});

//Formule modifiée - Folle spirale plus lente.
var osc0021 = new Oscillator(function(i, sum) {
    var m = sin((drawCount - sum) / 700) / 5;
    t = i / 60;
    return {
        x: sin(t * (-5 + m)) * asin(t * 4 * (m / 4)) * 800 * i / 1000,
        y: sin(t * (5 + m)) * asin(t * 4 * (m / 4)) * 550
    };
});

//Formule modifiée - Spirale tordue folle.
var osc0022 = new Oscillator(function(i, sum) {
    var m = sin((drawCount - sum) / 700) / 5;
    t = i / 60;
    return {
        x: sin(t * (-15 + m)) * asin(t * 4 * (m / 4)) * 800 * i / 1000,
        y: sin(t * (5 + m)) * asin(t * 4 * (m / 4)) * 550
    };
});

//La meilleure scène de tout le film à mon avis.
//Formule modifiée - Spirale étrange.
var osc0023 = new Oscillator(function(i, sum) {
    var m = sin((drawCount - sum) / 700) / 5;
    t = i / 60;
    return {
        x: sin(t * (-15 + m)) * asin(t * 4 * (m / 4)) * 800 * i / 1000,
        y: sin(t * (15 + m)) * asin(t * 4 * (m / 4)) * 550
    };
});

//Formule modifiée - Holy shit un autre.
var osc0024 = new Oscillator(function(i, sum) {
    var m = sin((drawCount - sum) / 700) / 5;
    t = i / 60;
    return {
        x: sin(t * (-5 + m)) * asin(t * 4 * (m / 4)) * 800 * i / 1000,
        y: sin(t * (15 + m)) * asin(t * 4 * (m / 4)) * 550
    };
});

//Formule modifiée - Ouais.
var osc0025 = new Oscillator(function(i, sum) {
    var m = sin((drawCount - sum) / 700) / 5;
    t = i / 60;
    return {
        x: sin(t * (-5 + m)) * asin(t * 4 * (m / 4)) * 800 * i / 1000,
        y: sin(t * (15 + (m * 2))) * asin(t * 4 * (m / 4)) * 550
    };
});

//Formule modifiée - Ouais 2.
var osc0026 = new Oscillator(function(i, sum) {
    var m = sin((drawCount - sum) / 700) / 5;
    t = i / 60;
    return {
        x: cos(t * (-5 + m)) * asin(t * 4 * (m / 4)) * 800 * i / 1000,
        y: sin(t * (15 + (m * 5))) * asin(t * 4 * (m / 4)) * 550
    };
});

//Formule modifiée - Un peu de variété.
var osc0027 = new Oscillator(function(i, sum) {
    var m = sin((drawCount - sum) / 700) / 5;
    t = i / 320;
    return {
        x: cos(t * (-5 + (m / 20))) * cos(t * 4 * (m / 4)) * 800 * i / 1000,
        y: sin(t * (15 + (m * 50))) * sin(t * 4 * (m / 4)) * 550
    };
});

//Formule modifiée - Belle tangeante.
var osc0028 = new Oscillator(function(i, sum) {
    var m = sin((drawCount - sum) / 700) / 5;
    t = i / 320;
    return {
        x: sin(t * (-5 + (m / 20))) * cos(t * 4 * (m / 4)) * 200 * i / 1000,
        y: tan(t * (4.5 + (m * 10))) * sin(t * 4 * (m / 4)) * 550
    };
});

//Formule modifiée - Tangeante délirante.
var osc0029 = new Oscillator(function(i, sum) {
    var m = sin((drawCount - sum) / 700) / 5;
    t = i / 320;
    return {
        x: atan(t * (-50 + (m / 20))) * cos(t * 40 * (m)) * 200 * i / 1000,
        y: tan(t * (4.5 + (m * 10))) * tan(t * 4 * (m / 4)) * 550
    };
});

//Formule modifiée
var osc0030 = new Oscillator(function(i, sum) {
    var m = sin((drawCount - sum) / 700) / 5;
    t = i / 320;
    return {
        x: atan(t * (-50 + (m / 20))) * asin(t * 4 * (m / 4)) * 400 * i / 1000,
        y: tan(t * (4.5 + (m * 10))) * asin(t * 4 * (m / 4)) * 50
    };
});


//Formule modifiée - La chose la plus hot au monde. 1000 itérations.  
var osc0031 = new Oscillator(function(i, sum) {
    var m = sin((drawCount - sum) / 700) / 5;
    t = i / 10;
    return {
        x: sin(t * (2 + m)) * cos(t * (m / 4)) * 800 * i / 1000,
        y: cos(t * (2 + m)) * cos(t * (m / 4)) * 350
    };
});

//Recreation of osc0031 to make it work with 3000 iterations instead of 1000.
var osc0031b = new Oscillator(function(i, sum) {
    var m = sin((drawCount - sum) / 700) / 5;
    t = i / 30;
    return {
        x: sin(t * (2 + m)) * cos(t * (m / 4)) * 800 * i / 3000,
        y: cos(t * (2 + m)) * cos(t * (m / 4)) * 350
    };
});

var triangles = new Oscillator(function(i, sum) {
    var m = sin((drawCount - sum) / 70) / 50;
    t = i / 50;
    return {
        x: 500 * sin(t * 3 * (2 + m)) * pow(cos(t * 2), 1.5) * i / 2000,
        y: 350 * sin(t * 2) * pow(sin(t * 2), 4)
    };
});


//----------------------------------Deuxième nuit géométrique------------------------------//

var liquefieur = new Oscillator(function(i, sum) {
    var m = sin((drawCount - sum) / 300) / 5;
    t = i / 2;
    return {
        x: cos(t + (m * 10)) * 250 * t / 1000,
        y: sin(t + (m * 40)) * 250
    };
});

//High glitch
var highglitch = new Oscillator(function(i, sum) {
    var m = sin((drawCount - sum) / 700) / 5;
    t = i / 5;
    return {
        x: cos(t + (m * 10)) * cos(t * 2 / m * 20) * 250 * t / 500,
        y: sin(t + (m * 40)) * 250
    };
});

//High glitch 2 - Signal faible.
var highglitch2 = new Oscillator(function(i, sum) {
    var m = sin((drawCount - sum) / 700) / 5;
    t = i / 500;
    return {
        x: cos(t + (m * 10)) * cos(t * 4 / m * 20) * 450 * t / 5,
        y: sin(t + (m * 40)) * 350
    };
});

//High glitch 3 - Signal faible + tangente.
var highglitch3 = new Oscillator(function(i, sum) {
    var m = sin((drawCount - sum) / 700) / 5;
    t = i / 750;
    return {
        x: cos(t + (m * 10)) * cos(t * 4 / m * 20) * 450 * t / 5,
        y: sin(t + (m * 40)) * tan(t) * 350
    };
});

var champTangentes = new Oscillator(function(i, sum) {
    var m = sin((drawCount - sum) / 700) / 5;
    t = i / 750;
    return {
        x: cos(t + (m * 10)) * tan(t * 4 / m * 20) * 450 * t / 5,
        y: sin(t + (m * 40)) * cos(t * (2 + m)) * 350
    };
});


//Bruyant champ de tangentes 2 - champ roulé sur lui-même.
var champTangentes2 = new Oscillator(function(i, sum) {
    var m = sin((drawCount - sum) / 700) / 5;
    t = i / 2000;
    return {
        x: cos(t + (m * 10)) * tan(t * 4 / m * 2) * 450 * t / 5,
        y: sin(t + (m * 40)) * cos(t * (2 + m)) * 350
    };
});

//Bruyant champ de tangentes 3 - champ en forme de serpent.
var champTangentes3 = new Oscillator(function(i, sum) {
    var m = sin((drawCount - sum) / 700) / 5;
    t = i / 500;
    return {
        x: cos(t + (m * 10)) * lerp(tan(t + m), tan(t / m), 0.1) * 450 * t / 5,
        y: sin(t + (m * 40)) * 350
    };
});

// //Citron/losange intéressant.
var citronLosange = new Oscillator(function(i, sum) {
    var m = sin((drawCount - sum) / 700) / 5;
    t = i / 2;
    return {
        x: cos(t + (m * 50)) * 400 * t / 1000,
        y: pow(sin(t + (m * 50)), 3) * 350
    };
});

//Citron/losage intéressant 2.
var citronLosange2 = new Oscillator(function(i, sum) {
    var m = sin((drawCount - sum) / 700) / 5;
    t = i / 2;
    return {
        x: cos(t + (m * 50)) * 400 * t / 1000,
        y: pow(sin(t - (m * 50)), 3) * 350
    };
});


//Citron en ruban qui tourne sur lui-même
var citronEnRuban = new Oscillator(function(i, sum) {
    var m = sin((drawCount - sum) / 700) / 5;
    t = i / 2;
    return {
        x: cos(t + (m * 50)) * 400 * t / 1000,
        y: pow(sin(t - (m * 50)), 3) * cos(t) * 350
    };
});

//Citron en ruban qui tourne sur lui-même - Version débile.
var citronEnRuban2 = new Oscillator(function(i, sum) {
    var m = sin((drawCount - sum) / 700) / 5;
    t = i / 2;
    return {
        x: cos(t + (m * 50)) * tan(t) * 400 * t / 1000,
        y: pow(sin(t - (m * 50)), 3) * cos(t) * 350
    };
});

//Citron en ruban qui tourne sur lui-même - Version débile 2.
var citronEnRuban2b = new Oscillator(function(i, sum) {
    var m = sin((drawCount - sum) / 700) / 5;
    t = i / 2;
    return {
        x: cos(t + (m * 50)) * tan(t) * 400 * t / 1000,
        y: pow(sin(t - (m * 50)), 1) * cos(t) * 350
    };
});

//Citron en ruban qui tourne sur lui-même - Version fracturée.
var citronFrac = new Oscillator(function(i, sum) {
    var m = sin((drawCount - sum) / 700) / 5;
    t = i / 2;
    return {
        x: cos(t + (m * 50)) * tan(t) * 400 * t / 1000,
        y: pow(sin(t - (m * 50)), 0.5) * cos(t) * 350
    };
});

//Citron en ruban qui tourne sur lui-même - Version débile, var.1.
var citronVar1 = new Oscillator(function(i, sum) {
    var m = sin((drawCount - sum) / 700) / 5;
    t = i / 2;
    return {
        x: sin(t + (m * 50)) * tan(t + (m * 2)) * 400 * t / 1000,
        y: pow(sin(t - (m * 50)), 1) * cos(t) * 350
    };
});

//Citron en ruban qui tourne sur lui-même - Version débile, var. 2.
var citronVar2 = new Oscillator(function(i, sum) {
    var m = sin((drawCount - sum) / 700) / 5;
    t = i / 2;
    return {
        x: sin(t + (m * 50)) * lerp(tan(t + (m * 2)), sin(t), 0.9) * 400 * t / 1000,
        y: pow(sin(t - (m * 50)), 1) * cos(t) * 350
    };
});

//Citron en ruban qui tourne sur lui-même - Version débile, var. 3.
var citronVar3 = new Oscillator(function(i, sum) {
    var m = sin((drawCount - sum) / 700) / 5;
    t = i / 2;
    return {
        x: sin(t + (m * 50)) * lerp(tan(t + (m * 2)), cos(t), 0.9) * 400 * t / 1000,
        y: pow(sin(t - (m * 50)), 1) * cos(t) * 350
    };
});

//Citron en ruban qui tourne sur lui-même - Version débile, var. 4.
var citronVar4 = new Oscillator(function(i, sum) {
    var m = sin((drawCount - sum) / 700) / 5;
    t = i / 2;
    return {
        x: sin(t + (m * 50)) * lerp(tan(t + (m * 2)), cos(t), 0.9) * 400 * t / 1000,
        y: pow(sin(t - (m * 50)), 1) * 350
    };
});

//Citron en ruban qui tourne sur lui-même - Version débile. var. 5.
var citronVar5 = new Oscillator(function(i, sum) {
    var m = sin((drawCount - sum) / 700) / 5;
    t = i / 2;
    return {
        x: sin(t + (m * 50)) * lerp(tan(t + (m * 2)), cos(t), 0.9) * 400 * t / 1000,
        y: pow(sin(t - (m * 50)), 3) * 350
    };
});

//Citron en ruban qui tourne sur lui-même - Version débile. (Var 6.)
var citronVar6 = new Oscillator(function(i, sum) {
    var m = sin((drawCount - sum) / 700) / 5;
    t = i / 2;
    return {
        x: sin(t + (m * 50)) * lerp(tan(t + (m * 2)), cos(t), 0.9) * 400 * t / 1000,
        y: pow(sin(t - (m * 50)), 3) * 350
    };
});


//-----------------------La troisième nuit géométrique-----------------------\\

var nouvelleDimension = new Oscillator(function(i, sum) {
    var m = sin((drawCount - sum) / 700) / 5;
    t = i / 2;
    return {
        x: tan(t + (m * 50)) * 400 * t / 1000,
        y: pow(sin(t - (m * 50)), 3) * 350
    };
});


var nouvelleDimension2 = new Oscillator(function(i, sum) {
    var m = sin((drawCount - sum) / 700) / 5;
    t = i / 2;
    return {
        x: tan(t + (m * 50)) * 400 * t / 1000,
        y: pow(tan(t - (m * 50)), 3) * 350
    };
});



//Les tapis récursifs
var tapisRecursifs = new Oscillator(function(i, sum) {
    var m = sin((drawCount - sum) / 700) / 5;
    t = i / 2;
    return {
        x: sin(t + (m * 50)) * 400 * t / 1000,
        y: pow(tan(t - (m * 50)), 3) * 350
    };
});

//Les tapis récursifs 2
var tapisRecursifs2 = new Oscillator(function(i, sum) {
    var m = sin((drawCount - sum) / 700) / 5;
    t = i / 2;
    return {
        x: sin(t + (m * 50)) * 400 * t / 1000,
        y: pow(tan(t - (m * 50)), 3) * tan(t - m) * 350
    };
});

//Les murs
var lesMurs = new Oscillator(function(i, sum) {
    var m = sin((drawCount - sum) / 700) / 5;
    t = i / 2;
    return {
        x: sin(t + (m * 50)) * cos(t + m) * 400 * t / 1000,
        y: pow(tan(t - (m * 50)), 3) * sin(t - m) * 350
    };
});


//Les tapis déroulants
var tapisDeroulants = new Oscillator(function(i, sum) {
    var m = sin((drawCount - sum) / 700) / 5;
    t = i / 2;
    return {
        x: (sin(t + (m * 50)) * 5) * pow(cos(t + m), 3) * 400 * t / 1000,
        y: pow(tan(t - (m * 50)), 3) * sin(t - m) * 350
    };
});

//Les plantes formidables
var plantesFormidables = new Oscillator(function(i, sum) {
    var m = sin((drawCount - sum) / 700) / 5;
    t = i / 100;
    return {
        x: (sin(t + (m * 50)) * 5) * (cos(t - m) / m) * 400 * t / 1000,
        y: pow(tan(t - (m * 50)), 3) * sin(t - m) * 350
    };
});


//Les plantes formidables II (Moins bon.)
var plantesFormidables2 = new Oscillator(function(i, sum) {
    var m = sin((drawCount - sum) / 700) / 5;
    t = i / 100;
    return {
        x: (sin(t + (m * 50)) * 5) * (tan(t - m) / m) * 400 * t / 1000,
        y: pow(tan(t - (m * 50)), 3) * sin(t - m) * tan(t) * 350
    };
});


//Ah!
var ah = new Oscillator(function(i, sum) {
    var m = sin((drawCount - sum) / 700) / 5;
    t = i / 50;
    return {
        x: (tan(t + (m * 60)) / 2) * 1600 * t / 200,
        y: sin(t - m) * 350
    };
});

//Le cracheur
var cracheur = new Oscillator(function(i, sum) {
    var m = sin((drawCount - sum) / 700) / 5;
    t = i / 50;
    return {
        x: tan(cos(tan((t / 1) + (m * 10)) + (m * 10)) + (m * 10)) * 600 * t / 200,
        y: tan(t + m) * 350
    };
});

//Le cracheur 2
var cracheur2 = new Oscillator(function(i, sum) {
    var m = sin((drawCount - sum) / 700) / 5;
    t = i / 50;
    return {
        x: tan(cos(tan((t / 1) + (m * 10)) + (m * 10)) + (m * 10)) * 600 * t / 200,
        y: tan(t + m) * 350
    };
});


//L'éventail
var eventail = new Oscillator(function(i, sum) {
    var m = sin((drawCount - sum) / 700) / 5;
    t = i / 50;
    return {
        x: tan(cos(tan((t / 1) + (m * 1)) + (m * 100)) + (m * 1)) * 1200 * t / 200,
        y: tan(t + m) * 350
    };
});

//L'éventail problématique
var eventailProblematique = new Oscillator(function(i, sum) {
    var m = sin((drawCount - sum) / 700) / 5;
    t = i / 50;
    return {
        x: tan(cos(tan((t / 1) + (m * 50)) + (m * 100)) + (m * 1)) * 1200 * t / 200,
        y: tan(t + m) * 350
    };
});



//Vers dansants
var versDansants = new Oscillator(function(i, sum) {
    var m = sin((drawCount - sum) / 700) / 5;
    t = i / 50;
    return {
        x: cos(cos(cos((t / 1) + (m * 500)) + (m * 100)) + (m * 1)) * 1200 * t / 200,
        y: tan(t + m) * 350
    };
});

//La courge molle
var courgeMolle = new Oscillator(function(i, sum) {
    var m = sin((drawCount - sum) / 700) / 5;
    t = i / 50;
    return {
        x: cos(cos(cos((t / 1) + (m * 500)) + (m * 100)) + (m * 1)) * sin(t) * 1200 * t / 200,
        y: cos(t + m) * 350
    };
});


//La courge molle 2
var courgeMolle2 = new Oscillator(function(i, sum) {
    var m = sin((drawCount - sum) / 700) / 5;
    t = i / 50;
    return {
        x: cos(cos(cos((t / 1) + (m * 500)) + (m * 100)) + (m * 100)) * sin(t) * 1200 * t / 200,
        y: cos(t + m) * 350
    };
});


//Rideaux
var rideaux = new Oscillator(function(i, sum) {
    var m = sin((drawCount - sum) / 700) / 5;
    t = i / 50;
    return {
        x: cos(cos(cos((t / 1) + (m * 500)) + (m * 100)) + (m * 100) / m) * sin(t) * 1200 * t / 150,
        y: tan(t + (m * 10)) * 350
    };
});

//Rideaux 2
var rideaux2 = new Oscillator(function(i, sum) {
    var m = sin((drawCount - sum) / 700) / 5;
    t = i / 50;
    return {
        x: cos(cos(cos((t / 1) + (m * 500)) + (m * 100)) + (m * 100) / m) * sin(t + (m * 100)) * 1200 * t / 150,
        y: tan(t + (m * 10)) * 350
    };
});


//Rideaux 3
var rideaux3 = new Oscillator(function(i, sum) {
    var m = sin((drawCount - sum) / 700) / 5;
    t = i / 50;
    return {
        x: cos(tan(sin((t / 1) + (m * 500)) + (m * 100)) + (m * 100) / m) * sin(t + (m * 100)) * 1200 * t / 150,
        y: tan(t + (m * 10)) * 350
    };
});




//Les tapis récursifs
var nouveauxTapisRecursifs = new Oscillator(function(i, sum) {
    var m = sin((drawCount - sum) / 700) / 5;
    t = i / 25;
    return {
        x: sin(t + (m * 1)) * 8200 * t / 150,
        y: cos(t + (m * 1)) * cos(t * (m * 5)) * sin(t + (m * 1)) * 8500
    };
});
// t = i/25;
// x = sin(t+(m*1)) * 8200 * t/150;
// y = cos(t+(m*1)) * cos(t*(m*5)) * sin(t+(m*1)) * 8500;


//--------------------------------------------------------------------------------------------------//
//--------------------------------------------------------------------------------------------------//
//--------------------------------Nuit du 16 août 2016, 3-------------------------------------------//
//--------------------------------------------------------------------------------------------------//
//--------------------------------------------------------------------------------------------------//



var osc0015b = new Oscillator(function(i, sum) {
    var m = sin((drawCount - sum) / 700) / 5;
    t = i / 60;
    return {
        x: cos(tan(t * (-5 + m))) * asin(t * (m / 4)) * 800 * i / 1000,
        y: sin(tan(t * (-5 + m))) * asin(t * (m / 4)) * (tan(t * (m)) * t * m * 1) * 350
    };
});

var grandlointain = new Oscillator(function(i, sum) {
    var m = sin((drawCount - sum) / 700) * 2;
    t = i / 30;
    // t = sin(i);
    var z = 20 + sin(m / 10) * 100;
    return {
        x: asin(constrain((t + m + i / 10000), -1, 1)) * tan(t + m * 15) * cos(t + m) * i / z,
        y: asin(constrain((t + m + i / 10000), -1, 1)) * tan(t + m * 15) * sin(t + m) * i / z
    };
});

var grandlointain2 = new Oscillator(function(i, sum) {
    var m = sin((drawCount - sum) / 700) * 2;
    t = i / 30;
    // t = sin(i);
    var z = 20 + sin(m / 10) * 100;
    return {
        x: asin(constrain((t * m * i), -1, 1)) * tan(t + m * 15) * cos(t + m) * i / z,
        y: asin(constrain((t * m * i), -1, 1)) * sin(t + m * 15) * tan(t + m) * i / z
    };
});

var grandlointain3 = new Oscillator(function(i, sum) {
    var m = sin((drawCount - sum) / 700) * 2;
    t = i / 10;
    // t = sin(i);
    var z = 20 + sin(m / 10) * 100;
    return {
        x: asin(constrain((t * m * i), -1, 1)) * tan(t + m * 15) * cos(t + m) * i / z,
        y: asin(constrain((t * m * i), -1, 1)) * tan(t + m) * i / z
    };
});

var grandlointain4 = new Oscillator(function(i, sum) {
    var m = sin((drawCount - sum) / 700) * 2;
    t = i / 10;
    // t = sin(i);
    var z = 20 + sin(m / 10) * 100;
    return {
        x: atan(constrain((z * m * i), -1, 1)) * sin(t + m * 35) * cos(t + m) * i / z,
        y: atan(constrain((z * m * i), -1, 1)) * tan(t + m * 5) * i / z
    };
});

var grandlointain5 = new Oscillator(function(i, sum) {
    var m = sin((drawCount - sum) / 700) * 2;
    t = i / 10;
    // t = sin(i);
    var z = 20 + sin(m / 10) * 100;
    return {
        x: sin(t + m * 35) * cos(t + m) * i / z,
        y: tan(t + m * 5) * i / z
    };
});

var grandlointain6 = new Oscillator(function(i, sum) {
    var m = sin((drawCount - sum) / 700) * 2;
    t = i / 10;
    // t = sin(i);
    var z = 20 + sin(m / 10) * 100;
    return {
        x: sin(t + m * 35) * tan(t + m) * i / z,
        y: tan(t + m * 5) * i / z
    };
});

var grandlointain7 = new Oscillator(function(i, sum) {
    var m = sin((drawCount - sum) / 700) * 2;
    t = i / 10;
    // t = sin(i);
    var z = 20 + sin(m / 20) * 100;
    return {
        x: sin(t + m * 35) * tan(t + m) * i / z,
        y: tan(t + m * 5) * i / z
    };
});

var grandlointain8 = new Oscillator(function(i, sum) {
    var m = sin((drawCount - sum) / 700) * 2;
    t = i / 10;
    // t = sin(i);
    var z = 20 + sin(m / 20) * 100;
    return {
        x: tan(t + m * 35) * tan(t + m) * i / z,
        y: tan(t + m * 5) * i / z
    };
});

var grandlointain9 = new Oscillator(function(i, sum) {
    var m = sin((drawCount - sum) / 2700) * 2;
    t = i / 10;
    // t = sin(i);
    var z = 20 + sin(m / 2) * 100;
    var zz = 20 + sin(m * 1) * 100;
    return {
        x: tan(t + m * 35) * cos(t + m) * i / z * 2,
        y: cos(t + zz * 1) * i / zz * 3
    };
});

var grandlointain10 = new Oscillator(function(i, sum) {
    var m = sin((drawCount - sum) / 2700) * 2;
    t = i / 10;
    // t = sin(i);
    var z = 20 + sin(m / 2) * 100;
    var zz = 20 + sin(m * 1) * 100;
    return {
        x: tan(t + m * 35) * cos(t + m) * i / z * 2,
        y: tan(sin(t + zz * 1)) * i / zz * 3
    };
});

var grandlointain11 = new Oscillator(function(i, sum) {
    var m = sin((drawCount - sum) / 2700) / 10;
    t = i / 10;
    // t = sin(i);
    var z = 20 + sin(m / 2) * 100;
    var zz = 20 + sin(m * 1) * 100;
    return {
        x: tan(tan(t + m * 35)) * tan(tan(cos(t + m))) * i / z * 1.5,
        y: tan(sin(t + zz * 1)) * asin(t * (m / 4)) * i / zz * 2
    };
});

var grandlointain12 = new Oscillator(function(i, sum) {
    var m = sin((drawCount - sum) / 2700) / 10;
    t = i / 10;
    // t = sin(i);
    var z = 20 + sin(m / 2) * 100;
    var zz = 20 + sin(m * 1) * 100;
    return {
        x: tan(tan(t + m * 35)) * i / z * 1.5,
        y: tan(sin(t + zz * 1)) * asin(t * (m / 4)) * i / zz * 2
    };
});

var grandlointain13 = new Oscillator(function(i, sum) {
    var m = sin((drawCount - sum) / 700) / 10;
    t = i / 40;
    // t = sin(i);
    var z = 20 + sin(m / 2) * 100;
    var zz = 20 + sin(m * 1) * 100;
    return {
        x: tan(tan(t + m * 35)) * i / z * 1.5,
        y: tan(sin(t + zz * 1)) * i / zz * 2
    };
});

var grandlointain14 = new Oscillator(function(i, sum) {
    var m = sin((drawCount - sum) / 700) / 10;
    t = i / 40;
    // t = sin(i);
    var z = 20 + sin(m / 2) * 100;
    var zz = 20 + sin(m * 1) * 100;
    return {
        x: tan(cos(t + m * 35)) * i / z * 1.5,
        y: tan(sin(t + zz * 1)) * i / zz * 2
    };
});

var grandlointain15 = new Oscillator(function(i, sum) {
    var m = sin((drawCount - sum) / 700) / 10;
    t = i / 40;
    // t = sin(i);
    var z = 20 + sin(m / 2) * 100;
    var zz = 20 + sin(m * 1) * 100;
    return {
        x: pow(sin(tan(cos(t + z * 5))), 3) * t * 2,
        y: pow(sin(tan(sin(t + zz * 5))), 3) * i / zz * 1.5
    };
});

var grandlointain16 = new Oscillator(function(i, sum) {
    var m = sin((drawCount - sum) / 700) / 10;
    var t = i / 40;
    // t = sin(i);
    var z = 20 + sin(m / 2) * 100;
    var zz = 20 + sin(m * 1) * 100;

    var x = pow(sin(tan(cos(t + z * 5))), 3) * t * 2;
    var y = pow(sin(tan(sin(t + zz * 5))), 3) * i / zz * 1.5;

    var m = sin((drawCount - sum) / 20) * 1;
    var tt = i / 10;
    var xx = tan(cos(tan(t * m))) * m * 200;
    var yy = tan(sin(tan(t * m))) * i / 15;

    return {
        x: lerp(x, xx, 0.01) * 1.5,
        y: lerp(y, yy, 0.01) * 1.5
    };

});





//--------------------------------Nuit du 16 août 2016, 2-------------------------------------------//
var osc0012c = new Oscillator(function(i, sum) {
    var m = sin((drawCount - sum) / 40) / 100;
    t = i / 30;
    return {
        x: cos(t) / (cos(t * (m)) * t * m * 1) * 145,
        y: sin(t * (-5 + m)) * asin(t * (m / 4)) * 800 * i / 1800
    };
});

var osc0012d = new Oscillator(function(i, sum) {
    var m = sin((drawCount - sum) / 40) / 100;
    t = i / 30;
    return {
        x: cos(t) / (cos(t * m) * t * m * 1) * 145,
        y: sin(t) * asin(t * (m / 4)) * 800 * i / 1800
    };
});

var osc0012e = new Oscillator(function(i, sum) {
    var m = sin((drawCount - sum) / 40) / 200;
    t = i / 30;
    return {
        x: cos(t) / (cos(t * m) * t * m * 1) * i / 15,
        y: sin(t) * asin(t * (m / 4)) * 800 * i / 800
    };
});

var osc0012f = new Oscillator(function(i, sum) {
    var m = sin((drawCount - sum) / 40) / 200;
    t = i / 30;
    return {
        x: cos(t) / (cos(t * m) * t * m * 1) * i / 15,
        y: tan(t) * asin(t * (m / 4)) * 800 * i / 800
    };
});

var osc0012g = new Oscillator(function(i, sum) {
    var m = sin((drawCount - sum) / 140) / 200;
    t = i / 10;
    return {
        x: cos(t) / (sin(t * m) * t * m * 1) * i / 15000,
        y: tan(t) / asin(t * (m / 4)) * 800 * i / 800000
    };
});

var osc0012h = new Oscillator(function(i, sum) {
    var m = sin((drawCount - sum) / 140) / 2000;
    t = i / 10;
    return {
        x: cos(t) / (sin(t * m) * t * m * 1) * i / 15000,
        y: tan(t) / cos(t * m) * t * 800 * i / 800000
    };
});

var osc0012i = new Oscillator(function(i, sum) {
    var m = sin((drawCount - sum) / 140) / 2000;
    t = i / 10;
    return {
        x: cos(t) / (sin(t * m) * t * m * 1) * i / 15000,
        y: sin(t) / cos(t * m) * t * 800 * i / 800000
    };
});
//--------------------------------Nuit du 16 août 2016-------------------------------------------//

var osc0011b = new Oscillator(function(i, sum) {
    var m = sin((drawCount - sum) / 50) / 100;
    t = i / 10;
    return {
        x: tan(t * (-5 + m)) * asin(t * (m / 4)) * 800 * i / 1000,
        y: cos(t * (-5 + m)) * asin(t * (m / 4)) * (sin(t * (m)) * t * m * 1) * 350
    };
});

var osc0011c = new Oscillator(function(i, sum) {
    var m = sin((drawCount - sum) / 150) / 100;
    t = i / 10;
    return {
        x: tan(t * (-5 + m)) / asin(t * (m / 4)) * 800 * i / 20000,
        y: cos(t * (-5 + m)) * asin(t * (m / 4)) * (sin(t * (m)) * t * m * 1) * 350
    };
});

var osc0011d = new Oscillator(function(i, sum) {
    var m = sin((drawCount - sum) / 150) / 100;
    t = i / 10;
    return {
        x: tan(t * (-5 + m)) / asin(t * (m / 4)) * 800 * i / 20000,
        y: cos(t * (-5 + m)) * asin(t * (m / 4)) / (sin(t * (m)) * t * m * 1) * 350
    };
});

var osc0011e = new Oscillator(function(i, sum) {
    var m = sin((drawCount - sum) / 150) / 100;
    t = i / 10;
    return {
        x: cos(t * (-5 + m)) / asin(t * (m / 4)) * 800 * i / 20000,
        y: tan(t * (-5 + m)) * asin(t * (m / 4)) / (sin(t * (m)) * t * m * 1) * 350
    };
});

var osc0011f = new Oscillator(function(i, sum) {
    var m = sin((drawCount - sum) / 150) / 100;
    t = i / 10;
    return {
        x: cos(t * (-5 + m)) * asin(t * (m / 4)) * 800 * i / 2000,
        y: tan(t * (-5 + m)) * asin(t * (m / 4)) / (sin(t * (m)) * t * m * 1) * 350
    };
});

var osc0011g = new Oscillator(function(i, sum) {
    var m = sin((drawCount - sum) / 150) / 100;
    t = i / 10;
    return {
        x: cos(t * (-5 + m)) * asin(t * (m / 4)) * 800 * i / 2000,
        y: tan(t * (-5 + m)) / asin(t * (m / 4)) / (sin(t * (m)) * t * m * 1) * 50
    };
});

var osc0011h = new Oscillator(function(i, sum) {
    var m = sin((drawCount - sum) / 150) / 100;
    t = i / 10;
    return {
        x: tan(t * (-5 + m)) * asin(t * (m / 4)) * 800 * i / 2000,
        y: sin(t * (-5 + m)) / asin(t * (m / 4)) / (tan(t * (m)) * t * m * 1) * 50
    };
});

var osc0011i = new Oscillator(function(i, sum) {
    var m = sin((drawCount - sum) / 150) / 100;
    t = i / 10;
    return {
        x: tan(t * (-5 + m)) * asin(t * (m / 4)) * 800 * i / 2000,
        y: sin(t * (-5 + m)) - acos(t * (m / 4)) / (tan(t * (m)) * t * m * 1) * 50 + 300
    };
});

var osc0011j = new Oscillator(function(i, sum) {
    var m = sin((drawCount - sum) / 150) / 100;
    t = i / 10;
    return {
        x: tan(t * (-5 + m)) * asin(t * (m / 4)) * 800 * i / 2000,
        y: sin(t * (-5 + m)) - acos(t * (m / 4)) + (tan(t * (m)) * t * m * 1) * 50
    };
});

var osc0011k = new Oscillator(function(i, sum) {
    var m = sin((drawCount - sum) / 150) / 100;
    t = i / 10;
    return {
        x: tan(t * (-5 + m)) * asin(t * (m / 8)) * 800 * i / 2000,
        y: tan(sin(t * (-5 + m)) / tan(t * (m / 8))) + (tan(t * (m)) * t * m * 1) * 50
    };
});

var osc0011l = new Oscillator(function(i, sum) {
    var m = sin((drawCount - sum) / 150) / 100;
    t = i / 10;
    return {
        x: tan(t * (-5 + m)) + asin(t * (m / 8)) * 800 * i / 2000,
        y: tan(sin(t * (-5 + m)) / tan(t * (m / 8))) * (tan(t * (m)) * t * m * 1) * 50
    };
});

//-----------------------------------Le champ des possibles------------------------------------//

var osc0008b = new Oscillator(function(i, sum) {
    var m = sin((drawCount - sum) / 70) / 50;
    t = i / 10;
    return {
        x: sin(t * (2 + m)) * asin(constrain((t * (m / 4)), -1, 1)) * 300 * i / 1000 / 3,
        y: cos(t * (2 + m)) * asin(constrain((t * (m / 4)), -1, 1)) * 450 / 2
    };
});

var osc0008bb = new Oscillator(function(i, sum) {
    var m = sin((drawCount - sum) / 2700) / 5;
    t = i / 10;
    return {
        x: cos(t * (2 + m)) * asin(constrain((t * (m / 4)), -1, 1)) * 300 * i / 1000 / 1.5,
        y: tan(t * (2 + m)) * asin(constrain((t * (m / 4)), -1, 1)) * 450 / 2
    };
});

var osc0008c = new Oscillator(function(i, sum) {
    var m = sin((drawCount - sum) / 2700) / 5;
    t = i / 10;
    return {
        x: sin(t * (2 + m)) * asin(constrain((t * (m / 2)), -1, 1)) * 300 * i / 1000 / 1.5,
        y: tan(t * (2 + m)) * asin(constrain((t * (m / 4)), -1, 1)) * 450 / 2
    };
});

var osc0008d = new Oscillator(function(i, sum) {
    var m = sin((drawCount - sum) / 170) / 20;
    t = i / 10;
    return {
        x: sin(t * (2 + m)) * asin(constrain((t * (m * 2)), -1, 1)) * 150 * i / 1000 / 1.5,
        y: cos(t * (2 + m)) * asin(constrain((t * (m / 4)), -1, 1)) * 150 * i / 1000 / 1.5
    };
});

var osc0008e = new Oscillator(function(i, sum) {
    var m = sin((drawCount - sum) / 70) / 20;
    t = i / 10;
    return {
        x: (sin(t * (2 + m)) * 150 * i / 1000 / 1.5) / (asin(constrain((t * (m * 2)), -1, 1)) * 150 * i / 1000 / 1.5) * 200,
        y: (tan(t * (2 + m)) * 150 * i / 1000 / 1.5) + (asin(constrain((t * (m / 4)), -1, 1)) * 150 * i / 1000 / 1.5)
    };
});

var osc0008f = new Oscillator(function(i, sum) {
    var m = sin((drawCount - sum) / 70) / 20;
    t = i / 10;
    return {
        x: (tan(t * (2 + m)) * 150 * i / 1000 / 1.5) / (asin(constrain((t * (m * 2)), -1, 1)) * 150 * i / 1000 / 1.5) * 200,
        y: (tan(t * (2 + m)) * 150 * i / 1000 / 1.5) + (asin(constrain((t * (m / 4)), -1, 1)) * 150 * i / 1000 / 1.5)
    };
});

//Le cône en spirale
var osc0008g = new Oscillator(function(i, sum) {
    var m = sin((drawCount - sum) / 70) / 100;
    t = i / 80;
    return {
        x: (cos(t * (2 + m)) * 150 * i / 1000 / 1.5) + (asin(constrain((t * (m * 2)), -1, 1)) * 150 * i / 1000 / 1.5) * 2,
        y: (sin(t * (2 + m)) * 150 * i / 1000 / 1.5) + (asin(constrain((t * (m / 4)), -1, 1)) * 150 * i / 1000 / 1.5)
    };
});

var osc0008h = new Oscillator(function(i, sum) {
    var m = sin((drawCount - sum) / 700) / 100;
    var t = i / 80;
    var x = (cos(t * (2 + m)) * 150 * i / 1000 / 1.5) + (asin(constrain((t * (m * 2)), -1, 1)) * 150 * i / 1000 / 1.5) / 10;
    var y = (sin(t * (2 + m)) * 150 * i / 1000 / 1.5) + (asin(constrain((t * (m / 4)), -1, 1)) * 150 * i / 1000 / 1.5);

    var mm = sin((drawCount - sum) / 2000) * 1;
    var tt = i / 10;

    var xx = tan(cos(tan(tt * mm))) * mm * 200;
    var yy = tan(sin(tan(tt * mm))) * mm * 150;

    return {
        x: lerp(x, xx, 0.1) * 1.4,
        y: lerp(y, yy, 0.1) * 1.4
    };

});

var osc0008i = new Oscillator(function(i, sum) {
    var m = sin((drawCount - sum) / 700) / 100;
    var t = i / 8;
    var x = (cos(t * (2 + m)) * 150 * i / 1000 / 1.5) + (asin(constrain((t * (m * 2)), -1, 1)) * 150 * i / 1000 / 1.5) / 10;
    var y = (sin(t * (2 + m)) * 150 * i / 1000 / 1.5) + (asin(constrain((t * (m / 4)), -1, 1)) * 150 * i / 1000 / 1.5);

    var mm = sin((drawCount - sum) / 100) / 20;
    var tt = i / 10;

    var xx = tan(cos(tan(tt * mm))) * mm * 200;
    var yy = tan(sin(tan(tt * mm))) * mm * 150;

    return {
        x: lerp(x, xx, 0.5) * 4,
        y: lerp(y, yy, 0.5) * 4 - 50
    };

});

var osc0008j = new Oscillator(function(i, sum) {
    var m = sin((drawCount - sum) / 700) / 100;
    var t = i / 8;
    var x = (cos(t * (2 + m))) * (asin(constrain((t * (m * 2)), -1, 1)) * 150 * i / 1000 / 1.5) / 1;
    var y = (tan(t * (2 + m))) * (asin(constrain((t * (m / 4)), -1, 1)) * 150 * i / 1000 / 1.5);

    var mm = sin((drawCount - sum) / 30000) * 10;
    var tt = i / 10;

    var xx = tan(cos(tan(tt * mm))) * mm * 200;
    var yy = tan(sin(tan(tt * mm))) * mm * 150;

    return {
        x: lerp(x, xx, -1) * 4,
        y: lerp(y, yy, 5) * 4 - 50
    };

});

var osc0008k = new Oscillator(function(i, sum) {
    var m = sin((drawCount - sum) / 7000) / 100;
    var t = i / 8;
    var x = (cos(t * (2 + m))) * (asin(constrain((t * (m * 2)), -1, 1)) * 150 * i / 1000 / 1.5) / 1;
    var y = (tan(t * (2 + m))) * (asin(constrain((t * (m / 4)), -1, 1)) * 150 * i / 1000 / 1.5);

    var mm = sin((drawCount - sum) / 30000) * 10;
    var tt = i / 50;

    var xx = tan(cos(tan(tt * mm))) * mm * 200;
    var yy = tan(sin(tan(tt * mm))) * mm * 150;

    return {
        x: lerp(x, xx, 1) * 20,
        y: lerp(y, yy, 2) * 4
    };

});


var osc0008l = new Oscillator(function(i, sum) {
    var m = sin((drawCount - sum) / 7000) / 100;
    var t = i / 8;
    var x = (cos(t * (2 + m))) * (asin(constrain((t * (m * 2)), -1, 1)) * 150 * i / 1000 / 1.5) / 1;
    var y = (tan(t * (2 + m))) * (asin(constrain((t * (m / 4)), -1, 1)) * 150 * i / 1000 / 1.5);

    var mm = sin((drawCount - sum) / 30000) * 10;
    var tt = i / 50;

    var xx = tan(cos(tan(tt * mm))) * 20 * i / 1000;
    var yy = tan(sin(tan(tt * mm))) * 10 * i / 1000;

    return {
        x: lerp(x, xx, 0.9) * 4,
        y: lerp(y, yy, 1) * 4
    };
});

var osc0008m = new Oscillator(function(i, sum) {
    var m = sin((drawCount - sum) / 7000) / 100;
    var t = i / 8;
    var x = (cos(t * (2 + m))) * (asin(constrain((t * (m * 2)), -1, 1)) * 150 * i / 1000 / 1.5) / 1;
    var y = (tan(t * (2 + m)));

    var mm = sin((drawCount - sum) / 30000) * 10;
    var tt = i / 50;

    var xx = cos((tt * mm)) * 20 * i / 1000;
    var yy = sin((tt * mm)) * 10;

    return {
        x: lerp(x, xx, 0.9) * 8,
        y: lerp(y, yy, 0.1) * 40
    };
});

var osc0008n = new Oscillator(function(i, sum) {
    var m = sin((drawCount - sum) / 7000) / 100;
    var t = i / 8;
    var x = (cos(t * (2 + m))) * (asin(constrain((t * (m * 2)), -1, 1)) * 150 * i / 1000 / 1.5) / 1;
    var y = (tan(t * (2 + m)));

    var mm = sin((drawCount - sum) / 30000) * 10;
    var tt = i / 50;

    var xx = cos((tt * mm)) * 20 * i / 1000;
    var yy = sin((tt * mm)) * 10;

    return {
        x: lerp(x, xx, 0.1) * 8,
        y: lerp(y, yy, 0.1) * 40
    };
});

var osc0008o = new Oscillator(function(i, sum) {
    var m = sin((drawCount - sum) / 7000) / 100;
    var t = i / 8;
    var x = (cos(t * (2 + m))) * (asin(constrain((t * (m * 2)), -1, 1)) * 150 * i / 1000 / 1.5) / 1;
    var y = (tan(t * (2 + m)));

    var mm = sin((drawCount - sum) / 30000) * 10;
    var tt = i / 50;

    var xx = cos((tt * mm)) * 20 * i / 1000;
    var yy = sin((tt * mm)) * 10;

    return {
        x: lerp(x, xx, -0.1) * 8,
        y: lerp(y, yy, 0.5) * 40
    };
});

var osc0008p = new Oscillator(function(i, sum) {
    var m = sin((drawCount - sum) / 7000) / 100;
    var t = i / 8;
    var x = (asin(constrain((t * (m * 2)), -1, 1)) * 150 * i / 1000 / 1.5) / 1;
    var y = (tan(t * (2 + m)));

    var mm = sin((drawCount - sum) / 30000) * 10;
    var tt = i / 50;

    var xx = cos((tt * mm)) * 20 * i / 1000;
    var yy = sin((tt * mm)) * 10;

    return {
        x: lerp(y, yy, 0.5) * 40,
        y: lerp(x, xx, -0.1) * 8 - 340

    };
});

var osc0008q = new Oscillator(function(i, sum) {
    var m = sin((drawCount - sum) / 700) / 10;
    var t = i / 8;
    var x = (acos(constrain((t * (m * 2)), -1, 1)) * 150 * i / 1000 / 1.5);
    var y = (cos(t * (2 + m)));

    var mm = tan((drawCount - sum) / 30000) * 10;
    var tt = i / 5;

    var xx = cos(tt * mm) * 20 * i / 1000;
    var yy = tan(tt * mm) * 10 * i / 1000;

    return {
        x: lerp(x, xx, -5) * 2,
        y: lerp(y, yy, 5) * 2
    };
});


//----------------------------------Autre nuit géométrique------------------------------//

//Sphère hallucinante.
var circle = new Oscillator(function(i, sum) {
    var m = sin((drawCount - sum) / 100) / 10;
    t = i / 1;
    return {
        x: sin(t * (m * 10)) * t * 1,
        y: cos(t * (m * 10)) * t * 1
    };
});

//Superspirale étrange

// var circle = new Oscillator(function(i, sum) {
//     var m = sin((drawCount - sum) / 100) / 10;
//     t = i / 1;
//     return {
//         x: sin(t * (m * 10)) * t * 1,
//         y: cos(t * (m * 10)) * t * 1
//     };
// });

//Intéressant de juin 009

// var circle = new Oscillator(function(i, sum) {
//     var m = sin((drawCount - sum) / 10) / 100;
//     t = i / 10;
//     return {
//         x: (sin(t) * 5) * t / 2.5,
//         y: (sin(t) - sin(t * m)) * 180
//     };
// });

// Intéressant de juin 008

// var circle = new Oscillator(function(i, sum) {
//     var m = sin((drawCount - sum) / 10) / 1;
//     t = i / 1;
//     return {
//         x: sin(t) * sin(t * 3.1) * 600,
//         y: sin(t + m) * cos(t + m * 1) * sin(t) * 700
//     };
// });

// Intéressant de juin 007

// var circle = new Oscillator(function(i, sum) {
//     var m = sin((drawCount - sum) / 50) / 1;
//     t = i / 2;
//     return {
//         x: sin(t / (m * 10000)) / cos(t + m) * 400,
//         y: cos(t / (m * 10000)) * sin(t * 3) * 300
//     };
// });

// Intéressant de juin 007

// var circle = new Oscillator(function(i, sum) {
//     var m = sin((drawCount - sum) / 20) / 1;
//     t = i / 2;
//     return {
//         x: sin(t / (m * 10000)) / cos(t + m) * 400,
//         y: cos(t / (m * 10000)) * sin(t * 3.1) * 300
//     };
// });

// Intéressant de juin 006

// var circle = new Oscillator(function(i, sum) {
//     var m = sin((drawCount - sum) / 20) / 1;
//     t = i / 2;
//     return {
//         x: sin(t + m) / cos(t + m) * 60,
//         y: cos(t / (m * 2000)) * sin(t * 3.5) * 300
//     };
// });

// Intéressant de juin 005

// var circle = new Oscillator(function(i, sum) {
//     var m = sin((drawCount - sum) / 100) / 0.5;
//     t = i / 200;
//     return {
//         x: sin(t + m) / cos(t + m) * 60,
//         y: cos(t) * sin(t * 3.5) * 300
//     };
// });

// Lissajous - transitions entre 

// var circle = new Oscillator(function(i, sum) {
//     var m = sin((drawCount - sum) / 100) / 0.5;
//     t = i / 200;
//     return {
//         x: sin(t + m) * cos(t + m) * 600,
//         y: cos(t / t + (m) / 2) * sin(t * 3.5 + (m / 1)) * 300
//     };
// });

//Intéressant de juin 004

// var circle = new Oscillator(function(i, sum) {
//     var m = sin((drawCount - sum) / 10) / 1;
//     t = i / 100;
//     return {
//         x: sin(t + m) * cos(t + (m / 2)) * cos(t / 100 + m) * 600,
//         y: cos(t) * sin(t * 20 + (m / 2)) * sin(t / 10 + (m / 10)) * 300
//     };
// });

//Intéressant de juin 003

// var circle = new Oscillator(function(i, sum) {
//     var m = sin((drawCount - sum) / 10) / 1;
//     t = i / 100;
//     return {
//         x: sin(t + m) * cos(t + (m / 2)) * 600,
//         y: cos(t) * sin(t * 20 + (m / 2)) * sin(t / 10) * 300
//     };
// });

//Intéressant de juin 002

// var circle = new Oscillator(function(i, sum) {
//     var m = sin((drawCount - sum) / 20) / 1;
//     t = i;
//     return {
//         x: sin(t + m) * cos(t + m) * 600,
//         y: cos(t) * sin(t * 10 + (m / 2)) * 300
//     };
// });

//Intéressant de juin 001

// var circle = new Oscillator(function(i, sum) {
//     var m = sin((drawCount - sum) / 20) / 1;
//     t = i;
//     return {
//         x: sin(t + m) * cos(t * 10) * 600,
//         y: cos(t) * cos(t * 10 + m) * 300
//     };
// });


//---------------------Nuit géométrique 1-------------------------//

var tangentField = new Oscillator(function(i, sum) {
    var m = sin((drawCount - sum) / 70) / 100;
    t = i / 1700;
    return {
        x: cos(t + (m * 10)) * tan(t * 4 / m * 20) * 450 * t / 5,
        y: sin(t + (m * 40)) * cos(t * (2 + m)) * 350
    };
});

var lemonRibbon = new Oscillator(function(i, sum) {
    var m = sin((drawCount - sum) / 700) / 5;
    t = i / 2;
    return {
        x: cos(t + (m * 50)) * 400 * t / 1000,
        y: pow(sin(t - (m * 50)), 3) * cos(t) * 350
    };
});

var lemonRibbon3 = new Oscillator(function(i, sum) {
    var m = sin((drawCount - sum) / 700) / 5;
    t = i / 2;
    return {
        x: cos(t + (m * 50)) * tan(t) * 400 * t / 1000,
        y: pow(sin(t - (m * 50)), 1) * cos(t) * 350
    };
});

var lemonRibbon4 = new Oscillator(function(i, sum) {
    var m = sin((drawCount - sum) / 700) / 5;
    t = i / 2;
    return {
        x: cos(t + (m * 50)) * tan(t) * 40 * t / 1000,
        y: pow(sin(t - (m * 50)), 1) * cos(t) * 350
    };
});

//Grotte
var grotte = new Oscillator(function(i, sum) {
    var m = sin((drawCount - sum) / 2000) / 25;
    t = i / 100;
    return {
        x: pow(cos(t / 2 * (m * 5)), 100) / pow(sin(t / 20), 3) * 350 - 750,
        y: pow(cos(t / 2 * (m * 5)), 5) / sin(t * 10) * cos(t * m * 300) * 150
    };
});

//Grotte 2
var grotte2 = new Oscillator(function(i, sum) {
    var m = sin((drawCount - sum) / 2000) / 25;
    t = i / 100;
    return {
        x: pow(cos(t / 2 * (m * 5)), 100) * pow(sin(t / 20), 3) * 1050 - 400,
        y: pow(cos(t / 2 * (m * 5)), 5) / sin(t * 10) * cos(t * m * 300) * 150
    };
});

//Les nouvelles grottes
var nouvelleGrotte = new Oscillator(function(i, sum) {
    var m = sin((drawCount - sum) / 200) / 25;
    t = i / 100;
    return {
        x: pow(cos(t / 20 * (m * 5)), 100) * pow(sin(t / 20), 1) * 1050 - 500,
        y: pow(sin(t / 2 * (m * 5)), 5) / sin(t * 10) * cos(t * m * 300) * 150
    };
});

//Les nouvelles grottes
var nouvelleGrotte2 = new Oscillator(function(i, sum) {
    var m = sin((drawCount - sum) / 200) / 25;
    t = i / 100;
    return {
        x: pow(cos(t / 20 * (m * 5)), 100) * pow(sin(t / 20), 1) * 1050 - 500,
        y: pow(sin(t / 2 * (m * 5)), 1) / cos(t * 10) * sin(t * m * 300) * 150
    };
});

//Les nouvelles grottes
var sablier = new Oscillator(function(i, sum) {
    var m = sin((drawCount - sum) / 1000) / 25;
    t = i / 10;
    return {
        x: pow(cos(t + m), 1) * pow(sin(t * m), 1) * 450,
        y: pow(sin(t + m), 1) * cos(t) * sin(t * m * 3) * 450
    };
});

var sablier2 = new Oscillator(function(i, sum) {
    var m = sin((drawCount - sum) / 1000) / 25;
    t = i / 10;
    return {
        x: pow(tan(t + m), 1) * pow(sin(t * m), 1) * 450,
        y: pow(tan(t + m), 1) * cos(t) * sin(t * m * 3) * 450
    };
});

var sablier3 = new Oscillator(function(i, sum) {
    var m = sin((drawCount - sum) / 1000) / 25;
    t = i / 10;
    return {
        x: pow(tan(t + m), 1) * pow(sin(t * m), 1) * 450,
        y: pow(tan(t + m), 1) * tan(t) * sin(t * m * 3) * 450
    };
});

var sablier4 = new Oscillator(function(i, sum) {
    var m = sin((drawCount - sum) / 1000) / 25;
    t = i / 10;
    return {
        x: pow(sin(t + m), 1) * pow(tan(t * m), 1) * 450,
        y: pow(tan(t + m), 1) * cos(t) * tan(t * m * 3) * 450
    };
});

var sablier5 = new Oscillator(function(i, sum) {
    var m = sin((drawCount - sum) / 1000) / 25;
    t = i / 10;
    return {
        x: pow(sin(t + m), 1) * pow(tan(t * m), 1) * 450,
        y: pow(tan(t + m), 1) * cos(t) / tan(t * m * 3) * 450
    };
});

var sablier6 = new Oscillator(function(i, sum) {
    var m = sin((drawCount - sum) / 1000) / 25;
    t = i / 10;
    return {
        x: pow(sin(t + m), 1) * 450,
        y: pow(tan(t + m), 1) * cos(t) / tan(t * m * 3) * 450
    };
});

var sablier7 = new Oscillator(function(i, sum) {
    var m = sin((drawCount - sum) / 1000) / 25;
    t = i / 10;
    return {
        x: pow(sin(t + m), 1) * 450,
        y: pow(tan(t + m), 1) / tan(t * m * 3) * 450
    };
});

var sablier8 = new Oscillator(function(i, sum) {
    var m = sin((drawCount - sum) / 20) / 1;
    t = i / 10;
    return {
        x: pow(sin(t * m * 2), 1) * cos(t + m * 2) * 400,
        y: pow(tan(t + m), 1) * 20 * sin(t - m * 3) * 10
    };
});

var sablier9 = new Oscillator(function(i, sum) {
    var m = sin((drawCount - sum) / 2000) / 1;
    t = i / 10;
    return {
        x: pow(tan(t * m * 2), 1) * tan(t + m * 2) * 40,
        y: pow(tan(t + m), 1) * 20 * sin(t - m * 3) * 10
    };
});

//Grotte 3
var grotte3 = new Oscillator(function(i, sum) {
    var m = sin((drawCount - sum) / 2000) / 25;
    t = i / 100;
    return {
        x: pow(cos(t / 20 * (m * 5)), 100) * pow(sin(t / 20), 1) * 1050 - 500,
        y: pow(cos(t / 2 * (m * 5)), 5) / sin(t * 10) * cos(t * m * 300) * 150
    };
});

//Citron en ruban qui tourne sur lui-même - Version fracturée.
// var lemonRibbon5 = new Oscillator(function(i, sum) {
//     var m = sin((drawCount-sum)/2000)/25;
//     t = i/100;
//     return {
//         x: pow(sin(t/20*(m*5)),1) / cos(t) * 150,
//         y: pow(tan(t/2*(m*5)),1000) * sin(t*m*30) * 150
//     };
// });

//Grotte 4.
// var lemonRibbon5 = new Oscillator(function(i, sum) {
//     var m = sin((drawCount-sum)/2000)/25;
//     t = i/100;
//     return {
//         x: pow(cos(t/20*(m*5)),100) * pow(sin(t/20),1) * 1050 - 500,
//         y: pow(cos(t/2*(m*5)),50) / sin(t*10) * cos(t*m*300) * 150
//     };
// });

//Grotte 3
// var lemonRibbon5 = new Oscillator(function(i, sum) {
//     var m = sin((drawCount-sum)/2000)/25;
//     t = i/100;
//     return {
//         x: pow(cos(t/20*(m*5)),100) * pow(sin(t/20),1) * 1050 - 500,
//         y: pow(cos(t/2*(m*5)),5) / sin(t*10) * cos(t*m*300) * 150
//     };
// });



//Dimensions qui se tordent, 2.
var dimTord2 = new Oscillator(function(i, sum) {
    var m = sin((drawCount - sum) / 10000) / 25;
    t = i / 10;
    return {
        x: pow(cos(t / 2 * (m * 5)), 10) / sin(t) * 350 * drawCount / 200,
        y: pow(cos(t / 2 * (m * 5)), 5) / sin(t) / cos(t * m * 10) * 150 * drawCount / 200
    };
});

//Dimensions qui se tordent.
var dimTord = new Oscillator(function(i, sum) {
    var m = sin((drawCount - sum) / 10000) / 25;
    t = i / 10;
    return {
        x: pow(cos(t / 2 * (m * 5)), 10) / sin(t) * 350 * drawCount / 200,
        y: pow(cos(t / 2 * (m * 5)), 5) / sin(t) * cos(t * m * 10) * 150 * drawCount / 200
    };
});

//Extra-Dimensions
var extraDim = new Oscillator(function(i, sum) {
    var m = sin((drawCount - sum) / 10000) / 25;
    t = i / 10;
    return {
        x: pow(cos(t / 2 * (m * 5)), 10) / sin(t) * 350 * drawCount / 100,
        y: pow(cos(t / 2 * (m * 5)), 10) / cos(t) * 150 * drawCount / 100
    };
});

// Autre point de fuite.
// var lemonRibbon5 = new Oscillator(function(i, sum) {
//     var m = sin((drawCount-sum)/10000)/25;
//     t = i/10;
//     return {
//         x: pow(cos(t*(m*10)),300) / sin(t) * 750,
//         y: pow(cos(t*(m*10)),300) / cos(t) * 450
//     };
// });

//Belle forme cachée
var belleForme = new Oscillator(function(i, sum) {
    var m = sin((drawCount - sum) / 10000) / 5;
    t = i / 2;
    return {
        x: pow(cos(t * (m * 10)), 3) * sin(t) * 750,
        y: pow(cos(t * (m * 10)), 10) * cos(t) * 450
    };
});

//Cercle qui se mange.
var selfDigestingCircle = new Oscillator(function(i, sum) {
    var m = sin((drawCount - sum) / 20000) / 15;
    t = i / 20;
    return {
        x: pow(cos(t * (m * 10)), 3) * sin(t) * 550,
        y: pow(cos(t * (m * 10)), 10) * cos(t) * 350
    };
});

//Grand vase. scale à 1.
var lemonRibbon5 = new Oscillator(function(i, sum) {
    var m = sin((drawCount - sum) / 15000) / 10;
    t = i / 20;
    return {
        x: cos(t * (m * 10)) * sin(t) * 600,
        y: sin(t * (m * 10)) / sin(t) / cos(t) * 150
    };
});

// //Scalé à 0.4.
// var lemonRibbon5 = new Oscillator(function(i, sum) {
//     var m = sin((drawCount-sum)/20000)/5;
//     t = i/20;
//     return {
//         x: cos(t*(m*10)) / sin(t/100) * 580,
//         y: cos(t*(m*100)) / sin(t) * 150
//     };
// });

//Holy shit, point de fuite!
var pointDeFuite = new Oscillator(function(i, sum) {
    var m = sin((drawCount - sum) / 20000) / 5;
    t = i / 20;
    return {
        x: cos(t * (m * 10)) / sin(t) * 580,
        y: cos(t * (m * 20)) / sin(t) * 150
    };
});

//Fleurs du tapis.
var fleursDuTapis = new Oscillator(function(i, sum) {
    var m = sin((drawCount - sum) / 20000) / 5;
    t = i / 20;
    return {
        x: cos(t * (m * 10)) * sin(t) * 580,
        y: cos(t * (m * 20)) / sin(t) * 150
    };
});

//Fausse tangente.
// var lemonRibbon5 = new Oscillator(function(i, sum) {
//     var m = sin((drawCount-sum)/20000)/5;
//     t = i/20;
//     return {
//         x: cos(t*(m*10)) * sin(t) * 580,
//         y: sin(t*(m*20)) / cos(t) * 350
//     };
// });

//Le trapèze de Lissajous.
// var lemonRibbon5 = new Oscillator(function(i, sum) {
//     var m = sin((drawCount-sum)/7000)/5;
//     t = i/20;
//     return {
//         x: cos(t*(m*10)) * sin(t) * 580,
//         y: sin(t*(m*10)) * cos(t) * 350
//     };
// });

//Sphère hallucinante.
// var lemonRibbon5 = new Oscillator(function(i, sum) {
//     var m = sin((drawCount-sum)/7000)/5;
//     t = i/20;
//     return {
//         x: cos(t*(m*10)) * sin(t) * 580,
//         y: sin(t*(m*10)) * 350
//     };
// });

//Générateur de motifs pour l'algorithme de Prim
// var lemonRibbon5 = new Oscillator(function(i, sum) {
//     var m = sin((drawCount-sum)/70000)/50;
//     t = i;
//     return {
//         x: cos(t*m*10) * 580,
//         y: sin(t) * 350
//     };
// });





var formuleMagique = new Oscillator(function(i, sum) {
    var m = sin((drawCount - sum) / 20) / 100;
    t = i / 30;
    return {
        x: cos(t) * sin(t / 2) * (sin(t * (2 + m)) / 4) * 2400 * i / 1000,
        y: pow(sin(t / 2), 3) * cos(t / 20) * 350
    };
});

var spiraleToupie = new Oscillator(function(i, sum) {
    var m = sin((drawCount - sum) / 20) / 100;
    t = i / 40;
    return {
        x: sin(t * (2 + m)) * 400 * i / 1000,
        y: cos(t * (2 + m)) * sin(t * (4 * m)) * 350
    };
});

var spiraleExtraMagique2 = new Oscillator(function(i, sum) {
    var m = sin((drawCount - sum) / 40) / 100;
    t = i / 40;
    return {
        x: sin(t * (2 + m)) * sin(t * (2 * m)) * 400 * i / 1000,
        y: cos(t * (2 + m)) * sin(t * (2 * m)) * 350
    };
});

var justeDebile = new Oscillator(function(i, sum) {
    var m = sin((drawCount - sum) / 80) / 100;
    t = i / 10;
    return {
        x: sin(t * (2 + m)) * sin(t * (m / 2)) * 800 * i / 1000,
        y: cos(t * (2 + m)) * sin(t * (2 * m)) * 350
    };
});

var interessant = new Oscillator(function(i, sum) {
    var m = sin((drawCount - sum) / 320) / 100;
    t = i / 30;
    return {
        x: sin(t * (2 + m)) * cos(t * (4 * m)) * 200 * i / 1000,
        y: cos(t * (2 + m)) * cos(t * (2 * m)) * 350
    };
});

var spiraToupEntre = new Oscillator(function(i, sum) {
    var m = sin((drawCount - sum) / 1400) / 5;
    t = i / 30;
    return {
        x: sin(t * (2 + m)) * cos(t * (m / 4)) * 200 * i / 1000,
        y: cos(t * (2 + m)) * cos(t * (m / 4)) * 350
    };
});

var pasMalCool = new Oscillator(function(i, sum) {
    var m = sin((drawCount - sum) / 700) / 100;
    t = i / 2;
    return {
        // x: sin(t*(2+m)) * asin(t*(m/4)) * 8 * i/1000,
        // y: cos(t*(2+m)) * asin(t*(m/4)) * (sin(t*(m))*m*20) * 10350
        x: sin(t * (2 + m)) * asin(constrain(t * (m / 4), -1, 1)) * 8 * i / 1000,
        y: cos(t * (2 + m)) * asin(constrain(t * (m / 4), -1, 1)) * (sin(t * (m)) * m * 20) * 10350
    };
});

var pasMalCoolAussi = new Oscillator(function(i, sum) {
    var m = sin((drawCount - sum) / 700) / 50;
    t = i / 10;
    return {
        x: sin(t * (2 + m)) * asin(t * (m / 4)) * 800 * i / 1000,
        y: cos(t * (2 + m)) * asin(t * (m / 4)) * (sin(t * (m)) * t * m * 10) * 350
    };
});

var newRotatingSpiral = new Oscillator(function(i, sum) {
    var m = sin((drawCount - sum) / 700) / 50;
    t = i / 10;
    return {
        x: sin(t * (-5 + m)) * asin(t * (m / 4)) * 800 * i / 1000,
        y: cos(t * (-5 + m)) * asin(t * (m / 4)) * (sin(t * (m)) * t * m * 1) * 350
    };
});



var spiraleEtrange = new Oscillator(function(i, sum) {
    var m = sin((drawCount - sum) / 900) / 5;
    var t = i / 60;
    return {
        x: sin(t * (-15 + m)) * asin(min(t * 4 * (m / 4), 1)) * 800 * i / 1000,
        y: sin(t * (15 + m)) * asin(min(t * 4 * (m / 4), 1)) * 550
    };
});

var spiraleEtrange2 = new Oscillator(function(i, sum) {
    var m = sin((drawCount - sum) / 300) / 50;
    var t = i / 30;
    return {
        x: sin(t * (2 + m)) * sin(t * (2 * m)) * 400 * i / 1000,
        y: cos(t * (2 + m)) * sin(t * (2 * m)) * 350
    };
});


var fouTete = new Oscillator(function(i, sum) {
    var m = sin((drawCount - sum) / 700) / 5;
    t = i / 60;
    return {
        x: tan(t * (-5 + m)) * asin(t * (m / 4)) * 800 * i / 1000,
        y: tan(t * (-5 + m)) * asin(t * (m / 4)) * (tan(t * (m)) * t * m * 1) * 350
    };
});


var modulatedDimension = new Oscillator(function(i, sum) {
    // MODULATOR - spiraletrange
    var m = sin((drawCount - sum) / 900) / 5;
    var t = i / 60;
    var x = sin(t * (-15 + m)) * asin(constrain(t * 4 * (m / 4), -1, 1)) * 800 * i / 1000;
    var y = sin(t * (15 + m)) * asin(constrain(t * 4 * (m / 4), -1, 1)) * 550;

    // CARRIER SIGNAL - nouvelledimension
    var mm = sin((drawCount - sum) / 700) / 5;
    var tt = i / 2;
    var xx = tan(tt + (mm * 50)) * 400 * tt / 1000;
    var yy = pow(sin(tt - (mm * 50)), 3) * 350;

    // MODULATOR FUNCTION
    var oscillator = sin((drawCount - sum) / 20);
    var oscNorm = map(oscillator, -1, 1, 0, 1);
    var morphX = lerp(x, xx, oscNorm);
    var morphY = lerp(y, yy, oscNorm);
    var x = morphX;
    var y = morphY;

    return {
        x: x,
        y: y
    };
});

//Les bases
var modif3000 = new Oscillator(function(i, sum) {
    var m = sin((drawCount - sum) / 700) / 5;
    t = i / 60;
    return {
        x: sin(t * (-5 + m)) * asin(t * (m / 4)) * 800 * i / 1000,
        y: tan(t * (-5 + m)) * asin(t * (m / 4)) * (sin(t * (m)) * t * m * 1) * 350
    };
});

var modif3001 = new Oscillator(function(i, sum) {
    var m = sin((drawCount - sum) / 700) / 5;
    t = i / 60;
    return {
        x: sin(t * (-5 + m)) * asin(t * (m / 4)) * 800 * i / 1000,
        y: tan(t * (-5 + m)) * asin(t * (m / 4)) * (tan(t * (m)) * t * m * 1) * 350
    };
});

var implosion = new Oscillator(function(i, sum) {
    var m = sin((drawCount - sum) / 700) / 1;
    t = i / 10;
    return {
        x: tan(tan(t + m)) * sin(t + m) * 6 * t / 10,
        y: tan(tan(t + m)) * cos(t + m) * 250
    };
});
var implosion2 = new Oscillator(function(i, sum) {
    var m = sin((drawCount - sum) / 700) / 1;
    t = i / 50;
    return {
        x: pow(tan(tan(t + m)), 3) * sin(t + m) * 6 * t / 10,
        y: pow(tan(tan(t + m)), 0.9) * cos(t + m) * 250
    };
});
var implosion3 = new Oscillator(function(i, sum) {
    var m = sin((drawCount - sum) / 700) / 1;
    t = i / 50;
    return {
        x: pow(tan(tan(t + m)), 3) * sin(t + m) * 6 * t / 10,
        y: pow(tan(tan(t + m)), 0.9) * cos(t + m) * 250
    };
});
var masque = new Oscillator(function(i, sum) {
    var m = sin((drawCount - sum) / 700) / 1;
    t = i / 20;
    return {
        x: pow(cos(cos(t + m)), 0.1) * cos(t + m) * 650,
        y: pow(sin(sin(t + m)), 7) * cos(t + m) * 20 * t
    };
});
var implosion4 = new Oscillator(function(i, sum) {
    var m = sin((drawCount - sum) / 70) / 1;
    t = i / 1;
    return {
        x: pow(cos(cos(t + m)), 0.1) * tan(t + m) * 60,
        y: pow(sin(sin(t + m)), 7) * tan(t + m) * 0.1 * t
    };
});
var implosion5 = new Oscillator(function(i, sum) {
    var m = sin((drawCount - sum) / 70) * 2;
    t = i / 1;
    return {
        x: pow(cos(cos(t + m)), 0.5) * tan(t + m) * 120,
        y: pow(sin(sin(t + m)), 1) * tan(t + m) * 0.1 * t
    };
});
var implosion6 = new Oscillator(function(i, sum) {
    var m = sin((drawCount - sum) / 70) * 2;
    t = i / 1;
    return {
        x: pow(sin(sin(t + m)), 1) * tan(t + m) * 0.1 * t,
        y: pow(cos(cos(t * t + m)), 0.5) * tan(t + m) * 120
    };
});
var implosion7 = new Oscillator(function(i, sum) {
    var m = sin((drawCount - sum) / 70) * 2;
    t = i / 1;
    return {
        x: pow(sin(sin(t + m)), 1) * tan(t + m) * 0.1 * t,
        y: pow(cos(cos(t + m)), 0.5) * tan(t) * 120
    };
});
var implosion8 = new Oscillator(function(i, sum) {
    var m = sin((drawCount - sum) / 70) * 2;
    t = i / 1;
    return {
        x: pow(sin(sin(t + m)), 1) * tan(t) * 0.1 * t,
        y: pow(cos(cos(t + m)), 0.5) * tan(t) * 120
    };
});
var implosion9 = new Oscillator(function(i, sum) {
    var m = sin((drawCount - sum) / 70) * 20;
    t = i / 1;
    return {
        x: pow(sin(sin(t)), 1) * tan(t) * 0.1 * t,
        y: pow(cos(cos(t + m)), 0.5) * tan(t) * 120
    };
});
var implosion10 = new Oscillator(function(i, sum) {
    var m = sin((drawCount - sum) / 70) * 2;
    t = i / 1;
    return {
        x: pow(sin(sin(t)), 1) * tan(t) * 0.1 * t,
        y: pow(cos(cos(t)), 0.5) * tan(t + m) * 120
    };
});
var implosion11 = new Oscillator(function(i, sum) {
    var m = sin((drawCount - sum) / 70) * 2;
    t = i / 1;
    return {
        x: pow(sin(sin(t)), 1) * tan(sin(t + m)) * 0.15 * t,
        y: pow(cos(cos(t)), 0.5) * sin(tan(t)) * 120
    };
});
var implosion12 = new Oscillator(function(i, sum) {
    var m = sin((drawCount - sum) / 70) * 2;
    t = i / 2;
    var x = tan(tan(tan(t + m))) * sin(t) * 220;
    var y = tan(tan(tan(t + m))) * sin(t + m) * 0.15 * t;
    var xx = tan(tan(tan(t + m))) * sin(t) * 220;
    return {
        x: lerp(x, xx, 0.5),
        y: tan(tan(tan(t))) * sin(t + m) * 0.15 * t
    };
});
var implosion13 = new Oscillator(function(i, sum) {
    var m = sin((drawCount - sum) / 70) * 2;
    t = i / 1000;
    // t = sin(i);
    return {
        x: cos(t + m + i / 2) * tan(t + m) * i / 4,
        y: sin(t + m + i / 2) * tan(t) * i / 4
    };
});
var implosion14 = new Oscillator(function(i, sum) {
    var m = sin((drawCount - sum) / 70) * 0.5;
    t = i / 1000;
    // t = sin(i);
    return {
        x: cos(t + m + i / 2) * tan(t + m) * i / 4,
        y: sin(t + m + i / 2) * tan(t) * i / 4
    };
});
var implosion15 = new Oscillator(function(i, sum) {
    var m = sin((drawCount - sum) / 70) * 0.5;
    t = i / 100;
    // t = sin(i);
    var z = sin(t) * 10;
    return {
        x: cos(t + m + i / 2) * tan(t + m) * i / 8,
        y: sin(t + m + i / 2) * tan(t) * i / 8
    };
});
var implosion16 = new Oscillator(function(i, sum) {
    var m = sin((drawCount - sum) / 70) * 0.5;
    t = i / 10000;
    // t = sin(i);
    var z = sin(m / 10) * 100;
    return {
        x: cos(t + m + i / 2) * tan(t + m) * i / z,
        y: sin(t + m + i / 2) * tan(t) * i / z
    };
});
var implosion17 = new Oscillator(function(i, sum) {
    var m = sin((drawCount - sum) / 70) * 0.35;
    t = i / 100;
    // t = sin(i);
    var z = 20 + sin(m / 10) * 100;
    return {
        x: cos(t + m + i / 2) * tan(t + m) * i / z,
        y: sin(t + m + i / 2) * tan(t) * i / z
    };
});

//Un peu comme un attracteur de Lorenz

var implosion18 = new Oscillator(function(i, sum) {
    var m = sin((drawCount - sum) / 70) * 0.5;
    t = i / 100;
    // t = sin(i);
    var z = 20 + sin(m / 10) * 100;
    return {
        x: cos(t + m + i / 20) * tan(t + m) * i / z,
        y: sin(t + m + i / 20) * tan(t) * i / z
    };
});

//Une autre galaxie

var implosion19 = new Oscillator(function(i, sum) {
    var m = sin((drawCount - sum) / 70) * 0.5;
    t = i / 10;
    // t = sin(i);
    var z = 20 + sin(m / 10) * 100;
    return {
        x: cos(t + m + i / 200) * tan(t + m) * i / z,
        y: sin(t + m + i / 200) * tan(t) * i / z
    };
});

var implosion20 = new Oscillator(function(i, sum) {
    var m = sin((drawCount - sum) / 70) * 0.5;
    t = i / 10;
    // t = sin(i);
    var z = 20 + sin(m / 10) * 100;
    return {
        x: cos(t + m + i / 1000) * tan(t + m) * i / z,
        y: sin(t + m + i / 1000) * tan(t) * i / z
    };
});


var implosion21 = new Oscillator(function(i, sum) {
    var m = sin((drawCount - sum) / 70) * 0.5;
    t = i / 30;
    // t = sin(i);
    var z = 20 + sin(m / 10) * 100;
    return {
        x: tan(t + m + i / 1000) * tan(t + m) * cos(t + m) * i / z,
        y: tan(t + m + i / 1000) * tan(t + m * 10) * sin(t + m) * i / z
    };
});
var implosion22 = new Oscillator(function(i, sum) {
    var m = sin((drawCount - sum) / 700) * 2;
    t = i / 30;
    // t = sin(i);
    var z = 20 + sin(m / 10) * 100;
    return {
        x: tan(t + m + i / 1000) * tan(t + m * 5) * cos(t + m) * i / z,
        y: tan(t + m + i / 1000) * tan(t + m * 5) * sin(t + m) * i / z
    };
});

var implosion23 = new Oscillator(function(i, sum) {
    var m = sin((drawCount - sum) / 700) * 2;
    t = i / 30;
    // t = sin(i);
    var z = 20 + sin(m / 10) * 100;
    return {
        x: tan(t + m + i / 10000) * tan(t + m * 15) * cos(t + m) * i / z,
        y: tan(t + m + i / 10000) * tan(t + m * 15) * sin(t + m) * i / z
    };
});
var implosion24 = new Oscillator(function(i, sum) {
    var m = sin((drawCount - sum) / 700) * 2;
    t = i / 30;
    // t = sin(i);
    var z = 20 + sin(m / 10) * 100;
    return {
        x: tan(t + m + i / 10000) * cos(t + m * 15) * cos(t + m * 10) * i / z,
        y: tan(t + m + i / 10000) * tan(t + m * 15) * sin(t + m * 10) * i / z
    };
});
var implosion25 = new Oscillator(function(i, sum) {
    var m = sin((drawCount - sum) / 700) * 2;
    t = i / 30;
    // t = sin(i);
    var z = 2 + sin(m / 10) * 100;
    return {
        x: cos(t + m + i / 10000) * tan(t + m * 15) * cos(t + m * 10) * i / z,
        y: cos(t + m + i / 10000) * tan(t + m * 15) * sin(t + m * 10) * i / z
    };
});

// WOW!!!!!!!!!!!!
var implosion26 = new Oscillator(function(i, sum) {
    var m = sin((drawCount - sum) / 700) * 2;
    t = i / 30;
    // t = sin(i);
    var z = 5 + sin(m / 10) * 100;
    return {
        x: cos(t + m + i / 10000) * tan(t + m * 15) * cos(t + m + i * 10) * i / z,
        y: cos(t + m + i / 10000) * tan(t + m * 15) * sin(t + m + i * 10) * i / z
    };
});

var implosion27 = new Oscillator(function(i, sum) {
    var m = sin((drawCount - sum) / 700) * 2;
    t = i / 30;
    // t = sin(i);
    var z = 25 + sin(m / 10) * 100;
    return {
        x: cos(t + m + i / 10000) * tan(t + m * 15) * cos(t + m + i * 10) * sin(t) * i / z,
        y: cos(t + m + i / 10000) * tan(t + m * 15) * sin(t + m + i * 10) * sin(t) * i / z
    };
});

var implosion28 = new Oscillator(function(i, sum) {
    var m = sin((drawCount - sum) / 700) * 2;
    t = i / 30;
    // t = sin(i);
    var z = 2 + sin(m / 10) * 1;
    return {
        x: cos(t + m + i / 100000) * tan(t + m * 15 / 2) * cos(t + m * 10) * pow(sin(t), 5) * i / z,
        y: cos(t + m + i / 100000) * tan(t + m * 15 / 2) * sin(t + m * 10) * pow(sin(t), 5) * i / z
    };
});
var implosion29 = new Oscillator(function(i, sum) {
    var m = sin((drawCount - sum) / 700) * 2;
    t = i / 300;
    // t = sin(i);
    var z = 2 + sin(m / 10) * 1;
    return {
        x: cos(t + m + i / 10000) * tan(t + m + i * 15) * cos(t + m * 10) * pow(sin(t), 2) * i / z,
        y: cos(t + m + i / 10000) * tan(t + m + i * 15) * sin(t + m * 10) * pow(sin(t), 2) * i / z
    };
});
var implosion30 = new Oscillator(function(i, sum) {
    var m = sin((drawCount - sum) / 700) * 2;
    t = i / 300;
    // t = sin(i);
    var z = 2 + sin(m / 10) * 1;
    return {
        x: cos(t + m + i / 1000000) * tan(t + m + i / 100) * cos(t + m + i / 1) * pow(sin(t), 2) * i / z,
        y: cos(t + m + i / 1000000) * tan(t + m + i / 100) * sin(t + m + i / 1) * pow(sin(t), 2) * i / z
    };
});
var matin = new Oscillator(function(i, sum) {
    var m = sin((drawCount - sum) / 700) * 2;
    t = i / 3;
    // t = sin(i);
    var z = 10 + sin(m / 10) * 1;
    return {
        x: tan(t + m + i / 3) * i / z + cos(t + m) * m / z,
        y: tan(t + m + i / 3) * m / z + sin(t) * i / z
    };
});
var matin2 = new Oscillator(function(i, sum) {
    var m = sin((drawCount - sum) / 700) * 2;
    t = i / 1;
    // t = sin(i);
    var z = 10 + sin(m / 10) * 1;
    return {
        x: tan(t + m + i / 30) * i / z + cos(t + m * i / 30) * m / z,
        y: tan(t + m + i / 30) * m / z + cos(t + m * i / 30) * i / z
    };
});
var matin3 = new Oscillator(function(i, sum) {
    var m = sin((drawCount - sum) / 700) * 2;
    t = i / 1;
    // t = sin(i);
    var z = 10 + sin(m / 10) * 1;
    return {
        x: tan(t + m + i / 300) * i / z + cos(t + m * i / 300) * m / z,
        y: tan(t + m + i / 300) * m / z + cos(t + m * i / 300) * i / z
    };
});
var matin4 = new Oscillator(function(i, sum) {
    var m = sin((drawCount - sum) / 700) * 2;
    t = i / 1;
    // t = sin(i);
    var z = 10 + sin(m / 10) * 1;
    return {
        x: tan(t + m + i / 300) * i / z / sin(t + m * i / 300) * m / z,
        y: cos(t + m + i / 300) * m / z / tan(t + m * i / 300) * i / z
    };
});
var bigbang = new Oscillator(function(i, sum) {
    var m = sin((drawCount - sum) / 700) * 2;
    t = i / 1;
    // t = sin(i);
    var z = 10 + sin(m / 10) * 1;
    return {
        x: tan(t + m + i / 300) * i / z / sin(t + m * i / 300) * m / z,
        y: cos(t + m + i / 300) * m / z / tan(t + m * i / 300) * i / z
    };
});
var bigbang2 = new Oscillator(function(i, sum) {
    var m = sin((drawCount - sum) / 1700) * 2;
    t = i / 1;
    // t = sin(i);
    var z = 1 + sin(m / 100) * 100;
    return {
        x: tan(t + m + i / 200) * i / z / sin(t + m * i / 200) * sin(t) * m / z,
        y: cos(t + m + i / 200) * m / z / tan(t + m * i / 200) * sin(t) * i / z
    };
});
var bigbang3 = new Oscillator(function(i, sum) {
    var m = sin((drawCount - sum) / 1700) * 2;
    t = i / 1;
    // t = sin(i);
    var z = 1 + sin(m / 100) * 100;
    return {
        x: tan(t + m + i / 200) * i / z / sin(t + m * i / 200) * sin(t) * m / z,
        y: cos(t + m + i / 200) * m / z / tan(t + m * i / 200) * sin(t) * i / z
    };
});
var bigbang4 = new Oscillator(function(i, sum) {
    var m = sin((drawCount - sum) / 57000) * 2;
    t = i / 100;
    // t = sin(i);
    var z = 0.5 + sin(m / 100) * 100;
    return {
        x: tan(t + m * i / 200) * i / z / tan(t + m * i / 100) * cos(t + m * i) * m / z,
        y: tan(t + m * i / 200) * m / z / tan(t + m * i / 100) * sin(t + m * i) * i / z
    };
});
var bigbang5 = new Oscillator(function(i, sum) {
    var m = sin((drawCount - sum) / 57000) * 2;
    t = i / 10;
    // t = sin(i);
    var z = 0.2 + sin(m / 100) * 10;
    return {
        x: tan(t + m * i / 200) * i / z / tan(t + m * i / 100) * cos(t + m * i / 100) * m / z,
        y: tan(t + m * i / 200) * m / z / tan(t + m * i / 100) * sin(t + m * i / 100) * i / z
    };
});
var bigbang6 = new Oscillator(function(i, sum) {
    var m = sin((drawCount - sum) / 57000) * 2;
    t = i / 10;
    // t = sin(i);
    var z = 0.2 + sin(m / 100) * 10;
    return {
        x: tan(t + m * i / 20) * i / z / tan(t + m * i / 10000) * cos(t + m * i / 100) * m / z,
        y: tan(t + m * i / 20) * m / z / tan(t + m * i / 10000) * sin(t + m * i / 100) * i / z
    };
});
var bigbang7 = new Oscillator(function(i, sum) {
    var m = sin((drawCount - sum) / 57000) * 2;
    t = i / 10;
    // t = sin(i);
    var z = 0.2 + sin(m / 100) * 10;
    return {
        x: tan(t + m / 20) * i / z / tan(t + m / 10000) * cos(t + m * i / 100) * m / z,
        y: tan(t + m * i / 20) * m / z / tan(t + m * i / 10000) * sin(t + m * i / 100) * i / z
    };
});
var bigbang8 = new Oscillator(function(i, sum) {
    var m = sin((drawCount - sum) / 57000) * 2;
    t = i / 1;
    // t = sin(i);
    var z = 0.2 + sin(m / 100) * 10;
    return {
        x: tan(t + m / 20) * i / z / tan(t + m / 10000) * cos(t + m / 100) * m / z,
        y: tan(t + m * i / 20) * m / z / tan(t + m * i / 10000) * sin(t + m * i / 100) * i / z
    };
});
var bigbang9 = new Oscillator(function(i, sum) {
    var m = sin((drawCount - sum) / 57000) * 2;
    t = i / 1;
    // t = sin(i);
    var z = 0.2 + sin(m / 100) * 10;
    return {
        x: tan(t) * i / z / tan(t + m / 10000) * cos(t + m / 100) * m / z,
        y: tan(m * i / 10) * m / z / tan(t + m * i / 10000) * sin(t + m * i / 100) * i / z
    };
});
var bigbang10 = new Oscillator(function(i, sum) {
    var m = sin((drawCount - sum) / 57000) * 2;
    t = i / 1;
    // t = sin(i);
    var z = 0.2 + sin(m / 100) * 10;
    return {
        x: tan(t) * i / z / tan(t + m / 10000) * cos(t + m / 100) * m / z,
        y: tan(m * i / 10) * m / z / tan(t + m * i / 100) * sin(t + m * i / 100) * i / z
    };
});
var tancave = new Oscillator(function(i, sum) {
    var m = sin((drawCount - sum) / 57000) * 2;
    t = i / 320;
    // t = sin(i);
    var z = 0.2 + sin(m / 100) * 10;
    return {
        x: tan(t * (-50 + (m / 20))) * cos(t * 40 * (m)) * 200 * i / 1000,
        y: tan(t * (-50 + (m / 10))) * tan(t * 4 * (m / 4)) * 550
    };
});
var cone = new Oscillator(function(i, sum) {
    var m = sin((drawCount - sum) / 57000) * 2;
    t = i / 30;
    // t = sin(i);
    var z = 0.2 + sin(m / 100) * 10;
    return {
        x: tan(t * (-50 + (m / 20))) * sin(t * 40 * (m)) * 200 * i / 5000,
        y: tan(t * (-50 + (m / 10))) * sin(t * 4 * (m / 4)) * 1550
    };
});

//Très intéressant !
var cone2 = new Oscillator(function(i, sum) {
    var m = sin((drawCount - sum) / 57000) * 2;
    t = i / 30;
    // t = sin(i);
    var z = 0.2 + sin(m / 100) * 10;
    return {
        x: tan(t * (-50 + (m / 20))) * sin(t * 40 * (m)) * 200 * i / 5000,
        y: sin(t * (-50 + (m / 10))) * sin(t * 4 * (m / 4)) * 1550
    };
});

//Wow!
var cone3 = new Oscillator(function(i, sum) {
    var m = sin((drawCount - sum) / 57000) * 2;
    t = i / 60;
    // t = sin(i);
    var z = 0.2 + sin(m / 100) * 10;
    return {
        x: tan(t * (-50 + (m / 20))) * sin(t * 16 * m) * 200 * i / 5000,
        y: sin(t * (-50 + (m / 10))) * sin(t * 4 * m / 4) * 1550
    };
});
//Aaaaaah!!!
var cone4 = new Oscillator(function(i, sum) {
    var m = sin((drawCount - sum) / 57000) * 2;
    t = i / 60;
    // t = sin(i);
    var z = 0.2 + sin(m / 100) * 10;
    return {
        x: tan(t * (-50 + (m / 20))) * sin(t * 16 * m) * 200 * i / 5000,
        y: cos(t * (-50 + (m / 20))) * tan(t * 4 * m / 2) * m * i * 100
    };
});
//AaaaAaaaaahAaaaaahaah!!!
var cone5 = new Oscillator(function(i, sum) {
    var m = sin((drawCount - sum) / 57000) * 2;
    t = i / 300;
    // t = sin(i);
    var z = 0.2 + sin(m / 100) * 10;
    return {
        x: tan(t * (-50 + (m / 20))) * sin(t * 16 * m) * sin(t) * 200 * i / 5000,
        y: cos(t * (-50 + (m / 20))) * tan(t * 4 * m / 2) * m * i * 100
    };
});
var cone6 = new Oscillator(function(i, sum) {
    var m = sin((drawCount - sum) / 15700) * 2;
    t = i / 300;
    // t = sin(i);
    var z = 0.2 + sin(m / 100) * 10;
    return {
        x: tan(t * (-50 + (m / 200))) * cos(t * 16 * m) * sin(t) * 200 * i / 5000,
        y: cos(t * (-50 + (m / 200))) * tan(t * 4 * m / 2) * m * i * 100
    };
});
var cone7 = new Oscillator(function(i, sum) {
    var m = sin((drawCount - sum) / 25700) * 2;
    t = i / 300;
    // t = sin(i);
    var z = 0.2 + sin(m / 100) * 10;
    return {
        x: tan(t * (-50 + (m / 200))) * cos(t * 64 * m) * sin(t) * 200 * i / 5000,
        y: cos(t * (-50 + (m / 200))) * tan(t * 4 * m / 2) * m * i * 100
    };
});
var cone8 = new Oscillator(function(i, sum) {
    var m = sin((drawCount - sum) / 25700) * 2;
    t = i / 300;
    // t = sin(i);
    var z = 0.2 + sin(m / 100) * 10;
    return {
        x: tan(t * (-50 + (m / 200))) * cos(t * 64 * m) * 200 * i / 5000,
        y: cos(t * (-50 + (m / 200))) * tan(t * 1 * m / 2) * m * i * 100
    };
});
var cone9 = new Oscillator(function(i, sum) {
    var m = sin((drawCount - sum) / 25700) * 2;
    t = i / 300;
    // t = sin(i);
    var z = 0.2 + sin(m / 100) * 10;
    return {
        x: tan(t * (-50 + (m / 200))) * cos(t * 32 * m) * 200 * i / 5000,
        y: cos(t * (-50 + (m / 200))) * tan(t * m) * m * i * 100
    };
});
var cone10 = new Oscillator(function(i, sum) {
    var m = sin((drawCount - sum) / 25700) * 2;
    t = i / 300;
    // t = sin(i);
    var z = 0.2 + sin(m / 100) * 10;
    return {
        x: tan(t * (-50 + (m / 2000)) / 2) * cos(t * 12 * m) * 200 * i / 5000,
        y: cos(t * (-50 + (m / 2000))) * tan(t * m) * m * i * 100
    };
});
var tremplin = new Oscillator(function(i, sum) {
    var m = sin((drawCount - sum) / 50) * 2;
    t = i / 3000;
    // t = sin(i);
    var z = 0.2 + sin(m / 100) * 10;
    return {
        x: tan(t * (-50 + (m / 200)) / 2) / cos(t * m) * 200 * i / 5000,
        y: tan(t * (-50 + 2000)) * sin(t * m) * tan(t / 1000 * m) * m * i * 100
    };
});
var tremplin2 = new Oscillator(function(i, sum) {
    var m = sin((drawCount - sum) / 20) * 1;
    t = i / 2000;
    // t = sin(i);
    var z = 0.2 + sin(m / 100) * 10;
    return {
        x: tan(t * (-50 + (m / 200)) / 2) / cos(t * m) * 200 * i / 8000,
        y: cos(t * (-50 + 200)) * sin(t * m) * sin(t / 1000 * m) * m * i * 100
    };
});
var tremplin3 = new Oscillator(function(i, sum) {
    var m = sin((drawCount - sum) / 20) * 1;
    t = i / 2000;
    // t = sin(i);
    var z = 0.2 + sin(m / 100) * 10;
    return {
        x: tan(t * (-300 + (m / 200)) / 2) / cos(t * m) * 200 * i / 8000,
        y: cos(t * (-300 + 200)) / sin(t * m) * sin(t / 1000 * m) * m * i * 100
    };
});
var tremplin4 = new Oscillator(function(i, sum) {
    var m = sin((drawCount - sum) / 20) * 1;
    t = i / 2000;
    // t = sin(i);
    var z = 0.2 + sin(m / 100) * 10;
    return {
        x: tan(t * -300) / cos(t * m) * 200 * i / 8000,
        y: tan(t * -150) / sin(t * m) * sin(t / 1000 * m) * m * i * 100
    };
});
var tremplin5 = new Oscillator(function(i, sum) {
    var m = sin((drawCount - sum) / 20) * 1;
    t = i / 2000;
    // t = sin(i);
    var z = 0.2 + sin(m / 100) * 10;
    return {
        x: tan(t * -300) / sin(t * m) * 200 * i / 8000,
        y: tan(t * -150) / sin(t * m) * sin(t / 1000 * m) * m * i * 100
    };
});
var tremplin6 = new Oscillator(function(i, sum) {
    var m = sin((drawCount - sum) / 20) * 1;
    t = i / 2000;
    // t = sin(i);
    var z = 0.2 + sin(m / 100) * 10;
    return {
        x: tan(t * -300) / cos(t * m) * 200 * i / 8000,
        y: sin(t * -150) / sin(t * m) * m * i / 8
    };
});

//Débile.
var tremplin7 = new Oscillator(function(i, sum) {
    var m = sin((drawCount - sum) / 20) * 1;
    t = i / 2000;
    // t = sin(i);
    var z = 0.2 + sin(m / 100) * 10;
    return {
        x: tan(t * -200) / cos(t * m) * sin(t + m) * 200 * i / 8000,
        y: sin(t * -100) / sin(t * m) * tan(t / 10) * m * i / 1
    };
});
var tremplin8 = new Oscillator(function(i, sum) {
    var m = sin((drawCount - sum) / 20) * 1;
    t = i / 2000;
    // t = sin(i);
    var z = 0.2 + sin(m / 100) * 10;
    return {
        x: tan(t * -300) / cos(t * m) * sin(t + m) * 200 * i / 8000,
        y: sin(t * -300) / sin(t * m) * tan(t / 10) * m * i / 1
    };
});
var tremplin9 = new Oscillator(function(i, sum) {
    var m = sin((drawCount - sum) / 20) * 1;
    t = i / 2000;
    return {
        x: cos(t * -3000) * cos(t * m) * cos(t + m) * 200 * i / 500,
        y: tan(t * -3000) * sin(t * m) * sin(t / 10) * m * i / 1
    };
});
var tremplin10 = new Oscillator(function(i, sum) {
    var m = sin((drawCount - sum) / 20) * 1;
    t = i / 2000;
    return {
        x: cos(t * -3000) * cos(t * m / 100) * cos(t + m) * 200 * i / 900,
        y: sin(t * -3000) * sin(t * m * 1) * sin(t / 10) * m * i / 1.3
    };
});
var tremplin11 = new Oscillator(function(i, sum) {
    var m = sin((drawCount - sum) / 20) * 1;
    t = i / 2000;
    return {
        x: cos(t * -300) * cos(t * m) * cos(t + m) * 200 * i / 900,
        y: sin(t * -300) * sin(t * m) * sin(t) * m * i / 10
    };
});
var tremplin12 = new Oscillator(function(i, sum) {
    var m = sin((drawCount - sum) / 20) * 1;
    t = i / 2000;
    return {
        x: cos(t * -250) * cos(t * m) * cos(t + m) * 200 * i / 900,
        y: sin(t * -500) * sin(t * m) * sin(t) * m * i / 10
    };
});
var lesnouveauxmurs = new Oscillator(function(i, sum) {
    var m = sin((drawCount - sum) / 2000) * 1;
    t = i / 2;
    return {
        x: tan(t + (m * 50)) * cos(t + m) * 400 * t / 1000,
        y: pow(tan(t - (m * 50)), 3) * sin(t - m) * 350
    };
});
var murunpeuennuyant = new Oscillator(function(i, sum) {
    var m = sin((drawCount - sum) / 20) * 1;
    t = i / 2;
    return {
        x: tan(t + m) * 400 * i / 1000,
        y: pow(tan(t - (m / 50)), 1) / atan(t - m) * i * 1
    };
});
var lesnouveauxmurs2 = new Oscillator(function(i, sum) {
    var m = sin((drawCount - sum) / 200) * 1;
    t = i / 20;
    return {
        x: sin(t + m) * 400 * i / 2000,
        y: sin(t - (m / 50), 1) / tan(t - m) * i / 10
    };
});
var lesnouveauxmurs3 = new Oscillator(function(i, sum) {
    var m = sin((drawCount - sum) / 20) * 1;
    t = i / 20;
    return {
        x: tan(t) * 400 * i / 2000,
        y: tan(t - m) / tan(t) * i / 10
    };
});
var addition = new Oscillator(function(i, sum) {
    var m = sin((drawCount - sum) / 20) * 1;
    t = i / 20;
    return {
        x: tan(t) + cos(t) * 400 * i * m / 2000,
        y: cos(t - m) / cos(t) * i * m / 10
    };
});
var addition2 = new Oscillator(function(i, sum) {
    var m = sin((drawCount - sum) / 20) * 1;
    t = i / 2;
    return {
        x: tan(t - m) + cos(t - m) - sin(t / 2) * 400 * i * m / 2000,
        y: cos(t - m) / cos(t * m / 100) * i * m / 10
    };
});
var addition3 = new Oscillator(function(i, sum) {
    var m = sin((drawCount - sum) / 20) * 1;
    t = i / 4;
    return {
        x: tan(t) + cos(t) - sin(t) * 400 * i * m / 2000,
        y: cos(t - m) / cos(t * m / 30) * i / 20
    };
});
var addition4 = new Oscillator(function(i, sum) {
    var m = sin((drawCount - sum) / 20) * 1;
    t = i / 4;
    return {
        x: tan(t) + cos(t) - sin(t) * 400 * i * m / 2000,
        y: tan(t - m) / cos(t * m / 3000) * i / 20
    };
});
var addition5 = new Oscillator(function(i, sum) {
    var m = sin((drawCount - sum) / 20) * 1;
    t = i / 4;
    return {
        x: tan(t) / cos(t) - sin(t + m) * 400 * i * m / 2000,
        y: tan(t) / cos(t * m / 3000) * i / 20
    };
});
var apreslatherapie = new Oscillator(function(i, sum) {
    var m = sin((drawCount - sum) / 20) * 1;
    t = i / 10;
    return {
        x: tan(cos(tan(t * m))) * m * 200,
        y: tan(sin(tan(t * m))) * i / 15
    };
});
var losangearrondifou = new Oscillator(function(i, sum) {
    var m = sin((drawCount - sum) / 20) * 1;
    t = i / 10;
    return {
        x: tan(cos(tan(t * m))) * m * 200,
        y: tan(sin(tan(t * m))) * m * 150
    };
});
var carrebizarre = new Oscillator(function(i, sum) {
    var m = sin((drawCount - sum) / 20) * 1;
    t = i / 100;
    return {
        x: tan(cos(tan(t * m * 3) * cos(t))) * m * 200,
        y: tan(sin(tan(t * m * 3) * sin(t))) * m * 150
    };
});
var signaletbruit = new Oscillator(function(i, sum) {
    var m = sin((drawCount - sum) / 20) * 1;
    t = i / 10;
    return {
        x: tan(tan(tan(t * m * 3) * cos(t / 100))) * m * 200,
        y: tan(tan(tan(t * m * 3) * sin(t / 100))) * m * 150
    };
});
//La chose la plus hot au monde.
var tancave2 = new Oscillator(function(i, sum) {
    var m = sin((drawCount - sum) / 20000) * 1;
    t = i / 10;
    return {
        x: sin(t * (2 + m)) * cos(t * (m / 4)) * 800 * i / 4000,
        y: cos(t * (2 + m)) * cos(t * (m / 4)) * 350
    };
});

var premiereNuit = new Oscillator(function(i, sum) {
    var m = sin((drawCount - sum) / 700) / 5;
    t = i / 60;
    return {
        x: sin(t * (-5 + m)) * asin(t * (m / 4)) * 800 * i / 1000,
        y: tan(t * (-5 + m)) * asin(t * (m / 4)) * (sin(t * (m)) * t * m * 1) * 350
    };
});

var losangecontrejour = new Oscillator(function(i, sum) {
    var m = sin((drawCount - sum) / 20) * 1;
    t = i / 10;
    return {
        x: tan(cos(tan(t * m))) * 200 / cos(m),
        y: tan(sin(tan(t * m))) * 150 / sin(t)
    };
});

var losangecontrejour2 = new Oscillator(function(i, sum) {
    var m = sin((drawCount - sum) / 20000) * 1;
    t = i / 10;
    return {
        x: tan(cos(tan(t * m))) * 350 / cos(m),
        y: tan(sin(tan(t * m))) * 150 / sin(t)
    };
});

var fausseSuperEllipse = new Oscillator(function(i, sum) {
    var m = sin((drawCount - sum) / 2000) * 1;
    t = i / 10;
    return {
        x: tan(cos(tan(t * m))) * 350 * cos(t),
        y: tan(sin(tan(t * m))) * 200 * sin(t)
    };
});

var spiraleDeLosanges = new Oscillator(function(i, sum) {
    var m = sin((drawCount - sum) / 500) * 1;
    t = i / 10;
    return {
        x: tan(cos(tan(t * m))) * 3 * t,
        y: tan(sin(tan(t * m))) * 2 * t
    };
});

var losangesChangeants = new Oscillator(function(i, sum) {
    var m = sin((drawCount - sum) / 500) * 1;
    t = i / 10;
    return {
        x: tan(cos(tan(t * m))) * 1000 * m,
        y: tan(sin(tan(t * m))) * 2 * t
    };
});

//---------------------------------//
//Cercle qui se mange.
var selfDigestingCircle2 = new Oscillator(function(i, sum) {
    var m = sin((drawCount - sum) / 100) / 3500;
    t = i / 20;
    return {
        x: pow(cos(t * (m * 10)), 30) * sin(t) * 550,
        y: pow(cos(t * (m * 10)), 100) * cos(t) * 350
    };
});
var selfDigestingCircle3 = new Oscillator(function(i, sum) {
    var m = sin((drawCount - sum) / 100) / 3500;
    t = i / 20;
    return {
        x: pow(cos(t * (m * 10)), 30) * sin(t) * 550,
        y: pow(cos(t * (m * 2)), 100) * cos(t) * 350
    };
});

var selfDigestingCircle4 = new Oscillator(function(i, sum) {
    var m = sin((drawCount - sum) / 100) / 3500;
    t = i / 20;
    var z = 25 + sin(m / 10) * 100;
    return {
        x: pow(cos(t * (m * 10)), 30) * sin(t * z) * 550,
        y: pow(cos(t * (m * 2)), 100) * cos(t * z) * 350
    };
});

var selfDigestingCircle5 = new Oscillator(function(i, sum) {
    var m = sin((drawCount - sum) / 10) / 3500;
    t = i / 10;
    var z = 25 + sin(m / 500) * 100;
    return {
        x: pow(cos(t * (m * 10 + (z * 0.5))), 10) * sin(t * z) * 550,
        y: pow(cos(t * (m * 2)), 1) * cos(t * z) * 350
    };
});

var selfDigestingCircle6 = new Oscillator(function(i, sum) {
    var m = sin((drawCount - sum) / 20) / 3500;
    t = i / 10;
    var z = 25 + sin(m / 500) * 100;
    return {
        x: pow(cos(t * (m * 10 + (z * 0.5))), 10) * sin(t * z) * 550,
        y: pow(cos(t * (m * 2)), 100) * cos(t * z * 2) * 350
    };
});

var selfDigestingCircle7 = new Oscillator(function(i, sum) {
    var m = sin((drawCount - sum) / 20) / 3500;
    t = i / 10;
    var z = 25 + sin(m / 500) * 100;
    return {
        x: pow(cos(t * (m * 10 + (z * 2))), 1) * sin(t * z) * i / 5,
        y: pow(cos(t * (m * 2)), 100) * cos(t * z * 2) * 350
    };
});

var selfDigestingCircle8 = new Oscillator(function(i, sum) {
    var m = sin((drawCount - sum) / 20) / 3500;
    t = i / 10;
    var z = 25 + sin(m / 500) * 100;
    return {
        x: pow(cos(z * (m * 100 + (z * 2))), 1) * sin(t * z) * i / 5,
        y: pow(cos(t * (m * 2)), 100) * cos(t * z * 2) * 350
    };
});

var selfDigestingCircle9 = new Oscillator(function(i, sum) {
    var m = sin((drawCount - sum) / 20) / 3500;
    t = i / 10;
    var z = 25 + sin(m / 500) * 100;
    return {
        x: pow(cos(z * (m * 100 + (z * 2))), 1) * sin(t * z / 2) * i / 5,
        y: pow(cos(t * (m * 2)), 100) * cos(t * z * 2) * 350
    };
});

//Très très beau et différent.
var selfDigestingCircle10 = new Oscillator(function(i, sum) {
    var m = sin((drawCount - sum) / 40) / 3500;
    t = i / 1;
    var z = 25 + sin(m / 500) * 100;
    return {
        x: pow(cos(z * (m * 100 + (z * 2))), 1) * sin(t * z / 4) * i / 5,
        y: pow(cos(t * (m * 2)), 100) * cos(t * z * 2) * 350
    };
});

//Variante intéressante du 10.
var selfDigestingCircle11 = new Oscillator(function(i, sum) {
    var m = sin((drawCount - sum) / 80) / 3500;
    t = i;
    var z = 25 + sin(m / 5) * 100;
    return {
        x: pow(cos(z * (m * 100 + (z * 2))), 1) * sin(t * z / 4) * i / 5,
        y: pow(cos(t * (m * 2)), 100) * cos(t * z * 2) * 350
    };
});

//Autre variante intéressante. Fait penser aux équations minuscules.
var selfDigestingCircle12 = new Oscillator(function(i, sum) {
    var m = sin((drawCount - sum) / 80) / 7500;
    t = i;
    var z = 25 + sin(m / 5) * 100;
    return {
        x: pow(cos(z * (m * 100 + (z * 20))), 1) * sin(t * z / 4) * i / 5,
        y: pow(cos(t * (m * 2)), 100) * cos(t * z * 2) * 350
    };
});

//--- 26 août 2016

var nouveauxLosanges1 = new Oscillator(function(i, sum) {
    var m = sin((drawCount - sum) / 20000) * 1;
    t = i / 20;
    return {
        x: tan(cos(tan(t))) * i / cos(m * t) / 15,
        y: tan(sin(tan(t))) * i / sin(t) / 20
    };
});

//---- Belle rotation autour d'un nuage de losanges à moitié démolis.
var nouveauxLosanges2 = new Oscillator(function(i, sum) {
    var m = sin((drawCount - sum) / 10000) * 1;
    t = i / 40;
    return {
        x: tan(cos(tan(t))) * i / cos(m * t) / 15,
        y: tan(sin(tan(t))) * i / cos(t) / 20
    };
});

//Spirale de losanges
var nouveauxLosanges3 = new Oscillator(function(i, sum) {
    var m = sin((drawCount - sum) / 10000) * 1;
    t = i / 40;
    return {
        x: tan(cos(tan(t))) * i / cos(m * t) / 15,
        y: tan(sin(tan(t))) * i / cos(m * t) / 20
    };
});

var nouveauxLosanges4 = new Oscillator(function(i, sum) {
    var m = sin((drawCount - sum) / 10000) * 1;
    t = i / 20;
    return {
        x: tan(cos(tan(t))) * i / tan(m * t) / 15,
        y: tan(sin(tan(t))) * i / tan(m * t) / 20
    };
});

var nouveauxLosanges5 = new Oscillator(function(i, sum) {
    var m = sin(1 + (drawCount - sum) / 20) /  200;
    t = i / 20;
    var x = sin(cos(t)) * tan(cos(t * m)) * i / 10 * 1.5;
    var y = sin(sin(t)) * tan(sin(t * m)) * i / 10 * 1.5;

    var mm = sin((drawCount - sum) / 200) / 1000;
    var tt = i / 10;

    // var xx = tan(cos(tan(tt * mm))) * mm * 200;
    // var yy = tan(sin(tan(tt * mm))) * i / 15;
    var xx = sin(tt * (-5 + mm)) * asin(tt * 4 * (mm / 4)) * 800 * i / 1000;
    var yy = sin(tt * (5 + mm)) * asin(tt * 4 * (mm / 4)) * 550;

    return {
        x: lerp(x, xx, 0.1),
        y: lerp(y, yy, 0.1)
    };

});

var nouveauxLosanges6 = new Oscillator(function(i, sum) {
    var m = sin(1 + (drawCount - sum) / 20) /  200;
    t = i / 20;
    var x = sin(cos(t)) * tan(cos(t * m)) * i / 10 * 1.5;
    var y = sin(sin(t)) * tan(sin(t * m)) * i / 10 * 1.5;

    var mm = sin((drawCount - sum) / 2) / 1000;
    var tt = i / 20;

    // var xx = tan(cos(tan(tt * mm))) * mm * 200;
    // var yy = tan(sin(tan(tt * mm))) * i / 15;
    var xx = sin(tt * (-5 + mm)) * asin(tt * 4 * (mm / 4)) * 800 * i / 1000;
    var yy = sin(tt * (5 + mm)) * asin(tt * 4 * (mm / 4)) * 550;

    return {
        x: lerp(x, xx, 0.1),
        y: lerp(y, yy, 0.1)
    };

});

var nouveauxLosanges7 = new Oscillator(function(i, sum) {
    var m = sin(1 + (drawCount - sum) / 20) /  200;
    t = i / 20;
    var x = sin(cos(t)) * tan(cos(t * m)) * i / 10 * 1.5;
    var y = sin(sin(t)) * i / 10 * 1.5;

    var mm = sin((drawCount - sum) / 2) / 1000;
    var tt = i / 20;

    // var xx = tan(cos(tan(tt * mm))) * mm * 200;
    // var yy = tan(sin(tan(tt * mm))) * i / 15;
    var xx = sin(tt * (-5 + mm)) * asin(tt * 4 * (mm / 4)) * 800 * i / 1000;
    var yy = sin(tt * (5 + mm)) * asin(tt * 4 * (mm / 4)) * 550;

    return {
        x: lerp(x, xx, 0.1),
        y: lerp(y, yy, 0.1)
    };

});

var nouveauxLosanges8 = new Oscillator(function(i, sum) {
    var m = sin(1 + (drawCount - sum) / 2) /  2;
    t = i / 20;
    var x = sin(cos(t)) * i / 10 * 3.5;
    var y = sin(sin(t)) * i / 10 * 2.5;

    var mm = sin((drawCount - sum) / 20) / 1000;
    var tt = i / 20;

    var xx = asin(tt * 4 * (mm / 4)) * 800 * i / 1000;
    var yy = asin(tt * 4 * (mm / 4)) * cos(tt * (5 + mm)) * 550;

    return {
        x: lerp(x, xx, 0.5),
        y: lerp(y, yy, 0.5)
    };

});

var nouveauxLosanges9 = new Oscillator(function(i, sum) {
    var m = sin(1 + (drawCount - sum) / 2) /  2;
    t = i / 20;
    var x = sin(cos(t)) * i / 10 * 9.5;
    var y = sin(sin(t)) * i / 10 * 8.5;

    var mm = sin((drawCount - sum) / 20) / 1000;
    var tt = i / 20;

    var xx = asin(tt * 2 * (mm / 4)) * 800 * i / 1000;
    var yy = asin(tt * 2 * (mm / 4)) * cos(tt * (5 + mm)) * cos(tt * (5 + mm)) * 550;

    return {
        x: lerp(x, xx, 0.9),
        y: lerp(y, yy, 0.9)
    };

});


var nouveauxLosanges10 = new Oscillator(function(i, sum) {
    var m = sin(1 + (drawCount - sum) / 2) /  2;
    t = i / 20;
    var x = sin(cos(t)) * i / 10 * 14.5;
    var y = sin(sin(t)) * i / 10 * 12.5;

    var mm = sin((drawCount - sum) / 20) / 1000;
    var tt = i / 20;

    var xx = asin(tt * 2 * (mm / 4)) * cos(tt * (5 + mm)) * 800 * i / 1000;
    var yy = asin(tt * 2 * (mm / 4)) * cos(tt * (5 + mm)) * cos(tt * (5 + mm)) * 550;

    return {
        x: lerp(x, xx, 0.85),
        y: lerp(y, yy, 0.85)
    };
});

var nouveauxLosanges11 = new Oscillator(function(i, sum) {
    var m = sin(1 + (drawCount - sum) / 2) /  2;
    t = i / 20;
    var x = sin(cos(t)) * i / 10 * 14.5;
    var y = sin(sin(t)) * i / 10 * 12.5;

    var mm = sin((drawCount - sum) / 20) / 500;
    var tt = i / 20;

    var xx = asin(tt * 2 * (mm / 4)) * cos(tt * (5 + mm)) * 800 * i / 1000;
    var yy = asin(tt * 2 * (mm / 4)) * cos(tt * (5 + mm)) * cos(tt * (5 + mm)) * 550;

    return {
        x: lerp(x, xx, 0.85),
        y: lerp(y, yy, 0.85)
    };
});

var nouveauxLosanges12 = new Oscillator(function(i, sum) {
    var m = sin(1 + (drawCount - sum) / 2) /  2;
    t = i / 20;
    var x = sin(cos(t)) * i / 10 * 14.5;
    var y = sin(sin(t)) * i / 10 * 12.5;

    var mm = sin((drawCount - sum) / 2) / 500;
    var tt = i / 20;

    var xx = asin(tt * 2 * (mm / 4)) * cos(tt * (5 + mm)) * 800 * i / 1000;
    var yy = asin(tt * 2 * (mm / 4)) * cos(tt * (5 + mm)) * cos(tt * (5 + mm)) * 550;

    return {
        x: lerp(x, xx, 2.85) / 25,
        y: lerp(y, yy, 2.85) / 25
    };
});

//Lundi le 26 septembre 2016

var septembre = new Oscillator(function(i, sum) {
    var m = sin((2000 + drawCount - sum) / 20) / 100;
    t = i / 30;
    return {
        x: cos(t * (m)) * 800 * i / 1000 / 3,
        y: pow(sin(t * (2 + m)) * sin(t * (20 * m)), 3) * 350
    };
});


var deLorimier = new Oscillator(function(i, sum) {
    var m = sin((drawCount - sum) / 100) / 100;
    t = i / 10;
    return {
        x: 200 + (sin(t * 2) - cos(t * m * 0.01) * 5) * t / 2.5,
        y: (sin(t) - sin(t * m * 2)) * 180
    };
});







// t = i/60;
// x = sin(t*(-5+m)) * asin(t*(m/4)) * 800 * i/1000;
// y = tan(t*(-5+m)) * asin(t*(m/4)) * (sin(t*(m))*t*m*1) * 350;




// t = i/10;
// // x = cos(t) * (sin(t*(2+m))/4) * 2400 * i/1000;
// x = sin(t*(2+m)) * cos(t*(m/4)) * 800 * i/1000;
// y = cos(t*(2+m)) * cos(t*(m/4)) * 350;


//Formule modifiée - Tangeante délirante.
// t = i/320;
// // x = cos(t) * (sin(t*(2+m))/4) * 2400 * i/1000;
// x = atan(t*(-50+(m/20))) * cos(t*40*(m)) * 200 * i/1000;
// y = tan(t*(4.5+(m*10))) * tan(t*4*(m/4)) * 550;






// t = i/50;
// x = tan(cos(tan((t/1)+(m*10))+(m*10))+(m*10)) * 600 * t/200;
// y = tan(t+m) * 350;


// t = i/60;
// x = sin(t*(-5+m)) * asin(t*(m/4)) * 800 * i/1000;
// y = tan(t*(-5+m)) * asin(t*(m/4)) * (tan(t*(m))*t*m*1) * 350;