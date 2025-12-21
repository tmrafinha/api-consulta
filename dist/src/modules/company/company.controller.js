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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CompanyController = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const platform_express_1 = require("@nestjs/platform-express");
const company_service_1 = require("./company.service");
const create_company_schema_1 = require("./schemas/create-company.schema");
const update_company_schema_1 = require("./schemas/update-company.schema");
const zod_validation_pipe_1 = require("../../common/pipes/zod-validation.pipe");
const roles_decorator_1 = require("../auth/decorators/roles.decorator");
const client_1 = require("@prisma/client");
const company_query_schema_1 = require("./schemas/company-query.schema");
const create_company_swagger_dto_1 = require("./swagger/create-company.swagger.dto");
const update_company_swagger_dto_1 = require("./swagger/update-company.swagger.dto");
const company_query_swagger_dto_1 = require("./swagger/company-query.swagger.dto");
let CompanyController = class CompanyController {
    service;
    constructor(service) {
        this.service = service;
    }
    create(dto) {
        return this.service.create(dto);
    }
    update(id, dto) {
        return this.service.update(id, dto);
    }
    get(id) {
        return this.service.findById(id);
    }
    getAll(query) {
        return this.service.findAll(query);
    }
    delete(id) {
        return this.service.delete(id);
    }
    uploadLogo(id, file) {
        return this.service.uploadLogo(id, file);
    }
    getLogo(id) {
        return this.service.getLogoUrl(id);
    }
    removeLogo(id) {
        return this.service.removeLogo(id);
    }
};
exports.CompanyController = CompanyController;
__decorate([
    (0, common_1.Post)(),
    (0, swagger_1.ApiBody)({ type: create_company_swagger_dto_1.CreateCompanySwaggerDto }),
    __param(0, (0, common_1.Body)(new zod_validation_pipe_1.ZodValidationPipe(create_company_schema_1.CreateCompanySchema))),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], CompanyController.prototype, "create", null);
__decorate([
    (0, roles_decorator_1.Roles)(client_1.UserRole.ADMIN, client_1.UserRole.COMPANY_ADMIN),
    (0, common_1.Put)(":id"),
    (0, swagger_1.ApiBody)({ type: update_company_swagger_dto_1.UpdateCompanySwaggerDto }),
    __param(0, (0, common_1.Param)("id")),
    __param(1, (0, common_1.Body)(new zod_validation_pipe_1.ZodValidationPipe(update_company_schema_1.UpdateCompanySchema))),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", void 0)
], CompanyController.prototype, "update", null);
__decorate([
    (0, common_1.Get)(":id"),
    __param(0, (0, common_1.Param)("id")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], CompanyController.prototype, "get", null);
__decorate([
    (0, common_1.Get)(),
    (0, swagger_1.ApiQuery)({ type: company_query_swagger_dto_1.CompanyQuerySwaggerDto }),
    __param(0, (0, common_1.Query)(new zod_validation_pipe_1.ZodValidationPipe(company_query_schema_1.CompanyQuerySchema))),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], CompanyController.prototype, "getAll", null);
__decorate([
    (0, roles_decorator_1.Roles)(client_1.UserRole.ADMIN),
    (0, common_1.Delete)(":id"),
    __param(0, (0, common_1.Param)("id")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], CompanyController.prototype, "delete", null);
__decorate([
    (0, common_1.Post)(":id/logo"),
    (0, common_1.UseInterceptors)((0, platform_express_1.FileInterceptor)("file")),
    (0, swagger_1.ApiConsumes)("multipart/form-data"),
    (0, swagger_1.ApiBody)({
        schema: {
            type: "object",
            properties: {
                file: {
                    type: "string",
                    format: "binary",
                },
            },
            required: ["file"],
        },
    }),
    __param(0, (0, common_1.Param)("id")),
    __param(1, (0, common_1.UploadedFile)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", void 0)
], CompanyController.prototype, "uploadLogo", null);
__decorate([
    (0, common_1.Get)(":id/logo"),
    __param(0, (0, common_1.Param)("id")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], CompanyController.prototype, "getLogo", null);
__decorate([
    (0, roles_decorator_1.Roles)(client_1.UserRole.ADMIN, client_1.UserRole.COMPANY_ADMIN),
    (0, common_1.Delete)(":id/logo"),
    __param(0, (0, common_1.Param)("id")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], CompanyController.prototype, "removeLogo", null);
exports.CompanyController = CompanyController = __decorate([
    (0, swagger_1.ApiTags)("Companies"),
    (0, common_1.Controller)("companies"),
    __metadata("design:paramtypes", [company_service_1.CompanyService])
], CompanyController);
//# sourceMappingURL=company.controller.js.map