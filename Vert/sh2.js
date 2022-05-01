newFlickeringVert.vertText = `
    // beginGLSL
    attribute float vertexID;
    uniform float time;
    varying float alph;
    varying vec3 cols;
    #define cx_mul(a, b) vec2(a.x*b.x-a.y*b.y, a.x*b.y+a.y*b.x)
    float roundedRectangle (vec2 uv, vec2 pos, vec2 size, float radius, float thickness) {
        float d = length(max(abs(uv - pos),size) - size) - radius;
        return smoothstep(0.66, 0.33, d / thickness * 5.0);
    }
    const mat2 mr = mat2 (
        0.84147,  0.54030,
        0.54030, -0.84147
    );
    float hash(in float n) {
      return fract(sin(n)*43758.5453);
    }
    float noise(in vec2 x) {
        vec2 p = floor(x);
        vec2 f = fract(x);
        f = f*f*(3.0-2.0*f);  
        float n = p.x + p.y*57.0;
        float res = mix(mix( hash(n+  0.0), hash(n+  1.0),f.x),
              mix( hash(n+ 57.0), hash(n+ 58.0),f.x),f.y);
        return res;
    }
    float fbm( in vec2 p ) {
        float f;
        f  = 0.5000*noise( p ); p = mr*p*2.02;
        f += 0.2500*noise( p ); p = mr*p*2.33;
        f += 0.1250*noise( p ); p = mr*p*2.01;
        f += 0.0625*noise( p ); p = mr*p*5.21;
        return f/(0.9375)*smoothstep( 260., 768., p.y ); // flat at beginning
    }
    float intersectSphere(vec3 pos, vec3 dir) {
        // solve pos + k*dir = unit sphere surface
        // dot(pos + k*dir, pos + k*dir) = 1
        // quadratic coefficients
        float a = dot(dir, dir);
        float b = 2.0 * dot(pos, dir);
        float c = dot(pos, pos) - 1.0;
        float discriminant = b * b - 4.0 * a * c;
        // only the positive root is useful
        return (-b - sqrt(discriminant)) / (2.0 * a);
    }
    void main(void) {
        float t = 159891. * 0.5e-2;
        float ratio = 16.0 / 9.0;
        float vertexCount = 147456.0;
        float id = vertexID;
       // float dist_squared = dot(vec2(x, y), vec2(0., 0.));
        // x += (dist_squared) * 200.;
        // float px = x;
        
        // float py = y;
        float ra = t;
        vec2 r = vec2(cos(ra), sin(ra));
        vec3 tr = vec3(-0.5, 1.8 / ratio, 17.9);
        mat3 tm = mat3(
            1.0, 0.0, 0.0,
            0.0, 1.0, 0.0,
            tr.x, tr.y, 1.0
        );
        mat3 rm = mat3(
           r.x, r.y, 0.0, // first column 
          -r.y, r.x, 0.0, // second column
           0.0, 0.0, 1.0  // third column
        );
        mat3 sm = mat3(
            1.5, 0.0, 0.0,
            0.0, 1.5, 0.0,
            0.0, 0.0, 1.0
        );
        mat3 m = tm * sm * rm;
        mat4 tm4 = mat4(
            1.0,  0.0,  0.0,  0.0,
            0.0,  1.0,  0.0,  0.0,
            0.0,  0.0,  1.0,  0.0,
            tr.x, tr.y, tr.z, 1.0
        );
        float pro = 1. / tan((3.14159265 / 2.0) / 2.0);
        mat4 xr = mat4(
           1.0, 0.0, 0.0, 0.0,
           0.0, r.x, -r.y, 0.0,
           0.0, r.y, r.x, 0.0,
           0.0, 0.0, 0.0, 1.0
        );
        // float ya = 0.0;
        // vec2 yyra = vec2(cos(ya), sin(ya));
        // mat4 yyr = mat4(
        //    yyra.x, 0.0, yyra.y, 0.0,
        //    0.0, 1.0, 0.0, 0.0,
        //    -yyra.y, 0.0, yyra.x, 0.0,
        //    0.0, 0.0, 0.0, 1.0
        // );
        mat4 yr = mat4(
           r.x, 0.0, r.y, 0.0,
           0.0, 1.0, 0.0, 0.0,
           -r.y, 0.0, r.x, 0.0,
           0.0, 0.0, 0.0, 1.0
        );
        mat4 zr = mat4(
           r.x, -r.y, 0.0, 0.0, // first column 
          r.y, r.x, 0.0, 0.0, // second column
           0.0, 0.0, 1.0, 0.0,  // third column
           0.0, 0.0, 0.0, 1.0
        );
        float a = 10.;
        vec2 zz = vec2(cos(a), sin(a));
        mat4 zr2 = mat4(
           zz.x, -zz.y, 0.0, 0.0, // first column 
           zz.y, zz.x, 0.0, 0.0, // second column
           0.0, 0.0, 1.0, 0.0,  // third column
           0.0, 0.0, 0.0, 1.0
        );
        mat4 pm = mat4(
            pro, 0.0, 0.0, 0.0,
            0.0, pro, 0.0, 0.0,
            0.0, 0.0, 1.0, 0.0,
            0.0, 0.0, 0.0, 1.0
        );
        // m = m * 4.0;
        // rm = sm * rm;
                // m = tm * m;
        // vec2 pos = cx_mul(vec2(x, y), vec2(0.5, 0.5));
        // pos = cx_mul(pos, vec2(0.75, 0.75));
        float x = ((fract(id / (512. * 4.75))) - 0.5) * 6.;
        float y = ((floor(id / (512. * 2.35)) / (512. * 2.35)) - 0.5 / ratio) * 15.;
                vec2 pos2 = vec2(x, y);
        float turb = 0.0;
        for (float i = 0.0; i < 25.0; i++) {
            float fi = i * 2e-2;
            float ti = time * 1e-2;
            float ts = 0.001 * sin(x * y * 1.5e1) * 5.;
            float xd = cos(distance(pos2 * 0.25, vec2(cos(fi + ti) * fi, sin(fi * 1. + t * 1.02) * fi)) * 50.75 + time * 50.5e-2) * ts;
            float yd = sin(distance(pos2 * 0.25, vec2(cos(fi + ti) * fi, sin(fi * 1. + t * 1.02) * fi)) * 50.75 + time * 50.5e-2) * ts;
            xd += sin(pos2.x * 1e3) * 0.00008;
            pos2.x += xd * cos(xd * 5e1) * 0.946;
            pos2.y += yd * cos(yd * 5e1) * 0.946;
            turb += xd + yd;
        }
        
        
        // float x = cos(id * 1e1) * id * 5e-5;
        // float y = sin(id * 1e1) * id * 5e-5;
        // x = mix(x, x0, 0.8);
        // y = mix(y, y0, 0.8);
        float z = 1.0 + sin(id * x * 5e-1 * t +  x * y * 0.2) * 1.5;
        // z = id / vertexCount * 40. * sin(x * id * 1e2 + tan(id * 1e8) * 1e-1) * 0.5;
        // z = mix(z, 0.0, 0.85);
        z = 0.0;
        z = 0.0;
       // z = z + fbm((vec2(x, y) + 10.0) * 1. + 5990. * 0.0625e-1) * 2.;
                // z += id / vertexCount * 400. * sin(x * id * 1e2 + tan(id * 1e8) * 1e-1) * 0.5;
                // z += tan(id * 1e-4) * id / vertexCount * 0.1;
        float d = distance(vec2(pos2.x, pos2.y), vec2(0.0, 0.0));
        vec4 pos = vec4(pos2.y, z, pos2.x, 1.0);
        // pos = pm * pos;
         pos.y = min(y, intersectSphere(vec3(0.0625, 0.0625, 0.0625), pos.xzz));
        // pos.xyz = rotate(pos.xyz, vec3(0.0, 0.0, 0.0), t);
        pos = zr2 * pos;
        pos = zr * pos;
        // pos = tm4 * pos;
                pos = yr * pos;
        pos = tm4 * pos;
        // pos = yyr * pos;
        // pos = m * pos;
        gl_Position = vec4(pos.x / ratio * 12., pos.y * 12., 0.0, pos.z * 1.);
        gl_PointSize = 29.5 - (60. * pos.z * 0.02);
        alph = 0.25 * 0.75;
        cols = vec3(0.65 + 0.5 / pos.z);
       float vig = (roundedRectangle(pos.xy * 1.5 / pos.z, vec2(0.0, 0.0), vec2(1.82, 1.0) * 0.026 * 4.5, 0.001, 0.05) + 0.0);
        cols = mix(cols, cols * floor(vig), 1.);
        gl_PointSize *= floor(vig);
    }
    // endGLSL
`;
newFlickeringVert.fragText = `
    // beginGLSL
    precision mediump float;
//     varying vec2 myposition;
//     varying vec2 center;
    varying float alph;
    varying vec3 cols;
    float rand(vec2 co){
        return fract(sin(dot(co.xy ,vec2(12.9898,78.233))) * 43758.5453 * (2.0 + sin(co.x)));
    }
    void main(void) {
        // vec2 uv = gl_PointCoord.xy / vec2(1600, 1600);
        // float d = length(uv - center);
        // vec2 pos = myposition;
        vec2 uv = gl_FragCoord.xy / vec2(2560, 1600);
        // uv.x = uv.x + 1.0;
        uv = uv * 2.0;
        uv = uv + 0.5;
        // uv = uv * 1.0;
        float ALPHA = 0.75;
        vec2 pos = gl_PointCoord - vec2(0.5, 0.5);
                float dist_squared = dot(pos, pos);
        float alpha;
        if (dist_squared < 0.25) {
            alpha = ALPHA;
        } else {
            alpha = 0.0;
        }
        alpha = smoothstep(0.05 / (0.9 + alph), 0.000125, dist_squared) * 0.79;
        float rando = rand(pos);
        // gl_FragColor = vec4(1.0, (1.0 - dist_squared * 40.) * 0.6, 0.0, alpha + ((0.12 - dist_squared) * 4.) - (rando * 0.2));
        gl_FragColor = vec4(1.0, 0.4 - dist_squared, 2.0 + alpha * 120., ((3. - dist_squared * 24.0 * (0.25 + alph)) * 0.045 + alpha)) * 0.5;
        // gl_FragColor.rgb = gl_FragColor.rbr;
        gl_FragColor.rgb = cols;
        // gl_FragColor.b *= 0.75;
        
    }
    // endGLSL
`;
// newFlickeringVert.init();
newFlickeringVert.vertText = newFlickeringVert.vertText.replace(/[^\x00-\x7F]/g, "");
newFlickeringVert.fragText = newFlickeringVert.fragText.replace(/[^\x00-\x7F]/g, "");
newFlickeringVert.init();



newFlickeringVert.vertText = `
    // beginGLSL
    attribute float vertexID;
    uniform float time;
    varying float alph;
    varying vec3 cols;
// Barnsley Fern - @P_Malin
// https://en.wikipedia.org/wiki/Barnsley_fern
// hash function from https://www.shadertoy.com/view/4djSRW
float hash(float p)
{
  vec2 p2 = fract(vec2(p * 5.3983, p * 5.4427));
    p2 += dot(p2.yx, p2.xy + vec2(21.5351, 14.3137));
  return fract(p2.x * p2.y * 95.4337);
}
void main() 
{   
    vec2 resolution = vec2(2560.0, 1440.);
    vec3 p = vec3( 0.01, 0.86, 0.93 ); // p = probability thresholds. Individual probabilities for each transform = 0.01, 0.85, 0.07, 0.07
  
    vec3 vColor = vec3( 0.0 );
    vec2 vPos = vec2( 0.0 );
    float fRandomSeed = vertexID + time;
    float mod = -floor(vertexID / 2500.) * 0.4;
    for ( int i=0; i<32; i++ )
    {            
    float fSelection = hash( fRandomSeed );
        fRandomSeed += 120.3456;
           
        if ( fSelection < p.x )
        {
            vPos = vPos * mat2( 0.0, 0.0, 0.0, 0.16 ) + vec2( 0.0, 0.0 );
            vColor.r += 0.3;
        }
        else if ( fSelection < p.y )
        {
            float fRot = sin(time * 2e-2 + mod * 1e3) * 0.2;
            vPos = vPos * mat2( 0.85, 0.04, -0.04, 0.85 ) * mat2( cos(fRot), sin(fRot), -sin(fRot), cos(fRot) ) + vec2( 0.0, 1.6 );
            vColor -= 0.005;
        }
        else if ( fSelection < p.z )
        {
            vPos = vPos * mat2( 0.20, -0.26, 0.23, 0.22 ) + vec2( 0.0, 1.6 );
            vColor.g += 0.05;
        }
        else
        {
            vPos = vPos * mat2( -0.15, 0.28, 0.26, 0.24 ) + vec2( 0.0, 0.44 );
            vColor.g += 0.1;
        }
    }
  
    vPos = vPos * 0.1 + vec2(0.0, -0.5);
    vPos.x += mod * 0.0625 + 2.;
    vPos.y += sin(mod * 20.5) + 0.25;
    gl_PointSize = 4.;
    gl_Position = vec4( vPos * 0.35 * vec2(1.0, resolution.x / resolution.y) , 0, 1 );
    cols = vec3(0.7);
}
    // endGLSL
`;
newFlickeringVert.fragText = `
    // beginGLSL
    precision mediump float;
//     varying vec2 myposition;
//     varying vec2 center;
    varying float alph;
    varying vec3 cols;
    float rand(vec2 co){
        return fract(sin(dot(co.xy ,vec2(12.9898,78.233))) * 43758.5453 * (2.0 + sin(co.x)));
    }
    void main(void) {
        // vec2 uv = gl_PointCoord.xy / vec2(1600, 1600);
        // float d = length(uv - center);
        // vec2 pos = myposition;
        vec2 uv = gl_FragCoord.xy / vec2(2560, 1600);
        // uv.x = uv.x + 1.0;
        uv = uv * 2.0;
        uv = uv + 0.5;
        // uv = uv * 1.0;
        float ALPHA = 0.75;
        vec2 pos = gl_PointCoord - vec2(0.5, 0.5);
                float dist_squared = dot(pos, pos);
        float alpha;
        if (dist_squared < 0.25) {
            alpha = ALPHA;
        } else {
            alpha = 0.0;
        }
        alpha = smoothstep(0.05 / (0.9 + alph), 0.000125, dist_squared) * 0.79;
        float rando = rand(pos);
        // gl_FragColor = vec4(1.0, (1.0 - dist_squared * 40.) * 0.6, 0.0, alpha + ((0.12 - dist_squared) * 4.) - (rando * 0.2));
        gl_FragColor = vec4(1.0, 0.4 - dist_squared, 2.0 + alpha * 120., ((3. - dist_squared * 24.0 * (0.25 + alph)) * 0.045 + alpha)) * 0.5;
        // gl_FragColor.rgb = gl_FragColor.rbr;
        gl_FragColor.rgb = cols;
        // gl_FragColor.b *= 0.75;
        
    }
    // endGLSL
`;
// newFlickeringVert.init();
newFlickeringVert.vertText = newFlickeringVert.vertText.replace(/[^\x00-\x7F]/g, "");
newFlickeringVert.fragText = newFlickeringVert.fragText.replace(/[^\x00-\x7F]/g, "");
newFlickeringVert.init();



