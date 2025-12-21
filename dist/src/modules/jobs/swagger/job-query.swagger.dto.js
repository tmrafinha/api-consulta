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
exports.JobQuerySwaggerDto = exports.SortOrder = exports.JobSortBy = void 0;
const swagger_1 = require("@nestjs/swagger");
const client_1 = require("@prisma/client");
var JobSortBy;
(function (JobSortBy) {
    JobSortBy["CREATED_AT"] = "createdAt";
    JobSortBy["SALARY_MIN"] = "salaryMin";
    JobSortBy["SALARY_MAX"] = "salaryMax";
    JobSortBy["APPLICATIONS_COUNT"] = "applicationsCount";
})(JobSortBy || (exports.JobSortBy = JobSortBy = {}));
var SortOrder;
(function (SortOrder) {
    SortOrder["ASC"] = "asc";
    SortOrder["DESC"] = "desc";
})(SortOrder || (exports.SortOrder = SortOrder = {}));
class JobQuerySwaggerDto {
    page;
    limit;
    search;
    companyId;
    employmentType;
    workModel;
    location;
    minSalary;
    maxSalary;
    sortBy;
    sortOrder;
}
exports.JobQuerySwaggerDto = JobQuerySwaggerDto;
__decorate([
    (0, swagger_1.ApiPropertyOptional)({
        description: "Número da página (paginaçao)",
        default: 1,
        minimum: 1,
        example: 1,
    }),
    __metadata("design:type", Number)
], JobQuerySwaggerDto.prototype, "page", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({
        description: "Quantidade de itens por página",
        default: 10,
        minimum: 1,
        example: 10,
    }),
    __metadata("design:type", Number)
], JobQuerySwaggerDto.prototype, "limit", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({
        description: "Texto para busca em título/descrição/etc",
        example: "full stack",
    }),
    __metadata("design:type", String)
], JobQuerySwaggerDto.prototype, "search", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: "ID da empresa para filtrar vagas",
        format: "uuid",
        example: "cmiut1iiz0000n10cfzrg54yw",
    }),
    __metadata("design:type", String)
], JobQuerySwaggerDto.prototype, "companyId", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({
        description: "Filtrar por tipo de contratação",
        enum: client_1.EmploymentType,
        enumName: "EmploymentType",
        example: client_1.EmploymentType.CLT,
    }),
    __metadata("design:type", String)
], JobQuerySwaggerDto.prototype, "employmentType", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({
        description: "Filtrar por modelo de trabalho",
        enum: client_1.WorkModel,
        enumName: "WorkModel",
        example: client_1.WorkModel.REMOTE,
    }),
    __metadata("design:type", String)
], JobQuerySwaggerDto.prototype, "workModel", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({
        description: "Filtrar por localização",
        example: "Itajaí - SC",
    }),
    __metadata("design:type", String)
], JobQuerySwaggerDto.prototype, "location", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({
        description: "Filtrar por salário mínimo",
        type: Number,
        example: 5000,
    }),
    __metadata("design:type", Number)
], JobQuerySwaggerDto.prototype, "minSalary", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({
        description: "Filtrar por salário máximo",
        type: Number,
        example: 12000,
    }),
    __metadata("design:type", Number)
], JobQuerySwaggerDto.prototype, "maxSalary", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({
        description: "Campo para ordenação",
        enum: JobSortBy,
        enumName: "JobSortBy",
        default: JobSortBy.CREATED_AT,
        example: JobSortBy.CREATED_AT,
    }),
    __metadata("design:type", String)
], JobQuerySwaggerDto.prototype, "sortBy", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({
        description: "Direção da ordenação",
        enum: SortOrder,
        enumName: "SortOrder",
        default: SortOrder.DESC,
        example: SortOrder.DESC,
    }),
    __metadata("design:type", String)
], JobQuerySwaggerDto.prototype, "sortOrder", void 0);
//# sourceMappingURL=job-query.swagger.dto.js.map