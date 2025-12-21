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
exports.CreateApplicationSwaggerDto = void 0;
const swagger_1 = require("@nestjs/swagger");
class CreateApplicationSwaggerDto {
    jobId;
    resumeId;
    coverLetter;
    candidateId;
}
exports.CreateApplicationSwaggerDto = CreateApplicationSwaggerDto;
__decorate([
    (0, swagger_1.ApiProperty)({
        description: "ID da vaga (Job) para a qual o candidato está aplicando",
        format: "uuid",
        example: "cmiut1iiz0000n10cfzrg54yw",
    }),
    __metadata("design:type", String)
], CreateApplicationSwaggerDto.prototype, "jobId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: "ID do currículo (Resume) que será usado na aplicação",
        format: "uuid",
        example: "cmixw8r7e00000v0cxrl9760j",
    }),
    __metadata("design:type", String)
], CreateApplicationSwaggerDto.prototype, "resumeId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: "Carta de apresentação opcional",
        required: false,
        example: "Tenho 5 anos de experiência com Node.js e NestJS...",
    }),
    __metadata("design:type", String)
], CreateApplicationSwaggerDto.prototype, "coverLetter", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: "ID do candidato. Hoje vem no body, mas idealmente deveria vir do token (CurrentUser)",
        format: "uuid",
        example: "cmiut1iiz0000n10cfzrg54yw",
    }),
    __metadata("design:type", String)
], CreateApplicationSwaggerDto.prototype, "candidateId", void 0);
//# sourceMappingURL=create-application.swagger.dto.js.map