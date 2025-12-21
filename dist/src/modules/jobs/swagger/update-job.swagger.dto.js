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
exports.UpdateJobSwaggerDto = void 0;
const swagger_1 = require("@nestjs/swagger");
const client_1 = require("@prisma/client");
class UpdateJobSwaggerDto {
    title;
    slug;
    description;
    employmentType;
    workModel;
    location;
    salaryMin;
    salaryMax;
    techStack;
    responsibilities;
    requirementsMust;
    requirementsNice;
    benefits;
    isActive;
}
exports.UpdateJobSwaggerDto = UpdateJobSwaggerDto;
__decorate([
    (0, swagger_1.ApiPropertyOptional)({
        description: "Título da vaga",
        minLength: 3,
        example: "Desenvolvedor Full Stack Sênior",
    }),
    __metadata("design:type", String)
], UpdateJobSwaggerDto.prototype, "title", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({
        description: "Slug da vaga (somente letras minúsculas, números e hífens, ex: dev-fullstack-sr)",
        minLength: 3,
        pattern: "^[a-z0-9-]+$",
        example: "desenvolvedor-fullstack-senior",
    }),
    __metadata("design:type", String)
], UpdateJobSwaggerDto.prototype, "slug", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({
        description: "Descrição detalhada da vaga",
        minLength: 10,
        example: "Vaga para dev sênior com foco em arquitetura de microserviços...",
    }),
    __metadata("design:type", String)
], UpdateJobSwaggerDto.prototype, "description", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({
        description: "Tipo de contratação",
        enum: client_1.EmploymentType,
        enumName: "EmploymentType",
        example: client_1.EmploymentType.PJ,
    }),
    __metadata("design:type", String)
], UpdateJobSwaggerDto.prototype, "employmentType", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({
        description: "Modelo de trabalho",
        enum: client_1.WorkModel,
        enumName: "WorkModel",
        example: client_1.WorkModel.REMOTE,
    }),
    __metadata("design:type", String)
], UpdateJobSwaggerDto.prototype, "workModel", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({
        description: "Localização (cidade / estado ou 'Remoto')",
        example: "São Paulo - SP",
    }),
    __metadata("design:type", String)
], UpdateJobSwaggerDto.prototype, "location", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({
        description: "Salário mínimo",
        minimum: 0,
        type: Number,
        example: 8000,
    }),
    __metadata("design:type", Number)
], UpdateJobSwaggerDto.prototype, "salaryMin", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({
        description: "Salário máximo",
        type: Number,
        example: 12000,
    }),
    __metadata("design:type", Number)
], UpdateJobSwaggerDto.prototype, "salaryMax", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({
        description: "Stack de tecnologias",
        type: [String],
        example: ["Node.js", "NestJS", "PostgreSQL"],
    }),
    __metadata("design:type", Array)
], UpdateJobSwaggerDto.prototype, "techStack", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({
        description: "Responsabilidades principais",
        type: [String],
        example: ["Liderar time técnico", "Definir arquitetura"],
    }),
    __metadata("design:type", Array)
], UpdateJobSwaggerDto.prototype, "responsibilities", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({
        description: "Requisitos obrigatórios",
        type: [String],
        example: ["5+ anos com Node.js", "Experiência com arquitetura em nuvem"],
    }),
    __metadata("design:type", Array)
], UpdateJobSwaggerDto.prototype, "requirementsMust", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({
        description: "Requisitos desejáveis",
        type: [String],
        example: ["Experiência com Kafka", "Inglês avançado"],
    }),
    __metadata("design:type", Array)
], UpdateJobSwaggerDto.prototype, "requirementsNice", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({
        description: "Benefícios oferecidos",
        type: [String],
        example: ["PLR", "Auxílio home-office"],
    }),
    __metadata("design:type", Array)
], UpdateJobSwaggerDto.prototype, "benefits", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({
        description: "Se a vaga está ativa",
        example: false,
    }),
    __metadata("design:type", Boolean)
], UpdateJobSwaggerDto.prototype, "isActive", void 0);
//# sourceMappingURL=update-job.swagger.dto.js.map