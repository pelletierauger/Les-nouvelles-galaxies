var xSheet = {
    introduction: {
        d: 450,
        f: function() {
            // var rN = getSum(xSheet, xSheet.grotte);
            firstSpiral.run();
        }
    },
    introTransition: {
        d: 300,
        f: function(sum) {
            //The getSum function is used to get the sum another scene within the sheet.
            //Calling the getSum on the first scene of the x-sheet should be pointless.
            var rN = getSum(xSheet, xSheet.introTransition);
            var coFade = cosineFade(sum, 50);
            secondSpiral.mix(0, firstSpiral, 0, coFade);
        }
    },
    // scene3: {
    //     d: 170,
    //     f: function(sum) {
    //         //The getSum function is used to get the sum another scene within the sheet.
    //         //Calling the getSum on the first scene of the x-sheet should be pointless.
    //         // var rN = getSum(xSheet, xSheet.introTransition);
    //         var coFade = cosineFadeSynchronous(drawCount, sum, 9);
    //         coFade = map(coFade, 0, 1, 0, 0.45);
    //         secondSpiral.mix(0, userControlledParticle, 0, coFade);
    //     }
    // },
    // scene3: {
    //     d: 50,
    //     f: function(sum) {
    //         //The getSum function is used to get the sum another scene within the sheet.
    //         //Calling the getSum on the first scene of the x-sheet should be pointless.
    //         var rN = getSum(xSheet, xSheet.introTransition);
    //         var coFade = cosineFade(sum, 50);
    //         thirdSpiral.mix(0, secondSpiral, 0, coFade);
    //     }
    // },
    preChorus: {
        d: 690,
        f: function(sum) {
            //The getSum function is used to get the sum another scene within the sheet.
            //Calling the getSum on the first scene of the x-sheet should be pointless.
            var rN = getSum(xSheet, xSheet.introTransition);
            var coFade = cosineFade(sum, 400);
            octoSpiral.mix(0, secondSpiral, 0, coFade);
        }
    },

    //--------------First chorus---------------------------------------------------//
    firstChorus: {
        d: 130,
        f: function(sum) {
            //The getSum function is used to get the sum another scene within the sheet.
            //Calling the getSum on the first scene of the x-sheet should be pointless.
            var rN = getSum(xSheet, xSheet.introTransition);
            var coFade = cosineFade(sum, 10);
            triangularSpiral2.mix(sum, octoSpiral, 0, coFade);
        }
    },
    superellipse1: {
        d: 160,
        f: function(sum) {
            //The getSum function is used to get the sum another scene within the sheet.
            //Calling the getSum on the first scene of the x-sheet should be pointless.
            var rN = getSum(xSheet, xSheet.firstChorus);
            var coFade = cosineFade(sum, 10);
            superellipseSpiral.mix(sum + 80, triangularSpiral2, rN, coFade);
        }
    },
    endFirstChorus: {
        d: 280,
        f: function(sum) {
            //The getSum function is used to get the sum another scene within the sheet.
            //Calling the getSum on the first scene of the x-sheet should be pointless.
            var rN = getSum(xSheet, xSheet.superellipse1);
            var coFade = cosineFade(sum, 10);
            autumnSpiral3.mix(sum, superellipseSpiral, rN + 80, coFade);
        }
    },

    //--------------Second verse---------------------------------------------------//
    secondVerse: {
        d: 572,
        f: function(sum) {
            //The getSum function is used to get the sum another scene within the sheet.
            //Calling the getSum on the first scene of the x-sheet should be pointless.
            var rN = getSum(xSheet, xSheet.endFirstChorus);
            var coFade = cosineFade(sum, 15);
            autumnSpiral13b.mix(sum, autumnSpiral3, rN, coFade);
        }
    },
    // spider1: {
    //     d: 585,
    //     f: function(sum) {
    //         //The getSum function is used to get the sum another scene within the sheet.
    //         //Calling the getSum on the first scene of the x-sheet should be pointless.
    //         var rN = getSum(xSheet, xSheet.endFirstChorus);
    //         var coFade = cosineFade(sum, 15);
    //         spiderSpiral.mix(sum, superellipseSpiral2, rN - 25, coFade);
    //     }
    // },

    //--------------Second chorus---------------------------------------------------//
    // star1: {
    //     d: 575,
    star1: {
        d: 299,
        f: function(sum) {
            //The getSum function is used to get the sum another scene within the sheet.
            //Calling the getSum on the first scene of the x-sheet should be pointless.
            var rN = getSum(xSheet, xSheet.secondVerse);
            var coFade = cosineFade(sum, 15);
            starSpiral2.mix(sum, autumnSpiral13b, rN, coFade);
        }
    },
    starAutumn: {
        d: 287,
        f: function(sum) {
            //The getSum function is used to get the sum another scene within the sheet.
            //Calling the getSum on the first scene of the x-sheet should be pointless.
            var rN = getSum(xSheet, xSheet.star1);
            var coFade = cosineFade(sum, 15);
            autumnSpiral2b.mix(sum - 140, starSpiral2, rN, coFade);
        }
    },

    //--------------Bridge, conclusion---------------------------------------------------//
    spider2: {
        d: 280,
        f: function(sum) {
            //The getSum function is used to get the sum another scene within the sheet.
            //Calling the getSum on the first scene of the x-sheet should be pointless.
            var rN = getSum(xSheet, xSheet.starAutumn);
            var coFade = cosineFade(sum, 15);
            spiderSpiral2.mix(sum, autumnSpiral2b, rN - 140, coFade);
        }
    },
    spider3: {
        d: 280,
        f: function(sum) {
            //The getSum function is used to get the sum another scene within the sheet.
            //Calling the getSum on the first scene of the x-sheet should be pointless.
            var rN = getSum(xSheet, xSheet.spider2);
            var coFade = cosineFade(sum, 15);
            spiderSpiral3.mix(sum, spiderSpiral2, rN, coFade);
        }
    },
    octo2: {
        d: 300,
        f: function(sum) {
            //The getSum function is used to get the sum another scene within the sheet.
            //Calling the getSum on the first scene of the x-sheet should be pointless.
            var rN = getSum(xSheet, xSheet.spider3);
            var coFade = cosineFade(sum, 15);
            octoSpiral2.mix(sum + 1000, spiderSpiral3, rN, coFade);
        }
    },
    fast: {
        d: 150,
        f: function(sum) {
            //The getSum function is used to get the sum another scene within the sheet.
            //Calling the getSum on the first scene of the x-sheet should be pointless.
            var rN = getSum(xSheet, xSheet.octo2);
            var coFade = cosineFade(sum, 10);
            fastSpiral.mix(sum + 20, octoSpiral2, rN + 1000, coFade);
        }
    },
    fast2: {
        d: 143,
        f: function(sum) {
            //The getSum function is used to get the sum another scene within the sheet.
            //Calling the getSum on the first scene of the x-sheet should be pointless.
            var rN = getSum(xSheet, xSheet.fast);
            var coFade = cosineFade(sum, 1);
            fastSpiral2.mix(rN, fastSpiral, rN, coFade);
        }
    },
    valley1: {
        d: 36,
        f: function(sum) {
            //The getSum function is used to get the sum another scene within the sheet.
            //Calling the getSum on the first scene of the x-sheet should be pointless.
            var rN = getSum(xSheet, xSheet.fast2);
            var coFade = cosineFade(sum, 5);
            autumnSpiral9.mix(sum, fastSpiral2, rN, coFade);
        }
    },
    valley2: {
        d: 36,
        f: function(sum) {
            //The getSum function is used to get the sum another scene within the sheet.
            //Calling the getSum on the first scene of the x-sheet should be pointless.
            var rN = getSum(xSheet, xSheet.valley1);
            var coFade = cosineFade(sum, 5);
            autumnSpiral6c.mix(sum, fastSpiral2, rN, coFade);
        }
    },
    valley3: {
        d: 36,
        f: function(sum) {
            //The getSum function is used to get the sum another scene within the sheet.
            //Calling the getSum on the first scene of the x-sheet should be pointless.
            var rN = getSum(xSheet, xSheet.valley2);
            var coFade = cosineFade(sum, 5);
            autumnSpiral2.mix(sum, autumnSpiral6c, rN, coFade);
        }
    },
    valley4: {
        d: 36,
        f: function(sum) {
            //The getSum function is used to get the sum another scene within the sheet.
            //Calling the getSum on the first scene of the x-sheet should be pointless.
            var rN = getSum(xSheet, xSheet.valley3);
            var coFade = cosineFade(sum, 5);
            autumnSpiral6.mix(sum, autumnSpiral2, rN, coFade);
        }
    },
    fast3: {
        d: 142,
        f: function(sum) {
            //The getSum function is used to get the sum another scene within the sheet.
            //Calling the getSum on the first scene of the x-sheet should be pointless.
            var rN = getSum(xSheet, xSheet.valley4);
            var coFade = cosineFade(sum, 1);
            fastSpiral2.mix(rN, autumnSpiral6, rN, coFade);
        }
    },
    exit: {
        d: 200,
        f: function(sum) {
            //The getSum function is used to get the sum another scene within the sheet.
            //Calling the getSum on the first scene of the x-sheet should be pointless.
            var rN = getSum(xSheet, xSheet.fast3);
            var coFade = cosineFade(sum, 15);
            exitSpiral.mix(sum, fastSpiral2, rN, coFade);
        }
    },
    exit2: {
        d: 665,
        f: function(sum) {
            //The getSum function is used to get the sum another scene within the sheet.
            //Calling the getSum on the first scene of the x-sheet should be pointless.
            var rN = getSum(xSheet, xSheet.exit);
            var coFade = cosineFade(sum, 600);
            exitSpiral2.mix(rN, exitSpiral, rN, coFade);
        }
    },
    exit3: {
        d: 250,
        f: function(sum) {
            //The getSum function is used to get the sum another scene within the sheet.
            //Calling the getSum on the first scene of the x-sheet should be pointless.
            var rN = getSum(xSheet, xSheet.exit2);
            var coFade = cosineFade(sum, 10);
            exitParticle.mix(rN, exitSpiral2, rN, coFade);
        }
    },
    credits1: {
        d: 200,
        f: function(sum) {
            //The getSum function is used to get the sum another scene within the sheet.
            //Calling the getSum on the first scene of the x-sheet should be pointless.
            var rN = getSum(xSheet, xSheet.exit2);
            var coFade = cosineFade(sum, 30);
            creditsParticle.mix(rN, exitParticle, rN, coFade);
        }
    },
    // preChorus: {
    //     d: 6000,
    //     f: function(sum) {
    //         //The getSum function is used to get the sum another scene within the sheet.
    //         //Calling the getSum on the first scene of the x-sheet should be pointless.
    //         var rN = getSum(xSheet, xSheet.introTransition);
    //         var coFade = cosineFade(sum, 15);
    //         firstParticle.mix(0, fourthSpiral, 0, coFade);
    //     }
    // },
    key: function(n) {
        return this[Object.keys(this)[n]];
    }
};

