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

drawDots = function() {
    vertices = [];
    let xOffset = (noise(frameCount * 0.01) - 0.5) * 0.75;
    let yOffset = (noise((frameCount + 100) * 0.01) - 0.5) * 0.75;
    let t = drawCount * 5.35 + 870;
    let fx = 1;
    let fy = 1;
    let x = 1;
    let y = 1;
    for (let i = 0; i < 30000; i += 1) {
        x = sin(tan(i * 24.9 + t) + i * t * 0.00000005) * i * 0.00005;
        y = cos(tan(i * 24.9 + t) + i * t * 0.00000005) * i * 0.00015;
//         x *= cos(fx * fy * 0.001) * sin(x + t * 40);
//         y *= cos(fx * fy * 0.001) * cos(x + t * 20);
        x += cos(fx * 0.3) * tan(i * 0.0001 * sin(t)) * 3;
        y += sin(fy * 0.3) * tan(i * 0.0001 * sin(t)) * 3;
        fx = x;
        fy = y;
//         x += (Math.random() - 0.5) * 0.00005;
//         y += (Math.random() - 0.5) * 0.00005;
        x += xOffset * 0.25;
        y += yOffset * 0.25;
        vertices.push(x * 0.25 - 0.05, y * 0.8 * 0.31 - 0.15, 0.0);
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
    gl.drawArrays(gl.POINTS, 0, 30000);
}