newFlickeringVert.vertText = `
    // beginGLSL
    attribute float vertexID;
    uniform float time;
    varying float alph;
    varying vec3 cols;
    #define cx_mul(a, b) vec2(a.x*b.x-a.y*b.y, a.x*b.y+a.y*b.x)
    float roundedRectangle (vec2 uv, vec2 pos, vec2 size, float radius, float thickness) {
        float d = length(max(abs(uv - pos),size) - size) - radius;
        return smoothstep(0.66, 0.33, d / thickness * 5.0);
    }
    const mat2 mr = mat2 (
        0.84147,  0.54030,
        0.54030, -0.84147
    );
    float hash(in float n) {
      return fract(sin(n)*43758.5453);
    }
    float noise(in vec2 x) {
        vec2 p = floor(x);
        vec2 f = fract(x);
        f = f*f*(3.0-2.0*f);  
        float n = p.x + p.y*57.0;
        float res = mix(mix( hash(n+  0.0), hash(n+  1.0),f.x),
              mix( hash(n+ 57.0), hash(n+ 58.0),f.x),f.y);
        return res;
    }
    float fbm( in vec2 p ) {
        float f;
        f  = 0.5000*noise( p ); p = mr*p*2.02;
        f += 0.2500*noise( p ); p = mr*p*2.33;
        f += 0.1250*noise( p ); p = mr*p*2.01;
        f += 0.0625*noise( p ); p = mr*p*5.21;
        return f/(0.9375)*smoothstep( 260., 768., p.y ); // flat at beginning
    }
    float intersectSphere(vec3 pos, vec3 dir) {
        // solve pos + k*dir = unit sphere surface
        // dot(pos + k*dir, pos + k*dir) = 1
        // quadratic coefficients
        float a = dot(dir, dir);
        float b = 2.0 * dot(pos, dir);
        float c = dot(pos, pos) - 1.0;
        float discriminant = b * b - 4.0 * a * c;
        // only the positive root is useful
        return (-b - sqrt(discriminant)) / (2.0 * a);
    }
    void main(void) {
        float t = time * 0.5e-2;
        float ratio = 16.0 / 9.0;
        float vertexCount = 147456.0;
        float id = vertexID;
       // float dist_squared = dot(vec2(x, y), vec2(0., 0.));
        // x += (dist_squared) * 200.;
        // float px = x;
        
        // float py = y;
        float ra = t;
        vec2 r = vec2(cos(ra), sin(ra));
        vec3 tr = vec3(-0.5, 1.8 / ratio, 17.9);
        mat3 tm = mat3(
            1.0, 0.0, 0.0,
            0.0, 1.0, 0.0,
            tr.x, tr.y, 1.0
        );
        mat3 rm = mat3(
           r.x, r.y, 0.0, // first column 
          -r.y, r.x, 0.0, // second column
           0.0, 0.0, 1.0  // third column
        );
        mat3 sm = mat3(
            1.5, 0.0, 0.0,
            0.0, 1.5, 0.0,
            0.0, 0.0, 1.0
        );
        mat3 m = tm * sm * rm;
        mat4 tm4 = mat4(
            1.0,  0.0,  0.0,  0.0,
            0.0,  1.0,  0.0,  0.0,
            0.0,  0.0,  1.0,  0.0,
            tr.x, tr.y, tr.z, 1.0
        );
        float pro = 1. / tan((3.14159265 / 2.0) / 2.0);
        mat4 xr = mat4(
           1.0, 0.0, 0.0, 0.0,
           0.0, r.x, -r.y, 0.0,
           0.0, r.y, r.x, 0.0,
           0.0, 0.0, 0.0, 1.0
        );
        // float ya = 0.0;
        // vec2 yyra = vec2(cos(ya), sin(ya));
        // mat4 yyr = mat4(
        //    yyra.x, 0.0, yyra.y, 0.0,
        //    0.0, 1.0, 0.0, 0.0,
        //    -yyra.y, 0.0, yyra.x, 0.0,
        //    0.0, 0.0, 0.0, 1.0
        // );
        mat4 yr = mat4(
           r.x, 0.0, r.y, 0.0,
           0.0, 1.0, 0.0, 0.0,
           -r.y, 0.0, r.x, 0.0,
           0.0, 0.0, 0.0, 1.0
        );
        mat4 zr = mat4(
           r.x, -r.y, 0.0, 0.0, // first column 
          r.y, r.x, 0.0, 0.0, // second column
           0.0, 0.0, 1.0, 0.0,  // third column
           0.0, 0.0, 0.0, 1.0
        );
        float a = 10.;
        vec2 zz = vec2(cos(a), sin(a));
        mat4 zr2 = mat4(
           zz.x, -zz.y, 0.0, 0.0, // first column 
           zz.y, zz.x, 0.0, 0.0, // second column
           0.0, 0.0, 1.0, 0.0,  // third column
           0.0, 0.0, 0.0, 1.0
        );
        mat4 pm = mat4(
            pro, 0.0, 0.0, 0.0,
            0.0, pro, 0.0, 0.0,
            0.0, 0.0, 1.0, 0.0,
            0.0, 0.0, 0.0, 1.0
        );
        // m = m * 4.0;
        // rm = sm * rm;
                // m = tm * m;
        // vec2 pos = cx_mul(vec2(x, y), vec2(0.5, 0.5));
        // pos = cx_mul(pos, vec2(0.75, 0.75));
        float x = ((fract(id / (512. * 4.75))) - 0.5) * 6.;
        float y = ((floor(id / (512. * 2.35)) / (512. * 2.35)) - 0.5 / ratio) * 15.;
                vec2 pos2 = vec2(x, y);
        float turb = 0.0;
        for (float i = 0.0; i < 25.0; i++) {
            float fi = i * 2e-2;
            float ti = time * 1e-2;
            float ts = 0.001 * sin(x * y * 1.5e1) * 5.;
            float xd = cos(distance(pos2 * 0.25, vec2(cos(fi + ti) * fi, sin(fi * 1. + t * 1.02) * fi)) * 50.75 + time * 50.5e-2) * ts;
            float yd = sin(distance(pos2 * 0.25, vec2(cos(fi + ti) * fi, sin(fi * 1. + t * 1.02) * fi)) * 50.75 + time * 50.5e-2) * ts;
            xd += sin(pos2.x * 1e3) * 0.00008;
            pos2.x += xd * cos(xd * 5e1) * 0.946;
            pos2.y += yd * cos(yd * 5e1) * 0.946;
            turb += xd + yd;
        }
        
        
        // float x = cos(id * 1e1) * id * 5e-5;
        // float y = sin(id * 1e1) * id * 5e-5;
        // x = mix(x, x0, 0.8);
        // y = mix(y, y0, 0.8);
        float z = 1.0 + sin(id * x * 5e-1 * t +  x * y * 0.2) * 1.5;
        // z = id / vertexCount * 40. * sin(x * id * 1e2 + tan(id * 1e8) * 1e-1) * 0.5;
        // z = mix(z, 0.0, 0.85);
        z = 0.0;
        z = 0.0;
       // z = z + fbm((vec2(x, y) + 10.0) * 1. + 5990. * 0.0625e-1) * 2.;
                // z += id / vertexCount * 400. * sin(x * id * 1e2 + tan(id * 1e8) * 1e-1) * 0.5;
                // z += tan(id * 1e-4) * id / vertexCount * 0.1;
        float d = distance(vec2(pos2.x, pos2.y), vec2(0.0, 0.0));
        vec4 pos = vec4(pos2.y, z, pos2.x, 1.0);
        // pos = pm * pos;
         pos.y = min(y, intersectSphere(vec3(0.0625, 0.0625, 0.0625), pos.xzz * 4.));
          pos.y = min(y, intersectSphere(vec3(-1.0625, -1.0625, 0.0625), pos.xzz * 1.));
        // pos.xyz = rotate(pos.xyz, vec3(0.0, 0.0, 0.0), t);
        pos = zr2 * pos;
        pos = zr * pos;
        // pos = tm4 * pos;
                pos = yr * pos;
        pos = tm4 * pos;
        // pos = yyr * pos;
        // pos = m * pos;
        gl_Position = vec4(pos.x / ratio * 12., pos.y * 12., 0.0, pos.z * 1.);
        gl_PointSize = 29.5 - (60. * pos.z * 0.02);
        alph = 0.25 * 0.75;
        cols = vec3(0.65 + 0.5 / pos.z);
       float vig = (roundedRectangle(pos.xy * 1.5 / pos.z, vec2(0.0, 0.0), vec2(1.82, 1.0) * 0.026 * 4.5, 0.001, 0.05) + 0.0);
        cols = mix(cols, cols * floor(vig), 1.);
        gl_PointSize *= floor(vig);
    }
    // endGLSL
`;
newFlickeringVert.fragText = `
    // beginGLSL
    precision mediump float;
//     varying vec2 myposition;
//     varying vec2 center;
    varying float alph;
    varying vec3 cols;
    float rand(vec2 co){
        return fract(sin(dot(co.xy ,vec2(12.9898,78.233))) * 43758.5453 * (2.0 + sin(co.x)));
    }
    void main(void) {
        // vec2 uv = gl_PointCoord.xy / vec2(1600, 1600);
        // float d = length(uv - center);
        // vec2 pos = myposition;
        vec2 uv = gl_FragCoord.xy / vec2(2560, 1600);
        // uv.x = uv.x + 1.0;
        uv = uv * 2.0;
        uv = uv + 0.5;
        // uv = uv * 1.0;
        float ALPHA = 0.75;
        vec2 pos = gl_PointCoord - vec2(0.5, 0.5);
                float dist_squared = dot(pos, pos);
        float alpha;
        if (dist_squared < 0.25) {
            alpha = ALPHA;
        } else {
            alpha = 0.0;
        }
        alpha = smoothstep(0.05 / (0.9 + alph), 0.000125, dist_squared) * 0.79;
        float rando = rand(pos);
        // gl_FragColor = vec4(1.0, (1.0 - dist_squared * 40.) * 0.6, 0.0, alpha + ((0.12 - dist_squared) * 4.) - (rando * 0.2));
        gl_FragColor = vec4(1.0, 0.4 - dist_squared, 2.0 + alpha * 120., ((3. - dist_squared * 24.0 * (0.25 + alph)) * 0.045 + alpha)) * 0.5;
        // gl_FragColor.rgb = gl_FragColor.rbr;
        gl_FragColor.rgb = cols;
        // gl_FragColor.b *= 0.75;
        
    }
    // endGLSL
`;
// newFlickeringVert.init();
newFlickeringVert.vertText = newFlickeringVert.vertText.replace(/[^\x00-\x7F]/g, "");
newFlickeringVert.fragText = newFlickeringVert.fragText.replace(/[^\x00-\x7F]/g, "");
newFlickeringVert.init();





