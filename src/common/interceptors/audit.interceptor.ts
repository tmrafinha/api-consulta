import {
  Injectable,
  NestInterceptor,
  ExecutionContext,
  CallHandler,
} from "@nestjs/common";
import { Observable, tap } from "rxjs";
import { AuditService } from "src/modules/audit/audit.service";
import { AuditAction } from "@prisma/client";

@Injectable()
export class AuditInterceptor implements NestInterceptor {
  constructor(private audit: AuditService) {}

  intercept(ctx: ExecutionContext, next: CallHandler): Observable<any> {
    const req = ctx.switchToHttp().getRequest();
    const actorId = req.user?.sub ?? null;

    const action =
      req.method === "POST" ? AuditAction.CREATE :
      req.method === "PUT" ? AuditAction.UPDATE :
      req.method === "DELETE" ? AuditAction.DELETE :
      AuditAction.UPDATE;

    return next.handle().pipe(
      tap(async (response) => {
        await this.audit.log(
          actorId,
          req.route?.path || req.url,
          response?.id ?? "NO_ID",
          action,
          { body: req.body }
        );
      }),
    );
  }
}
