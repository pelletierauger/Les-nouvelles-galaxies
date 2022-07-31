drawTerminal = function(selectedProgram) {
    // let canH = cnvs.height / resolutionScalar / 2;
    // let hh = (window.innerHeight - canH) * 0.5;
    // let mx = map(mouse.x, 0, document.body.clientWidth, -1, 1);
    // let my = map(mouse.y, hh, canH + hh, 1, -1);
    fmouse[0] = constrain(Math.floor(map(mouse.x, 78, 1190, 0, 108)), 0, 109);
    fmouse[1] = constrain(Math.floor(map(mouse.y, 96, 695, 0, 22)), 0, 21);
    
    vertices = [];
    let num = 150;
    for (let i = 0; i < num; i++) {
        let x = Math.cos(i) * i * 1e-2;
        let y = Math.sin(i) * i * 1e-2;
        // vertices.push(x * (9 / 16), y, 40.0, 1);
    }
    num = 0;
    let sc = 0.27;
    let sx0 = vt.selectionBounds[0];
    let sx1 = vt.selectionBounds[1];
    let colors = [];
    let sc2 = sc * 1.2;
    for (let x = 0; x <= vt.stringArray[0].length; x++) {
        let sel = ((x > sx0 * 7 && x < sx1 * 7) || vt.enter) ? "0" : "1";
        for (let y = 0; y < 9; y++) {
            let caret = (vt.caretPosition - 0) * 7 + 7;
            if (vt.stringArray[y][x] == sel || (x == caret && drawCount / 20 % 1 < 0.5)) {
            // if (Math.sin(x * y) > 0.5) {
            // vertices.push(x * (9 / 16) * 0.02 * sc - 0.87, -y * 0.03 * sc - 0.7 - (Math.sin(drawCount * 0.25 + y) * 0.5e-2), 40.0 * sc, 1);
            // vertices.push(x * (9 / 16) * 0.02 * sc - 0.9 + Math.sin(y * 1e-1 + drawCount * 1e-1) * 0.05 * sc, -y * 0.03 * sc - 0.6 - (Math.sin(drawCount * 0.25 + y) * 1.5e-2 * sc), 45.0 * sc, 1);
   for (let yy = 0; yy < 18; yy++) {
       let yyy = y + (yy * 9) - 144;
                // vertices.push(x * (9 / 16) * 0.02 * sc - 0.51 + nx * 0 + (-y * 0.00) + 0.2 - 0.61, -yyy * 0.04 * sc - 0.34 + 0.85 + ny * 0 + ((Math.sin(x * 0.05) * 0.5 + 0.5) * 0.0) + 0.11 - 1.32 - 0.014, 50.0 * sc * 0.9, 1);
                // num++;
                // colors.push(0, 0, 0);
   }
            }
        }
    }
    // ljs(num);
    for (let i = 0; i < num; i++) {
        let r = Math.random();
        let g = Math.random();
        let b = Math.random();
        // colors.push(0, 0, 0);
    }
        for (let x = 0; x <= vt.stringArray[0].length; x++) {
        let sel = ((x > sx0 * 7 && x < sx1 * 7) || vt.enter) ? "0" : "1";
        for (let y = 0; y < 9; y++) {
            let caret = (vt.caretPosition - 0) * 7 + 7;
            // if (vt.stringArray[y][x] == sel || (x == caret && drawCount / 20 % 1 < 0.5) || (x / 7 >= fmouse[0] && x / 7 <= fmouse[0] + 1)) {           
                if (vt.stringArray[y][x] == sel || (x == caret && drawCount / 20 % 1 < 0.5)) {
            // if (Math.sin(x * y) > 0.5) {
            // vertices.push(x * (9 / 16) * 0.02 * sc - 0.87, -y * 0.03 * sc - 0.7 - (Math.sin(drawCount * 0.25 + y) * 0.5e-2), 40.0 * sc, 1);
            // vertices.push(x * (9 / 16) * 0.02 * sc - 0.9 + Math.sin(y * 1e-1 + drawCount * 1e-1) * 0.05 * sc, -y * 0.03 * sc - 0.6 - (Math.sin(drawCount * 0.25 + y) * 1.5e-2 * sc), 40.0 * sc, 1);
   // for (let yy = 0; yy < 18; yy++) {
       // let yyy = y + (yy * 9) - 144;
                // vertices.push(x * (9 / 16) * 0.02 * sc - 0.51 + nx * 1 + (-y * 0.00) + 0.2 - 0.6, -y * 0.04 * sc - 0.34 + 0.85 + ny * 1 + ((Math.sin(x * 0.05) * 0.5 + 0.5) * 0.0) + 0.11 - 1.42, 50.0 * sc * 0.9, 1);
                        // vertices.push((x) * 0.0054 * (9/16) - 1 + 0.081 + nx, (y) * -0.0108 + 0.855 + ny - 1.65, 12, 1);                num++;
                // colors.push(0.65, 0.65, 0.65);
   // }
            }
        }
    }
    // for (let y = 0; y < face.length; y++) {
    //     for (let x = 0; x < face[y].length; x++) {
    //         let c = face[y][x];
    //         let g = getGlyph(c);
    //         for (let yy = 0; yy < g.length; yy++) {
    //             for (let xx = 0; xx < g[yy].length; xx++) {
    //                 if (g[yy][xx] == "1" || (x == fmouse[0] && y == fmouse[1])) {
    //                     let tx = 0, ty = 0;
    //                     tx = openSimplex.noise3D(x + (xx * 1e-1), y + (yy * 1e-1), drawCount * 1e-1) * 0.002;
    //                     ty = openSimplex.noise3D(x + (xx * 1e-1), y + (yy * 1e-1), drawCount * 1e-1 + 1e4) * 0.002;
    //                     vertices.push((x * 7 + xx) * 0.0054 * (9/16) - 1 + 0.081 + tx, (y * 9 + yy) * -0.0108 + 0.855 + ty - 0.015, 12, 1);
    //                     num++;
    //                     colors.push(0, 0, 0);   
    //                 }
    //             }
    //         }
    //     }
    // }
    
    // ———————————————————————————————————————————————————————————————
    //  Grimoire drawing algorithm
    // ———————————————————————————————————————————————————————————————

    for (let y = 0; y < 22; y++) {
        // for (let x = 0; x < griArr[y].length; x++) {
        // let maxW = griArr[y + griY].length;
        // if (y == 20) {maxW = 109};
        // if (y == 21) {maxW = vt.text.length + 2};
        for (let x = 0; x < 109; x++) {
            let c;
            if (y == 21 && x >= vt.text.length + 2) {
                c = " ";
            } else if (y == 21 && x < vt.text.length + 2) {
                c = ("> " + vt.text)[x];
            } else if (y == 20) {
                c = "-";
                c = swatchesArr[x];
            } else {
                if (griEditor.activeTab !== null) {
                    let t = griEditor.activeTab;
                    if (x >= t.data[y + t.scroll.y].length) {
                        c = " ";
                    } else {
                        c = t.data[y + t.scroll.y][x];
                    }
                } else {
                    c = " ";
                }
            }
            let cur = (x == fmouse[0] && y == fmouse[1]);
            let g = cur ? getGlyph(pchar) : getGlyph(c);
            // g = (y == 20) && !cur ? getGlyph("-") : g;
            // g = (y == 21) && !cur ? getGlyph(("> " + vt.text)[x]) : g;
            for (let yy = 0; yy < g.length; yy++) {
                for (let xx = 0; xx < g[yy].length; xx++) {
                    if (g[yy][xx] == "1") {
                        let tx = 0, ty = 0;
                        let sc = 0.8;
                        // tx = openSimplex.noise3D((x + (xx * 1e-1)) * 0.1, (y + (yy * 1e-1)) * 0.1, drawCount * 0.5e-1) * 0.0;
                        // ty = openSimplex.noise3D((x + (xx * 1e-1)) * 0.1, (y + (yy * 1e-1)) * 0.1, drawCount * 0.5e-1 + 1e4) * 0.0;
                        vertices.push(((x * 7 + xx) * 0.0054 * (9/16) - 1 + -0.155 + tx + nx * 0.5) * sc, ((y * 9 + yy) * -0.0108 + 1.05 + ty + ny * 0.5) * sc, (11 + tx * 500) * sc, 1);
                        num++;
                        colors.push(0.65, 0.65, 0.65);   
                    }
                }
            }
        }
    }
    
    for (let x = 8; x <= vt2.stringArray[0].length; x++) {
        for (let y = 0; y < 9; y++) {
            if (vt2.stringArray[y][x] == "1") {
                let scz = sc * 1.5;
               // vertices.push(x * (9 / 16) * 0.02 * scz - 0.41 + nx + (-y * 0) + 0.161 - 0.6, -y * 0.04 * scz - 0.19 + 0.9 + ny + ((Math.sin(x * 0.05) * 0.5 + 0.5) * 0.0) - 0.02 + 0.05, 50.0 * scz * 0.7, 1);
            // num++;
                // colors.push(0, 0, 0);
            }
        }
    }
    for (let x = 8; x <= vt2.stringArray[0].length; x++) {
        for (let y = 0; y < 9; y++) {
            if (vt2.stringArray[y][x] == "1") {
                let scz = sc * 1.5;
               // vertices.push(x * (9 / 16) * 0.02 * scz - 0.41 + nx + (-y * 0) + 0.161 - 0.6, -y * 0.04 * scz - 0.19 + 0.9 + ny + ((Math.sin(x * 0.05) * 0.5 + 0.5) * 0.0) + 0.05, 50.0 * scz * 0.7, 1);
            // num++;
                // colors.push(0.65, 0.65, 0.65);
            }
        }
    }
    for (let x = 8; x <= vt3.stringArray[0].length; x++) {
        for (let y = 0; y < 9; y++) {
            if (vt3.stringArray[y][x] == "1") {
               // vertices.push(x * (9 / 16) * 0.02 * sc - 0.51 + nx + (-y * 0.00) + 0.26 - 0.588, -y * 0.04 * sc - 0.39 + 0.85 + ny + ((Math.sin(x * 0.05) * 0.5 + 0.5) * 0.0) + 0.11 - 0.02, 50.0 * sc * 0.9, 1);
            // num++;
                // colors.push(0, 0, 0);
            }
        }
    }
    for (let x = 8; x <= vt3.stringArray[0].length; x++) {
        for (let y = 0; y < 9; y++) {
            if (vt3.stringArray[y][x] == "1") {
               // vertices.push(x * (9 / 16) * 0.02 * sc - 0.51 + nx + (-y * 0.00) + 0.26 - 0.588, -y * 0.04 * sc - 0.39 + 0.85 + ny + ((Math.sin(x * 0.05) * 0.5 + 0.5) * 0.0) + 0.11, 50.0 * sc * 0.9, 1);
            // num++;
                // colors.push(0.65, 0.65, 0.65);
            }
        }
    }
                    for (let x = 8; x <= vt4.stringArray[0].length; x++) {
        for (let y = 0; y < 9; y++) {
            if (vt4.stringArray[y][x] == "1") {
               // vertices.push(x * (9 / 16) * 0.02 * sc - 0.51 + nx + (-y * 0.002), -y * 0.04 * sc - 0.39 + 0.97 + ny + ((Math.sin(x * 0.05) * 0.5 + 0.5) * 0.0) - 0.05, 50.0 * sc * 0.9, 1);
            // num++;
                // colors.push(0.65, 0.65, 0.65);
            }
        }
    }
    for (let i = 0; i < num; i++) {
        let r = Math.random();
        let g = Math.random();
        let b = Math.random();
        // colors.push(1, 0.65, 0.45);
    }
    
    
    // First idea for visualizing some data
    // for (let x = 0; x < 30; x++) {
    //      for (let y = 0; y < 15; y++) {
    //         let m = Math.sin(x * 1e-1 + y * drawCount * 1e-2);
    //          m += Math.cos(x * y * 0.01);
    //          let tx = -0.86, ty = 0;
    //          if (m < 0.5) {
    //              vertices.push(x * 0.01 * (9 / 16) * 4 + tx, -y * 4 * 0.01 + ty - 0.02, 50.0 * sc * 0.9, 1);
    //                          num++;
    //             colors.push(0, 0, 0);
    //              vertices.push(x * 0.01 * (9 / 16) * 4 + tx, -y * 4 * 0.01 + ty, 50.0 * sc * 0.9, 1);
    //                          num++;
    //             colors.push(0.75, 0.75, 0.75);
    //          }
    //     }
    // }
    
    if (vt.enter > 0) {vt.enter--};
    // logJavaScriptConsole(colors.length);
    // Create an empty buffer object to store the vertex buffer
    // var vertex_buffer = gl.createBuffer();
    //Bind appropriate array buffer to it
    // gl.bindBuffer(gl.ARRAY_BUFFER, vertex_buffer);
    // Pass the vertex data to the buffer
    // Unbind the buffer
    gl.uniform1f(time, drawCount);
    /*======== Associating shaders to buffer objects ========*/
    // Bind vertex buffer object
    gl.bindBuffer(gl.ARRAY_BUFFER, null);
    gl.bindBuffer(gl.ARRAY_BUFFER, termVBuf);
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(vertices), gl.STATIC_DRAW);
    // Get the attribute location
    var coord = gl.getAttribLocation(selectedProgram, "coordinates");
    // Point an attribute to the currently bound VBO
    gl.vertexAttribPointer(coord, 4, gl.FLOAT, false, 0, 0);
    // Enable the attribute
    gl.enableVertexAttribArray(coord);