newFlickeringVert.vertText = `
    // beginGLSL
    attribute float vertexID;
    uniform float time;
    varying float alph;
    varying vec3 cols;
    #define cx_mul(a, b) vec2(a.x*b.x-a.y*b.y, a.x*b.y+a.y*b.x)
    float roundedRectangle (vec2 uv, vec2 pos, vec2 size, float radius, float thickness) {
        float d = length(max(abs(uv - pos),size) - size) - radius;
        return smoothstep(0.66, 0.33, d / thickness * 5.0);
    }
    const mat2 mr = mat2 (
        0.84147,  0.54030,
        0.54030, -0.84147
    );
    float hash(in float n) {
      return fract(sin(n)*43758.5453);
    }
    float noise(in vec2 x) {
        vec2 p = floor(x);
        vec2 f = fract(x);
        f = f*f*(3.0-2.0*f);  
        float n = p.x + p.y*57.0;
        float res = mix(mix( hash(n+  0.0), hash(n+  1.0),f.x),
              mix( hash(n+ 57.0), hash(n+ 58.0),f.x),f.y);
        return res;
    }
    float fbm( in vec2 p ) {
        float f;
        f  = 0.5000*noise( p ); p = mr*p*2.02;
        f += 0.2500*noise( p ); p = mr*p*2.33;
        f += 0.1250*noise( p ); p = mr*p*2.01;
        f += 0.0625*noise( p ); p = mr*p*5.21;
        return f/(0.9375)*smoothstep( 260., 768., p.y ); // flat at beginning
    }
    float intersectSphere(vec3 pos, vec3 dir) {
        // solve pos + k*dir = unit sphere surface
        // dot(pos + k*dir, pos + k*dir) = 1
        // quadratic coefficients
        float a = dot(dir, dir);
        float b = 2.0 * dot(pos, dir);
        float c = dot(pos, pos) - 1.0;
        float discriminant = b * b - 4.0 * a * c;
        // only the positive root is useful
        return (-b - sqrt(discriminant)) / (2.0 * a);
    }
    void main(void) {
        float t = 159891. * 0.5e-2;
        float ratio = 16.0 / 9.0;
        float vertexCount = 147456.0;
        float id = vertexID;
       // float dist_squared = dot(vec2(x, y), vec2(0., 0.));
        // x += (dist_squared) * 200.;
        // float px = x;
        
        // float py = y;
        float ra = t;
        vec2 r = vec2(cos(ra), sin(ra));
        vec3 tr = vec3(-0.5, 1.8 / ratio, 17.9);
        mat3 tm = mat3(
            1.0, 0.0, 0.0,
            0.0, 1.0, 0.0,
            tr.x, tr.y, 1.0
        );
        mat3 rm = mat3(
           r.x, r.y, 0.0, // first column 
          -r.y, r.x, 0.0, // second column
           0.0, 0.0, 1.0  // third column
        );
        mat3 sm = mat3(
            1.5, 0.0, 0.0,
            0.0, 1.5, 0.0,
            0.0, 0.0, 1.0
        );
        mat3 m = tm * sm * rm;
        mat4 tm4 = mat4(
            1.0,  0.0,  0.0,  0.0,
            0.0,  1.0,  0.0,  0.0,
            0.0,  0.0,  1.0,  0.0,
            tr.x, tr.y, tr.z, 1.0
        );
        float pro = 1. / tan((3.14159265 / 2.0) / 2.0);
        mat4 xr = mat4(
           1.0, 0.0, 0.0, 0.0,
           0.0, r.x, -r.y, 0.0,
           0.0, r.y, r.x, 0.0,
           0.0, 0.0, 0.0, 1.0
        );
        // float ya = 0.0;
        // vec2 yyra = vec2(cos(ya), sin(ya));
        // mat4 yyr = mat4(
        //    yyra.x, 0.0, yyra.y, 0.0,
        //    0.0, 1.0, 0.0, 0.0,
        //    -yyra.y, 0.0, yyra.x, 0.0,
        //    0.0, 0.0, 0.0, 1.0
        // );
        mat4 yr = mat4(
           r.x, 0.0, r.y, 0.0,
           0.0, 1.0, 0.0, 0.0,
           -r.y, 0.0, r.x, 0.0,
           0.0, 0.0, 0.0, 1.0
        );
        mat4 zr = mat4(
           r.x, -r.y, 0.0, 0.0, // first column 
          r.y, r.x, 0.0, 0.0, // second column
           0.0, 0.0, 1.0, 0.0,  // third column
           0.0, 0.0, 0.0, 1.0
        );
        float a = 10.;
        vec2 zz = vec2(cos(a), sin(a));
        mat4 zr2 = mat4(
           zz.x, -zz.y, 0.0, 0.0, // first column 
           zz.y, zz.x, 0.0, 0.0, // second column
           0.0, 0.0, 1.0, 0.0,  // third column
           0.0, 0.0, 0.0, 1.0
        );
        mat4 pm = mat4(
            pro, 0.0, 0.0, 0.0,
            0.0, pro, 0.0, 0.0,
            0.0, 0.0, 1.0, 0.0,
            0.0, 0.0, 0.0, 1.0
        );
        // m = m * 4.0;
        // rm = sm * rm;
                // m = tm * m;
        // vec2 pos = cx_mul(vec2(x, y), vec2(0.5, 0.5));
        // pos = cx_mul(pos, vec2(0.75, 0.75));
        float x = ((fract(id / (512. * 2.75))) - 0.5) * 10.;
        float y = ((floor(id / (512. * 2.35)) / (512. * 2.35)) - 0.5 / ratio) * 15.;
                vec2 pos2 = vec2(x, y);
        float turb = 0.0;
        for (float i = 0.0; i < 25.0; i++) {
            float fi = i * 2e-2;
            float ti = time * 1e-2;
            float ts = 0.001 * sin(x * y * 1.5e1) * 5.;
            float xd = cos(distance(pos2 * 0.25, vec2(cos(fi + ti) * fi, sin(fi * 1. + t * 1.02) * fi)) * 50.75 + time * 50.5e-2) * ts;
            float yd = sin(distance(pos2 * 0.25, vec2(cos(fi + ti) * fi, sin(fi * 1. + t * 1.02) * fi)) * 50.75 + time * 50.5e-2) * ts;
            xd += sin(pos2.x * 1e3) * 0.00008;
            pos2.x += xd * cos(xd * 5e1) * 0.946;
            pos2.y += yd * cos(yd * 5e1) * 0.946;
            turb += xd + yd;
        }
        
        
        // float x = cos(id * 1e1) * id * 5e-5;
        // float y = sin(id * 1e1) * id * 5e-5;
        // x = mix(x, x0, 0.8);
        // y = mix(y, y0, 0.8);
        float z = 1.0 + sin(id * x * 5e-1 * t +  x * y * 0.2) * 1.5;
        // z = id / vertexCount * 40. * sin(x * id * 1e2 + tan(id * 1e8) * 1e-1) * 0.5;
        // z = mix(z, 0.0, 0.85);
        z = 0.0;
        z = 0.0;
       // z = z + fbm((vec2(x, y) + 10.0) * 1. + 5990. * 0.0625e-1) * 2.;
                // z += id / vertexCount * 400. * sin(x * id * 1e2 + tan(id * 1e8) * 1e-1) * 0.5;
                // z += tan(id * 1e-4) * id / vertexCount * 0.1;
        float d = distance(vec2(pos2.x, pos2.y), vec2(0.0, 0.0));
        vec4 pos = vec4(pos2.y, z, pos2.x, 1.0);
        // pos = pm * pos;
         pos.y = min(y, intersectSphere(vec3(0.0625, 0.0625, 0.0625), pos.xzz));
        // pos.xyz = rotate(pos.xyz, vec3(0.0, 0.0, 0.0), t);
        pos = zr2 * pos;
        pos = zr * pos;
        // pos = tm4 * pos;
                pos = yr * pos;
        pos = tm4 * pos;
        // pos = yyr * pos;
        // pos = m * pos;
                float sca = 1.0;
        if (id < 3000.) {
            float oid = id - 0.;
            sca = 0.7 * (id / 3000.);
            pos.x = sin(oid * 5e1 * tan(oid * 1e-5) * time * 1e-6) * oid * 1e-5 - 0.03;
            pos.y = cos(oid * 5e1 * tan(oid * 1e-5) * time * 1e-6) * oid * 1e-5 + 0.05;
            pos.z = 0.9;
            
        }
        gl_Position = vec4(pos.x / ratio * 8., pos.y * 8., 0.0, pos.z * 1.);
        gl_PointSize = (29.5 - (60. * pos.z * 0.02)) * sca;
        alph = 0.25 * 0.75;
        cols = vec3(0.65 + 0.5 / pos.z);
       float vig = (roundedRectangle(pos.xy * 1.5 / pos.z, vec2(0.0, 0.0), vec2(2.5, 1.36) * 0.0197 * 6.5, 0.001, 0.05) + 0.0);
        cols = mix(cols, cols * floor(vig), 1.) * sca;
        gl_PointSize *= floor(vig);
    }
    // endGLSL
`;
newFlickeringVert.fragText = `
    // beginGLSL
    precision mediump float;
//     varying vec2 myposition;
//     varying vec2 center;
    varying float alph;
    varying vec3 cols;
    float rand(vec2 co){
        return fract(sin(dot(co.xy ,vec2(12.9898,78.233))) * 43758.5453 * (2.0 + sin(co.x)));
    }
    void main(void) {
        // vec2 uv = gl_PointCoord.xy / vec2(1600, 1600);
        // float d = length(uv - center);
        // vec2 pos = myposition;
        vec2 uv = gl_FragCoord.xy / vec2(2560, 1600);
        // uv.x = uv.x + 1.0;
        uv = uv * 2.0;
        uv = uv + 0.5;
        // uv = uv * 1.0;
        float ALPHA = 0.75;
        vec2 pos = gl_PointCoord - vec2(0.5, 0.5);
                float dist_squared = dot(pos, pos);
        float alpha;
        if (dist_squared < 0.25) {
            alpha = ALPHA;
        } else {
            alpha = 0.0;
        }
        alpha = smoothstep(0.05 / (0.9 + alph), 0.000125, dist_squared) * 0.79;
        float rando = rand(pos);
        // gl_FragColor = vec4(1.0, (1.0 - dist_squared * 40.) * 0.6, 0.0, alpha + ((0.12 - dist_squared) * 4.) - (rando * 0.2));
        gl_FragColor = vec4(1.0, 0.4 - dist_squared, 2.0 + alpha * 120., ((3. - dist_squared * 24.0 * (0.25 + alph)) * 0.045 + alpha)) * 0.5;
        // gl_FragColor.rgb = gl_FragColor.rbr;
        gl_FragColor.rgb = cols;
        // gl_FragColor.b *= 0.75;
        
    }
    // endGLSL
`;
// newFlickeringVert.init();
newFlickeringVert.vertText = newFlickeringVert.vertText.replace(/[^\x00-\x7F]/g, "");
newFlickeringVert.fragText = newFlickeringVert.fragText.replace(/[^\x00-\x7F]/g, "");
newFlickeringVert.init();






newFlickeringVert.vertText = `
    // beginGLSL
    attribute float vertexID;
    uniform float time;
    varying float alph;
    varying vec3 cols;
    #define cx_mul(a, b) vec2(a.x*b.x-a.y*b.y, a.x*b.y+a.y*b.x)
    float roundedRectangle (vec2 uv, vec2 pos, vec2 size, float radius, float thickness) {
        float d = length(max(abs(uv - pos),size) - size) - radius;
        return smoothstep(0.66, 0.33, d / thickness * 5.0);
    }
    const mat2 mr = mat2 (
        0.84147,  0.54030,
        0.54030, -0.84147
    );
    float hash(in float n) {
      return fract(sin(n)*43758.5453);
    }
    float noise(in vec2 x) {
        vec2 p = floor(x);
        vec2 f = fract(x);
        f = f*f*(3.0-2.0*f);  
        float n = p.x + p.y*57.0;
        float res = mix(mix( hash(n+  0.0), hash(n+  1.0),f.x),
              mix( hash(n+ 57.0), hash(n+ 58.0),f.x),f.y);
        return res;
    }
    float fbm( in vec2 p ) {
        float f;
        f  = 0.5000*noise( p ); p = mr*p*2.02;
        f += 0.2500*noise( p ); p = mr*p*2.33;
        f += 0.1250*noise( p ); p = mr*p*2.01;
        f += 0.0625*noise( p ); p = mr*p*5.21;
        return f/(0.9375)*smoothstep( 260., 768., p.y ); // flat at beginning
    }
    float intersectSphere(vec3 pos, vec3 dir) {
        // solve pos + k*dir = unit sphere surface
        // dot(pos + k*dir, pos + k*dir) = 1
        // quadratic coefficients
        float a = dot(dir, dir);
        float b = 50.5 * dot(pos, dir);
        float c = dot(pos, pos) - 1.0;
        float discriminant = b * b - 4.0 * a * c;
        // only the positive root is useful
        return (-b - sqrt(discriminant)) / (2.0 * a);
    }
    void main(void) {
        float t = 159891. * 0.5e-2;
        float ratio = 16.0 / 9.0;
        float vertexCount = 147456.0;
        float id = vertexID;
       // float dist_squared = dot(vec2(x, y), vec2(0., 0.));
        // x += (dist_squared) * 200.;
        // float px = x;
        
        // float py = y;
        float ra = t;
        vec2 r = vec2(cos(ra), sin(ra));
        vec3 tr = vec3(-0.5, 1.8 / ratio, 17.9);
        mat3 tm = mat3(
            1.0, 0.0, 0.0,
            0.0, 1.0, 0.0,
            tr.x, tr.y, 1.0
        );
        mat3 rm = mat3(
           r.x, r.y, 0.0, // first column 
          -r.y, r.x, 0.0, // second column
           0.0, 0.0, 1.0  // third column
        );
        mat3 sm = mat3(
            1.5, 0.0, 0.0,
            0.0, 1.5, 0.0,
            0.0, 0.0, 1.0
        );
        mat3 m = tm * sm * rm;
        mat4 tm4 = mat4(
            1.0,  0.0,  0.0,  0.0,
            0.0,  1.0,  0.0,  0.0,
            0.0,  0.0,  1.0,  0.0,
            tr.x, tr.y, tr.z, 1.0
        );
        float pro = 1. / tan((3.14159265 / 2.0) / 2.0);
        mat4 xr = mat4(
           1.0, 0.0, 0.0, 0.0,
           0.0, r.x, -r.y, 0.0,
           0.0, r.y, r.x, 0.0,
           0.0, 0.0, 0.0, 1.0
        );
        // float ya = 0.0;
        // vec2 yyra = vec2(cos(ya), sin(ya));
        // mat4 yyr = mat4(
        //    yyra.x, 0.0, yyra.y, 0.0,
        //    0.0, 1.0, 0.0, 0.0,
        //    -yyra.y, 0.0, yyra.x, 0.0,
        //    0.0, 0.0, 0.0, 1.0
        // );
        mat4 yr = mat4(
           r.x, 0.0, r.y, 0.0,
           0.0, 1.0, 0.0, 0.0,
           -r.y, 0.0, r.x, 0.0,
           0.0, 0.0, 0.0, 1.0
        );
        mat4 zr = mat4(
           r.x, -r.y, 0.0, 0.0, // first column 
          r.y, r.x, 0.0, 0.0, // second column
           0.0, 0.0, 1.0, 0.0,  // third column
           0.0, 0.0, 0.0, 1.0
        );
        float a = 10.;
        vec2 zz = vec2(cos(a), sin(a));
        mat4 zr2 = mat4(
           zz.x, -zz.y, 0.0, 0.0, // first column 
           zz.y, zz.x, 0.0, 0.0, // second column
           0.0, 0.0, 1.0, 0.0,  // third column
           0.0, 0.0, 0.0, 1.0
        );
        mat4 pm = mat4(
            pro, 0.0, 0.0, 0.0,
            0.0, pro, 0.0, 0.0,
            0.0, 0.0, 1.0, 0.0,
            0.0, 0.0, 0.0, 1.0
        );
        // m = m * 4.0;
        // rm = sm * rm;
                // m = tm * m;
        // vec2 pos = cx_mul(vec2(x, y), vec2(0.5, 0.5));
        // pos = cx_mul(pos, vec2(0.75, 0.75));
        float x = ((fract(id / (512. * 0.275))) - 0.5) * 9.;
        float y = ((floor(id / (512. * 1.35)) / (512. * 2.35)) - 0.5 / ratio) * 15.;
                vec2 pos2 = vec2(x, y);
        float turb = 0.0;
        for (float i = 0.0; i < 25.0; i++) {
            float fi = i * 2e-2;
            float ti = time * 1e-2;
            float ts = 0.001 * sin(x * y * 0.25e1) * 5.;
            float xd = cos(distance(pos2 * 0.25, vec2(cos(fi + ti) * fi, sin(fi * 1. + t * 1.02) * fi)) * 50.75 + time * 50.5e-2) * ts;
            float yd = sin(distance(pos2 * 0.25, vec2(cos(fi + ti) * fi, sin(fi * 1. + t * 1.02) * fi)) * 50.75 + time * 50.5e-2) * ts;
            xd += sin(pos2.x * 1e3) * 0.0008;
            pos2.x += xd * cos(xd * 5e1) * 2.946;
            pos2.y += yd * cos(yd * 5e1) * 2.946;
            turb += xd + yd;
        }
        
        
        // float x = cos(id * 1e1) * id * 5e-5;
        // float y = sin(id * 1e1) * id * 5e-5;
        // x = mix(x, x0, 0.8);
        // y = mix(y, y0, 0.8);
        float z = 1.0 + sin(id * x * 5e-1 * t +  x * y * 0.2) * 1.5;
        // z = id / vertexCount * 40. * sin(x * id * 1e2 + tan(id * 1e8) * 1e-1) * 0.5;
        // z = mix(z, 0.0, 0.85);
        z = 0.0;
        z = 0.0;
       // z = z + fbm((vec2(x, y) + 10.0) * 1. + 5990. * 0.0625e-1) * 2.;
                // z += id / vertexCount * 400. * sin(x * id * 1e2 + tan(id * 1e8) * 1e-1) * 0.5;
                // z += tan(id * 1e-4) * id / vertexCount * 0.1;
        float d = distance(vec2(pos2.x, pos2.y), vec2(0.0, 0.0));
        vec4 pos = vec4(pos2.y, z, pos2.x, 1.0);
        // pos = pm * pos;
         pos.y = min(y, intersectSphere(vec3(0.0625, 0.0625, 0.0625), pos.xzz));
        // pos.xyz = rotate(pos.xyz, vec3(0.0, 0.0, 0.0), t);
        pos = zr2 * pos;
        pos = zr * pos;
        // pos = tm4 * pos;
                pos = yr * pos;
        pos = tm4 * pos;
        // pos = yyr * pos;
        // pos = m * pos;
                float sca = 1.0;
        if (id < 3000.) {
            float oid = id - 0.;
            sca = 0.7 * (id / 3000.);
            pos.x = sin(oid * 5e1 * tan(oid * 1e-5) * time * 1e-6) * oid * 1e-5 - 0.06;
            pos.y = cos(oid * 5e1 * tan(oid * 1e-5) * time * 1e-6) * oid * 1e-5 + 0.05;
            pos.z = 0.9;
            
        }
        gl_Position = vec4(pos.x / ratio * 8., pos.y * 8., 0.0, pos.z * 1.);
        gl_PointSize = (29.5 - (60. * pos.z * 0.02)) * sca;
        alph = 0.25 * 0.75;
        cols = vec3(0.65 + 0.5 / pos.z);
       float vig = (roundedRectangle(pos.xy * 1.5 / pos.z, vec2(0.0, 0.0), vec2(2.5, 1.36) * 0.0197 * 6.5, 0.001, 0.05) + 0.0);
        cols = mix(cols, cols * floor(vig), 1.) * sca;
        gl_PointSize *= floor(vig);
    }
    // endGLSL
`;
newFlickeringVert.fragText = `
    // beginGLSL
    precision mediump float;
//     varying vec2 myposition;
//     varying vec2 center;
    varying float alph;
    varying vec3 cols;
    float rand(vec2 co){
        return fract(sin(dot(co.xy ,vec2(12.9898,78.233))) * 43758.5453 * (2.0 + sin(co.x)));
    }
    void main(void) {
        // vec2 uv = gl_PointCoord.xy / vec2(1600, 1600);
        // float d = length(uv - center);
        // vec2 pos = myposition;
        vec2 uv = gl_FragCoord.xy / vec2(2560, 1600);
        // uv.x = uv.x + 1.0;
        uv = uv * 2.0;
        uv = uv + 0.5;
        // uv = uv * 1.0;
        float ALPHA = 0.75;
        vec2 pos = gl_PointCoord - vec2(0.5, 0.5);
                float dist_squared = dot(pos, pos);
        float alpha;
        if (dist_squared < 0.25) {
            alpha = ALPHA;
        } else {
            alpha = 0.0;
        }
        alpha = smoothstep(0.05 / (0.9 + alph), 0.000125, dist_squared) * 0.79;
        float rando = rand(pos);
        // gl_FragColor = vec4(1.0, (1.0 - dist_squared * 40.) * 0.6, 0.0, alpha + ((0.12 - dist_squared) * 4.) - (rando * 0.2));
        gl_FragColor = vec4(1.0, 0.4 - dist_squared, 2.0 + alpha * 120., ((3. - dist_squared * 24.0 * (0.25 + alph)) * 0.045 + alpha)) * 0.5;
        // gl_FragColor.rgb = gl_FragColor.rbr;
        gl_FragColor.rgb = cols;
        // gl_FragColor.b *= 0.75;
        
    }
    // endGLSL
`;
// newFlickeringVert.init();
newFlickeringVert.vertText = newFlickeringVert.vertText.replace(/[^\x00-\x7F]/g, "");
newFlickeringVert.fragText = newFlickeringVert.fragText.replace(/[^\x00-\x7F]/g, "");
newFlickeringVert.init();



