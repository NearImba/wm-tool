"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createProgramFromStr = exports.createProgramFromShader = exports.createShaderFromStr = void 0;
function createShaderFromStr(gl, type, sourceStr) {
    var shader = gl.createShader(type);
    gl.shaderSource(shader, sourceStr);
    gl.compileShader(shader);
    var compiledStatus = gl.getShaderParameter(shader, gl.COMPILE_STATUS);
    if (compiledStatus) {
        return shader;
    }
    else {
        throw new Error(gl.getShaderInfoLog(shader));
    }
}
exports.createShaderFromStr = createShaderFromStr;
function createProgramFromShader(gl, vertexShader, fragmentShader) {
    var program = gl.createProgram();
    gl.attachShader(program, vertexShader);
    gl.attachShader(program, fragmentShader);
    gl.linkProgram(program);
    var linkedStatus = gl.getProgramParameter(program, gl.LINK_STATUS);
    if (linkedStatus) {
        return program;
    }
    else {
        throw new Error(gl.getProgramInfoLog(program));
    }
}
exports.createProgramFromShader = createProgramFromShader;
function createProgramFromStr(gl, vertexSourceStr, fragmentSourceStr) {
    var vertexShader = createShaderFromStr(gl, gl.VERTEX_SHADER, vertexSourceStr);
    var fragmentShader = createShaderFromStr(gl, gl.FRAGMENT_SHADER, fragmentSourceStr);
    if (vertexShader && fragmentShader) {
        var program = createProgramFromShader(gl, vertexShader, fragmentShader);
        if (program) {
            return program;
        }
        else {
            throw new Error("create program error");
        }
    }
    else {
        throw new Error("create shader error");
    }
}
exports.createProgramFromStr = createProgramFromStr;
//# sourceMappingURL=shader.js.map