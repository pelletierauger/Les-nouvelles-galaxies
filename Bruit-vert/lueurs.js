var fs = require('fs');
let computedInput = "";
let fileName = "lueurs";

let sequences = [{
        path: `/Volumes/Volumina/frames/lueurs/pastel-hills-half-smear/pastel-hills-half-smear-`,
        start: 1,
        end: 695,
        copies: 1
    }, {
        path: `/Volumes/Volumina/frames/lueurs/pink-pulsar-brighter/pink-pulsar-brighter-`,
        start: 1,
        end: 2512,
        copies: 1
    },
    {
        path: "/Volumes/Volumina/frames/lueurs/alligator-quiet-smear/alligator-quiet-smear-",
        start: 1,
        end: 2653,
        copies: 1
    },
    {
        path: "/Volumes/Volumina/frames/lueurs/swirl-quiet-2k-smear/swirl-quiet-2k-smear-",
        start: 1,
        end: 1836,
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