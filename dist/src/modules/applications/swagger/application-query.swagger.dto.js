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
exports.ApplicationQuerySwaggerDto = void 0;
const swagger_1 = require("@nestjs/swagger");
const client_1 = require("@prisma/client");
class ApplicationQuerySwaggerDto {
    page;
    limit;
    status;
    jobId;
    sortBy;
    sortOrder;
}
exports.ApplicationQuerySwaggerDto = ApplicationQuerySwaggerDto;
__decorate([
    (0, swagger_1.ApiPropertyOptional)({
        description: "Página atual (paginação)",
        example: 1,
        default: 1,
    }),
    __metadata("design:type", Number)
], ApplicationQuerySwaggerDto.prototype, "page", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({
        description: "Quantidade de itens por página",
        example: 10,
        default: 10,
    }),
    __metadata("design:type", Number)
], ApplicationQuerySwaggerDto.prototype, "limit", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({
        description: "Filtrar por status da candidatura",
        enum: client_1.ApplicationStatus,
        example: client_1.ApplicationStatus.PENDING,
    }),
    __metadata("design:type", String)
], ApplicationQuerySwaggerDto.prototype, "status", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({
        description: "Filtrar candidaturas por ID da vaga",
        format: "uuid",
        example: "cmiy0g0q40000xw0dgb9w8a1z",
    }),
    __metadata("design:type", String)
], ApplicationQuerySwaggerDto.prototype, "jobId", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({
        description: "Campo usado para ordenação",
        enum: ["appliedAt", "updatedAt"],
        example: "appliedAt",
        default: "appliedAt",
    }),
    __metadata("design:type", String)
], ApplicationQuerySwaggerDto.prototype, "sortBy", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({
        description: "Ordem da ordenação",
        enum: ["asc", "desc"],
        example: "desc",
        default: "desc",
    }),
    __metadata("design:type", String)
], ApplicationQuerySwaggerDto.prototype, "sortOrder", void 0);
//# sourceMappingURL=application-query.swagger.dto.js.map