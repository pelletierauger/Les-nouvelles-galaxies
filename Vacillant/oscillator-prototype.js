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
    for (var i = 0; i < this.i; i++) {
        this.x = this.eq(i, sumFix).x;
        this.y = this.eq(i, sumFix).y;
        vertices.push(this.x * s * 0.822, this.y * s * -1.45, 0);
    }
};

Oscillator.prototype.mix = function(sum, oO, sumO, mR) {
    vertices = [];
    let s = 0.00125 * 1.55 * 0.98;
    for (var i = 0; i < this.i; i++) {
        this.x = lerp(this.eq(i, sum).x, oO.eq(i, sumO).x, mR);
        this.y = lerp(this.eq(i, sum).y, oO.eq(i, sumO).y, mR);
        vertices.push(this.x * s * 0.822, this.y * s * -1.45, 0);
    }
}