newFlickeringVert.vertText = `
    // beginGLSL
    attribute float vertexID;
    uniform float time;
    varying float alph;
    varying vec3 cols;
    #define cx_mul(a, b) vec2(a.x*b.x-a.y*b.y, a.x*b.y+a.y*b.x)
    float roundedRectangle (vec2 uv, vec2 pos, vec2 size, float radius, float thickness) {
        float d = length(max(abs(uv - pos),size) - size) - radius;
        return smoothstep(0.66, 0.33, d / thickness * 5.0);
    }
    const mat2 mr = mat2 (
        0.84147,  0.54030,
        0.54030, -0.84147
    );
    float hash(in float n) {
      return fract(sin(n)*43758.5453);
    }
    float noise(in vec2 x) {
        vec2 p = floor(x);
        vec2 f = fract(x);
        f = f*f*(3.0-2.0*f);  
        float n = p.x + p.y*57.0;
        float res = mix(mix( hash(n+  0.0), hash(n+  1.0),f.x),
              mix( hash(n+ 57.0), hash(n+ 58.0),f.x),f.y);
        return res;
    }
    float fbm( in vec2 p ) {
        float f;
        f  = 0.5000*noise( p ); p = mr*p*2.02;
        f += 0.2500*noise( p ); p = mr*p*2.33;
        f += 0.1250*noise( p ); p = mr*p*2.01;
        f += 0.0625*noise( p ); p = mr*p*5.21;
        return f/(0.9375)*smoothstep( 260., 768., p.y ); // flat at beginning
    }
    float intersectSphere(vec3 pos, vec3 dir) {
        // solve pos + k*dir = unit sphere surface
        // dot(pos + k*dir, pos + k*dir) = 1
        // quadratic coefficients
        float a = dot(dir, dir);
        float b = 50.5 * dot(pos, dir);
        float c = dot(pos, pos) - 1.0;
        float discriminant = b * b - 4.0 * a * c;
        // only the positive root is useful
        return (-b - sqrt(discriminant)) / (2.0 * a);
    }
    void main(void) {
        float t = 2000. * 0.5e-2;
        float ratio = 16.0 / 9.0;
        float vertexCount = 147456.0;
        float id = vertexID;
       // float dist_squared = dot(vec2(x, y), vec2(0., 0.));
        // x += (dist_squared) * 200.;
        // float px = x;
        
        // float py = y;
        float ra = t;
        vec2 r = vec2(cos(ra), sin(ra));
        vec3 tr = vec3(-0.5, 1.8 / ratio, 17.9);
        mat3 tm = mat3(
            1.0, 0.0, 0.0,
            0.0, 1.0, 0.0,
            tr.x, tr.y, 1.0
        );
        mat3 rm = mat3(
           r.x, r.y, 0.0, // first column 
          -r.y, r.x, 0.0, // second column
           0.0, 0.0, 1.0  // third column
        );
        mat3 sm = mat3(
            1.5, 0.0, 0.0,
            0.0, 1.5, 0.0,
            0.0, 0.0, 1.0
        );
        mat3 m = tm * sm * rm;
        mat4 tm4 = mat4(
            1.0,  0.0,  0.0,  0.0,
            0.0,  1.0,  0.0,  0.0,
            0.0,  0.0,  1.0,  0.0,
            tr.x, tr.y, tr.z, 1.0
        );
        float pro = 1. / tan((3.14159265 / 2.0) / 2.0);
        mat4 xr = mat4(
           1.0, 0.0, 0.0, 0.0,
           0.0, r.x, -r.y, 0.0,
           0.0, r.y, r.x, 0.0,
           0.0, 0.0, 0.0, 1.0
        );
        // float ya = 0.0;
        // vec2 yyra = vec2(cos(ya), sin(ya));
        // mat4 yyr = mat4(
        //    yyra.x, 0.0, yyra.y, 0.0,
        //    0.0, 1.0, 0.0, 0.0,
        //    -yyra.y, 0.0, yyra.x, 0.0,
        //    0.0, 0.0, 0.0, 1.0
        // );
        mat4 yr = mat4(
           r.x, 0.0, r.y, 0.0,
           0.0, 1.0, 0.0, 0.0,
           -r.y, 0.0, r.x, 0.0,
           0.0, 0.0, 0.0, 1.0
        );
        mat4 zr = mat4(
           r.x, -r.y, 0.0, 0.0, // first column 
          r.y, r.x, 0.0, 0.0, // second column
           0.0, 0.0, 1.0, 0.0,  // third column
           0.0, 0.0, 0.0, 1.0
        );
        float a = 10.;
        vec2 zz = vec2(cos(a), sin(a));
        mat4 zr2 = mat4(
           zz.x, -zz.y, 0.0, 0.0, // first column 
           zz.y, zz.x, 0.0, 0.0, // second column
           0.0, 0.0, 1.0, 0.0,  // third column
           0.0, 0.0, 0.0, 1.0
        );
        mat4 pm = mat4(
            pro, 0.0, 0.0, 0.0,
            0.0, pro, 0.0, 0.0,
            0.0, 0.0, 1.0, 0.0,
            0.0, 0.0, 0.0, 1.0
        );
        // m = m * 4.0;
        // rm = sm * rm;
                // m = tm * m;
        // vec2 pos = cx_mul(vec2(x, y), vec2(0.5, 0.5));
        // pos = cx_mul(pos, vec2(0.75, 0.75));
        float x = ((fract(id / (512. * 0.275))) - 0.5) * 15.;
        float y = ((floor(id / (512. * 1.35)) / (512. * 2.35)) - 0.5 / ratio) * 25.;
                vec2 pos2 = vec2(x, y);
        float turb = 0.0;
        for (float i = 0.0; i < 25.0; i++) {
            float fi = i * 2e-2;
            float ti = time * 1e-2;
            float ts = 0.001 * sin(x * y * 0.25e1) * 5.;
            float xd = cos(distance(pos2 * 0.25, vec2(cos(fi + ti) * fi, sin(fi * 1. + t * 1.02) * fi)) * 50.75 + time * 50.5e-2) * ts;
            float yd = sin(distance(pos2 * 0.25, vec2(cos(fi + ti) * fi, sin(fi * 1. + t * 1.02) * fi)) * 50.75 + time * 50.5e-2) * ts;
            xd += sin(pos2.x * 1e3) * 0.0008;
            pos2.x += xd * cos(xd * 5e1) * 2.946;
            pos2.y += yd * cos(yd * 5e1) * 2.946;
            turb += xd + yd;
        }
        
        
        // float x = cos(id * 1e1) * id * 5e-5;
        // float y = sin(id * 1e1) * id * 5e-5;
        // x = mix(x, x0, 0.8);
        // y = mix(y, y0, 0.8);
        float z = 1.0 + sin(id * x * 5e-1 * t +  x * y * 0.2) * 1.5;
        // z = id / vertexCount * 40. * sin(x * id * 1e2 + tan(id * 1e8) * 1e-1) * 0.5;
        // z = mix(z, 0.0, 0.85);
        z = 0.0;
        z = 0.0;
       // z = z + fbm((vec2(x, y) + 10.0) * 1. + 5990. * 0.0625e-1) * 2.;
                // z += id / vertexCount * 400. * sin(x * id * 1e2 + tan(id * 1e8) * 1e-1) * 0.5;
                // z += tan(id * 1e-4) * id / vertexCount * 0.1;
        float d = distance(vec2(pos2.x, pos2.y), vec2(0.0, 0.0));
        vec4 pos = vec4(pos2.y, z, pos2.x, 1.0);
        // pos = pm * pos;
         pos.y = min(y, intersectSphere(vec3(0.0625, 0.0625, 0.0625), pos.zzz));
        // pos.xyz = rotate(pos.xyz, vec3(0.0, 0.0, 0.0), t);
        pos = zr2 * pos;
        pos = xr * pos;
        // pos = tm4 * pos;
                pos = yr * pos;
        pos = tm4 * pos;
        // pos = yyr * pos;
        // pos = m * pos;
                float sca = 1.0;
//         if (id < 3000.) {
//             float oid = id - 0.;
//             sca = 0.7 * (id / 3000.);
//             pos.x = sin(oid * 5e1 * tan(oid * 1e-5) * time * 1e-6) * oid * 1e-5 - 0.06;
//             pos.y = cos(oid * 5e1 * tan(oid * 1e-5) * time * 1e-6) * oid * 1e-5 + 0.05;
//             pos.z = 0.9;
            
//         }
        gl_Position = vec4(pos.x / ratio * 5., pos.y * 5., 0.0, pos.z * 1.);
        gl_PointSize = (29.5 - (60. * pos.z * 0.02)) * sca;
        alph = 0.25 * 0.75;
        cols = vec3(0.65 + 0.5 / pos.z);
       float vig = (roundedRectangle(pos.xy * 1.5 / pos.z, vec2(0.0, 0.0), vec2(2.5, 1.36) * 0.032 * 6.5, 0.001, 0.05) + 0.0);
        cols = mix(cols, cols * floor(vig), 1.) * sca;
        gl_PointSize *= floor(vig);
    }
    // endGLSL
`;
newFlickeringVert.fragText = `
    // beginGLSL
    precision mediump float;
//     varying vec2 myposition;
//     varying vec2 center;
    varying float alph;
    varying vec3 cols;
    float rand(vec2 co){
        return fract(sin(dot(co.xy ,vec2(12.9898,78.233))) * 43758.5453 * (2.0 + sin(co.x)));
    }
    void main(void) {
        // vec2 uv = gl_PointCoord.xy / vec2(1600, 1600);
        // float d = length(uv - center);
        // vec2 pos = myposition;
        vec2 uv = gl_FragCoord.xy / vec2(2560, 1600);
        // uv.x = uv.x + 1.0;
        uv = uv * 2.0;
        uv = uv + 0.5;
        // uv = uv * 1.0;
        float ALPHA = 0.75;
        vec2 pos = gl_PointCoord - vec2(0.5, 0.5);
                float dist_squared = dot(pos, pos);
        float alpha;
        if (dist_squared < 0.25) {
            alpha = ALPHA;
        } else {
            alpha = 0.0;
        }
        alpha = smoothstep(0.05 / (0.9 + alph), 0.000125, dist_squared) * 0.79;
        float rando = rand(pos);
        // gl_FragColor = vec4(1.0, (1.0 - dist_squared * 40.) * 0.6, 0.0, alpha + ((0.12 - dist_squared) * 4.) - (rando * 0.2));
        gl_FragColor = vec4(1.0, 0.4 - dist_squared, 2.0 + alpha * 120., ((3. - dist_squared * 24.0 * (0.25 + alph)) * 0.045 + alpha)) * 0.5;
        // gl_FragColor.rgb = gl_FragColor.rbr;
        gl_FragColor.rgb = cols;
        // gl_FragColor.b *= 0.75;
        
    }
    // endGLSL
`;
// newFlickeringVert.init();
newFlickeringVert.vertText = newFlickeringVert.vertText.replace(/[^\x00-\x7F]/g, "");
newFlickeringVert.fragText = newFlickeringVert.fragText.replace(/[^\x00-\x7F]/g, "");
newFlickeringVert.init();





