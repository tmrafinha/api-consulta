import { NestInterceptor, ExecutionContext, CallHandler } from "@nestjs/common";
import { Observable } from "rxjs";
import { AuditService } from "src/modules/audit/audit.service";
export declare class AuditInterceptor implements NestInterceptor {
    private audit;
    constructor(audit: AuditService);
    intercept(ctx: ExecutionContext, next: CallHandler): Observable<any>;
}
