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
exports.AuditInterceptor = void 0;
const common_1 = require("@nestjs/common");
const rxjs_1 = require("rxjs");
const audit_service_1 = require("../../modules/audit/audit.service");
const client_1 = require("@prisma/client");
let AuditInterceptor = class AuditInterceptor {
    audit;
    constructor(audit) {
        this.audit = audit;
    }
    intercept(ctx, next) {
        const req = ctx.switchToHttp().getRequest();
        const actorId = req.user?.sub ?? null;
        const action = req.method === "POST" ? client_1.AuditAction.CREATE :
            req.method === "PUT" ? client_1.AuditAction.UPDATE :
                req.method === "DELETE" ? client_1.AuditAction.DELETE :
                    client_1.AuditAction.UPDATE;
        return next.handle().pipe((0, rxjs_1.tap)(async (response) => {
            await this.audit.log(actorId, req.route?.path || req.url, response?.id ?? "NO_ID", action, { body: req.body });
        }));
    }
};
exports.AuditInterceptor = AuditInterceptor;
exports.AuditInterceptor = AuditInterceptor = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [audit_service_1.AuditService])
], AuditInterceptor);
//# sourceMappingURL=audit.interceptor.js.map