Oscillator = function(eq) {
    // this.t = 0;
    this.x = 0;
    this.y = 0;
    this.i = 3000;
    this.eq = eq;
    this.graph = [];
}

Oscillator.prototype.update = function(sum) {
    globalGraph = [];
    this.graph = [];
    var sumFix = (sum) ? sum : 0;
    for (var i = 0; i < this.i; i++) {
        this.x = this.eq(i, sumFix).x;
        this.y = this.eq(i, sumFix).y;
        var v = createVector(this.x, this.y);
        this.graph.push(v);
    }
    globalGraph = this.graph.slice();
};

Oscillator.prototype.mix = function(sum, oO, sumO, mR) {
    globalGraph = [];
    this.graph = [];
    for (var i = 0; i < this.i; i++) {
        this.x = lerp(this.eq(i, sum).x, oO.eq(i, sumO).x, mR);
        this.y = lerp(this.eq(i, sum).y, oO.eq(i, sumO).y, mR);
        var v = createVector(this.x, this.y);
        this.graph.push(v);
    }
    globalGraph = this.graph.slice();
}