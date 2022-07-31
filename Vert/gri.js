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
