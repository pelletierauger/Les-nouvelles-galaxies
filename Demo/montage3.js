var fs = require('fs');
let computedInput = "";
let fileName = "montage3";

let sequences = [{
        path: `../Credits/frames/carton/carton-`,
        start: 75,
        end: 280,
        copies: 1
    }, {
        path: `../Credits/frames/carton/carton-`,
        start: 1,
        end: 50,
        copies: 1
    },
    {
        path: "../Vacillant/frames/sketch-",
        start: 2,
        end: 5900,
        copies: 1
    },
    {
        path: "../Bruit-vert/frames/pulsar-super/pulsar-super-",
        start: 2,
        end: 1684,
        copies: 1
    },
    {
        path: "../Bruit-vert/frames/alligator-new/alligator-new-",
        start: 2,
        end: 2346,
        copies: 1
    },
    {
        path: "../Bruit-vert/frames/swirl-fadeout-flicker-02/swirl-fadeout-flicker-02-",
        start: 2,
        end: 1798,
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