//  ----
    gl.bindBuffer(gl.ARRAY_BUFFER, null);
    gl.bindBuffer(gl.ARRAY_BUFFER, dotsCBuf);
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(colors), gl.STATIC_DRAW);
    // Get the attribute location
    var cols = gl.getAttribLocation(selectedProgram, "colors");
    // Point an attribute to the currently bound VBO
    gl.vertexAttribPointer(cols, 3, gl.FLOAT, false, 0, 0);
    // Enable the attribute
    gl.enableVertexAttribArray(cols);
// ----------
    var scalar = gl.getUniformLocation(selectedProgram, "resolution");
    gl.uniform1f(scalar, resolutionScalar);
    /*============= Drawing the primitive ===============*/
    // // Clear the canvas
    // gl.clearColor(0.5, 0.5, 0.5, 0.9);
    // Clear the color buffer bit
    // gl.clear(gl.COLOR_BUFFER_BIT);
    // Draw the triangle
    gl.drawArrays(gl.POINTS, 0, num);
    if (vt.recording || vt.playback) {
        vt.recordingFrame++;
    }
    if (vt.playback) {
        vt.play();
    }
}


let roundedSquare = new ShaderProgram("rounded-square");

roundedSquare.vertText = `
    // beginGLSL
    precision mediump float;
    attribute vec4 coordinates;
    attribute vec3 colors;
    uniform float time;
    uniform float resolution;
    varying vec2 myposition;
    varying vec2 center;
    varying float alph;
    varying float size;
    varying vec3 cols;
    varying float t;
    void main(void) {
        gl_Position = vec4(coordinates.x, coordinates.y, 0.0, 1.0);
        // CRT curve
        // gl_Position.x += floor(sin(gl_Position.y * 1e2 + time)) * 0.1
        float disturbance = (floor(sin(gl_Position.y * 5. + time * 0.25 + tan(gl_Position.y * 1e3) * 0.125) * 2.)) * 0.125 * 0.125;
        float fluctuate = floor(mod(time * 1e5, 100.)/50.);
        float distr2 = (floor(sin(gl_Position.y * 1e-7 + time * 0.125 + tan(gl_Position.y * 2. + gl_Position.x * 1e-1) * 0.5) * 0.01)) * 10.1 * fluctuate;
        distr2 *= 0.;
        // gl_Position.x += disturbance * 0.1 * (1. + distr2);
        // gl_Position.x += tan(floor(sin(gl_Position.y * 1e3))) * 0.1;
        gl_Position.xy *= (1.0 - distance(gl_Position.xy, vec2(0,0)) * 0.1) * 1.05;
        center = vec2(gl_Position.x, gl_Position.y);
        center = 512.0 + center * 512.0;
        myposition = vec2(gl_Position.x, gl_Position.y);
        alph = coordinates.w;
        gl_PointSize = coordinates.z * resolution * 2.;
        size = gl_PointSize;
        cols = colors;
        t = time;
        // gl_PointSize = 25.0 + cos((coordinates.x + coordinates.y) * 4000000.) * 5.;
        // gl_PointSize = coordinates.z / (alph * (sin(myposition.x * myposition.y * 1.) * 3. + 0.5));
    }
    // endGLSL
`;
roundedSquare.fragText = `
    // beginGLSL
    precision mediump float;
    // uniform float time;
    uniform float resolution;
    varying vec2 myposition;
    varying vec2 center;
    varying float alph;
    varying float size;
    varying vec3 cols;
    varying float t;
    float rand(vec2 co){
        return fract(sin(dot(co.xy ,vec2(12.9898,78.233))) * 43758.5453 * (2.0 + sin(co.x)));
    }
    float roundedRectangleFlicker (vec2 uv, vec2 pos, vec2 size, float radius, float thickness) {
        // vec2 uv = gl_PointCoord.xy;
        float t2 = mod(t * 0.125, 3.14159 * 2.) * 1.;
        // t = 100. + (t * 1e-4);
        float w = 0.15 + (sin(t2 * 1e-2 * tan(t2 * 2e-2)) + 1.0) * 0.25;
        float d = length(max(abs(uv - pos), size * 0.5) - size * 0.5) * w - radius * 0.01;
        float oscFull = (sin(t2) * 0.5 + 0.5) * 3.75 * 0.;
        float oscScanning = (sin(gl_FragCoord.y * 1e-2 + t2) * 0.5 + 0.5) * 4.;
        return smoothstep(2.99 + oscFull + oscScanning, 0.11, d * 10. / thickness * 5.0 * 0.125 * 1.5);
    }
    float roundedRectangle (vec2 uv, vec2 pos, vec2 size, float radius, float thickness) {
        float d = length(max(abs(uv - pos), size) - size) - radius;
        return smoothstep(0.66, 0.33, d / thickness * 5.0);
    }
    void main(void) {
         // float resolution = 1.0;
         vec2 screenSize = vec2(2560.0, 1440.0) * resolution;
         vec2 uv = gl_PointCoord.xy;
        uv = uv * 2. - 1.;
        float color = roundedRectangleFlicker(uv, vec2(0.0, 0.0), vec2(0.125, 0.35) * 0.5, 0.1, 0.5);
        float rando = rand(uv * t) * 0.1;
        gl_FragColor = vec4(cols, color - rando);
    }
    // endGLSL
`;
roundedSquare.init();

// vString = [];

// makeTerminalString("acacacacab");

glyphs = [
    // a
    [
    "0000000",
    "0000000",
    "0011100",
    "0000010",
    "0011110",
    "0100010",
    "0011101",
    "0000000",
    "0000000",
    ],
    // b
        [
    "0110000",
    "0010000",
    "0010000",
    "0011100",
    "0010010",
    "0010010",
    "0011100",
    "0000000",
    "0000000",
    ],
        // c
        [
    "0000000",
    "0000000",
    "0011100",
    "0100010",
    "0100000",
    "0100010",
    "0011100",
    "0000000",
    "0000000",
    ],
            // d
        [
    "0001100",
    "0000100",
    "0000100",
    "0011100",
    "0100100",
    "0100100",
    "0011010",
    "0000000",
    "0000000",
    ],
            // e
        [
    "0000000",
    "0000000",
    "0011100",
    "0100010",
    "0111110",
    "0100000",
    "0011100",
    "0000000",
    "0000000",
    ],
                // e
        [
    "0100000",
    "0010000",
    "0001000",
    "0000100",
    "0001000",
    "0010000",
    "0100000",
    "0000000",
    "0000000",
    ],
];




