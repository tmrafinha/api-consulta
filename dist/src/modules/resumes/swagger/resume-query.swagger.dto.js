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
exports.ResumeQuerySwaggerDto = void 0;
const swagger_1 = require("@nestjs/swagger");
class ResumeQuerySwaggerDto {
    search;
    sortBy = "uploadedAt";
    sortOrder = "desc";
    page;
    limit;
}
exports.ResumeQuerySwaggerDto = ResumeQuerySwaggerDto;
__decorate([
    (0, swagger_1.ApiPropertyOptional)({
        description: "Buscar por nome/originalName",
        type: String,
    }),
    __metadata("design:type", String)
], ResumeQuerySwaggerDto.prototype, "search", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({
        description: "Campo de ordenação",
        enum: ["uploadedAt", "originalName"],
        default: "uploadedAt",
    }),
    __metadata("design:type", String)
], ResumeQuerySwaggerDto.prototype, "sortBy", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({
        description: "Ordem da listagem",
        enum: ["asc", "desc"],
        default: "desc",
    }),
    __metadata("design:type", String)
], ResumeQuerySwaggerDto.prototype, "sortOrder", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: "Número da página", default: 1 }),
    __metadata("design:type", Number)
], ResumeQuerySwaggerDto.prototype, "page", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: "Itens por página", default: 10 }),
    __metadata("design:type", Number)
], ResumeQuerySwaggerDto.prototype, "limit", void 0);
//# sourceMappingURL=resume-query.swagger.dto.js.map