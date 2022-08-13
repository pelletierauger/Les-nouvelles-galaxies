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
    this.sel = h.sel;
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
    this.sel = h.sel;
};

GrimoireTab.prototype.prepareHistoryState = function() {
    let data = [];
    for (let i = 0; i < this.data.length; i++) {
        data.push(this.data[i]);
    }
    let carets = [];
    for (let i = 0; i < this.carets.length; i++) {
        let c = this.carets[i]
        carets.push({x: c.x, y: c.y, dir: c.dir, curXRef: c.curXRef, sel: c.sel});
    }
    let scroll = {x: this.scroll.x, y: this.scroll.y};
    return {scroll: scroll, carets: carets, data: data};
};

GrimoireTab.prototype.logHistory = function(h) {
    this.history.push(h);
};

GrimoireTab.prototype.moveCaretsX = function(x, sel = false) {
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
    for (let i = 0; i < t.carets.length; i++) {
        let c = t.carets[i];
        for (let j = t.carets.length -1; j > i; j--) {
            let c2 = t.carets[j];
            if (c.x == c2.x && c.y == c2.y) {
                t.carets.splice(j, 1);
            }
        }
        if (sel == false) {
            c.sel = null;
        }
    }
};

GrimoireTab.prototype.moveCaretsY = function(y, sel = false) {
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
            if (c.y < t.data.length - 1) {
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
    for (let i = 0; i < t.carets.length; i++) {
        let c = t.carets[i];
        for (let j = t.carets.length -1; j > i; j--) {
            let c2 = t.carets[j];
            if (c.x == c2.x && c.y == c2.y) {
                t.carets.splice(j, 1);
            }
        }
        if (sel == false) {
            c.sel = null;
        }
    }    
};

GrimoireTab.prototype.scroll = function(x, y) {

};

GrimoireTab.prototype.addLine = function() {

};

GrimoireTab.prototype.deleteLine = function() {

};


// GrimoireTab.prototype.updateSelection = function() {

// };


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

// GrimoireTab.prototype.getGridPosition = function(x, y, mx, my) {
//     let g = this.data;
//     let nx = x;
//     let ny = y;
//     if (x == 0) {
//         if (y == 0) {
//             if (mx == 1) {
//                 if (g[y].length == 0) {
//                     ny++;
//                 } else {
//                     nx++;
//                 }
//             } else if (my == 1) {
//                 if (g.length > 1) {
//                     ny++;
//                 }
//             }
//         } else {
//             if (mx == -1) {
//                 ny--;
//                 nx = g[ny].length;
//             } else if (mx == 1) {
//                 if (x < g[y].length) {
//                     nx++;
//                 } else {
//                     ny++;
//                 }
//             } else if (my == -1) {
//                 ny--;
//             } else if (my == 1) {
//                 ny = Math.min(ny + 1, g[y].length - 1);
//             }
//         }
//     } else {
//         if (x < g[y])
//     }
//     return [nx, ny];
// };


GrimoireTab.prototype.select = function() {
    let t = this;
    // // if (t.selections.length == 0) {
    // //     for (let i = 0; i < t.carets.length; i++) {
    // //         let c = t.carets[i];
    // //         let sel = true;
    // //         if (c.x == 0 && c.y == 0 && (x == -1 || y == -1)) {
    // //             sel = false;               
    // //         }
    // //         if (c.x == t.data[c.y].length - 1 &&
    // //             c.y == t.data.length - 1 &&
    // //             (x == 1 || y == 1)
    // //             ) {
    // //             sel = false;
    // //         }
    // //         if (sel) {
    // //             // c.sel = []
    // //         }
    // //     }
    // // }
    // for (let i = 0; i < t.carets.length; i++) {
    //     let c = t.carets[i];
    //     if (x == -1 || y == -1) {
    //         if (c.sel == null) {c.sel == []}
    //     } else if (x == 1 || y == 1) {

    //     }
    //     // c.sel = [];
    //     // c.sel[0] = c.x;
    //     // c.sel[1] = 
    // }
    for (let i = 0; i < t.carets.length; i++) {
        let c = t.carets[i];
        if (c.sel == null) {
            c.sel = [c.x, c.y];
        }
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
            // console.log(editDelta);
            if (editDelta > 3000) {
                historyState = t.prepareHistoryState();
                updateHistory = true;
            }
        };
    
        if (s == "ArrowDown" && e.altKey && t.scroll.y < t.data.length) {
            t.scroll.y++;
            t.moveCaretsY(1);
            updateHistory = false;
        } else if (s == "ArrowDown" && e.metaKey) {
            for (let i = 0; i < 23; i++) {t.moveCaretsY(1);}
            updateHistory = false;
        } else if (s == "ArrowUp" && e.metaKey) {
            for (let i = 0; i < 23; i++) {t.moveCaretsY(-1);}
            updateHistory = false;
        } else if (s == "ArrowUp" && e.altKey && t.scroll.y > 0) {
            t.scroll.y--;
            t.moveCaretsY(-1);
            updateHistory = false;
        } else if (s == "ArrowRight" && e.shiftKey) {
            t.select();
            t.moveCaretsX(1, true);
            updateHistory = false;
        } else if (s == "ArrowRight") {
            t.moveCaretsX(1);
            updateHistory = false;
        } else if (s == "ArrowLeft" && e.shiftKey) {
            t.select();
            t.moveCaretsX(-1, true);
            updateHistory = false;
        } else if (s == "ArrowLeft") {
            t.moveCaretsX(-1);
            updateHistory = false;
        } else if (s == "ArrowUp" && e.shiftKey) {
            t.select();
            t.moveCaretsY(-1, true);
            updateHistory = false;
        } else if (s == "ArrowUp") {
            t.moveCaretsY(-1);
            updateHistory = false;
        } else if (s == "ArrowDown" && e.shiftKey) {
            t.select();
            t.moveCaretsY(1, true);
            updateHistory = false;
        } else if (s == "ArrowDown") {
            t.moveCaretsY(1);
            updateHistory = false;
        } else if (s == "PageUp") {
            for (let i = 0; i < 23; i++) {t.moveCaretsY(-1);}
            updateHistory = false;
        } else if (s == "PageDown") {
            for (let i = 0; i < 23; i++) {t.moveCaretsY(1);}
            updateHistory = false;
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


updateDrawing = function(e) {
        let s = e.key;
    let t = ge.activeTab;
    if (t !== null) {
        if (s == "z" && e.metaKey && e.shiftKey) {
            if (t.historyIndex < t.history.length - 1){
                t.applyHistoryState(t.historyIndex + 1);
            } else if (t.historyIndex == t.history.length - 1) {
                t.applyHeadState();
                t.attachedHeadState = true;
            }
            // updated = false;
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
            // updated = false;
        }
    }
}



let GrimoireCanvas = function() {
    this.data = [];
};

GrimoireCanvas.prototype.addBlankLine = function(n) {
    // let a = [];
    // for (let i = 0; i < 109; i++) {
    //     a[i] = 0;
    // }
    this.data[n] = [];    
};
GrimoireCanvas.prototype.addBlankGlyph = function(x, y) {
    if (this.data[y]) {
        this.data[y][x] = [];            
    }
};

gc = new GrimoireCanvas();




window.addEventListener('mousemove', e => {
    if (e.altKey && ge.activeTab && mode == 3) {
        let val = (e.shiftKey) ? 0 : 1;
        // paint(fmouse[0], fmouse[1], smouse[0], smouse[1], val);
        paint(val);
    }
});

// window.addEventListener('dragstart', e => {
//     if (mode == 1) {
//         let t = ge.activeTab;
//         t.carets = [];
//         let x = Math.min(t.data[fmouse[1] + t.scroll.y].length, fmouse[0]);
//         t.carets.push({x: x, y: fmouse[1] + t.scroll.y, dir: 0, curXRef: 0, sel: [x, fmouse[1] + t.scroll.y]});
//     }
// });
// window.addEventListener('dragend', e => {
//     if (mode == 1) {
//         let t = ge.activeTab;
//         // t.carets = [];
//         let x = Math.min(t.data[fmouse[1] + t.scroll.y].length, fmouse[0]);
//         t.carets[0].x = x;
//         t.carets[0].y = fmouse[1] + t.scroll.y;
//             // .push({x: x, y: fmouse[1] + t.scroll.y, dir: 0, curXRef: 0, sel: [x, fmouse[1] + t.scroll.y]});
//     }
// });

// socket.emit('saveFile', {path: "/Users/guillaumepelletier/Desktop/grimoirePainting.json", data: JSON.stringify(gc.data).replace(/null/g, "0")});




savePainting2 = function() {
    let path = "/Users/guillaumepelletier/Desktop/grimoirePaintingNotOptimized.json";
    // let data = JSON.stringify(gc.data).replace(/null/g, "0").replace(/0,/g, "2").replace(/1,/g, "3");
    let data = JSON.stringify(gc.data).replace(/null/g, "0");
    // data = data.replace(/(2)(\1*)/g, (a, b, c) => {
    //     // console.log(a);
    //     if (a.length > 3) {
    //         return "<" + a.length + ">"
    //     } else {
    //         return a;
    //     }
    // });
    // data = data.replace(/23/g, ".");
    // data = data.replace(/32/g, "-");
    // data = data.replace(/2\./g, "_");
    // data = data.replace(/33/g, "+");
    // data = data.replace(/33/g, "+");
    // data = data.replace(/\.\./g, "=");
    // data = data.replace(/\+\+/g, "/");
    socket.emit('saveFile', {path: path, data: data});
}


savePainting = function() {
    let path = "/Users/guillaumepelletier/Desktop/grimoirePainting2.json";
    let data = [];
    for (let y = 0; y < gc.data.length; y++){
        if (gc.data[y]) {
            for (let x = 0; x < gc.data[y].length; x++){
                if (gc.data[y][x]) {
                    for (let xy = 0; xy < gc.data[y][x].length; xy++) {
                        if (gc.data[y][x][xy]) {
                            data.push([y, x, xy]);
                        }
                    }
                }
            }
        }
    }
    socket.emit('saveFile', {path: path, data: JSON.stringify(data)});
};

if (false) {

ge.activeBrush = {
    anchor: [3, 3],
    data: [
        [1, 0, 0, 0, 0, 0, 0, 1],
        [0, 1, 0, 0, 0, 0, 1, 0],
        [0, 0, 1, 0, 0, 1, 0, 0],
        [0, 0, 0, 1, 1, 0, 0, 0],
        [0, 0, 1, 0, 0, 1, 0, 0],
        [0, 1, 0, 0, 0, 0, 1, 0],
        [1, 0, 0, 0, 0, 0, 0, 1]
    ]
};

ge.activeBrush = {
    anchor: [0, 0],
    data: [
        [1]
    ]
};
    

    ge.activeBrush = {
    anchor: [2, 1],
    data: [
        [0, 0, 0, 1, 1],
        [0, 0, 1, 1, 0],
        [0, 1, 1, 0, 0],
        [1, 1, 0, 0, 0]
    ]
};
    

        ge.activeBrush = {
    anchor: [2, 1],
    data: getGlyph("O")
};

        ge.activeBrush = {
    anchor: [2, 1],
    data: [
        [1, 1, 0, 0, 0],
        [0, 1, 1, 0, 0],
        [0, 0, 1, 1, 0],
        [0, 0, 0, 1, 1]
    ]
};


ge.activeBrush = {
    anchor: [7, 7],
    data: [
        [1, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 1],
        [0, 1, 0, 0, 0, 0, 1, 0, 0, 1, 0, 0, 0, 0, 1, 0],
        [0, 0, 1, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 1, 0, 0],
        [0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0],
        [0, 0, 1, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 1, 0, 0],
        [0, 1, 0, 0, 0, 0, 1, 0, 0, 1, 0, 0, 0, 0, 1, 0],
        [1, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 1],
        [1, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 1],
        [0, 1, 0, 0, 0, 0, 1, 0, 0, 1, 0, 0, 0, 0, 1, 0],
        [0, 0, 1, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 1, 0, 0],
        [0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0],
        [0, 0, 1, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 1, 0, 0],
        [0, 1, 0, 0, 0, 0, 1, 0, 0, 1, 0, 0, 0, 0, 1, 0],
        [1, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 1]
    ]
};



ge.activeBrush = {
    anchor: [6, 6],
    data: [
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
    ]
};
resetBrushPositions = function() {
    ge.brushPositions = [];
    for (let y = 0; y < 22 * 9; y++) {
        ge.brushPositions[y] = [];
        for (let x = 0; x < 109 * 7; x++) {
            ge.brushPositions[y][x] = 0;
        }
    }
    // console.log("reset!");
    let b = ge.activeBrush;
    let tx = (fmouse[0] * 7) + smouse[0];
    let tox = Math.max(0, tx - b.anchor[0]);
    let bix = (tx - tox) - b.anchor[0];
    // let fox = Math.floor(tox / 7);
    // let sox = tox % 7;
    let bixmax = Math.min(b.data[0].length, 763 - (tox + b.data[0].length));
    let ty = (fmouse[1] * 9) + smouse[1];
    let toy = Math.max(0, ty - b.anchor[1]);
    let biy = ((ty - toy) - b.anchor[1]);
    // biy = Math.max(0, b.anchor[1] - ty);
    // biy = (b.anchor[1] > ty) ? b.anchor[1] - ty : 0;
    // let foy = Math.floor(toy / 9);
    // let soy = toy % 9;
    let biymax = Math.min(b.data.length, 198 - (toy + b.data.length));
    // logJavaScriptConsole("ty: " + ty + " ,  b.anchor[1] :" +  b.anchor[1] + " , biy: " + biy + ", biymax: " + biymax);
    for (let y = biy; y < biymax; y++) {
        for (let x = bix; x < bixmax; x++) {
                 // console.log("x: " + x + ", y: " + y);
            let brush = b.data[y][x];
            if (brush == 1 || brush == "1") {
                // console.log("A brush with greatness!");
                ge.brushPositions[toy + y - b.anchor[1] * 0][tox + x - b.anchor[0] * 0] = 1;
            }
        }
    }
}
resetBrushPositions();
ge.activePattern = diagonal0;


}

patternScale = 1;
paintingKeys = function(e) {
    let s = e.key;
    let t = ge.activeTab;
    if (s == "ArrowDown") {
        t.moveCaretsY(1);
        t.scroll.y++;
    } else if (s == "ArrowUp") {
        t.moveCaretsY(-1);
        t.scroll.y = Math.max(0, t.scroll.y - 1);
    } else if (s == "s") {
        switch(patternScale) {
            case 1: patternScale = 0.5; break;
            case 0.5: patternScale = 0.25; break;
            case 0.25: patternScale = 1; break;
        }
    }
};




window.addEventListener('wheel', (e) => {
    // logJavaScriptConsole(e.deltaY);
    if (ge.activeTab !== null && grimoire) {
        let delta = Math.floor(e.deltaY * 0.5);
        if (e.deltaY > 0) {
            ge.activeTab.scroll.y = Math.min(ge.activeTab.scroll.y + delta, ge.activeTab.data.length - 22);
        } else if (e.deltaY < 0) {
            ge.activeTab.scroll.y = Math.max(ge.activeTab.scroll.y + delta, 0);
        }
    }
});