getGlyph = function(g) {
    let ch;
    // logJavaScriptConsole(g);
    switch (g) {
        case "a":
        ch = [
            "0000000",
            "0000000",
            "0011100",
            "0000010",
            "0011110",
            "0100010",
            "0011101",
            "0000000",
            "0000000",
        ];
        break;
        case "à":
        ch = [
            "0010000",
            "0001000",
            "0011100",
            "0000010",
            "0011110",
            "0100010",
            "0011101",
            "0000000",
            "0000000",
        ];
        break;
        case "â":
        ch = [
            "0001000",
            "0010100",
            "0011100",
            "0000010",
            "0011110",
            "0100010",
            "0011101",
            "0000000",
            "0000000",
        ];
        break;
        case "b": 
        ch = [
            "0110000",
            "0010000",
            "0010000",
            "0011100",
            "0010010",
            "0010010",
            "0011100",
            "0000000",
            "0000000",
        ];
        break;
        case "c":
            ch = [
            "0000000",
            "0000000",
            "0011100",
            "0100010",
            "0100000",
            "0100010",
            "0011100",
            "0000000",
            "0000000",
            ];
        break;
        case "ç":
            ch = [
            "0000000",
            "0000000",
            "0011100",
            "0100010",
            "0100000",
            "0100010",
            "0011100",
            "0000010",
            "0011100",
            ];
        break;
        case "d":
        ch = [
            "0001100",
            "0000100",
            "0000100",
            "0011100",
            "0100100",
            "0100100",
            "0011010",
            "0000000",
            "0000000",
        ];
        break;
        case "e":
         ch = [
            "0000000",
            "0000000",
            "0011100",
            "0100010",
            "0111110",
            "0100000",
            "0011100",
            "0000000",
            "0000000",
        ];
        break;
        case "é":
        ch = [
            "0000100",
            "0001000",
            "0011100",
            "0100010",
            "0111110",
            "0100000",
            "0011100",
            "0000000",
            "0000000",
        ];
        break;
        case "è":
        ch = [
            "0010000",
            "0001000",
            "0011100",
            "0100010",
            "0111110",
            "0100000",
            "0011100",
            "0000000",
            "0000000",
        ];
        break;
        case "f":
        ch = [
            "0001100",
            "0010010",
            "0010000",
            "0111000",
            "0010000",
            "0010000",
            "0111000",
            "0000000",
            "0000000",
        ];
        break;
        case "g":
        ch = [
            "0000000",
            "0000000",
            "0011010",
            "0100100",
            "0100100",
            "0011100",
            "0000100",
            "0100100",
            "0011000",
        ];
        break;
        case "h":
        ch = [
            "0110000",
            "0010000",
            "0010000",
            "0011100",
            "0010010",
            "0010010",
            "0110010",
            "0000000",
            "0000000",
        ];
        break;
        case "i":
        ch = [
            "0000000",
            "0001000",
            "0000000",
            "0011000",
            "0001000",
            "0001000",
            "0011100",
            "0000000",
            "0000000",
        ];
        break;
        case "j":
        ch = [
            "0000000",
            "0000100",
            "0000000",
            "0000100",
            "0000100",
            "0000100",
            "0100100",
            "0011000",
            "0000000",
        ];
        break;
        case "k":
        ch = [
            "0010000",
            "0010000",
            "0010010",
            "0010100",
            "0011000",
            "0010100",
            "0010010",
            "0000000",
            "0000000",
        ];
        break;
        case "l":
        ch = [
            "0011000",
            "0001000",
            "0001000",
            "0001000",
            "0001000",
            "0001000",
            "0011100",
            "0000000",
            "0000000",
        ];
        break;
        case "m":
        ch = [
            "0000000",
            "0000000",
            "0110110",
            "0101010",
            "0101010",
            "0100010",
            "0100010",
            "0000000",
            "0000000",
        ];
        break;
        case "n":
        ch = [
            "0000000",
            "0000000",
            "0101100",
            "0010010",
            "0010010",
            "0010010",
            "0010010",
            "0000000",
            "0000000",
        ];
        break;
        case "o":
        ch = [
            "0000000",
            "0000000",
            "0011100",
            "0100010",
            "0100010",
            "0100010",
            "0011100",
            "0000000",
            "0000000",
        ];
        break;
        case "p":
        ch = [
            "0000000",
            "0000000",
            "0111100",
            "0010010",
            "0010010",
            "0011100",
            "0010000",
            "0111000",
            "0000000",
        ];
        break;
        case "q":
        ch = [
            "0000000",
            "0000000",
            "0011010",
            "0100100",
            "0100100",
            "0011100",
            "0000100",
            "0001110",
            "0000000",
        ];
        break;
        case "r":
        ch = [
            "0000000",
            "0000000",
            "0101100",
            "0010010",
            "0010000",
            "0010000",
            "0111000",
            "0000000",
            "0000000",
        ];
        break;
        case "s":
        ch = [
            "0000000",
            "0000000",
            "0011100",
            "0100000",
            "0011100",
            "0000010",
            "0011100",
            "0000000",
            "0000000",
        ];
        break;
        case "t":
        ch = [
            "0010000",
            "0010000",
            "0111000",
            "0010000",
            "0010000",
            "0010010",
            "0001100",
            "0000000",
            "0000000",
        ];
        break;
        case "u":
        ch = [
            "0000000",
            "0000000",
            "0100010",
            "0100010",
            "0100010",
            "0100010",
            "0011101",
            "0000000",
            "0000000",
        ];
        break;
        case "û":
        ch = [
            "0001000",
            "0010100",
            "0100010",
            "0100010",
            "0100010",
            "0100010",
            "0011101",
            "0000000",
            "0000000",
        ];
        break;
        case "v":
        ch = [
            "0000000",
            "0000000",
            "0100010",
            "0100010",
            "0100010",
            "0010100",
            "0001000",
            "0000000",
            "0000000",
        ];
        break;
        case "w":
        ch = [
            "0000000",
            "0000000",
            "0100010",
            "0100010",
            "0101010",
            "0111110",
            "0010100",
            "0000000",
            "0000000",
        ];
        break;
        case "x":
        ch = [
            "0000000",
            "0000000",
            "0100010",
            "0010100",
            "0001000",
            "0010100",
            "0100010",
            "0000000",
            "0000000",
        ];
        break;
        case "y":
        ch = [
            "0000000",
            "0000000",
            "0100010",
            "0100010",
            "0011110",
            "0000010",
            "0000010",
            "0001100",
            "0000000",
        ];
        break;
        case "z":
        ch = [
            "0000000",
            "0000000",
            "0111110",
            "0000100",
            "0001000",
            "0010000",
            "0111110",
            "0000000",
            "0000000",
        ];
        break;
        case "(":
        ch = [
            "0000100",
            "0001000",
            "0010000",
            "0010000",
            "0010000",
            "0001000",
            "0000100",
            "0000000",
            "0000000",
        ];
        break;
        case ")":
        ch = [
            "0010000",
            "0001000",
            "0000100",
            "0000100",
            "0000100",
            "0001000",
            "0010000",
            "0000000",
            "0000000",
        ];
        break;
        case "{":
        ch = [
            "0000110",
            "0001000",
            "0001000",
            "0010000",
            "0001000",
            "0001000",
            "0000110",
            "0000000",
            "0000000",
        ];
        break;
        case "}":
        ch = [
            "0110000",
            "0001000",
            "0001000",
            "0000100",
            "0001000",
            "0001000",
            "0110000",
            "0000000",
            "0000000",
        ];
        break;
        case "[":
        ch = [
            "0011100",
            "0010000",
            "0010000",
            "0010000",
            "0010000",
            "0010000",
            "0011100",
            "0000000",
            "0000000",
        ];
        break;
        case "]":
        ch = [
            "0011100",
            "0000100",
            "0000100",
            "0000100",
            "0000100",
            "0000100",
            "0011100",
            "0000000",
            "0000000",
        ];
        break;
        case " ":
        ch = [
            "0000000",
            "0000000",
            "0000000",
            "0000000",
            "0000000",
            "0000000",
            "0000000",
            "0000000",
            "0000000",
        ];
        break;
        case "=":
        ch = [
            "0000000",
            "0000000",
            "0111110",
            "0000000",
            "0111110",
            "0000000",
            "0000000",
            "0000000",
            "0000000",
        ];
        break;
        case "0":
        ch = [
            "0011100",
            "0100010",
            "0100010",
            "0101010",
            "0100010",
            "0100010",
            "0011100",
            "0000000",
            "0000000",
        ];
        break;
        case "1":
        ch = [
            "0000100",
            "0001100",
            "0010100",
            "0000100",
            "0000100",
            "0000100",
            "0001110",
            "0000000",
            "0000000",
        ];
        break;
        case "2":
        ch = [
            "0011100",
            "0100010",
            "0000010",
            "0000100",
            "0001000",
            "0010000",
            "0111110",
            "0000000",
            "0000000",
        ];
        break;
        case "3":
        ch = [
            "0011100",
            "0100010",
            "0000010",
            "0001100",
            "0000010",
            "0100010",
            "0011100",
            "0000000",
            "0000000",
        ];
        break;
        case "4":
        ch = [
            "0000100",
            "0001100",
            "0010100",
            "0111100",
            "0000100",
            "0000100",
            "0001110",
            "0000000",
            "0000000",
        ];
        break;
        case "5":
        ch = [
            "0111110",
            "0100000",
            "0100000",
            "0111100",
            "0000010",
            "0100010",
            "0011100",
            "0000000",
            "0000000",
        ];
        break;
        case "6":
        ch = [
            "0011100",
            "0100000",
            "0100000",
            "0111100",
            "0100010",
            "0100010",
            "0011100",
            "0000000",
            "0000000",
        ];
        break;
        case "7":
        ch = [
            "0111110",
            "0100010",
            "0000010",
            "0000100",
            "0001000",
            "0001000",
            "0001000",
            "0000000",
            "0000000",
        ];
        break;
        case "8":
        ch = [
            "0011100",
            "0100010",
            "0100010",
            "0011100",
            "0100010",
            "0100010",
            "0011100",
            "0000000",
            "0000000",
        ];
        break;
        case "9":
        ch = [
            "0011100",
            "0100010",
            "0100010",
            "0011110",
            "0000010",
            "0000010",
            "0011100",
            "0000000",
            "0000000",
        ];
        break;
        case "A":
        ch = [
            "0001000",
            "0010100",
            "0100010",
            "0100010",
            "0111110",
            "0100010",
            "0100010",
            "0000000",
            "0000000",
        ];
        break;
        case "B":
        ch = [
            "0111100",
            "0100010",
            "0100010",
            "0111100",
            "0100010",
            "0100010",
            "0111100",
            "0000000",
            "0000000",
        ];
        break;
        case "C":
        ch = [
            "0011100",
            "0100010",
            "0100000",
            "0100000",
            "0100000",
            "0100010",
            "0011100",
            "0000000",
            "0000000",
        ];
        break;
        case "D":
        ch = [
            "0111100",
            "0100010",
            "0100010",
            "0100010",
            "0100010",
            "0100010",
            "0111100",
            "0000000",
            "0000000",
        ];
        break;
        case "E":
        ch = [
            "0111110",
            "0100000",
            "0100000",
            "0111100",
            "0100000",
            "0100000",
            "0111110",
            "0000000",
            "0000000",
        ];
        break;
        case "F":
        ch = [
            "0111110",
            "0100000",
            "0100000",
            "0111000",
            "0100000",
            "0100000",
            "0100000",
            "0000000",
            "0000000",
        ];
        break;
        case "G":
        ch = [
            "0011100",
            "0100010",
            "0100000",
            "0100110",
            "0100010",
            "0100010",
            "0011100",
            "0000000",
            "0000000",
        ];
        break;
        case "H":
        ch = [
            "0100010",
            "0100010",
            "0100010",
            "0111110",
            "0100010",
            "0100010",
            "0100010",
            "0000000",
            "0000000",
        ];
        break;
        case "I":
        ch = [
            "0011100",
            "0001000",
            "0001000",
            "0001000",
            "0001000",
            "0001000",
            "0011100",
            "0000000",
            "0000000",
        ];
        break;
        case "J":
        ch = [
            "0001110",
            "0000100",
            "0000100",
            "0000100",
            "0000100",
            "0100100",
            "0011000",
            "0000000",
            "0000000",
        ];
        break;
        case "K":
        ch = [
            "0100010",
            "0100100",
            "0101000",
            "0110000",
            "0101000",
            "0100100",
            "0100010",
            "0000000",
            "0000000",
        ];
        break;
        case "L":
        ch = [
            "0100000",
            "0100000",
            "0100000",
            "0100000",
            "0100000",
            "0100010",
            "0111110",
            "0000000",
            "0000000",
        ];
        break;
        case "M":
        ch = [
            "0100010",
            "0110110",
            "0101010",
            "0101010",
            "0100010",
            "0100010",
            "0100010",
            "0000000",
            "0000000",
        ];
        break;
        case "N":
        ch = [
            "0100010",
            "0110010",
            "0101010",
            "0100110",
            "0100010",
            "0100010",
            "0100010",
            "0000000",
            "0000000",
        ];
        break;
        case "O":
        ch = [
            "0001000",
            "0010100",
            "0100010",
            "0100010",
            "0100010",
            "0010100",
            "0001000",
            "0000000",
            "0000000",
        ];
        break;
        case "P":
        ch = [
            "0111100",
            "0010010",
            "0010010",
            "0011100",
            "0010000",
            "0010000",
            "0111000",
            "0000000",
            "0000000",
        ];
        break;
        case "Q":
        ch = [
            "0011100",
            "0100010",
            "0100010",
            "0100010",
            "0100010",
            "0101010",
            "0011100",
            "0000110",
            "0000000",
        ];
        break;
        case "R":
        ch = [
            "0111100",
            "0100010",
            "0100010",
            "0111100",
            "0101000",
            "0100100",
            "0100010",
            "0000000",
            "0000000",
        ];
        break;
        case "S":
        ch = [
            "0011100",
            "0100010",
            "0010000",
            "0001000",
            "0000100",
            "0100010",
            "0011100",
            "0000000",
            "0000000",
        ];
        break;
        case "T":
        ch = [
            "0111110",
            "0101010",
            "0001000",
            "0001000",
            "0001000",
            "0001000",
            "0011100",
            "0000000",
            "0000000",
        ];
        break;
        case "U":
        ch = [
            "0100010",
            "0100010",
            "0100010",
            "0100010",
            "0100010",
            "0100010",
            "0011100",
            "0000000",
            "0000000",
        ];
        break;
        case "V":
        ch = [
            "0100010",
            "0100010",
            "0100010",
            "0100010",
            "0100010",
            "0010100",
            "0001000",
            "0000000",
            "0000000",
        ];
        break;
        case "W":
        ch = [
            "0100010",
            "0100010",
            "0100010",
            "0100010",
            "0101010",
            "0101010",
            "0010100",
            "0000000",
            "0000000",
        ];
        break;
        case "X":
        ch = [
            "0100010",
            "0100010",
            "0010100",
            "0001000",
            "0010100",
            "0100010",
            "0100010",
            "0000000",
            "0000000",
        ];
        break;
        case "Y":
        ch = [
            "0100010",
            "0100010",
            "0100010",
            "0010100",
            "0001000",
            "0001000",
            "0011100",
            "0000000",
            "0000000",
        ];
        break;
        case "Z":
        ch = [
            "0111110",
            "0100010",
            "0000100",
            "0001000",
            "0010000",
            "0100010",
            "0111110",
            "0000000",
            "0000000",
        ];
        break;
        case "'":
        ch = [
            "0000100",
            "0000100",
            "0001000",
            "0000000",
            "0000000",
            "0000000",
            "0000000",
            "0000000",
            "0000000",
        ];
        break;
        case '"':
        ch = [
            "0010100",
            "0010100",
            "0101000",
            "0000000",
            "0000000",
            "0000000",
            "0000000",
            "0000000",
            "0000000",
        ];
        break;
        case ".":
        ch = [
            "0000000",
            "0000000",
            "0000000",
            "0000000",
            "0000000",
            "0000010",
            "0000010",
            "0000000",
            "0000000",
        ];
        break;
        case ",":
        ch = [
            "0000000",
            "0000000",
            "0000000",
            "0000000",
            "0000000",
            "0000110",
            "0000110",
            "0001100",
            "0000000",
        ];
        break;
        case ";":
        ch = [
            "0000000",
            "0000000",
            "0000100",
            "0000000",
            "0000100",
            "0000100",
            "0001000",
            "0000000",
            "0000000",
        ];
        break;
        case ":":
        ch = [
            "0000000",
            "0000000",
            "0000100",
            "0000000",
            "0000000",
            "0000100",
            "0000000",
            "0000000",
            "0000000",
        ];
        break;
        case "+":
        ch = [
            "0000000",
            "0000000",
            "0001000",
            "0001000",
            "0111110",
            "0001000",
            "0001000",
            "0000000",
            "0000000",
        ];
        break;
        case "-":
        ch = [
            "0000000",
            "0000000",
            "0000000",
            "0000000",
            "0111110",
            "0000000",
            "0000000",
            "0000000",
            "0000000",
        ];
        break;
        case "_":
        ch = [
            "0000000",
            "0000000",
            "0000000",
            "0000000",
            "0000000",
            "0000000",
            "0111110",
            "0000000",
            "0000000",
        ];
        break;
        case "/":
        ch = [
            "0000000",
            "0000000",
            "0000010",
            "0000100",
            "0001000",
            "0010000",
            "0100000",
            "0000000",
            "0000000",
        ];
        break;
            case "\\":
        ch = [
            "0000000",
            "0000000",
            "0100000",
            "0010000",
            "0001000",
            "0000100",
            "0000010",
            "0000000",
            "0000000",
        ];
        break;
        case "*":
        ch = [
            "0000000",
            "0000000",
            "0100100",
            "0011000",
            "0111100",
            "0011000",
            "0100100",
            "0000000",
            "0000000",
        ];
        break;
        case "!":
        ch = [
            "0001000",
            "0011100",
            "0011100",
            "0011100",
            "0001000",
            "0000000",
            "0001000",
            "0000000",
            "0000000",
        ];
        break;
        case "?":
        ch = [
            "0011100",
            "0100010",
            "0000010",
            "0000100",
            "0001000",
            "0000000",
            "0001000",
            "0000000",
            "0000000",
        ];
        break;
        case "#":
        ch = [
            "0010100",
            "0010100",
            "1111111",
            "0010100",
            "1111111",
            "0010100",
            "0010100",
            "0000000",
            "0000000",
        ];
        break;
        case "~":
        ch = [
            "0000000",
            "0000000",
            "0100000",
            "0011100",
            "0000010",
            "0000000",
            "0000000",
            "0000000",
            "0000000",
        ];
        break;
        case ">":
        ch = [
            "0100000",
            "0010000",
            "0001000",
            "0000100",
            "0001000",
            "0010000",
            "0100000",
            "0000000",
            "0000000",
        ];
        break;
        case "<":
        ch = [
            "0000010",
            "0000100",
            "0001000",
            "0010000",
            "0001000",
            "0000100",
            "0000010",
            "0000000",
            "0000000",
        ];
        break;
        case "`":
        ch = [
            "0010000",
            "0010000",
            "0001000",
            "0000000",
            "0000000",
            "0000000",
            "0000000",
            "0000000",
            "0000000",
        ];
        break;
        case "░":
        ch = [
            "0001000",
            "0100010",
            "0001000",
            "0100010",
            "0001000",
            "0100010",
            "0001000",
            "0100010",
            "0001000",
        ];
        break;
        case "▒":
        ch = [
            "0101010",
            "1010101",
            "0101010",
            "1010101",
            "0101010",
            "1010101",
            "0101010",
            "1010101",
            "0101010",
        ];
        break;
        case "▓":
        ch = [
            "1101110",
            "0111011",
            "1101110",
            "0111011",
            "1101110",
            "0111011",
            "1101110",
            "0111011",
            "1101110",
        ];
        break;
        case "│":
        ch = [
            "0001000",
            "0001000",
            "0001000",
            "0001000",
            "0001000",
            "0001000",
            "0001000",
            "0001000",
            "0001000",
        ];
        break;
        case "┤":
        ch = [
            "0001000",
            "0001000",
            "0001000",
            "0001000",
            "1111000",
            "0001000",
            "0001000",
            "0001000",
            "0001000",
        ];
        break;
        case "╡":
        ch = [
            "0001000",
            "0001000",
            "0001000",
            "1111000",
            "0001000",
            "1111000",
            "0001000",
            "0001000",
            "0001000",
        ];
        break;
        case "╢":
        ch = [
            "0001010",
            "0001010",
            "0001010",
            "0001010",
            "1111010",
            "0001010",
            "0001010",
            "0001010",
            "0001010",
        ];
        break;
        case "╖":
        ch = [
            "0000000",
            "0000000",
            "0000000",
            "0000000",
            "1111110",
            "0001010",
            "0001010",
            "0001010",
            "0001010",
        ];
        break;
        case "╕":
        ch = [
            "0000000",
            "0000000",
            "0000000",
            "1111000",
            "0001000",
            "1111000",
            "0001000",
            "0001000",
            "0001000",
        ];
        break;
        case "╣":
        ch = [
            "0001010",
            "0001010",
            "0001010",
            "1111010",
            "0000010",
            "1111010",
            "0001010",
            "0001010",
            "0001010",
        ];
        break;
        case "║":
        ch = [
            "0001010",
            "0001010",
            "0001010",
            "0001010",
            "0001010",
            "0001010",
            "0001010",
            "0001010",
            "0001010",
        ];
        break;
        case "╗":
        ch = [
            "0000000",
            "0000000",
            "0000000",
            "1111110",
            "0000010",
            "1111010",
            "0001010",
            "0001010",
            "0001010",
        ];
        break;
        case "╝":
        ch = [
            "0001010",
            "0001010",
            "0001010",
            "1111010",
            "0000010",
            "1111110",
            "0000000",
            "0000000",
            "0000000",
        ];
        break;
        case "╜":
        ch = [
            "0001010",
            "0001010",
            "0001010",
            "0001010",
            "1111110",
            "0000000",
            "0000000",
            "0000000",
            "0000000",
        ];
        break;
        case "╛":
        ch = [
            "0001000",
            "0001000",
            "0001000",
            "1111000",
            "0001000",
            "1111000",
            "0000000",
            "0000000",
            "0000000",
        ];
        break;
        case "┐":
        ch = [
            "0000000",
            "0000000",
            "0000000",
            "0000000",
            "1111000",
            "0001000",
            "0001000",
            "0001000",
            "0001000",
        ];
        break;
        case "└":
        ch = [
            "0001000",
            "0001000",
            "0001000",
            "0001000",
            "0001111",
            "0000000",
            "0000000",
            "0000000",
            "0000000",
        ];
        break;
        case "┴":
        ch = [
            "0001000",
            "0001000",
            "0001000",
            "0001000",
            "1111111",
            "0000000",
            "0000000",
            "0000000",
            "0000000",
        ];
        break;
        case "┬":
        ch = [
            "0000000",
            "0000000",
            "0000000",
            "0000000",
            "1111111",
            "0001000",
            "0001000",
            "0001000",
            "0001000",
        ];
        break;
        case "├":
        ch = [
            "0001000",
            "0001000",
            "0001000",
            "0001000",
            "0001111",
            "0001000",
            "0001000",
            "0001000",
            "0001000",
        ];
        break;
        case "─":
        ch = [
            "0000000",
            "0000000",
            "0000000",
            "0000000",
            "1111111",
            "0000000",
            "0000000",
            "0000000",
            "0000000",
        ];
        break;
        case "┼":
        ch = [
            "0001000",
            "0001000",
            "0001000",
            "0001000",
            "1111111",
            "0001000",
            "0001000",
            "0001000",
            "0001000",
        ];
        break;
        case "╞":
        ch = [
            "0001000",
            "0001000",
            "0001000",
            "0001111",
            "0001000",
            "0001111",
            "0001000",
            "0001000",
            "0001000",
        ];
        break;
        case "╟":
        ch = [
            "0001010",
            "0001010",
            "0001010",
            "0001010",
            "0001011",
            "0001010",
            "0001010",
            "0001010",
            "0001010",
        ];
        break;
        case "╚":
        ch = [
            "0001010",
            "0001010",
            "0001010",
            "0001011",
            "0001000",
            "0001111",
            "0000000",
            "0000000",
            "0000000",
        ];
        break;
        case "╔":
        ch = [
            "0000000",
            "0000000",
            "0000000",
            "0001111",
            "0001000",
            "0001011",
            "0001010",
            "0001010",
            "0001010",
        ];
        break;
        case "╩":
        ch = [
            "0001010",
            "0001010",
            "0001010",
            "1111011",
            "0000000",
            "1111111",
            "0000000",
            "0000000",
            "0000000",
        ];
        break;
        case "╦":
        ch = [
            "0000000",
            "0000000",
            "0000000",
            "1111111",
            "0000000",
            "1111011",
            "0001010",
            "0001010",
            "0001010",
        ];
        break;
        case "╠":
        ch = [
            "0001010",
            "0001010",
            "0001010",
            "0001011",
            "0001000",
            "0001011",
            "0001010",
            "0001010",
            "0001010",
        ];
        break;
        case "═":
        ch = [
            "0000000",
            "0000000",
            "0000000",
            "1111111",
            "0000000",
            "1111111",
            "0000000",
            "0000000",
            "0000000",
        ];
        break;
        case "╬":
        ch = [
            "0001010",
            "0001010",
            "0001010",
            "1111011",
            "0000000",
            "1111011",
            "0001010",
            "0001010",
            "0001010",
        ];
        break;
        case "╧":
        ch = [
            "0001000",
            "0001000",
            "0001000",
            "1111111",
            "0000000",
            "1111111",
            "0000000",
            "0000000",
            "0000000",
        ];
        break;
        case "╨":
        ch = [
            "0001010",
            "0001010",
            "0001010",
            "0001010",
            "1111111",
            "0000000",
            "0000000",
            "0000000",
            "0000000",
        ];
        break;
        case "╤":
        ch = [
            "0000000",
            "0000000",
            "0000000",
            "1111111",
            "0000000",
            "1111111",
            "0001000",
            "0001000",
            "0001000",
        ];
        break;
        case "╥":
        ch = [
            "0000000",
            "0000000",
            "0000000",
            "0000000",
            "1111111",
            "0001010",
            "0001010",
            "0001010",
            "0001010",
        ];
        break;
        case "╙":
        ch = [
            "0001010",
            "0001010",
            "0001010",
            "0001010",
            "0001111",
            "0000000",
            "0000000",
            "0000000",
            "0000000",
        ];
        break;
        case "╘":
        ch = [
            "0001000",
            "0001000",
            "0001000",
            "0001111",
            "0001000",
            "0001111",
            "0000000",
            "0000000",
            "0000000",
        ];
        break;
        case "╒":
        ch = [
            "0000000",
            "0000000",
            "0000000",
            "0001111",
            "0001000",
            "0001111",
            "0001000",
            "0001000",
            "0001000",
        ];
        break;
        case "╓":
        ch = [
            "0000000",
            "0000000",
            "0000000",
            "0000000",
            "0001111",
            "0001010",
            "0001010",
            "0001010",
            "0001010",
        ];
        break;
        case "╫":
        ch = [
            "0001010",
            "0001010",
            "0001010",
            "0001010",
            "1111111",
            "0001010",
            "0001010",
            "0001010",
            "0001010",
        ];
        break;
        case "╪":
        ch = [
            "0001000",
            "0001000",
            "0001000",
            "1111111",
            "0001000",
            "1111111",
            "0001000",
            "0001000",
            "0001000",
        ];
        break;
        case "┘":
        ch = [
            "0001000",
            "0001000",
            "0001000",
            "0001000",
            "1111000",
            "0000000",
            "0000000",
            "0000000",
            "0000000",
        ];
        break;
        case "┌":
        ch = [
            "0000000",
            "0000000",
            "0000000",
            "0000000",
            "0001111",
            "0001000",
            "0001000",
            "0001000",
            "0001000",
        ];
        break;
        case "█":
        ch = [
            "1111111",
            "1111111",
            "1111111",
            "1111111",
            "1111111",
            "1111111",
            "1111111",
            "1111111",
            "1111111",
        ];
        break;
        case "▄":
        ch = [
            "0000000",
            "0000000",
            "0000000",
            "0000000",
            "1111111",
            "1111111",
            "1111111",
            "1111111",
            "1111111",
        ];
        break;
        case "▌":
        ch = [
            "1111000",
            "1111000",
            "1111000",
            "1111000",
            "1111000",
            "1111000",
            "1111000",
            "1111000",
            "1111000",
        ];
        break;
        case "▐":
        ch = [
            "0000111",
            "0000111",
            "0000111",
            "0000111",
            "0000111",
            "0000111",
            "0000111",
            "0000111",
            "0000111",
        ];
        break;
        case "▀":
        ch = [
            "1111111",
            "1111111",
            "1111111",
            "1111111",
            "0000000",
            "0000000",
            "0000000",
            "0000000",
            "0000000",
        ];
        break;
        default:
        ch = [
            "0000000",
            "0000000",
            "0011100",
            "0000010",
            "0011110",
            "0100010",
            "0011101",
            "0000000",
            "0000000",
        ];
        break;
    }
    return ch;
};