newFlickeringVert.vertText = `
    // beginGLSL
    attribute float vertexID;
    uniform float time;
    varying float alph;
    varying vec3 cols;
    #define cx_mul(a, b) vec2(a.x*b.x-a.y*b.y, a.x*b.y+a.y*b.x)
    float roundedRectangle (vec2 uv, vec2 pos, vec2 size, float radius, float thickness) {
        float d = length(max(abs(uv - pos),size) - size) - radius;
        return smoothstep(0.66, 0.33, d / thickness * 5.0);
    }
    const mat2 mr = mat2 (
        0.84147,  0.54030,
        0.54030, -0.84147
    );
    float hash(in float n) {
      return fract(sin(n)*43758.5453);
    }
    float noise(in vec2 x) {
        vec2 p = floor(x);
        vec2 f = fract(x);
        f = f*f*(3.0-2.0*f);  
        float n = p.x + p.y*57.0;
        float res = mix(mix( hash(n+  0.0), hash(n+  1.0),f.x),
              mix( hash(n+ 57.0), hash(n+ 58.0),f.x),f.y);
        return res;
    }
    float fbm( in vec2 p ) {
        float f;
        f  = 0.5000*noise( p ); p = mr*p*2.02;
        f += 0.2500*noise( p ); p = mr*p*2.33;
        f += 0.1250*noise( p ); p = mr*p*2.01;
        f += 0.0625*noise( p ); p = mr*p*5.21;
        return f/(0.9375)*smoothstep( 260., 768., p.y ); // flat at beginning
    }
    float intersectSphere(vec3 pos, vec3 dir) {
        // solve pos + k*dir = unit sphere surface
        // dot(pos + k*dir, pos + k*dir) = 1
        // quadratic coefficients
        float a = dot(dir, dir);
        float b = 50.5 * dot(pos, dir);
        float c = dot(pos, pos) - 1.0;
        float discriminant = b * b - 4.0 * a * c;
        // only the positive root is useful
        return (-b - sqrt(discriminant)) / (2.0 * a);
    }
    void main(void) {
        float t = 2000. * 0.5e-2;
        float ratio = 16.0 / 9.0;
        float vertexCount = 147456.0;
        float id = vertexID;
       // float dist_squared = dot(vec2(x, y), vec2(0., 0.));
        // x += (dist_squared) * 200.;
        // float px = x;
        
        // float py = y;
        float ra = t;
        vec2 r = vec2(cos(ra), sin(ra));
        vec3 tr = vec3(-0.5, 1.8 / ratio, 17.9);
        mat3 tm = mat3(
            1.0, 0.0, 0.0,
            0.0, 1.0, 0.0,
            tr.x, tr.y, 1.0
        );
        mat3 rm = mat3(
           r.x, r.y, 0.0, // first column 
          -r.y, r.x, 0.0, // second column
           0.0, 0.0, 1.0  // third column
        );
        mat3 sm = mat3(
            1.5, 0.0, 0.0,
            0.0, 1.5, 0.0,
            0.0, 0.0, 1.0
        );
        mat3 m = tm * sm * rm;
        mat4 tm4 = mat4(
            1.0,  0.0,  0.0,  0.0,
            0.0,  1.0,  0.0,  0.0,
            0.0,  0.0,  1.0,  0.0,
            tr.x, tr.y, tr.z, 1.0
        );
        float pro = 1. / tan((3.14159265 / 2.0) / 2.0);
        mat4 xr = mat4(
           1.0, 0.0, 0.0, 0.0,
           0.0, r.x, -r.y, 0.0,
           0.0, r.y, r.x, 0.0,
           0.0, 0.0, 0.0, 1.0
        );
        // float ya = 0.0;
        // vec2 yyra = vec2(cos(ya), sin(ya));
        // mat4 yyr = mat4(
        //    yyra.x, 0.0, yyra.y, 0.0,
        //    0.0, 1.0, 0.0, 0.0,
        //    -yyra.y, 0.0, yyra.x, 0.0,
        //    0.0, 0.0, 0.0, 1.0
        // );
        mat4 yr = mat4(
           r.x, 0.0, r.y, 0.0,
           0.0, 1.0, 0.0, 0.0,
           -r.y, 0.0, r.x, 0.0,
           0.0, 0.0, 0.0, 1.0
        );
        mat4 zr = mat4(
           r.x, -r.y, 0.0, 0.0, // first column 
          r.y, r.x, 0.0, 0.0, // second column
           0.0, 0.0, 1.0, 0.0,  // third column
           0.0, 0.0, 0.0, 1.0
        );
        float a = 10.;
        vec2 zz = vec2(cos(a), sin(a));
        mat4 zr2 = mat4(
           zz.x, -zz.y, 0.0, 0.0, // first column 
           zz.y, zz.x, 0.0, 0.0, // second column
           0.0, 0.0, 1.0, 0.0,  // third column
           0.0, 0.0, 0.0, 1.0
        );
        mat4 pm = mat4(
            pro, 0.0, 0.0, 0.0,
            0.0, pro, 0.0, 0.0,
            0.0, 0.0, 1.0, 0.0,
            0.0, 0.0, 0.0, 1.0
        );
        // m = m * 4.0;
        // rm = sm * rm;
                // m = tm * m;
        // vec2 pos = cx_mul(vec2(x, y), vec2(0.5, 0.5));
        // pos = cx_mul(pos, vec2(0.75, 0.75));
        float x = ((fract(id / (512. * 2.275))) - 0.5) * 15.;
        float y = ((floor(id / (512. * 1.05)) / (512. * 2.35)) - 0.5 / ratio) * 25.;
                vec2 pos2 = vec2(x, y);
        float turb = 0.0;
        for (float i = 0.0; i < 25.0; i++) {
            float fi = i * 2e-2;
            float ti = time * 1e-2;
            float ts = 0.001 * sin(x * y * 0.25e1) * 5.;
            float xd = cos(distance(pos2 * 0.25, vec2(cos(fi + ti) * fi, sin(fi * 1. + t * 1.02) * fi)) * 50.75 + time * 50.5e-2) * ts;
            float yd = sin(distance(pos2 * 0.25, vec2(cos(fi + ti) * fi, sin(fi * 1. + t * 1.02) * fi)) * 50.75 + time * 50.5e-2) * ts;
            xd += sin(pos2.x * 1e3) * 0.0008;
            pos2.x += xd * cos(xd * 5e1) * 2.946;
            pos2.y += yd * cos(yd * 5e1) * 2.946;
            turb += xd + yd;
        }
        
        
        // float x = cos(id * 1e1) * id * 5e-5;
        // float y = sin(id * 1e1) * id * 5e-5;
        // x = mix(x, x0, 0.8);
        // y = mix(y, y0, 0.8);
        float z = 1.0 + sin(id * x * 5e-1 * t +  x * y * 0.2) * 1.5;
        // z = id / vertexCount * 40. * sin(x * id * 1e2 + tan(id * 1e8) * 1e-1) * 0.5;
        // z = mix(z, 0.0, 0.85);
        z = 0.0;
        z = 0.0;
       y = y + fbm((vec2(x, y) + 10.0) * 1. + 599. * 0.625e-1) * 50.;
                // z += id / vertexCount * 400. * sin(x * id * 1e2 + tan(id * 1e8) * 1e-1) * 0.5;
                // z += tan(id * 1e-4) * id / vertexCount * 0.1;
        float d = distance(vec2(pos2.x, pos2.y), vec2(0.0, 0.0));
        vec4 pos = vec4(pos2.y, z, pos2.x, 1.0);
        // pos = pm * pos;
         pos.y = min(y, intersectSphere(vec3(0.0625, 0.0625, 0.0625), pos.zzz * 0.125 * 0.5));
         // pos.x = min(x, intersectSphere(vec3(0.0625, 0.0625, 0.0625), pos.xxx * 0.5) * 0.1);
        // pos.xyz = rotate(pos.xyz, vec3(0.0, 0.0, 0.0), t);
        pos = zr2 * pos;
        pos = xr * pos;
        // pos = tm4 * pos;
                pos = yr * pos;
        pos = tm4 * pos;
        // pos = yyr * pos;
        // pos = m * pos;
                float sca = 1.0;
//         if (id < 3000.) {
//             float oid = id - 0.;
//             sca = 0.7 * (id / 3000.);
//             pos.x = sin(oid * 5e1 * tan(oid * 1e-5) * time * 1e-6) * oid * 1e-5 - 0.06;
//             pos.y = cos(oid * 5e1 * tan(oid * 1e-5) * time * 1e-6) * oid * 1e-5 + 0.05;
//             pos.z = 0.9;
            
//         }
        gl_Position = vec4(pos.x / ratio * 4., pos.y * 4., 0.0, pos.z * 1.);
        gl_PointSize = (29.5 - (60. * pos.z * 0.02)) * sca;
        alph = 0.25 * 0.75;
        cols = vec3(0.65 + 0.5 / pos.z);
       float vig = (roundedRectangle(pos.xy * 1.5 / pos.z, vec2(0.0, 0.0), vec2(2.48, 1.36) * 0.04 * 6.5, 0.001, 0.05) + 0.0);
        cols = mix(cols, cols * floor(vig), 1.) * sca;
        gl_PointSize *= floor(vig);
    }
    // endGLSL
`;
newFlickeringVert.fragText = `
    // beginGLSL
    precision mediump float;
//     varying vec2 myposition;
//     varying vec2 center;
    varying float alph;
    varying vec3 cols;
    float rand(vec2 co){
        return fract(sin(dot(co.xy ,vec2(12.9898,78.233))) * 43758.5453 * (2.0 + sin(co.x)));
    }
    void main(void) {
        // vec2 uv = gl_PointCoord.xy / vec2(1600, 1600);
        // float d = length(uv - center);
        // vec2 pos = myposition;
        vec2 uv = gl_FragCoord.xy / vec2(2560, 1600);
        // uv.x = uv.x + 1.0;
        uv = uv * 2.0;
        uv = uv + 0.5;
        // uv = uv * 1.0;
        float ALPHA = 0.75;
        vec2 pos = gl_PointCoord - vec2(0.5, 0.5);
                float dist_squared = dot(pos, pos);
        float alpha;
        if (dist_squared < 0.25) {
            alpha = ALPHA;
        } else {
            alpha = 0.0;
        }
        alpha = smoothstep(0.05 / (0.9 + alph), 0.000125, dist_squared) * 0.79;
        float rando = rand(pos);
        // gl_FragColor = vec4(1.0, (1.0 - dist_squared * 40.) * 0.6, 0.0, alpha + ((0.12 - dist_squared) * 4.) - (rando * 0.2));
        gl_FragColor = vec4(1.0, 0.4 - dist_squared, 2.0 + alpha * 120., ((3. - dist_squared * 24.0 * (0.25 + alph)) * 0.045 + alpha)) * 0.5;
        // gl_FragColor.rgb = gl_FragColor.rbr;
        gl_FragColor.rgb = cols;
        // gl_FragColor.b *= 0.75;
        
    }
    // endGLSL
`;
// newFlickeringVert.init();
newFlickeringVert.vertText = newFlickeringVert.vertText.replace(/[^\x00-\x7F]/g, "");
newFlickeringVert.fragText = newFlickeringVert.fragText.replace(/[^\x00-\x7F]/g, "");
newFlickeringVert.init();



