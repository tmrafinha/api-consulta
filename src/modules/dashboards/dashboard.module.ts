import { Module } from '@nestjs/common'
import { PrismaModule } from 'src/config/prisma/prisma.module'
import { DashboardController } from './dashboard.controller'
import { DashboardService } from './dashboard.service'
import { DashboardRepository } from './dashboard.repository'

@Module({
  imports: [PrismaModule],
  controllers: [DashboardController],
  providers: [DashboardService, DashboardRepository],
  exports: [DashboardService],
})
export class DashboardModule {}