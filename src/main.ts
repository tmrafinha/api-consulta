// src/main.ts
import { NestFactory } from '@nestjs/core'
import { AppModule } from './app.module'
import { Logger } from 'nestjs-pino'
import { ValidationPipe } from '@nestjs/common'
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger'

import { GlobalExceptionFilter } from './common/filters/http-exception.filter'
import { AuditInterceptor } from './common/interceptors/audit.interceptor'
import { AuditService } from './modules/audit/audit.service'
import { BaseResponseInterceptor } from './common/interceptors/base-response.interceptor'

async function bootstrap() {
  const app = await NestFactory.create(AppModule, { bufferLogs: true })

  const logger = app.get(Logger)
  app.useLogger(logger)

  // ----------------------------
  // CORS (dev + produção)
  // ----------------------------
  const frontendUrl = process.env.FRONTEND_URL // ex: https://seuapp.vercel.app

  const allowedOrigins = new Set<string>([
    'http://localhost:5173',
    'http://localhost:5174',
  ])

  if (frontendUrl) allowedOrigins.add(frontendUrl)

  app.enableCors({
    origin: (origin, callback) => {
      // requests sem Origin (ex: curl, health checks)
      if (!origin) return callback(null, true)

      if (allowedOrigins.has(origin)) return callback(null, true)

      return callback(new Error(`CORS bloqueado para a origem: ${origin}`), false)
    },
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE,OPTIONS',
    allowedHeaders: 'Content-Type, Authorization',
    credentials: true, // mantenha true se você usa cookies; se não usa, pode colocar false
  })

  // ----------------------------
  // Pipes globais
  // ----------------------------
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
      forbidNonWhitelisted: true,
      transform: true,
    }),
  )

  // ----------------------------
  // Interceptors / filters globais
  // ----------------------------
  app.useGlobalInterceptors(new BaseResponseInterceptor(logger))
  app.useGlobalFilters(new GlobalExceptionFilter(logger))

  const auditService = app.get(AuditService)
  app.useGlobalInterceptors(new AuditInterceptor(auditService))

  // ----------------------------
  // Swagger
  // ----------------------------
  const swaggerConfig = new DocumentBuilder()
    .setTitle('Helper AI API')
    .setDescription('API para gestão de usuários, empresas, vagas e currículos')
    .setVersion('1.0.0')
    .addBearerAuth(
      {
        type: 'http',
        scheme: 'bearer',
        bearerFormat: 'JWT',
        description: 'Insira o token JWT no formato: Bearer <token>',
      },
      'jwt',
    )
    .build()

  const document = SwaggerModule.createDocument(app, swaggerConfig)
  SwaggerModule.setup('docs', app, document, {
    swaggerOptions: { persistAuthorization: true },
  })

  app.enableShutdownHooks()

  // ----------------------------
  // Render: usar PORT + bind
  // ----------------------------
  const port = Number(process.env.PORT) || 3000
  await app.listen(port, '0.0.0.0')

  logger.log(`🚀 API is running on port ${port}`)
  logger.log(`📚 Swagger docs: /docs`)
}

bootstrap()