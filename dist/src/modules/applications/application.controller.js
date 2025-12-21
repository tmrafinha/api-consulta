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
exports.ApplicationController = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const application_service_1 = require("./application.service");
const create_application_schema_1 = require("./schemas/create-application.schema");
const zod_validation_pipe_1 = require("../../common/pipes/zod-validation.pipe");
const current_user_decorator_1 = require("../auth/decorators/current-user.decorator");
const jwt_auth_guard_1 = require("../auth/guards/jwt-auth.guard");
const application_query_schema_1 = require("./schemas/application-query.schema");
const create_application_swagger_dto_1 = require("./swagger/create-application.swagger.dto");
const application_query_swagger_dto_1 = require("./swagger/application-query.swagger.dto");
let ApplicationController = class ApplicationController {
    service;
    constructor(service) {
        this.service = service;
    }
    apply(dto, user) {
        return this.service.apply(dto, user);
    }
    getAll(query, user) {
        return this.service.findAll(query, user);
    }
};
exports.ApplicationController = ApplicationController;
__decorate([
    (0, common_1.Post)(),
    (0, swagger_1.ApiBody)({ type: create_application_swagger_dto_1.CreateApplicationSwaggerDto }),
    __param(0, (0, common_1.Body)(new zod_validation_pipe_1.ZodValidationPipe(create_application_schema_1.CreateApplicationSchema))),
    __param(1, (0, current_user_decorator_1.CurrentUser)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", void 0)
], ApplicationController.prototype, "apply", null);
__decorate([
    (0, common_1.Get)(),
    (0, swagger_1.ApiQuery)({ type: application_query_swagger_dto_1.ApplicationQuerySwaggerDto }),
    __param(0, (0, common_1.Query)(new zod_validation_pipe_1.ZodValidationPipe(application_query_schema_1.ApplicationQuerySchema))),
    __param(1, (0, current_user_decorator_1.CurrentUser)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", void 0)
], ApplicationController.prototype, "getAll", null);
exports.ApplicationController = ApplicationController = __decorate([
    (0, swagger_1.ApiTags)("Applications"),
    (0, common_1.Controller)("applications"),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    __metadata("design:paramtypes", [application_service_1.ApplicationService])
], ApplicationController);
//# sourceMappingURL=application.controller.js.map