newFlickeringVert.vertText = `
    // beginGLSL
    attribute float vertexID;
    uniform float time;
    varying float alph;
    varying vec3 cols;
    #define cx_mul(a, b) vec2(a.x*b.x-a.y*b.y, a.x*b.y+a.y*b.x)
    float roundedRectangle (vec2 uv, vec2 pos, vec2 size, float radius, float thickness) {
        float d = length(max(abs(uv - pos),size) - size) - radius;
        return smoothstep(0.66, 0.33, d / thickness * 5.0);
    }
    const mat2 mr = mat2 (
        0.84147,  0.54030,
        0.54030, -0.84147
    );
    float hash(in float n) {
      return fract(sin(n)*43758.5453);
    }
    float noise(in vec2 x) {
        vec2 p = floor(x);
        vec2 f = fract(x);
        f = f*f*(3.0-2.0*f);  
        float n = p.x + p.y*57.0;
        float res = mix(mix( hash(n+  0.0), hash(n+  1.0),f.x),
              mix( hash(n+ 57.0), hash(n+ 58.0),f.x),f.y);
        return res;
    }
    float fbm( in vec2 p ) {
        float f;
        f  = 0.5000*noise( p ); p = mr*p*2.02;
        f += 0.2500*noise( p ); p = mr*p*2.33;
        f += 0.1250*noise( p ); p = mr*p*2.01;
        f += 0.0625*noise( p ); p = mr*p*5.21;
        return f/(0.9375)*smoothstep( 260., 768., p.y ); // flat at beginning
    }
    float intersectSphere(vec3 pos, vec3 dir) {
        // solve pos + k*dir = unit sphere surface
        // dot(pos + k*dir, pos + k*dir) = 1
        // quadratic coefficients
        float a = dot(dir, dir);
        float b = 50.5 * dot(pos, dir);
        float c = dot(pos, pos) - 1.0;
        float discriminant = b * b - 4.0 * a * c;
        // only the positive root is useful
        return (-b - sqrt(discriminant)) / (2.0 * a);
    }
    void main(void) {
        float t = 2000. * 0.5e-2;
        float ratio = 16.0 / 9.0;
        float vertexCount = 147456.0;
        float id = vertexID;
       // float dist_squared = dot(vec2(x, y), vec2(0., 0.));
        // x += (dist_squared) * 200.;
        // float px = x;
        
        // float py = y;
        float ra = t;
        vec2 r = vec2(cos(ra), sin(ra));
        vec3 tr = vec3(-0.5, 1.8 / ratio, 17.9);
        mat3 tm = mat3(
            1.0, 0.0, 0.0,
            0.0, 1.0, 0.0,
            tr.x, tr.y, 1.0
        );
        mat3 rm = mat3(
           r.x, r.y, 0.0, // first column 
          -r.y, r.x, 0.0, // second column
           0.0, 0.0, 1.0  // third column
        );
        mat3 sm = mat3(
            1.5, 0.0, 0.0,
            0.0, 1.5, 0.0,
            0.0, 0.0, 1.0
        );
        mat3 m = tm * sm * rm;
        mat4 tm4 = mat4(
            1.0,  0.0,  0.0,  0.0,
            0.0,  1.0,  0.0,  0.0,
            0.0,  0.0,  1.0,  0.0,
            tr.x, tr.y, tr.z, 1.0
        );
        float pro = 1. / tan((3.14159265 / 2.0) / 2.0);
        mat4 xr = mat4(
           1.0, 0.0, 0.0, 0.0,
           0.0, r.x, -r.y, 0.0,
           0.0, r.y, r.x, 0.0,
           0.0, 0.0, 0.0, 1.0
        );
        // float ya = 0.0;
        // vec2 yyra = vec2(cos(ya), sin(ya));
        // mat4 yyr = mat4(
        //    yyra.x, 0.0, yyra.y, 0.0,
        //    0.0, 1.0, 0.0, 0.0,
        //    -yyra.y, 0.0, yyra.x, 0.0,
        //    0.0, 0.0, 0.0, 1.0
        // );
        mat4 yr = mat4(
           r.x, 0.0, r.y, 0.0,
           0.0, 1.0, 0.0, 0.0,
           -r.y, 0.0, r.x, 0.0,
           0.0, 0.0, 0.0, 1.0
        );
        mat4 zr = mat4(
           r.x, -r.y, 0.0, 0.0, // first column 
          r.y, r.x, 0.0, 0.0, // second column
           0.0, 0.0, 1.0, 0.0,  // third column
           0.0, 0.0, 0.0, 1.0
        );
        float a = 10.;
        vec2 zz = vec2(cos(a), sin(a));
        mat4 zr2 = mat4(
           zz.x, -zz.y, 0.0, 0.0, // first column 
           zz.y, zz.x, 0.0, 0.0, // second column
           0.0, 0.0, 1.0, 0.0,  // third column
           0.0, 0.0, 0.0, 1.0
        );
        mat4 pm = mat4(
            pro, 0.0, 0.0, 0.0,
            0.0, pro, 0.0, 0.0,
            0.0, 0.0, 1.0, 0.0,
            0.0, 0.0, 0.0, 1.0
        );
        // m = m * 4.0;
        // rm = sm * rm;
                // m = tm * m;
        // vec2 pos = cx_mul(vec2(x, y), vec2(0.5, 0.5));
        // pos = cx_mul(pos, vec2(0.75, 0.75));
        float x = ((fract(id / (512. * 2.275))) - 0.5) * 15.;
        float y = ((floor(id / (512. * 1.05)) / (512. * 2.35)) - 0.5 / ratio) * 25.;
                vec2 pos2 = vec2(x, y);
        float turb = 0.0;
        for (float i = 0.0; i < 25.0; i++) {
            float fi = i * 2e-2;
            float ti = time * 1e-4;
            float ts = 0.001 * sin(x * y * 0.25e1) * 5.;
            float xd = cos(distance(pos2 * 0.125, vec2(cos(fi + ti) * fi, sin(fi * 1. + t * 1.02) * fi)) * 50.75 + time * 10.5e-2) * ts;
            float yd = sin(distance(pos2 * 0.125, vec2(cos(fi + ti) * fi, sin(fi * 1. + t * 1.02) * fi)) * 50.75 + time * 10.5e-2) * ts;
            xd += sin(pos2.x * 1e3) * 0.0001;
            pos2.x += xd * cos(xd * 5e1) * 2.946;
            pos2.y += yd * cos(yd * 5e1) * 2.946;
            turb += xd + yd;
        }
        
        
        // float x = cos(id * 1e1) * id * 5e-5;
        // float y = sin(id * 1e1) * id * 5e-5;
        // x = mix(x, x0, 0.8);
        // y = mix(y, y0, 0.8);
        float z = 1.0 + sin(id * x * 5e-1 * t +  x * y * 0.2) * 1.5;
        // z = id / vertexCount * 40. * sin(x * id * 1e2 + tan(id * 1e8) * 1e-1) * 0.5;
        // z = mix(z, 0.0, 0.85);
        z = 0.0;
        z = 0.0;
       y = y + fbm((vec2(x, y) + 10.0) * 1. + 599. * 0.625e-1) * 50.;
                // z += id / vertexCount * 400. * sin(x * id * 1e2 + tan(id * 1e8) * 1e-1) * 0.5;
                // z += tan(id * 1e-4) * id / vertexCount * 0.1;
        float d = distance(vec2(pos2.x, pos2.y), vec2(0.0, 0.0));
        vec4 pos = vec4(pos2.y, z, pos2.x, 1.0);
        // pos = pm * pos;
         pos.y = min(y, intersectSphere(vec3(0.0625, 0.0625, 0.0625), pos.zzz * 0.125 * 0.5));
         // pos.x = min(x, intersectSphere(vec3(0.0625, 0.0625, 0.0625), pos.xxx * 0.5) * 0.1);
        // pos.xyz = rotate(pos.xyz, vec3(0.0, 0.0, 0.0), t);
        pos = zr2 * pos;
        pos = xr * pos;
        // pos = tm4 * pos;
                pos = yr * pos;
        pos = tm4 * pos;
        // pos = yyr * pos;
        // pos = m * pos;
                float sca = 1.0;
//         if (id < 3000.) {
//             float oid = id - 0.;
//             sca = 0.7 * (id / 3000.);
//             pos.x = sin(oid * 5e1 * tan(oid * 1e-5) * time * 1e-6) * oid * 1e-5 - 0.06;
//             pos.y = cos(oid * 5e1 * tan(oid * 1e-5) * time * 1e-6) * oid * 1e-5 + 0.05;
//             pos.z = 0.9;
            
//         }
        gl_Position = vec4(pos.x / ratio * 4., pos.y * 4., 0.0, pos.z * 1.);
        gl_PointSize = (29.5 - (60. * pos.z * 0.02)) * sca;
        alph = 0.25 * 0.75;
        cols = vec3(0.65 + 0.5 / pos.z);
       float vig = (roundedRectangle(pos.xy * 1.5 / pos.z, vec2(0.0, 0.0), vec2(2.48, 1.36) * 0.04 * 6.5, 0.001, 0.05) + 0.0);
        cols = mix(cols, cols * floor(vig), 1.) * sca;
        gl_PointSize *= floor(vig);
    }
    // endGLSL
`;
newFlickeringVert.fragText = `
    // beginGLSL
    precision mediump float;
//     varying vec2 myposition;
//     varying vec2 center;
    varying float alph;
    varying vec3 cols;
    float rand(vec2 co){
        return fract(sin(dot(co.xy ,vec2(12.9898,78.233))) * 43758.5453 * (2.0 + sin(co.x)));
    }
    void main(void) {
        // vec2 uv = gl_PointCoord.xy / vec2(1600, 1600);
        // float d = length(uv - center);
        // vec2 pos = myposition;
        vec2 uv = gl_FragCoord.xy / vec2(2560, 1600);
        // uv.x = uv.x + 1.0;
        uv = uv * 2.0;
        uv = uv + 0.5;
        // uv = uv * 1.0;
        float ALPHA = 0.75;
        vec2 pos = gl_PointCoord - vec2(0.5, 0.5);
                float dist_squared = dot(pos, pos);
        float alpha;
        if (dist_squared < 0.25) {
            alpha = ALPHA;
        } else {
            alpha = 0.0;
        }
        alpha = smoothstep(0.05 / (0.9 + alph), 0.000125, dist_squared) * 0.79;
        float rando = rand(pos);
        // gl_FragColor = vec4(1.0, (1.0 - dist_squared * 40.) * 0.6, 0.0, alpha + ((0.12 - dist_squared) * 4.) - (rando * 0.2));
        gl_FragColor = vec4(1.0, 0.4 - dist_squared, 2.0 + alpha * 120., ((3. - dist_squared * 24.0 * (0.25 + alph)) * 0.045 + alpha)) * 0.5;
        // gl_FragColor.rgb = gl_FragColor.rbr;
        gl_FragColor.rgb = cols;
        // gl_FragColor.b *= 0.75;
        
    }
    // endGLSL
`;
// newFlickeringVert.init();
newFlickeringVert.vertText = newFlickeringVert.vertText.replace(/[^\x00-\x7F]/g, "");
newFlickeringVert.fragText = newFlickeringVert.fragText.replace(/[^\x00-\x7F]/g, "");
newFlickeringVert.init();




newFlickeringVert.vertText = `
    // beginGLSL
    attribute float vertexID;
    uniform float time;
    varying float alph;
    varying vec3 cols;
    #define cx_mul(a, b) vec2(a.x*b.x-a.y*b.y, a.x*b.y+a.y*b.x)
    float roundedRectangle (vec2 uv, vec2 pos, vec2 size, float radius, float thickness) {
        float d = length(max(abs(uv - pos),size) - size) - radius;
        return smoothstep(0.66, 0.33, d / thickness * 5.0);
    }
    const mat2 mr = mat2 (
        0.84147,  0.54030,
        0.54030, -0.84147
    );
    float hash(in float n) {
      return fract(sin(n)*43758.5453);
    }
    float noise(in vec2 x) {
        vec2 p = floor(x);
        vec2 f = fract(x);
        f = f*f*(3.0-2.0*f);  
        float n = p.x + p.y*57.0;
        float res = mix(mix( hash(n+  0.0), hash(n+  1.0),f.x),
              mix( hash(n+ 57.0), hash(n+ 58.0),f.x),f.y);
        return res;
    }
    float fbm( in vec2 p ) {
        float f;
        f  = 0.5000*noise( p ); p = mr*p*2.02;
        f += 0.2500*noise( p ); p = mr*p*2.33;
        f += 0.1250*noise( p ); p = mr*p*2.01;
        f += 0.0625*noise( p ); p = mr*p*5.21;
        return f/(0.9375)*smoothstep( 260., 768., p.y ); // flat at beginning
    }
    float intersectSphere(vec3 pos, vec3 dir) {
        // solve pos + k*dir = unit sphere surface
        // dot(pos + k*dir, pos + k*dir) = 1
        // quadratic coefficients
        float a = dot(dir, dir);
        float b = 2. * dot(pos, dir);
        float c = dot(pos, pos) - 1.0;
        float discriminant = b * b - 4.0 * a * c;
        // only the positive root is useful
        return (-b - sqrt(discriminant)) / (2.0 * a);
    }
    void main(void) {
        float t = time * 0.5e-2;
        float ratio = 16.0 / 9.0;
        float vertexCount = 147456.0;
        float id = vertexID;
       // float dist_squared = dot(vec2(x, y), vec2(0., 0.));
        // x += (dist_squared) * 200.;
        // float px = x;
        
        // float py = y;
        float ra = 1007687. * 5.;
        vec2 r = vec2(cos(ra), sin(ra));
        vec3 tr = vec3(-0.5, 1.8 / ratio, 17.9);
        mat3 tm = mat3(
            1.0, 0.0, 0.0,
            0.0, 1.0, 0.0,
            tr.x, tr.y, 1.0
        );
        mat3 rm = mat3(
           r.x, r.y, 0.0, // first column 
          -r.y, r.x, 0.0, // second column
           0.0, 0.0, 1.0  // third column
        );
        mat3 sm = mat3(
            1.5, 0.0, 0.0,
            0.0, 1.5, 0.0,
            0.0, 0.0, 1.0
        );
        mat3 m = tm * sm * rm;
        mat4 tm4 = mat4(
            1.0,  0.0,  0.0,  0.0,
            0.0,  1.0,  0.0,  0.0,
            0.0,  0.0,  1.0,  0.0,
            tr.x, tr.y, tr.z, 1.0
        );
        float pro = 1. / tan((3.14159265 / 2.0) / 2.0);
        mat4 xr = mat4(
           1.0, 0.0, 0.0, 0.0,
           0.0, r.x, -r.y, 0.0,
           0.0, r.y, r.x, 0.0,
           0.0, 0.0, 0.0, 1.0
        );
        // float ya = 0.0;
        // vec2 yyra = vec2(cos(ya), sin(ya));
        // mat4 yyr = mat4(
        //    yyra.x, 0.0, yyra.y, 0.0,
        //    0.0, 1.0, 0.0, 0.0,
        //    -yyra.y, 0.0, yyra.x, 0.0,
        //    0.0, 0.0, 0.0, 1.0
        // );
        mat4 yr = mat4(
           r.x, 0.0, r.y, 0.0,
           0.0, 1.0, 0.0, 0.0,
           -r.y, 0.0, r.x, 0.0,
           0.0, 0.0, 0.0, 1.0
        );
        mat4 zr = mat4(
           r.x, -r.y, 0.0, 0.0, // first column 
          r.y, r.x, 0.0, 0.0, // second column
           0.0, 0.0, 1.0, 0.0,  // third column
           0.0, 0.0, 0.0, 1.0
        );
        float a = 10.;
        vec2 zz = vec2(cos(a), sin(a));
        mat4 zr2 = mat4(
           zz.x, -zz.y, 0.0, 0.0, // first column 
           zz.y, zz.x, 0.0, 0.0, // second column
           0.0, 0.0, 1.0, 0.0,  // third column
           0.0, 0.0, 0.0, 1.0
        );
        mat4 pm = mat4(
            pro, 0.0, 0.0, 0.0,
            0.0, pro, 0.0, 0.0,
            0.0, 0.0, 1.0, 0.0,
            0.0, 0.0, 0.0, 1.0
        );
        // m = m * 4.0;
        // rm = sm * rm;
                // m = tm * m;
        // vec2 pos = cx_mul(vec2(x, y), vec2(0.5, 0.5));
        // pos = cx_mul(pos, vec2(0.75, 0.75));
        float x = ((fract(id / (512. * 1.))) - 0.5) * 12.;
        float y = ((floor(id / (512. * 0.5)) / (512. * 1.)) - 0.5 / ratio) * 12.;
                vec2 pos2 = vec2(x, y);
        float turb = 0.0;
        for (float i = 0.0; i < 25.0; i++) {
            float fi = i * 2e-2;
            float ti = time * 1e-4;
            float ts = 0.001 * sin(x * y * 0.25e1) * 5.;
            float xd = cos(distance(pos2 * 0.125, vec2(cos(fi + ti) * fi, sin(fi * 1. + t * 1.02) * fi)) * 50.75 + time * 10.5e-2) * ts;
            float yd = sin(distance(pos2 * 0.125, vec2(cos(fi + ti) * fi, sin(fi * 1. + t * 1.02) * fi)) * 50.75 + time * 10.5e-2) * ts;
            xd += sin(pos2.x * 1e3) * 0.0001;
            pos2.x += xd * cos(xd * 5e1) * 2.946;
            pos2.y += yd * cos(yd * 5e1) * 2.946;
            turb += xd + yd;
        }
        
        
        // float x = cos(id * 1e1) * id * 5e-5;
        // float y = sin(id * 1e1) * id * 5e-5;
        // x = mix(x, x0, 0.8);
        // y = mix(y, y0, 0.8);
        float z = 1.0 + sin(id * x * 5e-1 * t +  x * y * 0.2) * 1.5;
        // z = id / vertexCount * 40. * sin(x * id * 1e2 + tan(id * 1e8) * 1e-1) * 0.5;
        // z = mix(z, 0.0, 0.85);
        z = 0.0;
        z = 0.0;
       // z = z + fbm((vec2(x, y) + 1.0) * 1. + 599. * 0.625e-1) * 10.;
                // z += id / vertexCount * 400. * sin(x * id * 1e2 + tan(id * 1e8) * 1e-1) * 0.5;
                // z += tan(id * 1e-4) * id / vertexCount * 0.1;
        float d = distance(vec2(pos2.x, pos2.y), vec2(0.0, 0.0));
        vec4 pos = vec4(pos2.x * 1., pos2.y * 1., z, 1.0);
        // pos = pm * pos;
         // pos.z = min(z, intersectSphere(vec3(0.5, 0.0, 0.0), pos.xyz));
        // pos.x = min(x, intersectSphere(vec3(0.5, 0.0, 0.0), pos.xyz));
        float inter = intersectSphere(vec3(0.0, 0.0, 0.0), pos.xyz * 1.) * 2.;
        // pos.z += pow(inter, 0.5) * 40.;
        float dist_squared = dot(pos.xyz, vec3(0.2, 0., 0.0));
       // pos.z += dist_squared * 1. * 1.;
        // float zo = 0.0;
        float PI = 3.14159;
        float hPI = PI / 2.;
        float di = PI / 10.;
        for (float ii = 0.; ii < (1.570795); ii += 1.570795 / 12.) {
        // float l = distance(pos.xyz, vec3(2.4 * (sin(t * 1e1) + 1.0), 0.0, 0.0));
            float l = distance(pos.xyz, vec3(cos(ii * 4.) * 4., sin(ii * 4.) * 4. + 3.5, 0.0));
            l = smoothstep(0.9, 0.6, l);
            float mo = pow(l, 0.5) * (0.1);
            pos.z -= max(pos.z, mo * 48.);
            // zo += mo;
        }
        pos.z = pos.z + fbm((vec2(x, y) * 0.4 + 1.0) * 1. + 599. * 0.625e-1) * 1.1;
        // pos.z -= 42.0;
        // pos.z -= zo * 0.5;
        // pos.x = min(x, intersectSphere(vec3(0.0625, 0.0625, 0.0625), pos.xxx * 0.5) * 0.1);
        // pos.xyz = rotate(pos.xyz, vec3(0.0, 0.0, 0.0), t);
        // pos = zr2 * pos;
        pos = xr * pos;
        pos = tm4 * pos;
                // pos = yr * pos;
        // pos = tm4 * pos;
        // pos = yyr * pos;
        // pos = m * pos;
                float sca = 1.0;
//         if (id < 3000.) {
//             float oid = id - 0.;
//             sca = 0.7 * (id / 3000.);
//             pos.x = sin(oid * 5e1 * tan(oid * 1e-5) * time * 1e-6) * oid * 1e-5 - 0.06;
//             pos.y = cos(oid * 5e1 * tan(oid * 1e-5) * time * 1e-6) * oid * 1e-5 + 0.05;
//             pos.z = 0.9;
            
//         }
        gl_Position = vec4(pos.x / ratio * 4., pos.y * 4. - 10., 0.0, pos.z * 1.);
        // gl_PointSize = (29.5 - (60. * pos.z * 0.02)) * sca;
        gl_PointSize = 7.;
        alph = 0.25 * 0.75;
        cols = vec3(0.65 + 0.5 / pos.z);
       // float vig = (roundedRectangle(pos.xy * 1.5 / pos.z, vec2(0.0, 0.0), vec2(2.48, 1.36) * 0.04 * 6.5, 0.001, 0.05) + 0.0);
        // cols = mix(cols, cols * floor(vig), 1.) * sca;
        // gl_PointSize *= floor(vig);
    }
    // endGLSL
`;
newFlickeringVert.fragText = `
    // beginGLSL
    precision mediump float;
//     varying vec2 myposition;
//     varying vec2 center;
    varying float alph;
    varying vec3 cols;
    float rand(vec2 co){
        return fract(sin(dot(co.xy ,vec2(12.9898,78.233))) * 43758.5453 * (2.0 + sin(co.x)));
    }
    void main(void) {
        // vec2 uv = gl_PointCoord.xy / vec2(1600, 1600);
        // float d = length(uv - center);
        // vec2 pos = myposition;
        vec2 uv = gl_FragCoord.xy / vec2(2560, 1600);
        // uv.x = uv.x + 1.0;
        uv = uv * 2.0;
        uv = uv + 0.5;
        // uv = uv * 1.0;
        float ALPHA = 0.75;
        vec2 pos = gl_PointCoord - vec2(0.5, 0.5);
                float dist_squared = dot(pos, pos);
        float alpha;
        if (dist_squared < 0.25) {
            alpha = ALPHA;
        } else {
            alpha = 0.0;
        }
        alpha = smoothstep(0.05 / (0.9 + alph), 0.000125, dist_squared) * 0.79;
        float rando = rand(pos);
        // gl_FragColor = vec4(1.0, (1.0 - dist_squared * 40.) * 0.6, 0.0, alpha + ((0.12 - dist_squared) * 4.) - (rando * 0.2));
        gl_FragColor = vec4(1.0, 0.4 - dist_squared, 2.0 + alpha * 120., ((3. - dist_squared * 24.0 * (0.25 + alph)) * 0.045 + alpha)) * 0.5;
        // gl_FragColor.rgb = gl_FragColor.rbr;
        gl_FragColor.rgb = cols;
        // gl_FragColor.b *= 0.75;
        
    }
    // endGLSL
`;
// newFlickeringVert.init();
newFlickeringVert.vertText = newFlickeringVert.vertText.replace(/[^\x00-\x7F]/g, "");
newFlickeringVert.fragText = newFlickeringVert.fragText.replace(/[^\x00-\x7F]/g, "");
newFlickeringVert.init();




