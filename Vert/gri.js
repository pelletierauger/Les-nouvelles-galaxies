// griArr = files.js[8].data.split("\n");
griY = 0;

ps = "        // we will assign the attribute texcoords to the varying texcoords to move them from the vert shader to "

swatchesArr = "░▒▓│┤╡╢╖╕╣║╗╝╜╛┐└┴┬├─┼╞╟╚╔╩╦╠═╬╧╨╤╥╙╘╒╓╫╪┘┌█▄▌▐▀αßΓπΣσµτΦΘΩδ∞φε∩≡±≥≤⌠⌡÷≈°∙·√ⁿ²■";

swatchesArr = "░▒▓█▀▄▌▐┌─┬┐│┤┘┴└├┼╔═╦╗║╣╝╩╚╠╬╒╤╕╡╛╧╘╞╓╥╖╢╜╨╙╟╫╪αßΓπΣσµτΦΘΩδ∞φε∩≡±≥≤⌠⌡÷≈°∙·√ⁿ²■";

// files.js[8].data = griArr.join("\n")




tab = function(s) {
    if (s == null) {
        ge.activeTab = null;
        return;
    }
    for (let i = 0; i < ge.files.scd.length; i++) {
        if (ge.files.scd[i].name == s) {
            ge.activeTab = ge.files.scd[i];
        }
    }
    for (let i = 0; i < ge.files.js.length; i++) {
        // logJavaScriptConsole(griFiles.js[i]);
        if (ge.files.js[i].name == s) {
            ge.activeTab = ge.files.js[i];
        }
    }
}

let GrimoireEditor = function() {
    this.activeTab = null;
};

GrimoireEditor.prototype.update = function(e) {
    let s = e.key;
    let t = this.activeTab;
    if (t !== null) {
        if (s == "ArrowRight") {
            for (let i = 0; i < t.carets.length; i++) {
                let c = t.carets[i];
                if (c.x == t.data[c.y].length) {
                    c.x = 0;
                    c.y++;
                } else {
                    c.x++;
                }
                // t.carets[i].x++;                
            }
        } else if (s == "ArrowDown" && e.altKey && t.scroll.y < t.data.length) {
            t.scroll.y++;
            for (let i = 0; i < t.carets.length; i++) {
                t.carets[i].y++;
            }
        } else if (s == "ArrowDown" && e.metaKey && t.scroll.y + 20 < t.data.length) {
            t.scroll.y+=20;
            console.log("lamb");
            for (let i = 0; i < t.carets.length; i++) {
                t.carets[i].y += 20;
            }
        } else if (s == "ArrowUp" && e.altKey && t.scroll.y > 0) {
            t.scroll.y--;
            for (let i = 0; i < t.carets.length; i++) {
                t.carets[i].y--;
            }
        } else if (s == "PageUp") {
            t.scroll.y = Math.max(0, t.scroll.y - 20);
            for (let i = 0; i < t.carets.length; i++) {
                t.carets[i].y = Math.max(0, t.carets[i].y - 20);
            }
        } else if (s == "PageDown") {
            t.scroll.y+=20;
            for (let i = 0; i < t.carets.length; i++) {
                t.carets[i].y+=20;
            }
        }
    }
};


marr = [];
for (let y = 0; y < 25; y++) {
    marr.push([]);
    for (let x = 0; x < 110; x++) {
        marr[y].push(0);
    }
}
updateHole = function() {
    if (ge.activeTab !== null) {
        for (let i = 0; i < 40; i++) {
            let x = Math.cos(i * 0.5 + drawCount * 0.125e2) * i / 40;
            let y = Math.sin(i * 0.5 + drawCount * 0.125e2) * i / 40;
            x = Math.floor(map(x, -1, 1, 0, 80) + 15);
            y = Math.floor(map(y, -1, 1, 0, 25));
            marr[y][x] = 10;
        }
        let g = ge.activeTab;
        for (let y = 0; y < 25; y++) {
            let padding = "";
            let row = [];
            for (let x = 0; x < 110; x++) {
                marr[y][x] = Math.max(0, marr[y][x] - Math.abs(Math.sin(drawCount * 1e-2)) * 0.25);
                let str = " .;jO0░▒▓█";
                row.push(str[Math.floor(marr[y][x])]);
                // g.data[y + 2 + g.scroll.y][x + 25] = str[marr[y][x]];
                // let yS = g.data[y + 2 + g.scroll.y];
                // g.data[y + 2 + g.scroll.y] = yS.substring(0, x) + str[marr[y][x]] + yS.substr(x);
            }
            g.data[y] = padding + row.join("") + padding;
        }
    }
};