"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ResumeModule = void 0;
const common_1 = require("@nestjs/common");
const resume_controller_1 = require("./resume.controller");
const resume_service_1 = require("./resume.service");
const resume_repository_1 = require("./resume.repository");
const prisma_module_1 = require("../../config/prisma/prisma.module");
const platform_express_1 = require("@nestjs/platform-express");
const multer = require("multer");
const aws_s3_module_1 = require("../../shared/storage/aws-s3.module");
const s3_storage_service_1 = require("../../shared/storage/s3-storage.service");
let ResumeModule = class ResumeModule {
};
exports.ResumeModule = ResumeModule;
exports.ResumeModule = ResumeModule = __decorate([
    (0, common_1.Module)({
        imports: [
            prisma_module_1.PrismaModule,
            aws_s3_module_1.AwsS3Module,
            platform_express_1.MulterModule.register({
                storage: multer.memoryStorage(),
            }),
        ],
        controllers: [resume_controller_1.ResumeController],
        providers: [resume_service_1.ResumeService, resume_repository_1.ResumeRepository, s3_storage_service_1.S3StorageService],
    })
], ResumeModule);
//# sourceMappingURL=resume.module.js.map