import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/config/prisma/prisma.service';
import { Job, Prisma } from '@prisma/client';
import { CreateJobDto } from './schemas/create-job.schema';

@Injectable()
export class JobRepository {
  constructor(private prisma: PrismaService) {}

  async create(dto: CreateJobDto): Promise<Job> {
    const { companyId, ...rest } = dto;

    const data: Prisma.JobCreateInput = {
      ...rest,
      company: {
        connect: { id: companyId },
      },
    };

    return this.prisma.job.create({ data });
  }

  async update(id: string, data: Prisma.JobUpdateInput) {
    return this.prisma.job.update({ where: { id }, data });
  }

  async findById(id: string) {
    return this.prisma.job.findUnique({
       where: { id },
       include: { company: true }
      });
  }

  async findBySlug(slug: string) {
    return this.prisma.job.findUnique({
      where: { slug }
    });
  }

  async delete(id: string) {
    return this.prisma.job.delete({ where: { id } });
  }

  async findAll(params: {
    pagination: { skip: number; take: number };
    filters: Prisma.JobWhereInput;
    sortBy: string;
    sortOrder: 'asc' | 'desc';
  }) {
    const { pagination, filters, sortBy, sortOrder } = params;

    const [items, total] = await this.prisma.$transaction([
      this.prisma.job.findMany({
        where: filters,
        skip: pagination.skip,
        take: pagination.take,
        orderBy: { [sortBy]: sortOrder },
        include: {
          company: true,
        },
      }),

      this.prisma.job.count({ where: filters }),
    ]);

    return { items, total };
  }

  async findAppliedJobIdsForCandidate(candidateId: string, jobIds: string[]): Promise<string[]> {
    if (!jobIds.length) return [];

    const applications = await this.prisma.application.findMany({
      where: {
        candidateId,
        jobId: { in: jobIds },
        deletedAt: null,
      },
      select: { jobId: true },
    });

    return applications.map(app => app.jobId);
  }
}
