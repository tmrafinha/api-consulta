import { NestFactory } from "@nestjs/core";
import { AppModule } from "./app.module";
import { Logger } from "nestjs-pino";
import { ValidationPipe } from "@nestjs/common";
import { GlobalExceptionFilter } from "./common/filters/http-exception.filter";
import { AuditInterceptor } from "./common/interceptors/audit.interceptor";
import { AuditService } from "./modules/audit/audit.service";
import { BaseResponseInterceptor } from "./common/interceptors/base-response.interceptor";
import { SwaggerModule, DocumentBuilder } from "@nestjs/swagger";

async function bootstrap() {
  const app = await NestFactory.create(AppModule, {
    bufferLogs: true,
  });

  app.enableCors({
    origin: ['http://localhost:5173', 'http://localhost:5174'], 
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE,OPTIONS',
    allowedHeaders: 'Content-Type, Authorization',
    credentials: true,
  })

  const logger = app.get(Logger);
  app.useLogger(logger);

  // Pipes globais
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
      forbidNonWhitelisted: true,
      transform: true,
    }),
  );

  // Interceptores / filtros globais
  app.useGlobalInterceptors(new BaseResponseInterceptor(logger));
  app.useGlobalFilters(new GlobalExceptionFilter(logger));

  const auditService = app.get(AuditService);
  app.useGlobalInterceptors(new AuditInterceptor(auditService));

  // 🔹 Swagger config
  const config = new DocumentBuilder()
    .setTitle("Helper AI API")
    .setDescription("API para gestão de usuários, empresas, vagas e currículos")
    .setVersion("1.0.0")
    .addBearerAuth(
      {
        type: "http",
        scheme: "bearer",
        bearerFormat: "JWT",
        description: "Insira o token JWT no formato: Bearer <token>",
      },
      "jwt", // nome do esquema de auth (opcional, mas útil)
    )
    .build();

  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup("docs", app, document, {
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