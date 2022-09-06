




let line = t.carets[0].y;
let up = false, down = false;
while (line > 0 && up == false) {
    up = t.data[line].replace(/^\s*/,'') == "(";
    line--;
}
if (up) {
    up = line;
    while (line < t.data.length && down == false) {
        down = t.data[line].replace(/^\s*/,'') == ")";
        line++;
    }
    if (down) {
        down = line;
        let firstX = Infinity;
        for (let i = up; i < down; i++) {
            t.data[i].replace(/^\s*/,function(a){firstX = Math.min(firstX, a.length)});
        }
        socket.emit('interpretSuperCollider', codeBracket, t.canvasPath);
        ge.evaluated = 5;
        ge.evaluatedLines = [up, down, firstX];
    }
}
