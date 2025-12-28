"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@nestjs/core");
const app_module_1 = require("./app.module");
const nestjs_pino_1 = require("nestjs-pino");
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const http_exception_filter_1 = require("./common/filters/http-exception.filter");
const audit_interceptor_1 = require("./common/interceptors/audit.interceptor");
const audit_service_1 = require("./modules/audit/audit.service");
const base_response_interceptor_1 = require("./common/interceptors/base-response.interceptor");
async function bootstrap() {
    const app = await core_1.NestFactory.create(app_module_1.AppModule, { bufferLogs: true });
    const logger = app.get(nestjs_pino_1.Logger);
    app.useLogger(logger);
    const frontendUrl = process.env.FRONTEND_URL;
    const allowedOrigins = new Set([
        'http://localhost:5173',
        'http://localhost:5174',
    ]);
    if (frontendUrl)
        allowedOrigins.add(frontendUrl);
    app.enableCors({
        origin: (origin, callback) => {
            if (!origin)
                return callback(null, true);
            if (allowedOrigins.has(origin))
                return callback(null, true);
            return callback(new Error(`CORS bloqueado para a origem: ${origin}`), false);
        },
        methods: 'GET,HEAD,PUT,PATCH,POST,DELETE,OPTIONS',
        allowedHeaders: 'Content-Type, Authorization',
        credentials: true,
    });
    app.useGlobalPipes(new common_1.ValidationPipe({
        whitelist: true,
        forbidNonWhitelisted: true,
        transform: true,
    }));
    app.useGlobalInterceptors(new base_response_interceptor_1.BaseResponseInterceptor(logger));
    app.useGlobalFilters(new http_exception_filter_1.GlobalExceptionFilter(logger));
    const auditService = app.get(audit_service_1.AuditService);
    app.useGlobalInterceptors(new audit_interceptor_1.AuditInterceptor(auditService));
    const swaggerConfig = new swagger_1.DocumentBuilder()
        .setTitle('Helper AI API')
        .setDescription('API para gestão de usuários, empresas, vagas e currículos')
        .setVersion('1.0.0')
        .addBearerAuth({
        type: 'http',
        scheme: 'bearer',
        bearerFormat: 'JWT',
        description: 'Insira o token JWT no formato: Bearer <token>',
    }, 'jwt')
        .build();
    const document = swagger_1.SwaggerModule.createDocument(app, swaggerConfig);
    swagger_1.SwaggerModule.setup('docs', app, document, {
        swaggerOptions: { persistAuthorization: true },
    });
    app.enableShutdownHooks();
    const port = Number(process.env.PORT) || 3000;
    await app.listen(port, '0.0.0.0');
    logger.log(`🚀 API is running on port ${port}`);
    logger.log(`📚 Swagger docs: /docs`);
}
bootstrap();
//# sourceMappingURL=main.js.map