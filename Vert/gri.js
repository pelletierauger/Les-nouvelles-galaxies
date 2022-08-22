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
            if (ge.activeTab.canvas == null) {
                ge.activeTab.canvas = new GrimoireCanvas();
            }
            if (ge.activeBrush == null) {
                ge.activeBrush = types[typeIndex][brushIndex];
            }
            if (ge.activePattern == null) {
                ge.activePattern = patterns[3];
            }
            resetBrushPositions();
        }
    }
    for (let i = 0; i < ge.files.js.length; i++) {
        // logJavaScriptConsole(griFiles.js[i]);
        if (ge.files.js[i].name == s) {
            ge.activeTab = ge.files.js[i];
            if (ge.activeTab.canvas == null) {
                ge.activeTab.canvas = new GrimoireCanvas();
            }
            if (ge.activeBrush == null) {
                ge.activeBrush = types[typeIndex][brushIndex];
            }
            if (ge.activePattern == null) {
                ge.activePattern = patterns[3];
            }
            resetBrushPositions();
        }
    }
}

let GrimoireEditor = function() {
    this.activeTab = null;
    this.activeBrush = null;
    this.activePattern = null;
};

GrimoireEditor.prototype.saveCanvas = function() {
    if (this.activeTab !== null) {
        this.activeTab.saveCanvas();
    }
};

let GrimoireTab = function(o) {
    this.name = o.name,
    this.scroll = o.scroll;
    this.carets = o.carets;
    this.data = o.data;
    this.canvasData = o.canvasData;
    this.canvasPath = o.canvasPath;
    if (this.canvasData !== null && this.canvasPath !== null) {
        this.canvas = new GrimoireCanvas();
        this.canvas.data = decodeAsciiString(this.canvasData);
    }
    this.history = [];
    this.historyIndex = 0;
    this.lastEdited = null;
    this.headState = null;
    this.attachedHeadState = true;
};

