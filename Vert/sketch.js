let looping = true;
let keysActive = true;
let socket, cnvs, ctx, canvasDOM;
let fileName = "/Users/guillaumepelletier/Desktop/alligator";
let JSONs = [];
let maxFrames = 15000;
let gl;
let time;
let positive = true;
let intensity;
let drawCount = 1110;
drawCount = 125000;
let drawIncrement = 1;
let vertexBuffer;
let fvertices = [];
const seed = 10;
const openSimplex = openSimplexNoise(seed);
let mS = 1;
let amountOfScratches = 3;
let fluctuation = 1;
let namedPrograms = {};

// a shader variable
let texcoordShader;
let dotsVBuf, termVBuf, dotsCBuf, bgVBuf;
let texture, texture2, framebuf, framebuf2;
let vb;
let nx, ny;
fvertices = [];
for (let i = 0; i < 1000000; i++) {
    fvertices.push(i);
}
fvertices = new Float32Array(fvertices);

let resolutionScalar = 0.5;
let resolutionBG;

function setup() {
    socket = io.connect('http://localhost:8080');
    socket.on('pushJSONs', function(data) {
        JSONs = data;
        // draw();
    });
    socket.emit('pullJSONs', "/Users/guillaumepelletier/Desktop/Dropbox/Art/p5/Les-nouvelles-galaxies/Vert/sessions");
    // socket.on('receiveOSC', receiveOSC);
    // pixelDensity(1);
    // cnvs = createCanvas(windowWidth, windowWidth * 9 / 16, WEBGL);
    // canvasDOM = document.getElementById('defaultCanvas0');
    // noCanvas();
    // cnvs = document.getElementById('my_Canvas');
    // gl = canvas.getContext('webgl');
    // canvasDOM = document.getElementById('my_Canvas');
    // canvasDOM = document.getElementById('defaultCanvas0');
    // gl = canvasDOM.getContext('webgl');
    // gl = cnvs.drawingContext;

    pixelDensity(1);
    noCanvas();
    // cnvs = createCanvas(windowWidth, windowWidth * 9 / 16, WEBGL);
    // cnvs = createCanvas(1280, 1280 * 9 / 16, WEBGL);
    cnvs = document.createElement('canvas');

    cnvs.id = "defaultCanvas0";
    cnvs.width = 2560 * resolutionScalar;
    cnvs.height = 1440 * resolutionScalar;
    var body = document.getElementsByTagName("body")[0];
    body.appendChild(cnvs);
    canvasDOM = document.getElementById('defaultCanvas0');

    // noCanvas();
    // cnvs = document.getElementById('my_Canvas');
    // gl = canvas.getContext('webgl');
    gl = cnvs.getContext('webgl');





    // gl = canvasDOM.getContext('webgl', { premultipliedAlpha: false });



    // gl.colorMask(false, false, false, true);
    // gl.colorMask(false, false, false, true);

    // Clear the canvas
    gl.clearColor(0.0, 0.0, 0.0, 1.0);

    // Enable the depth test
    gl.enable(gl.DEPTH_TEST);
    gl.depthMask(false);

    // Clear the color buffer bit
    gl.clear(gl.COLOR_BUFFER_BIT);
    // gl.colorMask(true, true, true, true);
    // gl.clear(gl.COLOR_BUFFER_BIT);
    gl.enable(gl.BLEND);
    // gl.blendFunc(gl.SRC_ALPHA, gl.ONE_MINUS_SRC_ALPHA);
    // gl.blendFunc(gl.SRC_ALPHA, gl.ONE_MINUS_SRC_ALPHA);
    gl.blendFuncSeparate(gl.SRC_ALPHA, gl.ONE_MINUS_SRC_ALPHA, gl.ONE, gl.ONE_MINUS_SRC_ALPHA);
    // gl.blendFunc(gl.SRC_ALPHA, gl.DST_ALPHA);
    // gl.blendFunc(gl.SRC_ALPHA, gl.DST_ALPHA);
    // Set the view port
    gl.viewport(0, 0, cnvs.width, cnvs.height);
    frameRate(20);
    // background(0);
    // fill(255, 50);
    noStroke();
    vertex_buffer = gl.createBuffer();
    dotsVBuf = gl.createBuffer();
    bgVBuf = gl.createBuffer(); 
    dotsCBuf = gl.createBuffer();
    termVBuf = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, vertex_buffer);
    if (!looping) {
        noLoop();
    }
    shadersReadyToInitiate = true;
    initializeShaders();
    createWhiteDots();
    time = gl.getUniformLocation(getProgram("pulsar-fog"), "time");
    resolutionBG = gl.getUniformLocation(getProgram("pulsar-fog"), "resolution");
    texture = createTexture();
    framebuf = createFrameBuffer(texture);
    texture2 = createTexture();
    framebuf2 = createFrameBuffer(texture2);

    setTimeout( function() {
        // keysControl.style.cursor = 'none';
    keysControl.addEventListener("mouseenter", function(event) {
        document.body.style.cursor = "none";
        document.body.style.backgroundColor = "#000000";
    appControl.setAttribute("style", "display:none;");
    let tabs = document.querySelector("#file-tabs");
    tabs.setAttribute("style", "display:none;");
    // let slider = document.querySelector("#timeline-slider");
    // slider.setAttribute("style", "display:none;");
    // slider.style.display = "none";
    // canvasDOM.style.bottom = "0";
    cinemaMode = true;
    scdArea.style.display = "none";
    scdConsoleArea.style.display = "none";
    jsArea.style.display = "none";
    jsConsoleArea.style.display = "none";
}, false);
keysControl.addEventListener("mouseleave", function(event) {
    document.body.style.cursor = "default";
    document.body.style.backgroundColor = "#1C1C1C";
    appControl.setAttribute("style", "display:block;");
    let tabs = document.querySelector("#file-tabs");
    tabs.setAttribute("style", "display:block;");
    // let slider = document.querySelector("#timeline-slider");
    // slider.setAttribute("style", "display:block;");
    // slider.style.display = "block";
    // canvasDOM.style.bottom = null;
    if (displayMode === "both") {
        scdArea.style.display = "block";
        scdConsoleArea.style.display = "block";
        jsArea.style.display = "block";
        jsConsoleArea.style.display = "block";
    } else if (displayMode == "scd") {
        scdArea.style.display = "block";
        scdConsoleArea.style.display = "block";
    } else if (displayMode == "js") {
        jsArea.style.display = "block";
        jsConsoleArea.style.display = "block";
    }
    cinemaMode = false;
    clearSelection();
}, false);
}, 1);
}

