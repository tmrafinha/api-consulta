import { Controller, Get, UseGuards } from '@nestjs/common'
import { ApiTags } from '@nestjs/swagger'

import { DashboardService } from './dashboard.service'
import { CurrentUser } from '../auth/decorators/current-user.decorator'
import { JwtPayload } from '../auth/strategies/jwt.dto'
import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard'

@ApiTags('Dashboards')
@Controller('dashboards')
@UseGuards(JwtAuthGuard)
export class DashboardController {
  constructor(private service: DashboardService) {}

  @Get('applications/overview')
  getApplicationsOverview(@CurrentUser() user: JwtPayload) {
    return this.service.getApplicationsOverview(user)
  }
}