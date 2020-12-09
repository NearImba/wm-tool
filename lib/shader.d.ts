export declare function createShaderFromStr(gl: WebGLRenderingContext, type: number, sourceStr: string): WebGLShader | never;
export declare function createProgramFromShader(gl: WebGLRenderingContext, vertexShader: WebGLShader, fragmentShader: WebGLShader): WebGLProgram | never;
export declare function createProgramFromStr(gl: WebGLRenderingContext, vertexSourceStr: string, fragmentSourceStr: string): WebGLProgram | never;
