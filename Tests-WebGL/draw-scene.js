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
    let t = drawCount + 800;
    let fx = 1;
    let fy = 1;
    for (let i = 0; i < 10000; i += 1) {
        let x = sin(i * sin(t * sin(t * 0.0001) * 0.01)) * i * 0.00007;
        let y = cos(i * sin(t * sin(t * 0.0001) * 0.01)) * i * 0.00007;
//         x = cos(y + x);
        y = tan(x * y + x + y + x + x);
//         y = sin((y + x) * 2);
//         x = pow(x, 0.5);
//         y = pow(y, x);
//         x = sin(fx * 3.56) * sin(x * 2);
//            x += cos(fx * sin(t * 10) * 3);
//            y += cos(fy * sin(t * 10) * 3);
           x += fx * sin(x * 0.5) * 10;
           y += fy * sin(y * 0.5) * 10;
           x = sin(fx + x * 0.256) * 0.45;
           y = sin(fx + y * 0.256) * 0.45;
//         y = sin(fy * 3.56) * sin(y);
//         y = cos(fy * 0.0001) * sin(y);
//         x = cos(y + x + x);
        x += (Math.random() - 0.5) * 0.00015;
        y += (Math.random() - 0.5) * 0.00015;
        x += xOffset * 0.15 * 0.0125;
        y += yOffset * 0.15 * 0.125;
        vertices.push(x * 7.5 - 0.3, y * 2, 0.0);
        fx = x;
        fy = y;
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
    gl.drawArrays(gl.POINTS, 0, 10000);
}