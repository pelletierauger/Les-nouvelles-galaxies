var fs = require('fs');
let computedInput = "";
let fileName = "vert-montage";

let sequences = [{
        path: `/Volumes/Volumina/frames/vortex/travelling-oak-3-slow/sketch-`,
        start: 3261,
        end: 3360,
        copies: 1
    },
    {
        path: `/Volumes/Volumina/frames/vortex/travelling-oak-3-slow/sketch-`,
        start: 1,
        end: 100,
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