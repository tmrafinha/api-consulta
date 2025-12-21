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
exports.CreateCompanySwaggerDto = void 0;
const swagger_1 = require("@nestjs/swagger");
const client_1 = require("@prisma/client");
class CreateCompanySwaggerDto {
    name;
    website;
    description;
    industry;
    size;
}
exports.CreateCompanySwaggerDto = CreateCompanySwaggerDto;
__decorate([
    (0, swagger_1.ApiProperty)({
        description: "Nome da empresa",
        example: "Nelson Heusi Group",
    }),
    __metadata("design:type", String)
], CreateCompanySwaggerDto.prototype, "name", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({
        description: "Site da empresa",
        example: "https://www.nelsonheusi.com.br",
    }),
    __metadata("design:type", String)
], CreateCompanySwaggerDto.prototype, "website", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({
        description: "Descrição da empresa",
        example: "Consultoria especializada em comércio exterior e tecnologia.",
    }),
    __metadata("design:type", String)
], CreateCompanySwaggerDto.prototype, "description", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({
        description: "Indústria / setor da empresa",
        example: "Tecnologia / Comércio Exterior",
    }),
    __metadata("design:type", String)
], CreateCompanySwaggerDto.prototype, "industry", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({
        description: "Porte da empresa",
        enum: client_1.CompanySize,
        example: client_1.CompanySize.MEDIUM,
    }),
    __metadata("design:type", String)
], CreateCompanySwaggerDto.prototype, "size", void 0);
//# sourceMappingURL=create-company.swagger.dto.js.map