newFlickeringVert.vertText = `
    // beginGLSL
    attribute float vertexID;
    uniform float time;
    varying float alph;
    varying vec3 cols;
    #define cx_mul(a, b) vec2(a.x*b.x-a.y*b.y, a.x*b.y+a.y*b.x)
    float roundedRectangle (vec2 uv, vec2 pos, vec2 size, float radius, float thickness) {
        float d = length(max(abs(uv - pos),size) - size) - radius;
        return smoothstep(0.66, 0.33, d / thickness * 5.0);
    }
    const mat2 mr = mat2 (
        0.84147,  0.54030,
        0.54030, -0.84147
    );
    float hash(in float n) {
      return fract(sin(n)*43758.5453);
    }
    float noise(in vec2 x) {
        vec2 p = floor(x);
        vec2 f = fract(x);
        f = f*f*(3.0-2.0*f);  
        float n = p.x + p.y*57.0;
        float res = mix(mix( hash(n+  0.0), hash(n+  1.0),f.x),
              mix( hash(n+ 57.0), hash(n+ 58.0),f.x),f.y);
        return res;
    }
    float fbm( in vec2 p ) {
        float f;
        f  = 0.5000*noise( p ); p = mr*p*2.02;
        f += 0.2500*noise( p ); p = mr*p*2.33;
        f += 0.1250*noise( p ); p = mr*p*2.01;
        f += 0.0625*noise( p ); p = mr*p*5.21;
        return f/(0.9375)*smoothstep( 260., 768., p.y ); // flat at beginning
    }
    void main(void) {
        float t = 1100. * 0.5e-2;
        float ratio = 16.0 / 9.0;
        float vertexCount = 147456.0;
        float id = vertexID;
       // float dist_squared = dot(vec2(x, y), vec2(0., 0.));
        // x += (dist_squared) * 200.;
        // float px = x;
        // float py = y;
        vec2 r = vec2(cos(t * 0.5), sin(t * 0.5));
        vec3 tr = vec3(0.0, 0.2 / ratio, 18.9);
        mat3 tm = mat3(
            1.0, 0.0, 0.0,
            0.0, 1.0, 0.0,
            tr.x, tr.y, 1.0
        );
        mat3 rm = mat3(
           r.x, r.y, 0.0, // first column 
          -r.y, r.x, 0.0, // second column
           0.0, 0.0, 1.0  // third column
        );
        mat3 sm = mat3(
            1.5, 0.0, 0.0,
            0.0, 1.5, 0.0,
            0.0, 0.0, 1.0
        );
        mat3 m = tm * sm * rm;
        mat4 tm4 = mat4(
            1.0,  0.0,  0.0,  0.0,
            0.0,  1.0,  0.0,  0.0,
            0.0,  0.0,  1.0,  0.0,
            tr.x, tr.y, tr.z, 1.0
        );
        float pro = 1. / tan((3.14159265 / 2.0) / 2.0);
        mat4 xr = mat4(
           1.0, 0.0, 0.0, 0.0,
           0.0, r.x, -r.y, 0.0,
           0.0, r.y, r.x, 0.0,
           0.0, 0.0, 0.0, 1.0
        );
        mat4 yr = mat4(
           r.x, 0.0, r.y, 0.0,
           0.0, 1.0, 0.0, 0.0,
           -r.y, 0.0, r.x, 0.0,
           0.0, 0.0, 0.0, 1.0
        );
        mat4 zr = mat4(
           r.x, -r.y, 0.0, 0.0, // first column 
          r.y, r.x, 0.0, 0.0, // second column
           0.0, 0.0, 1.0, 0.0,  // third column
           0.0, 0.0, 0.0, 1.0
        );
        float a = 10.;
        vec2 zz = vec2(cos(a), sin(a));
        mat4 zr2 = mat4(
           zz.x, -zz.y, 0.0, 0.0, // first column 
           zz.y, zz.x, 0.0, 0.0, // second column
           0.0, 0.0, 1.0, 0.0,  // third column
           0.0, 0.0, 0.0, 1.0
        );
        mat4 pm = mat4(
            pro, 0.0, 0.0, 0.0,
            0.0, pro, 0.0, 0.0,
            0.0, 0.0, 1.0, 0.0,
            0.0, 0.0, 0.0, 1.0
        );
        // m = m * 4.0;
        // rm = sm * rm;
                // m = tm * m;
        // vec2 pos = cx_mul(vec2(x, y), vec2(0.5, 0.5));
        // pos = cx_mul(pos, vec2(0.75, 0.75));
        float x = ((fract(id / (512. * 2.))) - 0.5) * 6.;
        float y = ((floor(id / (512. * 2.)) / (512. * 2.)) - 0.5 / ratio) * 6.;
                vec2 pos2 = vec2(x, y);
        float turb = 0.0;
        for (float i = 0.0; i < 25.0; i++) {
            float fi = i * 2e-2;
            float ts = 0.001 * sin(x * y * 1.5e1) * 3.;
            float xd = cos(distance(pos2, vec2(cos(fi * 1000. + t * 0.001) * fi, sin(fi * 1000. + t * 0.001) * fi)) * 50.75 + time * 0.25) * ts;
            float yd = sin(distance(pos2, vec2(cos(fi * 1000. + t * 0.001) * fi, sin(fi * 1000. + t * 0.001) * fi)) * 50.75 + time * 0.25) * ts;
            xd += sin(pos2.x * 1e3) * 0.0008;
            pos2.x += xd * cos(xd * 2e2) * 1.6;
            pos2.y += yd * cos(yd * 2e2) * 1.6;
            turb += xd + yd;
        }
        
        
        // float x = cos(id * 1e1) * id * 5e-5;
        // float y = sin(id * 1e1) * id * 5e-5;
        // x = mix(x, x0, 0.8);
        // y = mix(y, y0, 0.8);
        float z = 1.0 + sin(id * x * 5e-1 * t +  x * y * 0.2) * 1.5;
        // z = id / vertexCount * 40. * sin(x * id * 1e2 + tan(id * 1e8) * 1e-1) * 0.5;
        // z = mix(z, 0.0, 0.85);
        z = 0.0;
        z = z + fbm((vec2(x, y) + 10.0) * 1. + t * 2e-1) * 0.75;
                // z += id / vertexCount * 400. * sin(x * id * 1e2 + tan(id * 1e8) * 1e-1) * 0.5;
                // z += tan(id * 1e-4) * id / vertexCount * 0.1;
        float d = distance(vec2(pos2.x, pos2.y), vec2(0.0, 0.0));
        vec4 pos = vec4(pos2.y, z, pos2.x, 1.0);
        // pos = pm * pos;
        // pos.xyz = rotate(pos.xyz, vec3(0.0, 0.0, 0.0), t);
        pos = zr2 * pos;
        // pos = tm4 * pos;
                pos = yr * pos;
        pos = tm4 * pos;
        // pos = m * pos;
        gl_Position = vec4(pos.x / ratio * 50., pos.y * 50., 0.0, pos.z * 1.);
        gl_PointSize = 34. - (60. * pos.z * 0.02);
        alph = 0.25 * 0.75;
        cols = vec3(0.65 + 0.5 / pos.z);
       float vig = (roundedRectangle(pos.xy * 1.5 / pos.z, vec2(0.0, 0.0), vec2(1.85, 0.94) * 0.026, 0.001, 0.05) + 0.0);
        cols = mix(cols, cols * floor(vig), 1.);
        gl_PointSize *= floor(vig);
    }
    // endGLSL
`;
newFlickeringVert.fragText = `
    // beginGLSL
    precision mediump float;
//     varying vec2 myposition;
//     varying vec2 center;
    varying float alph;
    varying vec3 cols;
    float rand(vec2 co){
        return fract(sin(dot(co.xy ,vec2(12.9898,78.233))) * 43758.5453 * (2.0 + sin(co.x)));
    }
    void main(void) {
        // vec2 uv = gl_PointCoord.xy / vec2(1600, 1600);
        // float d = length(uv - center);
        // vec2 pos = myposition;
        vec2 uv = gl_FragCoord.xy / vec2(2560, 1600);
        // uv.x = uv.x + 1.0;
        uv = uv * 2.0;
        uv = uv + 0.5;
        // uv = uv * 1.0;
        float ALPHA = 0.75;
        vec2 pos = gl_PointCoord - vec2(0.5, 0.5);
                float dist_squared = dot(pos, pos);
        float alpha;
        if (dist_squared < 0.25) {
            alpha = ALPHA;
        } else {
            alpha = 0.0;
        }
        alpha = smoothstep(0.05 / (0.9 + alph), 0.000125, dist_squared) * 0.79;
        float rando = rand(pos);
        // gl_FragColor = vec4(1.0, (1.0 - dist_squared * 40.) * 0.6, 0.0, alpha + ((0.12 - dist_squared) * 4.) - (rando * 0.2));
        gl_FragColor = vec4(1.0, 0.4 - dist_squared, 2.0 + alpha * 120., ((3. - dist_squared * 24.0 * (0.25 + alph)) * 0.045 + alpha)) * 0.5;
        // gl_FragColor.rgb = gl_FragColor.rbr;
        gl_FragColor.rgb = cols;
        // gl_FragColor.b *= 0.75;
        
    }
    // endGLSL
`;
// newFlickeringVert.init();
newFlickeringVert.vertText = newFlickeringVert.vertText.replace(/[^\x00-\x7F]/g, "");
newFlickeringVert.fragText = newFlickeringVert.fragText.replace(/[^\x00-\x7F]/g, "");
newFlickeringVert.init();






