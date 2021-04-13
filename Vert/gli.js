 // bellement ondulant

  textureShader.fragText = `
// beginGLSL
precision mediump float;
// Passed in from the vertex shader.
uniform float time;
varying vec2 v_texcoord;
// The texture.
uniform sampler2D u_texture;
float rand(vec2 co){
    return fract(sin(dot(co.xy ,vec2(12.9898,78.233))) * 43758.5453 * (2.0 + sin(time)));
}
void main() {
    vec2 uv = vec2(gl_FragCoord.xy) / vec2(1600, 1600);
   float rando = rand(vec2(uv.x, uv.y));
    float t = time;
   // gl_FragColor = texture2D(u_texture, v_texcoord);
    gl_FragColor = texture2D(u_texture, v_texcoord);
   // gl_FragColor = vec4(1.0, 0.0, 0.0, 1.0);
   // gl_FragColor.r = gl_FragColor.r * 0.5;
   gl_FragColor.rgb = (gl_FragColor.rgb - (rando * 0.025)) * 1.5;
    gl_FragColor.rgb = gl_FragColor.rrr;
}
// endGLSL
`;
textureShader.init();


 // bellement ondulant

  textureShader.fragText = `
// beginGLSL
precision mediump float;
// Passed in from the vertex shader.
uniform float time;
varying vec2 v_texcoord;
// The texture.
uniform sampler2D u_texture;
float rand(vec2 co){
    return fract(sin(dot(co.xy ,vec2(12.9898,78.233))) * 43758.5453 * (2.0 + sin(time)));
}
void main() {
    vec2 uv = vec2(gl_FragCoord.xy) / vec2(1600, 1600);
   float rando = rand(vec2(uv.x, uv.y));
    float t = time;
   // gl_FragColor = texture2D(u_texture, v_texcoord);
    gl_FragColor = texture2D(u_texture, v_texcoord + (pow(cos(uv.y * uv.x * 1e18), 0.0125) + sin(uv.x * 1e2 + tan(uv.y * t * 1e10))) * 2e-3 * floor(sin(uv.y * 1e2 * sin(uv.y * 1000. * (sin(uv.y * 1e2))))) * 1. + sin(uv.y * 1e-1 + uv.y * 1e6 * sin(t * 1e-10) + tan(t * 1e-10)) * 0.0625 * 4e-1);
   // gl_FragColor = vec4(1.0, 0.0, 0.0, 1.0);
   // gl_FragColor.r = gl_FragColor.r * 0.5;
   gl_FragColor.rgb = (gl_FragColor.rgb - (rando * 0.025)) * 1.5;
        gl_FragColor.rgb = gl_FragColor.rrr * 1.;
}
// endGLSL
`;
textureShader.init();


  textureShader.fragText = `
// beginGLSL
precision mediump float;
// Passed in from the vertex shader.
uniform float time;
varying vec2 v_texcoord;
// The texture.
uniform sampler2D u_texture;
float rand(vec2 co){
    return fract(sin(dot(co.xy ,vec2(12.9898,78.233))) * 43758.5453 * (2.0 + sin(time)));
}
void main() {
    vec2 uv = vec2(gl_FragCoord.xy) / vec2(1600, 1600);
   float rando = rand(vec2(uv.x, uv.y));
    float t = time * 1e2;
   // gl_FragColor = texture2D(u_texture, v_texcoord);
    gl_FragColor = texture2D(u_texture, v_texcoord + (pow(cos(uv.y * uv.x * 1e18), 0.0125) + sin(uv.x * 1e-2 + tan(uv.y * t * 1e10))) * 2e-1 * floor(sin(uv.y * 1e2 * sin(t * 1. * (sin(t * 1e-2))))) * 1. + sin(uv.y * 1e4 + uv.y * 1e6 * sin(t * 1e-10) + tan(t * 1e-10)) * 0.0625 * 1e-3);
   // gl_FragColor = vec4(1.0, 0.0, 0.0, 1.0);
   // gl_FragColor.r = gl_FragColor.r * 0.5;
   gl_FragColor.rgb = (gl_FragColor.rgb - (rando * 0.025)) * 1.5;
            gl_FragColor.rgb = gl_FragColor.rrr * 1.;
}
// endGLSL
`;
textureShader.init();




