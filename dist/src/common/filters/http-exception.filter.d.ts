import { ArgumentsHost, ExceptionFilter } from "@nestjs/common";
import { Response } from "express";
import { Logger } from "nestjs-pino";
export declare class GlobalExceptionFilter implements ExceptionFilter {
    private readonly logger;
    constructor(logger: Logger);
    catch(exception: any, host: ArgumentsHost): Response<any, Record<string, any>>;
    private meta;
}
