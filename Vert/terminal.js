drawTerminal = function(selectedProgram) {
    vertices = [];
    let num = 150;
    for (let i = 0; i < num; i++) {
        let x = Math.cos(i) * i * 1e-2;
        let y = Math.sin(i) * i * 1e-2;
        // vertices.push(x * (9 / 16), y, 40.0, 1);
    }
    num = 0;
    let sc = 0.3;
    let sx0 = vt.selectionBounds[0];
    let sx1 = vt.selectionBounds[1];
    let colors = [];
            for (let x = 0; x < face[0].length; x++) {
         for (let y = 0; y < face.length; y++) {
            let p = face[y][x];
             // p = "x";
             let sc = 2.54;
             // m += Math.cos(x * y * 0.01);
             let tx = -1.12, ty = 1;
             let osc = Math.sin(drawCount * 1e-1 + 2e-1 * x) * 0.1 - 0.2;
             if (p !== ".") {
                 let xx = x * 0.0025 * sc * (9 / 16) * 4 * 1.6 + tx + (Math.sin(drawCount * 0.125 + y * 0.25) * 0.0125 * 0);
                 let yy = -y * 2.2 * sc * 0.0126 + Math.sin(drawCount * 0.25 + y * 0.25) * 0.0025 + ty - 0.02;
                 vertices.push(xx, yy, 20.0 * sc * 0.9, 1);
             num++;
             }
             if (p == "1") {
                 colors.push(0, 0, 0);                 
             } else if (p == "0") {
                colors.push(0.75 + osc, 0.75 + osc, 0.75 + osc);
             } else if (p == "2") {
                colors.push(0.6 + osc, 0.6 + osc, 0.6 + osc);
             }else if (p == "3") {
               colors.push(0.15 + osc, 0.15 + osc, 0.15 + osc);
             }else if (p == "4") {
                colors.push(0.7 + osc, 0.7 + osc, 0.7 + osc);
             }else if (p == "5") {
                colors.push(0.5 + osc, 0.5 + osc, 0.5 + osc);
             }
             // if (m < 0.5) {
                 // vertices.push(x * 0.01 * (9 / 16) * 4 + tx, -y * 4 * 0.01 + ty, 50.0 * sc * 0.9, 1);
                             // num++;
                // colors.push(0.75, 0.75, 0.75);
             
        }
    }
    
    for (let x = 0; x <= vt.stringArray[0].length; x++) {
        let sel = ((x > sx0 * 7 && x < sx1 * 7) || vt.enter) ? "0" : "1";
        for (let y = 0; y < 9; y++) {
            let caret = (vt.caretPosition - 0) * 7 + 7;
            if (vt.stringArray[y][x] == sel || (x == caret && drawCount / 20 % 1 < 0.5)) {
            // if (Math.sin(x * y) > 0.5) {
            // vertices.push(x * (9 / 16) * 0.02 * sc - 0.87, -y * 0.03 * sc - 0.7 - (Math.sin(drawCount * 0.25 + y) * 0.5e-2), 40.0 * sc, 1);
            // vertices.push(x * (9 / 16) * 0.02 * sc - 0.9 + Math.sin(y * 1e-1 + drawCount * 1e-1) * 0.05 * sc, -y * 0.03 * sc - 0.6 - (Math.sin(drawCount * 0.25 + y) * 1.5e-2 * sc), 45.0 * sc, 1);
                // vertices.push(x * (9 / 16) * 0.02 * sc - 0.87 - 0.03, (-y * 0.03 * sc - 0.7) - 0.02 - 0.05, 55.0 * sc * 0.9, 1.0);
                // num++;
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
            if (vt.stringArray[y][x] == sel || (x == caret && drawCount / 20 % 1 < 0.5)) {
            // if (Math.sin(x * y) > 0.5) {
            // vertices.push(x * (9 / 16) * 0.02 * sc - 0.87, -y * 0.03 * sc - 0.7 - (Math.sin(drawCount * 0.25 + y) * 0.5e-2), 40.0 * sc, 1);
            // vertices.push(x * (9 / 16) * 0.02 * sc - 0.9 + Math.sin(y * 1e-1 + drawCount * 1e-1) * 0.05 * sc, -y * 0.03 * sc - 0.6 - (Math.sin(drawCount * 0.25 + y) * 1.5e-2 * sc), 40.0 * sc, 1);
                // vertices.push(x * (9 / 16) * 0.02 * sc - 0.87 - 0.03, -y * 0.03 * sc - 0.7 - 0.05, 50.0 * sc * 0.9, 1);
            // num++;
                // colors.push(0.75, 0.75, 0.75);
            }
        }
    }
//     for (let x = 0; x <= vt2.stringArray[0].length; x++) {
//         for (let y = 0; y < 10; y++) {
//             let sc = 0.03;
//             let tr = {x: -0.54, y: 0.45};
//             let osc = 0 - (Math.sin(y * 0.5 + drawCount * 2e-1) * 0.005);
//             if (vt2.stringArray[y][x] == 1) {
//                 vertices.push(x * (9 / 16) * sc + tr.x, -y * sc * 1.7 + osc + tr.y, 1250.0 * sc * 0.9, 1);
//                 num++;
//                 colors.push(0, 0, 0);
//             }
//         }
//     }
//     for (let x = 0; x <= vt2.stringArray[0].length; x++) {
//         for (let y = 0; y < 10; y++) {
//             let sc = 0.03;
//             let tr = {x: -0.54, y: 0.5};
//             let osc = 0 - (Math.sin(y * 0.5 + drawCount * 2e-1) * 0.005);
//             if (vt2.stringArray[y][x] == 1) {
//                 vertices.push(x * (9 / 16) * sc + tr.x, -y * sc * 1.7 + osc + tr.y, 1250.0 * sc * 0.9, 1);
//                 num++;
//                 colors.push(0.75, 0.75, 0.75);
//             }
//         }
//     }
    
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
    uniform float time;
    attribute vec4 coordinates;
    attribute vec3 colors;
    varying vec2 myposition;
    varying vec2 center;
    varying float alph;
    varying float size;
    varying vec3 cols;
    varying float ttime;
    const mat2 mr = mat2 (
        0.84147,  0.54030,
        0.54030, -0.84147
    );
    float hash(in float n) {
      return fract(sin(n)*43758.5453);
    }
    float noise(in vec2 x) {
        vec2 p = floor(x);
        vec2 f = fract(x);
        f = f*f*(3.0-2.0*f);  
        float n = p.x + p.y*57.0;
        float res = mix(mix( hash(n+  0.0), hash(n+  1.0),f.x),
              mix( hash(n+ 57.0), hash(n+ 58.0),f.x),f.y);
        return res;
    }
    float fbm( in vec2 p ) {
        float f;
        f  = 0.5000*noise( p ); p = mr*p*2.02;
        f += 0.2500*noise( p ); p = mr*p*2.33;
        f += 0.1250*noise( p ); p = mr*p*2.01;
        f += 0.0625*noise( p ); p = mr*p*5.21;
        return f/(0.9375)*smoothstep( 260., 768., p.y ); // flat at beginning
    }
    void main(void) {
        ttime = time;
        gl_Position = vec4(coordinates.x, coordinates.y, 0.0, 1.0);
        vec2 pos = gl_Position.xy;
        // gl_Position.xy += abs(fbm((vec2(-1.0, -1.0) + pos) * 500. * sin(time * 2e-5)) * 0.01);
        // gl_Position.xy += 0.1;
        gl_Position.xy *= 0.95;
        center = vec2(gl_Position.x, gl_Position.y);
        center = 512.0 + center * 512.0;
        // myposition = vec2(gl_Position.x, gl_Position.y);
        alph = coordinates.w;
        gl_PointSize = coordinates.z;
        size = gl_PointSize;
        cols = colors;
        // gl_PointSize = 25.0 + cos((coordinates.x + coordinates.y) * 4000000.) * 5.;
        // gl_PointSize = coordinates.z / (alph * (sin(myposition.x * myposition.y * 1.) * 3. + 0.5));
    }
    // endGLSL
`;
roundedSquare.fragText = `
    // beginGLSL
    precision mediump float;
    // uniform float time;
    varying vec2 myposition;
    varying vec2 center;
    varying float alph;
    varying float size;
    varying vec3 cols;
    varying float ttime;
    float rand(vec2 co){
        return fract(sin(dot(co.xy ,vec2(12.9898,78.233))) * 43758.5453 * (2.0 + sin(co.x)));
    }
    float roundedRectangleFlicker (vec2 uv, vec2 pos, vec2 size, float radius, float thickness) {
        // vec2 uv = gl_PointCoord.xy;
        float t = ttime * 0.0125;
        t = 100. + (t * 1e-4);
        float w = 0.15 + (sin(t * 1e-2 * tan(t * 2e-2)) + 1.0) * 0.25;
        float d = length(max(abs(uv - pos), size * 0.5) - size * 0.5) * w - radius * 0.01;
        return smoothstep(1.99 + ((sin(t * 10. * tan(t * 1e1)) + 1.0) * 0.5), 0.11, d * 10. / thickness * 4.0 * 0.125 * 1.5);
    }
    float roundedRectangle (vec2 uv, vec2 pos, vec2 size, float radius, float thickness) {
        float d = length(max(abs(uv - pos), size) - size) - radius;
        return smoothstep(0.66, 0.33, d / thickness * 5.0);
    }
    void main(void) {
         float resolution = 1.0;
         vec2 screenSize = vec2(2560.0, 1440.0) * resolution;
         vec2 uv = gl_PointCoord.xy;
        uv = uv * 2. - 1.;
        float color = roundedRectangleFlicker(uv, vec2(0.0, 0.0), vec2(0.125, 0.24) * 4.5, 0.001, 0.05);
        float rando = rand(uv * ttime) * 0.05;
       float vig = (roundedRectangle(gl_FragCoord.xy, vec2(1280./ 2.0, 720./ 2.), vec2(0.9, 0.392) * 850., 0.05, 120.5) + 0.0);
        gl_FragColor = vec4((cols - rando) * vig, color);
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
vt.text = "Let the vision transform you, let the clouds of Phobos gather in your mind.";
vt.makeTerminalString();
vt.caretPosition = vt.text.length;


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




getGlyphFT88 = function(g) {
    let ch;
    switch (g) {
        case "L":
        ch = [
            "0001101",
            "0010110",
            "0110100",
            "0110100",
            "1110100",
            "0110100",
            "0110100",
            "0111101",
            "1001110",
            "0000000",
        ];
        break;
        case "u":
        ch = [
            "0000000",
            "0000000",
            "0010010",
            "0110110",
            "1110110",
            "0110110",
            "0110110",
            "0110111",
            "0011010",
            "0000000",
        ];
        break;
        case "n":
        ch = [
            "0000000",
            "0000000",
            "0101100",
            "1110110",
            "0110110",
            "0110110",
            "0110110",
            "0110111",
            "0010010",
            "0000000",
        ];
        break;
        case "e":
        ch = [
            "0000000",
            "0000000",
            "0001100",
            "0010110",
            "0110110",
            "0111000",
            "0110000",
            "0110010",
            "0011100",
            "0000000",
        ];
        break;
        case "V":
        ch = [
            "0100100",
            "1110110",
            "0110110",
            "0110110",
            "0110110",
            "1110110",
            "0110110",
            "0110100",
            "0011000",
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
            "0000000",
        ];
        break;
        case "i":
        ch = [
            "0000100",
            "0001000",
            "0000100",
            "0001100",
            "0011100",
            "0101100",
            "0001101",
            "0001110",
            "0000100",
            "0000000",
        ];
        break;
        case "d":
        ch = [
            "0000000",
            "0111000",
            "0011100",
            "0001110",
            "0010110",
            "0110110",
            "0110110",
            "0110100",
            "0011000",
            "0000000",
        ];
        break;
    };
    return ch;
};

let vt2 = new VirtualTerminal();
// vt.stringArray = [];
// let vtActive = true;
vt2.text = "Lune Vide";
vt2.caretPosition = vt.text.length;


vt2.makeTerminalString = function() {
    let s = this.text;
    let a = new Array(10);
    for (let y = 0; y < 10; y++) {
        a[y] = "";
        for (let i = 0; i < s.length; i++) {
             a[y] = a[y] + getGlyphFT88(s[i])[y];
        }
    }
    this.stringArray = a;
};
vt2.makeTerminalString();




            face = [
            "..........5555.....55...55..55555.55.55....55............2555....55.55..55.55...55.....5555....",
            ".....5...55.55.....55...55...5555.55.55...55.............25.55...5555...55.55...55.....5555....",
            ".....55.55..55....5555...55...5555.555...55..............25.55...555....55.55...55....55.55....",
            "......555...55...55.55...555.55.55.55...55...............25.55..555.....55.55...55...55..55....",
            ".......05...55..05...55..05555..55.55..55................25..555505.....05.55...05..55...55.55.",
            "........05..05..05....05.05.55..55.05..05.......333333...25...25.05.....05.55...05.05....5555..",
            ".....05..05.05.05.....05.05.55..05.05.05.......33333333..25..255.05.05..05.05...05.05....0505..",
            "......00000505.05......0505..05.05.05.05......3304022233.25.25.0505..05.05.05...0505.....005...",
            "..........0505.05.......005...0505.05.05......3300022233.25.25..005..05.05.05...0505.....005...",
            "...........005005........05...0505.05.05......3330222333.2525....05..05.05.05...0505.....05....",
            "............0005.........05....005.0505.......3333223333.2525....05...0505.05...0505.....05....",
            "............005..........05.....05.005............11.....2525....05....005.05...005......05....",
            "............05...........05.....05.05..........31111113..2225....05....005.05...005......05....",
            "............05...........05.....05.05..........11111111..225.....05.....05.05...05.......05....",
            "............05...........05.....05.05.........1111111111.25......05.....05.05...05.......05....",
            "............05...........05.....05.05........11111111111125......05.....05.05...05.......05....",
            "............05...........05.....05.05.......1111111111111000.....05.....05.05...05.......05....",
            "............05...........05.....05.05.......111111111111125......05.....05.05...05.......05....",
            "............05...........05.....05.05.......111111111111005......05.....05.05...05.......05....",
            "............05...........05.....05.05.......111111000000025......05.....05.05...05.......05....",
            "............05...........05.....05.05.......111111111111125......05.....05.05...05.......05....",
            "............05...........05.....05.05.......111111111111125......05.....05.05...05.......05....",
            "............05...........05.....05.05.......111111111111125......05.....05.05...05.......05....",
            "............05...........05.....05.05.......111111111111125......05.....05.05...05.......05....",
            "............05...........05.....05.05.......111111111111125......05.....05.05...05.......05....",
            "............05...........05.....05.05.......111111111111125......05.....05.05...05.......05....",
            "............05...........05.....05.05.......111111111111125......05.....05.05...05.......05....",
            "............05...........05.....05.05.......111111111111125......05.....05.05...05.......05....",
            "............05...........05.....05.05.......111111111111125......05.....05.05...05.......05....",
            ];