Object.size = function(obj) {
    var size = 0,
        key;
    for (key in obj) {
        if (obj.hasOwnProperty(key)) size++;
    }
    return size;
};

function cosineFade(sum, dur) {
    var fade = map(drawCount, sum, sum + dur, 1, 0);
    var fadeCons = constrain(fade, 0, 1);
    var fadeSmooth = fadeCons * PI;
    var coFade = map(cos(fadeSmooth), 1, -1, 0, 1);
    return coFade;
}

function cosineFadeSynchronous(t, sum, dur) {
    var fade = map(t, sum, sum + dur, 1, 0);
    var fadeCons = constrain(fade, 0, 1);
    var fadeSmooth = fadeCons * PI;
    var coFade = map(cos(fadeSmooth), 1, -1, 0, 1);
    return coFade;
}

function cosineFade2(t, dur) {
    var fade = map(t, sum, sum + dur, 1, 0);
    var fadeCons = constrain(fade, 0, 1);
    var fadeSmooth = fadeCons * PI;
    var coFade = map(cos(fadeSmooth), 1, -1, 0, 1);
    return coFade;
}

function runXSheet(sheet) {
    var tL = Object.size(sheet);

    //If the drawCount is lower than the duration of the first scene within the x-sheet, run that scene.
    if (drawCount < sheet.key(0).d) {
        sheet.key(0).f();

        //Else...for each scene of the sheet...calculate the total keyframes in the PREVIOUS scenes...
        //This is the sum. The number of frames preceding a scene.
        //Now... if the drawCount is higher or equal to that sum, and if it is lower than
        //the sum + the current scene's duration.. it means we are within the right scene. So run it.
        //Now, why do I pass this sum to the function inside the sheet ?
        //I do it because, this way, every single scene within the x-sheet can be launched as if it
        //was launched on drawCount 0. I just need to the pass the sum property to the run function.
        //This way, run()  gets "the current DrawCount minus all the previous scenes in the sheet".
    } else {
        for (var i = 1; i < tL; i++) {
            var sum = 0;
            for (var ii = 0; ii < i; ii++) {
                sum += sheet.key(ii).d;
            }

            if (drawCount >= sum && drawCount < sum + sheet.key(i).d) {
                sheet.key(i).f(sum);
            }
        }
    }
}

function getSum(sheet, prop) {
    var tL = Object.size(sheet);
    var propLocation = 0;
    var sum = 0;
    for (var i = 0; i <  tL; i++) {
        if (sheet.key(i) === prop) {
            propLocation = i;
        }
    }
    for (var ii = 0; ii < propLocation; ii++) {
        sum += sheet.key(ii).d;
    }
    return sum;
}

function queryXSheet(sheet) {
    var tL = Object.size(sheet);

    for (var i = 0; i < tL; i++) {
        var sum = 0;
        for (var ii = 0; ii < i; ii++) {
            sum += sheet.key(ii).d;
        }
        if (drawCount >= sum && drawCount < sum + sheet.key(i).d) {
            var name = Object.getOwnPropertyNames(sheet);
            return ("Scene #" + i + ", " + name[i]);
        }
    }
}

function sumXSheet(sheet) {
    var tL = Object.size(sheet);
    var sum = 0;
    for (var i = 0; i < tL - 1; i++) {
        sum += sheet.key(i).d;
    }
    return sum;
}