newFlickeringVert.vertText = `
    // beginGLSL
    attribute float vertexID;
    uniform float time;
    varying float alph;
// 
    float map(float value, float min1, float max1, float min2, float max2) {
        float perc = (value - min1) / (max1 - min1);
        return perc * (max2 - min2) + min2;
    }
// 
    vec2 rotate(vec2 pos, float angle) {
        float c = cos(angle);
        float s = sin(angle);
        return mat2(c, s, -s, c) * pos;
    }
    float plane(vec3 pos) {
        return pos.y;
    }
    float sphere(vec3 pos, float radius) {
        return length(pos) - radius;
    }
    float box(vec3 pos, vec3 size) {
        return length(max(abs(pos) - size, 0.0));
    }
    float roundedBox(vec3 pos, vec3 size, float radius) {
        return length(max(abs(pos) - size, 0.0)) - radius;
    }
    float map(vec3 pos) {
        float planeDist = plane(pos + vec3(0.0, 10.0, 0.0));
        // float o = (sin(time * 1e1) + 1.) * 5.;
        // pos.xy = rotate(pos.xy, pos.z * 0.01 * sin(time * 0.5e2));
        // pos = mod(pos + 10., 20.) - 10.;
        // return min(planeDist, roundedBox(pos, vec3(2.0), 1.0));
        return min(planeDist, roundedBox(pos, vec3(1.5), 2.0));
    }
    float rand(vec2 n) { 
      return fract(sin(dot(n, vec2(12.9898, 4.1414))) * 43758.5453);
    }
    float noise(vec2 p){
      vec2 ip = floor(p);
      vec2 u = fract(p);
      u = u*u*(3.0-2.0*u);
      float res = mix(
        mix(rand(ip),rand(ip+vec2(1.0,0.0)),u.x),
        mix(rand(ip+vec2(0.0,1.0)),rand(ip+vec2(1.0,1.0)),u.x),u.y);
      return res*res;
    }
    void main(void) {
        float t = time * 1e-2;
        float pi = 3.14159265359;
        float tpi = 3.14159265359 * 2.0;
        float idc = 147456.0;
        float id = vertexID;
        float i = id / idc;
        vec2 r = vec2(cos(time * 1e-2), sin(time * 1e-2));
        float x = ((fract(id / 512.)) - 0.5) * 0.5;
        float y = ((floor(id / 512.) / 288.) - 0.5) * 0.5;
        x = floor(x * 48.) * pi;
        y = floor(y * 48.) * pi;
        float n = noise(vec2(x * 0.5 + cos(time * 0.5e-2) * 10., y * 0.5 + sin(time * 0.5e-2) * 10.));
         // x -= (cos(tan(x * y * 1e-3 * time)) * 0.5 + 0.5) * 1.;
        // y -= (sin(tan(x * y * 1e-3 * time)) * 0.5 + 0.5) * 1.;
        x += cos(id) * 1.5;
        y += sin(id) * 1.5;
        float fx = x * r.y + y * r.x;
        float fy = y * r.y - x * r.x;
        x = fx;
        y = fy;
       float sc = 0.05;
        float ratio = 9. / 16.;
        gl_Position = vec4(x * sc * ratio, y * sc, 0.0, 1.0);
         // gl_Position = vec4((x - 0.25) * 4., (y - 0.25) * 4., 0.0, 1.0);
        // gl_Position = vec4(color.r * 0.25, color.r * 0.25, 0.0, 1.0);
        gl_PointSize = 5.;
        alph = 0.25 * 0.75;
    }
    // endGLSL
`;
newFlickeringVert.fragText = `
    // beginGLSL
    precision mediump float;
//     varying vec2 myposition;
//     varying vec2 center;
    varying float alph;
    float rand(vec2 co){
        return fract(sin(dot(co.xy ,vec2(12.9898,78.233))) * 43758.5453 * (2.0 + sin(co.x)));
    }
    void main(void) {
        // vec2 uv = gl_PointCoord.xy / vec2(1600, 1600);
        // float d = length(uv - center);
        // vec2 pos = myposition;
        vec2 uv = gl_FragCoord.xy / vec2(2560, 1600);
        // uv.x = uv.x + 1.0;
        uv = uv * 2.0;
        uv = uv + 0.5;
        // uv = uv * 1.0;
        float ALPHA = 0.75;
        vec2 pos = gl_PointCoord - vec2(0.5, 0.5);
                float dist_squared = dot(pos, pos);
        float alpha;
        if (dist_squared < 0.25) {
            alpha = ALPHA;
        } else {
            alpha = 0.0;
        }
        alpha = smoothstep(0.05 / (0.9 + alph), 0.000125, dist_squared) * 0.49;
        float rando = rand(pos);
        // gl_FragColor = vec4(1.0, (1.0 - dist_squared * 40.) * 0.6, 0.0, alpha + ((0.12 - dist_squared) * 4.) - (rando * 0.2));
        gl_FragColor = vec4(1.0, 0.4 - dist_squared, 2.0 + alpha * 120., ((3. - dist_squared * 24.0 * (0.25 + alph) - (rando * 1.1)) * 0.045 + alpha)) * 0.75;
        // gl_FragColor = gl_FragColor.brba;
//         gl_FragColor.g *= 0.525;
        gl_FragColor.rgb = gl_FragColor.bbb;
        
    }
    // endGLSL
`;
// newFlickeringVert.init();
newFlickeringVert.vertText = newFlickeringVert.vertText.replace(/[^\x00-\x7F]/g, "");
newFlickeringVert.fragText = newFlickeringVert.fragText.replace(/[^\x00-\x7F]/g, "");
newFlickeringVert.init();


newFlickeringVert.vertText = `
    // beginGLSL
    attribute float vertexID;
    uniform float time;
    varying float alph;
// 
    float map(float value, float min1, float max1, float min2, float max2) {
        float perc = (value - min1) / (max1 - min1);
        return perc * (max2 - min2) + min2;
    }
// 
    vec2 rotate(vec2 pos, float angle) {
        float c = cos(angle);
        float s = sin(angle);
        return mat2(c, s, -s, c) * pos;
    }
    float plane(vec3 pos) {
        return pos.y;
    }
    float sphere(vec3 pos, float radius) {
        return length(pos) - radius;
    }
    float box(vec3 pos, vec3 size) {
        return length(max(abs(pos) - size, 0.0));
    }
    float roundedBox(vec3 pos, vec3 size, float radius) {
        return length(max(abs(pos) - size, 0.0)) - radius;
    }
    float map(vec3 pos) {
        float planeDist = plane(pos + vec3(0.0, 10.0, 0.0));
        // float o = (sin(time * 1e1) + 1.) * 5.;
        // pos.xy = rotate(pos.xy, pos.z * 0.01 * sin(time * 0.5e2));
        // pos = mod(pos + 10., 20.) - 10.;
        // return min(planeDist, roundedBox(pos, vec3(2.0), 1.0));
        return min(planeDist, roundedBox(pos, vec3(1.5), 2.0));
    }
    float rand(vec2 n) { 
      return fract(sin(dot(n, vec2(12.9898, 4.1414))) * 43758.5453);
    }
    float noise(vec2 p){
      vec2 ip = floor(p);
      vec2 u = fract(p);
      u = u*u*(3.0-2.0*u);
      float res = mix(
        mix(rand(ip),rand(ip+vec2(1.0,0.0)),u.x),
        mix(rand(ip+vec2(0.0,1.0)),rand(ip+vec2(1.0,1.0)),u.x),u.y);
      return res*res;
    }
    float roundedRectangle (vec2 uv, vec2 pos, vec2 size, float radius, float thickness) {
        float d = length(max(abs(uv - pos),size) - size) - radius;
        return smoothstep(0.66, 0.33, d / thickness * 5.0);
    }
    void main(void) {
        float t = time * 1e-2;
        float pi = 3.14159265359;
        float tpi = 3.14159265359 * 2.0;
        float idc = 147456.0;
        float id = vertexID;
        float i = id / idc;
        vec2 r = vec2(cos(time * 1e-2), sin(time * 1e-2));
        float x = ((fract(id / 512.)) - 0.5) * 0.5;
        float y = ((floor(id / 512.) / 288.) - 0.5) * 0.5;
        x = floor(x * 48.) * pi;
        y = floor(y * 48.) * pi;
        float n = noise(vec2(x * 0.5 + cos(time * 0.5e-4) * 1., y * 0.5 + sin(time * 0.5e-4) * 1.));
         // x -= (cos(tan(x * y * 1e-3 * time)) * 0.5 + 0.5) * 1.;
        // y -= (sin(tan(x * y * 1e-3 * time)) * 0.5 + 0.5) * 1.;
        x += cos(id) * 1.5 * (fract(id / 51. * n)) * n * 5.;
        y += sin(id) * 1.5 * (fract(id / 51. * n)) * n * 5.;
        float fx = x * r.y + y * r.x;
        float fy = y * r.y - x * r.x;
        x = fx;
        y = fy;
       float sc = 0.08;
        float ratio = 9. / 16.;
        gl_Position = vec4(x * sc * ratio, y * sc, 0.0, 1.0);
         // gl_Position = vec4((x - 0.25) * 4., (y - 0.25) * 4., 0.0, 1.0);
        // gl_Position = vec4(color.r * 0.25, color.r * 0.25, 0.0, 1.0);
        gl_PointSize = 7.;
        alph = 0.25 * 0.75;
               float vig = (roundedRectangle(vec2(x, y) * sc, vec2(0.0, 0.0), vec2(2.15, 1.05) * 0.2 * 3.59, 0.2, 0.05) + 0.0);
        // cols = mix(cols, cols * floor(vig), 1.);
        gl_PointSize *= floor(vig);
    }
    // endGLSL
`;
newFlickeringVert.fragText = `
    // beginGLSL
    precision mediump float;
//     varying vec2 myposition;
//     varying vec2 center;
    varying float alph;
    float rand(vec2 co){
        return fract(sin(dot(co.xy ,vec2(12.9898,78.233))) * 43758.5453 * (2.0 + sin(co.x)));
    }
    void main(void) {
        // vec2 uv = gl_PointCoord.xy / vec2(1600, 1600);
        // float d = length(uv - center);
        // vec2 pos = myposition;
        vec2 uv = gl_FragCoord.xy / vec2(2560, 1600);
        // uv.x = uv.x + 1.0;
        uv = uv * 2.0;
        uv = uv + 0.5;
        // uv = uv * 1.0;
        float ALPHA = 0.75;
        vec2 pos = gl_PointCoord - vec2(0.5, 0.5);
                float dist_squared = dot(pos, pos);
        float alpha;
        if (dist_squared < 0.25) {
            alpha = ALPHA;
        } else {
            alpha = 0.0;
        }
        alpha = smoothstep(0.05 / (0.9 + alph), 0.000125, dist_squared) * 0.49;
        float rando = rand(pos);
        // gl_FragColor = vec4(1.0, (1.0 - dist_squared * 40.) * 0.6, 0.0, alpha + ((0.12 - dist_squared) * 4.) - (rando * 0.2));
        gl_FragColor = vec4(1.0, 0.4 - dist_squared, 2.0 + alpha * 120., ((3. - dist_squared * 24.0 * (0.25 + alph) - (rando * 1.1)) * 0.045 + alpha)) * 0.75;
        // gl_FragColor = gl_FragColor.brba;
//         gl_FragColor.g *= 0.525;
        gl_FragColor.rgb = gl_FragColor.bbb;
        
    }
    // endGLSL
`;
// newFlickeringVert.init();
newFlickeringVert.vertText = newFlickeringVert.vertText.replace(/[^\x00-\x7F]/g, "");
newFlickeringVert.fragText = newFlickeringVert.fragText.replace(/[^\x00-\x7F]/g, "");
newFlickeringVert.init();

newFlickeringVert.vertText = `
    // beginGLSL
    attribute float vertexID;
    uniform float time;
    varying float alph;
// 
    float map(float value, float min1, float max1, float min2, float max2) {
        float perc = (value - min1) / (max1 - min1);
        return perc * (max2 - min2) + min2;
    }
// 
    vec2 rotate(vec2 pos, float angle) {
        float c = cos(angle);
        float s = sin(angle);
        return mat2(c, s, -s, c) * pos;
    }
    float plane(vec3 pos) {
        return pos.y;
    }
    float sphere(vec3 pos, float radius) {
        return length(pos) - radius;
    }
    float box(vec3 pos, vec3 size) {
        return length(max(abs(pos) - size, 0.0));
    }
    float roundedBox(vec3 pos, vec3 size, float radius) {
        return length(max(abs(pos) - size, 0.0)) - radius;
    }
    float map(vec3 pos) {
        float planeDist = plane(pos + vec3(0.0, 10.0, 0.0));
        // float o = (sin(time * 1e1) + 1.) * 5.;
        // pos.xy = rotate(pos.xy, pos.z * 0.01 * sin(time * 0.5e2));
        // pos = mod(pos + 10., 20.) - 10.;
        // return min(planeDist, roundedBox(pos, vec3(2.0), 1.0));
        return min(planeDist, roundedBox(pos, vec3(1.5), 2.0));
    }
    float rand(vec2 n) { 
      return fract(sin(dot(n, vec2(12.9898, 4.1414))) * 43758.5453);
    }
    float noise(vec2 p){
      vec2 ip = floor(p);
      vec2 u = fract(p);
      u = u*u*(3.0-2.0*u);
      float res = mix(
        mix(rand(ip),rand(ip+vec2(1.0,0.0)),u.x),
        mix(rand(ip+vec2(0.0,1.0)),rand(ip+vec2(1.0,1.0)),u.x),u.y);
      return res*res;
    }
    float roundedRectangle (vec2 uv, vec2 pos, vec2 size, float radius, float thickness) {
        float d = length(max(abs(uv - pos),size) - size) - radius;
        return smoothstep(0.66, 0.33, d / thickness * 5.0);
    }
    void main(void) {
        float t = time * 1e-2;
        float pi = 3.14159265359;
        float tpi = 3.14159265359 * 2.0;
        float idc = 147456.0;
        float id = vertexID;
        float i = id / idc;
        vec2 r = vec2(cos(time * 1e-2), sin(time * 1e-2));
        float x = ((fract(id / 512.)) - 0.5) * 0.5;
        float y = ((floor(id / 512.) / 288.) - 0.5) * 0.5;
        x = floor(x * 48.) * pi;
        y = floor(y * 48.) * pi;
        float n = noise(vec2(x * 0.5 + cos(time * 0.5e-4) * 1., y * 0.5 + sin(time * 0.5e-4) * 1.));
         // x -= (cos(tan(x * y * 1e-3 * time)) * 0.5 + 0.5) * 1.;
        // y -= (sin(tan(x * y * 1e-3 * time)) * 0.5 + 0.5) * 1.;
        x += cos(id) * 1.5 * (fract(id / 51. * n)) * n * 5.;
        y += sin(id) * 1.5 * (fract(id / 51. * n)) * n * 5.;
        float fx = x * r.y + y * r.x;
        float fy = y * r.y - x * r.x;
        x = fx;
        y = fy;
       float sc = 0.05;
        float ratio = 9. / 16.;
        gl_Position = vec4(x * sc * ratio, y * sc, 0.0, 1.0);
         // gl_Position = vec4((x - 0.25) * 4., (y - 0.25) * 4., 0.0, 1.0);
        // gl_Position = vec4(color.r * 0.25, color.r * 0.25, 0.0, 1.0);
        gl_PointSize = 7.;
        alph = 0.25 * 0.75;
               float vig = (roundedRectangle(vec2(x, y) * sc, vec2(0.0, 0.0), vec2(2.15, 1.05) * 0.2 * 3.59, 0.2, 0.05) + 0.0);
        // cols = mix(cols, cols * floor(vig), 1.);
        gl_PointSize *= floor(vig);
    }
    // endGLSL
`;
newFlickeringVert.fragText = `
    // beginGLSL
    precision mediump float;
//     varying vec2 myposition;
//     varying vec2 center;
    varying float alph;
    float rand(vec2 co){
        return fract(sin(dot(co.xy ,vec2(12.9898,78.233))) * 43758.5453 * (2.0 + sin(co.x)));
    }
    void main(void) {
        // vec2 uv = gl_PointCoord.xy / vec2(1600, 1600);
        // float d = length(uv - center);
        // vec2 pos = myposition;
        vec2 uv = gl_FragCoord.xy / vec2(2560, 1600);
        // uv.x = uv.x + 1.0;
        uv = uv * 2.0;
        uv = uv + 0.5;
        // uv = uv * 1.0;
        float ALPHA = 0.75;
        vec2 pos = gl_PointCoord - vec2(0.5, 0.5);
                float dist_squared = dot(pos, pos);
        float alpha;
        if (dist_squared < 0.25) {
            alpha = ALPHA;
        } else {
            alpha = 0.0;
        }
        alpha = smoothstep(0.05 / (0.9 + alph), 0.000125, dist_squared) * 0.49;
        float rando = rand(pos);
        // gl_FragColor = vec4(1.0, (1.0 - dist_squared * 40.) * 0.6, 0.0, alpha + ((0.12 - dist_squared) * 4.) - (rando * 0.2));
        gl_FragColor = vec4(1.0, 0.4 - dist_squared, 2.0 + alpha * 120., ((3. - dist_squared * 24.0 * (0.25 + alph) - (rando * 1.1)) * 0.045 + alpha)) * 0.75;
        // gl_FragColor = gl_FragColor.brba;
//         gl_FragColor.g *= 0.525;
        gl_FragColor.rgb = gl_FragColor.bbb;
        
    }
    // endGLSL
`;
// newFlickeringVert.init();
newFlickeringVert.vertText = newFlickeringVert.vertText.replace(/[^\x00-\x7F]/g, "");
newFlickeringVert.fragText = newFlickeringVert.fragText.replace(/[^\x00-\x7F]/g, "");
newFlickeringVert.init();