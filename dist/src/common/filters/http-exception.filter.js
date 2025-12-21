"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.GlobalExceptionFilter = void 0;
const common_1 = require("@nestjs/common");
const client_1 = require("@prisma/client");
const nestjs_pino_1 = require("nestjs-pino");
const crypto_1 = require("crypto");
const prisma_error_mapper_1 = require("../errors/prisma/prisma-error.mapper");
let GlobalExceptionFilter = class GlobalExceptionFilter {
    logger;
    constructor(logger) {
        this.logger = logger;
    }
    catch(exception, host) {
        const ctx = host.switchToHttp();
        const res = ctx.getResponse();
        const req = ctx.getRequest();
        const errorId = (0, crypto_1.randomUUID)();
        if (exception instanceof client_1.Prisma.PrismaClientKnownRequestError) {
            const mapped = (0, prisma_error_mapper_1.mapPrismaError)(exception);
            const response = mapped.getResponse();
            return res.status(mapped.getStatus()).json({
                success: false,
                statusCode: mapped.getStatus(),
                error: response.error ?? "Erro de Conflito",
                message: response.message,
                errors: response.errors ?? null,
                meta: this.meta(req, errorId),
            });
        }
        if (exception instanceof common_1.HttpException) {
            const status = exception.getStatus();
            const response = exception.getResponse();
            return res.status(status).json({
                success: false,
                statusCode: status,
                error: response.error ?? null,
                message: response.message ?? "Error",
                errors: response.errors ?? null,
                meta: this.meta(req, errorId),
            });
        }
        return res.status(common_1.HttpStatus.INTERNAL_SERVER_ERROR).json({
            success: false,
            statusCode: 500,
            error: "InternalServerError",
            message: "Internal server error",
            errors: null,
            meta: this.meta(req, errorId),
        });
    }
    meta(req, errorId) {
        return {
            path: req.url,
            method: req.method,
            timestamp: new Date().toISOString(),
            errorId,
        };
    }
};
exports.GlobalExceptionFilter = GlobalExceptionFilter;
exports.GlobalExceptionFilter = GlobalExceptionFilter = __decorate([
    (0, common_1.Catch)(),
    __metadata("design:paramtypes", [nestjs_pino_1.Logger])
], GlobalExceptionFilter);
//# sourceMappingURL=http-exception.filter.js.map