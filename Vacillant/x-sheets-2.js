xSheet2 = {
    test: {
        d: 3000,
        f: function(sum) {
            var rN = getSum(xSheet, xSheet2.test);
            let n = Math.min(map(frameCount, 0, 400, 1.5, 0), 1.5);
            noisy = makeNoise(n);
        }
    },
    key: function(n) {
        return this[Object.keys(this)[n]];
    }
};