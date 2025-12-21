import { Module } from "@nestjs/common";
import { ResumeController } from "./resume.controller";
import { ResumeService } from "./resume.service";
import { ResumeRepository } from "./resume.repository";
import { PrismaModule } from "src/config/prisma/prisma.module";
import { MulterModule } from "@nestjs/platform-express";
import * as multer from "multer";
import { AwsS3Module } from "src/shared/storage/aws-s3.module";
import { S3StorageService } from "src/shared/storage/s3-storage.service";

@Module({
  imports: [
    PrismaModule,
    AwsS3Module,
    MulterModule.register({
      storage: multer.memoryStorage(),
    }),
  ],
  controllers: [ResumeController],
  providers: [ResumeService, ResumeRepository, S3StorageService],
})
export class ResumeModule {}