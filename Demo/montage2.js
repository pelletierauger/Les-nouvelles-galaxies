var fs = require('fs');
let computedInput = "";
let fileName = "montage2";

let sequences = [{
        path: `../Credits/frames/carton/carton-`,
        start: 75,
        end: 280,
        copies: 1
    },
    // CARTON 1
    {
        path: `../Credits/frames/carton/carton-`,
        start: 1,
        end: 30,
        copies: 1
    },
    {
        path: `../Credits/frames/carton-01/carton-01-`,
        start: 6,
        end: 256,
        copies: 1
    },
    {
        path: `../Credits/frames/carton/carton-`,
        start: 30,
        end: 50,
        copies: 1
    },
    // SCENE 1
    {
        path: "../Vacillant/frames/sketch-",
        start: 2,
        end: 5900 - 5400 * 0,
        copies: 1
    },
    // CARTON 2
    {
        path: `../Credits/frames/carton/carton-`,
        start: 30,
        end: 50,
        copies: 1
    },
    {
        path: `../Credits/frames/carton-02/carton-02-`,
        start: 6,
        end: 256,
        copies: 1
    },
    {
        path: `../Credits/frames/carton/carton-`,
        start: 30,
        end: 50,
        copies: 1
    },
    // SCENE 2
    {
        path: "../Bruit-vert/frames/pulsar-super/pulsar-super-",
        start: 2,
        end: 1684 - 1200 * 0,
        copies: 1
    },
    // CARTON 3
    {
        path: `../Credits/frames/carton/carton-`,
        start: 30,
        end: 50,
        copies: 1
    },
    {
        path: `../Credits/frames/carton-03/carton-03-`,
        start: 6,
        end: 256,
        copies: 1
    },
    {
        path: `../Credits/frames/carton/carton-`,
        start: 30,
        end: 50,
        copies: 1
    },
    // SCENE 3
    {
        path: "../Bruit-vert/frames/alligator-new/alligator-new-",
        start: 2,
        end: 2346 - 2000 * 0,
        copies: 1
    },
    // CARTON 4
    {
        path: `../Credits/frames/carton/carton-`,
        start: 30,
        end: 50,
        copies: 1
    },
    {
        path: `../Credits/frames/carton-04/carton-04-`,
        start: 6,
        end: 256,
        copies: 1
    },
    {
        path: `../Credits/frames/carton/carton-`,
        start: 30,
        end: 50,
        copies: 1
    },
    // SCENE 4
    {
        path: "../Bruit-vert/frames/swirl-fadeout-flicker/swirl-fadeout-flicker-",
        start: 2,
        end: 2508 - 2000 * 0,
        copies: 1
    }
];


for (s of sequences) {
    for (let f = s.start; f <= s.end; f++) {
        var formattedF = "" + f;
        while (formattedF.length < 5) {
            formattedF = "0" + formattedF;
        }
        let line = `file '${s.path}${formattedF}.png'\n`;
        for (let i = 0; i < s.copies; i++) {
            computedInput += line;
        }
    }
}

fs.writeFile(fileName + '.txt', computedInput, function(err) {
    if (err) {
        return console.error(err);
    } else {
        console.log(fileName + '.txt written successfully.');
    }
});