textureShader.fragText = `
// beginGLSL
precision mediump float;
// Passed in from the vertex shader.
uniform float time;
varying vec2 v_texcoord;
// The texture.
uniform sampler2D u_texture;
float rand(vec2 co){
    return fract(sin(dot(co.xy ,vec2(12.9898,78.233))) * 43758.5453 * (2.0 + sin(time)));
}
void main() {
    vec2 uv = vec2(gl_FragCoord.xy) / vec2(1600, 1600);
   float rando = rand(vec2(uv.x, uv.y));
    float t = time * 1.;
   // gl_FragColor = texture2D(u_texture, v_texcoord);
    gl_FragColor = texture2D(u_texture, v_texcoord + (pow(cos(uv.y * uv.x * 1e18), 0.0125) + sin(uv.x * 1e-2 + tan(uv.y * t * 1e10))) * 2e-2 * floor(sin(uv.y * 1e2 * sin(t * 1. * (floor(sin(t * 1e4 * sin(t * 1e3))))))) * 1. + sin(uv.y * 1e4 + uv.y * 1e6 * sin(t * 1e-10) + tan(t * 1e-10)) * 0.0625 * 1e-5);
   // gl_FragColor = vec4(1.0, 0.0, 0.0, 1.0);
   // gl_FragColor.r = gl_FragColor.r * 0.5;
   gl_FragColor.rgb = (gl_FragColor.rgb - (rando * 0.025)) * 1.5;
                gl_FragColor.rgb = gl_FragColor.rrr * 1.;
}
// endGLSL
`;
textureShader.init();





textureShader.fragText = `
// beginGLSL
precision mediump float;
// Passed in from the vertex shader.
uniform float time;
varying vec2 v_texcoord;
// The texture.
uniform sampler2D u_texture;
float rand(vec2 co){
    return fract(sin(dot(co.xy ,vec2(12.9898,78.233))) * 43758.5453 * (2.0 + sin(time)));
}
void main() {
    vec2 uv = vec2(gl_FragCoord.xy) / vec2(1600, 1600);
   float rando = rand(vec2(uv.x, uv.y));
    float t = time + 6e2 * 1.;
   // gl_FragColor = texture2D(u_texture, v_texcoord);
    // gl_FragColor = texture2D(u_texture, v_texcoord + (pow(cos(uv.y * uv.x * 1e18), 0.0125) + sin(uv.x * 1e-2 + tan(uv.y * t * 10.))) * 1. * floor(sin(uv.y * 1e-3 * ((floor(sin(t * 1e4 * sin(t * 1e4))))))) + sin(uv.y * 1e12 + uv.y * 1e-2 * sin(20. * 1e-10) + tan(t * 1e-10)) * 0.0625 * 1e-5);
    // vec2 fuzz = v_texcoord + (pow(cos(uv.y * uv.x * 1e18), 0.0125) + sin(uv.x * 1e-2 + tan(uv.y * t * 10.))) * 1. * floor(sin(uv.y * 1e-3 * ((floor(sin(t * 1e4 * sin(t * 1e4))))))) + sin(uv.y * 1e12 + uv.y * 1e-2 * sin(20. * 1e-10) + tan(t * 1e-10)) * 0.0625 * 1e-5;
    // vec2 pos = mix(v_texcoord, fuzz, sin(cos(t * uv.y * 1e2) * t * 1e4));
    gl_FragColor = texture2D(u_texture, v_texcoord);
       // gl_FragColor = texture2D(u_texture, v_texcoord + (pow(cos(uv.y * uv.x * 1e18), 0.0125) + sin(uv.x * 1e-2 + tan(uv.y * t * 1.))) * 2. * floor(sin(uv.y * 1e-3 * ((floor(sin(t * 1e4 * sin(t * 1e5))))))) + sin(uv.y * 1e12 + uv.y * 1e-2 * sin(20. * 1e-10) + tan(t * 1e-10)) * 0.0625 * 1e-5);
   // gl_FragColor = vec4(1.0, 0.0, 0.0, 1.0);
   // gl_FragColor.r = gl_FragColor.r * 0.5;
   gl_FragColor.rgb = (gl_FragColor.rgb - (rando * 0.05)) * 1.75;
    gl_FragColor.r += 0.3;
                // gl_FragColor.rgb += gl_FragColor.rgb * gl_FragColor.rrr * 0.125;
}
// endGLSL
`;
textureShader.init();