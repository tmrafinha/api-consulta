import { Module } from "@nestjs/common";
import { ApplicationController } from "./application.controller";
import { ApplicationService } from "./application.service";
import { ApplicationRepository } from "./application.repository";
import { PrismaModule } from "src/config/prisma/prisma.module";

@Module({
  imports: [PrismaModule],
  controllers: [ApplicationController],
  providers: [ApplicationService, ApplicationRepository],
})
export class ApplicationModule {}