let VirtualTerminal = function() {
    this.text = "";
    this.caretPosition = 0;
    this.selectionBounds = [0, 0];
    this.history = [];
    this.clear();
    this.recording = false;
    this.recordingFrame = 0;
    this.recordingSession = [];
    this.commands = [];
    this.commandID = 0;
};

VirtualTerminal.prototype.commandDecID = function() {
    if (this.commandID > 0) {
        this.commandID -= 1;
        let newCommand = this.commands[this.commandID];
        this.text = newCommand;
        this.caretPosition = this.text.length;
    }
};

VirtualTerminal.prototype.commandIncID = function() {
    if (this.commandID < this.commands.length - 1) {
        this.commandID += 1;
        let newCommand = this.commands[this.commandID];
        this.text = newCommand;
        this.caretPosition = this.text.length;
    }
};


VirtualTerminal.prototype.logState = function(frame) {
    this.history.push({
        frame: frame,
        text: this.text,
        caretPosition: this.caretPosition,
        selectionBounds: this.selectionBounds
    });
};

VirtualTerminal.prototype.makeTerminalString = function() {
    let s = this.text;
    let a = new Array(9);
    for (let y = 0; y < 9; y++) {
        a[y] = "";
        a[y] = a[y] + getGlyph(">")[y];
        for (let i = 0; i < s.length; i++) {
             a[y] = a[y] + getGlyph(s[i])[y];
        }
    }
    this.stringArray = a;
};

