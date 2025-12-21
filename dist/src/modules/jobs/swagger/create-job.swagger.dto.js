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
exports.CreateJobSwaggerDto = void 0;
const swagger_1 = require("@nestjs/swagger");
const client_1 = require("@prisma/client");
class CreateJobSwaggerDto {
    companyId;
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
exports.CreateJobSwaggerDto = CreateJobSwaggerDto;
__decorate([
    (0, swagger_1.ApiProperty)({
        description: "ID da empresa dona da vaga",
        format: "uuid",
        example: "cmiut1iiz0000n10cfzrg54yw",
    }),
    __metadata("design:type", String)
], CreateJobSwaggerDto.prototype, "companyId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: "Título da vaga",
        minLength: 3,
        example: "Desenvolvedor Full Stack Pleno",
    }),
    __metadata("design:type", String)
], CreateJobSwaggerDto.prototype, "title", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: "Slug da vaga (somente letras minúsculas, números e hífens, ex: dev-fullstack-pl)",
        minLength: 3,
        pattern: "^[a-z0-9-]+$",
        example: "desenvolvedor-fullstack-pleno",
    }),
    __metadata("design:type", String)
], CreateJobSwaggerDto.prototype, "slug", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: "Descrição detalhada da vaga",
        minLength: 10,
        example: "Estamos buscando um dev full stack para atuar com NestJS e React...",
    }),
    __metadata("design:type", String)
], CreateJobSwaggerDto.prototype, "description", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: "Tipo de contratação",
        enum: client_1.EmploymentType,
        enumName: "EmploymentType",
        example: client_1.EmploymentType.CLT,
    }),
    __metadata("design:type", String)
], CreateJobSwaggerDto.prototype, "employmentType", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: "Modelo de trabalho",
        enum: client_1.WorkModel,
        enumName: "WorkModel",
        example: client_1.WorkModel.HYBRID,
    }),
    __metadata("design:type", String)
], CreateJobSwaggerDto.prototype, "workModel", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({
        description: "Localização (cidade / estado ou 'Remoto')",
        example: "Itajaí - SC",
    }),
    __metadata("design:type", String)
], CreateJobSwaggerDto.prototype, "location", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({
        description: "Salário mínimo (pode ser nulo se não informado)",
        minimum: 0,
        nullable: true,
        type: Number,
        example: 5000,
    }),
    __metadata("design:type", Object)
], CreateJobSwaggerDto.prototype, "salaryMin", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({
        description: "Salário máximo (pode ser nulo se não informado)",
        nullable: true,
        type: Number,
        example: 9000,
    }),
    __metadata("design:type", Object)
], CreateJobSwaggerDto.prototype, "salaryMax", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({
        description: "Stack de tecnologias",
        type: [String],
        example: ["Node.js", "NestJS", "PostgreSQL"],
        default: [],
    }),
    __metadata("design:type", Array)
], CreateJobSwaggerDto.prototype, "techStack", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({
        description: "Responsabilidades principais",
        type: [String],
        example: ["Desenvolver APIs REST", "Dar manutenção em serviços existentes"],
        default: [],
    }),
    __metadata("design:type", Array)
], CreateJobSwaggerDto.prototype, "responsibilities", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({
        description: "Requisitos obrigatórios",
        type: [String],
        example: ["3+ anos de experiência com Node.js"],
        default: [],
    }),
    __metadata("design:type", Array)
], CreateJobSwaggerDto.prototype, "requirementsMust", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({
        description: "Requisitos desejáveis",
        type: [String],
        example: ["Experiência com NestJS", "Conhecimento em AWS"],
        default: [],
    }),
    __metadata("design:type", Array)
], CreateJobSwaggerDto.prototype, "requirementsNice", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({
        description: "Benefícios oferecidos",
        type: [String],
        example: ["Vale alimentação", "Plano de saúde"],
        default: [],
    }),
    __metadata("design:type", Array)
], CreateJobSwaggerDto.prototype, "benefits", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({
        description: "Se a vaga está ativa",
        default: true,
        example: true,
    }),
    __metadata("design:type", Boolean)
], CreateJobSwaggerDto.prototype, "isActive", void 0);
//# sourceMappingURL=create-job.swagger.dto.js.map