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
exports.JobController = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const job_service_1 = require("./job.service");
const zod_validation_pipe_1 = require("../../common/pipes/zod-validation.pipe");
const create_job_schema_1 = require("./schemas/create-job.schema");
const update_job_schema_1 = require("./schemas/update-job.schema");
const job_query_schema_1 = require("./schemas/job-query.schema");
const create_job_swagger_dto_1 = require("./swagger/create-job.swagger.dto");
const update_job_swagger_dto_1 = require("./swagger/update-job.swagger.dto");
const job_query_swagger_dto_1 = require("./swagger/job-query.swagger.dto");
const current_user_decorator_1 = require("../auth/decorators/current-user.decorator");
let JobController = class JobController {
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
    get(id, user) {
        return this.service.findById(id, user);
    }
    getAll(query, user) {
        return this.service.findAll(query, user);
    }
    delete(id) {
        return this.service.delete(id);
    }
};
exports.JobController = JobController;
__decorate([
    (0, common_1.Post)(),
    (0, swagger_1.ApiBody)({ type: create_job_swagger_dto_1.CreateJobSwaggerDto }),
    __param(0, (0, common_1.Body)(new zod_validation_pipe_1.ZodValidationPipe(create_job_schema_1.CreateJobSchema))),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], JobController.prototype, "create", null);
__decorate([
    (0, common_1.Put)(':id'),
    (0, swagger_1.ApiBody)({ type: update_job_swagger_dto_1.UpdateJobSwaggerDto }),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)(new zod_validation_pipe_1.ZodValidationPipe(update_job_schema_1.UpdateJobSchema))),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", void 0)
], JobController.prototype, "update", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, current_user_decorator_1.CurrentUser)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", void 0)
], JobController.prototype, "get", null);
__decorate([
    (0, common_1.Get)(),
    (0, swagger_1.ApiQuery)({ type: job_query_swagger_dto_1.JobQuerySwaggerDto }),
    __param(0, (0, common_1.Query)(new zod_validation_pipe_1.ZodValidationPipe(job_query_schema_1.JobQuerySchema))),
    __param(1, (0, current_user_decorator_1.CurrentUser)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", void 0)
], JobController.prototype, "getAll", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], JobController.prototype, "delete", null);
exports.JobController = JobController = __decorate([
    (0, swagger_1.ApiTags)('Jobs'),
    (0, common_1.Controller)('jobs'),
    __metadata("design:paramtypes", [job_service_1.JobService])
], JobController);
//# sourceMappingURL=job.controller.js.map