GrimoireTab.prototype.saveCanvas = function() {
    let data = "";
    let gc = this.canvas;
    if (gc.data.length > 0) {
        for (let i = 0; i < gc.data.length; i++) {
            for (let j = 0; j < 109; j++) {
                for (let k = 0; k < 63; k++) {
                    if (gc.data[i] && gc.data[i][j] && gc.data[i][j][k]) {
                        data = data + "1";
                    } else {
                        data = data + "0"
                    }
                    // data = data + ((gc.data[i][j][k] == 1) ? "1" : "0");
                }
            }
        }
        let asciiString = "";
        for (let i = 0; i < data.length; i += 7) {
            let ss = data.substring(i, Math.min(i + 7, data.length));
            // ss = ss.padStart(7, "0");
            let n = parseInt(ss, 2);
            if (n < 32) {
                ascii = "éÉèÈêÊëËçÇàÀùÙÇüÜäÄöÖÿŸćńóśźĄąĘę"[n];
            } else if (n == 127) {
                ascii = "Ż";
            } else {
                ascii = String.fromCharCode(n);
            }
            // let ascii = String.fromCharCode(parseInt(ss,2));
            asciiString = asciiString + ascii;
            // console.log (ss + ", " + ascii);
        }
        // console.log(asciiString.length);
        
        asciiString = asciiString.replace(/(é)(\1*)/g, (a, b, c) => {
            return (a.length > 3) ? "Ć" + a.length + "Ć" : a;
        });
        asciiString = asciiString.replace(/(Ż)(\1*)/g, (a, b, c) => {
            return (a.length > 3) ? "Ł" + a.length + "Ł" : a;
        });
        // console.log(asciiString.length);
        // console.log(data.length);
        socket.emit('saveFile', {path: this.canvasPath, data: asciiString});
    }
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
                c.y < t.data.length - 1
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
            } else if (c.y == t.data.length - 1) {
                c.x = t.data[c.y].length;
            }
        }
    } else if (y == -1) {
        for (let i = 0; i < t.carets.length; i++) {
            let c = t.carets[i];
            if (c.y > 0) {
                c.y--;
                c.x = Math.min(t.data[c.y].length, c.curXRef);
            } else if (c.y == 0) {
                c.x = 0;
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
    let sel = false;
    for (let i = 0; i < t.carets.length; i++) {
        let c = t.carets[i];
        if (c.sel !== null) {
            sel = true;
        }
    }
    if (sel) {
        // console.log(sel);
        for (let i = 0; i < t.carets.length; i++) {
        // for (let i = 0; i < 1; i++) {
            let c = t.carets[i];
            let yOffset = 0;
            let xOffset = 0;
            let anchor = false;
            if (c.y > c.sel[1]) {
                anchor = true;
            } else if (c.y == c.sel[1]) {
                anchor = c.x > c.sel[0];
            }
            // console.log(c);
            if (c.y == c.sel[1]) {
                xOffset = (anchor) ? c.x - c.sel[0] : c.sel[0] - c.x;
                let baseX = (anchor) ? c.sel[0] : c.x;
                let endX = baseX + xOffset;
                t.data[c.y] = t.data[c.y].slice(0, baseX) + s + t.data[c.y].slice(endX);
                c.x = (anchor) ? c.sel[0] + s.length : c.x + s.length;
                c.sel = null;
                for (let j = 0; j < t.carets.length; j++) {
                    let d = t.carets[j];
                    if (c !== d && c.y == d.y) {
                        if (d.x > c.x) {
                            // console.log(xOffset);
                            d.x -= xOffset - s.length;
                            if (d.sel !== null) {d.sel[0] -= xOffset - s.length};
                        }
                    }
                }
            } else {
                // Multi-line selections
                xOffset = (anchor) ? c.x : c.sel[0];
                yOffset = (anchor) ? c.y - c.sel[1] : c.sel[1] - c.y;
                let baseX = (anchor) ? c.sel[0] : c.x;
                let baseY = (anchor) ? c.sel[1] : c.y;
                t.data[baseY] = t.data[baseY].slice(0, baseX) + s + t.data[baseY + yOffset].slice(xOffset);
                // for (let i = 0; i < yOffset; i++) {
                t.data.splice(baseY + 1, yOffset);
                // }
                c.x = (anchor) ? c.sel[0] + s.length : c.x + s.length;
                c.y = (anchor) ? c.sel[1] : c.y;
                // console.log(yOffset);
                c.sel = null;
                for (let j = 0; j < t.carets.length; j++) {
                    let d = t.carets[j];
                    if (c !== d && c.y == d.y) {
                        if (d.x > c.x) {
                            // console.log(xOffset);
                            d.x -= xOffset - s.length;
                            if (d.sel !== null) {d.sel[0] -= xOffset - s.length};
                            d.y -= yOffset;
                            if (d.sel !== null) {d.sel[1] -= yOffset};
                        }
                    }
                }
            }
        }   
    }
    if (s.length == 1 && !sel) {
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
         }
            // c.x++;
        } else if (s == "" && !sel) {
            for (let i = 0; i < t.carets.length; i++) {
            let c = t.carets[i];
            // let line = t.data[c.y];
            t.data[c.y] = t.data[c.y].slice(0, c.x - 1) + t.data[c.y].slice(c.x);
            let y = c.y;
            let x = c.x;
            for (let j = 0; j < t.carets.length; j++) {
               let d = t.carets[j];
               if (d.y == y && d.x >= x) {
                   d.x--;
               }
           }
         }
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
            // updateHistory = false;
        } else if (s == "ArrowRight") {
            t.moveCaretsX(1);
            updateHistory = false;
        } else if (s == "ArrowLeft" && e.shiftKey) {
            t.select();
            t.moveCaretsX(-1, true);
            // updateHistory = false;
        } else if (s == "ArrowLeft") {
            t.moveCaretsX(-1);
            updateHistory = false;
        } else if (s == "ArrowUp" && e.shiftKey) {
            t.select();
            t.moveCaretsY(-1, true);
            // updateHistory = false;
        } else if (s == "ArrowUp") {
            t.moveCaretsY(-1);
            updateHistory = false;
        } else if (s == "ArrowDown" && e.shiftKey) {
            t.select();
            t.moveCaretsY(1, true);
            // updateHistory = false;
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
        } else if (s == "Backspace") {
            t.update("");
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
    let path = "/Users/guillaumepelletier/Desktop/grimoirePaintingTest.json";
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


savePainting3 = function() {
    let path = "/Users/guillaumepelletier/Desktop/grimoirePaintingWork.txt";
    // let data = JSON.stringify(gc.data).replace(/null/g, "0").replace(/0,/g, "2").replace(/1,/g, "3");
    // let data = JSON.stringify(gc.data).replace(/null/g, "0");
    let data = "";
    for (let i = 0; i < gc.data.length; i++) {
        for (let j = 0; j < 109; j++) {
            for (let k = 0; k < 63; k++) {
                if (gc.data[i] && gc.data[i][j] && gc.data[i][j][k]) {
                    data = data + "1";
                } else {
                    data = data + "0"
                }
                // data = data + ((gc.data[i][j][k] == 1) ? "1" : "0");
            }
        }
    }
    asciiString = "";
    for (let i = 0; i < data.length; i += 7) {
        let ss = data.substring(i, Math.min(i + 7, data.length));
        // ss = ss.padStart(7, "0");
        let n = parseInt(ss, 2);
        if (n < 32) {
            ascii = "éÉèÈêÊëËçÇàÀùÙÇüÜäÄöÖÿŸćńóśźĄąĘę"[n];
        } else if (n == 127) {
            ascii = "Ż";
        } else {
            ascii = String.fromCharCode(n);
        }
        // let ascii = String.fromCharCode(parseInt(ss,2));
        asciiString = asciiString + ascii;
        // console.log (ss + ", " + ascii);
    }
    // console.log(asciiString.length);
    
    asciiString = asciiString.replace(/(é)(\1*)/g, (a, b, c) => {
        return (a.length > 3) ? "é" + a.length + "é" : a;
    });
    asciiString = asciiString.replace(/(Ż)(\1*)/g, (a, b, c) => {
        return (a.length > 3) ? "Ż" + a.length + "Ż" : a;
    });
    // console.log(asciiString.length);
    console.log(data.length);
    socket.emit('saveFile', {path: path, data: asciiString});
}
// savePainting3();

decodeAsciiString = function(s) {
    let str = "";
    str = s.replace(/(Ć)(\d+)(Ć)/g, (a, b, c) => {
        let mid = "";
        for (let i = 0; i < parseInt(c); i++) {mid = mid + "é";}
        return mid;
    });
    str = str.replace(/(Ł)(\d+)(Ł)/g, (a, b, c) => {
        let mid = "";
        for (let i = 0; i < parseInt(c); i++) {mid = mid + "Ż";}
        return mid;
    });
    // console.log(str.length);
    let bin = "";
    for (let i = 0; i < str.length; i++) {
        let match = false, matchIndex = null;
        let ref = "éÉèÈêÊëËçÇàÀùÙÇüÜäÄöÖÿŸćńóśźĄąĘę";
        for (let j = 0; j < ref.length; j++) {
            if (str[i] == ref[j]) {match = true; matchIndex = j;}
        }
        if (str[i] == "Ż") {
            bin = bin + (127).toString(2).padStart(7, "0");
        } else if (match) {
            if (i == (str.length - 1) && false) {
                bin = bin + matchIndex.toString(2);
            } else {
                bin = bin + matchIndex.toString(2).padStart(7, "0");
            }
                // (match ? ).charCodeAt(0).toString(2)
        } else {
            if (i == (str.length - 1) && false) {
                bin = bin + str[i].charCodeAt(0).toString(2);
            } else {
                bin = bin + str[i].charCodeAt(0).toString(2).padStart(7, "0");
            }
        }
    }
    // console.log(bin.length);
    let newGC = [];
    for (let h = 0; h < (bin.length/63/109); h += 1) {
        newGC.push([]);
        for (let i = 0; i < 109; i++) {
            newGC[h].push([]);
            for (let j = 0; j < 63; j++) {
                newGC[h][i][j] = parseInt(bin[j + (i * 63) + (h * 63 * 109)]);
            }
        }
    }
    return newGC;
}
// decodeAsciiString(asciiString)


makeFlatCanvas = function() {
    // let path = "/Users/guillaumepelletier/Desktop/grimoirePaintingFakerAscii.txt";
    // let data = JSON.stringify(gc.data).replace(/null/g, "0").replace(/0,/g, "2").replace(/1,/g, "3");
    // let data = JSON.stringify(gc.data).replace(/null/g, "0");
    let data = "";
    flatCanvas = [];
    for (let i = 0; i < gc.data.length; i++) {
        for (let j = 0; j < 109; j++) {
            for (let k = 0; k < 63; k++) {
                if (gc.data[i] && gc.data[i][j] && gc.data[i][j][k]) {
                    // data = data + "1";
                    flatCanvas.push(1);
                } else {
                    flatCanvas.push(0);
                    // data = data + "0"
                }
           }
        }
    }
   //  console.log(asciiString);
    // socket.emit('saveFile', {path: path, data: asciiString});
}
// makeFlatCanvas();



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

// if (false) {

// ge.activeBrush = {
//     anchor: [3, 3],
//     data: [
//         [1, 0, 0, 0, 0, 0, 0, 1],
//         [0, 1, 0, 0, 0, 0, 1, 0],
//         [0, 0, 1, 0, 0, 1, 0, 0],
//         [0, 0, 0, 1, 1, 0, 0, 0],
//         [0, 0, 1, 0, 0, 1, 0, 0],
//         [0, 1, 0, 0, 0, 0, 1, 0],
//         [1, 0, 0, 0, 0, 0, 0, 1]
//     ]
// };

// ge.activeBrush = {
//     anchor: [0, 0],
//     data: [
//         [1]
//     ]
// };
    


    

//         ge.activeBrush = {
//     anchor: [2, 1],
//     data: getGlyph("O")
// };

let dot = new Brush({
    type: nib,
    anchor: [0, 0],
    data: [
        [1]
    ]
});


let smallQuillForward = new Brush({
    type: nib,
    anchor: [2, 1],
    data: [
        [0, 0, 0, 1, 1],
        [0, 0, 1, 1, 0],
        [0, 1, 1, 0, 0],
        [1, 1, 0, 0, 0]
    ]
});


let smallQuillBackward = new Brush({
    type: nib,
    anchor: [2, 1],
    data: [
        [1, 1, 0, 0, 0],
        [0, 1, 1, 0, 0],
        [0, 0, 1, 1, 0],
        [0, 0, 0, 1, 1]
    ]
});


// ge.activeBrush = {
//     anchor: [7, 7],
//     data: [
//         [1, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 1],
//         [0, 1, 0, 0, 0, 0, 1, 0, 0, 1, 0, 0, 0, 0, 1, 0],
//         [0, 0, 1, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 1, 0, 0],
//         [0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0],
//         [0, 0, 1, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 1, 0, 0],
//         [0, 1, 0, 0, 0, 0, 1, 0, 0, 1, 0, 0, 0, 0, 1, 0],
//         [1, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 1],
//         [1, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 1],
//         [0, 1, 0, 0, 0, 0, 1, 0, 0, 1, 0, 0, 0, 0, 1, 0],
//         [0, 0, 1, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 1, 0, 0],
//         [0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0],
//         [0, 0, 1, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 1, 0, 0],
//         [0, 1, 0, 0, 0, 0, 1, 0, 0, 1, 0, 0, 0, 0, 1, 0],
//         [1, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 1]
//     ]
// };



let bigQuillForward = new Brush({
    type: nib,
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
});

thickerQuillForward = new Brush({
    type: quill,
    anchor: [6, 6],
    data:  [
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0],
        [0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0],
        [0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0],
        [0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0],
        [0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0],
        [0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
    ]
});

thickerQuillForward.data = [
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0],
        [0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0],
        [0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0],
        [0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0],
        [0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0],
        [0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0],
        [0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
    ];




thickerQuillBackward = new Brush({
    type: quill,
    anchor: [6, 6],
    data:  [
        [ 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ],
        [ 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ],
        [ 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ],
        [ 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ],
        [ 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ],
        [ 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ],
        [ 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0 ],
        [ 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0 ],
        [ 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0 ],
        [ 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0 ],
        [ 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0 ],
        [ 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0 ],
        [ 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0 ],
        [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0 ],
        [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0 ],
        [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 0 ],
        [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 0 ],
        [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0 ],
        [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0 ],
        [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ]
    ]
});

// // array 2d rotate algorithm
// let a = thickerQuillForward.data;
// let b = [];
// for (let y = 0; y < a[0].length; y++) {
//     b[y] = [];
//     for (let x = 0; x < a.length; x++) {
//         b[y][x] = a[x][y];
//     }
// }
// a = b;



thinQuillForward = new Brush({
    type: quill,
    anchor: [9, 9],
    data: [
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
    ]
});



thinQuillBackward = new Brush({
    type: quill,
    anchor: [9, 9],
    data: [
        [ 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ],
        [ 0, 0, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ],
        [ 0, 0, 0, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ],
        [ 0, 0, 0, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ],
        [ 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ],
        [ 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0 ],
        [ 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0 ],
        [ 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0 ],
        [ 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0 ],
        [ 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0 ],
        [ 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0 ],
        [ 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0 ],
        [ 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0 ],
        [ 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0 ],
        [ 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0 ],
        [ 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0 ],
        [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0 ],
        [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0 ],
        [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 0, 0, 0, 0 ],
        [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0 ],
        [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0 ]
    ]
});


// Beautiful circle
if (false) {

let a = [];
let w = 100;
let hw = w/2;
for (let y = 0; y < w; y++) {
    a[y] = [];
    for (let x = 0; x < w; x++) {
        let v = dist(x, y * 1.9, hw, hw * 1.9);
        // let xx = Math.cos(v) * v * 0.01, yy = Math.sin(v) * v * 0.01;
        // v = dist(xx, yy * 1.9, hw, hw * 1.9);
         // 46.5, 36.5, 26.9, 17.85, 11.95, 5
        // v = (v < 6.75) ? 1 : 0;
        // v = (xx + yy < 0.5) ? 1 : 0;
        v = (v < 46.5) ? 1 : 0;
        // v = (v < 36.5 && Math.sin(v) * 0.9 < -0.6) ? 1 : 0;
        // v = (v < 36.5 && Math.sin(v * 2) * 0.9 < -0.6) ? 1 : 0;
        // v = (v < 36.5 && Math.sin(v) * 0.9 < -0.6) ? 1 : 0;
        a[y][x] = v;
    }
}
thinQuillBackward.anchor = [hw, hw];
thinQuillBackward.data = a;

}


// Weird magical monolith
if (false) {

let a = [];
let w = 100;
let hw = w/2;
for (let y = 0; y < w; y++) {
    a[y] = [];
    for (let x = 0; x < w; x++) {
        let v = dist(x, y * 1.9, hw, hw * 1.9);
        let xx = Math.cos(v) * v * 0.01, yy = Math.sin(v) * v * 0.01;
        // v = dist(xx, yy * 1.9, hw, hw * 1.9);
         // 46.5, 36.5, 26.9, 17.85, 11.95, 5
        // v = (v < 6.75) ? 1 : 0;
        v = (xx + yy < 0.5) ? 1 : 0;
        // v = (v < 46.5) ? 1 : 0;
        // v = (v < 36.5 && Math.sin(v) * 0.9 < -0.6) ? 1 : 0;
        // v = (v < 36.5 && Math.sin(v * 2) * 0.9 < -0.6) ? 1 : 0;
        // v = (v < 36.5 && Math.sin(v) * 0.9 < -0.6) ? 1 : 0;
        a[y][x] = v;
    }
}
thinQuillBackward.anchor = [hw, hw];
thinQuillBackward.data = a;

}


if (false) {

let a = [];
let w = 100;
let hw = w/2;
for (let y = 0; y < w; y++) {
    a[y] = [];
    for (let x = 0; x < w * 2; x++) {
        let v = dist(x - (hw), y * 1.9, hw, hw * 1.9);
        let xx = Math.cos(v * 0.5) * v * 0.01, yy = Math.sin(v * 0.5) * v * 0.01;
        // v = dist(xx, yy * 1.9, hw, hw * 1.9);
         // 46.5, 36.5, 26.9, 17.85, 11.95, 5
        // v = (v < 6.75) ? 1 : 0;
        v = (xx + yy < 0.5) ? 1 : 0;
        // v = (v < 46.5) ? 1 : 0;
        // v = (v < 36.5 && Math.sin(v) * 0.9 < -0.6) ? 1 : 0;
        // v = (v < 36.5 && Math.sin(v * 2) * 0.9 < -0.6) ? 1 : 0;
        // v = (v < 36.5 && Math.sin(v) * 0.9 < -0.6) ? 1 : 0;
        a[y][x] = v;
    }
}
thinQuillBackward.anchor = [w, hw];
thinQuillBackward.data = a;

}



if (false) {

let a = [];
let w = 100;
let hw = w/2;
for (let y = 0; y < w; y++) {
    a[y] = [];
    for (let x = 0; x < w * 2; x++) {
        let v = dist(x - (hw), y * 1.9, hw, hw * 1.9);
        let xx = Math.cos(x + (y * w * 2)) * v * 0.01, yy = Math.sin(x + (y * w * 2)) * v * 0.01;
        // v = dist(xx, yy * 1.9, hw, hw * 1.9);
         // 46.5, 36.5, 26.9, 17.85, 11.95, 5
        // v = (v < 6.75) ? 1 : 0;
        v = (xx * yy < 0.25) ? 1 : 0;
        // v = (v < 46.5) ? 1 : 0;
        // v = (v < 36.5 && Math.sin(v) * 0.9 < -0.6) ? 1 : 0;
        // v = (v < 36.5 && Math.sin(v * 2) * 0.9 < -0.6) ? 1 : 0;
        // v = (v < 36.5 && Math.sin(v) * 0.9 < -0.6) ? 1 : 0;
        a[y][x] = v;
    }
}
thinQuillBackward.anchor = [w, hw];
thinQuillBackward.data = a;

}



if (false) {

let a = [];
let w = 100;
let hw = w/2;
for (let y = 0; y < w; y++) {
    a[y] = [];
    for (let x = 0; x < w * 2; x++) {
        let v = dist(x - (hw), y * 1.9, hw, hw * 1.9);
        let xx = Math.cos((x + (y * w * 2)) * 8) * v * 0.01, yy = Math.sin((x + (y * w * 2)) * 8) * v * 0.01;
        // v = dist(xx, yy * 1.9, hw, hw * 1.9);
         // 46.5, 36.5, 26.9, 17.85, 11.95, 5
        // v = (v < 6.75) ? 1 : 0;
        v = (xx * yy > 0.25) ? 1 : 0;
        // v = (v < 46.5) ? 1 : 0;
        // v = (v < 36.5 && Math.sin(v) * 0.9 < -0.6) ? 1 : 0;
        // v = (v < 36.5 && Math.sin(v * 2) * 0.9 < -0.6) ? 1 : 0;
        // v = (v < 36.5 && Math.sin(v) * 0.9 < -0.6) ? 1 : 0;
        a[y][x] = v;
    }
}
thinQuillBackward.anchor = [w, hw];
thinQuillBackward.data = a;

}



if (false) {

let a = [];
let w = 100;
let hw = w/2;
for (let y = 0; y < w; y++) {
    a[y] = [];
    for (let x = 0; x < w * 2; x++) {
        let v = dist(x - (hw), y * 1.9, hw, hw * 1.9);
        let xx = Math.cos((x + (y * w * 2)) * 8) * v * 0.01, yy = Math.sin((x + (y * w * 2)) * 8) * v * 0.01;
        // v = dist(xx, yy * 1.9, hw, hw * 1.9);
         // 46.5, 36.5, 26.9, 17.85, 11.95, 5
        // v = (v < 6.75) ? 1 : 0;
        v = (xx * yy > 0.05) ? 1 : 0;
        // v = (v < 46.5) ? 1 : 0;
        // v = (v < 36.5 && Math.sin(v) * 0.9 < -0.6) ? 1 : 0;
        // v = (v < 36.5 && Math.sin(v * 2) * 0.9 < -0.6) ? 1 : 0;
        // v = (v < 36.5 && Math.sin(v) * 0.9 < -0.6) ? 1 : 0;
        a[y][x] = v;
    }
}
thinQuillBackward.anchor = [w, hw];
thinQuillBackward.data = a;

}



if (false) {

let a = [];
let w = 100;
let hw = w/2;
for (let y = 0; y < w; y++) {
    a[y] = [];
    for (let x = 0; x < w * 2; x++) {
        let v = dist(x - (hw), y * 1.9, hw, hw * 1.9);
        let xx = Math.cos((x + (y * w * 2)) * 0.1) * v * 0.01, yy = Math.sin((x + (y * w * 2)) * 0.1) * v * 0.01;
        // v = dist(xx, yy * 1.9, hw, hw * 1.9);
         // 46.5, 36.5, 26.9, 17.85, 11.95, 5
        // v = (v < 6.75) ? 1 : 0;
        v = (xx * yy > 0.05) ? 1 : 0;
        // v = (v < 46.5) ? 1 : 0;
        // v = (v < 36.5 && Math.sin(v) * 0.9 < -0.6) ? 1 : 0;
        // v = (v < 36.5 && Math.sin(v * 2) * 0.9 < -0.6) ? 1 : 0;
        // v = (v < 36.5 && Math.sin(v) * 0.9 < -0.6) ? 1 : 0;
        a[y][x] = v;
    }
}
thinQuillBackward.anchor = [w, hw];
thinQuillBackward.data = a;

}


if (false) {

let a = [];
let w = 100;
let hw = w/2;
for (let y = 0; y < w; y++) {
    a[y] = [];
    for (let x = 0; x < w * 2; x++) {
        let v = dist(x - (hw), y * 1.9, hw, hw * 1.9);
        let xx = Math.cos((x + (y * w * 2)) * 0.1) * v * 0.005, yy = Math.sin((x + (y * w * 2)) * 0.1) * v * 0.005;
        // v = dist(xx, yy * 1.9, hw, hw * 1.9);
         // 46.5, 36.5, 26.9, 17.85, 11.95, 5
        // v = (v < 6.75) ? 1 : 0;
        v = (xx * yy > -0.02) ? 1 : 0;
        // v = (v < 46.5) ? 1 : 0;
        // v = (v < 36.5 && Math.sin(v) * 0.9 < -0.6) ? 1 : 0;
        // v = (v < 36.5 && Math.sin(v * 2) * 0.9 < -0.6) ? 1 : 0;
        // v = (v < 36.5 && Math.sin(v) * 0.9 < -0.6) ? 1 : 0;
        a[y][x] = v;
    }
}
thinQuillBackward.anchor = [w, hw];
thinQuillBackward.data = a;

}



if (false) {

let a = [];
let w = 100;
let hw = w/2;
for (let y = 0; y < w; y++) {
    a[y] = [];
    for (let x = 0; x < w * 2; x++) {
        let v = dist(x - (hw), y * 1.9, hw, hw * 1.9);
        let xx = Math.cos((x + (y * w * 2)) * 0.4) * v * 0.005, yy = Math.sin((x + (y * w * 2)) * 0.4) * v * 0.005;
        // v = dist(xx, yy * 1.9, hw, hw * 1.9);
         // 46.5, 36.5, 26.9, 17.85, 11.95, 5
        // v = (v < 6.75) ? 1 : 0;
        v = (xx * yy > -0.02) ? 1 : 0;
        // v = (v < 46.5) ? 1 : 0;
        // v = (v < 36.5 && Math.sin(v) * 0.9 < -0.6) ? 1 : 0;
        // v = (v < 36.5 && Math.sin(v * 2) * 0.9 < -0.6) ? 1 : 0;
        // v = (v < 36.5 && Math.sin(v) * 0.9 < -0.6) ? 1 : 0;
        a[y][x] = v;
    }
}
thinQuillBackward.anchor = [w, hw];
thinQuillBackward.data = a;

}



if (false) {

let a = [];
let w = 100;
let hw = w/2;
for (let y = 0; y < w; y++) {
    a[y] = [];
    for (let x = 0; x < w * 2; x++) {
        let v = dist(x - (hw), y * 1.9, hw, hw * 1.9);
        let x3 = Math.floor(x * 0.5), y3 = Math.floor(y * 0.5);
        let xx = Math.cos((x3 + (y3 * w * 2)) * 8) * v * 0.005, yy = Math.sin((x3 + (y3 * w * 2)) * 8) * v * 0.005;
        // v = dist(xx, yy * 1.9, hw, hw * 1.9);
         // 46.5, 36.5, 26.9, 17.85, 11.95, 5
        // v = (v < 6.75) ? 1 : 0;
        v = (xx * yy > -0.02) ? 1 : 0;
        // v = (v < 46.5) ? 1 : 0;
        // v = (v < 36.5 && Math.sin(v) * 0.9 < -0.6) ? 1 : 0;
        // v = (v < 36.5 && Math.sin(v * 2) * 0.9 < -0.6) ? 1 : 0;
        // v = (v < 36.5 && Math.sin(v) * 0.9 < -0.6) ? 1 : 0;
        a[y][x] = v;
    }
}
thinQuillBackward.anchor = [w, hw];
thinQuillBackward.data = a;

}


if (false) {

let a = [];
let w = 200;
let hw = w/2;
for (let y = 0; y < w; y++) {
    a[y] = [];
    for (let x = 0; x < w * 2; x++) {
        let v = dist(x - (hw), y * 1.9, hw, hw * 1.9);
        let x3 = Math.floor(x * 0.5), y3 = Math.floor(y * 0.5);
        let xx = Math.cos((x3 + (y3 * w * 2)) * v * 1e-3) * v * 0.003;
        let yy = Math.sin((x3 + (y3 * w * 2)) * v * 1e-3) * v * 0.003;
        // v = dist(xx, yy * 1.9, hw, hw * 1.9);
         // 46.5, 36.5, 26.9, 17.85, 11.95, 5
        // v = (v < 6.75) ? 1 : 0;
        v = (xx * yy < -0.02) ? 1 : 0;
        // v = (v < 46.5) ? 1 : 0;
        // v = (v < 36.5 && Math.sin(v) * 0.9 < -0.6) ? 1 : 0;
        // v = (v < 36.5 && Math.sin(v * 2) * 0.9 < -0.6) ? 1 : 0;
        // v = (v < 36.5 && Math.sin(v) * 0.9 < -0.6) ? 1 : 0;
        a[y][x] = v;
    }
}
thinQuillBackward.anchor = [w, hw];
thinQuillBackward.data = a;

}



if (false) {

let a = [];
let w = 200;
let hw = w/2;
for (let y = 0; y < w; y++) {
    a[y] = [];
    for (let x = 0; x < w * 2; x++) {
        let v = dist(x - (hw), y * 1.9, hw, hw * 1.9);
        let x3 = Math.floor(x * 0.125), y3 = Math.floor(y * 0.125);
        let xx = Math.cos((x3 + (y3 * w * 0.25)) * Math.sin(v * 0.05) * 1e-1) * v * 0.003;
        let yy = Math.sin((x3 + (y3 * w * 0.25)) * Math.sin(v * 0.05) * 1e-1) * v * 0.003;
        // v = dist(xx, yy * 1.9, hw, hw * 1.9);
         // 46.5, 36.5, 26.9, 17.85, 11.95, 5
        // v = (v < 6.75) ? 1 : 0;
        v = (xx * yy < -0.03) ? 1 : 0;
        // v = (v < 46.5) ? 1 : 0;
        // v = (v < 36.5 && Math.sin(v) * 0.9 < -0.6) ? 1 : 0;
        // v = (v < 36.5 && Math.sin(v * 2) * 0.9 < -0.6) ? 1 : 0;
        // v = (v < 36.5 && Math.sin(v) * 0.9 < -0.6) ? 1 : 0;
        a[y][x] = v;
    }
}
thinQuillBackward.anchor = [w, hw];
thinQuillBackward.data = a;

}


if (false) {

let a = [];
let w = 200;
let hw = w/2;
for (let y = 0; y < w; y++) {
    a[y] = [];
    for (let x = 0; x < w * 2; x++) {
        let v = dist(x - (hw), y * 1.9, hw, hw * 1.9);
        let x3 = Math.floor(x * 0.0625);
        let y3 = Math.floor(y * 0.0625);
        let xx = Math.cos((x3 + (y3 * w * 0.25)) * Math.sin(v * 0.05) * 1e-1) * v * 0.003;
        let yy = Math.sin((x3 + (y3 * w * 0.25)) * Math.sin(v * 0.05) * 1e-1) * v * 0.003;
        // v = dist(xx, yy * 1.9, hw, hw * 1.9);
         // 46.5, 36.5, 26.9, 17.85, 11.95, 5
        // v = (v < 6.75) ? 1 : 0;
        v = (xx + yy < -0.03) ? 1 : 0;
        // v = (v < 46.5) ? 1 : 0;
        // v = (v < 36.5 && Math.sin(v) * 0.9 < -0.6) ? 1 : 0;
        // v = (v < 36.5 && Math.sin(v * 2) * 0.9 < -0.6) ? 1 : 0;
        // v = (v < 36.5 && Math.sin(v) * 0.9 < -0.6) ? 1 : 0;
        a[y][x] = v;
    }
}
thinQuillBackward.anchor = [w, hw];
thinQuillBackward.data = a;

}



if (false) {

let a = [];
let w = 200;
let hw = w/2;
for (let y = 0; y < w; y++) {
    a[y] = [];
    for (let x = 0; x < w * 2; x++) {
        let v = dist(x - (hw), y * 1.9, hw, hw * 1.9);
        let x3 = Math.floor(x * 1);
        let y3 = Math.floor(y * 1);
        let xx = Math.cos((x3 + (y3 * w * 0.25)) * Math.sin(v * 0.05) * 1e-1) * v * 0.0003;
        let yy = Math.sin((x3 + (y3 * w * 0.25)) * Math.sin(v * 0.05) * 1e-1) * v * 0.0003;
        // v = dist(xx, yy * 1.9, hw, hw * 1.9);
         // 46.5, 36.5, 26.9, 17.85, 11.95, 5
        // v = (v < 6.75) ? 1 : 0;
        v = (xx + yy < -0.03) ? 1 : 0;
        // v = (v < 46.5) ? 1 : 0;
        // v = (v < 36.5 && Math.sin(v) * 0.9 < -0.6) ? 1 : 0;
        // v = (v < 36.5 && Math.sin(v * 2) * 0.9 < -0.6) ? 1 : 0;
        // v = (v < 36.5 && Math.sin(v) * 0.9 < -0.6) ? 1 : 0;
        a[y][x] = v;
    }
}
thinQuillBackward.anchor = [w, hw];
thinQuillBackward.data = a;

}



if (false) {

let a = [];
let w = 200;
let hw = w/2;
for (let y = 0; y < w; y++) {
    a[y] = [];
    for (let x = 0; x < w * 2; x++) {
        let v = dist(x - (hw), y * 1.9, hw, hw * 1.9);
        let x3 = Math.floor(x * 1);
        let y3 = Math.floor(y * 1);
        let xx = Math.cos((x3 + (y3 * w * 0.25)) * Math.sin(v * 0.0125) * 1e-1) * v * 0.0003;
        let yy = Math.sin((x3 + (y3 * w * 0.25)) * Math.sin(v * 0.0125) * 1e-1) * v * 0.0003;
        // v = dist(xx, yy * 1.9, hw, hw * 1.9);
         // 46.5, 36.5, 26.9, 17.85, 11.95, 5
        // v = (v < 6.75) ? 1 : 0;
        v = (xx + yy < -0.03) ? 1 : 0;
        // v = (v < 46.5) ? 1 : 0;
        // v = (v < 36.5 && Math.sin(v) * 0.9 < -0.6) ? 1 : 0;
        // v = (v < 36.5 && Math.sin(v * 2) * 0.9 < -0.6) ? 1 : 0;
        // v = (v < 36.5 && Math.sin(v) * 0.9 < -0.6) ? 1 : 0;
        a[y][x] = v;
    }
}
thinQuillBackward.anchor = [w, hw];
thinQuillBackward.data = a;

}



if (false) {

let a = [];
let w = 200;
let hw = w/2;
for (let y = 0; y < w; y++) {
    a[y] = [];
    for (let x = 0; x < w * 2; x++) {
        let v = dist(x - (hw), y * 1.9, hw, hw * 1.9);
        let x3 = Math.floor(x * 1);
        let y3 = Math.floor(y * 1);
        let xx = Math.cos((x3 + (y3 * w * 0.25) * Math.sin(v * 0.0125) * 1e-2)) * v * 0.0003;
        let yy = Math.sin((x3 + (y3 * w * 0.25) * Math.sin(v * 0.0125) * 1e-2)) * v * 0.0003;
        // v = dist(xx, yy * 1.9, hw, hw * 1.9);
         // 46.5, 36.5, 26.9, 17.85, 11.95, 5
        // v = (v < 6.75) ? 1 : 0;
        v = (xx + yy < -0.03) ? 1 : 0;
        // v = (v < 46.5) ? 1 : 0;
        // v = (v < 36.5 && Math.sin(v) * 0.9 < -0.6) ? 1 : 0;
        // v = (v < 36.5 && Math.sin(v * 2) * 0.9 < -0.6) ? 1 : 0;
        // v = (v < 36.5 && Math.sin(v) * 0.9 < -0.6) ? 1 : 0;
        a[y][x] = v;
    }
}
thinQuillBackward.anchor = [w, hw];
thinQuillBackward.data = a;

}



if (false) {

let a = [];
let w = 200;
let hw = w/2;
for (let y = 0; y < w; y++) {
    a[y] = [];
    for (let x = 0; x < w * 2; x++) {
        let v = dist(x - (hw), y * 1.9, hw, hw * 1.9);
        let x3 = Math.floor(x * 1);
        let y3 = Math.floor(y * 1);
        let xx = Math.cos((x3 + (y3 * w * 0.25) * Math.sin(v * 0.025) * 1e-2)) * v * 0.0003;
        let yy = Math.sin((x3 + (y3 * w * 0.25) * Math.sin(v * 0.025) * 1e-2)) * v * 0.0003;
        // v = dist(xx, yy * 1.9, hw, hw * 1.9);
         // 46.5, 36.5, 26.9, 17.85, 11.95, 5
        // v = (v < 6.75) ? 1 : 0;
        v = (xx + yy < -0.03) ? 1 : 0;
        // v = (v < 46.5) ? 1 : 0;
        // v = (v < 36.5 && Math.sin(v) * 0.9 < -0.6) ? 1 : 0;
        // v = (v < 36.5 && Math.sin(v * 2) * 0.9 < -0.6) ? 1 : 0;
        // v = (v < 36.5 && Math.sin(v) * 0.9 < -0.6) ? 1 : 0;
        a[y][x] = v;
    }
}
thinQuillBackward.anchor = [w, hw];
thinQuillBackward.data = a;

}



if (false) {

let a = [];
let w = 200;
let hw = w/2;
for (let y = 0; y < w; y++) {
    a[y] = [];
    for (let x = 0; x < w * 2; x++) {
        let v = dist(x - (hw), y * 2, hw, hw * 2);
       v = (Math.random() > 0.5 && 
             (v < 156.5) && 
             Math.sin(v * 0.125) * 0.9 < -0.6) ? 1 : 0;
        a[y][x] = v;
    }
}
thinQuillBackward.anchor = [w, hw];
thinQuillBackward.data = a;

}



if (false) {

let a = [];
let w = 200;
let hw = w/2;
for (let y = 0; y < w; y++) {
    a[y] = [];
    for (let x = 0; x < w * 2; x++) {
        let v = dist(x - (hw), y * 2, hw, hw * 2);
       v = (Math.random() > 0.5 && 
             (v < 156.5) && 
             Math.sin(v * 0.25) * 0.9 < -0.6) ? 1 : 0;
        a[y][x] = v;
    }
}
thinQuillBackward.anchor = [w, hw];
thinQuillBackward.data = a;

}



if (false) {

let a = [];
let w = 150;
let hw = w/2;
for (let y = 0; y < w; y++) {
    a[y] = [];
    for (let x = 0; x < w * 2; x++) {
        let v = dist(x - (hw), y * 2, hw, hw * 2);
       v = (Math.random() > 0.5 && 
             (v < 156.5) && 
             Math.sin(v * 0.25) * 0.9 < -0.6) ? 1 : 0;
        a[y][x] = v;
    }
}
thinQuillBackward.anchor = [w, hw];
thinQuillBackward.data = a;

}

let thickQuillForward = new Brush({
    type: quill,
    anchor: [6, 6],
    data: [
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 0],
        [0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 0, 0],
        [0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0],
        [0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0],
        [0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0],
        [0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0],
        [0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0],
        [0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0],
        [0, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
    ]
});

thickQuillForward.data = [
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 0],
        [0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 0],
        [0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0],
        [0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0],
        [0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0],
        [0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0],
        [0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0],
        [0, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0],
        [0, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
    ];


thickQuillBackward = new Brush({
    type: quill,
    anchor: [6, 6],
    data: [
        [ 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ],
        [ 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ],
        [ 0, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ],
        [ 0, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0 ],
        [ 0, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0 ],
        [ 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0 ],
        [ 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0 ],
        [ 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0 ],
        [ 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0 ],
        [ 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0 ],
        [ 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 0 ],
        [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 0 ],
        [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1 ],
        [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1 ]
   ]
});




thickQuillForward2 = new Brush({
    type: quill,
    anchor: [6, 6],
    data: [
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 0],
        [0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 0, 0],
        [0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0],
        [0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0],
        [0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0],
        [0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0],
        [0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0],
        [0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0],
        [0, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
    ]
});


thickQuillForward2.data = [
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 0],
        [0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 0],
        [0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 0, 0],
        [0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0],
        [0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0],
        [0, 0, 0, 0, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
];



thickQuillBackward2 = new Brush({
    type: quill,
    anchor: [6, 6],
    data: [
        [ 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ],
        [ 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ],
        [ 0, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0 ],
        [ 0, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0 ],
        [ 0, 0, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0 ],
        [ 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0 ],
        [ 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0 ],
        [ 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 0, 0, 0, 0 ],
        [ 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0 ],
        [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0 ]
    ]
});


thickQuillForward3 = new Brush({
    type: quill,
    anchor: [6, 6],
    data: [
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 0],
        [0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 0, 0],
        [0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0],
        [0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0],
        [0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0],
        [0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0],
        [0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0],
        [0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0],
        [0, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
    ]
});


thickQuillForward3.data = [
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 0],
        [0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 0],
        [0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0],
        [0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0],
        [0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0],
        [0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0],
        [0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0],
        [0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0],
        [0, 0, 0, 0, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0]
];


thickQuillBackward3 = new Brush({
    type: quill,
    anchor: [6, 6],
    data: [
        [ 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ],
        [ 0, 0, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ],
        [ 0, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0 ],
        [ 0, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0 ],
        [ 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0 ],
        [ 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0 ],
        [ 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0 ],
        [ 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0 ],
        [ 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0 ],
        [ 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0 ],
        [ 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 0, 0, 0, 0 ],
        [ 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0 ],
        [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0 ]
    ]
});


thickQuillForward4 = new Brush({
    type: quill,
    anchor: [6, 6],
    data: [
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 0],
        [0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 0],
        [0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0],
        [0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0],
        [0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0],
        [0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0],
        [0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0],
        [0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0],
        [0, 0, 0, 0, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0]
    ]
});

thickQuillForward4.data = [
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 0, 0, 0],
    [0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0],
    [0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0],
    [0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0]
];