VirtualTerminal.prototype.record = function() {
    this.recordingFrame = 0;
    this.recordingSession = [];
    this.recording = true;
    this.clear();
    let commands = [];
    for (let i = 0; i < this.commands.length; i++) {
        commands.push(this.commands[i]);
    }
    this.recordingInitialState = [
        this.commandID,
        commands
    ];
};

VirtualTerminal.prototype.stopRecord = function() {
    this.recording = false;
};

VirtualTerminal.prototype.startPlayback = function() {
    this.playback = true;
    this.recordingFrame = 0;
    this.clear();
    this.commands = [];
    for (let i = 0; i < this.recordingInitialState[1].length; i++) {
        this.commands.push(this.recordingInitialState[1][i]);
    }
    this.commandID = this.recordingInitialState[0];
};

VirtualTerminal.prototype.stopPlayback = function() {
    this.playback = false;
    this.recordingFrame = 0;
};

VirtualTerminal.prototype.saveSession = function(name) {
    let bundle = [];
    for (let i = 0; i < this.recordingSession.length; i++) {
        let e = this.recordingSession[i];
        let item = [
            e[0], e[1].key, e[1].shiftKey, e[1].metaKey
        ];
        bundle.push(item);
    }
    let file = {
        name: name + ".json", 
        path: "/Users/guillaumepelletier/Desktop/Dropbox/Art/p5/Les-nouvelles-galaxies/Vert/sessions/" + name + ".json",
        data: JSON.stringify([
            this.recordingInitialState[0],
            this.recordingInitialState[1],
            bundle
        ])
    };
    socket.emit('saveFile', file);
};

