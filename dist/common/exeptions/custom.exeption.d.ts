import { HttpException, HttpStatus } from '@nestjs/common';
export declare class CustomException extends HttpException {
    readonly code: string;
    readonly message: string;
    readonly errors?: any | undefined;
    constructor(code: string, message: string, status?: HttpStatus, errors?: any | undefined);
}
