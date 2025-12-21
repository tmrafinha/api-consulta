// src/app.module.ts
import { Module } from "@nestjs/common";
import { ConfigModule } from "@nestjs/config";
import { LoggerModule } from "nestjs-pino";

// Módulos principais
import { UsersModule } from "./modules/users/users.module";
import { AuditModule } from "./modules/audit/audit.module";

// Config
import { pinoConfig } from "./common/logging/pino.config";
import { AuthModule } from "./modules/auth/auth.module";
import { APP_GUARD } from "@nestjs/core";
import { JwtAuthGuard } from "./modules/auth/guards/jwt-auth.guard";
import { RolesGuard } from "./modules/auth/guards/roles.guard";
import { CompanyModule } from "./modules/company/company.module";
import { JobModule } from "./modules/jobs/job.module";
import { ApplicationModule } from "./modules/applications/application.module";
import { ResumeModule } from "./modules/resumes/resume.module";
import { DashboardModule } from "./modules/dashboards/dashboard.module";

@Module({
  imports: [
    // ENV Global
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: ".env",
    }),

    // Logger Global
    LoggerModule.forRoot(pinoConfig),

    // Módulos da aplicação
    AuditModule,
    UsersModule,
    AuthModule,
    CompanyModule,
    JobModule,
    ApplicationModule,
    ResumeModule,
    DashboardModule
  ],
  controllers: [],
  providers: [
    {
      provide: APP_GUARD,
      useClass: JwtAuthGuard,
    },
    {
      provide: APP_GUARD,
      useClass: RolesGuard,  
    },
  ],
})
export class AppModule {}
