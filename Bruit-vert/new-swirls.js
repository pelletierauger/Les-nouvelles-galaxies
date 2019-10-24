drawSwirl = function(selectedProgram) {
    vertices = [];
    // let xOffset = (noise(frameCount * 0.01) - 0.5) * 0.75;
    // let yOffset = (noise((frameCount + 100) * 0.01) - 0.5) * 0.75;
    let t = drawCount * 0.00125 * 0.00005 * 1.5 + 10;
    let t2 = t * 1e1 * 20000;
    let xOffset = openSimplex.noise2D(t2, t2 + 1000);
    let yOffset = openSimplex.noise2D(t2 - 1000, t2 + 500);
    t2 = (t2 + 5000) * 100;
    let xOffset2 = openSimplex.noise2D(t2, t2 + 1000);
    let yOffset2 = openSimplex.noise2D(t2 - 1000, t2 + 500);
    let fx = 1;
    let fy = 1;
    let x = 1;
    let y = 1;
    // let al = map(sin(t * 1e6), -1, 1, 0.1, 1);
    let t3 = t * 1e6;
    let al = map(openSimplex.noise2D(t3, t3 + 1000), -1, 1, 0.1, 1);
    let dotsToDraw = 40000;
    for (let i = 0; i < dotsToDraw; i += 1) {
        let ax = pow(cos(fx * 1e-2 + i * 1e-7), -1);
        let ay = pow(cos(fx * 1e-2 + i * 1e-7), -1);
        let aax = 0.5 - ax;
        let aay = 0.5 - ay;
        let c = map(Math.sin(t * 1e5), -1, 1, 2, 20);
        x = sin(tan(i * 26.9) * sin(i * 1e-4 + ax * c) + i * 1e-5 + t * 11e4) * i * 0.00005 * 1.5;
        y = cos(tan(i * 26.9) * sin(i * 1e-4 + ax * c) + i * 1e-5 + t * 11e4) * i * 0.00015 * 1.5;
        x += sin(fx * 0.05) - cos(fy * 0.05);
        y += sin(fy * 0.05) - cos(fy * 0.05);
        fx = x;
        fy = y;
        x += cos(t * -1e6 * 0.25) * i * 0.125e-4 * 2;
        y += sin(t * -1e6 * 0.25) * i * 0.125e-4 * 3;
        x += xOffset * 0.15 * 2 * 0.2 * 6.5 * 0.5;
        y += yOffset * 0.15 * 3 * 0.2 * 6.5 * 0.5;
        x += xOffset2 * 2 * 1e-3 * 0.5 * 6.5 * 0.5;
        y += yOffset2 * 3 * 1e-3 * 0.5 * 6.5 * 0.5;
        vertices.push((x * 6.5) * 1.5 * 0.025, (y * 6.5) * 0.8 * 0.025 * 1.1, 14.0, al);
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
    var coord = gl.getAttribLocation(selectedProgram, "coordinates");
    // Point an attribute to the currently bound VBO
    gl.vertexAttribPointer(coord, 4, gl.FLOAT, false, 0, 0);
    // Enable the attribute
    gl.enableVertexAttribArray(coord);
    /*============= Drawing the primitive ===============*/
    // // Clear the canvas
    // gl.clearColor(0.5, 0.5, 0.5, 0.9);
    // Clear the color buffer bit
    // gl.clear(gl.COLOR_BUFFER_BIT);
    // Draw the triangle
//     let dotsToDraw = Math.floor(map(drawCount, 0, 2400 - 672, 60000, 0));
    gl.drawArrays(gl.POINTS, 0, dotsToDraw);
}




drawSwirl = function(selectedProgram) {
    vertices = [];
    // let xOffset = (noise(frameCount * 0.01) - 0.5) * 0.75;
    // let yOffset = (noise((frameCount + 100) * 0.01) - 0.5) * 0.75;
    let t = drawCount * 0.00125 * 0.00005 * 1.5 + 10;
    let t2 = t * 1e1 * 20000;
    let xOffset = openSimplex.noise2D(t2, t2 + 1000);
    let yOffset = openSimplex.noise2D(t2 - 1000, t2 + 500);
    t2 = (t2 + 5000) * 100;
    let xOffset2 = openSimplex.noise2D(t2, t2 + 1000);
    let yOffset2 = openSimplex.noise2D(t2 - 1000, t2 + 500);
    let fx = 1;
    let fy = 1;
    let x = 1;
    let y = 1;
    // let al = map(sin(t * 1e6), -1, 1, 0.1, 1);
    let t3 = t * 1e6;
    let al = map(openSimplex.noise2D(t3, t3 + 1000), -1, 1, 0.1, 1);
    let dotsToDraw = 40000;
    for (let i = 0; i < dotsToDraw; i += 1) {
        let c = map(Math.sin(t * 1e5), -1, 1, 2, 20);
        x = sin(tan(i * 26.9) * sin(i * 1e-4 + c) + i * 1e-5 + t * 11e4) * i * 0.00005 * 1.5;
        y = cos(tan(i * 26.9) * sin(i * 1e-4 + c) + i * 1e-5 + t * 11e4) * i * 0.00015 * 1.5;
        x += sin(fx * 0.15) - cos(fx * i * 1e-4 * 0.15);
        y += sin(fy * 0.15) - cos(fy * i * 1e-4 * 0.15);
        fx = x;
        fy = y;
        x += cos(t * -1e6 * 0.25) * i * 0.125e-4 * 2;
        y += sin(t * -1e6 * 0.25) * i * 0.125e-4 * 3;
        x += xOffset * 0.15 * 2 * 0.2 * 6.5 * 0.5;
        y += yOffset * 0.15 * 3 * 0.2 * 6.5 * 0.5;
        x += xOffset2 * 2 * 1e-3 * 0.5 * 6.5 * 0.5;
        y += yOffset2 * 3 * 1e-3 * 0.5 * 6.5 * 0.5;
        vertices.push((x * 6.5) * 1.5 * 0.025, (y * 6.5) * 0.8 * 0.025 * 1.1, 14.0, al);
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
    var coord = gl.getAttribLocation(selectedProgram, "coordinates");
    // Point an attribute to the currently bound VBO
    gl.vertexAttribPointer(coord, 4, gl.FLOAT, false, 0, 0);
    // Enable the attribute
    gl.enableVertexAttribArray(coord);
    /*============= Drawing the primitive ===============*/
    // // Clear the canvas
    // gl.clearColor(0.5, 0.5, 0.5, 0.9);
    // Clear the color buffer bit
    // gl.clear(gl.COLOR_BUFFER_BIT);
    // Draw the triangle
//     let dotsToDraw = Math.floor(map(drawCount, 0, 2400 - 672, 60000, 0));
    gl.drawArrays(gl.POINTS, 0, dotsToDraw);
}




drawSwirl = function(selectedProgram) {
    vertices = [];
    // let xOffset = (noise(frameCount * 0.01) - 0.5) * 0.75;
    // let yOffset = (noise((frameCount + 100) * 0.01) - 0.5) * 0.75;
    let t = drawCount * 0.00125 * 0.00005 * 1.5 + 10;
    let t2 = t * 1e1 * 20000;
    let xOffset = openSimplex.noise2D(t2, t2 + 1000);
    let yOffset = openSimplex.noise2D(t2 - 1000, t2 + 500);
    t2 = (t2 + 5000) * 100;
    let xOffset2 = openSimplex.noise2D(t2, t2 + 1000);
    let yOffset2 = openSimplex.noise2D(t2 - 1000, t2 + 500);
    let fx = 1;
    let fy = 1;
    let x = 1;
    let y = 1;
    // let al = map(sin(t * 1e6), -1, 1, 0.1, 1);
    let t3 = t * 1e6;
    let al = map(openSimplex.noise2D(t3, t3 + 1000), -1, 1, 0.1, 1);
    let dotsToDraw = 40000;
    for (let i = 0; i < dotsToDraw; i += 1) {
        let c = map(Math.sin(t * 1e2), -1, 1, 2, 20);
        x = sin(tan(i * 260.9) * sin(i * 1e-4 + c) + i * 1e-5 + t * 1e-4) * i * 0.00005 * 1.5;
        y = cos(tan(i * 260.9) * sin(i * 1e-4 + c) + i * 1e-5 + t * 1e-4) * i * 0.00015 * 1.5;
        x += sin(fx * 0.15) - cos(fx * i * 1e-4 * 0.15);
        y += sin(fy * 0.15) - cos(fy * i * 1e-4 * 0.15);
        fx = x;
        fy = y;
        x += cos(t * -1e6 * 0.25) * i * 0.125e-4 * 2;
        y += sin(t * -1e6 * 0.25) * i * 0.125e-4 * 3;
        x += xOffset * 0.15 * 2 * 0.2 * 6.5 * 0.5;
        y += yOffset * 0.15 * 3 * 0.2 * 6.5 * 0.5;
        x += xOffset2 * 2 * 1e-3 * 0.5 * 6.5 * 0.5;
        y += yOffset2 * 3 * 1e-3 * 0.5 * 6.5 * 0.5;
        vertices.push((x * 6.5) * 1.5 * 0.025, (y * 6.5) * 0.8 * 0.025 * 1.1, 14.0, al);
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
    var coord = gl.getAttribLocation(selectedProgram, "coordinates");
    // Point an attribute to the currently bound VBO
    gl.vertexAttribPointer(coord, 4, gl.FLOAT, false, 0, 0);
    // Enable the attribute
    gl.enableVertexAttribArray(coord);
    /*============= Drawing the primitive ===============*/
    // // Clear the canvas
    // gl.clearColor(0.5, 0.5, 0.5, 0.9);
    // Clear the color buffer bit
    // gl.clear(gl.COLOR_BUFFER_BIT);
    // Draw the triangle
//     let dotsToDraw = Math.floor(map(drawCount, 0, 2400 - 672, 60000, 0));
    gl.drawArrays(gl.POINTS, 0, dotsToDraw);
}


drawCount = 0;
drawSwirl = function(selectedProgram) {
    vertices = [];
    // let xOffset = (noise(frameCount * 0.01) - 0.5) * 0.75;
    // let yOffset = (noise((frameCount + 100) * 0.01) - 0.5) * 0.75;
    let t = drawCount * 0.00125 * 0.00005 * 1.5 + 10;
    let t2 = t * 1e1 * 20000;
    let xOffset = openSimplex.noise2D(t2, t2 + 1000);
    let yOffset = openSimplex.noise2D(t2 - 1000, t2 + 500);
    t2 = (t2 + 5000) * 100;
    let xOffset2 = openSimplex.noise2D(t2, t2 + 1000);
    let yOffset2 = openSimplex.noise2D(t2 - 1000, t2 + 500);
    let fx = 1;
    let fy = 1;
    let x = 1;
    let y = 1;
    // let al = map(sin(t * 1e6), -1, 1, 0.1, 1);
    let t3 = t * 1e6;
    let al = map(openSimplex.noise2D(t3, t3 + 1000), -1, 1, 0.1, 1);
    let dotsToDraw = 40000;
    for (let i = 0; i < dotsToDraw; i += 1) {
        let c = map(Math.sin(t * 4e2), -1, 1, 2, 20) * 15;
        x = sin(tan(i * 260.9 + c) * sin(i * 2e-4 + c) + i * 1e1 + t * 1e5) * i * 0.00005 * 1.5;
        y = cos(tan(i * 260.9 + c) * sin(i * 2e-4 + c) + i * 1e1 + t * 1e5) * i * 0.00015 * 1.5;
        x += sin(fx * 0.05) + cos(fx * i * 1e-4 * 0.05);
        y += sin(fy * 0.05) + cos(fy * i * 1e-4 * 0.05);
        fx = x;
        fy = y;
        x += cos(t * -1e6 * 0.25) * i * 0.125e-4 * 2;
        y += sin(t * -1e6 * 0.25) * i * 0.125e-4 * 3;
        x += xOffset * 0.15 * 2 * 0.2 * 6.5 * 0.5;
        y += yOffset * 0.15 * 3 * 0.2 * 6.5 * 0.5;
        x += xOffset2 * 2 * 1e-3 * 0.5 * 6.5 * 0.5;
        y += yOffset2 * 3 * 1e-3 * 0.5 * 6.5 * 0.5;
        vertices.push((x * 6.5) * 1.5 * 0.025, (y * 6.5) * 0.8 * 0.025 * 1.1, 14.0, al);
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
    var coord = gl.getAttribLocation(selectedProgram, "coordinates");
    // Point an attribute to the currently bound VBO
    gl.vertexAttribPointer(coord, 4, gl.FLOAT, false, 0, 0);
    // Enable the attribute
    gl.enableVertexAttribArray(coord);
    /*============= Drawing the primitive ===============*/
    // // Clear the canvas
    // gl.clearColor(0.5, 0.5, 0.5, 0.9);
    // Clear the color buffer bit
    // gl.clear(gl.COLOR_BUFFER_BIT);
    // Draw the triangle
//     let dotsToDraw = Math.floor(map(drawCount, 0, 2400 - 672, 60000, 0));
    gl.drawArrays(gl.POINTS, 0, dotsToDraw);
}



drawCount = 0;
drawSwirl = function(selectedProgram) {
    vertices = [];
    // let xOffset = (noise(frameCount * 0.01) - 0.5) * 0.75;
    // let yOffset = (noise((frameCount + 100) * 0.01) - 0.5) * 0.75;
    let t = drawCount * 0.00125 * 0.00005 * 1.5 + 10;
    let t2 = t * 1e1 * 20000;
//     let xOffset = openSimplex.noise2D(t2, t2 + 1000);
//     let yOffset = openSimplex.noise2D(t2 - 1000, t2 + 500);
    t2 = (t2 + 5000) * 100;
//     let xOffset2 = openSimplex.noise2D(t2, t2 + 1000);
//     let yOffset2 = openSimplex.noise2D(t2 - 1000, t2 + 500);
    let fx = 1;
    let fy = 1;
    let x = 1;
    let y = 1;
    // let al = map(sin(t * 1e6), -1, 1, 0.1, 1);
    let t3 = t * 1e6;
//     let al = map(openSimplex.noise2D(t3, t3 + 1000), -1, 1, 0.1, 1);
    let dotsToDraw = 40000;
    for (let i = 0; i < dotsToDraw; i += 1) {
        let c = map(Math.sin(t * 4e2), -1, 1, 2, 20) * 15;
        x = Math.sin(tan(i * 260.9 + c) * Math.sin(i * 2e-4 + c) + i * 2e2 + t * 1e5) * i * 0.00005 * 1.5;
        y = Math.cos(tan(i * 260.9 + c) * Math.sin(i * 2e-4 + c) + i * 2e2 + t * 1e5) * i * 0.00015 * 1.5;
        x += Math.sin(fx * 0.05) + Math.cos(fx * i * 1e-4 * 0.05);
        y += Math.sin(fy * 0.05) + Math.cos(fy * i * 1e-4 * 0.05);
        fx = x;
        fy = y;
        x += Math.cos(t * -1e6 * 0.25) * i * 0.125e-4 * 2;
        y += Math.sin(t * -1e6 * 0.25) * i * 0.125e-4 * 3;
//         x += xOffset * 0.15 * 2 * 0.2 * 6.5 * 0.5;
//         y += yOffset * 0.15 * 3 * 0.2 * 6.5 * 0.5;
//         x += xOffset2 * 2 * 1e-3 * 0.5 * 6.5 * 0.5;
//         y += yOffset2 * 3 * 1e-3 * 0.5 * 6.5 * 0.5;
        vertices.push((x * 6.5) * 1.5 * 0.025, (y * 6.5) * 0.8 * 0.025 * 1.1, 14.0, 0.5);
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
    var coord = gl.getAttribLocation(selectedProgram, "coordinates");
    // Point an attribute to the currently bound VBO
    gl.vertexAttribPointer(coord, 4, gl.FLOAT, false, 0, 0);
    // Enable the attribute
    gl.enableVertexAttribArray(coord);
    /*============= Drawing the primitive ===============*/
    // // Clear the canvas
    // gl.clearColor(0.5, 0.5, 0.5, 0.9);
    // Clear the color buffer bit
    // gl.clear(gl.COLOR_BUFFER_BIT);
    // Draw the triangle
//     let dotsToDraw = Math.floor(map(drawCount, 0, 2400 - 672, 60000, 0));
    gl.drawArrays(gl.POINTS, 0, dotsToDraw);
}



drawCount = 0;
drawSwirl = function(selectedProgram) {
    vertices = [];
    // let xOffset = (noise(frameCount * 0.01) - 0.5) * 0.75;
    // let yOffset = (noise((frameCount + 100) * 0.01) - 0.5) * 0.75;
    let t = drawCount * 0.00125 * 0.00005 * 1.5 + 10;
    let t2 = t * 1e1 * 20000;
//     let xOffset = openSimplex.noise2D(t2, t2 + 1000);
//     let yOffset = openSimplex.noise2D(t2 - 1000, t2 + 500);
    t2 = (t2 + 5000) * 100;
//     let xOffset2 = openSimplex.noise2D(t2, t2 + 1000);
//     let yOffset2 = openSimplex.noise2D(t2 - 1000, t2 + 500);
    let fx = 1;
    let fy = 1;
    let x = 1;
    let y = 1;
    // let al = map(sin(t * 1e6), -1, 1, 0.1, 1);
    let t3 = t * 1e6;
//     let al = map(openSimplex.noise2D(t3, t3 + 1000), -1, 1, 0.1, 1);
    let dotsToDraw = 40000;
    for (let i = 0; i < dotsToDraw; i += 1) {
        let c = map(Math.sin(t * 4e2), -1, 1, 2, 20) * 1;
        x = Math.sin(tan(i * 260.9 + c) * Math.tan(i * 2e-4 + c) + i * 2e2) * i * 0.00005 * 1.5;
        y = Math.cos(tan(i * 260.9 + c) * Math.tan(i * 2e-4 + c) + i * 2e2) * i * 0.00015 * 1.5;
        x += Math.sin(fx * 0.05) + Math.cos(fx * i * 1e-5 * 0.05);
        y += Math.sin(fy * 0.05) + Math.cos(fy * i * 1e-5 * 0.05);
        fx = x;
        fy = y;
        x += Math.cos(t * -1e6 * 0.5) * i * 0.1e-4 * 2;
        y += Math.sin(t * -1e6 * 0.5) * i * 0.1e-4 * 3;
//         x += xOffset * 0.15 * 2 * 0.2 * 6.5 * 0.5;
//         y += yOffset * 0.15 * 3 * 0.2 * 6.5 * 0.5;
//         x += xOffset2 * 2 * 1e-3 * 0.5 * 6.5 * 0.5;
//         y += yOffset2 * 3 * 1e-3 * 0.5 * 6.5 * 0.5;
        vertices.push((x * 6.5) * 1.5 * 0.025 - 0.25, (y * 6.5) * 0.8 * 0.025 * 1.1 - 0.125, 14.0, 0.5);
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
    var coord = gl.getAttribLocation(selectedProgram, "coordinates");
    // Point an attribute to the currently bound VBO
    gl.vertexAttribPointer(coord, 4, gl.FLOAT, false, 0, 0);
    // Enable the attribute
    gl.enableVertexAttribArray(coord);
    /*============= Drawing the primitive ===============*/
    // // Clear the canvas
    // gl.clearColor(0.5, 0.5, 0.5, 0.9);
    // Clear the color buffer bit
    // gl.clear(gl.COLOR_BUFFER_BIT);
    // Draw the triangle
//     let dotsToDraw = Math.floor(map(drawCount, 0, 2400 - 672, 60000, 0));
    gl.drawArrays(gl.POINTS, 0, dotsToDraw);
}




drawCount = 0;
drawSwirl = function(selectedProgram) {
    vertices = [];
    // let xOffset = (noise(frameCount * 0.01) - 0.5) * 0.75;
    // let yOffset = (noise((frameCount + 100) * 0.01) - 0.5) * 0.75;
    let t = drawCount * 0.00125 * 0.00005 * 1.5 + 10;
    let t2 = t * 1e1 * 20000;
//     let xOffset = openSimplex.noise2D(t2, t2 + 1000);
//     let yOffset = openSimplex.noise2D(t2 - 1000, t2 + 500);
    t2 = (t2 + 5000) * 100;
//     let xOffset2 = openSimplex.noise2D(t2, t2 + 1000);
//     let yOffset2 = openSimplex.noise2D(t2 - 1000, t2 + 500);
    let fx = 1;
    let fy = 1;
    let x = 1;
    let y = 1;
    // let al = map(sin(t * 1e6), -1, 1, 0.1, 1);
    let t3 = t * 1e6;
//     let al = map(openSimplex.noise2D(t3, t3 + 1000), -1, 1, 0.1, 1);
    let dotsToDraw = 40000;
    for (let i = 0; i < dotsToDraw; i += 1) {
        let c = map(Math.sin(t * 4e2), -1, 1, 2, 20) * 1;
        x = Math.sin(tan(i * 260e4 + c) * Math.tan(i * 2e-4 + c) + i * 2e2) * i * 0.00005 * 2;
        y = Math.cos(tan(i * 260e4 + c) * Math.tan(i * 2e-4 + c) + i * 2e2) * i * 0.00015 * 2;
        x += Math.sin(fx * 0.05) + Math.cos(fx * i * 1e-5 * 0.05);
        y += Math.sin(fy * 0.05) + Math.cos(fy * i * 1e-5 * 0.05);
        fx = x;
        fy = y;
        x += Math.cos(t * -1e6 * 0.5) * i * 0.1e-4 * 2;
        y += Math.sin(t * -1e6 * 0.5) * i * 0.1e-4 * 3;
//         x += xOffset * 0.15 * 2 * 0.2 * 6.5 * 0.5;
//         y += yOffset * 0.15 * 3 * 0.2 * 6.5 * 0.5;
//         x += xOffset2 * 2 * 1e-3 * 0.5 * 6.5 * 0.5;
//         y += yOffset2 * 3 * 1e-3 * 0.5 * 6.5 * 0.5;
        vertices.push((x * 6.5) * 1.5 * 0.025 - 0.25, (y * 6.5) * 0.8 * 0.025 * 1.1 - 0.125, 14.0, 0.5);
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
    var coord = gl.getAttribLocation(selectedProgram, "coordinates");
    // Point an attribute to the currently bound VBO
    gl.vertexAttribPointer(coord, 4, gl.FLOAT, false, 0, 0);
    // Enable the attribute
    gl.enableVertexAttribArray(coord);
    /*============= Drawing the primitive ===============*/
    // // Clear the canvas
    // gl.clearColor(0.5, 0.5, 0.5, 0.9);
    // Clear the color buffer bit
    // gl.clear(gl.COLOR_BUFFER_BIT);
    // Draw the triangle
//     let dotsToDraw = Math.floor(map(drawCount, 0, 2400 - 672, 60000, 0));
    gl.drawArrays(gl.POINTS, 0, dotsToDraw);
}




drawCount = 0;
drawSwirl = function(selectedProgram) {
    vertices = [];
    // let xOffset = (noise(frameCount * 0.01) - 0.5) * 0.75;
    // let yOffset = (noise((frameCount + 100) * 0.01) - 0.5) * 0.75;
    let t = drawCount * 0.00125 * 0.00005 * 1.5 + 10;
    let t2 = t * 1e1 * 20000;
//     let xOffset = openSimplex.noise2D(t2, t2 + 1000);
//     let yOffset = openSimplex.noise2D(t2 - 1000, t2 + 500);
    t2 = (t2 + 5000) * 100;
//     let xOffset2 = openSimplex.noise2D(t2, t2 + 1000);
//     let yOffset2 = openSimplex.noise2D(t2 - 1000, t2 + 500);
    let fx = 1;
    let fy = 1;
    let x = 1;
    let y = 1;
    // let al = map(sin(t * 1e6), -1, 1, 0.1, 1);
    let t3 = t * 1e6;
//     let al = map(openSimplex.noise2D(t3, t3 + 1000), -1, 1, 0.1, 1);
    let dotsToDraw = 40000;
    for (let i = 0; i < dotsToDraw; i += 1) {
        let c = map(Math.sin(t * 4e4), -1, 1, 2, 20) * 1;
        x = Math.sin(tan(i * 260e4 + c) * Math.tan(i * 2e-4 + c) + i * 2e2) * i * 0.00005 * 2;
        y = Math.cos(tan(i * 260e4 + c) * Math.tan(i * 2e-4 + c) + i * 2e2) * i * 0.00015 * 2;
        x += Math.sin(fx * 0.005) + Math.cos(fx * i * 1e-5 * 0.05);
        y += Math.sin(fy * 0.005) + Math.cos(fy * i * 1e-5 * 0.05);
        fx = x;
        fy = y;
        x += Math.cos(t * -1e6 * 0.5) * i * 0.1e-4 * 2;
        y += Math.sin(t * -1e6 * 0.5) * i * 0.1e-4 * 3;
//         x += xOffset * 0.15 * 2 * 0.2 * 6.5 * 0.5;
//         y += yOffset * 0.15 * 3 * 0.2 * 6.5 * 0.5;
//         x += xOffset2 * 2 * 1e-3 * 0.5 * 6.5 * 0.5;
//         y += yOffset2 * 3 * 1e-3 * 0.5 * 6.5 * 0.5;
        vertices.push((x * 6.5) * 1.5 * 0.025 - 0.25, (y * 6.5) * 0.8 * 0.025 * 1.1 - 0.125, 14.0, 0.5);
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
    var coord = gl.getAttribLocation(selectedProgram, "coordinates");
    // Point an attribute to the currently bound VBO
    gl.vertexAttribPointer(coord, 4, gl.FLOAT, false, 0, 0);
    // Enable the attribute
    gl.enableVertexAttribArray(coord);
    /*============= Drawing the primitive ===============*/
    // // Clear the canvas
    // gl.clearColor(0.5, 0.5, 0.5, 0.9);
    // Clear the color buffer bit
    // gl.clear(gl.COLOR_BUFFER_BIT);
    // Draw the triangle
//     let dotsToDraw = Math.floor(map(drawCount, 0, 2400 - 672, 60000, 0));
    gl.drawArrays(gl.POINTS, 0, dotsToDraw);
}






drawCount = 0;
drawSwirl = function(selectedProgram) {
    vertices = [];
    // let xOffset = (noise(frameCount * 0.01) - 0.5) * 0.75;
    // let yOffset = (noise((frameCount + 100) * 0.01) - 0.5) * 0.75;
    let t = drawCount * 0.00125 * 0.00005 * 1.5 + 10;
    let t2 = t * 1e1 * 20000;
//     let xOffset = openSimplex.noise2D(t2, t2 + 1000);
//     let yOffset = openSimplex.noise2D(t2 - 1000, t2 + 500);
    t2 = (t2 + 5000) * 100;
//     let xOffset2 = openSimplex.noise2D(t2, t2 + 1000);
//     let yOffset2 = openSimplex.noise2D(t2 - 1000, t2 + 500);
    let fx = 1;
    let fy = 1;
    let x = 1;
    let y = 1;
    // let al = map(sin(t * 1e6), -1, 1, 0.1, 1);
    let t3 = t * 1e6;
//     let al = map(openSimplex.noise2D(t3, t3 + 1000), -1, 1, 0.1, 1);
    let dotsToDraw = 40000;
    for (let i = 0; i < dotsToDraw; i += 1) {
        let c = map(Math.sin(t * 4e4), -1, 1, 2, 20) * 1;
        x = Math.sin(Math.tan(i * 26e4 + c) * Math.tan(i * 2e-4 + c) + i * 2e2) * i * 0.00005 * 2;
        y = Math.cos(Math.tan(i * 26e4 + c) * Math.tan(i * 2e-4 + c) + i * 2e2) * i * 0.00015 * 2;
//         x += Math.sin(fx * 0.005) + Math.cos(fx * i * 1e-5 * 0.05);
//         y += Math.sin(fy * 0.005) + Math.cos(fy * i * 1e-5 * 0.05);
        fx = x;
        fy = y;
        x += Math.cos(t * -1e6 * 0.5) * i * 0.1e-4 * 2;
        y += Math.sin(t * -1e6 * 0.5) * i * 0.1e-4 * 3;
//         x += xOffset * 0.15 * 2 * 0.2 * 6.5 * 0.5;
//         y += yOffset * 0.15 * 3 * 0.2 * 6.5 * 0.5;
//         x += xOffset2 * 2 * 1e-3 * 0.5 * 6.5 * 0.5;
//         y += yOffset2 * 3 * 1e-3 * 0.5 * 6.5 * 0.5;
        vertices.push((x * 6.5) * 1.5 * 0.025 - 0.25, (y * 6.5) * 0.8 * 0.025 * 1.1 - 0.125, 14.0, 0.5);
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
    var coord = gl.getAttribLocation(selectedProgram, "coordinates");
    // Point an attribute to the currently bound VBO
    gl.vertexAttribPointer(coord, 4, gl.FLOAT, false, 0, 0);
    // Enable the attribute
    gl.enableVertexAttribArray(coord);
    /*============= Drawing the primitive ===============*/
    // // Clear the canvas
    // gl.clearColor(0.5, 0.5, 0.5, 0.9);
    // Clear the color buffer bit
    // gl.clear(gl.COLOR_BUFFER_BIT);
    // Draw the triangle
//     let dotsToDraw = Math.floor(map(drawCount, 0, 2400 - 672, 60000, 0));
    gl.drawArrays(gl.POINTS, 0, dotsToDraw);
}





drawCount = 0;
drawSwirl = function(selectedProgram) {
    vertices = [];
    // let xOffset = (noise(frameCount * 0.01) - 0.5) * 0.75;
    // let yOffset = (noise((frameCount + 100) * 0.01) - 0.5) * 0.75;
    let t = drawCount * 0.00125 * 0.00005 * 1.5 + 10;
    let t2 = t * 1e1 * 20000;
//     let xOffset = openSimplex.noise2D(t2, t2 + 1000);
//     let yOffset = openSimplex.noise2D(t2 - 1000, t2 + 500);
    t2 = (t2 + 5000) * 100;
//     let xOffset2 = openSimplex.noise2D(t2, t2 + 1000);
//     let yOffset2 = openSimplex.noise2D(t2 - 1000, t2 + 500);
    let fx = 1;
    let fy = 1;
    let x = 1;
    let y = 1;
    // let al = map(sin(t * 1e6), -1, 1, 0.1, 1);
    let t3 = t * 1e6;
//     let al = map(openSimplex.noise2D(t3, t3 + 1000), -1, 1, 0.1, 1);
    let dotsToDraw = 40000;
    for (let i = 0; i < dotsToDraw; i += 1) {
        let c = map(Math.sin(t * 4e4), -1, 1, 2, 20) * 1;
        x = Math.sin(Math.tan(i * 26e4 + c) * Math.sin(i * 2e-4 + c) + i * 2e2) * i * 0.00005 * 2;
        y = Math.cos(Math.tan(i * 26e4 + c) * Math.sin(i * 2e-4 + c) + i * 2e2) * i * 0.00015 * 2;
//         x += Math.sin(fx * 0.005) + Math.cos(fx * i * 1e-5 * 0.05);
//         y += Math.sin(fy * 0.005) + Math.cos(fy * i * 1e-5 * 0.05);
        fx = x;
        fy = y;
//         x += Math.cos(t * -1e6 * 0.5) * i * 0.1e-4 * 2;
//         y += Math.sin(t * -1e6 * 0.5) * i * 0.1e-4 * 3;
//         x += xOffset * 0.15 * 2 * 0.2 * 6.5 * 0.5;
//         y += yOffset * 0.15 * 3 * 0.2 * 6.5 * 0.5;
//         x += xOffset2 * 2 * 1e-3 * 0.5 * 6.5 * 0.5;
//         y += yOffset2 * 3 * 1e-3 * 0.5 * 6.5 * 0.5;
        vertices.push((x * 6.5) * 1.5 * 0.025 - 0, (y * 6.5) * 0.8 * 0.025 * 1.1 - 0.05, 14.0, 0.5);
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
    var coord = gl.getAttribLocation(selectedProgram, "coordinates");
    // Point an attribute to the currently bound VBO
    gl.vertexAttribPointer(coord, 4, gl.FLOAT, false, 0, 0);
    // Enable the attribute
    gl.enableVertexAttribArray(coord);
    /*============= Drawing the primitive ===============*/
    // // Clear the canvas
    // gl.clearColor(0.5, 0.5, 0.5, 0.9);
    // Clear the color buffer bit
    // gl.clear(gl.COLOR_BUFFER_BIT);
    // Draw the triangle
//     let dotsToDraw = Math.floor(map(drawCount, 0, 2400 - 672, 60000, 0));
    gl.drawArrays(gl.POINTS, 0, dotsToDraw);
}







drawCount = 0;
drawSwirl = function(selectedProgram) {
    vertices = [];
    // let xOffset = (noise(frameCount * 0.01) - 0.5) * 0.75;
    // let yOffset = (noise((frameCount + 100) * 0.01) - 0.5) * 0.75;
    let t = drawCount * 0.00125 * 0.00005 * 1.5 + 10;
    let t2 = t * 1e1 * 20000;
//     let xOffset = openSimplex.noise2D(t2, t2 + 1000);
//     let yOffset = openSimplex.noise2D(t2 - 1000, t2 + 500);
    t2 = (t2 + 5000) * 100;
//     let xOffset2 = openSimplex.noise2D(t2, t2 + 1000);
//     let yOffset2 = openSimplex.noise2D(t2 - 1000, t2 + 500);
    let fx = 1;
    let fy = 1;
    let x = 1;
    let y = 1;
    // let al = map(sin(t * 1e6), -1, 1, 0.1, 1);
    let t3 = t * 1e6;
//     let al = map(openSimplex.noise2D(t3, t3 + 1000), -1, 1, 0.1, 1);
    let dotsToDraw = 40000;
    for (let i = 0; i < dotsToDraw; i += 1) {
        let c = map(Math.sin(t * 25000), -1, 1, 2, 200) * 1;
        x = Math.sin(Math.tan(i * 26e4 + c) * Math.sin(i * 2e-4 + c) * 4e-1 + i * 10) * i * 0.00005 * 2;
        y = Math.cos(Math.tan(i * 26e4 + c) * Math.sin(i * 2e-4 + c) * 4e-1 + i * 10) * i * 0.00015 * 2;
//         x *= Math.sin(fx * 0.05) + Math.cos(fx * i * 1e-5 * 0.05);
//         y *= Math.sin(fy * 0.05) + Math.cos(fy * i * 1e-5 * 0.05);
        fx = x;
        fy = y;
//         x += Math.cos(t * -1e6 * 0.5) * i * 0.1e-4 * 2;
//         y += Math.sin(t * -1e6 * 0.5) * i * 0.1e-4 * 3;
//         x += xOffset * 0.15 * 2 * 0.2 * 6.5 * 0.5;
//         y += yOffset * 0.15 * 3 * 0.2 * 6.5 * 0.5;
//         x += xOffset2 * 2 * 1e-3 * 0.5 * 6.5 * 0.5;
//         y += yOffset2 * 3 * 1e-3 * 0.5 * 6.5 * 0.5;
        vertices.push((x * 6.5) * 1.5 * 0.025 - 0, (y * 6.5) * 0.8 * 0.025 * 1.1 - 0.05, 14.0, 0.5);
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
    var coord = gl.getAttribLocation(selectedProgram, "coordinates");
    // Point an attribute to the currently bound VBO
    gl.vertexAttribPointer(coord, 4, gl.FLOAT, false, 0, 0);
    // Enable the attribute
    gl.enableVertexAttribArray(coord);
    /*============= Drawing the primitive ===============*/
    // // Clear the canvas
    // gl.clearColor(0.5, 0.5, 0.5, 0.9);
    // Clear the color buffer bit
    // gl.clear(gl.COLOR_BUFFER_BIT);
    // Draw the triangle
//     let dotsToDraw = Math.floor(map(drawCount, 0, 2400 - 672, 60000, 0));
    gl.drawArrays(gl.POINTS, 0, dotsToDraw);
}





drawCount = 0;
drawSwirl = function(selectedProgram) {
    vertices = [];
    // let xOffset = (noise(frameCount * 0.01) - 0.5) * 0.75;
    // let yOffset = (noise((frameCount + 100) * 0.01) - 0.5) * 0.75;
    let t = drawCount * 0.00125 * 0.00005 * 1.5 + 10;
    let t2 = t * 1e1 * 20000;
//     let xOffset = openSimplex.noise2D(t2, t2 + 1000);
//     let yOffset = openSimplex.noise2D(t2 - 1000, t2 + 500);
    t2 = (t2 + 5000) * 100;
//     let xOffset2 = openSimplex.noise2D(t2, t2 + 1000);
//     let yOffset2 = openSimplex.noise2D(t2 - 1000, t2 + 500);
    let fx = 1;
    let fy = 1;
    let x = 1;
    let y = 1;
    // let al = map(sin(t * 1e6), -1, 1, 0.1, 1);
    let t3 = t * 1e6;
//     let al = map(openSimplex.noise2D(t3, t3 + 1000), -1, 1, 0.1, 1);
    let dotsToDraw = 40000;
    for (let i = 0; i < dotsToDraw; i += 1) {
        let c = map(Math.sin(t * 1500), -1, 1, 2, 200) * 1;
        x = Math.sin(Math.tan(i * 26e4 + c) * Math.sin(i * 2e-4 + c) * 4e-1 + i * 10) * i * 0.00005 * 2;
        y = Math.cos(Math.tan(i * 26e4 + c) * Math.sin(i * 2e-4 + c) * 4e-1 + i * 10) * i * 0.00015 * 2;
//         x *= Math.sin(fx * 0.05) + Math.cos(fx * i * 1e-5 * 0.05);
//         y *= Math.sin(fy * 0.05) + Math.cos(fy * i * 1e-5 * 0.05);
        fx = x;
        fy = y;
//         x += Math.cos(t * -1e6 * 0.5) * i * 0.1e-4 * 2;
//         y += Math.sin(t * -1e6 * 0.5) * i * 0.1e-4 * 3;
//         x += xOffset * 0.15 * 2 * 0.2 * 6.5 * 0.5;
//         y += yOffset * 0.15 * 3 * 0.2 * 6.5 * 0.5;
//         x += xOffset2 * 2 * 1e-3 * 0.5 * 6.5 * 0.5;
//         y += yOffset2 * 3 * 1e-3 * 0.5 * 6.5 * 0.5;
        let s = sin((i + x * y)) * 4;
        vertices.push((x * 6.5) * 1.5 * 0.025 - 0, (y * 6.5) * 0.8 * 0.025 * 1.1 - 0.05, 14.0 + s, 0.5);
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
    var coord = gl.getAttribLocation(selectedProgram, "coordinates");
    // Point an attribute to the currently bound VBO
    gl.vertexAttribPointer(coord, 4, gl.FLOAT, false, 0, 0);
    // Enable the attribute
    gl.enableVertexAttribArray(coord);
    /*============= Drawing the primitive ===============*/
    // // Clear the canvas
    // gl.clearColor(0.5, 0.5, 0.5, 0.9);
    // Clear the color buffer bit
    // gl.clear(gl.COLOR_BUFFER_BIT);
    // Draw the triangle
//     let dotsToDraw = Math.floor(map(drawCount, 0, 2400 - 672, 60000, 0));
    gl.drawArrays(gl.POINTS, 0, dotsToDraw);
}