function clearSelection() {
    if (window.getSelection) {window.getSelection().removeAllRanges();}
    else if (document.selection) {document.selection.empty();}
}

draw = function() {
    // We bind the framebuffer...
    bindFrameBuffer(texture, framebuf);
    gl.viewport(0, 0, cnvs.width, cnvs.height);
    gl.clear(gl.COLOR_BUFFER_BIT);
    // draw the scene, presumably on a framebuffer
    let currentProgram = getProgram("pulsar-fog");
    gl.useProgram(currentProgram);
    drawBG(currentProgram);
    currentProgram = getProgram("new-flickering-dots-vert");
    gl.useProgram(currentProgram);
    nx = openSimplex.noise2D(0, drawCount * 5e-2) * 0.02;
    ny = openSimplex.noise2D(0, drawCount * 5e-2 + 1e5) * 0.02;
    drawAlligatorQuietVert(currentProgram);
    currentProgram = getProgram("new-flickering-dots");
    gl.useProgram(currentProgram);
    drawAlligatorQuiet(currentProgram);
// 
// 
    currentProgram = getProgram("rounded-square");
    time = gl.getUniformLocation(currentProgram, "time"); 
    gl.useProgram(currentProgram);
    drawTerminal(currentProgram);
    // drawSwirl(currentProgram);
    // drawPulsar(currentProgram);
// 
    // vb = map(cos(frameCount * 0.01), -1, 1, 0, 4);
// 
    // // Here, the original image should be redrawned
    // // from "texture" to "texture2"
// 
    // let processProgram = getProgram("process");
    // // console.log(processProgram);
    // gl.useProgram(processProgram);
// 
// 
// 
    // let aspect = cnvs.width / cnvs.height;
    // let vertices = new Float32Array([-1, 1, 1, 1, 1, -1, // Triangle 1
    //     -1, 1, 1, -1, -1, -1 // Triangle 2
    // ]);
    // let vbuffer = gl.createBuffer();
    // gl.bindBuffer(gl.ARRAY_BUFFER, vbuffer);
    // gl.bufferData(gl.ARRAY_BUFFER, vertices, gl.STATIC_DRAW);
    // let itemSize = 2;
    // let numItems = vertices.length / itemSize;
    // processProgram.aVertexPosition = gl.getAttribLocation(processProgram, "a_position");
    // gl.enableVertexAttribArray(processProgram.aVertexPosition);
    // gl.vertexAttribPointer(processProgram.aVertexPosition, itemSize, gl.FLOAT, false, 0, 0);
// 
// 
// 
// 
    // var resolutionLocation = gl.getUniformLocation(processProgram, "u_resolution");
    // var textureSizeLocation = gl.getUniformLocation(processProgram, "u_textureSize");
    // var kernelLocation = gl.getUniformLocation(processProgram, "u_kernel[0]");
    // var kernelWeightLocation = gl.getUniformLocation(processProgram, "u_kernelWeight");
    // var flipYLocation = gl.getUniformLocation(processProgram, "u_flipY");
// 
    // var directionLocation = gl.getUniformLocation(processProgram, "direction");
// 
    // gl.bindFramebuffer(gl.FRAMEBUFFER, null);
    // bindFrameBuffer(texture2, framebuf2);
    // gl.viewport(0, 0, 1280, 720);
    // gl.bindTexture(gl.TEXTURE_2D, texture);
// 
    // let name = "myBlur";
    // gl.uniform2f(resolutionLocation, 1280, 720);
    // gl.uniform2f(textureSizeLocation, 1280, 720);
    // gl.uniform2f(directionLocation, 8 * vb, 0);
    // gl.uniform1f(flipYLocation, 1);
    // gl.uniform1fv(kernelLocation, kernels[name]);
    // gl.uniform1f(kernelWeightLocation, computeKernelWeight(kernels[name]));
// 
// 
// 
    // // shader.uniforms.direction = i % 2 === 0 ? [radius, 0] : [0, radius]
// 
// 
// 
    // var textureLocation = gl.getUniformLocation(processProgram, "u_texture");
    // gl.uniform1i(textureLocation, 0);
    // var texcoordLocation = gl.getAttribLocation(processProgram, "a_texcoord");
    // gl.enableVertexAttribArray(texcoordLocation);
// 
    // // Tell the position attribute how to get data out of positionBuffer (ARRAY_BUFFER)
    // var size = 2; // 2 components per iteration
    // var type = gl.FLOAT; // the data is 32bit floats
    // var normalize = false; // don't normalize the data
    // var stride = 0; // 0 = move forward size * sizeof(type) each iteration to get the next position
    // var offset = 0; // start at the beginning of the buffer
    // gl.vertexAttribPointer(texcoordLocation, size, type, normalize, stride, offset);
// 
// 
// 
// 
    // // Draw the rectangle.
    // gl.drawArrays(gl.TRIANGLES, 0, 6);
// 
// 
// 
    // gl.uniform2f(directionLocation, 0, 7 * vb);
// 
    // bindFrameBuffer(texture, framebuf);
    // gl.bindTexture(gl.TEXTURE_2D, texture2);
    // gl.drawArrays(gl.TRIANGLES, 0, 6);
// 
// 
    // gl.uniform2f(directionLocation, 6 * vb, 0);
// 
    // bindFrameBuffer(texture2, framebuf2);
    // gl.bindTexture(gl.TEXTURE_2D, texture);
    // gl.drawArrays(gl.TRIANGLES, 0, 6);
// 
// 
    // gl.uniform2f(directionLocation, 0, 5 * vb);
    // bindFrameBuffer(texture, framebuf);
    // gl.bindTexture(gl.TEXTURE_2D, texture2);
    // gl.drawArrays(gl.TRIANGLES, 0, 6);
// 
// 
    // gl.uniform2f(directionLocation, 4 * vb, 0);
    // bindFrameBuffer(texture2, framebuf2);
    // gl.bindTexture(gl.TEXTURE_2D, texture);
    // gl.drawArrays(gl.TRIANGLES, 0, 6);
// 
    // gl.uniform2f(directionLocation, 0, 3 * vb);
// 
    // bindFrameBuffer(texture, framebuf);
    // gl.bindTexture(gl.TEXTURE_2D, texture2);
    // gl.drawArrays(gl.TRIANGLES, 0, 6);
// 
// 
    // gl.uniform2f(directionLocation, 2 * vb, 0);
// 
    // bindFrameBuffer(texture2, framebuf2);
    // gl.bindTexture(gl.TEXTURE_2D, texture);
    // gl.drawArrays(gl.TRIANGLES, 0, 6);
// 
    // gl.uniform2f(directionLocation, 0, 1 * vb);
// 
    // bindFrameBuffer(texture, framebuf);
    // gl.bindTexture(gl.TEXTURE_2D, texture2);
    // gl.drawArrays(gl.TRIANGLES, 0, 6);
// 
    // gl.uniform2f(directionLocation, 1 * vb, 0);
// 
    // bindFrameBuffer(texture2, framebuf2);
    // gl.bindTexture(gl.TEXTURE_2D, texture);
    // gl.drawArrays(gl.TRIANGLES, 0, 6);
// 
// 
    // // bindFrameBuffer(texture, framebuf);
    // // gl.bindTexture(gl.TEXTURE_2D, texture2);
    // // gl.drawArrays(gl.TRIANGLES, 0, 6);
// 
    // // bindFrameBuffer(texture2, framebuf2);
    // // gl.bindTexture(gl.TEXTURE_2D, texture);
    // // gl.drawArrays(gl.TRIANGLES, 0, 6);
// 
// 
    // currentProgram = getProgram("new-flickering-dots");
    // gl.useProgram(currentProgram);
    // // drawAlligatorQuiet(currentProgram);
    // // drawSwirl(currentProgram);
    // drawPulsar(currentProgram);
// 
// 
    // unbind the buffer and draw the resulting texture....
    gl.bindFramebuffer(gl.FRAMEBUFFER, null);
    gl.viewport(0, 0, cnvs.width, cnvs.height);
// 
    gl.bindTexture(gl.TEXTURE_2D, texture);
// 
    gl.clearColor(0, 0, 0, 1); // clear to white
// 
    gl.clear(gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT);
// 
    var textureShader = getProgram("textu");
    gl.useProgram(textureShader);
// 
    aspect = cnvs.width / cnvs.height;
    let vertices = new Float32Array([-1, 1, 1, 1, 1, -1, // Triangle 1
        -1, 1, 1, -1, -1, -1 // Triangle 2
    ]);
    vbuffer = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, vbuffer);
    gl.bufferData(gl.ARRAY_BUFFER, vertices, gl.STATIC_DRAW);
    itemSize = 2;
    numItems = vertices.length / itemSize;
    textureShader.aVertexPosition = gl.getAttribLocation(textureShader, "a_position");
    gl.enableVertexAttribArray(textureShader.aVertexPosition);
    gl.vertexAttribPointer(textureShader.aVertexPosition, itemSize, gl.FLOAT, false, 0, 0);
