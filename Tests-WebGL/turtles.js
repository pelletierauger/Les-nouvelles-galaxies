drawDots = function() {
    vertices = [];
    let xOffset = (noise(frameCount * 0.01) - 0.5) * 0.75;
    let yOffset = (noise((frameCount + 100) * 0.01) - 0.5) * 0.75;
    let t = drawCount * 0.000005 + 3;
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
    let p = {x: 0, y: 0, h: 0};
    for (let i = 0; i < num; i += 1) {
        p = ro(sin(i * 0.0003 + sin(t * i * 0.1) * cos(i * 0.1) + t * 1e3), 0.1, p.x, p.y, p.h);
//         x += xOffset * 0.125;
//         y += yOffset * 0.125;
        vertices.push(p.x * 0.35 * 1.5 * 0.15, p.y * 0.8 * 0.15, 0.0);
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



drawDots = function() {
    vertices = [];
    let xOffset = (noise(frameCount * 0.01) - 0.5) * 0.75;
    let yOffset = (noise((frameCount + 100) * 0.01) - 0.5) * 0.75;
    let t = drawCount * 0.000005 + 3;
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
    let p = {x: 0, y: 0, h: 0};
    for (let i = 0; i < num; i += 1) {
        p = ro(sin(i * 0.0003 + sin(t * i * 0.002) * cos(i * 0.002) + t * 1e3), 0.1, p.x, p.y, p.h);
//         x += xOffset * 0.125;
//         y += yOffset * 0.125;
        vertices.push(p.x * 0.35 * 1.5 * 0.5, p.y * 0.8 * 0.5, 0.0);
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


drawCount = 1000;
drawDots = function() {
    vertices = [];
    let xOffset = (noise(frameCount * 0.01) - 0.5) * 0.75;
    let yOffset = (noise((frameCount + 100) * 0.01) - 0.5) * 0.75;
    let t = drawCount * 0.000005 + 2;
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
    let p = {x: 0, y: 0, h: 0};
    for (let i = 0; i < num; i += 1) {
        p = ro(sin(i * 0.03 + sin(t * i * 0.002) * cos(i * 0.002) + t * 1e5), 0.2 * sin(i * 0.01), p.x, p.y, p.h);
//         x += xOffset * 0.125;
//         y += yOffset * 0.125;
        vertices.push(p.x * 0.35 * 1.5 * 0.25, p.y * 0.8 * 0.25, 0.0);
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



drawCount = 1000;
drawDots = function() {
    vertices = [];
    let xOffset = (noise(frameCount * 0.01) - 0.5) * 0.75;
    let yOffset = (noise((frameCount + 100) * 0.01) - 0.5) * 0.75;
    let t = drawCount * 0.000005 + 2;
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
    let rayInc = Math.PI * 2 / amountRays;
    for (let j = 0; j < Math.PI * 2; j += rayInc) {
        let p = {x: 0, y: 0, h: j};
        for (let i = 0; i < num / amountRays; i += 1) {
            let a = 0.0001;
            let l = 0.15;
            p = ro(a + sin(t * 1e-3 + j * 0.001), l, p.x, p.y, p.h);
            p.x += xOffset * 0.5;
            p.y += yOffset * 0.5;
            vertices.push(p.x * 0.35 * 1.5 * 0.05, p.y * 0.8 * 0.05, 0.0);
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
    let xOffset = (noise(frameCount * 0.01) - 0.5) * 0.75;
    let yOffset = (noise((frameCount + 100) * 0.01) - 0.5) * 0.75;
    let t = drawCount * 0.000005 + 2;
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
    let rayInc = Math.PI * 2 / amountRays;
    for (let j = 0; j < Math.PI * 2; j += rayInc) {
        let p = {x: 0, y: 0, h: j};
        for (let i = 0; i < num / amountRays; i += 1) {
            let a = 0.09 * sin(1 - j);
            let l = 0.15;
            p = ro(a, l, p.x, p.y, p.h);
            p.x += xOffset * 0.125;
            p.y += yOffset * 0.125;
            vertices.push(p.x * 0.35 * 1.5 * 0.05, p.y * 0.8 * 0.05, 0.0);
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
    let xOffset = (noise(frameCount * 0.01) - 0.5) * 0.75;
    let yOffset = (noise((frameCount + 100) * 0.01) - 0.5) * 0.75;
    let t = drawCount * 0.000005 + 2;
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
    let rayInc = Math.PI * 2 / amountRays;
    for (let j = 0; j < Math.PI * 2; j += rayInc) {
        let p = {x: 0, y: 0, h: j};
        for (let i = 0; i < num / amountRays; i += 1) {
            let a = 0.09 * sin(i * (1 - j) * 3) * 0.5;
            let l = 0.15;
            p = ro(a, l, p.x, p.y, p.h);
            p.x += xOffset * 0.125;
            p.y += yOffset * 0.125;
            vertices.push(p.x * 0.35 * 1.5 * 0.05, p.y * 0.8 * 0.05, 0.0);
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
    let xOffset = (noise(frameCount * 0.01) - 0.5) * 0.75;
    let yOffset = (noise((frameCount + 100) * 0.01) - 0.5) * 0.75;
    let t = drawCount * 0.000005 + 2;
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
    let rayInc = Math.PI * 2 / amountRays;
    for (let j = 0; j < Math.PI * 2; j += rayInc) {
        let p = {x: 0, y: 0, h: j};
        for (let i = 0; i < num / amountRays; i += 1) {
            let a = 0.09 * sin(i * (1 - j) * 3) * 0.5;
            let l = 0.15;
            p = ro(a, l, p.x, p.y, p.h);
            p.x += xOffset * 0.125;
            p.y += yOffset * 0.125;
            vertices.push(p.x * 0.35 * 1.5 * 0.05, p.y * 0.8 * 0.05, 0.0);
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
            x: x + cos(h + a) * l,
            y: y + sin(h + a) * l,
            h: h + a
        };
    }
    let amountRays = 120;
    let rayInc = Math.PI * 2 / amountRays;
    for (let j = 0; j < Math.PI * 2; j += rayInc) {
        let p = {x: 0, y: 0, h: j};
        for (let i = 0; i < num / amountRays; i += 1) {
            let a = 0.09 * cos(i * (1.55 - j) * 0.1) * 0.5;
            let l = 0.15 + sin(j * 1e10);
            p = ro(a, l, p.x, p.y, p.h);
            p.x += xOffset * 0.25;
            p.y += yOffset * 0.25;
            vertices.push(p.x * 0.35 * 1.5 * 0.05, p.y * 0.8 * 0.05, 0.0);
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
            x: x + cos(h + a) * l,
            y: y + sin(h + a) * l,
            h: h + a
        };
    }
    let amountRays = 120;
    let rayInc = Math.PI * 2 / amountRays;
    for (let j = 0; j < Math.PI * 2; j += rayInc) {
        let p = {x: 0, y: 0, h: j};
        for (let i = 0; i < num / amountRays; i += 1) {
            let a = 0.09 * cos(j + i * (1.55 - j) * 0.1) * 0.5;
            let l = 0.15 + sin(j * 1e13);
            p = ro(a, l, p.x, p.y, p.h);
            p.x += xOffset * 0.25;
            p.y += yOffset * 0.25;
            vertices.push(p.x * 0.35 * 1.5 * 0.05, p.y * 0.8 * 0.05, 0.0);
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
            let a = 0.09 * cos((j - sj) + i * (3.55 - (j - sj)) * 0.05) * 0.5;
            let l = 0.15 + sin((j - sj) * 1e13);
            p = ro(a, l, p.x, p.y, p.h);
            p.x += xOffset * 0.25;
            p.y += yOffset * 0.25;
            vertices.push(p.x * 0.35 * 1.5 * 0.05, p.y * 0.8 * 0.05, 0.0);
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
drawCount = 1;
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
            x: x + cos(h + a) * l,
            y: y + sin(h + a) * l,
            h: h + a
        };
    }
    let amountRays = 120;
    let sj = (10 - t) * 1000000;
    let rayInc = Math.PI * 2 / amountRays;
    for (let j = sj; j < (Math.PI * 2 + sj); j += rayInc) {
        let p = {x: 0, y: 0, h: j};
        for (let i = 0; i < num / amountRays; i += 1) {
            let a = 0.09 * cos((j - sj) + i * (3.55 - (j - sj)) * 0.05) * 0.5;
            let l = 0.15 + sin((j - sj) * 1e6);
            p = ro(a, l, p.x, p.y, p.h);
            p.x += xOffset * 0.25;
            p.y += yOffset * 0.25;
            vertices.push(p.x * 0.35 * 1.5 * 0.05, p.y * 0.8 * 0.05, 0.0);
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
drawCount = 1;
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
            x: x + cos(h + a) * l,
            y: y + sin(h + a) * l,
            h: h + a
        };
    }
    let amountRays = 120;
    let sj = (10 - t) * 1000000;
    let rayInc = Math.PI * 2 / amountRays;
    for (let j = sj; j < (Math.PI * 2 + sj); j += rayInc) {
        let p = {x: 0, y: 0, h: j};
        for (let i = 0; i < num / amountRays; i += 1) {
            let a = 0.09 * cos((j - sj) + i * (3.55 - (j - sj)) * 0.035) * 0.5;
            let l = 0.15 + sin((j - sj) * 1e6);
            p = ro(a, l, p.x, p.y, p.h + sin(i * 1e1) * map(i, 0, num / amountRays, 0, 9));
            p.x += xOffset * 0.25;
            p.y += yOffset * 0.25;
            vertices.push(p.x * 0.35 * 1.5 * 0.045, p.y * 0.8 * 0.045, 0.0);
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
drawCount = 1;
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
            x: x + cos(h + a) * l,
            y: y + sin(h + a) * l,
            h: h + a
        };
    }
    let amountRays = 120;
    let sj = (10 - t) * 1000000;
    let rayInc = Math.PI * 2 / amountRays;
    for (let j = sj; j < (Math.PI * 2 + sj); j += rayInc) {
        let p = {x: 0, y: 0, h: j};
        for (let i = 0; i < num / amountRays; i += 1) {
            let a = 0.09 * cos((j - sj) + i * (3.55 - (j - sj)) * 0.035) * 0.5;
            let l = 0.15 + sin((j - sj) * 1e6);
            p = ro(a, l, p.x, p.y, p.h + sin(i * 1e1) * map(i, 0, num / amountRays, 0, 19));
            p.x += xOffset * 0.25;
            p.y += yOffset * 0.25;
            vertices.push(p.x * 0.35 * 1.5 * 0.045, p.y * 0.8 * 0.045, 0.0);
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
drawCount = 1;
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
            x: x + cos(h + a) * l,
            y: y + sin(h + a) * l,
            h: h + a
        };
    }
    let amountRays = 120;
    let sj = (10 - t) * 1000000;
    let rayInc = Math.PI * 2 / amountRays;
    for (let j = sj; j < (Math.PI * 2 + sj); j += rayInc) {
        let p = {x: 0, y: 0, h: j};
        for (let i = 0; i < num / amountRays; i += 1) {
            let a = 0.09 * cos((j - sj) + i * (3.55 - (j - sj)) * 0.035) * 0.5;
            let l = 0.15 + sin((j - sj) * 1e8 * sin(t * 1.5e-3));
            p = ro(a, l, p.x, p.y, p.h + sin(i * 1e1) * map(i, 0, num / amountRays, 0, 9));
            p.x += xOffset * 0.25;
            p.y += yOffset * 0.25;
            vertices.push(p.x * 0.35 * 1.5 * 0.045, p.y * 0.8 * 0.045, 0.0);
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
drawCount = 1;
drawDots = function() {
    vertices = [];
    let xOffset = (noise(frameCount * 0.0025) - 0.5) * 0.9;
    let yOffset = (noise((frameCount + 100) * 0.0025) - 0.5) * 0.9;
    let t = drawCount * 0.000005 + 2;
    let fx = 1;
    let fy = 1;
    let x = 0;
    let y = 0;
    let num = 42000;
    function ro(a, l, x, y, h) {
        return {
            x: x + cos(h + a) * l,
            y: y + sin(h + a) * l,
            h: h + a
        };
    }
    let amountRays = 120;
    let sj = (10 - t) * 1000000;
    sj = 0;
    let numV = 0;
    let rayInc = Math.PI * 2 / amountRays;
    let metaV = [];
    let indMetaV = 0;
    for (let j = sj; j < (Math.PI * 2 + sj); j += rayInc) {
        let p = {x: 0, y: 0, h: j};
        metaV[indMetaV] = [];
        for (let i = 0; i < 250; i += 1) {
            let a = 0.049 * cos((0.0055 - (j - sj)) * 2) * 0.5 * sin(t * 2e6);
            let l = 0.15;
            p = ro(a, l, p.x, p.y, p.h);
            p.x += xOffset * 0.25;
            p.y += yOffset * 0.25;
            metaV[indMetaV].push(p.x * 0.35 * 1.5 * 0.045, p.y * 0.8 * 0.045, 0.0);
            numV += 1;
            
        }
        indMetaV++;
    }
    let flatV = [];
//     for (let i = 0; i < metaV.length; i++) {
        for (let j = 0; j < metaV[0].length; j += 3) {
            for (let i = 0; i < metaV.length; i++) {
            flatV.push(metaV[i][j], metaV[i][j + 1], metaV[i][j + 2]);
        }
        }
    vertices = flatV;
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
}


// Superbe hiver javaScript
drawCount = 0;
drawDots = function() {
    vertices = [];
    let xOffset = (noise(frameCount * 0.0025) - 0.5) * 0.9;
    let yOffset = (noise((frameCount + 100) * 0.0025) - 0.5) * 0.9;
    let t = drawCount * 0.000005 + 2;
    let fx = 1;
    let fy = 1;
    let x = 0;
    let y = 0;
    let num = 42000;
    function ro(a, l, x, y, h) {
        return {
            x: x + cos(h + a) * l,
            y: y + sin(h + a) * l,
            h: h + a
        };
    }
    let amountRays = 120;
    let sj = (1 - t) * 10.2;
//     sj = 0;
    let numV = 0;
    let rayInc = Math.PI * 2 / amountRays;
    let metaV = [];
    let indMetaV = 0;
    for (let j = sj; j < (Math.PI * 2 + sj); j += rayInc) {
        let p = {x: 0, y: 0, h: j};
        metaV[indMetaV] = [];
        for (let i = 0; i < 250; i += 1) {
            let a = 0.1 * cos((j - sj) * 2);
            let l = 1;
            p = ro(a, l, p.x, p.y, p.h);
            p.x += xOffset * 0.00025;
            p.y += yOffset * 0.00025;
            metaV[indMetaV].push(p.x * 0.35 * 1.5 * 0.1, p.y * 0.8 * 0.1, 0.0);
            numV += 1;
            
        }
        indMetaV++;
    }
    let flatV = [];
//     for (let i = 0; i < metaV.length; i++) {
        for (let j = 0; j < metaV[0].length; j += 3) {
            for (let i = 0; i < metaV.length; i++) {
            flatV.push(metaV[i][j], metaV[i][j + 1], metaV[i][j + 2]);
        }
        }
    vertices = flatV;
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
}




// Superbe hiver javaScript
drawCount = 0;
drawDots = function() {
    vertices = [];
    let xOffset = (noise(frameCount * 0.0025) - 0.5) * 0.9;
    let yOffset = (noise((frameCount + 100) * 0.0025) - 0.5) * 0.9;
    let t = drawCount * 0.000005 + 2;
    let fx = 1;
    let fy = 1;
    let x = 0;
    let y = 0;
    let num = 42000;
    function ro(a, l, x, y, h) {
        return {
            x: x + cos(h + a) * l,
            y: y + sin(h + a) * l,
            h: h + a
        };
    }
    let amountRays = 120;
    let sj = (1 - t) * 10.2;
//     sj = 0;
    let numV = 0;
    let rayInc = Math.PI * 2 / amountRays;
    let metaV = [];
    let indMetaV = 0;
    for (let j = sj; j < (Math.PI * 2 + sj); j += rayInc) {
        let p = {x: 0, y: 0, h: j};
        metaV[indMetaV] = [];
        for (let i = 0; i < 250; i += 1) {
            let a = 0.1 * cos((j - sj) * 2);
            let l = 1;
            p = ro(a, l, p.x + sin(p.x * 3 * sin(t * 100000)), p.y + sin(p.y * 3 * sin(t * 100000)), p.h);
            p.x += xOffset * 0.00025;
            p.y += yOffset * 0.00025;
            metaV[indMetaV].push(p.x * 0.35 * 1.5 * 0.25, p.y * 0.8 * 0.25, 0.0);
            numV += 1;
            
        }
        indMetaV++;
    }
    let flatV = [];
//     for (let i = 0; i < metaV.length; i++) {
        for (let j = 0; j < metaV[0].length; j += 3) {
            for (let i = 0; i < metaV.length; i++) {
            flatV.push(metaV[i][j], metaV[i][j + 1], metaV[i][j + 2]);
        }
        }
    vertices = flatV;
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
}






// Superbe hiver javaScript
// Very strange grid
drawCount = 2;
drawDots = function() {
    vertices = [];
    let xOffset = (noise(frameCount * 0.0025) - 0.5) * 0.9;
    let yOffset = (noise((frameCount + 100) * 0.0025) - 0.5) * 0.9;
    let t = drawCount * 0.000005 + 2;
    let fx = 1;
    let fy = 1;
    let x = 0;
    let y = 0;
    let num = 42000;
    function ro(a, l, x, y, h) {
        return {
            x: x + cos(h + a) * l,
            y: y + sin(h + a) * l,
            h: h + a
        };
    }
    let amountRays = 120;
    let sj = (1 - t) * 10.2;
//     sj = 0;
    let numV = 0;
    let rayInc = Math.PI * 2 / amountRays;
    let metaV = [];
    let indMetaV = 0;
    for (let j = sj; j < (Math.PI * 2 + sj); j += rayInc) {
        let p = {x: 0, y: 0, h: j};
        metaV[indMetaV] = [];
        for (let i = 0; i < 250; i += 1) {
            let a = 1 * cos((j - sj) * 0.01);
            let l = 0.25 + i * 0.005;
            p = ro(a, l, p.x + sin(p.x * 2 * sin(t * 100000)), p.y + sin(p.y * 2 * sin(t * 100000)), p.h);
            p.x += xOffset * 0.00025;
            p.y += yOffset * 0.00025;
            metaV[indMetaV].push(p.x * 0.35 * 1.5 * 0.25, p.y * 0.8 * 0.25, 0.0);
            numV += 1;
            
        }
        indMetaV++;
    }
    let flatV = [];
//     for (let i = 0; i < metaV.length; i++) {
        for (let j = 0; j < metaV[0].length; j += 3) {
            for (let i = 0; i < metaV.length; i++) {
            flatV.push(metaV[i][j], metaV[i][j + 1], metaV[i][j + 2]);
        }
        }
    vertices = flatV;
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
}



// Superbe hiver javaScript
// Very strange grid
drawCount = 2;
drawDots = function() {
    vertices = [];
    let xOffset = (noise(frameCount * 0.0025) - 0.5) * 0.9;
    let yOffset = (noise((frameCount + 100) * 0.0025) - 0.5) * 0.9;
    let t = drawCount * 0.000005 + 2;
    let fx = 1;
    let fy = 1;
    let x = 0;
    let y = 0;
    let num = 42000;
    function ro(a, l, x, y, h) {
        return {
            x: x + cos(h + a) * l,
            y: y + sin(h + a) * l,
            h: h + a
        };
    }
    let amountRays = 120;
    let sj = (1 - t) * 10.2;
//     sj = 0;
    let numV = 0;
    let rayInc = Math.PI * 2 / amountRays;
    let metaV = [];
    let indMetaV = 0;
    for (let j = sj; j < (Math.PI * 2 + sj); j += rayInc) {
        let p = {x: 0, y: 0, h: j};
        metaV[indMetaV] = [];
        for (let i = 0; i < 250; i += 1) {
            let a = 2 * cos((j - sj) * 0.0135 * sin(t * 10000));
            let l = 0.125 + i * 0.005;
            p = ro(a, l, p.x + sin(p.x * 2 * sin(t * 100000)), p.y + sin(p.y * 2 * sin(t * 100000)), p.h);
            p.x += xOffset * 0.00025;
            p.y += yOffset * 0.00025;
            metaV[indMetaV].push(p.x * 0.35 * 1.5 * 0.25, p.y * 0.8 * 0.25, 0.0);
            numV += 1;
            
        }
        indMetaV++;
    }
    let flatV = [];
//     for (let i = 0; i < metaV.length; i++) {
        for (let j = 0; j < metaV[0].length; j += 3) {
            for (let i = 0; i < metaV.length; i++) {
            flatV.push(metaV[i][j], metaV[i][j + 1], metaV[i][j + 2]);
        }
        }
    vertices = flatV;
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
}



// Superbe hiver javaScript
// Very strange grid
drawCount = 2;
drawDots = function() {
    vertices = [];
    let xOffset = (noise(frameCount * 0.0025) - 0.5) * 0.9;
    let yOffset = (noise((frameCount + 100) * 0.0025) - 0.5) * 0.9;
    let t = drawCount * 0.000005 + 2;
    let fx = 1;
    let fy = 1;
    let x = 0;
    let y = 0;
    let num = 42000;
    function ro(a, l, x, y, h) {
        return {
            x: x + cos(h + a) * l,
            y: y + sin(h + a) * l,
            h: h + a
        };
    }
    let amountRays = 120;
    let sj = (1 - t) * 10.2;
//     sj = 0;
    let numV = 0;
    let rayInc = Math.PI * 2 / amountRays;
    let metaV = [];
    let indMetaV = 0;
    for (let j = sj; j < (Math.PI * 2 + sj); j += rayInc) {
        let p = {x: 0, y: 0, h: j};
        metaV[indMetaV] = [];
        for (let i = 0; i < 250; i += 1) {
            let a = 2 * cos((j - sj) * 0.135 * cos(t * 1e6));
            let l = 0.5 + i * 0.0125;
            p = ro(a, l, p.x + sin(p.x * 1), p.y + sin(p.y * 1), p.h);
            p.x += xOffset * 0.00025;
            p.y += yOffset * 0.00025;
            metaV[indMetaV].push(p.x * 0.35 * 1.5 * 0.25, p.y * 0.8 * 0.25, 0.0);
            numV += 1;
            
        }
        indMetaV++;
    }
    let flatV = [];
//     for (let i = 0; i < metaV.length; i++) {
        for (let j = 0; j < metaV[0].length; j += 3) {
            for (let i = 0; i < metaV.length; i++) {
            flatV.push(metaV[i][j], metaV[i][j + 1], metaV[i][j + 2]);
        }
        }
    vertices = flatV;
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
}



// Superbe hiver javaScript
// Very strange grid
drawCount = 2;
drawDots = function() {
    vertices = [];
    let xOffset = (noise(frameCount * 0.0025) - 0.5) * 0.9;
    let yOffset = (noise((frameCount + 100) * 0.0025) - 0.5) * 0.9;
    let t = drawCount * 0.000005 + 2;
    let fx = 1;
    let fy = 1;
    let x = 0;
    let y = 0;
    let num = 42000;
    function ro(a, l, x, y, h) {
        return {
            x: x + cos(h + a + x * 0.125) * l,
            y: y + sin(h + a + x * 0.125) * l,
            h: h + a
        };
    }
    let amountRays = 120;
    let sj = (1 - t) * 10.2;
//     sj = 0;
    let numV = 0;
    let rayInc = Math.PI * 2 / amountRays;
    let metaV = [];
    let indMetaV = 0;
    for (let j = sj; j < (Math.PI * 2 + sj); j += rayInc) {
        let p = {x: 0, y: 0, h: j};
        metaV[indMetaV] = [];
        for (let i = 0; i < 250; i += 1) {
            let a = 2 * cos((j - sj) * 0.05 * cos(t * 1e6));
            let l = 0.5 + i * 0.0125;
            p = ro(a, l, p.x + sin(p.x) * 0.5, p.y + sin(p.y) * 0.5, p.h);
            p.x += xOffset * 0.00025;
            p.y += yOffset * 0.00025;
            metaV[indMetaV].push(p.x * 0.35 * 1.5 * 0.25, p.y * 0.8 * 0.25, 0.0);
            numV += 1;
        }
        indMetaV++;
    }
    let flatV = [];
    for (let j = 0; j < metaV[0].length; j += 3) {
        for (let i = 0; i < metaV.length; i++) {
            flatV.push(metaV[i][j], metaV[i][j + 1], metaV[i][j + 2]);
        }
    }
    vertices = flatV;
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
}



// Superbe hiver javaScript
// Very strange grid
drawCount = 2;
drawDots = function() {
    vertices = [];
    let xOffset = (noise(frameCount * 0.0025) - 0.5) * 0.9;
    let yOffset = (noise((frameCount + 100) * 0.0025) - 0.5) * 0.9;
    let t = drawCount * 0.000005 + 2;
    let fx = 1;
    let fy = 1;
    let x = 0;
    let y = 0;
    let num = 42000;
    function ro(a, l, x, y, h) {
        return {
            x: x + cos(h + a + x * 0.125) * l,
            y: y + sin(h + a + y * 0.125) * l,
            h: h + a
        };
    }
    let amountRays = 120;
    let sj = (1 - t) * 10.2;
//     sj = 0;
    let numV = 0;
    let rayInc = Math.PI * 2 / amountRays;
    let metaV = [];
    let indMetaV = 0;
    for (let j = sj; j < (Math.PI * 2 + sj); j += rayInc) {
        let p = {x: 0, y: 0, h: j};
        metaV[indMetaV] = [];
        for (let i = 0; i < 250; i += 1) {
            let a = 2 * cos((j - sj) * 0.05 * cos(t * 1e6));
            let l = 0.5 + i * 0.0125;
            p = ro(a, l, p.x + sin(p.x) * 0.5, p.y + sin(p.y) * 0.5, p.h);
            p.x += xOffset * 0.00025;
            p.y += yOffset * 0.00025;
            metaV[indMetaV].push(p.x * 0.35 * 1.5 * 0.25 + 0.3, p.y * 0.8 * 0.25, 0.0);
            numV += 1;
        }
        indMetaV++;
    }
    let flatV = [];
    for (let j = 0; j < metaV[0].length; j += 3) {
        for (let i = 0; i < metaV.length; i++) {
            flatV.push(metaV[i][j], metaV[i][j + 1], metaV[i][j + 2]);
        }
    }
    vertices = flatV;
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
}


// Superbe hiver javaScript
// Very strange grid
drawCount = 2;
drawDots = function() {
    vertices = [];
    let xOffset = (noise(frameCount * 0.0025) - 0.5) * 0.9;
    let yOffset = (noise((frameCount + 100) * 0.0025) - 0.5) * 0.9;
    let t = drawCount * 0.000005 + 2;
    let fx = 1;
    let fy = 1;
    let x = 0;
    let y = 0;
    let num = 42000;
    function ro(a, l, x, y, h) {
        return {
            x: x + cos(h + a + x * 0.125) * l,
            y: y + sin(h + a + y * 0.125) * l,
            h: h + a
        };
    }
    let amountRays = 120;
    let sj = (1 - t) * 10.2;
//     sj = 0;
    let numV = 0;
    let rayInc = Math.PI * 2 / amountRays;
    let metaV = [];
    let indMetaV = 0;
    for (let j = sj; j < (Math.PI * 2 + sj); j += rayInc) {
        let p = {x: 0, y: 0, h: j};
        metaV[indMetaV] = [];
        for (let i = 0; i < 350; i += 1) {
            let a = 2 * cos((j - sj) * 0.05 * cos(t * 1e6));
            let l = 0.25 + i * 0.0125 + j * 0.1;
            p = ro(a, l, p.x + sin(p.x * 1.2) * 1.125, p.y + sin(p.y * 1.2) * 1.125, p.h);
            p.x += xOffset * 0.25;
            p.y += yOffset * 0.25;
            metaV[indMetaV].push(p.x * 0.35 * 1.5 * 0.25 + 0., p.y * 0.8 * 0.25, 0.0);
            numV += 1;
        }
        indMetaV++;
    }
    let flatV = [];
    for (let j = 0; j < metaV[0].length; j += 3) {
        for (let i = 0; i < metaV.length; i++) {
            flatV.push(metaV[i][j], metaV[i][j + 1], metaV[i][j + 2]);
        }
    }
    vertices = flatV;
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
}






// Superbe hiver javaScript
// Very strange grid
drawCount = 2;
drawDots = function() {
    vertices = [];
    let xOffset = (noise(frameCount * 0.0025) - 0.5) * 0.9;
    let yOffset = (noise((frameCount + 100) * 0.0025) - 0.5) * 0.9;
    let t = drawCount * 0.000005 + 2;
    let fx = 1;
    let fy = 1;
    let x = 0;
    let y = 0;
    let num = 42000;
    function ro(a, l, x, y, h) {
        return {
            x: x + cos(h + a + x * 0.125) * l,
            y: y + sin(h + a + y * 0.125) * l,
            h: h + a
        };
    }
    let amountRays = 120;
    let sj = (1 - t) * 10.2;
//     sj = 0;
    let numV = 0;
    let rayInc = Math.PI * 2 / amountRays;
    let metaV = [];
    let indMetaV = 0;
    for (let j = sj; j < (Math.PI * 2 + sj); j += rayInc) {
        let p = {x: 0, y: 0, h: j};
        metaV[indMetaV] = [];
        for (let i = 0; i < 250; i += 1) {
            let a = 4;
            let l = 0.95;
            p = ro(a, l, sin(p.x * 0.69) * i * 0.025, sin(p.y * 0.69) * i * 0.025, p.h);
            p.x += xOffset * 0.25;
            p.y += yOffset * 0.25;
            metaV[indMetaV].push(p.x * 0.35 * 1.5 * 0.25 + 0., p.y * 0.8 * 0.25, 0.0);
            numV += 1;
        }
        indMetaV++;
    }
    let flatV = [];
    for (let j = 0; j < metaV[0].length; j += 3) {
        for (let i = 0; i < metaV.length; i++) {
            flatV.push(metaV[i][j], metaV[i][j + 1], metaV[i][j + 2]);
        }
    }
    vertices = flatV;
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
}




// Superbe hiver javaScript
// Very strange grid
drawCount = 2;
drawDots = function() {
    vertices = [];
    let xOffset = (noise(frameCount * 0.0025) - 0.5) * 0.9;
    let yOffset = (noise((frameCount + 100) * 0.0025) - 0.5) * 0.9;
    let t = drawCount * 0.000005 + 2;
    let fx = 1;
    let fy = 1;
    let x = 0;
    let y = 0;
    let num = 42000;
    function ro(a, l, x, y, h) {
        return {
            x: x + cos(h + a + x * 0.125) * l,
            y: y + sin(h + a + y * 0.125) * l,
            h: h + a
        };
    }
    let amountRays = 120;
    let sj = (1 - t) * 10.2;
//     sj = 0;
    let numV = 0;
    let rayInc = Math.PI * 2 / amountRays;
    let metaV = [];
    let indMetaV = 0;
    for (let j = sj; j < (Math.PI * 2 + sj); j += rayInc) {
        let p = {x: 0, y: 0, h: j};
        metaV[indMetaV] = [];
        for (let i = 0; i < 250; i += 1) {
            let a = 4 + cos(j * 1e8) * 0.015;
            let l = 0.8;
            p = ro(a, l, sin(p.x * 0.49) * i * 0.025, sin(p.y * 0.49) * i * 0.025, p.h);
            p.x += xOffset * 0.25;
            p.y += yOffset * 0.25;
            metaV[indMetaV].push(p.x * 0.35 * 1.5 * 0.25 + 0., p.y * 0.8 * 0.25, 0.0);
            numV += 1;
        }
        indMetaV++;
    }
    let flatV = [];
    for (let j = 0; j < metaV[0].length; j += 3) {
        for (let i = 0; i < metaV.length; i++) {
            flatV.push(metaV[i][j], metaV[i][j + 1], metaV[i][j + 2]);
        }
    }
    vertices = flatV;
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
}




// Superbe hiver javaScript
// with the dots sorted out
drawCount = 1;
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
            x: x + Math.cos(h + a) * l,
            y: y + Math.sin(h + a) * l,
            h: h + a
        };
    }
    let amountRays = 120;
    let sj = (10 - t) * 1000000;
    let rayInc = Math.PI * 2 / amountRays;
    let numV = 0;
    let metaV = [];
    let indMetaV = 0;
    for (let j = sj; j < (Math.PI * 2 + sj); j += rayInc) {
        let p = {x: 0, y: 0, h: j};
        metaV[indMetaV] = [];
        for (let i = 0; i < num / amountRays; i += 1) {
            let a = 0.09 * Math.cos((j - sj) + i * (3.55 - (j - sj)) * 0.035) * 0.5;
            let l = 0.15 + Math.sin((j - sj) * 1e6);
            p = ro(a, l, p.x, p.y, p.h + sin(i * 1e1) * map(i, 0, num / amountRays, 0, 9));
            p.x += xOffset * 0.25;
            p.y += yOffset * 0.25;
            metaV[indMetaV].push(p.x * 0.35 * 1.5 * 0.045, p.y * 0.8 * 0.045, 0.0);
            numV += 1;
        }
        indMetaV++;
    }
    let flatV = [];
    for (let j = 0; j < metaV[0].length; j += 3) {
        for (let i = 0; i < metaV.length; i++) {
            flatV.push(metaV[i][j], metaV[i][j + 1], metaV[i][j + 2]);
        }
    }
    vertices = flatV;
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
// Aspirateur troublant
drawCount = 2;
drawDots = function() {
    vertices = [];
    let xOffset = (noise(frameCount * 0.0025) - 0.5) * 0.9;
    let yOffset = (noise((frameCount + 100) * 0.0025) - 0.5) * 0.9;
    let t = drawCount * 0.000005 + 2;
    let fx = 1;
    let fy = 1;
    let x = 0;
    let y = 0;
    let num = 42000;
    function ro(a, l, x, y, h) {
        return {
            x: x + cos(h + a + x * 0.125) * l,
            y: y + sin(h + a + y * 0.125) * l,
            h: h + a
        };
    }
    let amountRays = 120;
    let sj = (1 - t) * 10.2;
//     sj = 0;
    let numV = 0;
    let rayInc = Math.PI * 2 / amountRays;
    let metaV = [];
    let indMetaV = 0;
    for (let j = sj; j < (Math.PI * 2 + sj); j += rayInc) {
        let p = {x: 0, y: 0, h: j};
        metaV[indMetaV] = [];
        for (let i = 0; i < 150; i += 1) {
            let a = 3;
            let l = 0.95;
            let npx = sin(p.x * 0.69) * i * 0.025;
            let npy = sin(p.y * 0.69) * i * 0.025;
            p = ro(a, l, npx, npy, p.h);
            p.x += xOffset * 0.125;
            p.y += yOffset * 0.125;
            metaV[indMetaV].push(p.x * 0.35 * 1.5 * 0.25 + 0., p.y * 0.8 * 0.25, 0.0);
            numV += 1;
        }
        indMetaV++;
    }
    let flatV = [];
    for (let j = 0; j < metaV[0].length; j += 3) {
        for (let i = 0; i < metaV.length; i++) {
            flatV.push(metaV[i][j], metaV[i][j + 1], metaV[i][j + 2]);
        }
    }
    vertices = flatV;
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
}




// Superbe hiver javaScript
// Aspirateur troublant
drawCount = 2;
drawDots = function() {
    vertices = [];
    let xOffset = (noise(frameCount * 0.0025) - 0.5) * 0.9;
    let yOffset = (noise((frameCount + 100) * 0.0025) - 0.5) * 0.9;
    let t = drawCount * 0.0005 + 2;
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
    let metaV = [];
    let indMetaV = 0;
    for (let j = sj; j < (Math.PI * 2 + sj); j += rayInc) {
        let p = {x: 0, y: 0, h: j};
        metaV[indMetaV] = [];
        for (let i = 0; i < 150; i += 1) {
            let a = 2;
            let l = 0.95;
            let npx = sin(p.x * 0.69) * i * 0.025;
            let npy = sin(p.y * 0.69) * i * 0.025;
            p = ro(a, l, npx, npy, p.h);
            p.x += xOffset * 0.25;
            p.y += yOffset * 0.25;
            metaV[indMetaV].push(p.x * 0.35 * 1.5 * 0.25 + 0., p.y * 0.8 * 0.25, 0.0);
            numV += 1;
        }
        indMetaV++;
    }
    let flatV = [];
    for (let j = 0; j < metaV[0].length; j += 3) {
        for (let i = 0; i < metaV.length; i++) {
            flatV.push(metaV[i][j], metaV[i][j + 1], metaV[i][j + 2]);
        }
    }
    vertices = flatV;
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
}





// Superbe hiver javaScript
// Aspirateur troublant
drawCount = 2;
drawDots = function() {
    vertices = [];
    let xOffset = (noise(frameCount * 0.0025) - 0.5) * 0.9;
    let yOffset = (noise((frameCount + 100) * 0.0025) - 0.5) * 0.9;
    let t = drawCount * 0.0005 + 2;
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
    let metaV = [];
    let indMetaV = 0;
    for (let j = sj; j < (Math.PI * 2 + sj); j += rayInc) {
        let p = {x: 0, y: 0, h: j};
        metaV[indMetaV] = [];
        for (let i = 0; i < 160; i += 1) {
            let a = 2;
            let l = 0.95;
            let npx = sin(p.x * 0.69) * cos(p.y * 0.69 * 0.25) * i * 0.025;
            let npy = sin(p.y * 0.69) * cos(p.x * 0.69 * 0.25) * i * 0.025;
            p = ro(a, l, npx, npy, p.h);
            p.x += xOffset * 0.25;
            p.y += yOffset * 0.25;
            metaV[indMetaV].push(p.x * 0.35 * 1.5 * 0.25 + 0., p.y * 0.8 * 0.25, 0.0);
            numV += 1;
        }
        indMetaV++;
    }
    let flatV = [];
    for (let j = 0; j < metaV[0].length; j += 3) {
        for (let i = 0; i < metaV.length; i++) {
            flatV.push(metaV[i][j], metaV[i][j + 1], metaV[i][j + 2]);
        }
    }
    vertices = flatV;
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
}






// Superbe hiver javaScript
// Aspirateur troublant
drawCount = 2;
drawDots = function() {
    vertices = [];
    let xOffset = (noise(drawCount * 15) - 0.5) * 0.9;
    let yOffset = (noise((drawCount + 100) * 15) - 0.5) * 0.9;
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
    let metaV = [];
    let indMetaV = 0;
    for (let j = sj; j < (Math.PI * 2 + sj); j += rayInc) {
        let p = {x: 0, y: 0, h: j};
        metaV[indMetaV] = [];
        for (let i = 0; i < 160; i += 1) {
            let a = 2;
            let l = 0.95;
            let npx = sin(sin(t * 0.00001) + p.x * 0.69) * cos(sin(t * 0.00001) + p.y * 0.69 * 0.25) * i * 0.025;
            let npy = sin(sin(t * 0.00001) + p.y * 0.69) * cos(sin(t * 0.00001) + p.x * 0.69 * 0.25) * i * 0.025;
            p = ro(a, l, npx, npy, p.h);
            p.x += xOffset * 0.25;
            p.y += yOffset * 0.25;
            metaV[indMetaV].push(p.x * 0.35 * 1.5 * 0.25 + 0., p.y * 0.8 * 0.25, 0.0);
            numV += 1;
        }
        indMetaV++;
    }
    let flatV = [];
    for (let j = 0; j < metaV[0].length; j += 3) {
        for (let i = 0; i < metaV.length; i++) {
            flatV.push(metaV[i][j], metaV[i][j + 1], metaV[i][j + 2]);
        }
    }
    vertices = flatV;
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
}



// Superbe hiver javaScript
// Aspirateur troublant
drawCount = 2;
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
    let metaV = [];
    let indMetaV = 0;
    for (let j = sj; j < (Math.PI * 2 + sj); j += rayInc) {
        let p = {x: 0, y: 0, h: j};
        metaV[indMetaV] = [];
        for (let i = 0; i < 160; i += 1) {
            let a = 2;
            let l = 0.95;
            let npx = sin(sin(t * 0.00001) + p.x * 0.69) * cos(sin(t * 0.00001) + p.y * 0.69 * 0.25) * i * 0.025;
            let npy = sin(sin(t * 0.00001) + p.y * 0.69) * cos(sin(t * 0.00001) + p.x * 0.69 * 0.25) * i * 0.025;
            p = ro(a, l, npx, npy, p.h);
            p.x += xOffset;
            p.y += yOffset;
            metaV[indMetaV].push(p.x * 0.35 * 1.5 * 0.25 + 0., p.y * 0.8 * 0.25, 0.0);
            numV += 1;
        }
        indMetaV++;
    }
    let flatV = [];
    for (let j = 0; j < metaV[0].length; j += 3) {
        for (let i = 0; i < metaV.length; i++) {
            flatV.push(metaV[i][j], metaV[i][j + 1], metaV[i][j + 2]);
        }
    }
    vertices = flatV;
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
    let metaV = [];
    let indMetaV = 0;
    for (let j = sj; j < (Math.PI * 2 + sj); j += rayInc) {
        let p = {x: 0, y: 0, h: j};
        metaV[indMetaV] = [];
        for (let i = 0; i < 160; i += 1) {
            let a = 2;
            let l = 0.95;
            let npx = sin(sin(t * 0.00001) + p.x * 0.69) * cos(sin(t * 0.00001) + p.y * 0.69 * 0.25) * i * 0.025;
            let npy = sin(sin(t * 0.00001) + p.y * 0.69) * cos(sin(t * 0.00001) + p.x * 0.69 * 0.25) * i * 0.025;
            p = ro(a, l, npx, npy, p.h);
            p.x += xOffset * 0.75;
            p.y += yOffset * 0.75;
            let sc = map(i, 0, 20, 2.5, 1);
            sc = constrain(sc, 1, 2.5);
//             sc = 1;
            metaV[indMetaV].push(p.x * 0.35 * 1.5 * 0.25 * sc + 0., p.y * 0.8 * 0.25 * sc, 0.0);
            numV += 1;
        }
        indMetaV++;
    }
    let flatV = [];
    for (let j = 0; j < metaV[0].length; j += 3) {
        for (let i = 0; i < metaV.length; i++) {
            flatV.push(metaV[i][j], metaV[i][j + 1], metaV[i][j + 2]);
        }
    }
    vertices = flatV;
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