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
exports.ResumeController = void 0;
const common_1 = require("@nestjs/common");
const platform_express_1 = require("@nestjs/platform-express");
const common_2 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const resume_upload_swagger_dto_1 = require("./swagger/resume-upload.swagger.dto");
const resume_query_swagger_dto_1 = require("./swagger/resume-query.swagger.dto");
const resume_service_1 = require("./resume.service");
const jwt_auth_guard_1 = require("../auth/guards/jwt-auth.guard");
const current_user_decorator_1 = require("../auth/decorators/current-user.decorator");
const resume_query_schema_1 = require("./schemas/resume-query.schema");
const zod_validation_pipe_1 = require("../../common/pipes/zod-validation.pipe");
let ResumeController = class ResumeController {
    service;
    constructor(service) {
        this.service = service;
    }
    upload(file, user) {
        return this.service.upload(file, user);
    }
    getAll(query, user) {
        return this.service.findAll(query, user);
    }
    getDownloadUrl(id, user) {
        return this.service.getDownloadUrl(id, user);
    }
    delete(id, user) {
        return this.service.delete(id, user);
    }
};
exports.ResumeController = ResumeController;
__decorate([
    (0, common_1.Post)(),
    (0, swagger_1.ApiConsumes)("multipart/form-data"),
    (0, swagger_1.ApiBody)({ type: resume_upload_swagger_dto_1.ResumeUploadSwaggerDto }),
    (0, common_1.UseInterceptors)((0, platform_express_1.FileInterceptor)("file")),
    __param(0, (0, common_1.UploadedFile)(new common_2.ParseFilePipe({
        validators: [
            new common_2.MaxFileSizeValidator({ maxSize: 15 * 1024 * 1024 }),
            new common_2.FileTypeValidator({ fileType: "application/pdf" }),
        ],
    }))),
    __param(1, (0, current_user_decorator_1.CurrentUser)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", void 0)
], ResumeController.prototype, "upload", null);
__decorate([
    (0, common_1.Get)(),
    (0, swagger_1.ApiQuery)({ type: resume_query_swagger_dto_1.ResumeQuerySwaggerDto }),
    __param(0, (0, common_1.Query)(new zod_validation_pipe_1.ZodValidationPipe(resume_query_schema_1.ResumeQuerySchema))),
    __param(1, (0, current_user_decorator_1.CurrentUser)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", void 0)
], ResumeController.prototype, "getAll", null);
__decorate([
    (0, common_1.Get)(":id/download"),
    __param(0, (0, common_1.Param)("id")),
    __param(1, (0, current_user_decorator_1.CurrentUser)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", void 0)
], ResumeController.prototype, "getDownloadUrl", null);
__decorate([
    (0, common_1.Delete)(":id"),
    __param(0, (0, common_1.Param)("id")),
    __param(1, (0, current_user_decorator_1.CurrentUser)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", void 0)
], ResumeController.prototype, "delete", null);
exports.ResumeController = ResumeController = __decorate([
    (0, swagger_1.ApiTags)("Resumes"),
    (0, common_1.Controller)("resumes"),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    __metadata("design:paramtypes", [resume_service_1.ResumeService])
], ResumeController);
//# sourceMappingURL=resume.controller.js.map