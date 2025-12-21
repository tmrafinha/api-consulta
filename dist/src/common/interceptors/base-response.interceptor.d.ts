import { CallHandler, ExecutionContext, NestInterceptor } from "@nestjs/common";
import { Observable } from "rxjs";
import { Logger } from "nestjs-pino";
export declare class BaseResponseInterceptor<T> implements NestInterceptor<T, any> {
    private readonly logger;
    constructor(logger: Logger);
    intercept(context: ExecutionContext, next: CallHandler): Observable<any>;
}
