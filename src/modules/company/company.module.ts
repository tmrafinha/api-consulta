import { Module } from "@nestjs/common";
import { CompanyController } from "./company.controller";
import { CompanyService } from "./company.service";
import { CompanyRepository } from "./company.repository";
import { PrismaModule } from "src/config/prisma/prisma.module";
import { AwsS3Module } from "src/shared/storage/aws-s3.module";
import { S3StorageService } from "src/shared/storage/s3-storage.service";
import { MulterModule } from "@nestjs/platform-express";
import * as multer from "multer";

@Module({
  imports: [
    PrismaModule,
    AwsS3Module,
    MulterModule.register({
      storage: multer.memoryStorage(),
    }),
  ],
  controllers: [CompanyController],
  providers: [CompanyService, CompanyRepository, S3StorageService],
  exports: [CompanyService, CompanyRepository],
})
export class CompanyModule {}