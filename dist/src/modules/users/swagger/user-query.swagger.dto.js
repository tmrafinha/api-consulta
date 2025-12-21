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
exports.UserQuerySwaggerDto = void 0;
const swagger_1 = require("@nestjs/swagger");
const client_1 = require("@prisma/client");
class UserQuerySwaggerDto {
    page;
    limit;
    search;
    role;
    companyId;
    sortBy;
    sortOrder;
}
exports.UserQuerySwaggerDto = UserQuerySwaggerDto;
__decorate([
    (0, swagger_1.ApiPropertyOptional)({
        example: 1,
        description: "Número da página",
        default: 1,
    }),
    __metadata("design:type", Number)
], UserQuerySwaggerDto.prototype, "page", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({
        example: 10,
        description: "Quantidade de registros por página",
        default: 10,
    }),
    __metadata("design:type", Number)
], UserQuerySwaggerDto.prototype, "limit", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({
        example: "john",
        description: "Busca por nome ou e-mail",
    }),
    __metadata("design:type", String)
], UserQuerySwaggerDto.prototype, "search", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({
        enum: client_1.UserRole,
        description: "Filtrar por papel do usuário",
    }),
    __metadata("design:type", String)
], UserQuerySwaggerDto.prototype, "role", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({
        example: "cmiut1iiz0000n10cfzrg54yw",
        description: "Filtrar por companyId (UUID)",
    }),
    __metadata("design:type", String)
], UserQuerySwaggerDto.prototype, "companyId", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({
        enum: ["createdAt", "name", "email"],
        default: "createdAt",
        description: "Campo para ordenação",
    }),
    __metadata("design:type", String)
], UserQuerySwaggerDto.prototype, "sortBy", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({
        enum: ["asc", "desc"],
        default: "desc",
        description: "Ordem da ordenação",
    }),
    __metadata("design:type", String)
], UserQuerySwaggerDto.prototype, "sortOrder", void 0);
//# sourceMappingURL=user-query.swagger.dto.js.map