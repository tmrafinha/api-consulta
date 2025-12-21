"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const config_1 = require("@nestjs/config");
const nestjs_pino_1 = require("nestjs-pino");
const users_module_1 = require("./modules/users/users.module");
const audit_module_1 = require("./modules/audit/audit.module");
const pino_config_1 = require("./common/logging/pino.config");
const auth_module_1 = require("./modules/auth/auth.module");
const core_1 = require("@nestjs/core");
const jwt_auth_guard_1 = require("./modules/auth/guards/jwt-auth.guard");
const roles_guard_1 = require("./modules/auth/guards/roles.guard");
const company_module_1 = require("./modules/company/company.module");
const job_module_1 = require("./modules/jobs/job.module");
const application_module_1 = require("./modules/applications/application.module");
const resume_module_1 = require("./modules/resumes/resume.module");
const dashboard_module_1 = require("./modules/dashboards/dashboard.module");
let AppModule = class AppModule {
};
exports.AppModule = AppModule;
exports.AppModule = AppModule = __decorate([
    (0, common_1.Module)({
        imports: [
            config_1.ConfigModule.forRoot({
                isGlobal: true,
                envFilePath: ".env",
            }),
            nestjs_pino_1.LoggerModule.forRoot(pino_config_1.pinoConfig),
            audit_module_1.AuditModule,
            users_module_1.UsersModule,
            auth_module_1.AuthModule,
            company_module_1.CompanyModule,
            job_module_1.JobModule,
            application_module_1.ApplicationModule,
            resume_module_1.ResumeModule,
            dashboard_module_1.DashboardModule
        ],
        controllers: [],
        providers: [
            {
                provide: core_1.APP_GUARD,
                useClass: jwt_auth_guard_1.JwtAuthGuard,
            },
            {
                provide: core_1.APP_GUARD,
                useClass: roles_guard_1.RolesGuard,
            },
        ],
    })
], AppModule);
//# sourceMappingURL=app.module.js.map