// griArr = files.js[8].data.split("\n");
griY = 0;

ps = "        // we will assign the attribute texcoords to the varying texcoords to move them from the vert shader to "

swatchesArr = "░▒▓│┤╡╢╖╕╣║╗╝╜╛┐└┴┬├─┼╞╟╚╔╩╦╠═╬╧╨╤╥╙╘╒╓╫╪┘┌█▄▌▐▀αßΓπΣσµτΦΘΩδ∞φε∩≡±≥≤⌠⌡÷≈°∙·√ⁿ²■";

swatchesArr = "░▒▓█▀▄▌▐┌─┬┐│┤┘┴└├┼╔═╦╗║╣╝╩╚╠╬╒╤╕╡╛╧╘╞╓╥╖╢╜╨╙╟╫╪αßΓπΣσµτΦΘΩδ∞φε∩≡±≥≤⌠⌡÷≈°∙·√ⁿ²■";

// files.js[8].data = griArr.join("\n")




tab = function(s) {
    if (s == null) {
        griEditor.activeTab = null;
        return;
    }
    for (let i = 0; i < griFiles.scd.length; i++) {
        if (griFiles.scd[i].name == s) {
            griEditor.activeTab = griFiles.scd[i];
        }
    }
    for (let i = 0; i < griFiles.js.length; i++) {
        logJavaScriptConsole(griFiles.js[i]);
        if (griFiles.js[i].name == s) {
            griEditor.activeTab = griFiles.js[i];
        }
    }
}