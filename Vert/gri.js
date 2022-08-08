// griArr = files.js[8].data.split("\n");
griY = 0;

ps = "        // we will assign the attribute texcoords to the varying texcoords to move them from the vert shader to "

swatchesArr = "░▒▓│┤╡╢╖╕╣║╗╝╜╛┐└┴┬├─┼╞╟╚╔╩╦╠═╬╧╨╤╥╙╘╒╓╫╪┘┌█▄▌▐▀αßΓπΣσµτΦΘΩδ∞φε∩≡±≥≤⌠⌡÷≈°∙·√ⁿ²■";

swatchesArr = "░▒▓█▀▄▌▐┌─┬┐│┤┘┴└├┼╔═╦╗║╣╝╩╚╠╬╒╤╕╡╛╧╘╞╓╥╖╢╜╨╙╟╫╪•◘☼►◄▲▼▬↑↓↨→←≡±≥≤αßΓπΣσµτΦΘΩδ∞φε∩⌠⌡÷≈°∙·√ⁿ²■";

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

let GrimoireTab = function(o) {
    this.name = o.name,
    this.scroll = o.scroll;
    this.carets = o.carets;
    this.selections = o.selections;
    this.data = o.data;
    this.history = [];
    this.historyIndex = 0;
    this.lastEdited = null;
    this.headState = null;
    this.attachedHeadState = true;
};

GrimoireTab.prototype.applyHistoryState = function(n) {
    let h = this.history[n];
    this.data = [];
    for (let i = 0; i < h.data.length; i++) {
        this.data.push(h.data[i]);
    }
    this.carets = [];
    for (let i = 0; i < h.carets.length; i++) {
        this.carets.push(h.carets[i]);
    }
    this.scroll = {x: h.scroll.x, y: h.scroll.y};
    this.historyIndex = n;
};

GrimoireTab.prototype.applyHeadState = function() {
    let h = this.headState;
    this.data = [];
    for (let i = 0; i < h.data.length; i++) {
        this.data.push(h.data[i]);
    }
    this.carets = [];
    for (let i = 0; i < h.carets.length; i++) {
        this.carets.push(h.carets[i]);
    }
    this.scroll = {x: h.scroll.x, y: h.scroll.y};
    this.historyIndex = this.history.length;
};

GrimoireTab.prototype.prepareHistoryState = function() {
    let data = [];
    for (let i = 0; i < this.data.length; i++) {
        data.push(this.data[i]);
    }
    let carets = [];
    for (let i = 0; i < this.carets.length; i++) {
        let c = this.carets[i]
        carets.push({x: c.x, y: c.y, dir: c.dir, curXRef: c.curXRef});
    }
    let scroll = {x: this.scroll.x, y: this.scroll.y};
    return {scroll: scroll, carets: carets, data: data};
};

GrimoireTab.prototype.logHistory = function(h) {
    this.history.push(h);
};

GrimoireTab.prototype.moveCaretsX = function(x) {
    let t = this;
    for (let i = 0; i < t.carets.length; i++) {
        t.carets[i].dir = 0;
    }
    if (x == 1) {
        for (let i = 0; i < t.carets.length; i++) {
            let c = t.carets[i];
            if (c.x == t.data[c.y].length
                &&
                c.x < t.data.length
                ) {
                c.x = 0;
                c.y++;
            } else if (c.x < t.data[c.y].length) {
                c.x += x;
            }
        }
    } else if (x == -1) {
        for (let i = 0; i < t.carets.length; i++) {
            let c = t.carets[i];
            if (c.x == 0 && c.y > 0) {
                c.y--;
                c.x = t.data[c.y].length;
                // c.x = 0;
            } else if (c.x > 0) {
                c.x += x;
            }
        }
    }
};

GrimoireTab.prototype.moveCaretsY = function(y) {
    let t = this;
    for (let i = 0; i < t.carets.length; i++) {
        let c = t.carets[i];
        if (c.dir == 0) {
            c.dir = 1;
            c.curXRef = c.x;
        }
    }
    if (y == 1) {
        for (let i = 0; i < t.carets.length; i++) {
            let c = t.carets[i];
            if (c.y < t.data.length) {
                c.y++;
                c.x = Math.min(t.data[c.y].length, c.curXRef);
            }
        }
    } else if (y == -1) {
        for (let i = 0; i < t.carets.length; i++) {
            let c = t.carets[i];
            if (c.y > 0) {
                c.y--;
                c.x = Math.min(t.data[c.y].length, c.curXRef);
            }
        }
    }
    for (let i = 0; i < t.carets.length; i++) {
         let c = t.carets[i];
        if (c.y < t.scroll.y) {
            t.scroll.y--;
            break;
        } else if (c.y > t.scroll.y + 21) {
            t.scroll.y++;
            break;
        }
    }
};

