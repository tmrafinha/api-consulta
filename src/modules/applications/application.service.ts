import {
  Injectable,
  ConflictException,
  NotFoundException,
  ForbiddenException,
} from '@nestjs/common';

import { ApplicationRepository } from './application.repository';
import { CreateApplicationDto } from './schemas/create-application.schema';

import { buildPaginationResponse } from 'src/common/pagination/pagination.util';
import { ApplicationQueryDto } from './schemas/application-query.schema';
import { JwtPayload } from '../auth/strategies/jwt.dto';

@Injectable()
export class ApplicationService {
  constructor(private repo: ApplicationRepository) {}

  async apply(dto: CreateApplicationDto, user: JwtPayload) {
    const alreadyApplied = await this.repo.findByCandidateAndJob(
      user.sub,
      dto.jobId,
    );

    if (alreadyApplied) {
      throw new ConflictException('Você já se candidatou a esta vaga.');
    }

    return this.repo.create(dto, user.sub);
  }

  async findAll(
    query: ApplicationQueryDto,
    user: JwtPayload,
  ) {
    const { page, limit, status, jobId, sortBy, sortOrder } =
      query;

    const pagination = {
      skip: (page - 1) * limit,
      take: limit,
    };

    const filters: any = {};

    filters.candidateId = user.sub;

    if (status) filters.status = status;
    if (jobId) filters.jobId = jobId;
    

    const { items, total } = await this.repo.findAll({
      pagination,
      filters,
      sortBy,
      sortOrder,
    });

    return buildPaginationResponse(items, total, page, limit);
  }
}
