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
exports.CompanyQuerySwaggerDto = void 0;
const swagger_1 = require("@nestjs/swagger");
class CompanyQuerySwaggerDto {
    page;
    limit;
    size;
    industry;
    search;
    sortBy;
    sortOrder;
}
exports.CompanyQuerySwaggerDto = CompanyQuerySwaggerDto;
__decorate([
    (0, swagger_1.ApiPropertyOptional)({
        description: "Página atual (paginação)",
        example: 1,
        default: 1,
    }),
    __metadata("design:type", Number)
], CompanyQuerySwaggerDto.prototype, "page", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({
        description: "Quantidade de itens por página",
        example: 10,
        default: 10,
    }),
    __metadata("design:type", Number)
], CompanyQuerySwaggerDto.prototype, "limit", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({
        description: "Filtrar por porte da empresa (ex.: SMALL, MEDIUM, LARGE)",
        example: "MEDIUM",
    }),
    __metadata("design:type", String)
], CompanyQuerySwaggerDto.prototype, "size", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({
        description: "Filtrar por indústria / setor",
        example: "Tecnologia",
    }),
    __metadata("design:type", String)
], CompanyQuerySwaggerDto.prototype, "industry", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({
        description: "Busca textual por nome / descrição",
        example: "consultoria",
    }),
    __metadata("design:type", String)
], CompanyQuerySwaggerDto.prototype, "search", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({
        description: "Campo utilizado para ordenação",
        example: "createdAt",
        default: "createdAt",
    }),
    __metadata("design:type", String)
], CompanyQuerySwaggerDto.prototype, "sortBy", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({
        description: "Ordem da ordenação",
        enum: ["asc", "desc"],
        example: "desc",
        default: "desc",
    }),
    __metadata("design:type", String)
], CompanyQuerySwaggerDto.prototype, "sortOrder", void 0);
//# sourceMappingURL=company-query.swagger.dto.js.map