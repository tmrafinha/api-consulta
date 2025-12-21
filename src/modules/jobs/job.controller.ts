import {
  Body,
  Controller,
  Get,
  Param,
  Post,
  Put,
  Delete,
  Query,
} from '@nestjs/common';
import { ApiTags, ApiBody, ApiQuery } from '@nestjs/swagger';

import { JobService } from './job.service';
import { ZodValidationPipe } from 'src/common/pipes/zod-validation.pipe';

import { CreateJobSchema, CreateJobDto } from './schemas/create-job.schema';
import { UpdateJobSchema, UpdateJobDto } from './schemas/update-job.schema';
import { JobQuerySchema, JobQueryDto } from './schemas/job-query.schema';

import { CreateJobSwaggerDto } from './swagger/create-job.swagger.dto';
import { UpdateJobSwaggerDto } from './swagger/update-job.swagger.dto';
import { JobQuerySwaggerDto } from './swagger/job-query.swagger.dto';

import { CurrentUser } from '../auth/decorators/current-user.decorator';
import { JwtPayload } from '../auth/strategies/jwt.dto';

@ApiTags('Jobs')
@Controller('jobs')
export class JobController {
  constructor(private service: JobService) {}

  @Post()
  @ApiBody({ type: CreateJobSwaggerDto })
  create(
    @Body(new ZodValidationPipe(CreateJobSchema))
    dto: CreateJobDto,
  ) {
    return this.service.create(dto);
  }

  @Put(':id')
  @ApiBody({ type: UpdateJobSwaggerDto })
  update(
    @Param('id') id: string,
    @Body(new ZodValidationPipe(UpdateJobSchema))
    dto: UpdateJobDto,
  ) {
    return this.service.update(id, dto);
  }

  @Get(':id')
  get(@Param('id') id: string, @CurrentUser() user?: JwtPayload) {
    return this.service.findById(id, user);
  }

  @Get()
  @ApiQuery({ type: JobQuerySwaggerDto })
  getAll(
    @Query(new ZodValidationPipe(JobQuerySchema))
    query: JobQueryDto,
    @CurrentUser() user?: JwtPayload,
  ) {
    return this.service.findAll(query, user);
  }

  @Delete(':id')
  delete(@Param('id') id: string) {
    return this.service.delete(id);
  }
}
