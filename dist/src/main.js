"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@nestjs/core");
const app_module_1 = require("./app.module");
const nestjs_pino_1 = require("nestjs-pino");
const common_1 = require("@nestjs/common");
const http_exception_filter_1 = require("./common/filters/http-exception.filter");
const audit_interceptor_1 = require("./common/interceptors/audit.interceptor");
const audit_service_1 = require("./modules/audit/audit.service");
const base_response_interceptor_1 = require("./common/interceptors/base-response.interceptor");
const swagger_1 = require("@nestjs/swagger");
async function bootstrap() {
    const app = await core_1.NestFactory.create(app_module_1.AppModule, {
        bufferLogs: true,
    });
    app.enableCors({
        origin: ['http://localhost:5173', 'http://localhost:5174'],
        methods: 'GET,HEAD,PUT,PATCH,POST,DELETE,OPTIONS',
        allowedHeaders: 'Content-Type, Authorization',
        credentials: true,
    });
    const logger = app.get(nestjs_pino_1.Logger);
    app.useLogger(logger);
    app.useGlobalPipes(new common_1.ValidationPipe({
        whitelist: true,
        forbidNonWhitelisted: true,
        transform: true,
    }));
    app.useGlobalInterceptors(new base_response_interceptor_1.BaseResponseInterceptor(logger));
    app.useGlobalFilters(new http_exception_filter_1.GlobalExceptionFilter(logger));
    const auditService = app.get(audit_service_1.AuditService);
    app.useGlobalInterceptors(new audit_interceptor_1.AuditInterceptor(auditService));
    const config = new swagger_1.DocumentBuilder()
        .setTitle("Helper AI API")
        .setDescription("API para gestão de usuários, empresas, vagas e currículos")
        .setVersion("1.0.0")
        .addBearerAuth({
        type: "http",
        scheme: "bearer",
        bearerFormat: "JWT",
        description: "Insira o token JWT no formato: Bearer <token>",
    }, "jwt")
        .build();
    const document = swagger_1.SwaggerModule.createDocument(app, config);
    swagger_1.SwaggerModule.setup("docs", app, document, {
        swaggerOptions: {
            persistAuthorization: true,
        },
    });
    app.enableShutdownHooks();
    await app.listen(3000);
    logger.log("🚀 API is running on http://localhost:3000");
    logger.log("📚 Swagger docs em http://localhost:3000/docs");
}
bootstrap();
//# sourceMappingURL=main.js.map