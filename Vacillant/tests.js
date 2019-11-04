oscillators[19].eq = function(i, sum) {
    var m = sin((drawCount - sum) / 1200) / 5;
//     m = 0.1;
    t = i / 60;
    let n = map(sin(drawCount * 1e-4), -1, 1, -15, -5);
    return {
        x: sin(t * (n + m)) * asin(t * (m / 4)) * 800 * i / 1000 * 0.15 * 2,
        y: tan(t * (n + m)) * asin(t * (m / 8)) * (sin(pow(t * m, 1))) * 350 * 0.75 * 2
    };
};


drawCount = 0;
oscillators[38].eq = function(i, sum) {
    let prev; = this.eq(i, sum -1);
    var m = sin((drawCount - sum) / 700) / 5;
//     m = 0.1;
    n = map(sin(drawCount * 1e-4), -1, 1, 2, 10);
    t = i / 30;
    let s = map(drawCount, 0, 100, 0, 1);
    s = Math.min(s, 1);
    s = (1 - cosineFade(0, 100)) * 1.1;
    return {
        x: sin(t * (5 + m)) * cos(t * (m / 4)) * 800 * i / 3000 * 0.5 * s,
        y: cos(t * (5 + m)) * cos(t * (m / 4)) * 550 * 0.5 * s
    };
};