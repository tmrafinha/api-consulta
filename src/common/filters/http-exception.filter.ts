import {
  ArgumentsHost,
  Catch,
  ExceptionFilter,
  HttpException,
  HttpStatus,
} from "@nestjs/common";
import { Request, Response } from "express";
import { Prisma } from "@prisma/client";
import { Logger } from "nestjs-pino";
import { randomUUID } from "crypto";
import { mapPrismaError } from "../errors/prisma/prisma-error.mapper";

@Catch()
export class GlobalExceptionFilter implements ExceptionFilter {
  constructor(private readonly logger: Logger) {}

  catch(exception: any, host: ArgumentsHost) {
    const ctx = host.switchToHttp();
    const res = ctx.getResponse<Response>();
    const req = ctx.getRequest<Request>();

    const errorId = randomUUID();

    // ----------------------------------------------------------
    // (1) Prisma errors
    // ----------------------------------------------------------
    if (exception instanceof Prisma.PrismaClientKnownRequestError) {
      const mapped = mapPrismaError(exception);
      const response = mapped.getResponse() as any;

      return res.status(mapped.getStatus()).json({
        success: false,
        statusCode: mapped.getStatus(),
        error: response.error ?? "Erro de Conflito",
        message: response.message,
        errors: response.errors ?? null,
        meta: this.meta(req, errorId),
      });
    }

    // ----------------------------------------------------------
    // (2) Nest HttpExceptions (Unauthorized, Conflict, etc.)
    // ----------------------------------------------------------
    if (exception instanceof HttpException) {
      const status = exception.getStatus();
      const response = exception.getResponse() as any;

      return res.status(status).json({
        success: false,
        statusCode: status,
        error: response.error ?? null,
        message: response.message ?? "Error",
        errors: response.errors ?? null,
        meta: this.meta(req, errorId),
      });
    }

    // ----------------------------------------------------------
    // (3) Unknown internal error
    // ----------------------------------------------------------
    return res.status(HttpStatus.INTERNAL_SERVER_ERROR).json({
      success: false,
      statusCode: 500,
      error: "InternalServerError",
      message: "Internal server error",
      errors: null,
      meta: this.meta(req, errorId),
    });
  }

  private meta(req: Request, errorId: string) {
    return {
      path: req.url,
      method: req.method,
      timestamp: new Date().toISOString(),
      errorId,
    };
  }
}
