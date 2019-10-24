Oscillator = function(eq) {
    // this.t = 0;
    this.x = 0;
    this.y = 0;
    this.i = 3000;
    this.eq = eq;
    this.graph = [];
}

Oscillator.prototype.update = function(sum) {
    vertices = [];
    var sumFix = (sum) ? sum : 0;
    let s = 0.00125 * 1.55 * 0.98;
    let t = drawCount * 1e-3 * 0.125;
    let t2 = t * 1e1;
    let xO = openSimplex.noise2D(t2, t2 + 1000) * 16;
    let yO = openSimplex.noise2D(t2 - 1000, t2 + 500) * 16;
    t2 = (t2 + 5000) * 100;
    let xO2 = openSimplex.noise2D(t2, t2 + 1000) * 4 + xO;
    let yO2 = openSimplex.noise2D(t2 - 1000, t2 + 500) * 4 + yO;
    let t3 = t * 1e3;
    let al = map(openSimplex.noise2D(t3, t3 + 1000), -1, 1, 0.025, 1.5);
    for (var i = 0; i < this.i; i++) {
        this.x = this.eq(i, sumFix).x;
        this.y = this.eq(i, sumFix).y;
        let zo = (openSimplex.noise2D(i, (t + i) * 1e4 + 100)) * 4 + 15;
        let a = al * (map(Math.abs(this.y), 0, 440, 1, 0)) * 1;
        a = a * (map(i, 0, 3000, 0.5, 1)) * 1;
        vertices.push((this.x + xO2) * s * 0.822, (this.y + yO2) * s * -1.45, zo, a);
    }
};

Oscillator.prototype.mix = function(sum, oO, sumO, mR) {
    vertices = [];
    let s = 0.00125 * 1.55 * 0.98;
    let t = drawCount * 1e-3 * 0.125;
    let t2 = t * 1e1;
    let xO = openSimplex.noise2D(t2, t2 + 1000) * 16;
    let yO = openSimplex.noise2D(t2 - 1000, t2 + 500) * 16;
    t2 = (t2 + 5000) * 100;
    let xO2 = openSimplex.noise2D(t2, t2 + 1000) * 4 + xO;
    let yO2 = openSimplex.noise2D(t2 - 1000, t2 + 500) * 4 + yO;
    let t3 = t * 1e3;
    let al = map(openSimplex.noise2D(t3, t3 + 1000), -1, 1, 0.025, 1.5);
    for (var i = 0; i < this.i; i++) {
        this.x = lerp(this.eq(i, sum).x, oO.eq(i, sumO).x, mR);
        this.y = lerp(this.eq(i, sum).y, oO.eq(i, sumO).y, mR);
        let zo = (openSimplex.noise2D(i, (t + i) * 1e4 + 100)) * 4 + 15;
        let a = al * (map(Math.abs(this.y), 0, 440, 1, 0)) * 1;
        a = a * (map(i, 0, 3000, 0.5, 1)) * 1;
        vertices.push((this.x + xO2) * s * 0.822, (this.y + yO2) * s * -1.45, zo, a);
    }
}