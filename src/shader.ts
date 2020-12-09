export function createShaderFromStr(gl: WebGLRenderingContext, type: number, sourceStr: string): WebGLShader | never {
    const shader = gl.createShader(type);
    gl.shaderSource(shader, sourceStr);
    gl.compileShader(shader);
    const compiledStatus = gl.getShaderParameter(shader, gl.COMPILE_STATUS);

    if (compiledStatus) {
        return shader;
    } else {
        throw new Error(gl.getShaderInfoLog(shader));
    }
}

export function createProgramFromShader(gl: WebGLRenderingContext, vertexShader: WebGLShader, fragmentShader: WebGLShader): WebGLProgram | never {
    const program = gl.createProgram();

    gl.attachShader(program, vertexShader);
    gl.attachShader(program, fragmentShader);

    gl.linkProgram(program);

    const linkedStatus = gl.getProgramParameter(program, gl.LINK_STATUS);
    if (linkedStatus) {
        return program;
    } else {
        throw new Error(gl.getProgramInfoLog(program));
    }
}

export function createProgramFromStr(gl: WebGLRenderingContext, vertexSourceStr: string, fragmentSourceStr: string): WebGLProgram | never {
    const vertexShader = createShaderFromStr(gl, gl.VERTEX_SHADER, vertexSourceStr);
    const fragmentShader = createShaderFromStr(gl, gl.FRAGMENT_SHADER, fragmentSourceStr);

    if (vertexShader && fragmentShader) {
        const program = createProgramFromShader(gl, vertexShader, fragmentShader);
        if (program) {
            return program;
        } else {
            throw new Error("create program error")
        }
    } else {
        throw new Error("create shader error")
    }
}