VirtualTerminal.prototype.loadSession = function(s) {
    this.recordingSession = [];
    let commands = [];
    for (let i = 0; i < s[1].length; i++) {
        commands.push(s[1][i]);
    }
    this.recordingInitialState = [
        s[0],
        commands
    ];
    for (let i = 0; i < s[2].length; i++) {
        let e = s[2][i];
        this.recordingSession.push([
            e[0],
            {
                key: e[1],
                shiftKey: e[2],
                metaKey: e[3]
            }
        ]);
    }
};


VirtualTerminal.prototype.play = function() {
    // ljs("Playing!");
    for (let i = 0; i < this.recordingSession.length; i++) {
        let e = this.recordingSession[i];
        if (this.recordingFrame == e[0]) {
            // ljs("Caught one!");
            this.update(e[1]);
        }
    }
    let l = this.recordingSession.length - 1;
    let last = this.recordingSession[l][0];
    if (this.recordingFrame > last) {
        this.stopPlayback();
    };
};


VirtualTerminal.prototype.update = function(e) {
    if (this.recording) {
        this.recordingSession.push([this.recordingFrame, e]);
    }
    let s = e.key;
    let c = this.caretPosition;
    let sel = this.selectionBounds[1] - this.selectionBounds[0] !== 0;
    if (s == "Backspace") {
        if (this.text.length && (this.caretPosition || sel)) {
          // this.text = this.text.slice(0, -1);
          if (sel) {
              this.text = this.text.slice(0, this.selectionBounds[0] - 1) + this.text.slice(this.selectionBounds[1] - 1);
              this.caretPosition = this.selectionBounds[0] - 1;
              this.selectionBounds = [0, 0];
          } else {
              this.text = this.text.slice(0, c - 1) + this.text.slice(c);
              this.caretPosition--;
          }
        }
    } else if ((s == "ArrowLeft") && (e.shiftKey) && (c > 0)) {
        if (this.selectionBounds[1] - this.selectionBounds[0] == 0) {
            this.caretPosition--;
            this.selectionBounds[0] = this.caretPosition + 1;
            this.selectionBounds[1] = this.caretPosition + 2;
            this.selDir = 0;
        } else if (sel){
            if (this.selDir == 0) {
                this.caretPosition--;
                this.selectionBounds[0] = this.caretPosition + 1;
            } else {
                this.caretPosition--;
                this.selectionBounds[1] = this.caretPosition + 1;
            }
        }
    } else if ((s == "ArrowLeft") && (e.shiftKey) && (c == 0)) {
        
    } else if ((s == "ArrowLeft") && (c > 0 || sel)) {
        if (sel) {
            this.caretPosition = this.selectionBounds[0] - 1;
        } else {
            this.caretPosition--;
        }
        this.selectionBounds = [0, 0];
    } else if ((s == "ArrowRight") && (c < this.text.length) && (e.shiftKey)) {
        // logJavaScriptConsole(this.selectionBounds[1]);
        if (this.selectionBounds[1] - this.selectionBounds[0] == 0) {
            this.caretPosition++;
            this.selectionBounds[1] = this.caretPosition + 1;
            this.selectionBounds[0] = this.caretPosition;
            this.selDir = 1;
        } else if (sel){
            if (this.selDir == 1) {
                this.caretPosition++;
                this.selectionBounds[1] = this.caretPosition + 1;
            } else {
                this.caretPosition++;
                this.selectionBounds[0] = this.caretPosition + 1;
            }
        }
    } else if ((s == "ArrowRight") && (e.shiftKey) && (c == this.text.length)) {
        
    } else if ((s == "ArrowRight") && (c < this.text.length)) {
        if (sel) {
            this.caretPosition = this.selectionBounds[1] - 1;
        } else {
            this.caretPosition++;
        }
        this.selectionBounds = [0, 0];
    } else if ((s == "ArrowRight") && sel) {
        this.selectionBounds = [0, 0];
    } else if ((s == "a" || s == "A") && (e.metaKey)) {
        this.selectionBounds = [1, this.text.length + 1];
        // logJavaScriptConsole("aaaaert");
        this.caretPosition = this.text.length;
    } else if (s == "ArrowUp") {
        this.commandDecID();
    } else if (s == "ArrowDown") {
        this.commandIncID();
    } else if (s.length == "1") {
        if (sel) {
              this.text = this.text.slice(0, this.selectionBounds[0] - 1) + s + this.text.slice(this.selectionBounds[1] - 1);
              this.caretPosition = this.selectionBounds[0];
              this.selectionBounds = [0, 0];
          } else {
              this.text = this.text.slice(0, c) + s + this.text.slice(c);
        // this.text += s;
              this.caretPosition++;
          }
    } else if (s == "Enter") {
        if (this.text !== this.commands[this.commands.length - 1]) {
            this.commands.push(this.text);
            this.commandID = this.commands.length - 1;
        }
        this.enter = 5;
        var scTest = /(^s\s|^l\s)([\s\S]*)/;
        var scMatch = scTest.exec(this.text);
        if (scMatch) {
            socket.emit('interpretSuperCollider', scMatch[2], "./");
        } else {
            eval(this.text);
        }
    }
    this.makeTerminalString();
};

VirtualTerminal.prototype.add = function(t) {
    this.commands.push(t);
    this.commandID = this.commands.length - 1;
    this.text = t;
    this.makeTerminalString();
};


VirtualTerminal.prototype.clear = function(s) {
    this.caretPosition = 0;
    this.text = "";
    this.selectionBounds = [0, 0];
    this.makeTerminalString();
    this.selDir = 0;
};


let vt = new VirtualTerminal();
// vt.stringArray = [];
let vtActive = true;


let TerminalRecorder = function() {
    this.reset();
};

TerminalRecorder.prototype.reset = function() {
    this.recording = false;
    this.frameCount = 0;
    this.session = [];
};


TerminalRecorder.prototype.record = function() {
    this.reset();
    this.recording = true;
    let that = this;
    keyDown = function() {
        if (keysActive) {
            if (vtActive) {
                vt.update(event);
                that.log(event);
                // ljs(event.keyCode);
            }
        }
    }
    document.onkeydown = keyDown;
};


TerminalRecorder.prototype.log = function() {
  this.session.push([this.frameCount])
};

TerminalRecorder.prototype.stop = function() {
    this.recording = false;
    keyDown = function() {
        if (keysActive) {
            if (vtActive) {
                vt.update(event);
                // ljs(event.keyCode);
            }
        }
    }
    document.onkeydown = keyDown;
};




let vt2 = new VirtualTerminal();
vt2.text = "Douze lunes                       Twelve Moons"
vt2.makeTerminalString();

let vt3 = new VirtualTerminal();
vt3.text = "en déphasage graduel                        in gradual phase shifting";
vt3.makeTerminalString();



let vt4 = new VirtualTerminal();
vt4.text = "my therapist peeling off layers of dead bark";
vt4.makeTerminalString();


vt.text = "";
vt.makeTerminalString();

