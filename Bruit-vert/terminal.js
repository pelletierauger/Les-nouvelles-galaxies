drawTerminal = function(selectedProgram) {
    vertices = [];
    let num = 150;
    for (let i = 0; i < num; i++) {
        let x = Math.cos(i) * i * 1e-2;
        let y = Math.sin(i) * i * 1e-2;
        // vertices.push(x * (9 / 16), y, 40.0, 1);
    }
    num = 0;
    let sx0 = vt.selectionBounds[0];
    let sx1 = vt.selectionBounds[1];
    let colors = [];
    for (let x = 0; x <= vt.stringArray[0].length; x++) {
        let sel = (x > sx0 * 7 && x < sx1 * 7) ? "0" : "1";
        for (let y = 0; y < 9; y++) {
            let caret = (vt.caretPosition - 0) * 7 + 7;
            if (vt.stringArray[y][x] == sel || x == caret) {
            // if (Math.sin(x * y) > 0.5) {
            // vertices.push(x * (9 / 16) * 0.02 - 0.9, -y * 0.03 - 0.6, 45.0, 1);
               vertices.push(x * (9 / 16) * 0.02 - 0.9, -y * 0.03 - 0.6 - (Math.sin(drawCount * 0.25 + y) * 1.5e-2), 40.0, 1);
               num++;
            }
        }
    }
    for (let i = 0; i < num; i++) {
        let r = Math.random();
        let g = Math.random();
        let b = Math.random();
        colors.push(0, 0, 0);
    }
        for (let x = 0; x <= vt.stringArray[0].length; x++) {
        let sel = (x > sx0 * 7 && x < sx1 * 7) ? "0" : "1";
        for (let y = 0; y < 9; y++) {
            let caret = (vt.caretPosition - 0) * 7 + 7;
            if (vt.stringArray[y][x] == sel || x == caret) {
            // if (Math.sin(x * y) > 0.5) {
                        vertices.push(x * (9 / 16) * 0.02 - 0.9, -y * 0.03 - 0.6 - (Math.sin(drawCount * 0.25 + y) * 1.5e-2), 40.0, 1);
                // vertices.push(x * (9 / 16) * 0.02 - 0.9, -y * 0.03 - 0.6, 40.0, 1);
            num++;
            }
        }
    }
    for (let i = 0; i < num; i++) {
        let r = Math.random();
        let g = Math.random();
        let b = Math.random();
        colors.push(1, 1, 1);
    }
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
}


let roundedSquare = new ShaderProgram("rounded-square");

roundedSquare.vertText = `
    // beginGLSL
    attribute vec4 coordinates;
    attribute vec3 colors;
    varying vec2 myposition;
    varying vec2 center;
    varying float alph;
    varying float size;
    varying vec3 cols;
    void main(void) {
        gl_Position = vec4(coordinates.x, coordinates.y, 0.0, 1.0);
        center = vec2(gl_Position.x, gl_Position.y);
        center = 512.0 + center * 512.0;
        myposition = vec2(gl_Position.x, gl_Position.y);
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
    uniform float time;
    varying vec2 myposition;
    varying vec2 center;
    varying float alph;
    varying float size;
    varying vec3 cols;
    float rand(vec2 co){
        return fract(sin(dot(co.xy ,vec2(12.9898,78.233))) * 43758.5453 * (2.0 + sin(co.x)));
    }
    float roundedRectangleFlicker (vec2 uv, vec2 pos, vec2 size, float radius, float thickness) {
        // vec2 uv = gl_PointCoord.xy;
        float t = time * 0.05;
        t = 100. + (t * 1e-4);
        float w = 0.15 + (sin(t * 1e-2 * tan(t * 2e-2)) + 1.0) * 0.25;
        float d = length(max(abs(uv - pos), size * 0.5) - size * 0.5) * w - radius * 0.01;
        return smoothstep(1.99 + ((sin(t * 10. * tan(t * 1e1)) + 1.0) * 0.5), 0.11, d * 10. / thickness * 5.0 * 0.125 * 1.5);
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
        float color = roundedRectangleFlicker(uv, vec2(0.0, 0.0), vec2(0.125, 0.35) * 0.5, 0.1, 0.5);
        float rando = rand(uv * time) * 0.1;
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
    logJavaScriptConsole(g);
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
}

VirtualTerminal.prototype.update = function(e) {
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
    }else if (s.length == "1") {
        if (sel) {
              this.text = this.text.slice(0, this.selectionBounds[0] - 1) + s + this.text.slice(this.selectionBounds[1] - 1);
              this.caretPosition = this.selectionBounds[0];
              this.selectionBounds = [0, 0];
          } else {
              this.text = this.text.slice(0, c) + s + this.text.slice(c);
        // this.text += s;
              this.caretPosition++;
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