GrimoireTab.prototype.scroll = function(x, y) {

};

GrimoireTab.prototype.addLine = function() {

};

GrimoireTab.prototype.deleteLine = function() {

};


GrimoireTab.prototype.updateSelection = function() {

};


GrimoireTab.prototype.evaluate = function() {

};


GrimoireTab.prototype.update = function(s) {
    let t = this;
        for (let i = 0; i < t.carets.length; i++) {
            let c = t.carets[i];
            // let line = t.data[c.y];
            t.data[c.y] = t.data[c.y].slice(0, c.x) + s + t.data[c.y].slice(c.x);
            let y = c.y;
            let x = c.x;
            for (let j = 0; j < t.carets.length; j++) {
               let d = t.carets[j];
               if (d.y == y && d.x >= x) {
                   d.x++;
               }
           }
            // c.x++;
        }
};

GrimoireEditor.prototype.update = function(e) {
    let s = e.key;
    let t = this.activeTab;
    if (t !== null) {
        let updated = true;
        let updateDate = new Date();
        let historyState;
        let updateHistory = false;
        if (t.lastEdited == null) {
            historyState = t.prepareHistoryState();
            updateHistory = true;
        } else {
            let editDelta = updateDate.getTime() - t.lastEdited.getTime();
            console.log(editDelta);
            if (editDelta > 3000) {
                historyState = t.prepareHistoryState();
                updateHistory = true;
            }
        };
    
        if (s == "ArrowRight") {
            t.moveCaretsX(1);
            updateHistory = false;
        } else if (s == "ArrowLeft") {
            t.moveCaretsX(-1);
            updateHistory = false;
        } else if (s == "ArrowUp") {
            t.moveCaretsY(-1);
            updateHistory = false;
        } else if (s == "ArrowDown") {
            t.moveCaretsY(1);
            updateHistory = false;
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
        } else if (s == "z" && e.metaKey && e.shiftKey) {
            if (t.historyIndex < t.history.length - 1){
                t.applyHistoryState(t.historyIndex + 1);
            } else if (t.historyIndex == t.history.length - 1) {
                t.applyHeadState();
                t.attachedHeadState = true;
            }
            updated = false;
        } else if (s == "z" && e.metaKey) {
            if (t.attachedHeadState) {
                // t.logHistory(t.prepareHistoryState());
                // t.historyIndex++;
                // t.lastEdited = updateDate;
                t.headState = t.prepareHistoryState();
                t.attachedHeadState = false;
            }
            if (!t.attachedHeadState) {
                if (t.historyIndex > 0) {
                    t.applyHistoryState(t.historyIndex - 1);
                }
            }
            updated = false;
        } else if (s.length == 1) {
            t.update(s);
        } else {
            updated = false;
        }
        // if (updated && t.historyIndex < t.history.length) {
        if (updated && !t.attachedHeadState) {
            t.history.length = t.historyIndex;
            t.historyIndex = t.history.length;
            t.attachedHeadState = true;
        }
        if (updated && updateHistory) {
            t.logHistory(historyState);
            t.historyIndex++;
            t.lastEdited = updateDate;
            t.headState = t.prepareHistoryState();
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
            x = Math.floor(map(x, -1, 1, 0, 70) + 18);
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



search = function(s) {
    var re = new RegExp(s, 'g')
    for (let y = ge.activeTab.scroll.y + 1; y < ge.activeTab.data.length; y++) {
        let text = ge.activeTab.data[y];
        let t = text.match(re);
        if (t) {
            text.replace(re, function(a, x) {
                // console.log("x" + x);
                ge.activeTab.scroll.y = y;
                ge.activeTab.carets[0].y = y;
                ge.activeTab.carets[0].x = x + s.length;
            });
            break;
            // console.log(t);
        }
    }
}
