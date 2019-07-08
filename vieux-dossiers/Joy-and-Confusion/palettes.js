var allPalettes;
var currentPaletteIndex = 1000;
var palette = ["ECD078", "D95B43", "C02942", "542437", "53777A"];
var paletteoutlet;
var paletteRGB = {
    r: 0,
    g: 255,
    b: 100
};

var erase_color = {
    r: 0,
    g: 0,
    b: 0
};

var currentColor = 0;
var erase_color_choice = 0;
var erase_color_brightness = 1;

function gotPalettes(palettes) {
    allPalettes = palettes;
    palette = allPalettes[currentPaletteIndex];
}

function hexToRgb(hex) {
    var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    return result ? {
        r: parseInt(result[1], 16),
        g: parseInt(result[2], 16),
        b: parseInt(result[3], 16)
    } : null;
}

function change_color() {
    if (currentPaletteIndex < 4050) {
        currentPaletteIndex += 2;
    } else {
        currentPaletteIndex = 0;
    }
    palette = allPalettes[currentPaletteIndex];
    change_erase_color();

    // for (i = 0; i < ParticleArray.length; i++) {
    //     ParticleArray[i].setColor();
    // }
}

function toggle_color() {
    // for (i = 0; i < ParticleArray.length; i++) {
    //     ParticleArray[i].toggleColor();
    // }
}

function change_erase_color() {
    if (erase_color_choice === 0) {
        erase_color.r = 0;
        erase_color.g = 0;
        erase_color.b = 0;
    } else {
        var i = erase_color_choice - 1;
        var paletteRGB = hexToRgb(palette[i]);
        erase_color.r = paletteRGB.r * erase_color_brightness;
        erase_color.g = paletteRGB.g * erase_color_brightness;
        erase_color.b = paletteRGB.b * erase_color_brightness;
    }

    if (erase_color_choice < 5) {
        erase_color_choice++;
    } else {
        erase_color_choice = 0;
    }
}

function change_erase_color_brightness() {
    if (erase_color_brightness < 1) {
        erase_color_brightness += 0.1;
    } else {
        erase_color_brightness = 0.1;
    }
    var i = erase_color_choice;
    var paletteRGB = hexToRgb(palette[i]);
    erase_color.r = paletteRGB.r * erase_color_brightness;
    erase_color.g = paletteRGB.g * erase_color_brightness;
    erase_color.b = paletteRGB.b * erase_color_brightness;
}

colorVector = function(r, g, b, a) {
    this.r = r;
    this.g = g;
    this.b = b;
    if (a) {
        this.a = a;
    }
}

colorVector.prototype.Add = function(otherVector) {
    this.x += otherVector.x;
    this.y += otherVector.y;
    if (this.z && otherVector.z) {
        this.z += otherVector.z;
    }
}