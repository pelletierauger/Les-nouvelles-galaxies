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
    let t = drawCount * 0.5;
    // t = 0;
    let x = 1, y = 1, fx = 1, fy = 1;
    let numPoints = 19000;
    let inc = TWO_PI / numPoints;
    for (let i = 0; i < numPoints; i += 1) {
        x = Math.cos(i * 0.75e-2 + fx) * i * 1.5e-4;
        y = Math.sin(i * 0.75e-2 + fx) * i * 1.5e-4;
        y += Math.cos(fy * 1.125 + t * 1e-1);
        fx = x;
        fy = y;
        vertices.push(x * 0.32 * 1.125, y * 0.5 * 1.125, 0.0);
    }
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(vertices), gl.STATIC_DRAW)
    gl.bindBuffer(gl.ARRAY_BUFFER, null)
    gl.bindBuffer(gl.ARRAY_BUFFER, vertex_buffer)
    var coord = gl.getAttribLocation(shaderProgram, "coordinates")
    gl.vertexAttribPointer(coord, 3, gl.FLOAT, false, 0, 0)
    gl.enableVertexAttribArray(coord);
    gl.drawArrays(gl.POINTS, 0, numPoints);
}