thickQuillDownward4 = new Brush({
    type: quill,
    anchor: [6, 6],
    data: [
        [0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0]
    ]
});



thickQuillForward5 = new Brush({
    type: quill,
    anchor: [6, 6],
    data: [
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 0, 0, 0],
    [0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0],
    [0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0],
    [0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0]
    ]
});

thickQuillForward5.data = [
    [0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0]
];


thickQuillBackward5 = new Brush({
    type: quill,
    anchor: [6, 6],
    data: [
        [ 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0 ],
        [ 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0 ],
        [ 0, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 0 ],
        [ 0, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 0 ],
        [ 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0 ],
        [ 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0 ]
    ]
});

let bigQuillBackWard = new Brush({
    type: nib,
    anchor: [6, 6],
    data: [
        [1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1]
    ]
});

let bigBlock = new Brush({
    type: pebble,
    anchor: [6, 6],
    data: [
        [0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0],
        [0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0],
        [0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0],
        [0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0],
        [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
        [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
        [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
        [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
        [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
        [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
        [0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0],
        [0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0],
        [0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0],
        [0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0]
    ]
});

let biggerBlock = new Brush({
    type: pebble,
    anchor: [11, 11],
    data: [
        [0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0],
        [0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0],
        [0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0],
        [0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0],
        [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
        [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
        [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
        [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
        [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
        [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
        [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
        [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
        [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
        [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
        [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
        [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
        [0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0],
        [0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0],
        [0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0],
        [0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0]
    ]
});


smallBlock = new Brush({
    type: pebble,
    anchor: [6, 6],
    data: [
        [0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0],
        [0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0],
        [0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0],
        [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
        [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
        [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
        [0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0],
        [0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0],
        [0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0]
    ]
});


smallBlock2 = new Brush({
    type: pebble,
    anchor: [6, 6],
    data: [
        [0, 0, 0, 0, 1, 1, 1, 1, 1, 0, 0, 0, 0],
        [0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0],
        [0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0],
        [0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0],
        [0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0],
        [0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0],
        [0, 0, 0, 0, 1, 1, 1, 1, 1, 0, 0, 0, 0]
    ]
});

smallBlock3 = new Brush({
    type: pebble,
    anchor: [6, 6],
    data: [
        [0, 0, 0, 0, 1, 1, 1, 1, 1, 0, 0, 0, 0],
        [0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0],
        [0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0],
        [0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0],
        [0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0],
        [0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0],
        [0, 0, 0, 0, 1, 1, 1, 1, 1, 0, 0, 0, 0]
    ]
});


smallBlock3.data = [
    [0, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 0],
    [0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0],
    [0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0],
    [0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0],
    [0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0],
    [0, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 0]
];



bigBlock2 = new Brush({
    type: pebble,
    anchor: [6, 6],
    data: [
        [0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0],
        [0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0],
        [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
        [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
        [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
        [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
        [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
        [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
        [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
        [0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0],
        [0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0]
    ]
});



bigBlock3 = new Brush({
    type: pebble,
    anchor: [6, 6],
    data: [
        [0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0],
        [0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0],
        [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
        [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
        [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
        [0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0],
        [0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0]
    ]
});

bigBlock4 = new Brush({
    type: pebble,
    anchor: [6, 6],
    data: [
        [0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0],
        [0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0],
        [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
        [0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0],
        [0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0]
    ]
});

bigBlock5 = new Brush({
    type: pebble,
    anchor: [6, 6],
    data: [
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0],
        [0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0],
        [0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0],
        [0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0],
        [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]
    ]
});

bigBlock6 = new Brush({
    type: pebble,
    anchor: [6, 6],
    data: [
        [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
        [0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0],
        [0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0],
        [0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0],
        [0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
    ]
});

let bigBubble = new Brush({
    type: pebble,
    anchor: [11, 11],
    data: [
        [0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0],
        [0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0],
        [0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0],
        [0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0],
        [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
        [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
        [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
        [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
        [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
        [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
        [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
        [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
        [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
        [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
        [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
        [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
        [0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0],
        [0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0],
        [0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0],
        [0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0]
    ]
});


bigBubble.data = [
    [0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0],
    [0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0],
    [0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0],
    [0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0],
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0],
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0],
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0],
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0],
    [0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0],
    [0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0],
    [0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0],
    [0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0]
];


let airBrush0 = new Brush({
    type: spray,
    anchor: [6, 6],
    data: [
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0],
        [0, 0, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 1, 1],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 0],
        [0, 1, 1, 1, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 1, 0, 0, 0],
        [0, 1, 1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0],
        [0, 0, 1, 1, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 1, 1, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 1, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0]
    ]
});


let airBrush1 = new Brush({
    type: spray,
    anchor: [6, 6],
    data: [
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0],
        [0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 1],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 0],
        [0, 1, 1, 1, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0],
        [1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 1, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
    ]
});

resetBrushPositions = function() {
    ge.brushPositions = [];
    for (let y = 0; y < 22 * 9; y++) {
        ge.brushPositions[y] = [];
        for (let x = 0; x < 109 * 7; x++) {
            ge.brushPositions[y][x] = 0;
        }
    }
    // console.log("reset!");
    if (fmouse[1] < 20) {
        let b = ge.activeBrush;
        let tx = (fmouse[0] * 7) + smouse[0];
        let tox = Math.max(0, tx - b.anchor[0]);
        // let bix = (tx - tox) - b.anchor[0];
        let bix = Math.max(0, b.anchor[0] - tx);
        // let fox = Math.floor(tox / 7);
        // let sox = tox % 7;
        // let bixmax = Math.min(b.data[0].length, 763 - (tox + b.data[0].length));
        let bixmax = b.data[0].length - (Math.max((tx - b.anchor[0] + b.data[0].length) - 770, 0));
        // logJavaScriptConsole(bixmax);
        let ty = (fmouse[1] * 9) + smouse[1];
        let toy = Math.max(0, ty - b.anchor[1]);
        // let biy = ((ty - toy) - b.anchor[1]);
        let biy = Math.max(0, b.anchor[1] - ty);
        // logJavaScriptConsole(biy);
        // biy = Math.max(0, b.anchor[1] - ty);
        // biy = (b.anchor[1] > ty) ? b.anchor[1] - ty : 0;
        // let foy = Math.floor(toy / 9);
        // let soy = toy % 9;
        // let biymax = Math.min(b.data.length, 180 - (toy + b.data.length));
        let biymax = b.data.length - (Math.max((ty - b.anchor[1] + b.data.length) - 180, 0));
        // logJavaScriptConsole(biymax);
        // logJavaScriptConsole("ty: " + ty + " ,  b.anchor[1] :" +  b.anchor[1] + " , biy: " + biy + ", biymax: " + biymax);
        for (let y = biy; y < biymax; y++) {
            for (let x = bix; x < bixmax; x++) {
                     // console.log("x: " + x + ", y: " + y);
                let brush = b.data[y][x];
                if (brush == 1 || brush == "1") {
                    // if (y == biy) {logJavaScriptConsole(toy + y - b.anchor[1]);}
                    ge.brushPositions[toy + y - biy][tox + x - bix] = 1;
                }
            }
        }
    }
}



applyPointer = function() {
    // console.log("reset!");
    let b = [
        [2, 2, 2, 2, 2, 2, 0, 0, 2, 2, 2, 2, 2, 2, 2],
        [2, 2, 2, 2, 2, 0, 1, 1, 0, 2, 2, 2, 2, 2, 2],
        [2, 2, 2, 2, 2, 0, 1, 1, 0, 2, 2, 2, 2, 2, 2],
        [2, 2, 2, 2, 2, 0, 1, 1, 0, 2, 2, 2, 2, 2, 2],
        [2, 2, 2, 2, 2, 0, 1, 1, 0, 2, 2, 2, 2, 2, 2],
        [2, 0, 0, 2, 2, 0, 1, 1, 0, 0, 0, 0, 2, 2, 2],
        [0, 1, 1, 0, 2, 0, 1, 1, 0, 1, 0, 1, 0, 0, 2],
        [2, 0, 1, 1, 0, 0, 1, 1, 0, 1, 0, 1, 0, 1, 0],
        [2, 2, 0, 1, 1, 0, 1, 1, 1, 1, 1, 1, 0, 1, 0],
        [2, 2, 0, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0],
        [2, 2, 2, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0],
        [2, 2, 2, 2, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0],
        [2, 2, 2, 2, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 2],
        [2, 2, 2, 2, 2, 0, 1, 1, 1, 1, 1, 1, 1, 0, 2],
        [2, 2, 2, 2, 2, 0, 1, 1, 1, 1, 1, 1, 1, 0, 2]
    ];
    let tx = (fmouse[0] * 7) + smouse[0];
    // let tox = Math.max(0, tx - b.anchor[0]);
    // let bix = (tx - tox) - b.anchor[0];
    // let bix = Math.max(0, b.anchor[0] - tx);
    bix = 0;
    // let fox = Math.floor(tox / 7);
    // let sox = tox % 7;
    // let bixmax = Math.min(b.data[0].length, 763 - (tox + b.data[0].length));
    let bixmax = b[0].length - (Math.max((tx + b[0].length) - 763, 0));
    // logJavaScriptConsole(bixmax);
    let ty = (fmouse[1] * 9) + smouse[1];
    // let toy = Math.max(0, ty - b.anchor[1]);
    // let biy = ((ty - toy) - b.anchor[1]);
    // let biy = Math.max(0, b.anchor[1] - ty);
    let biy = 0;
    // logJavaScriptConsole(biy);
    // biy = Math.max(0, b.anchor[1] - ty);
    // biy = (b.anchor[1] > ty) ? b.anchor[1] - ty : 0;
    // let foy = Math.floor(toy / 9);
    // let soy = toy % 9;
    // let biymax = Math.min(b.data.length, 180 - (toy + b.data.length));
    let biymax = b.length - (Math.max((ty + b.length) - 198, 0));
    // logJavaScriptConsole(biymax);
    // logJavaScriptConsole("ty: " + ty + " ,  b.anchor[1] :" +  b.anchor[1] + " , biy: " + biy + ", biymax: " + biymax);
    for (let y = biy; y < biymax; y++) {
        for (let x = bix; x < bixmax; x++) {
                 // console.log("x: " + x + ", y: " + y);
            let brush = b[y][x];
            if (brush == 1) {
                ge.brushPositions[ty + y][tx + x - 8] = 0;
            } else if (brush == 0) {
                // console.log("Bruh");
                ge.brushPositions[ty + y][tx + x - 8] = 1;
            }
        }
    }
}

// resetBrushPositions();


// }

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
    } else if (s == "t") {
        brushIndex = 0;
        typeIndex = (typeIndex + 1) % types.length;
        ge.activeBrush = types[typeIndex][brushIndex];
        resetBrushPositions(); 
    } else if (s == "b") {
        brushIndex = (brushIndex + 1) % types[typeIndex].length;
        ge.activeBrush = types[typeIndex][brushIndex];
        resetBrushPositions(); 
    } else if (s == "r") {
        brushRandom = !brushRandom;
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


let GrimoireControl = function(o) {
    this.tab = o.tab;
    this.spanX = [40, 60];
    this.spanY = [250, 260];
    this.active = true;
}

GrimoireControl.prototype.click = function(fx, fy, sx, sy) {
};

GrimoireControl.prototype.deactivate = function() {
};

GrimoireControl.prototype.activate = function() {
};


BrushFromString = function(s = "a", x = 1, y = 1) {
    let data = [];
    for (let i = 0; i < (y * 9); i++) {
        data.push([]);
        for (let j = 0; j < (x * 7) * s.length; j++) {
            let g = getGlyph(s[Math.floor(j/(x * 7))]);
            data[i][j] = g[Math.floor(i/y)][Math.floor(j/x) - Math.floor(j/(x * 7))*7];
        }
    }
    let o = {
        anchor: [0, y * 7 - 1],
        type: spray,
        data: data
    };
    new Brush(o);
};


BrushFromString2 = function(s = "a", x = [1, 1, 1, 1, 1, 1, 1], y = [1, 1, 1, 1, 1, 1, 1, 1, 1]) {
    let data = [];
    for (let i = 0; i < 9; i++) {
        data.push([]);
        for (let j = 0; j < 7 * s.length; j++) {
            let g = getGlyph(s[Math.floor(j / 7)]);
            data[i][j] = g[i][j % 7];
        }
    }
    for (let i = data.length - 1; i >= 0; i--) {
        for (let m = 1; m < y[i]; m++) {
            data.splice(i, 0, data[i].slice());
        }
    }
    for (let i = 0; i < data.length; i++) {
        for (let j = data[i].length - 1; j >= 0; j--) {
            for (let m = 1; m < x[j % 7]; m++) {
                data[i].splice(j, 0, data[i][j]);
            }
        }
    }
    let o = {
        anchor: [0, data.length - 1],
        type: spray,
        data: data
    };
    new Brush(o);
};


BrushFromString3 = function(s = "a", x = [1, 1, 1, 1, 1, 1, 1], y = [1, 1, 1, 1, 1, 1, 1, 1, 1], freq = 1, amp = 1) {
    let data = [];
    for (let i = 0; i < 9; i++) {
        data.push([]);
        for (let j = 0; j < 7 * s.length; j++) {
            let g = getGlyph(s[Math.floor(j / 7)]);
            data[i][j] = g[i][j % 7];
        }
    }
    for (let i = data.length - 1; i >= 0; i--) {
        for (let m = 1; m < y[i]; m++) {
            data.splice(i, 0, data[i].slice());
        }
    }
    for (let i = 0; i < data.length; i++) {
        for (let j = data[i].length - 1; j >= 0; j--) {
            for (let m = 1; m < x[j % 7]; m++) {
                data[i].splice(j, 0, data[i][j]);
            }
        }
    }
    for (let i = 0; i < data.length; i++) {
        arrayRotate(data[i], Math.floor(Math.sin(i * freq) * amp));
    }
    function arrayRotate(arr, count) {
        count -= arr.length * Math.floor(count / arr.length);
        arr.push.apply(arr, arr.splice(0, count));
        return arr;
    }
    let o = {
        anchor: [0, data.length - 1],
        type: spray,
        data: data
    };
    new Brush(o);
};