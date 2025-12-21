"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CompanyModule = void 0;
const common_1 = require("@nestjs/common");
const company_controller_1 = require("./company.controller");
const company_service_1 = require("./company.service");
const company_repository_1 = require("./company.repository");
const prisma_module_1 = require("../../config/prisma/prisma.module");
const aws_s3_module_1 = require("../../shared/storage/aws-s3.module");
const s3_storage_service_1 = require("../../shared/storage/s3-storage.service");
const platform_express_1 = require("@nestjs/platform-express");
const multer = require("multer");
let CompanyModule = class CompanyModule {
};
exports.CompanyModule = CompanyModule;
exports.CompanyModule = CompanyModule = __decorate([
    (0, common_1.Module)({
        imports: [
            prisma_module_1.PrismaModule,
            aws_s3_module_1.AwsS3Module,
            platform_express_1.MulterModule.register({
                storage: multer.memoryStorage(),
            }),
        ],
        controllers: [company_controller_1.CompanyController],
        providers: [company_service_1.CompanyService, company_repository_1.CompanyRepository, s3_storage_service_1.S3StorageService],
        exports: [company_service_1.CompanyService, company_repository_1.CompanyRepository],
    })
], CompanyModule);
//# sourceMappingURL=company.module.js.map