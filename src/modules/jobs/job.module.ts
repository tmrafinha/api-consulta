import { Module } from "@nestjs/common";
import { JobController } from "./job.controller";
import { JobService } from "./job.service";
import { JobRepository } from "./job.repository";
import { PrismaModule } from "src/config/prisma/prisma.module";

@Module({
  imports: [PrismaModule],
  controllers: [JobController],
  providers: [JobService, JobRepository],
  exports: [JobService],
})
export class JobModule {}
