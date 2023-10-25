// can.inanir - 31159
//changed the RGB,A multiplier from 1,0,0,1 to 0,0,1,1

const fragmentShaderSource = `
precision mediump float;

void main() {
  gl_FragColor = vec4(0.0, 0.0, 1.0, 1.0);
}
`;