// 
    var textureLocation = gl.getUniformLocation(textureShader, "u_texture");
    gl.uniform1i(textureLocation, 0);
    var timeLocation = gl.getUniformLocation(textureShader, "time");
    gl.uniform1f(timeLocation, frameCount * 0.01);
// 
    var scalar = gl.getUniformLocation(textureShader, "resolution");
    gl.uniform1f(scalar, resolutionScalar);
// 
    var texcoordLocation = gl.getAttribLocation(textureShader, "a_texcoord");
    gl.enableVertexAttribArray(texcoordLocation);
// 
    // Tell the position attribute how to get data out of positionBuffer (ARRAY_BUFFER)
    var size = 2; // 2 components per iteration
    var type = gl.FLOAT; // the data is 32bit floats
    var normalize = false; // don't normalize the data
    var stride = 0; // 0 = move forward size * sizeof(type) each iteration to get the next position
    var offset = 0; // start at the beginning of the buffer
    gl.vertexAttribPointer(texcoordLocation, size, type, normalize, stride, offset);
// 
    gl.drawArrays(gl.TRIANGLES, 0, numItems);
// 
    drawCount += drawIncrement;
    // if (exporting && frameCount < maxFrames && drawCount > 1113) {
    if (exporting && frameCount < maxFrames && drawCount > 1449) {
        frameExport();
    }
}

