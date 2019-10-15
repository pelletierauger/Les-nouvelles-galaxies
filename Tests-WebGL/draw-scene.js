function drawBG() {
    let aspect = cnvs.width / cnvs.height;
    let vertices = new Float32Array([-1, 1, 1, 1, 1, -1, // Triangle 1
        -1, 1, 1, -1, -1, 1 // Triangle 2
    ]);
    let vbuffer = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, vbuffer);
    gl.bufferData(gl.ARRAY_BUFFER, vertices, gl.STATIC_DRAW);

    let itemSize = 2;
    let numItems = vertices.length / itemSize;

    // gl.useProgram(shaderProgram);

    // program.uColor = gl.getUniformLocation(program, "uColor");
    // gl.uniform4fv(program.uColor, [0.0, 0.3, 0.0, 1.0]);

    shaderProgram.aVertexPosition = gl.getAttribLocation(shaderProgram, "aPosition");
    gl.enableVertexAttribArray(shaderProgram.aVertexPosition);
    gl.vertexAttribPointer(shaderProgram.aVertexPosition, itemSize, gl.FLOAT, false, 0, 0);


    gl.drawArrays(gl.TRIANGLES, 0, numItems);
}

// Superbe hiver javaScript
// Aspirateur troublant
drawCount = 2;
drawIncrement = 0.00125;
drawIncrement = 0.000125;
drawDots = function() {
    vertices = [];
    let xOffset = (noise(drawCount * 35) - 0.5);
    let yOffset = (noise((drawCount + 100) * 35) - 0.5);
    let t = drawCount * 0.000005 + 2;
    let fx = 1;
    let fy = 1;
    let x = 0;
    let y = 0;
    let num = 42000;
    function ro(a, l, x, y, h) {
        return {
            x: x + cos(h + a + x * 0.00000125) * l,
            y: y + sin(h + a + y * 0.00000125) * l,
            h: h + a
        };
    }
    let amountRays = 120;
    let sj = (1 - t) * 10.2;
    //     sj = 0;
    let numV = 0;
    let rayInc = Math.PI * 2 / amountRays;
    let px = 1;
    let py = 1;
        for (let i = 0; i < 20000; i += 1) {
            var m = Math.sin((drawCount * 0.19 + 2) * 7) * 2;
            t = i / 30;
            // t = sin(i);
            var z = 20 + Math.sin(m * 1e-2) * 100;
            // return {
            x = Math.tan(t + m + i * 1e-4) * Math.tan(t + m * 15) * Math.cos(t + m) * i / z;
            y = Math.tan(t + m + i * 1e-4) * Math.tan(t + m * 15) * Math.sin(t + m) * i / z;
            px = sin(x * 0.001);
            py = sin(y * 0.001);
            vertices.push(x * 0.0019, y * 0.0019, 0.0);
            numV++;
        }
    // Create an empty buffer object to store the vertex buffer
    // var vertex_buffer = gl.createBuffer();
    //Bind appropriate array buffer to it
    // gl.bindBuffer(gl.ARRAY_BUFFER, vertex_buffer);
    // Pass the vertex data to the buffer
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(vertices), gl.STATIC_DRAW);
    // Unbind the buffer
    gl.bindBuffer(gl.ARRAY_BUFFER, null);
    /*======== Associating shaders to buffer objects ========*/
    // Bind vertex buffer object
    gl.bindBuffer(gl.ARRAY_BUFFER, vertex_buffer);
    // Get the attribute location
    var coord = gl.getAttribLocation(shaderProgram, "coordinates");
    // Point an attribute to the currently bound VBO
    gl.vertexAttribPointer(coord, 3, gl.FLOAT, false, 0, 0);
    // Enable the attribute
    gl.enableVertexAttribArray(coord);
    /*============= Drawing the primitive ===============*/
    // // Clear the canvas
    // gl.clearColor(0.5, 0.5, 0.5, 0.9);
    // Clear the color buffer bit
    // gl.clear(gl.COLOR_BUFFER_BIT);
    // Draw the triangle
    gl.drawArrays(gl.POINTS, 0, numV);
    drawIncrement += 0.000125 * 1e-2;
}