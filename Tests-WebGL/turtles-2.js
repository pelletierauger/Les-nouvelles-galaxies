// Superbe hiver javaScript
drawCount = 1000;
drawDots = function() {
    vertices = [];
    let xOffset = (noise(frameCount * 0.0025) - 0.5) * 0.9;
    let yOffset = (noise((frameCount + 100) * 0.0025) - 0.5) * 0.9;
    let t = drawCount * 0.000005 + 2;
    let fx = 1;
    let fy = 1;
    let x = 0;
    let y = 0;
    let num = 60000;
    function ro(a, l, x, y, h) {
        return {
            x: x + cos(h) + sin(a * 20 + sin(x) * 1.5) * l,
            y: y + sin(h) + sin(a * 20 + sin(y) * 1.5) * l,
            h: h + a
        };
    }
    let amountRays = 120;
    let sj = (t + 100) * 1000000;
    let rayInc = Math.PI * 2 / amountRays;
    for (let j = sj; j < (Math.PI * 2 + sj); j += rayInc) {
        let p = {x: 0, y: 0, h: j};
        for (let i = 0; i < num / amountRays; i += 1) {
            let a = 0.09 * cos((j - sj) + i * (3.55 - (j - sj)) * 0.05) * 0.5;
            let l = 0.15 + sin((j - sj) * 1e-1);
            p = ro(a, l, p.x, p.y, p.h);
            p.x += xOffset * 0.25;
            p.y += yOffset * 0.25;
            vertices.push(p.x * 0.35 * 1.5 * 0.025, p.y * 0.8 * 0.025, 0.0);
        }
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
    gl.drawArrays(gl.POINTS, 0, num);
}


// Superbe hiver javaScript
drawCount = 1000;
drawDots = function() {
    vertices = [];
    let xOffset = (noise(frameCount * 0.0025) - 0.5) * 0.9;
    let yOffset = (noise((frameCount + 100) * 0.0025) - 0.5) * 0.9;
    let t = drawCount * 0.000005 + 2;
    let fx = 1;
    let fy = 1;
    let x = 0;
    let y = 0;
    let num = 60000;
    function ro(a, l, x, y, h) {
        return {
            x: x + cos(h + a * 100) + sin(a * 50 + sin(x) * 1.5) * l,
            y: y + sin(h + a * 100) + sin(a * 50 + sin(y) * 1.5) * l,
            h: h + a
        };
    }
    let amountRays = 120;
    let sj = (t + 100) * 1000000;
    let rayInc = Math.PI * 2 / amountRays;
    for (let j = sj; j < (Math.PI * 2 + sj); j += rayInc) {
        let p = {x: 0, y: 0, h: j};
        for (let i = 0; i < num / amountRays; i += 1) {
            let a = 0.09 * cos((j - sj) + i * (3.55 - (j - sj)) * 0.05) * 0.5;
            let l = 0.15 + sin((j - sj) * 1e-1);
            p = ro(a, l, p.x, p.y, p.h);
            p.x += xOffset * 0.25;
            p.y += yOffset * 0.25;
            vertices.push(p.x * 0.35 * 1.5 * 0.025, p.y * 0.8 * 0.025, 0.0);
        }
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
    gl.drawArrays(gl.POINTS, 0, num);
}



// Superbe hiver javaScript
drawCount = 1000;
drawDots = function() {
    vertices = [];
    let xOffset = (noise(frameCount * 0.0025) - 0.5) * 0.9;
    let yOffset = (noise((frameCount + 100) * 0.0025) - 0.5) * 0.9;
    let t = drawCount * 0.000005 + 2;
    let fx = 1;
    let fy = 1;
    let x = 0;
    let y = 0;
    let num = 60000;
    function ro(a, l, x, y, h) {
        return {
            x: x + cos(h + a * 30) + sin(a * 50 + sin(x) * 1.5) * l,
            y: y + sin(h + a * 30) + sin(a * 50 + sin(y) * 1.5) * l,
            h: h + a
        };
    }
    let amountRays = 120;
    let sj = (t + 100) * 1000000;
    let rayInc = Math.PI * 2 / amountRays;
    for (let j = sj; j < (Math.PI * 2 + sj); j += rayInc) {
        let p = {x: 0, y: 0, h: j};
        for (let i = 0; i < num / amountRays; i += 1) {
            let a = 0.029 * cos((j - sj) + i * (3.55 - (j - sj)) * 0.05) * 0.5;
            let l = 0.15 + sin((j - sj) * 1e-1);
            p = ro(a, l, p.x, p.y, p.h);
            p.x += xOffset * 0.25;
            p.y += yOffset * 0.25;
            vertices.push(p.x * 0.35 * 1.5 * 0.025, p.y * 0.8 * 0.025, 0.0);
        }
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
    gl.drawArrays(gl.POINTS, 0, num);
}




// Superbe hiver javaScript
drawCount = 1000;
drawDots = function() {
    vertices = [];
    let xOffset = (noise(frameCount * 0.0025) - 0.5) * 0.9;
    let yOffset = (noise((frameCount + 100) * 0.0025) - 0.5) * 0.9;
    let t = (10 - drawCount) * 0.000005 + 2;
    let fx = 1;
    let fy = 1;
    let x = 0;
    let y = 0;
    let num = 60000;
    function ro(a, l, x, y, h) {
        return {
            x: x + cos(h + a) * l,
            y: y + sin(h + a) * l,
            h: h + a
        };
    }
    let amountRays = 120;
    let sj = (t + 100) * 1000000;
    let rayInc = Math.PI * 2 / amountRays;
    for (let j = sj; j < (Math.PI * 2 + sj); j += rayInc) {
        let p = {x: 0, y: 0, h: j};
        for (let i = 0; i < num / amountRays; i += 1) {
            let a = 0.029 * cos((j - sj) + i * (0.55 - (j - sj)) * 5) * 2.5;
            let l = 0.25 + sin(i * 0.01) * map(i, 0, num / amountRays, 1, 10);
            p = ro(a, l, p.x, p.y, p.h);
            p.x += xOffset * 0.5;
            p.y += yOffset * 0.5;
            vertices.push(p.x * 0.35 * 1.5 * 0.02, p.y * 0.8 * 0.02, 0.0);
        }
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
    gl.drawArrays(gl.POINTS, 0, num);
}



// Superbe hiver javaScript
drawCount = 1000;
drawDots = function() {
    vertices = [];
    let xOffset = (noise(frameCount * 0.0025) - 0.5) * 0.9;
    let yOffset = (noise((frameCount + 100) * 0.0025) - 0.5) * 0.9;
    let t = (10 - drawCount) * 0.000005 + 2;
    let fx = 1;
    let fy = 1;
    let x = 0;
    let y = 0;
    let num = 60000;
    function ro(a, l, x, y, h) {
        return {
            x: x + pow(cos(h + a) * 3, 3) * l,
            y: y + pow(sin(h + a) * 3, 3) * l,
            h: h + a
        };
    }
    let amountRays = 120;
    let sj = (t + 100) * 1000000;
    let rayInc = Math.PI * 2 / amountRays;
    for (let j = sj; j < (Math.PI * 2 + sj); j += rayInc) {
        let p = {x: 0, y: 0, h: j};
        for (let i = 0; i < num / amountRays; i += 1) {
            let a = 0.029 * cos((j - sj) + i * (0.55 - (j - sj)) * 5) * 2.5;
            let l = 0.25 + sin(i * 0.01) * map(i, 0, num / amountRays, 1, 10);
            p = ro(a, l, p.x, p.y, p.h);
            p.x += xOffset * 0.125;
            p.y += yOffset * 0.125;
            vertices.push(p.x * 0.35 * 1.5 * 0.0002, p.y * 0.8 * 0.0002, 0.0);
        }
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
    gl.drawArrays(gl.POINTS, 0, num);
}





// Superbe hiver javaScript
drawCount = 1000;
drawDots = function() {
    vertices = [];
    let xOffset = (noise(frameCount * 0.0025) - 0.5) * 0.9;
    let yOffset = (noise((frameCount + 100) * 0.0025) - 0.5) * 0.9;
    let t = (10 - drawCount) * 0.000005 + 2;
    let fx = 1;
    let fy = 1;
    let x = 0;
    let y = 0;
    let num = 60000;
    function ro(a, l, x, y, h) {
        return {
            x: x + cos(h + a) * 10* l,
            y: y + sin(h + a) * 10* l,
            h: h + a
        };
    }
    let amountRays = 120;
    let sj = (t + 100) * 1000000;
    let rayInc = Math.PI * 2 / amountRays;
    for (let j = sj; j < (Math.PI * 2 + sj); j += rayInc) {
        let p = {x: 0, y: 0, h: j};
        for (let i = 0; i < num / amountRays; i += 1) {
            let a = 0.9 + sin(p.x * 1e-1);
            let l = 2;
            p = ro(a, l, p.x, p.y, p.h);
            p.x += xOffset * 0.125;
            p.y += yOffset * 0.125;
            vertices.push(p.x * 0.35 * 1.5 * 0.012, p.y * 0.8 * 0.012, 0.0);
        }
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
    gl.drawArrays(gl.POINTS, 0, num);
}