// function keyPressed() {
//     if (keysActive) {
//         if (keyCode === 32) {
//             if (looping) {
//                 noLoop();
//                 looping = false;
//             } else {
//                 loop();
//                 looping = true;
//             }
//         }
//         if (key == 'r' || key == 'R') {
//             window.location.reload();
//         }
//         if (key == 'm' || key == 'M') {
//             redraw();
//         }
//     }
// }


keyPressed = function() {
    if (keysActive) {
        // if (keyCode === 32) {
        //     if (looping) {
        //         noLoop();
        //         looping = false;
        //     } else {
        //         loop();
        //         looping = true;
        //     }
        // }
        // if (key == 'r' || key == 'R') {
        //     window.location.reload();
        // }
        // if (key == 'm' || key == 'M') {
        //     redraw();
        // }
        // if (key == 'a' || key == 'A') {
        //     logJavaScriptConsole("yur!");
        // }
        // logJavaScriptConsole(key);
    if (vtActive) {
                    // vt.update(event);
         // if (keyCode === 8) {
            // vt.update("delete");
             // // logJavaScriptConsole(event);
        // }  else {
            // vt.update(event);
        // }
                     // logJavaScriptConsole(event.key);
        // logJavaScriptConsole(event.shiftKey);
        // if (key == 'a' || key == 'A') {
            // vt.update("a");
            // logJavaScriptConsole(event.key);
        // }
        }
    }
}


tl = function(d = 0) {
    setTimeout(function() {
                if (looping) {
                noLoop();
                looping = false;
            } else {
                loop();
                looping = true;
            }
    }, d * 1e3);
};


keyDown = function() {
    if (keysActive) {
        if (vtActive) {
            vt.update(event);
            // ljs(event.keyCode);
        }
    }
}
document.onkeydown = keyDown;       




function setResolutionScalar(sc) {
    resolutionScalar = sc;
    cnvs.width = 2560 * resolutionScalar;
    cnvs.height = 1440 * resolutionScalar;
    texture = createTexture();
    framebuf = createFrameBuffer(texture);
    texture2 = createTexture();
    framebuf2 = createFrameBuffer(texture2);
    drawCount--;
    redraw();
}

function sr(sc) {
    setResolutionScalar(sc);
}