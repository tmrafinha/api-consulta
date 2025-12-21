// src/modules/job/job.service.ts
import {
  Injectable,
  NotFoundException,
  ConflictException,
} from '@nestjs/common';
import { JobRepository } from './job.repository';
import { JobQueryDto } from './schemas/job-query.schema';
import { CreateJobDto } from './schemas/create-job.schema';
import { UpdateJobDto } from './schemas/update-job.schema';
import { buildPaginationResponse } from 'src/common/pagination/pagination.util';
import { JwtPayload } from '../auth/strategies/jwt.dto';

@Injectable()
export class JobService {
  constructor(private repo: JobRepository) {}

  async create(dto: CreateJobDto) {
    const jobWithSameSlug = await this.repo.findBySlug(dto.slug);
    if (jobWithSameSlug) throw new ConflictException('Slug já existe');

    return this.repo.create(dto);
  }

  async update(id: string, dto: UpdateJobDto) {
    const job = await this.repo.findById(id);
    if (!job) throw new NotFoundException('Vaga não encontrada.');

    if (dto.slug && dto.slug !== job.slug) {
      const exists = await this.repo.findBySlug(dto.slug);
      if (exists) {
        throw new ConflictException('Slug já está em uso.');
      }
    }

    return this.repo.update(id, dto);
  }

  async findById(id: string, user?: JwtPayload) {
    const job = await this.repo.findById(id);
    if (!job) throw new NotFoundException('Vaga não encontrada.');

    // marcar se o usuário já aplicou nessa vaga específica (opcional)
    if (!user) return job;

    const [appliedIds] = await Promise.all([
      this.repo.findAppliedJobIdsForCandidate(user.sub, [job.id]),
    ]);

    const appliedByCurrentUser = appliedIds.includes(job.id);
    return { ...job, appliedByCurrentUser };
  }

  async findAll(query: JobQueryDto, user?: JwtPayload) {
    const {
      page,
      limit,
      search,
      companyId,
      workModel,
      employmentType,
      location,
      minSalary,
      maxSalary,
      sortBy,
      sortOrder,
    } = query;

    const pagination = {
      skip: (page - 1) * limit,
      take: limit,
    };

    const filters: any = { isActive: true };

    if (companyId) filters.companyId = companyId;
    if (workModel) filters.workModel = workModel;
    if (employmentType) filters.employmentType = employmentType;
    if (location)
      filters.location = { contains: location, mode: 'insensitive' };
    if (minSalary) filters.salaryMin = { gte: minSalary };
    if (maxSalary) filters.salaryMax = { lte: maxSalary };

    if (search) {
      filters.OR = [
        { title: { contains: search, mode: 'insensitive' } },
        { description: { contains: search, mode: 'insensitive' } },
        { requirementsMust: { has: search } },
        { techStack: { has: search } },
      ];
    }

    const { items, total } = await this.repo.findAll({
      pagination,
      filters,
      sortBy,
      sortOrder,
    });

    // se não tiver usuário (listagem pública), devolve normal
    if (!user) {
      return buildPaginationResponse(items, total, page, limit);
    }

    // pega ids da página
    const jobIds = items.map(job => job.id);

    // busca candidaturas do usuário nessa página
    const appliedJobIds = await this.repo.findAppliedJobIdsForCandidate(
      user.sub,
      jobIds,
    );

    const appliedSet = new Set(appliedJobIds);

    const itemsWithApplied = items.map(job => ({
      ...job,
      appliedByCurrentUser: appliedSet.has(job.id),
    }));

    return buildPaginationResponse(itemsWithApplied, total, page, limit);
  }

  async delete(id: string) {
    const job = await this.repo.findById(id);
    if (!job) throw new NotFoundException('Vaga não encontrada.');

    return this.repo.delete(id);
  }
}