if (false) {


ansi = `
☺☻♥♦♣♠•◘○◙♂♀♪♫☼►◄↕‼¶§▬↨↑↓→←∟↔▲▼!"#$%&
'()*+,-./0123456789:;<=>?@ABCDEFGHIJKLMNOPQRS
TUVWXYZ[\]^_abcdefghijklmnopqrstuvwxyz{|}
~⌂ÇüéâäàåçêëèïîìÄÅÉæÆôöòûùÿÖÜ¢£¥₧ƒáíóúñÑªº¿⌐¬½¼¡«»░▒▓│┤╡╢╖╕╣║╗╝╜╛┐
└┴┬├─┼╞╟╚╔╩╦╠═╬╧╨╤╥╙╘╒╓╫╪┘┌█▄▌▐▀αßΓπΣσµτΦΘΩδ∞φε∩≡±≥≤⌠⌡÷≈°∙·√ⁿ²■ `;

palette = [[0.001, 0.25, 0.4], [0.001, 0.25, 0.4], [0.001, 0.25, 0.4]]
drawing = [
    "12345.....12345.....12345.....12345.....12345.....12345.....12345.....12345.....12345.",
    "12345.....12345.....12345.....12345.....12345.....12345.....12345.....12345.....12345.",
    "12345.....12345.....12345.....12345.....12345.....12345.....12345.....12345.....12345."
];

files["js"][0].data.replace(/(ansi = `)([^`]*)(`)/g, function(a, b, c, d, e) {
//   console.log(c); return c;
// logJavaScriptConsole(a);
//     return
    let response = b + "newText" + d;
    console.log(c);
});


}

    mouse= {x: 0, y: 0};

onmousemove = function(e){mouse.x = e.clientX; mouse.y = e.clientY};


face = [
    "aaaaaabbbbbbb..........................................................................",
    "aaaaaabbbbbbb..........................................................................",
    "aaaaaabbbbbbb..........................................................................",
    ".......................................................................................",
    ".......................................................................................",
    ".......................................................................................",
    ".......................................................................................",
    ".......................................................................................",
    ".......................................................................................",
    ".......................................................................................",
    ".......................................................................................",
    ".......................................................................................",
    ".......................................................................................",
    ".......................................................................................",
    ".......................................................................................",
    ".......................................................................................",
    ".......................................................................................",
    "......................................................................................."
];

pchar = "a";

mouseClicked = function(e) {
    // logJavaScriptConsole("click!"); 
    // console.log(e);
    // face[fmouse[1]][fmouse[0]] = "a";
    let t = griEditor.activeTab;
    if (!e.shiftKey){
        if (grimoire && fmouse[1] < 20) {
            let y = t.data[fmouse[1] + t.scroll.y];
            let add = pchar;
            if (y.length < fmouse[0]) {
                let n = fmouse[0] - y.length;
                for (let i = 0; i < n; i++) {add = " " + add};
            }
            t.data[fmouse[1] + t.scroll.y] = y.substring(0, fmouse[0]) + add + y.substr(fmouse[0] + pchar.length);
        }
    } else {
        // console.log(face[fmouse[1]][fmouse[0]]);
        console.log(swatchesArr[fmouse[0]]);
        let newChar;
        if (fmouse[1] == 20) {
            newChar = swatchesArr[fmouse[0]];
        } else if (fmouse[1] == 21) {
            if (fmouse[0] < vt.text.length + 2) {
                newChar = vt.text[fmouse[0] - 2];
            } else {
                newChar = " ";
            }
        } else {
            if (fmouse[0] > t.data[fmouse[1] + t.scroll.y].length) {
                newChar = " ";
            } else {
                newChar = t.data[fmouse[1] + t.scroll.y][fmouse[0]];
            }
        }
        pchar = newChar;
    }
};
mouseDragged = function() {
    // logJavaScriptConsole("click!");  
    // face[fmouse[1]][fmouse[0]] = "a";
    if (grimoire && fmouse[1] < 20) {
        let t = griEditor.activeTab;
        let y = t.data[fmouse[1] + t.scroll.y];
        let add = pchar;
        if (y.length < fmouse[0]) {
            let n = fmouse[0] - y.length;
            for (let i = 0; i < n; i++) {add = " " + add};
        }
        t.data[fmouse[1] + t.scroll.y] = y.substring(0, fmouse[0]) + add + y.substr(fmouse[0] + pchar.length);
    }
};




visage = [
    "aaaaaabababab...a....a...a..a.a.aaa..a...aa...aa.a.aaaaaaaaaa.a....a..a▓.a.aa.aa.aaa...",
    "aaaaaabbbbbbb..............░.░░.░░░░░░░░░.a..aa............░░░░░░░a░░.a.▓▓a.a..a.a.a...",
    "aaaaaabbbbbbb......▒...░░░░░░░░░░░░░░░░░░░░░░░.a..].].]]]░░░░░░░░░░░░.░.░▓▒▓..... .....",
    "a...................a..░░░░░░░░a░░▓ ..░░░░░░░░a░aaa.░░░░░░░░.░.a░░a░.▓░░░░▓▓   .    ...",
    "a........▓.......░░░░░░░░░░                ░░░░░░░░░░.░░░..      .  . . ▓▓▓▓      ▒ ▒..",
    "....a....▓....a░.░░░░░░░░ a       ░░░░░     ░  ]]░░░░░░         ▓▓▓▓     ░░▓      ▒ ▒..",
    "..............▓..░░░░░░▓  a   ▓░░░░░░░░░░░      ]]░aa.      ▓▓▓▓▓   ▓▓   ░░▓       ▒▓▒.",
    "..........▓.░.░.░░░░░░.....   ▓▓▓░  ░  ░▓▓ .     ]]░░aa     ░░░▓    ▓/   ░░▓       ▒▒▒.",
    "...........░░░░░░░░░░░....a     ▓▓▓▓▓▓▓▓▓         ]▓aa.a .    ░░▓▓▓▓▓   ░░░▓      ▒▓▒▓.",
    "....].a..▓..░.░░.░░░░░░░░a.           ..     ░░    /░▓a.aa.  . . .     ░░▓▓/     .▒▒▒▓.",
    ".....▓▓▓▓▓...░░░░░░░░░░░░░...  . .         ░░░░     /▓▓.░░░░░░░░.░░░░░░░▓▓/     ...▓▓..",
    "aa▓..a.▓.▓.....░░░░░░░░░░░..a.   ...   ░░░░░░░aa        ▓▓a░░░░░░░░░░░░░▓▓     a...▒...",
    "a..░aa░▓.▓..▓..░░░░░░.░..░░.a▓▓. . ░░░░░░░░▓  ▓▓▓▓▓▓▓ ▓▓▓▓▓▓.░░░░░]░░░a▓/     .........",
    "...].▓aa.▓...].]░░░░░░░░░....]a].]....                    .........]..▓▓/    ..........",
    ".....▓.░.▓....]].░░.░░░░░░░.░▓....▓▓▓.▓▓...  ......................].]▓/    ......▒....",
    "......a..▓.........░░.░░░░░░.░░░░░░▓░...V  V  V   V   V   V ..V.a.▓a▓/    .............",
    "]......▓.▓...........░░░░░░░░░░.░.░..░░..░   ....................▓▓▓/  ................",
    ".....................▓▓░░░░▓░░.▓░░.▓░░░░.░.░.░.░...▓▓▓▓▓▓▓▓▓▓▓▓▓▓/....................."
];



arbre0 = [
    "                    ▓▓▓▓    .▓▓..   ..▓▓0.     .▓▓0/  .▓▓.   .▓▓▓.0..       .▓▓▓▓.     ",
    "                   ▓▓▓0.  ..▓▓00     .▓▓▓.    ▓▓00    ▓▓.   ..▓▓000..     ..▓▓000...▓▓▓",
    "                  .▓▓▓0.  .▓▓0       ..▓▓▓0.▓▓▓00    .▓0.  ..▓▓00...▓▓▓▓▓▓▓▓0▓▓▓▓▓▓▓▓▓0",
    "... .              .▓▓0....▓00        ..▓▓▓00       .▓00. .▓▓00/.▓▓▓00000.0000.0.0000. ",
    ".                   ..▓▓▓00.00         .▓▓▓00   . .▓▓0    ▓▓00/..▓000    .▓▓0/ .       ",
    ".... . .              ..▓▓▓▓000.        .▓000/ ▓▓▓▓.00...▓00/ . ▓▓0/    ▓▓▓00/         ",
    "..     .                   ▓▓▓00        _▓0000 00000    ▓000/   ▓▓ .▓▓▓▓▓000//       . ",
    "..                            ▓000   .    ▓0000       ▓▓00/    ▓▓0 ▓▓0.0.0/           .",
    ".......                        ▓▓0000     ▓▓0/      _▓▓0000 0 000000 .0            . ..",
    "........__._                  . ▓▓▓0000  ▓▓▓0/. .. .▓.00/    . ▓▓0/.                ___",
    "         .._____     _      .     ▓▓▓▓00▓▓▓00//  ▓▓▓000/     ▓▓▓00            . .......",
    "......We drown in the endless night ▓▓▓▓▓▓▓▓000▓▓▓▓000/ ▓▓▓▓▓▓▓00            .____.....",
    "..........__..__._._               . ..▓▓▓▓▓▓▓000▓▓000.0.0.00.    ._    . _.______.....",
    "............__We drown in the endless night▓▓▓▓00000/        . ._ _    _ _____.........",
    "......       _._.___       __/        /.▓▓▓▓▓▓▓▓000   _   _ _ .      ._................",
    ".We drown in the endless night_____ _..▓▓▓▓▓▓▓▓000  .    ____._.._ _...................",
    "...................             ......▓▓▓▓▓▓▓▓▓00.         .  ............__.____.____.",
    ".......        ......................▓▓▓▓▓▓▓▓0000.  . .   .  .........................."
];




arbre1 = [
    "         !          ▓▓▓░0O  .▓▓░░0O   ▓▓░00O   ▓▓░░O   ▓▓░0O   ▓▓░░OO........▓▓▓▓░OO   ",
    "        !          ▓▓▓░░O  .▓▓░0O...  ▓▓▓░00  ▓▓░0O   ▓▓░00   ▓▓▓░0O      ▓▓▓▓░00O  ▓▓▓",
    "  !      !!        ▓▓▓░░O .▓▓░aa       ▓▓▓▓▓▓▓▓░OO   ▓▓░00   ▓▓░░00 ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓0",
    ".!!    .!!!.   !    ▓▓▓░░▓▓▓░00  .......▓▓▓▓░00O    ▓▓░00  ▓▓▓░0O  ▓▓░░0O ▓▓▓░░000000  ",
    ".;!    ...!    .!     ▓▓▓▓░░░000     ....▓░░00     ▓▓000  ▓▓░000  ▓▓░OO  ▓▓▓0000O      ",
    ".!   ....!!   ...!       ▓▓▓▓▓░00        ▓▓▓░00  ▓▓░00   ▓▓▓░0   ▓▓░0O  ▓▓░000       ! ",
    "!   ...;!   ....!          ▓▓▓▓░00   .....▓▓▓▓▓▓▓░0O    ▓▓▓░0   ▓▓▓▓▓▓▓▓░000         .!","    .;;!   ....;       !     ▓▓▓▓░0O       ▓▓▓░░OO    ▓▓░000...▓▓▓▓░░░0000O  .!       !",
    "   ...;;! ....;         !!     ▓▓▓░░00O   ▓▓▓░00     ▓▓░000    ▓▓░░0000O     .!!     .!",
    "   .....;!.....;;!     .;!      ▓▓▓▓░░░0O▓▓▓▓░000O  ▓▓░000   ▓▓▓░000O        ..!!    ..",".  .......!.....;;!! ..;!         ▓▓▓▓░░░▓▓▓░░░00▓▓▓▓▓▓░0O ▓▓▓░░000O         ..;!   ...",
    "..  ..We drown in the endless night ▓▓▓▓▓▓▓▓░░░▓▓▓▓▓▓▓▓▓▓▓▓▓░░000O   !      ..;;!  ....",
    "..   ...................!              ▓▓▓▓▓▓▓▓▓▓▓░░0000000000O   .;!   .  ...;!   ....",
    "...  .........We drown in the endless night▓▓▓▓▓▓░░0000          ;;!!  .   ..;;!   ....",
    "............................_           ▓▓▓▓▓▓▓░░000  .   !     ;;!  .......;;;!!!.....",
    ".We drown in the endless night.........▓▓▓▓▓▓░░░000 ...  !!_ .  ;;!!!...........!!!....",
    "......................................▓▓▓▓▓▓░░░0000 ......!!.......!!!.................",
    ".......        ......................▓▓▓▓▓▓▓▓0000.  . .   .  .......!.................."
];



grimo = ["   ▓▓░   ▓▓▓▓░░░                         ▓▓▓▓    ░░░        ▓░░        ▓▓▓░░░░  ░░         ","▓  ▓▓░░░░░░░░                               ▓░▓▓▓░▓░░░      ▓▓▓░        ▓▓░░░░░░           ","▓   ▓░                                            ▓▓▓▓░░ ░    ▓▓░░░     ░▓░░░       ▓     ","▓░  ▓░      ▓▓▓                                       ▓▓░░░░░░░░░░░▓▓▓   ▓▓░░      ▓▓░ ","▓▓▓▓▓░     ▓   ▓         ▓▓                       ▓▓                 ▓▓▓▓▓▓░░   ▓▓▓░░  ","  ▓▓▓░    ▓                                                    ▓▓        ▓▓░▓▓▓▓▓░░░   ","  ▓▓▓░    ▓  ▓▓▓▓ ▓ ▓▓▓ ▓▓▓   ▓▓ ▓▓▓ ▓▓▓    ▓▓▓  ▓▓▓   ▓ ▓▓▓ ▓▓ ▓▓▓      ▓▓▓░░░░        ","  ▓▓▓░     ▓   ▓   ▓      ▓     ▓   ▓  ▓   ▓▓ ▓▓   ▓    ▓    ▓▓▓         ▓▓░░           ","  ▓▓▓░      ▓▓▓   ▓▓▓▓  ▓▓▓▓▓ ▓▓▓▓ ▓▓▓ ▓▓▓  ▓▓▓  ▓▓▓▓▓ ▓▓▓▓    ▓▓▓       ▓▓░░             ","  ▓▓▓a                                                                   ▓▓░░              ","░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░         ",
         "░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░         ","                                                                                           ","       moonInc = moonInc.map((e,i) => inc * 2 - (i * 1e-3));                               ","       moonInc = moonInc.map((e,i) => inc * 2 - (i * 1e-3));                                             ","      a       moonInc = moonInc.map((e,i) => inc * 2 - (i * 1e-3));                                      ","      a                                              a                                    ","▓   ▓ ▓   moonInc = moonInc.map((e,i) => inc * 2 - (i * 1e-3));           ▓               ","   ▓ ▓▓                                                                    ▓              ","                    .................▓▓▓▓▓▓▓▓0000.  . .   .  .......!.........▓........"];




skull = ["          !!00!!      !!0!                                   !00!!        !!!!          ","         !!00!!        !00! ░░▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓░░░░       !000!!        00!!           ","       !!00!!         !!!0!░▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓░░░░     !00!!         !0!!           ","      !!00!!         !000!░▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓░░░░░ !!00!!         !0!!             ","     !!000!!        !!0!░▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓░░░░░░00!!          !00!!          ","    !!000!!        !!0!▓▓▓▓▓▓▓▓░░░░░░░▓▓▓▓▓▓░░░░░░░░░░░░░░00!!           !!00            ","    !!000!!       !!!0!▓▓▓▓▓▓░░        ░▓▓▓░░░      ░░░░░░░0!!            !!00           ","    !!!00!!       !!!0!▓▓▓▓▓░░░       ░▓▓▓▓▓░░       ░░░░░░0!!             !!00!        ","     !!!00!!!     !!!0!░▓▓▓▓▓▓░░░░░░░▓▓▓▓▓▓▓▓░░░░░░░░░░░░░00!!              !!0!0!     ","      !!!00!!!     !!000!░▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓░░░░░ !!00!!!              !!00!!    ","       !!!000!!!    !!!!00!!░░▓▓▓▓▓▓▓▓▓░ ░ ▓▓▓▓░░░░░    !!!00!!!!            !!00!!!   ","        !!!!000!!!    !!!00!!!   ░░▓▓▓▓▓▓▓░▓▓░░░░        !!!000!!!!          !!!0!!!   ","         !!!!000!!!     !!0!0!!   ░▓▓▓▓▓▓▓▓▓▓▓░░          !!!0000!!!         !!000!!   ","         !!!!000!!!!    !!000!!    ▓░ ▓░  ▓░ ▓░            !!!!000!!!!      !!!00!!!   ","        !!!!0000!!!!    !0000!!!   ▓░ ▓░  ▓░ ▓░             !!!!000!!!!    !!0000!!    ","       !!!!!0000!!!    !!0000!!!                             !!!00000!!!  !!0000!!     ","                      !!!!00!!!                              !!!0!000!!! !!!000!!           ",".......        ......................▓▓▓▓▓▓▓▓0000.  . .                    !               "];


grimo = [`  \\▓▓░/ /▓▓▓▓░░░/                       \\▓▓▓▓\\   \\░░\\      \\▓░░\\      \\▓▓▓░░░░ \\░░/        `,`▓  ▓▓▓▓▓▓▓▓▓░/                             \\▓▓▓▓▓▓▓░░░\\     ▓▓▓░\\      \\▓▓░░░░░░/          `,`▓\\ \\▓░/                                         \\\\▓▓▓▓▓▓\\    \\▓▓░░░\\    ░▓░░░/     \\▓/    `,`▓░\\ ▓░      ▓▓▓                                      \\▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  \\▓▓░░     /▓▓░/`,`▓▓▓▓▓░     ▓   ▓         ▓▓                       ▓▓                \\▓▓▓▓▓▓░░  /▓▓▓░░/ `,` \\▓▓▓░    ▓                                                    ▓▓       \\▓▓░▓▓▓▓▓░░/   `,`  ▓▓▓░    ▓  ▓▓▓▓ ▓ ▓▓▓ ▓▓▓   ▓▓ ▓▓▓ ▓▓▓    ▓▓▓  ▓▓▓   ▓ ▓▓▓ ▓▓ ▓▓▓      ▓▓▓░░░░/       `,`  ▓▓▓░     ▓   ▓   ▓      ▓     ▓   ▓  ▓   ▓▓ ▓▓   ▓    ▓    ▓▓▓         ▓▓░░           `,`  ▓▓▓░      ▓▓▓   ▓▓▓▓  ▓▓▓▓▓ ▓▓▓▓ ▓▓▓ ▓▓▓  ▓▓▓  ▓▓▓▓▓ ▓▓▓▓    ▓▓▓       ▓▓░░             `,`  ▓▓▓░                                                                   ▓▓░░              `,`░░░░░░░░▓▓░▓▓░▓░▓▓▓░░░░░▓▓▓░▓░░░░▓░▓▓░░░░▓▓░▓▓▓░░░▓░░░▓░░░▓░░░░░▓░░░░░▓░░░▓░░▓░▓▓▓░░░░░      `,`░░░░░░░░░░░░▓░▓▓▓░░░░░░░░░░▓▓░▓▓▓░░░░▓░░░░░░░░▓░░░░░▓░░░▓░░▓▓▓▓░░░▓░░░░░▓░░░▓░░▓░▓▓▓░░░      `,`      /                                                               ░ !     _     ! ░    `,`       /oonInc = moonInc.map((e,i) => inc * 2 - (i * 1e-3));          ░__!!___*___!!__░    `,`     / moonInc = moonInc.map((e,i) => inc * 2 - (i * 1e-3));          ░   !!! * !!!   ░                  `,`     /a       moonInc = _oonInc.map((e,i) => inc * 2 - (i * 1e-3));   ░*______*______*░                  `,`     /a               ░░░                            a                ░     !!!!!     ░   `,`▓   ▓ ▓   moonInc = moonInc.map((e,i) => inc * 2 - (i * 1e-3));       ░  !!!  *  !!!  ░   `,` ░// \\/ /░  ▓░      ░ a     _                                         ░_!__!  _  !__!_░   `,`                    .................▓▓▓▓▓▓▓▓0000.  . .   .  .......!.........▓........`];


lac = ["▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓░░░░▓▓▓▓▓▓▓▓    ","▓▓▓▓▓▓░▓▓▓▓▓▓▓▓░▓▓▓▓▓▓░▓░▓▓▓▓▓▓▓░▓▓▓░░░░░░░░░░░░░░▓▓▓▓▓▓▓▓░░░░░░░░░░▓▓░░░░░░░ ░░░░░▓░░░    ","▓▓░▓░▓▓▓▓░░▓░▓▓▓░▓░░░▓▓▓▓▓▓▓▓▓▓░▓▓░░░IIIIIIII░░░░░░░▓▓▓░░░░        ░░░░            ░░     ","▓▓▓▓▓░▓▓▓▓▓░▓░▓░░░░░▓▓▓▓▓▓▓▓░░▓▓░░░I         IIIII░░IIII                               ","▓▓▓▓▓▓▓░▓▓░▓░▓▓░░▓░▓▓▓▓▓░▓▓░▓▓▓░░I               III          ((     (      {{  _~ ~~~~","▓▓░▓▓▓░░▓░░▓▓░▓▓░░░▓▓▓▓▓▓▓▓▓▓░░II        (((               (~~~~{{{      __________~~~~","▓▓▓▓▓░░░░░░░▓▓▓░▓▓▓░▓░░▓░▓▓░IIII        (  {{(~~~~    (~~~~~~     ~~ ___(    __     ~   ","▓▓▓▓▓░▓░░░▓▓▓░░▓░▓░▓▓░▓▓▓▓░░III       ~(~~~(~~~   ~~~~~~~~~~~ _____~                 ~~ ","▓▓▓▓░░▓░░▓░▓▓░░▓▓░▓▓▓▓▓▓▓░░III       (~  ~~~ ~(_~~~~~~~~~~~                    ~~~~~~~    ","░▓▓▓▓▓▓░░▓░▓░▓▓▓░░▓▓░▓▓▓░░III      (~~  ~~~~   ~~~~~~                   ~ ~~~~~~~~         ","▓▓▓▓▓▓▓░░░░▓▓░░▓▓▓▓░▓▓░░░III      ~~~~~~~   (  ~                                    ~~~      ","▓▓░▓▓░░▓░░▓▓▓▓░▓░▓▓▓░▓░░░░I      (~~~~~                                                      ","▓░▓▓▓░░▓░░▓░▓░▓▓░▓▓░▓▓░░░░I      (~~~~~    (      (                             ______     ","▓▓░░▓▓▓▓░░░░▓▓░▓▓▓▓░▓░▓▓▓░░░      {{{(~~~                                   _________      ","▓▓░░▓▓▓▓▓░░░▓░▓▓▓░░▓░░▓▓▓▓░░II         ((~~       (    ~~   (  ____~~~~~_______                          ","▓▓▓░░▓▓░░▓░░▓▓░░▓░░░▓░░▓░▓▓░░░IIIIII      {((((   ~~ (  ~~~~                                             ","▓▓▓▓░░▓▓▓▓░▓░░▓▓░▓▓░░▓▓▓▓▓░▓▓▓▓░░░░░III       ((( ~~~{(~ ~~~~~~~~~~(  ____                ","▓▓▓▓▓▓▓░░░░░░▓▓▓▓▓▓▓▓▓▓▓▓▓░░░░░░░░▓▓░░II           (~~ ~~~~~~~~   ~      (      (         ","▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓░░░░░▓▓▓░░░░░░░░░░░░▓░░░I          ░  (( ~  ~~ ~ ~~~~~~ ░                ","                    .................▓▓▓▓▓▓▓▓0000.  . .   .  .......!.........▓........"];