import { Injectable, NestMiddleware } from "@nestjs/common";
import { v4 as uuid } from "uuid";

@Injectable()
export class CorrelationIdMiddleware implements NestMiddleware {
  use(req: any, res: any, next: () => void) {
    req.correlationId = uuid();
    res.setHeader("X-Correlation-Id", req.correlationId);
    next();
  }
}
