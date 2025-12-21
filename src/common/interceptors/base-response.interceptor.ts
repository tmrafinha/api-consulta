import {
  CallHandler,
  ExecutionContext,
  Injectable,
  NestInterceptor,
} from "@nestjs/common";
import { Observable } from "rxjs";
import { map } from "rxjs/operators";
import { Logger } from "nestjs-pino";

@Injectable()
export class BaseResponseInterceptor<T>
  implements NestInterceptor<T, any>
{
  constructor(private readonly logger: Logger) {}

  intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
    const now = Date.now();

    const request = context.switchToHttp().getRequest();

    return next.handle().pipe(
      map((data) => {
        const duration = Date.now() - now;

        this.logger.log({
          message: "Response sent",
          method: request.method,
          url: request.url,
          durationMs: duration,
        });

        if (data && data.__raw === true) {
          delete data.__raw;
          return data;
        }

        return {
          success: true,
          data,
          message: "OK",
          meta: {
            timestamp: new Date().toISOString(),
            durationMs: duration,
          },
          errors: null,
        };
      }),
    );
  }
}
